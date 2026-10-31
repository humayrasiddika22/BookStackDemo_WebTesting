import {test, expect} from '@playwright/test';
import { AddBooksToShelf } from '../pages/AddBooksToShelf.js';
import {loginData} from "../test-data/testData.js";
import {newBooksData} from "../test-data/testData.js";
import {newShelfData} from "../test-data/testData.js";
    
test("TC_020: Adding created Books to the new Shelf", async ({page})=>{

    const pages = new AddBooksToShelf(page);

// Login page opening and Login
    await pages.pageOpen();
    await pages.clickLoginLink();
    await pages.fillLoginEmail(loginData[0].email);
    await pages.fillLoginPass(loginData[0].pass);
    await pages.clickLoginButton();

// Search created shelf
    await pages.searchBarLink(newShelfData[0].shelfName);
    await pages.searchResultMatch();

// Add books to the shelf
    await pages.clickEditShelf();
    await pages.searchBook(newBooksData[0].bookName);
    await pages.addBook2Shelf();
    await pages.shelfSaveButton();

    //await page.pause();

// Page closed
    await pages.pageClose();
        
});

//npx playwright test 05-addBooksToShelf.test.js --headed


