const {test ,expect}=require('@playwright/test')


test('Tdata',async({page})=>{

   await  page.goto("https://www.knowledgeware.in/Automation/dynamicXpath.html");


   const table= await page.locator(".order-table")
   
   await expect(table).toBeVisible();
   const columns= table.locator("thead tr th")

   console.log("total number of columns:   " + await columns.count())


   const row= await page.locator('tbody tr')
   console.log("total number of rows:   " + await row.count())

   const matchrow=row.filter({
    has :page.locator('td'),
    hasText:'Mahesh Thorat'
   })
    
  // await expect(matchrow).toBeVisible();
  // const Designation =matchrow.locator("td").textContent;
   const Designation =matchrow.locator("td").textContent;

   console.log("Designation of mahesh thorat is =  "  +Designation )
})