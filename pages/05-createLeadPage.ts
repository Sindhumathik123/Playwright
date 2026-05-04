import { LeadPage } from "./04-leadPage";


export class CreateLeadPage extends LeadPage{

  async enterMandatoryDetails(){

    await this.lppage.locator(`#createLeadForm_companyName`).fill('Testleaf')
    await this.lppage.locator(`#createLeadForm_firstName`).fill('Ravindran')
    await this.lppage.locator(`#createLeadForm_lastName`).fill('R')
}

async clickSubmit(){
    await this.lppage.locator(`.smallSubmit`).click()
}

}

