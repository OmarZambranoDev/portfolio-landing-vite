import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, '..', 'package.json');
const versionsPath = resolve(__dirname, '..', 'versions.json');

const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
const canonical = JSON.parse(readFileSync(versionsPath, 'utf-8'));

const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
const mismatches = [];

for (const [name, version] of Object.entries(canonical)) {
  if (name === 'react/jsx-runtime') continue;
  const installed = allDeps[name];
  if (!installed) {
    continue; // Skip if not installed—host doesn't need all remote deps
  }
  if (version === 'latest') continue;
  const cleanInstalled = installed.replace(/^[\^~]/, '');
  if (cleanInstalled !== version) {
    mismatches.push(`${name}: expected ${version}, got ${cleanInstalled}`);
  }
}

if (mismatches.length > 0) {
  console.error('\n❌ Version mismatches found:\n');
  mismatches.forEach((m) => console.error(`  - ${m}`));
  console.error('\nUpdate package.json to match versions.json and run npm install.\n');
  process.exit(1);
}

console.log('\n✅ All versions match versions.json\n');
