'use client'

import React, { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import { FaMapMarkedAlt } from 'react-icons/fa'
import 'maplibre-gl/dist/maplibre-gl.css'

const locations: { name: string; coords: [number, number] }[] = [
  { name: 'Santa Marta', coords: [-74.2110, 11.2408] },
  { name: 'Barranquilla', coords: [-74.7964, 10.9685] },
  { name: 'Cartagena', coords: [-75.4794, 10.3910] },
  { name: 'Bogotá', coords: [-74.0721, 4.7110] }
]

const Locations = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [-74.3, 7.5],
      zoom: 5
    })

    locations.forEach(location => {
      const el = document.createElement('div')
      el.className = 'custom-marker'
      el.style.backgroundColor = '#be8f33'
      el.style.width = '16px'
      el.style.height = '16px'
      el.style.borderRadius = '50%'
      el.style.boxShadow = '0 0 0 2px white, 0 0 0 4px #be8f33'

      new maplibregl.Marker(el)
        .setLngLat(location.coords)
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(
            `<h4 style="color:#8f89aa; font-weight:500; margin:0">${location.name}</h4>`
          )
        )
        .addTo(map)
    })

    return () => map.remove()
  }, [])

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Map Section */}
        <div className="lg:col-span-7 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <div ref={mapContainerRef} className="w-full h-full" />
        </div>

        {/* Text Section */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h2 className="text-5xl font-bold text-[#0b2f61]">4</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0b2f61]">Locations</h3>
          <p className="text-base md:text-lg">
            Full market coverage with 23 offices located in every major shipping hub.
          </p>
          
          <a
            href="/locations"
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-white rounded-full bg-[#be8f33] text-white hover:bg-[#be8f33] hover:text-white transition-all duration-300 w-max"
          >
            <FaMapMarkedAlt size={20} />
            <span>Our Locations</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Locations
