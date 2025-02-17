describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  });

  it('Test case 1: Positive LogIn test', () => {

    cy.get('#username').type("student");
    cy.get('#password').type("Password123");
    cy.get('#submit').click();

    cy.get('.post-title').should('contain.text', 'Logged In Successfully');
  })
})