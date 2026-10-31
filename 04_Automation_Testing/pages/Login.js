import { Base } from "./Base";

class Login extends Base{
    constructor(page){
        super(page)
        this.page = page;

// Locators
        this.loginLink = page.locator('a[href="https://demo.bookstackapp.com/login"]');
        this.loginEmail = page.locator('#email');
        this.loginPassword = page.locator('#password');
        this.loginButton = page.locator('button[class="button"]');

        this.vLogin = page.locator('button[class="user-name py-s hide-under-l"]');

    }

// Login page
    async clickLoginLink(){
        await this.loginLink.click();
    }

// Login info fillup
    async fillLoginEmail(email){
        await this.loginEmail.fill(email);
    }

    async fillLoginPass(pass){
        await this.loginPassword.fill(pass);
    }

// Log in
    async clickLoginButton(){
        await this.loginButton.click();
    }

// Verify login account
    async verifyLogin(){
        await this.vLogin.textContent();
    }

}

export {Login}

