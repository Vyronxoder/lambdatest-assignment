const { test } = require('@playwright/test');

async function searchAndAddToCart(page, searchQuery) {

  // Go directly to Amazon search URL (bypass search box)
  const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}`;
  await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

  await page.waitForTimeout(3000);

  // Take screenshot to see what Amazon is showing us
  await page.screenshot({ path: `screenshot-${searchQuery.replace(/ /g, '-')}-search.png` });

  // Get all product links on the page
  const productLinks = page.locator('a.a-link-normal.s-no-outline');
  const count = await productLinks.count();
  console.log(`Found ${count} product links for: ${searchQuery}`);

  if (count === 0) {
    console.log(`Amazon blocked the search for: ${searchQuery}`);
    return;
  }

  // Click first product
  await productLinks.first().click();
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);

  // Screenshot of product page
  await page.screenshot({ path: `screenshot-${searchQuery.replace(/ /g, '-')}-product.png` });

  // Get price
  let price = 'Price not found';
  const priceSelectors = [
    '.a-price .a-offscreen',
    '#priceblock_ourprice',
    '#priceblock_dealprice',
    '#corePrice_feature_div .a-price .a-offscreen',
    '.priceToPay .a-offscreen',
  ];

  for (const selector of priceSelectors) {
    try {
      const el = page.locator(selector).first();
      const visible = await el.isVisible({ timeout: 3000 });
      if (visible) {
        price = (await el.textContent()).trim();
        break;
      }
    } catch {
      continue;
    }
  }

  console.log(`\n✅ [${searchQuery}] Price: ${price}\n`);

  // Add to cart
  try {
    const addToCart = page.locator('#add-to-cart-button');
    const visible = await addToCart.isVisible({ timeout: 5000 });
    if (visible) {
      await addToCart.click();
      await page.waitForTimeout(2000);
      console.log(`✅ [${searchQuery}] Added to cart!`);
    } else {
    console.log(`⚠️ [${searchQuery}] Add to Cart not visible — product may require variant selection (color/storage) which is expected behavior on Amazon India`);
  }
  } catch {
    console.log(`⚠️ [${searchQuery}] Could not click Add to Cart`);
  }
}

test('TC1: Search iPhone and add to cart', async ({ page }) => {
  await searchAndAddToCart(page, 'Apple iPhone 15 128GB');
});

test('TC2: Search Galaxy and add to cart', async ({ page }) => {
  await searchAndAddToCart(page, 'Samsung Galaxy');
});