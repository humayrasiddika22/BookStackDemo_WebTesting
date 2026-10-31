import {expect} from '@playwright/test';
import { AddBooksToShelf } from "./AddBooksToShelf";

class VerifyAndDeletion extends AddBooksToShelf{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.cShelfN = page.locator('h1[class="flex fit-content break-text"]');
        this.cShelfD = page.locator('div[class="text-muted break-text"]');
        this.cBookN = page.locator('h2[class="text-limit-lines-2"]');

        this.delShelf = page.locator('a[data-shortcut="delete"]').first();
        this.cofDel = page.locator('button[type="submit"]').last();
    }

// Verify the shelf and books information
    async checkShelf(shelfName, shelfDescription){
        await expect(this.cShelfN).toBeVisible(shelfName);
        await expect(this.cShelfD).toBeVisible(shelfDescription);
    }

    async checkBookName(bookName){
        await expect(this.cBookN).toBeVisible(bookName);
    }

// Delete the shelf
    async deleteShelf(){
        await this.delShelf.click();
    }

    async deleteConfirmation(){
        await this.cofDel.click();
    }
}

export {VerifyAndDeletion}

