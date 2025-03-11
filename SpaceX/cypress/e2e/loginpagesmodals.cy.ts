describe("Signup and Login Flow", () => {
  it("should sign up and log in successfully", () => {
    cy.visit("http://localhost:3000/");

    cy.get("input[name='email']").type("deneme123@gmail.com");
    cy.get("input[name='password']").type("gs123123");
    cy.get("button[type='submit']").click();
    cy.get("input[name='password']").type("{backspace}{backspace}{backspace}456");
    cy.get("button[type='submit']").click();
    cy.url().should("include", "http://localhost:3000/anasayfa");
    cy.get("button[name='takvim']").click();
    cy.url().should("include", "http://localhost:3000/takvim");
    cy.get("button[name='etk1']").click();
    cy.get("button[name='back']").click();
    cy.get("button[name='etk2']").click();
    cy.get("button[name='back']").click();
    cy.get("button[name='etk3']").click();
    cy.get("button[name='back']").click();
    cy.get("button[name='etk4']").click();
    cy.get("button[name='back']").click();
    cy.get("button[name='etk5']").click();
    cy.get("button[name='back']").click();
    cy.get("button[name='etk6']").click();
    cy.get("button[name='back']").click();
    cy.get("button[name='etk7']").click();
    cy.get("button[name='back']").click();
    cy.get("button[name='etk8']").click();
    cy.get("button[name='back']").click();
    cy.get("button[name='anasayfa']").click();
    cy.url().should("include", "http://localhost:3000/anasayfa");
  });
});
