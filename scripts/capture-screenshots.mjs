// Captures a homepage screenshot of every portfolio project into public/work/.
// Reads the URLs from src/data/projects.js, so the data file stays the single source of truth.
//
// One-time setup:   npm install --save-dev playwright && npx playwright install chromium
// Then run:         npm run screenshots            (all projects)
//                   npm run screenshots -- winrose-pharma   (only the given project ids)

import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import { projects } from '../src/data/projects.js'

const only = process.argv.slice(2)
const targets = projects.filter((project) => only.length === 0 || only.includes(project.id))

if (targets.length === 0) {
  console.error(`No project matches: ${only.join(', ')}. Known ids: ${projects.map((p) => p.id).join(', ')}`)
  process.exit(1)
}

await mkdir(new URL('../public/work/', import.meta.url), { recursive: true })

const browser = await chromium.launch()
// 16:10 matches the card preview, so nothing important is cropped.
const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 })
let failed = 0

for (const project of targets) {
  const page = await context.newPage()
  const file = new URL(`../public${project.image}`, import.meta.url).pathname
  try {
    await page.goto(project.url, { waitUntil: 'networkidle', timeout: 45000 })
    await page.waitForTimeout(2500) // let entrance animations and hero images settle
    await page.screenshot({ path: file, type: 'jpeg', quality: 80 })
    console.log(`OK    ${project.id} -> public${project.image}`)
  } catch (error) {
    failed += 1
    console.error(`FAIL  ${project.id}: ${error.message.split('\n')[0]}`)
  } finally {
    await page.close()
  }
}

await browser.close()
if (failed > 0) process.exit(1)
