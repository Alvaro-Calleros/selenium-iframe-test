import { test } from '@playwright/test';
import { IframePage } from '../pages/iframePage'; 

test.describe('interaccion-con-iframes-y-navegacion-en-selenium', () => {
  test('validar-interaccion-con-iframes-y-navegacion', async ({ page, context }) => {
    
    const iframePage = new IframePage(page);
    await iframePage.navigateToIframePage();
    await iframePage.verifyIframePage();
    await iframePage.fillIframeForm();
    await iframePage.verifySuccessMessage();

    const newTab = await iframePage.navigateToAlertsPage(context);
    await iframePage.verifyAlertsPage(newTab);
    await iframePage.interactWithFirstAlert(newTab);
  });
});