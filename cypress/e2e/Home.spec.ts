import { convertNumericMounthToText } from "../../src/Services/Common/Functions";
describe("test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it.only("Paragraph content", () => {
    const date = new Date();
    cy.get("[data-cypress-day-test]").contains(date.getDay());
    cy.get("[data-cypress-year-test]").contains(date.getFullYear());
    cy.get("[data-cypress-month-test]").contains(
      convertNumericMounthToText(date.getMonth())
    );
  });
});
