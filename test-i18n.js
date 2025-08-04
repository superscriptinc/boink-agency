#!/usr/bin/env node

/**
 * Simple test script to verify i18n implementation
 * Run with: node test-i18n.js
 */

const fs = require("fs");
const path = require("path");

console.log("🧪 Testing i18n Implementation...\n");

// Test 1: Check if translation files exist
console.log("1. Checking translation files...");
const locales = ["en", "es", "pt"];
const translationFiles = [];

locales.forEach((locale) => {
  const filePath = path.join(
    __dirname,
    "public",
    "locales",
    locale,
    "common.json"
  );
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${locale}/common.json exists`);
    translationFiles.push(filePath);
  } else {
    console.log(`   ❌ ${locale}/common.json missing`);
  }
});

// Test 2: Validate JSON structure
console.log("\n2. Validating JSON structure...");
translationFiles.forEach((filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(content);

    // Check for required sections
    const requiredSections = [
      "header",
      "hero",
      "benefits",
      "results",
      "about",
      "contact",
      "footer",
    ];
    const missingSections = requiredSections.filter(
      (section) => !json[section]
    );

    if (missingSections.length === 0) {
      console.log(
        `   ✅ ${path.basename(path.dirname(filePath))}/common.json is valid`
      );
    } else {
      console.log(
        `   ⚠️  ${path.basename(path.dirname(filePath))}/common.json missing sections: ${missingSections.join(", ")}`
      );
    }
  } catch (error) {
    console.log(
      `   ❌ ${path.basename(path.dirname(filePath))}/common.json has invalid JSON: ${error.message}`
    );
  }
});

// Test 3: Check configuration files
console.log("\n3. Checking configuration files...");
const configFiles = [
  "next-i18next.config.js",
  "middleware.ts",
  "app/i18n-provider.tsx",
  "app/[locale]/layout.tsx",
  "app/[locale]/page.tsx",
];

configFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file} exists`);
  } else {
    console.log(`   ❌ ${file} missing`);
  }
});

// Test 4: Check for required dependencies
console.log("\n4. Checking package.json for required dependencies...");
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const requiredDeps = ["next-i18next", "i18next", "react-i18next"];

  requiredDeps.forEach((dep) => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      console.log(
        `   ✅ ${dep} is installed (${packageJson.dependencies[dep]})`
      );
    } else if (
      packageJson.devDependencies &&
      packageJson.devDependencies[dep]
    ) {
      console.log(
        `   ✅ ${dep} is installed as dev dependency (${packageJson.devDependencies[dep]})`
      );
    } else {
      console.log(`   ❌ ${dep} is not installed`);
    }
  });
} catch (error) {
  console.log(`   ❌ Could not read package.json: ${error.message}`);
}

console.log("\n🎉 i18n Implementation Test Complete!");
console.log("\nNext steps:");
console.log("1. Run: npm install next-i18next --legacy-peer-deps");
console.log("2. Start the dev server: npm run dev");
console.log("3. Test URLs: http://localhost:3000/en, /es, /pt");
console.log("4. Test language switching via the dropdown");
