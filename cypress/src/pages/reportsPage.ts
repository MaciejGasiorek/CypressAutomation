class ReportsPage{

    findReport(reportName:string)
    {
        cy.get('#filter_text').type(reportName).type('{enter}');
        cy.get('.listViewNameLink').contains(reportName).click();
    }

    runReport()
    {
         cy.contains('.input-label','Run Report').should('be.visible').scrollIntoView();
         cy.contains('.input-label','Run Report').click();
         cy.contains('.input-label','Run Report').click();
    }

    verifyReport()
    {
        cy.get('.listView', { timeout: 30000 }).should('be.visible');
        cy.get('.listHead').contains('Account Name').should('be.visible');
        cy.get('.listView tbody tr').its('length').should('be.gte', 1);
    }
 
}
export const reportsPage = new ReportsPage();