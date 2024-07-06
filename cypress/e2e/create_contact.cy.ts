import { loginPage } from "../src/pages/loginPage";
import { contactPage } from "../src/pages/contactPage";
import {basePage} from "../src/pages/basePage"
import * as urls from  '../fixtures/urls.json'
import { Categories } from "../src/pages/enums/Categories";
import { BusinessRole } from "../src/pages/enums/BusinessRole";

import { loginByApi } from "../support/loginApi";



describe("Create Contact", () => {
  const testFirstName = `testFirstName_${Math.random().toString().slice(2, 12)}`
  const testLastName =  `testLastName_${Math.random().toString().slice(2, 12)}`
  before(() => {
    //Navigate to LoginPage
    basePage.navigateTo();
  });


it('should create a new contact', () => {
  //Input user Name and Password
  //loginPage.login(Cypress.env('userName'), Cypress.env('password'));

  //Login via API
  loginByApi(Cypress.env('userName'), Cypress.env('password'));
  
  //Navigate to contacts
  basePage.navigateTo(urls.contactsPageUrl)

  //Create new contact
  contactPage.createNewContact(testFirstName,testLastName,BusinessRole.Admin,[Categories.Customers,Categories.Suppliers]);

  //Open/Edit contact 
  contactPage.editContact();

  //Verify contact Details
  contactPage.verifyContactDetails(testFirstName,testLastName,BusinessRole.Admin,[Categories.Customers,Categories.Suppliers])
});
});


