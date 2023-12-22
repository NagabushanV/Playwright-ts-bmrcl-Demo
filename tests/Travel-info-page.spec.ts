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



test('verify LIU should able to navigate Fare rules, metroTimings, Tickets, Facilitis at station, Facilities for specialiy abled, parking, Metro etiquette, safety Precauitions, Lost and Fund, Frequently asked Qns',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    await home.gotoLoginPage(data.url);
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnSchematicRoutemap();
    await travelinfo.VerifySchematicRoadmap();
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.ClickOnFareRulesBtn();
    await travelinfo.VerifyFareRules();
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnmetrotimingsBtn();
    await travelinfo.verifymetrotimings();
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnTicketBtn();
    await travelinfo.verifyTicketpage();
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnfacilitiesatStationBtn();
    await travelinfo.verifyfacilitieStation();
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnParkingBtn();
    await travelinfo.verifyparking();
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnSafetyPrecautionsBtn();
    await travelinfo.verifySafetyPrecaution();
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnLostandFundBtn();
    await travelinfo.verifylostandFund();

});

test('verify should able to tickets navigation genaral information.',async ({ page }) => {
    const home = new Homepage(page);
    const travelinfo = new TravelInfopage(page)
    await home.gotoLoginPage(data.url);
    await travelinfo.clickOnTravelInfoBtn();
    await travelinfo.clickOnTicketBtn();
    await travelinfo.verifyTicketpage();
    await travelinfo.clickOnGeneralInformationBtn();
    await travelinfo.verifyGeneralInformation();
    await travelinfo.clickOntoppingupcardsBtn();
    await travelinfo.verifytoppingupcardspage();
    await travelinfo.clickOnNationalMobilitycardBtn();
    await travelinfo.verifynationalmobilitypage();

});