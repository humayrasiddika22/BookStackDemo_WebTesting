import { Login } from "./Login";

class CreateShelf extends Login{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.sLink = page.locator('a[href="https://demo.bookstackapp.com/shelves"]');
        this.createShelf = page.locator('a[href="https://demo.bookstackapp.com/create-shelf"]');
        this.sName = page.locator('label[for="name"]');
        this.sDescription = page.locator('div[class="editor-content-area "]');
        this.sSaveButton = page.locator('button[type="submit"]').last();
        this.s2Home = page.locator('a[href="https://demo.bookstackapp.com"]');

    }

// Navigation to the Shelf page
    async clickShelfLink(){
        await this.sLink.click();
    }

// Create a new shelf
    async createNewShelf(){
        await this.createShelf.click();
    }

    async fillShelfName(shelfName){
        await this.sName.fill(shelfName);
    }

    async fillShelfDescription(shelfDescription){
        await this.sDescription.fill(shelfDescription);
    }

    async shelfSaveButton(){
        await this.sSaveButton.click();
    }

    async shelfToHomePage(){
        await this.s2Home.click();
    }

}

export {CreateShelf}

