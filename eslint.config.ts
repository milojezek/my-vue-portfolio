import stylisticPlugin from "@stylistic/eslint-plugin";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import importPlugin from "eslint-plugin-import";
import pluginVue from "eslint-plugin-vue";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  {
    plugins: {
      "@stylistic": stylisticPlugin,
      "import": importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.app.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"]
        },
        alias: {
          map: [
            ["@", "./src"],
            ["@components", "./src/components"],
            ["@assets", "./src/assets"]
          ],
          extensions: [".vue", ".js", ".jsx", ".ts", ".tsx", ".jpg", ".jpeg", ".png", ".svg", ".gif"]
        }
      }
    },
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0, maxBOF: 0 }],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],
      "allowImportExportEverywhere": 0,
      "@stylistic/semi": ["error", "always"],
      "@stylistic/computed-property-spacing": ["error", "never"],
      "@stylistic/arrow-spacing": ["error", { "before": true, "after": true }],
      "@stylistic/comma-spacing": ["error", { "before": false, "after": true }],
      // "@stylistic/max-len": ["error", { "code": 100 }],
      "@stylistic/key-spacing": ["error", { "beforeColon": false }],
      "@stylistic/keyword-spacing": ["error", { "before": true, "after": true }],
      "@stylistic/semi-spacing": "error",
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/comma-dangle": ["error", "only-multiline"],
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
      }],
      "import/no-unresolved": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "unknown",
          ],
          "newlines-between": "always-and-inside-groups",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "function-paren-newline": ["error", { "minItems": 4 }],
      
      // Vue template/HTML specific formatting rules
      "vue/html-indent": ["error", 2, {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }],
      "vue/max-attributes-per-line": ["error", {
        "singleline": {
          "max": 4
        },
        "multiline": {
          "max": 1
        }
      }],
      "vue/first-attribute-linebreak": ["error", {
        "singleline": "ignore",
        "multiline": "below"
      }],
      "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "always"
      }],
      "vue/html-closing-bracket-spacing": ["error", {
        "startTag": "never",
        "endTag": "never",
        "selfClosingTag": "always"
      }],
      "vue/multiline-html-element-content-newline": ["error", {
        "ignoreWhenEmpty": true,
        "allowEmptyLines": false
      }],
      "vue/singleline-html-element-content-newline": ["error", {
        "ignoreWhenNoAttributes": true,
        "ignoreWhenEmpty": true
      }],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        }
      }],
      "vue/attribute-hyphenation": ["error", "always"],
      "vue/html-quotes": ["error", "double", { "avoidEscape": true }],
      "vue/no-spaces-around-equal-signs-in-attribute": ["error"]
    },
  },
);
