import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Bring in Next.js + TypeScript ESLint rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rules & ignores
  {
    ignores: [
      "**/generated/*",   // ignore generated code
      "**/node_modules/*" // ignore dependencies
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "off" // disable unused vars check
    }
  }
];

export default eslintConfig;
