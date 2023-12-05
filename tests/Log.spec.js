const { test, expect } = require('@playwright/test');

const testdata=JSON.parse(JSON.stringify(require("../datadriven.json")));

 test.describe("Data drive login test",function()
 {

     for(const data of testdata){



         test.describe(`Login ${data.id}`,function(){

            test('HPage',async({page})=>{


                await page.goto("https://www.knowledgeware.in/final.html");
            
                await expect (page).toHaveTitle('Register page');
            
                await page.locator("//input[@name='name']").fill(data.username)
            
               
            });
         })

        
     }



 })