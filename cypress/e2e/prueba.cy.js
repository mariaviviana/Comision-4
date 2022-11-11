/// <reference types="cypress" />
describe('Primer desafio', () => {
    var productoss = []

    const leerProductos = () => {
        cy.get('[id="name"]').each(product => {
            productoss.push(product.text())
        });
        return productoss;
    }

    const randomNum = Math.floor(Math.random() * 1000)
    it('llegar a completar una tarea', () => {
        let tarea = 'tarea1'
        cy.visit('');
        cy.get('[name="user"]').type(`usuario${randomNum}`);
        cy.xpath('//input[@id="pass"]').type('password12!');
        cy.get('[value="Male"]').check({ force: true });
        cy.get('#day').select(29);
        cy.get('[name="month"]').select('October');
        cy.get('#year').select('1989')
        cy.get('[id="submitForm"]').click();
        cy.get('#onlineshoplink').click();
        const productos = leerProductos()
        cy.wrap({ text: productos }).its('text').then(producto => {
            expect(producto[0]).equal('Black T-Shirt')
        })



    });
});