import { Locator, Page, expect } from "@playwright/test";
export default class EnvironmentPage {
  readonly page: Page;
  
  readonly UserNameDropdownLocator: Locator;
    EnvironmentButtonLocator: Locator;
    clickgreeninitivativeLocator: Locator;
    verifygreeninitiativeLocator: Locator;
    clickafforastationLocator: Locator;
    clickProgressPlantationLinkLocator: Locator;
    ClickTreeTranslocationLocator: Locator;
    clickTranslocationbbmplinkLocator: Locator;
    clickDocumentsButtonLocator: Locator;
    verifyDocumentspageLocator: Locator;
    verifyalldocumentsLocator: Locator;
    clickGalleryButtonLocator: Locator;
    verifyGallerypageLocator: Locator;
    verifyGalleryPhotoLocator: Locator;
    clickonGallerynavigationbuttonLocator: Locator;
    clickCareerspageLocator: Locator;
    clickGrievanceRedressalLocator: Locator;
    clickVigilanceLocator: Locator;
    verifyvigilancepageLocator: Locator;
    clickContactuspageLocator: Locator;
    verifyContactuspageLocator: Locator;
    clicksitemapButtonLocator: Locator;
    verifySitemapButtonLocator: Locator;
    verifySitemappageLocator: Locator;
    verifycareerspageLocator: Locator;
    clickRegisterButtonLocator: Locator;
  

  constructor(page: Page) {
    this.page = page;
 
    this.UserNameDropdownLocator = page.locator('(//div[@data-test-id="UserManagementUserName"])// input');
    this.EnvironmentButtonLocator = page.locator('[title="Environment"]');
    this.clickgreeninitivativeLocator = page.locator("(//a[.='Green Initiatives'])[1]");
    this.verifygreeninitiativeLocator = page.locator("//p[.='Green Initiatives']");
    this.clickafforastationLocator = page.locator('(//span[@class="st-arrow"])[1]');
    this.clickProgressPlantationLinkLocator = page.locator("//a[.='Click here for Progress report of Compensatory plantation']");
    this.ClickTreeTranslocationLocator = page.locator('(//span[@class="st-arrow"])[2]');
    this.clickTranslocationbbmplinkLocator = page.locator("//a[.='Click here for Translocation (BBMP)']");
    this.clickDocumentsButtonLocator = page.locator("(//a[.='Documents'])[1]");
    this.verifyDocumentspageLocator = page.locator("//p[.='Documents']");
    this.verifyalldocumentsLocator = page.locator('[class="table-responsive"]');
    this.clickGalleryButtonLocator = page.locator("(//a[.='Gallery'])[1]");
    this.verifyGallerypageLocator = page.locator("//p[.='Gallery']");
    this.verifyGalleryPhotoLocator = page.locator('(//img[@alt="img03"])[1]');
    this.clickonGallerynavigationbuttonLocator = page.locator("(//a[.='GALLERY'])[1]");
    this.clickCareerspageLocator = page.locator("(//a[.='CAREERS'])[1]");
    this.verifycareerspageLocator = page.locator("//p[.='Careers']");
    this.clickGrievanceRedressalLocator = page.locator('[title="GRIEVANCE REDRESSAL"]');
    this.clickVigilanceLocator = page.locator("//a[.='VIGILANCE']");
    this.verifyvigilancepageLocator = page.locator("//p[.='Vigilance Corner']");
    this.clickContactuspageLocator = page.locator("(//a[.='CONTACT US'])[1]");
    this.verifyContactuspageLocator = page.locator("p[.='Contact Us']");
    this.clicksitemapButtonLocator = page.locator("//a[.='SITE MAP']");
    this.verifySitemappageLocator = page.locator('(//div[@class="modal-content"])[2]')

    this.clickRegisterButtonLocator = page.locator("//b[.=' Register New User ']");

    
    
  }
  
  async ClickOnEnvironmentBtn() {
    await this.page.waitForLoadState('load');
    await this.EnvironmentButtonLocator.click();  
  }
  async ClickOngreeninitiativeBtn() {
    await this.clickgreeninitivativeLocator.click();  
  }
  async verifygreeninitivative() {
    expect(this.verifygreeninitiativeLocator).toBeTruthy();  
  }
  async ClickOnAfforastationBtn() {
    await this.clickafforastationLocator.click(); 
  }
  async ClickOnProgressPlantationBtn() {
    await this.clickProgressPlantationLinkLocator.click(); 
  }
  async ClickOnTreeTranslocationBtn() {
    await this.ClickTreeTranslocationLocator.click(); 
  }
  async ClickOnTranslocationbbmpBtn() {
    await this.clickTranslocationbbmplinkLocator.click(); 
  }
  async ClickOnDocumentsBtn() {
    await this.clickDocumentsButtonLocator.click(); 
  }
  async verifyDocumentspage() {
    expect(this.verifyDocumentspageLocator).toBeTruthy();  
  }
  async verifyallDocuments() {
    expect(this.verifyalldocumentsLocator).toBeTruthy();  
  }
  async ClickOnGalleryBtn() {
    await this.clickGalleryButtonLocator.click(); 
  }
  async verifyGalleryPage() {
    expect(this.verifyGallerypageLocator).toBeTruthy();
  }
  async verifyGalleryPhoto() {
    expect(this.verifyGalleryPhotoLocator).toBeTruthy();
  }
  async ClickOncareersBtn() {
    await this.clickCareerspageLocator.click();
  }
  async verifycareesapage() {
    expect(this.verifycareerspageLocator).toBeTruthy();
  }
  async ClickOnGalleryNavigationBtn() {
    await this.clickonGallerynavigationbuttonLocator.click(); 
  }
  async ClickOnGrievanceRedressalBtn() {
    await this.clickGrievanceRedressalLocator.click(); 
  }
  async ClickOnVigilancepageBtn() {
    await this.clickVigilanceLocator.click(); 
  }
  async verifyvigilancepage() {
    expect(this.verifyvigilancepageLocator).toBeTruthy();
  }
  async ClickOnContactuspageBtn() {
    await this.clickContactuspageLocator.click(); 
  }
  async verifyContactpage() {
    expect(this.verifyContactuspageLocator).toBeTruthy();
  }
  async ClickOnSitemapBtn() {
    await this.clicksitemapButtonLocator.click(); 
  }
  async verifySiteMappage() {
    expect(this.verifySitemappageLocator).toBeTruthy();
  }
  async ClickOnRegisterBtn() {
    await this.clickRegisterButtonLocator.click(); 
  }
}