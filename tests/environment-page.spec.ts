import {Page, test,expect } from "@playwright/test";
import Homepage from "../PageObjects/bmecl-home-page";
import TravelInfopage from "../PageObjects/Travel-info/Travel-infopage";
import EnvironmentPage from "../PageObjects/Envirnoment/environment-page";
import data from "../Testdata/homepage.json";

test('verify LIU shoud able to navigate Environment page and click on green initiative check affarestation.',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    const environment = new EnvironmentPage(page);
    await home.gotoLoginPage(data.url);
    await environment.ClickOnEnvironmentBtn();
    await environment.ClickOngreeninitiativeBtn();
    await environment.verifygreeninitivative();
    await environment.ClickOnAfforastationBtn();
    await environment.ClickOnProgressPlantationBtn();

    
})

test('verify LIU shoud able to navigate Environment page check tree translocation details.',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    const environment = new EnvironmentPage(page);
    await home.gotoLoginPage(data.url);
    await environment.ClickOnEnvironmentBtn();
    await environment.ClickOngreeninitiativeBtn();
    await environment.verifygreeninitivative();
    await environment.ClickOnTreeTranslocationBtn();
    await environment.ClickOnTranslocationbbmpBtn();

    
})

test('verify LIU should able to navigate Environment page and view Document section of the Evirnoment page',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    const environment = new EnvironmentPage(page);
    await home.gotoLoginPage(data.url);
    await environment.ClickOnEnvironmentBtn();
    await environment.ClickOnDocumentsBtn();
    await environment.verifyDocumentspage();
    await environment.verifyallDocuments();

    
});

test('Verify LIU should able to view gallery and view photo.',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    const environment = new EnvironmentPage(page);
    await home.gotoLoginPage(data.url);
    await environment.ClickOnEnvironmentBtn();
    await environment.ClickOnGalleryBtn();
    await environment.verifyGalleryPage();
    await environment.verifyGalleryPhoto();
});


test('Verify LIU should able to navigate Gallery, careers, Grievances, vigilance, ContactUs, SiteMap.',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    const environment = new EnvironmentPage(page);
    await home.gotoLoginPage(data.url);
    await environment.ClickOnGalleryNavigationBtn();
    await environment.verifyGalleryPage();
    await environment.ClickOncareersBtn();
    await environment.verifycareesapage();
    await environment.ClickOnGrievanceRedressalBtn();
    await environment.ClickOnVigilancepageBtn();
    await environment.verifyvigilancepage();
    await environment.ClickOnContactuspageBtn();
    await environment.verifyContactpage();
    await environment.ClickOnSitemapBtn();
    await environment.verifySiteMappage();
});

test('tegister',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    const environment = new EnvironmentPage(page);
    await home.gotoLoginPage(data.url);
    await environment.ClickOnGrievanceRedressalBtn();
    await environment.ClickOnRegisterBtn();
});