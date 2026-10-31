import { Login } from "./Login";

class AddBooksToShelf extends Login{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.searchLink = page.locator('#header-search-box-input').first();
        this.matchResult = page.getByText('Land of Magic and Fairies').first();
        this.eShelf = page.locator('a[data-shortcut="edit"]').first();
        this.sBook = page.locator('input[class="scroll-box-search"]');
        this.addBookb = page.locator('xpath=/html/body/div[4]/div/div/div/div/main/form/div[3]/div[2]/ul/li[4]/div[3]/button[4]');
        this.sSaveButton = page.locator('button[type="submit"]').last();

    }

// Search the newly created shelf
    async searchBarLink(shelfName){
        await this.searchLink.fill(shelfName);
    }

    async searchResultMatch(){
        await this.matchResult.click();
    }

// Add books to the shelf
    async clickEditShelf(){
        await this.eShelf.click();
    }

    async searchBook(bookName){
        await this.sBook.fill(bookName);
    }

    async addBook2Shelf(){
        await this.addBookb.click();
    }

    async shelfSaveButton(){
        await this.sSaveButton.click();
    }
}

export {AddBooksToShelf}

