describe('TodoMVC', () => {
  it('should navigate to the TodoMVC app', () => {
    cy.visit('');
    cy.title().should('eq', 'TodoMVC: Angular');
  });

  it('should add a new todo', () => {
    cy.visit('');
    cy.get('input').filter('[placeholder="What needs to be done?"]').type('New Todo{enter}');
    cy.contains('app-todo-item', 'New Todo').should('be.visible');
  });

  it('should complete a todo', () => {
    cy.visit('');
    cy.get('input').filter('[placeholder="What needs to be done?"]').type('New Todo{enter}');
    cy.get('.toggle').check();
    cy.get('.toggle').check().should('be.checked');
  });
});
