const {test,expect}=require('@playwright/test');
test('HomePage',async({page})=>{


    await page.goto("https://www.knowledgeware.in/final.html");

    await expect (page).toHaveTitle('Register page');

    await page.fill("//input[@name='name']",'Deepak')

    await page.locator("")





})





