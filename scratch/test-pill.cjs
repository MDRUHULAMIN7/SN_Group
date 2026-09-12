const { chromium } = require('@playwright/test');

async function testNavbarOptions() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 300));
  await page.waitForTimeout(800);

  // Take screenshot of current navbar
  const navbar = page.locator('[data-navbar-state="compact"]');
  await navbar.screenshot({ path: 'scratch/navbar-scrolled-current.png' });

  await browser.close();
  console.log('Navbar screenshot saved!');
}

testNavbarOptions().catch(console.error);
