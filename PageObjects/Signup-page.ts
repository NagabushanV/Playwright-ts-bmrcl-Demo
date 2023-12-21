import { Locator, Page, expect } from "@playwright/test";
export default class SignupPage {
  readonly page: Page;
  
  readonly UserNameDropdownLocator: Locator;
  

  constructor(page: Page) {
    this.page = page;
 
    this.UserNameDropdownLocator = page.locator('(//div[@data-test-id="UserManagementUserName"])// input');
    
    
  }
  async SetUsernameDropdown(UserName: string) {
    await this.page.waitForLoadState('load');
    await this.UserNameDropdownLocator.fill(UserName);
    await this.page.locator("(//div[normalize-space()='" + UserName + "'])[1]").click();
  }
  
}