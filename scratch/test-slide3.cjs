const { chromium } = require('@playwright/test');

async function testSlide() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Click dot button 3 (S.N Import & Export BD Ltd.)
  const button = page.getByRole('button', { name: /Show slide 3/i });
  await button.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'scratch/new-slider-slide3.png' });

  await browser.close();
  console.log('Slide 3 screenshot saved!');
}

testSlide().catch(console.error);
