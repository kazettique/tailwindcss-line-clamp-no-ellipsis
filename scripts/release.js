#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = resolve(__dirname, '..', 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));

const [, , input] = process.argv;

if (!input) {
  console.error('Usage: bun run release <version|patch|minor|major>');
  process.exit(1);
}

function bumpVersion(current, type) {
  const [major, minor, patch] = current.split('.').map(Number);
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      return null;
  }
}

let version;

if (['patch', 'minor', 'major'].includes(input)) {
  version = bumpVersion(pkg.version, input);
} else if (/^\d+\.\d+\.\d+$/.test(input)) {
  version = input;
} else {
  console.error(`Invalid version or bump type: "${input}"`);
  console.error('Expected: patch | minor | major | x.y.z');
  process.exit(1);
}

const branch = `release/v${version}`;

console.log(`Current version : ${pkg.version}`);
console.log(`Next version    : ${version}`);
console.log(`Release branch  : ${branch}`);
console.log('');

function run(cmd) {
  console.log(`$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

run('git fetch origin develop');
run('git checkout develop');
run('git pull origin develop');
run(`git checkout -b ${branch}`);
run(`git push -u origin ${branch}`);

console.log('');
console.log('Release branch pushed. Open a PR with:');
console.log(`  gh pr create --base main --head ${branch} --title "release: v${version}" --body "Release v${version}"`);
