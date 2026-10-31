import { Login } from "./Login";

class CreateBooks extends Login{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.bLink = page.locator('a[href="https://demo.bookstackapp.com/books"]');
        this.createBook = page.locator('a[href="https://demo.bookstackapp.com/create-book"]');
        this.bName = page.locator('label[for="name"]');
        this.bDescription = page.locator('div[class="editor-content-area "]');
        this.bSaveButton = page.locator('button[type="submit"]').last();
        this.b2Home = page.locator('a[href="https://demo.bookstackapp.com"]');

    }

// Navigation to the Book page
    async clickBookLink(){
        await this.bLink.click();
    }

// Create a new book
    async createNewBook(){
        await this.createBook.click();
    }

    async fillBookName(bookName){
        await this.bName.fill(bookName);
    }

    async fillBookDescription(bookDescription){
        await this.bDescription.fill(bookDescription);
    }

    async bookSaveButton(){
        await this.bSaveButton.click();
    }

    async bookToHomePage(){
        await this.b2Home.click();
    }

}

export {CreateBooks}

