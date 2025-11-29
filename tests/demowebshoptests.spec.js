const { test, expect,defineconfig} = require('@playwright/test');


test('opening the demowebshop application',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');   
await page.title(); 
await expect(page).toHaveTitle('Automation Testing Practice');
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/'); 

const name = await page.locator("[placeholder='Enter Name']");
await name.fill("Prashanth");
await expect(name).toHaveValue("Prashanth");

await page.getByPlaceholder("Enter EMail").fill("newtest@getMaxListeners.com");
await page.getByRole("textbox",{name :'phone'}).fill('20388724');
await page.screenshot({path: 'ss.png',FullPage: true});


await page.close();
    
});

// test('verify the title and url of the page',async ({page})=>{


// });




