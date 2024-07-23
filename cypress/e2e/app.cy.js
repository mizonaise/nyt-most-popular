describe("NYT Most Popular Articles", () => {
  it("loads articles", () => {
    cy.visit("/");
    cy.contains("Most Popular Articles");
  });

  it("selects an article", () => {
    cy.visit("/");
    cy.get("li").first().click();
    cy.contains("Read more");
  });
});
