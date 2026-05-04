import { test } from "@playwright/test";

test(`Test to learn Xpath locators Selectors`,async ({page}) => { // page fixture

   await page.goto(`http://leaftaps.com/opentaps/control/main`)

  await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`); 

  await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

  await page.locator(`//input[@class="decorativeSubmit"]`).click();

  await page.locator(`//a[contains(text(),"CRM")]`).click()

    await page.waitForTimeout(3000)
})