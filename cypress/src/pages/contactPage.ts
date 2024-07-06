import { BasePage } from "./basePage";
import { Categories } from "./enums/Categories";

class ContactPage extends BasePage {
 

  createNewContact(firstName:string, lastName:string,businessRole:string, categories: Categories[])
  {
    cy.get('button[name="SubPanel_create"]').click();
    cy.get('input[name="first_name"]').type(firstName);
    cy.get('input[name="last_name"]').type(lastName);
    
    //Select 'Business Role' in dropdown
    cy.get('#DetailFormbusiness_role-input-label').click();
    this.selectDropdownOption(businessRole);

    //Select Category in dropdown
    cy.get('#DetailFormcategories-input').click();
    this.selectDropdownOption(categories);

    //Click 'Save' btn 
    cy.get('button#DetailForm_save2').click();
  }

  editContact()
  {
    cy.get('#DetailForm_edit-label').click();
  }

  verifyContactDetails(firstName: string, lastName:string, businessRole:string, categories: Categories[]) {
    cy.get('input[name="first_name"]').invoke('attr','value').should('eq',firstName);

    categories.forEach(category => {
      cy.contains('#DetailFormcategories-input-body', category).should('exist');
    });

    cy.get('#DetailFormbusiness_role-input-label').should('contain',businessRole)
  }
}
export const contactPage = new ContactPage();