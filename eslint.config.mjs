import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  ...pluginJs.configs.recommended,
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    ...pluginJs.configs.recommended.rules,
    "indent": ["warn", 2],
    "no-unused-vars": "warn",
    "camelcase": ["warn", { "properties": "always" }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }] 
  }
};
