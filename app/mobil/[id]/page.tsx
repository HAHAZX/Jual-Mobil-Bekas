// app/mobil/[id]/page.tsx
type CarDetail = {
  name: string
  images: string[]
  description: string
  specs: {
    mesin: string
    transmisi: string
    tahun: number
    warna: string
  }
}

const carData: Record<string, CarDetail> = {
  'honda-crv': {
    name: 'Honda CRV',
    images: ['/mobil1-depan.jpg', '/mobil1-belakang.jpg', '/mobil1-samping.jpg', '/mobil1-dalam.jpg'],
    description: 'Ingin SUV nyaman, bertenaga, dan bergengsi? Honda CR-V Turbo 2020 ini jawabannya!',
    specs: {
      mesin: '1500 CC Turbo',
      transmisi: 'Matic',
      tahun: 2020,
      warna: 'Hitam',
    },
  },
  'toyota-avanza': {
    name: 'Toyota Avanza',
    images: ['/mobil2-depan.jpg', '/mobil2-belakang.jpg', '/mobil2-samping.jpg', '/mobil2-dalam.jpg'],
    description: 'Sedang cari mobil keluarga irit, tangguh, dan nyaman? Toyota Avanza 1.5 inilah pilihan yang tepat!',
    specs: {
      mesin: '1500 CC',
      transmisi: 'Matic',
      tahun: 2015,
      warna: 'Putih',
    },
  },
}

// ✅ Tambahkan ini untuk mendukung static route
export function generateStaticParams() {
  return Object.keys(carData).map((id) => ({ id }))
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = carData[params.id]

  if (!car) return <div className="p-4 text-red-500">Mobil tidak ditemukan.</div>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
      <p className="mb-6 text-gray-700">{car.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {car.images.map((img, i) => (
          <img key={i} src={img} alt={`${car.name} ${i}`} className="w-full h-48 object-cover rounded-lg" />
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Spesifikasi</h2>
        <ul className="space-y-1 text-gray-800">
          <li><strong>Mesin:</strong> {car.specs.mesin}</li>
          <li><strong>Transmisi:</strong> {car.specs.transmisi}</li>
          <li><strong>Tahun:</strong> {car.specs.tahun}</li>
          <li><strong>Warna:</strong> {car.specs.warna}</li>
        </ul>
      </div>
    </div>
  )
}
