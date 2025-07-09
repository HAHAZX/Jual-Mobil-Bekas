import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ini akan nonaktifkan error lint di Vercel build
  },
  // tambahkan config lain di bawah ini kalau ada
};

export default nextConfig;
