import {Page, test,expect } from "@playwright/test";
import Homepage from "../PageObjects/bmecl-home-page";
import data from "../Testdata/homepage.json";


test('verify LIU select from and To station and get details.',async ({ page }) => {
    const home = new Homepage(page);
    await home.gotoLoginPage(data.url);
    await home.setfromStation(data.fromstation);
    await home.setToStation(data.tostation);
    await home.clickOnGetDetailsBtn();
    await home.VerifyTokenDetails();
    
})
test('verify LIU should view metro Routemap and close the map by clicking cancel Button.',async ({ page }) => {
    const home = new Homepage(page);
    await home.gotoLoginPage(data.url);
    await home.clickOnMetromap();
    await home.VerifyMapView();
    await home.clickOnMapCloseBtn();
    await home.VerifyHomepage();

});

test("Verify LIU should able to zoon in by clicking '+' icon and zoom out by Clicking '-' Button",async ({ page }) => {
    const home = new Homepage(page);
    await home.gotoLoginPage(data.url);
    await home.clickOnMetromap();
    await home.VerifyMapView();
    await home.clickOnMapCloseBtn();
    await home.VerifyHomepage();
    await home.clickOnZoomInBtn();
    await home.clickOnZoomOutBtn();

});

test("Verify LIU should Click on Law and court and verify all the court present and Central websites present.",async ({ page }) => {
    const home = new Homepage(page);
    await home.gotoLoginPage(data.url);
    await home.clickOnLawCourtBtn();
    await home.VerifyLawandCourts();
    await home.clickOnlawandCourtCloseBtn();
    await home.clickOncentralWebSites();
    await home.VerifyCentralWebGovwebs();
    await home.clickonCentralWebsCloseBtn();

});





