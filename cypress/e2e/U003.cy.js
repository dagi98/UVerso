describe('Test fluidez de pantalla', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/');
    });

    it('La camara se mueve sin retrasos en la dirección izquierda y derecha', () => {
        cy.window().then((win) => {
            const initialX = win.getCameraX(); // guardamos la posición inicial de la cámara en X
            cy.wait(1000);
            // simulamos pulsar la tecla flecha izquierda durante un segundo
            cy.get('body').trigger('keydown', { keyCode: 37 });
            cy.wait(1500); // esperar un segundo y medio
            cy.get('body').trigger('keyup', { keyCode: 37 });

            // comprobamos que la posición de la cámara en X ha cambiado en la dirección esperada
            cy.window().then((win) => {
                const newX = win.getCameraX();
                expect(newX).to.be.greaterThan(initialX);
            });

            // simulamos pulsar la tecla flecha derecha durante un segundo
            cy.get('body').trigger('keydown', { keyCode: 39 });
            cy.wait(1500); // esperar un segundo y medio
            cy.get('body').trigger('keyup', { keyCode: 39 });

            // comprobamos que la posición de la cámara en X ha vuelto a la posición inicial
            cy.window().then((win) => {
                const finalX = win.getCameraX();
                expect(finalX).to.be.within(initialX * 0.95, initialX * 1.05);

            });

        });
    });


    it('La camara se mueve sin retrasos en la dirección ascendente y descendente', () => {
        cy.window().then((win) => {
            const initialY = win.getCameraY(); // guardamos la posición inicial de la cámara en y
            cy.wait(1000);
            // simulamos pulsar la tecla flecha ascendente durante un segundo
            cy.get('body').trigger('keydown', { keyCode: 38 });
            cy.wait(1500); // esperar un segundo y medio
            cy.get('body').trigger('keyup', { keyCode: 38 });

            // comprobamos que la posición de la cámara en Y ha cambiado en la dirección esperada
            cy.window().then((win) => {
                const newY = win.getCameraY();
                expect(newY).to.be.lessThan(initialY);
            });

            // simulamos pulsar la tecla flecha descendente durante un segundo
            cy.get('body').trigger('keydown', { keyCode: 40 });
            cy.wait(1500); // esperar un segundo y medio
            cy.get('body').trigger('keyup', { keyCode: 40 });

            // comprobamos que la posición de la cámara en Y ha vuelto a la posición inicial
            cy.window().then((win) => {
                const finalY = win.getCameraY();
                expect(finalY).to.be.within(initialY * 0.95, initialY * 1.05);

            });

        });
    });


    it('La camara se mueve sin retrasos al acercarse y alejarse', () => {
        cy.window().then((win) => {
            const initialZ = win.getCameraZ(); // guardamos la posición inicial de la cámara en y
            cy.wait(1000);
            // simulamos pulsar la tecla espacio durante un segundo
            cy.get('body').trigger('keydown', { keyCode: 32 });
            cy.wait(1500); // esperar un segundo y medio
            cy.get('body').trigger('keyup', { keyCode: 32 });

            // comprobamos que la posición de la cámara en Z ha cambiado en la dirección esperada
            cy.window().then((win) => {
                const newZ = win.getCameraZ();
                expect(newZ).to.be.lessThan(initialZ);
            });

            // simulamos pulsar la tecla alt gr durante un segundo
            cy.get('body').trigger('keydown', { keyCode: 18 });
            cy.wait(1500); // esperar un segundo y medio
            cy.get('body').trigger('keyup', { keyCode: 18 });

            // comprobamos que la posición de la cámara en Y ha vuelto a la posición inicial
            cy.window().then((win) => {
                const finalZ = win.getCameraZ();
                expect(finalZ).to.be.within(initialZ * 0.95, initialZ * 1.05);

            });

        });
    });


});
