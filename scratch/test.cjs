const sharp = require('sharp');

async function testWithText() {
  const logo = await sharp('public/images/sn-group-logo.webp').resize({ height: 50 }).toBuffer();
  const svg = Buffer.from(`
    <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="32" font-family="sans-serif" font-weight="800" font-size="24" fill="#0b1226">S.N GROUP</text>
    </svg>
  `);
  
  await sharp({
    create: {
      width: 320,
      height: 66,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: logo, top: 8, left: 16 },
    { input: svg, top: 8, left: 60 }
  ])
  .png()
  .toFile('scratch/logo-with-text.png');
  console.log('Saved scratch/logo-with-text.png');
}

testWithText().catch(console.error);
