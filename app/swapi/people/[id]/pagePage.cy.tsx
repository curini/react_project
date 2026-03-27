import React from "react";
import Content from "./_content";

describe("<Page />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    const body = {
      name: "Perso test",
      birth_year: "900",
      eye_color: "brown",
      gender: "male",
      films: [""],
      hair_color: "",
      height: "190",
      homeworld: "",
      vehicles: [""],
    };
    cy.mount(<Content body={body} />);
    cy.contains("Page du personnage");
  });
});
