describe('Test movimiento UVerso', () => {


    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    });

    it('La escena se renderiza correctamente', () => {
        cy.get('canvas').should('exist');
        //cy.window().its("web3").should("exist");
    });



    it('La camara se mueve dirección descendente', () => {

        cy.get('body').trigger('keydown', { keyCode: 38 }); // simula pulsar la tecla 38
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 38 }); // simula soltar la tecla 38
        cy.window().then((win) => {
            cy.wrap(win).invoke('getCameraY').should('be.within', 1.5, 2); // comprueba que la posición y de la cámara está entre 1.5 y 2
        });
    });

    it('La camara se mueve dirección ascendente', () => {

        cy.get('body').trigger('keydown', { keyCode: 40 }); // simula pulsar la tecla 40
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 40 }); // simula soltar la tecla 40
        cy.window().then((win) => {
            cy.wrap(win).invoke('getCameraY').should('be.within', 8, 8.5);
        });
    });

    it('La camara se mueve dirección derecha', () => {

        cy.get('body').trigger('keydown', { keyCode: 37 }); // simula pulsar la tecla 37
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 37 }); // simula soltar la tecla 37
        cy.window().then((win) => {
            cy.wrap(win).invoke('getCameraX').should('be.within', 3.5, 4.5);
        });
    });
    it('La camara se mueve dirección izquierda', () => {

        cy.get('body').trigger('keydown', { keyCode: 39 }); // simula pulsar la tecla 39
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 39 }); // simula soltar la tecla 39
        cy.window().then((win) => {
            cy.wrap(win).invoke('getCameraX').should('be.within', -2.5, -1.5);
        });
    });
});

describe('Test movimiento incorrecto UVerso', () => {


    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    });

    it('La escena se renderiza correctamente', () => {
        cy.get('canvas').should('exist');
        //cy.window().its("web3").should("exist");
    });


    it('La camara no se mueve con otras teclas', () => {

        cy.get('body').trigger('keydown', { keyCode: 87 }); // simula pulsar la tecla W
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 87 }); // simula soltar la tecla w

        cy.get('body').trigger('keydown', { keyCode: 83 }); // simula pulsar la tecla S
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 83 }); // simula soltar la tecla S

        cy.get('body').trigger('keydown', { keyCode: 65 }); // simula pulsar la tecla A
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 65 }); // simula soltar la tecla A

        cy.get('body').trigger('keydown', { keyCode: 68 }); // simula pulsar la tecla D
        cy.wait(1000); // espera un segundo
        cy.get('body').trigger('keyup', { keyCode: 68 }); // simula soltar la tecla D

        cy.window().then((win) => {
            cy.wrap(win).invoke('getCameraX').should('equal', 1);
            cy.wrap(win).invoke('getCameraY').should('equal', 5);
            cy.wrap(win).invoke('getCameraZ').should('equal', 25);
        });
    });


});


/*      it('moves camera correctly with arrow keys', () => {
            cy.get('canvas').trigger('keydown', { keyCode: 38 });
            cy.wait(500);
            cy.get('canvas').trigger('keyup', { keyCode: 38 });
            cy.wait(500);
            cy.get('canvas').trigger('keydown', { keyCode: 40 });
            cy.wait(500);
            cy.get('canvas').trigger('keyup', { keyCode: 40 });
    });
    
         it('builds buildings and adds to scene', () => {
            cy.wait(1000);
            cy.get("[id='box']").should('exist');
    });

        it('logs result correctly', () => {
            cy.wait(1000);
            cy.get('canvas').then(() => {
            cy.get('.log-preview span').contains('"result":');
        });
    });
    */
