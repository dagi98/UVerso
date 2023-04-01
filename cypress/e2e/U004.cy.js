describe('Verificar el color de fondo del canvas', () => {
  it('Debe encontrar el elemento box', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(5000);
    // Esperar a que se cargue el elemento
    cy.get('canvas[data-engine="three.js r147"]').its('box').should('have.property', 'name', 'box')


  });
});

