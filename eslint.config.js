// eslint.config.js
import antfu from "@antfu/eslint-config";

export default antfu({
  typescript: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "double",
    semi: true,
  },
  ignores: [
    "**/fixtures",
    "**/dist/**",
    "**/node_modules/**",
  ],
  rules: {
    "no-console": 0,
    "ts/no-redeclare": "off",
  },
});
