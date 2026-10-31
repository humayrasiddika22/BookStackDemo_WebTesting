import {test, expect} from '@playwright/test';
import { CreateShelf } from '../pages/CreateShelf.js';
import {loginData} from "../test-data/testData.js";
import {newShelfData} from "../test-data/testData.js";
    
test("TC_016: Create shelf with valid details", async ({page})=>{

    const pages = new CreateShelf(page);

// Login page opening and Login
    await pages.pageOpen();
    await pages.clickLoginLink();
    await pages.fillLoginEmail(loginData[0].email);
    await pages.fillLoginPass(loginData[0].pass);
    await pages.clickLoginButton();

// Create a new shelf
    await pages.clickShelfLink();
    await pages.createNewShelf();
    await pages.fillShelfName(newShelfData[0].shelfName);
    await pages.fillShelfDescription(newShelfData[0].shelfDescription);
    await pages.shelfSaveButton();
    await pages.shelfToHomePage();

    //await page.pause();

// Page closed
    await pages.pageClose();
        
});

//npx playwright test 04-createShelf.test.js --headed


