describe('Test movimiento en el eje z', () => {


    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    });

    it('La escena se renderiza correctamente', () => {
        cy.get('canvas').should('exist');
       // cy.window().its("web3").should("exist");
    });


    it('La camara avanza en eje z', () => {

        cy.get('body').trigger('keydown', { keyCode: 32 }); // simula pulsar la tecla espacio
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 32 }); // simula soltar la tecla espacio
        cy.window().then((win) => {
            cy.wrap(win).invoke('getCameraZ').should('be.within', 21, 22);
        });
    });

    it('La camara retrocede en eje z', () => {

        cy.get('body').trigger('keydown', { keyCode: 18 }); // simula pulsar la tecla alt gr
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 18 }); // simula soltar la tecla alt gr
        cy.window().then((win) => {
            cy.wrap(win).invoke('getCameraZ').should('be.within', 27.5, 28.5);
        });
    });


});

describe('Test no hay movimiento en el eje z', () => {


    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    });

    it('La escena se renderiza correctamente', () => {
        cy.get('canvas').should('exist');
       // cy.window().its("web3").should("exist");
    });


    it('La camara no se desplaza en eje z', () => {

        cy.get('body').trigger('keydown', { keyCode: 107 }); // simula pulsar la tecla +
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 107 }); // simula soltar la tecla +

        cy.get('body').trigger('keydown', { keyCode: 109 }); // simula pulsar la tecla -
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 109 }); // simula soltar la tecla -

        cy.window().then((win) => {
            cy.wrap(win).invoke('getCameraZ').should('equal', 25);
        });
    });





});