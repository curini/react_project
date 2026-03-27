import React from "react";
import Title from "./title";

describe("<Title />", () => {
  it("renders", () => {
    cy.mount(<Title>Accueil</Title>);
    cy.get("h1").should("contain.text", "Accueil");
  });
});
