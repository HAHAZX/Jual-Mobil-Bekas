// app/page.tsx
import Link from 'next/link'
import Image from 'next/image'

import CarCard from '../components/CarCard'

const cars = [
  {
    image: '/mobil1.jpg',
    name: 'Honda CRV',
    price: 'Rp 335.000.000',
    location: 'Jakarta Timur',
  },
  {
    image: '/mobil2.jpg',
    name: 'Toyota Avanza',
    price: 'Rp 120.000.000',
    location: 'Jakarta Timur',
  },
]

export default function HomePage() {
  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Jual Mobil Bekas Berkualitas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {cars.map((car, idx) => (
          <CarCard key={idx} {...car} />
        ))}
      </div>

      {/* Tombol WhatsApp */}
      <Link
        href="https://api.whatsapp.com/send/?phone=6281555342614&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <Image src="/wa-logo.png" alt="WhatsApp" width={20} height={20} />
        <span className="hidden sm:inline">Hubungi via WhatsApp</span>
      </Link>
    </main>
  )
}