import {test, expect} from '@playwright/test';
import { Login } from '../pages/Login';
import {loginData} from "../test-data/testData.js";

test("TC_001: Admin login successfully with valid credentials", async ({page})=>{

    const pages = new Login(page);

// Login page opening
    await pages.pageOpen();
    await pages.clickLoginLink();

// Login info fillup
    await pages.fillLoginEmail(loginData[0].email);
    await pages.fillLoginPass(loginData[0].pass);

// Log in
    await pages.clickLoginButton();

// Verify login account
    await pages.verifyLogin();
    //await page.pause();

// Page closed
    await pages.pageClose();
        
});

//npx playwright test 02-logni.test.js --headed


