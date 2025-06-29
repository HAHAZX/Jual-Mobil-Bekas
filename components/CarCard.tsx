import Link from 'next/link'

type CarCardProps = {
  image: string
  name: string
  price: string
  location: string
}

export default function CarCard({ image, name, price, location }: CarCardProps) {
  const slug = name.toLowerCase().replace(/\s+/g, '-')

  return (
    <Link href={`/mobil/${slug}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500">{location}</p>
          <p className="text-blue-600 font-bold">{price}</p>
        </div>
      </div>
    </Link>
  )
}
