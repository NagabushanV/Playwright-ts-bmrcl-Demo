import { expect, Locator, Page } from "@playwright/test";
export default class Loginpage {
    readonly page: Page;
    
    SetFromStationLocator: Locator;
    setToStationLocator: Locator;
    ClickGetDetailsLocator: Locator;
    VerifyTokenDetailsLocator: Locator;
    ClickViewmetroroutemapLocator: Locator;
    verifyMapViewLocator: Locator;
    clickMapCloseButtonLocator: Locator;
    verifyhomepageLocator: Locator;
    ClickZoomInButtonLocator: Locator;
    clickZoomOutButtonLocator: Locator;
    LawandcourtButtonLocator: Locator;
    verifysupremeCourtLocator: Locator;
    verifyHighCourtLocator: Locator;
    verifyDistrictCourtLocator: Locator;
    verifyCentralAdministrativeLocator: Locator;
    verifyKarnatakaStateAdministrativeLocator: Locator;
    clicklawandCourtCloseButtonLocator: Locator;
    clickcentralwebsitesButtonLocator: Locator;
    verifycentralgovwebsitesLocator: Locator;
    ClickCentralwebsCloseButtonLocator: Locator;
    ClickmenuNavigationLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        this.SetFromStationLocator = page.locator('//select[@id="from"]');
        this.setToStationLocator = page.locator('//select[@id="to"]');
        this.ClickGetDetailsLocator = page.locator('[title="Get Details"]');
        this.VerifyTokenDetailsLocator = page.locator('[class="table-responsive"]');

        this.ClickViewmetroroutemapLocator= page.locator('[alt="Metro Map"]');
        this.verifyMapViewLocator = page.locator('(//div[@class="modal-body"])[1]');
        this.clickMapCloseButtonLocator=page.locator('(//button[@class="close"])[1]');
        this.verifyhomepageLocator=page.locator("//h2[.='Welcome to Namma Metro']");

        this.ClickZoomInButtonLocator = page.locator('[alt="Up"]');
        this.clickZoomOutButtonLocator= page.locator('[alt="Down"]');

        this.LawandcourtButtonLocator= page.locator('(//div[@data-target="#LawCourt"])[2]');
        this.verifysupremeCourtLocator=page.locator("//p[.='Supreme Court']");
        this.verifyHighCourtLocator=page.locator("//p[.='High Court']");
        this.verifyDistrictCourtLocator= page.locator("//p[.='District Courts']");
        this.verifyCentralAdministrativeLocator=page.locator("//p[.='Central Administrative Tribunal']");
        this.verifyKarnatakaStateAdministrativeLocator=page.locator("//p[.='Karnataka State Administrative Tribunal']");
        this.clicklawandCourtCloseButtonLocator=page.locator('(//button[@class="close"])[8]');

        this.clickcentralwebsitesButtonLocator=page.locator('(//div[@data-target="#CGWebsite"])[2]');
        this.verifycentralgovwebsitesLocator=page.locator('(//div[@class="container-fluid"])[4]');
        this.ClickCentralwebsCloseButtonLocator=page.locator('(//button[@class="close"])[2]');

        this.ClickmenuNavigationLocator=page.locator('[class="navbar-toggle collapsed"]');
        
       
    

    }

    async gotoLoginPage(url:string){
        await this.page.waitForLoadState('load');
        await this.page.goto(url);
        this.page.waitForLoadState("load");
    }
    async setfromStation(fromstation:string){
        await this.page.waitForLoadState('load');
        await this.SetFromStationLocator.selectOption(fromstation);
    }
    async setToStation(tostation:string){
        await this.page.waitForLoadState('load');
        await this.setToStationLocator.selectOption(tostation);
    }
    async clickOnGetDetailsBtn(){
        await this.page.waitForLoadState('load');
        await this.ClickGetDetailsLocator.click();
    }
    async VerifyTokenDetails(){
        await this.page.waitForLoadState('load');
        expect(this.VerifyTokenDetailsLocator).toBeTruthy();
    }
    async clickOnMetromap(){
        await this.page.waitForLoadState('load');
        await this.ClickViewmetroroutemapLocator.click();
    } 
    async VerifyMapView(){
        expect(this.verifyMapViewLocator).toBeTruthy();
    }
    async clickOnMapCloseBtn(){
        await this.clickMapCloseButtonLocator.click();
    } 
    async VerifyHomepage(){
        expect(this.verifyhomepageLocator).toBeTruthy();
    } 
    async clickOnZoomInBtn(){
        await this.ClickZoomInButtonLocator.click();
    }  
    async clickOnZoomOutBtn(){
        await this.clickZoomOutButtonLocator.click();
    }  
    async clickOnLawCourtBtn(){
        await this.LawandcourtButtonLocator.click();
    } 
    async VerifyLawandCourts(){
        expect(this.verifysupremeCourtLocator).toBeTruthy();
        expect(this.verifyHighCourtLocator).toBeTruthy();
        expect(this.verifyDistrictCourtLocator).toBeTruthy();
        expect(this.verifyCentralAdministrativeLocator).toBeTruthy();
        expect(this.verifyKarnatakaStateAdministrativeLocator).toBeTruthy();    
    } 
    async clickOnlawandCourtCloseBtn(){
        await this.clicklawandCourtCloseButtonLocator.click();
    } 
    async clickOncentralWebSites(){
        await this.clickcentralwebsitesButtonLocator.click();
    } 
    async VerifyCentralWebGovwebs(){
        expect(this.verifycentralgovwebsitesLocator).toBeTruthy();
    }
    async clickonCentralWebsCloseBtn(){
        await this.ClickCentralwebsCloseButtonLocator.click();
    } 

    async clickonMenuNavigatoinBtn(){
        await this.ClickmenuNavigationLocator.click();
    }
}