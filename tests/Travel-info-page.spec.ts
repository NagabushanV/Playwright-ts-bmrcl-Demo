import {Page, test,expect } from "@playwright/test";
import Homepage from "../PageObjects/bmecl-home-page";
import TravelInfopage from "../PageObjects/Travel-info/Travel-infopage";
import data from "../Testdata/homepage.json";

test('verify LIU shoud able to navigate to TravelInfo page and click on schematic route map and varifi the map.',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    await home.gotoLoginPage(data.url);
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnSchematicRoutemap();
    await travelinfo.VerifySchematicRoadmap();
   
    
})



test('verify LIU should able to navigate Fare rules, metroTimings, Tickets',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    await home.gotoLoginPage(data.url);
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.VerifySchematicRoadmap();
    await travelinfo.ClickOnFareRulesBtn();
    await travelinfo.VerifyFareRules();
    await travelinfo.clickOnmetrotimingsBtn();
    await travelinfo.verifymetrotimings();

});