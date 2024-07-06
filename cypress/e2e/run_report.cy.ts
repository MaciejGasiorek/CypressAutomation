import { loginPage } from "../src/pages/loginPage";
import {basePage} from "../src/pages/basePage"
import{reportsPage} from "../src/pages/reportsPage"
import * as urls from  '../fixtures/urls.json'
import { Categories } from "../src/pages/enums/Categories";
import { BusinessRole } from "../src/pages/enums/BusinessRole";

describe("Run report",()=>
    {
      before(() => {
    
        //Navigate to LoginPage
        basePage.navigateTo();
      });
    
      it('should run “Project Profitability” report',()=>
      {
        //Input user Name and Password
      loginPage.login(Cypress.env('userName'), Cypress.env('password'));
    
      //Navigate to contacts
      basePage.navigateTo(urls.reportPageUrl);
    
      reportsPage.findReport("Project Profitability");
      reportsPage.runReport();
      reportsPage.verifyReport();
      })
    })