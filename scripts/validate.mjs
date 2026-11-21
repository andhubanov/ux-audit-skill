// Validate the skill: SKILL.md frontmatter and relative links in markdown files. No dependencies.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';

const errors = [];

// 1. Every skill folder has a SKILL.md with valid frontmatter.
const skillDirs = readdirSync('.').filter((d) => existsSync(join(d, 'SKILL.md')));
if (!skillDirs.length) errors.push('no folder with SKILL.md found');
for (const dir of skillDirs) {
  const before = errors.length;
  const text = readFileSync(join(dir, 'SKILL.md'), 'utf8');
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) { errors.push(`${dir}/SKILL.md: missing frontmatter`); continue; }
  const field = (k) => (fm[1].match(new RegExp(`^${k}:\\s*(.+)$`, 'm')) || [])[1]?.trim();
  const name = field('name');
  const description = field('description');
  if (!name) errors.push(`${dir}/SKILL.md: missing name`);
  else if (!/^[a-z0-9-]{1,64}$/.test(name)) errors.push(`${dir}/SKILL.md: name must be lowercase letters, digits and hyphens, max 64`);
  else if (name !== dir) errors.push(`${dir}/SKILL.md: name "${name}" does not match folder "${dir}"`);
  if (!description) errors.push(`${dir}/SKILL.md: missing description`);
  else if (description.length > 1024) errors.push(`${dir}/SKILL.md: description is ${description.length} chars, max 1024`);
  if (text.length - fm[0].length < 200) errors.push(`${dir}/SKILL.md: body looks empty`);
  console.log(`skill ${dir}: ${errors.length === before ? 'ok' : 'failed'}`);
}

// 2. Relative links and images in markdown files point to files that exist.
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  if (f.startsWith('.') || f === 'node_modules') return [];
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
});
let links = 0;
for (const file of walk('.')) {
  const text = readFileSync(file, 'utf8').replace(/```[\s\S]*?```/g, '');
  for (const [, target] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    links++;
    const path = join(dirname(file), target.split('#')[0]);
    if (!existsSync(path)) errors.push(`${file}: broken link ${target}`);
  }
}
console.log(`checked ${links} relative links`);

if (errors.length) {
  console.error('\n' + errors.map((e) => '  ✗ ' + e).join('\n'));
  process.exit(1);
}
console.log('all checks pass');
