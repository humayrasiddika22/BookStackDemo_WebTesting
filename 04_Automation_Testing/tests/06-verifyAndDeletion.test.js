import {test, expect} from '@playwright/test';
import { VerifyAndDeletion } from '../pages/VerifyAndDeletion.js';
import {loginData} from "../test-data/testData.js";
import {newBooksData} from "../test-data/testData.js";
import {newShelfData} from "../test-data/testData.js";
    
test("TC_023, TC_027, TC_028: Search, Verify, Delete", async ({page})=>{

    const pages = new VerifyAndDeletion(page);

// Login page opening and Login
    await pages.pageOpen();
    await pages.clickLoginLink();
    await pages.fillLoginEmail(loginData[0].email);
    await pages.fillLoginPass(loginData[0].pass);
    await pages.clickLoginButton();

// Search created shelf
    await pages.searchBarLink(newShelfData[0].shelfName);
    await pages.searchResultMatch();

// Verify the shelf and books information
    await pages.checkShelf(newShelfData[0].shelfName, newShelfData[0].shelfDescription);
    await pages.checkBookName(newBooksData[0].bookName);

// Verify the shelf and books information
    await pages.deleteShelf();
    await pages.deleteConfirmation();

    //await page.pause();

// Page closed
    await pages.pageClose();
        
});

//npx playwright test 06-verifyAndDeletion.test.js --headed


