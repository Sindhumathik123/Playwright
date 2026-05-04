import {chromium, Page, selectors} from "@playwright/test"
import { locators } from "./locators"
import { PWWrapper } from "../utility/playwrightWrapper";
 export class LoginPage extends PWWrapper {

    // lppage : Page // Global variable that hold the page instance "page"

    // constructor(Tpage : Page){ // Tpage (Local variable) == page that is passed as a argument
    //    this.lppage = Tpage // this.lppage = Tpage (means lppage === page (instance))
    // }

    async loadurl(url : string){
        await this.lppage.goto(url)  // await page.goto   

    }

    async enterCredentials(username:string, password : string){
        // await this.lppage.locator(locators.usernameField).fill(username)
        // await this.lppage.locator(locators.PwdField).fill(password)

        await this.clearAndFill(locators.usernameField,username,"USERNAME");
        await this.clearAndFill(locators.PwdField,password,"PASSWORD")
        await this.lppage.waitForTimeout(3000)
    }

    async clickLogin(){
        await this.lppage.locator(locators.login_logout).click()
    }

}

