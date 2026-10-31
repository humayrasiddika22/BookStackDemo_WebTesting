import { test, expect } from '@playwright/test';
import { Base } from '../pages/Base';

test('The page is accessed successfully.', async ({ page }) => {
  const pages = new Base (page);

  await pages.pageOpen();
  await pages.pageClose();
});

//npx playwright test 01-pageOpenClose.test.js --headed

