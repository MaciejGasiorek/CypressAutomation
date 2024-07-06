class LoginPage {

  login(username, password) {
    cy.get('input[name="user_name"]').type(username);
    cy.get('input[name="user_password"]').type(password);
    cy.get('button[type="submit"]').click();
  }
}

export const loginPage = new LoginPage();