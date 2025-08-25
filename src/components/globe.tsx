"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../../data/globe.json";
import * as THREE from 'three';

// Extend Three.js elements for react-three-fiber
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & {
      new (): ThreeGlobe;
    };
  }
}

extend({ ThreeGlobe: ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

type Point = {
  size: number;
  order: number;
  color: string;
  lat: number;
  lng: number;
};

type RingData = {
  lat: number;
  lng: number;
  color: string;
};

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const ringIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  // Initialize globe only once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      const globe = new ThreeGlobe();
      globeRef.current = globe;
      groupRef.current.add(globe);
      setIsInitialized(true);
    }
  }, []);

  // Build material when globe is initialized or when relevant props change
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    try {
      const globeMaterial = globeRef.current.globeMaterial() as THREE.MeshPhongMaterial;
      if (globeMaterial) {
        globeMaterial.color = new Color(defaultProps.globeColor);
        globeMaterial.emissive = new Color(defaultProps.emissive);
        globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
        globeMaterial.shininess = defaultProps.shininess;
      }
    } catch (error) {
      console.error("Error setting globe material:", error);
    }
  }, [
    isInitialized,
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ]);

  // Build data when globe is initialized or when data changes
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    try {
      const points: Point[] = [];
      
      // Generate points from arc data
      data.forEach((arc) => {
        points.push(
          {
            size: defaultProps.pointSize,
            order: arc.order,
            color: arc.color,
            lat: arc.startLat,
            lng: arc.startLng,
          },
          {
            size: defaultProps.pointSize,
            order: arc.order,
            color: arc.color,
            lat: arc.endLat,
            lng: arc.endLng,
          }
        );
      });

      // Remove duplicates based on lat/lng
      const filteredPoints = points.filter(
        (point, index, array) =>
          array.findIndex(
            (p) => p.lat === point.lat && p.lng === point.lng
          ) === index
      );

      // Configure globe polygons
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => defaultProps.polygonColor);

      // Configure arcs
      globeRef.current
        .arcsData(data)
        .arcStartLat((d) => (d as Position).startLat)
        .arcStartLng((d) => (d as Position).startLng)
        .arcEndLat((d) => (d as Position).endLat)
        .arcEndLng((d) => (d as Position).endLng)
        .arcColor((d) => (d as Position).color)
        .arcAltitude((d) => (d as Position).arcAlt)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((d) => (d as Position).order)
        .arcDashGap(15)
        .arcDashAnimateTime(() => defaultProps.arcTime);

      // Configure points
      globeRef.current
        .pointsData(filteredPoints)
        .pointColor((d) => (d as Point).color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(2);

      // Configure rings
      globeRef.current
        .ringsData([])
        .ringColor(() => defaultProps.polygonColor)
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
        );
    } catch (error) {
      console.error("Error configuring globe data:", error);
    }
  }, [
    isInitialized,
    data,
    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);

  // Handle rings animation with cleanup
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data.length) return;

    ringIntervalRef.current = setInterval(() => {
      if (!globeRef.current) return;

      try {
        const randomIndices = genRandomNumbers(
          0,
          data.length,
          Math.floor((data.length * 4) / 5)
        );

        const ringsData: RingData[] = data
          .filter((_, index) => randomIndices.includes(index))
          .map((d) => ({
            lat: d.startLat,
            lng: d.startLng,
            color: d.color,
          }));

        globeRef.current.ringsData(ringsData);
      } catch (error) {
        console.error("Error updating rings:", error);
      }
    }, 2000);

    return () => {
      if (ringIntervalRef.current) {
        clearInterval(ringIntervalRef.current);
        ringIntervalRef.current = null;
      }
    };
  }, [isInitialized, data]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (ringIntervalRef.current) {
        clearInterval(ringIntervalRef.current);
      }
    };
  }, []);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number): number[] {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) {
      arr.push(r);
    }
  }
  return arr;
}