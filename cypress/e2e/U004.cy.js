describe('Los objetos son renderizados', () => {


    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    });

   

    it('Captura para visualización de NFT y Objetos', () => {
        cy.wait(3000);
        cy.get('body').trigger('keydown', { keyCode: 18 }); // simula pulsar la tecla alt gr
        cy.wait(1000); 
        cy.get('body').trigger('keyup', { keyCode: 18 }); // simula soltar la tecla alt gr
        cy.screenshot('U004');
    });
});