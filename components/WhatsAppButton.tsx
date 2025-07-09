'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function WhatsAppButton({ phone, text }: { phone: string; text: string }) {
  const encodedText = encodeURIComponent(text)
  const link = `https://api.whatsapp.com/send/?phone=6281555342614&text&type=phone_number&app_absent=0`

  return (  
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <Image src="/wa-logo.png" alt="WhatsApp" width={20} height={20} />
      <span className="hidden sm:inline">Hubungi via WhatsApp</span>
    </Link>
  )
}
