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
    clickticketsLocator: Locator;
    verifyTicketsLocator: Locator;
    verifyfacilitiesatstationLocator: Locator;
    ClickfacilitisatstationLocator: Locator;
    clickParkingLocators: Locator;
    verifyparkingpageLocator: Locator;
    ClickSafetyPrecationsLocator: Locator;
    verifySafetyPrecationsLocator: Locator;
    clickLostandFundLocator: Locator;
    verifyLostandFundLocator: Locator;
    GeneralInformationLocator: Locator;
    verifygeneralinformationLocator: Locator;
    clicktoppingupcardsLocator: Locator;
    verifytoppingupcardspageLocator: Locator;
    clickNationalMobilitycardLocator: Locator;
    verifyNationalMobilityLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ClickTravelInfoButtonLocator = page.locator('[title="TRAVEL INFO"]');
        this.clickSchematicroutemapLocator = page.locator("(//a[.='Schematic Route Map'])[1]");
        this.verifySchematicMapLocator = page.locator('[alt="Namma Metro"]');
        this.clickFareRulesButtonLocator = page.locator('(//a[.="Fare Rules"])[1]');
        this.verifyFareRulesLocator = page.locator("//p[.='Fare Rules']");
        this.clickmetroTimingsLocator = page.locator("(//a[.='Metro Timings'])[1]");
        this.verifymetrotimingLocator = page.locator("//p[.='Metro Timings']");
        this.clickticketsLocator= page.locator("(//a[.='Tickets'])[1]");
        this.verifyTicketsLocator = page.locator("//p[.='Tickets']");
        this.ClickfacilitisatstationLocator = page.locator("(//a[.='Facilitites at Stations'])[1]");
        this.verifyfacilitiesatstationLocator = page.locator("//p[.='Facilitites At Stations']");
        this.clickParkingLocators = page.locator("(//a[.='Parking'])[1]");
        this.verifyparkingpageLocator = page.locator("//p[.='Parking']");
        this.ClickSafetyPrecationsLocator = page.locator("(//a[.='Safety Precautions'])[1]");
        this.verifySafetyPrecationsLocator = page.locator("//p[.='Safety Precautions']");
        this.clickLostandFundLocator = page.locator("(//a[.='Lost & Found'])[1]");
        this.verifyLostandFundLocator= page.locator("//p[.='Lost & Found']");

        this.GeneralInformationLocator = page.locator('(//span[@class="st-arrow"])[1]');
        this.verifygeneralinformationLocator = page.locator('[class="tickets-fore-back"]');
        this.clicktoppingupcardsLocator=page.locator('(//span[@class="st-arrow"])[2]');
        this.verifytoppingupcardspageLocator=page.locator('[class="panel-body"]');
        this.clickNationalMobilitycardLocator=page.locator('(//span[@class="st-arrow"])[3]');
        this.verifyNationalMobilityLocator = page.locator('(//div[@class="st-content"])[3]');


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
    async clickOnTicketBtn(){
        await this.clickticketsLocator.click();
    }
    async verifyTicketpage(){
        expect(this.verifyTicketsLocator).toBeTruthy();
    }
    async clickOnfacilitiesatStationBtn(){
        await this.ClickfacilitisatstationLocator.click();
    }
    async verifyfacilitieStation(){
        expect(this.verifyfacilitiesatstationLocator).toBeTruthy();
    }
    async clickOnParkingBtn(){
        await this.clickParkingLocators.click();
    }
    async verifyparking(){
        expect(this.verifyparkingpageLocator).toBeTruthy();
    }
    async clickOnSafetyPrecautionsBtn(){
        await this.ClickSafetyPrecationsLocator.click();
    }
    async verifySafetyPrecaution(){
        expect(this.verifySafetyPrecationsLocator).toBeTruthy();
    }
    async clickOnLostandFundBtn(){
        await this.clickLostandFundLocator.click();
    }
    async verifylostandFund(){
        expect(this.verifyLostandFundLocator).toBeTruthy();
    }
    async clickOnGeneralInformationBtn(){
        await this.GeneralInformationLocator.click();
    }
    async verifyGeneralInformation(){
        expect(this.verifygeneralinformationLocator).toBeTruthy();
    }
    async clickOntoppingupcardsBtn(){
        await this.clicktoppingupcardsLocator.click();
    }
    async verifytoppingupcardspage(){
        expect(this.verifytoppingupcardspageLocator).toBeTruthy();
    }
    async clickOnNationalMobilitycardBtn(){
        await this.clickNationalMobilitycardLocator.click();
    }
    async verifynationalmobilitypage(){
        expect(this.verifyNationalMobilityLocator).toBeTruthy();
    }
    


    }