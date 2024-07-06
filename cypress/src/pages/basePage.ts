import { error } from "console";
import * as urls from "../../fixtures/urls.json";

export class BasePage {
  navigateTo(relativeUrl: string = "") {
    cy.visit(urls.baseUrl + relativeUrl);
  }

  selectDropdownOption(options: string | string[]) {
    if (typeof options === "string") {
      cy.contains(".option-cell.input-label", options).click();
    } else if (Array.isArray(options))
      options.forEach((option) => {
        cy.contains(".option-cell.input-label", option).click();
      });
    else {
      throw new error("Bad dropdown input data");
    }
  }
}

export const basePage = new BasePage();
