import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Ini untuk extend default dari Next.js + TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Tambahkan override custom rule di bawah ini
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
