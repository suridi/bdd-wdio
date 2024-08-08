import {Given, When, Then} from "@wdio/cucumber-framework"
import loginPage from "../pages/loginPage";


Given(/^user has launched the browser with the tutorials ninja site url$/,async () => {
	await browser.url("https://tutorialsninja.com/demo/index.php?route=account/login");
});

When(/^user enters valid credentials$/, async () => {
	(await loginPage.emailAddressTextField()).setValue("jureddi@gmail.com");
    (await loginPage.emailAddressTextField()).setValue("Akhila@16");
});

When(/^clicks on login button$/, async () => {
	await (await loginPage.loginBtn()).click();
});

Then(/^user should be able to login into the site successfully$/, async () => {
	const isPageheaderDisplayed = (await loginPage.pageHeader()).isDisplayed();
	expect(isPageheaderDisplayed).toEqual(true);
});
