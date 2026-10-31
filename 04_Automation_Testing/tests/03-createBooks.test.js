import {test, expect} from '@playwright/test';
import { CreateBooks } from '../pages/CreateBooks.js';
import {loginData} from "../test-data/testData.js";
import {newBooksData} from "../test-data/testData.js";
    
test("TC_008: Create books with valid details", async ({page})=>{

    const pages = new CreateBooks(page);

// Login page opening and Login
    await pages.pageOpen();
    await pages.clickLoginLink();
    await pages.fillLoginEmail(loginData[0].email);
    await pages.fillLoginPass(loginData[0].pass);
    await pages.clickLoginButton();

// Create a new book
    for (let j = 0; j < newBooksData.length; j++) {
        await pages.clickBookLink();
        await pages.createNewBook();
        await pages.fillBookName(newBooksData[j].bookName);
        await pages.fillBookDescription(newBooksData[j].bookDescription);
        await pages.bookSaveButton();
        await pages.bookToHomePage();
    }

    //await page.pause();

// Page closed
    await pages.pageClose();
        
});
//npx playwright test 03-createBooks.test.js --headed


