import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, '..', 'package.json');
const lockPath = resolve(__dirname, '..', 'package-lock.json');
const versionsPath = resolve(__dirname, '..', 'versions.json');

const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
const lock = JSON.parse(readFileSync(lockPath, 'utf-8'));

// Generate canonical versions from lock file
const sharedDeps = ['react', 'react-dom', 'zustand', '@OmarZambranoDev/portfolio-ui'];

const canonical = {};
for (const dep of sharedDeps) {
  const key = `node_modules/${dep}`;
  const installed = lock.packages?.[key];
  if (installed?.version) {
    canonical[dep] = installed.version;
  }
}
if (canonical.react) {
  canonical['react/jsx-runtime'] = canonical.react;
}

// Update versions.json
writeFileSync(versionsPath, JSON.stringify(canonical, null, 2) + '\n');
console.log('✅ Generated versions.json from package-lock.json');
console.log(JSON.stringify(canonical, null, 2));

// Check against package.json
const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
const mismatches = [];

for (const [name, version] of Object.entries(canonical)) {
  if (name === 'react/jsx-runtime') continue;
  const installedVersion = allDeps[name];
  if (!installedVersion) continue;
  if (installedVersion === 'latest') continue; // Skip if package.json uses latest
  const cleanInstalled = installedVersion.replace(/^[\^~]/, '');
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
