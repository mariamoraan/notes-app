describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/");
    cy.contains("ILoveNotes");
  });
});
