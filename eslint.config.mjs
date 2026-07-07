import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  rules: {
    // === REACTIVATED (Phase 3) ===
    // These rules were previously "off" — now reactivated with fixes applied.
    "@typescript-eslint/no-unused-vars": ["warn", {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    }],
    "no-unused-vars": "off", // handled by @typescript-eslint/no-unused-vars
    "prefer-const": "warn",
    "no-debugger": "error",
    "no-unreachable": "error",
    "no-useless-escape": "warn",
    "no-redeclare": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-case-declarations": "warn",
    "no-fallthrough": "error",
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "no-irregular-whitespace": "error",

    // Console — warn in dev, allow with eslint-disable for intentional logging
    "no-console": ["warn", { allow: ["warn", "error"] }],

    // TypeScript — still relaxed but improving
    "@typescript-eslint/no-explicit-any": "off", // Phase 3.5: needs type refactor
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/no-unused-disable-directive": "off",

    // React rules
    "react-hooks/exhaustive-deps": "warn", // Phase 3: warn (not error) to avoid blocking
    "react-hooks/purity": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react-compiler/react-compiler": "off",

    // Next.js rules
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "off",
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "examples/**", "skills", "e2e/**", "playwright-report/**", "test-results/**", "Caddyfile", "*.config.mjs", "tailwind.config.ts", "postcss.config.mjs"]
}];

export default eslintConfig;
