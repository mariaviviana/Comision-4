/// <reference types="cypress" />
describe("Primer desafio", () => {
  it("Deberia registrar, loguear y eliminar al usuario", () => {
    const numero = Math.floor(Math.random() * 1000);
    const username = `Viviana${numero}`;

    cy.request({
      url: "http://pushing-it-backend.herokuapp.com/api/register",
      method: "POST",
      body: {
        username,
        password: "123456!",
        gender: "female",
        day: "13",
        month: "july",
        year: "1975",
      },
    }).then((respuesta) => {
      expect(respuesta.status).equal(200);
    });
    cy.request({
      url: "http://pushing-it-backend.herokuapp.com/api/login",
      method: "POST",
      body: {
        username,
        password: "123456!",
      },
    })
      .then((respuesta) => {
        expect(respuesta.status).equal(200);
      })
      .then(() => {
        cy.request({
          url: `https://pushing-it-backend.herokuapp.com/api/deleteuser/${username}`,
          method: "DELETE",
        }).then((respuesta) => {
          expect(respuesta.status).equal(200);
        });
      });
  });
});
