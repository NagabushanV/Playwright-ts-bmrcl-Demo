import { expect, Locator, Page } from "@playwright/test";
export default class TravelInfopage {
    readonly page: Page;
    
    
    ClickTravelInfoButtonLocator: Locator;
    clickSchematicroutemapLocator: Locator;
    verifySchematicMapLocator: Locator;
    clickFareRulesButtonLocator: Locator;
    verifyFareRulesLocator: Locator;
    clickmetroTimingsLocator: Locator;
    verifymetrotimingLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ClickTravelInfoButtonLocator = page.locator('[title="TRAVEL INFO"]');
        this.clickSchematicroutemapLocator = page.locator("(//a[.='Schematic Route Map'])[1]");
        this.verifySchematicMapLocator = page.locator('[alt="Namma Metro"]');
        this.clickFareRulesButtonLocator = page.locator('(//a[.="Fare Rules"])[1]');
        this.verifyFareRulesLocator = page.locator("//p[.='Fare Rules']");
        this.clickmetroTimingsLocator = page.locator("(//a[.='Metro Timings'])[1]");
        this.verifymetrotimingLocator = page.locator("(//p[.='Metro Timings'])[1]");


    }

    async clickOnTravelInfoBtn(){
        await this.page.waitForLoadState('load');
        await this.ClickTravelInfoButtonLocator.click();
    }
    async clickOnSchematicRoutemap(){
        await this.clickSchematicroutemapLocator.click();
    }
    async VerifySchematicRoadmap(){
        expect(this.verifySchematicMapLocator).toBeTruthy();
    }
    async ClickOnFareRulesBtn(){
        await this.clickFareRulesButtonLocator.click();
    }
    async VerifyFareRules(){
        expect(this.clickFareRulesButtonLocator).toBeTruthy();
    }
    async clickOnmetrotimingsBtn(){
        await this.clickmetroTimingsLocator.click();
    }
    async verifymetrotimings(){
        expect(this.verifymetrotimingLocator).toBeTruthy();
    }


    }