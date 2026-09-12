const { chromium } = require('@playwright/test');

async function capture() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // 1. Desktop - Top of Homepage
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'scratch/new-desktop-top.png' });

  // 2. Desktop - Scrolled Homepage (Logo reveals!)
  await page.evaluate(() => window.scrollTo(0, 250));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scratch/new-desktop-scrolled.png' });

  // 3. Mobile - Top of Homepage
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scratch/new-mobile-top.png' });

  // 4. Mobile - Scrolled Homepage (Logo reveals!)
  await page.evaluate(() => window.scrollTo(0, 250));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scratch/new-mobile-scrolled.png' });

  // 5. Sister concern detail page for S.N Import & Export BD Ltd. (Breadcrumb hero banner)
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/sister-concerns/sn-import-export', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scratch/new-concern-page.png' });

  await browser.close();
  console.log('All verification screenshots captured successfully!');
}

capture().catch(console.error);
