"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TechLoader from "../components/TechLoader";
import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasLoaderPlayed = sessionStorage.getItem("loaderPlayed");

    if (!hasLoaderPlayed) {
      sessionStorage.setItem("loaderPlayed", "true");
      setShowLoader(true);
      setTimeout(() => setShowLoader(false), 4000);
    } else {
      setShowLoader(false);
    }
  }, []);

  return (
    <html lang="en">
      <body className="bg-black text-white">
        {showLoader && (
          <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
            <TechLoader onComplete={() => setShowLoader(false)} />
          </div>
        )}

        {!showLoader && (
          <>
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  );
};

export default RootLayout;