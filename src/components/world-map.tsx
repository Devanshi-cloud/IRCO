"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface CountryData {
  name: string
  capital: string
  population: string
  area: string
  language: string
  currency: string
}

const countryData: Record<string, CountryData> = {
  DE: {
    name: "Germany",
    capital: "Berlin",
    population: "83 million",
    area: "357,022 km²",
    language: "German",
    currency: "Euro (€)",
  },
  US: {
    name: "United States",
    capital: "Washington, D.C.",
    population: "331 million",
    area: "9,833,517 km²",
    language: "English",
    currency: "US Dollar ($)",
  },
  FR: {
    name: "France",
    capital: "Paris",
    population: "67 million",
    area: "643,801 km²",
    language: "French",
    currency: "Euro (€)",
  },
  BR: {
    name: "Brazil",
    capital: "Brasília",
    population: "215 million",
    area: "8,514,877 km²",
    language: "Portuguese",
    currency: "Brazilian Real (R$)",
  },
  CN: {
    name: "China",
    capital: "Beijing",
    population: "1.4 billion",
    area: "9,596,961 km²",
    language: "Mandarin Chinese",
    currency: "Chinese Yuan (¥)",
  },
  IN: {
    name: "India",
    capital: "New Delhi",
    population: "1.4 billion",
    area: "3,287,263 km²",
    language: "Hindi, English",
    currency: "Indian Rupee (₹)",
  },
  AU: {
    name: "Australia",
    capital: "Canberra",
    population: "26 million",
    area: "7,692,024 km²",
    language: "English",
    currency: "Australian Dollar (A$)",
  },
  CA: {
    name: "Canada",
    capital: "Ottawa",
    population: "38 million",
    area: "9,984,670 km²",
    language: "English, French",
    currency: "Canadian Dollar (C$)",
  },
}

export default function WorldMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleCountryClick = (countryId: string, countryName?: string) => {
    // Use the country name from the path element or fallback to countryData
    const country = countryData[countryId] || {
      name: countryName || countryId,
      capital: "N/A",
      population: "N/A",
      area: "N/A",
      language: "N/A",
      currency: "N/A",
    }

    setSelectedCountry(countryId)
    setIsPanelOpen(true)
  }

  const closeSidePanel = () => {
    setIsPanelOpen(false)
    setSelectedCountry(null)
  }

  const currentCountryData = selectedCountry ? countryData[selectedCountry] : null

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white poppins overflow-hidden">
      {/* Map Container */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto p-4">
          <svg
            baseProfile="tiny"
            fill="#374151"
            height="600"
            stroke="#a78bfa"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.2"
            version="1.2"
            viewBox="0 0 2000 857"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto rounded-lg shadow-lg bg-gray-800 border border-indigo-500 animate-glow"
          >
            {/* Afghanistan */}
            <path
              d="M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z"
              id="AF"
              className="fill-indigo-400 hover:fill-indigo-300 cursor-pointer transition-colors duration-200"
              onClick={() => handleCountryClick("AF", "Afghanistan")}
            />

            {/* Germany */}
            <path
              d="M1053.9 158.9l1.4 3.1-1.2 1.7 1.9 2.1 1.5 3.3-0.2 2.2 2.4 3.9-2.2 0.6-1.3-0.7-1.1 1.2-3.5 1.2-1.7 1.6-3.4 1.3 1 1.8 0.7 2.7 2.6 1.5 3 2.6-1.6 2.9-1.7 0.8 1 4.1-0.4 1.1-1.7-1.3-2.4-0.2-3.5 1.1-4.4-0.3-0.6 1.7-2.7-1.7-1.4 0.3-5.5-1.9-1 1.3-4.2 0 0.4-4.5 2.4-4.2-7.2-1.2-2.4-1.6 0.2-2.7-1-1.4 0.4-4.2-1.1-6.5 2.9 0 1.2-2.3 0.9-5.6-0.9-2.1 0.8-1.3 4-0.3 1 1.3 3.1-3-1.3-2.3-0.4-3.4 3.7 0.8 2.9-0.9 0.3 2.3 4.9 1.4 0.1 2.2 4.7-1.2 2.6-1.6 5.6 2.4 2.4 1.9z"
              id="DE"
              className="fill-indigo-400 hover:fill-indigo-300 cursor-pointer transition-colors duration-200"
              onClick={() => handleCountryClick("DE", "Germany")}
            />

            {/* Brazil */}
            <path
              d="M665.8 489.6l3.1 0.6 0.6-1.4-1-1.2 0.6-1.9 2.3 0.6 2.7-0.7 3.2 1.4 2.5 1.3 1.7-1.7 1.3 0.2 0.8 1.8 2.7-0.4 2.2-2.5 1.8-4.7 3.4-5.9 2-0.3 1.3 3.6 3 11.2 3.1 1.1 0.1 4.4-4.3 5.3 1.7 1.9 10.1 1 0.2 6.5 4.3-4.2 7.1 2.3 9.5 3.9 2.8 3.7-0.9 3.6 6.6-2 11 3.4 8.5-0.2 8.4 5.3 7.4 7.2 4.4 1.8 4.8 0.3 2.1 2 2 8.2 1.1 3.9-2.1 10.6-2.7 4.2-7.7 8.9-3.4 7.3-4 5.5-1.4 0.2-1.3 4.7 0.9 12-1.1 9.9-0.3 4.2-1.6 2.6-0.5 8.6-5.2 8.3-0.5 6.7-4.3 2.7-1.1 3.9-6 0-8.5 2.4-3.7 2.9-6 1.9-6.1 5.1-4.1 6.4-0.3 4.8 1.3 3.5-0.3 6.5-0.8 3.1-3.4 3.6-4.5 11.3-4 5-3.2 3.1-1.5 6.1-2.9 3.6-2.1-3.6 1.8-3.1-3.8-4.3-4.8-3.6-6.3-4.1-1.9 0.2-6.3-5-3.4 0.7 6-8.7 5.3-6.3 3.3-2.6 4.2-3.5-0.4-5.1-3.2-3.8-2.6 1.3 0.7-3.7 0.3-3.8-0.3-3.6-2.1-1.1-2 1-2.1-0.3-0.8-2.4-1.1-5.9-1.2-1.9-3.9-1.8-2.2 1.3-5.9-1.3-0.4-8.7-2-3.5 1.6-1.4-0.8-3.6 1.3-2.8 0.6-5.1-1.7-4-3.2-1.8-0.8-2.5 0.5-3.7-10.7-0.3-2.8-7.5 1.7-0.1-0.3-2.7-1.2-1.9-0.5-3.7-3.4-1.9-3.5 0-2.5-1.8-3.9-1.3-2.3-2.4-6.4-1.1-6.5-5.7 0.3-4.3-0.9-2.5 0.4-4.8-7.3 1.1-2.9 2.4-4.8 2.6-1.1 1.9-2.9 0.2-4.2-0.6-3.2 1.1-2.6-0.7-0.1-9.7-4.4 3.7-5-0.1-2.3-3.5-3.8-0.3 1-2.8-3.3-3.9-2.6-5.8 1.5-1.1-0.2-2.8 3.4-1.8-0.7-3.5 1.4-2.2 0.3-3 6.3-4.4 4.6-1.2 0.8-1 5.1 0.3 2.2-17.6 0.1-2.8-0.9-3.6-2.6-2.4 0.1-4.7 3.2-1 1.1 0.7 0.2-2.5-3.3-0.7 0-4 11 0.2 1.9-2.3 1.6 2.1 1 3.8 1.1-0.8 3.1 3.4 4.4-0.4 1.1-2 4.2-1.5 2.4-1.1 0.7-2.7 4.1-1.8-0.3-1.4-4.8-0.5-0.7-4.1 0.3-4.3-2.5-1.6 1.1-0.6 4.1 0.8 4.5 1.6 1.7-1.5 4.1-1 6.4-2.4 2.1-2.5-0.7-1.8 3-0.2 1.2 1.4-0.8 2.9 2 0.9 1.2 3-1.6 2.3-1 5.4 1.4 3.3 0.3 3 3.5 3 2.8 0.3 0.6-1.3 1.8-0.3 2.6-1.1 1.8-1.7 3.2 0.6 1.3-0.3z"
              id="BR"
              className="fill-purple-400 hover:fill-purple-300 cursor-pointer transition-colors duration-200"
              onClick={() => handleCountryClick("BR", "Brazil")}
            />

            {/* China */}
            <path
              d="M1625.6 185.5l9 4.5 6 5.8 7.6 0 1.6-2.4 6.9-1.9 1.3 5.7-0.3 2.3 2.8 6.8 0.6 6.2-6.9-1.1-3.1 2.4 4.7 5.4 4.9 7.5-2.5 0.1 1.7 3.3-5.5-3.9 0 3.6-6.4 1.9 2.7 3.4-3.4-0.2 1.9 3.9-4.1 3.4-3.9 4.1-6.6 1.8-5.4 2.8-2.8 2.2 0.9 2.5-7.1 4.1-4.6 4.8-5.1 5.9-6.4 6.5-5.6 0.7-2.7 2.8-2.3-2.1-3.1 2.9-7.1 1.4-5.8-1.4-1.3 8.5-1.2-1.5-4.8-0.7-2.7 1.8-3.6-1.4-4.5-0.7-5.4-1.9-4.4-5.6-4.9-4.5-2-4.5 0.2-6.4-1.5-2.9-0.4-5.4 5.3-5.6 0.4-6.7 1-5.8 5.3 3.8 1.9 1.1 3.2-0.2 0.8-2.2 4.3 0.4 5 5.2 1.3 6.4 5.3 5.6 0.4 5.4-1.5 2.9 5 2.5 2 4.4 5.3 2.3-2 4.4-5-2.5-5.3-0.9-7.1 1.2-3.1 5.3 2.1 7.8 3.5 6.6 2.6 3.4 4.8 0.9 4.6-2.6 5.9-0.5-2.8-3.8 9-5-0.1-7.7-1.8-4.3 5.3-2.3 2 4.4 5 2.5 5.3 0.9 7.1-1.2 3.1-5.3-2.1-7.8-3.5-6.6-2.6-3.4-4.8-0.9-4.6 2.6-5.9 0.5 2.8 3.8-9 5 0.1 7.7 1.8 4.3z"
              id="CN"
              className="fill-indigo-500 hover:fill-indigo-400 cursor-pointer transition-colors duration-200"
              onClick={() => handleCountryClick("CN", "China")}
            />

            {/* India */}
            <path
              d="M1427.6 308l-2.8 3-0.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7 0.9 3.8 3.2 4.3 0.6 6.9 1.5 4.6-0.1 0.1-2.5-1.5-4.1-0.2-2.7 3.1-1.4 1.5 5.1 0.4 1.2 5.5 2.5 3.2-1 4.7 0.4 4.5-0.2-0.5-3.9-2.6-2.1 4.2-0.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4 0.9 3.7-2 5.4 0.3 3.1-1.6 5.3-4.6-1.5 0.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2-1.5 0-0.3 4.2-3.6-3.4 1.2-3.6 2.4-0.4 1.6-5.4-3.4-1.1-5.1 0.1-5.4-0.9-1.2-4.5-2.7-0.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-0.9 2.3 3.7 1.7-0.3 3.9 2.6 4.8 1.6 5.3-0.5 2.4-3.8-0.1-6.6 1.3 0.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2 0.3 2.9-2.6 1.6-4.8 2.3-2.6 0.3-1.2 4.9 1.9 8.4 0.7 5.3-1.9 6.1 0.7 10.9-2.9 0.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-0.8-7.8-1.7-6-7.7 3.9-4-0.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3 12.1 0-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5 0.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6 0.8 5.2 3 3.3 0.6 3.3-4.1-0.9 3.2 7.1 6.2 4 8.6 4.5z"
              id="IN"
              className="fill-purple-500 hover:fill-purple-400 cursor-pointer transition-colors duration-200"
              onClick={() => handleCountryClick("IN", "India")}
            />

            {/* Australia */}
            <path
              d="M1793.5 590.2l1.2 5 4-2.4 1.4 2.7 2.3 2.5-1.1 2.9 0.2 5.5 0.2 3.2 1.3 0.8 0.4 5.5-1.2 3.3 0.8 4.3 5.4 3.4 3.2 3 3.2 2.8-1.3 1.6 2.3 4 0.5 7-1.4-1.4 1.5 3.3 1.6-0.9-0.7 6.6 2.9 3.5 2.9 2.3 2.8 5.2 0 5.2-1.9 4.7-1.7 3.9-4.5 5.7-3.5 4.4-4.9 5.8-5.9 3.2-3.4 4.9-4.6 2.8-3.9 4.8-4.3 2.9-4.7 5.6-3.8 2.8-4.2 4.8 0.2 1.9-4.1 1.7-6.3 2.3-3.6 3.5-4.6 1.6-5.4 2.8-3.3-0.5-2.9-1.9 1.9-2.6-3.4-3.8 1.2-1.7-3.1-4.9 1.7-1.4-5.8-2.8 4.3-2.7-4.9-2.5 1.4-2.3-3.1-2.7 2.2-1.2-6.9-6.6 6.5-2.4 5.3-4 3.7-4.5 2.4-4.6 1.9-4.6-0.8-3.1-0.5-10 0.2-5.7-0.5-6.4 2.8 0.5-0.9-2.8 3.7-4.6 2.5-4.6-0.1-6.2-3.4-1.9-2.1 1.9-3.9 0.2-1.5 0.8-6.7-1.8-2.2 0.2-1.5 6.1 0.6 7.3 0.4 0 1.9 2.1 2.2 4.6 0.1 8.3 2.5 1.3-1.9 4.5 3.5 4-0.2 4.5-1.3 3 0.2 2.6 2.2-1.6-1.5 0.6 3.2-3.1-17.2 5.3 0.4 4.6 0.2 2.4 4.7-0.1 2.6 1.3 1.1 1.6 2.7 0.5 2.8 2-0.4 8.2-1.3 4.4-0.4 4.8 0.8 1.9-0.9 3.8-0.8 0.6-1.7 4.6-6.2 7.3 2.2 9 1.1 4.6-1.4 7.1 0.4 2.3 0.6 2.9 0.3 2.9 4.1 0z"
              className="fill-purple-200 hover:fill-purple-300 cursor-pointer transition-colors duration-200"
              onClick={() => handleCountryClick("AU", "Australia")}
            />

            {/* Add more countries as needed... */}
          </svg>
        </div>
      </div>

      {/* Side Panel */}
      {isPanelOpen && currentCountryData && (
        <div className="fixed top-0 right-0 w-80 h-full bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-2xl transform transition-transform duration-300 ease-in-out z-50 border-l border-indigo-500">
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">{currentCountryData.name}</h1>
              <button
                onClick={closeSidePanel}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Capital City:</span>
                    <span className="ml-2 text-gray-600">{currentCountryData.capital}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Population:</span>
                    <span className="ml-2 text-gray-600">{currentCountryData.population}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Area:</span>
                    <span className="ml-2 text-gray-600">{currentCountryData.area}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Official Language:</span>
                    <span className="ml-2 text-gray-600">{currentCountryData.language}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Currency:</span>
                    <span className="ml-2 text-gray-600">{currentCountryData.currency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isPanelOpen && <div className="fixed inset-0 bg-black bg-opacity-25 z-40" onClick={closeSidePanel} />}
    </div>
  )
}