import { Page } from "@playwright/test"
import{test} from "@playwright/test"


export abstract class PWWrapper {

    lppage: Page // Global variable that hold the page instance "page"

    constructor(Tpage: Page) { // Tpage (Local variable) == page that is passed as a argument
        this.lppage = Tpage // this.lppage = Tpage (means lppage === page (instance))
    }

    async clearAndFill(locator: string, data: string, name: string) {

        try {
            test.step(`Clear the field and enter with ${data} in ${name}`, async () => {
                const ele = this.lppage.locator(locator)
                await ele.clear()
                await ele.fill(data)

            })

        } catch(error){
            console.log(error);            
        }

    }

}