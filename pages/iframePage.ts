import { Page, expect } from '@playwright/test';
import userdata from '../user-data.json'; 

export class IframePage {
  private page: Page;
  private gotoIframeClick1 = '//li[1]';
  private gotoIframeClick2 = 'a[href="xhtmlTest.html"]';
  private gotoIframeClick3 = 'a[name="sameWindow"]';
  private iframeLocator = '//iframe';
  private emailInput = 'input[id="email"]';
  private ageInput = 'input[id="age"]';
  private submitButton = 'input[id="submitButton"]';
  private greetingMessage = 'p[id="greeting"]';
  private alertsLink = 'a[href="alerts.html"]';
  private iframePageURL = 'https://www.selenium.dev/selenium/web/iframes.html';
  private baseUrl = 'https://www.selenium.dev/selenium/web/';
  private alertsHeaderTitle = '//h1[1]';
  private alertFirstInteraction = 'a[href="#"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToIframePage() {
    await this.page.goto(this.baseUrl);
    await this.page.locator(this.gotoIframeClick1).click();
    await this.page.locator(this.gotoIframeClick2).click();
    await this.page.locator(this.gotoIframeClick3).click();
  }

  async verifyIframePage() {
    expect(this.page.url()).toBe(this.iframePageURL);
  }

  async fillIframeForm() {
    const frameLocator = await this.page.frameLocator(this.iframeLocator);
    await frameLocator.locator(this.emailInput).fill(userdata.user.email);
    await frameLocator.locator(this.ageInput).fill(userdata.user.age);
    await frameLocator.locator(this.submitButton).click();
  }

  async verifySuccessMessage() {
    const frameLocator = await this.page.frameLocator(this.iframeLocator);
    const successMessage = await frameLocator.locator(this.greetingMessage).textContent();
    expect(successMessage).toBe('Success!'); 
  }

  async navigateToAlertsPage(context) {
    const newTab = await context.newPage();
    await newTab.goto(this.baseUrl);
    await newTab.locator(this.alertsLink).click();
    return newTab;
  }

  async verifyAlertsPage(newTab) {
    const alertsPageURL = 'https://www.selenium.dev/selenium/web/alerts.html';
    expect(newTab.url()).toBe(alertsPageURL);
    const alertsHeader = await newTab.locator(this.alertsHeaderTitle).textContent();
    expect(alertsHeader).toBe('Testing Alerts and Stuff');
  }

  async interactWithFirstAlert(newTab) {
    newTab.on('dialog', async (dialog) => {
        expect(dialog.message()).toBe('cheese');
        await dialog.accept();
    });
    await newTab.locator(this.alertFirstInteraction).first().click();
}
}