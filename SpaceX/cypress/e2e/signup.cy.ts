describe("Signup and Login Flow", () => {
    it("should sign up and log in successfully", () => {
      cy.visit("http://localhost:3000/signup");
  
      cy.get("input[name='email']").type("deneme123@gmail.com",);
      cy.get("input[name='password']").type("gs123456");
      cy.get("input[name='cpassword']").type("gs123123");
      cy.get("button[type='submit']").click();
      cy.get("input[name='cpassword']").type("{backspace}{backspace}{backspace}456", { delay: 100 });
      cy.get("button[type='submit']").click();
      cy.url().should("include", "http://localhost:3000");
      cy.wait(1500)
      cy.get("input[name='email']").type("deneme123@gmail.com");
      cy.get("input[name='password']").type("gs123123");
      cy.get("button[type='submit']").click();
      cy.get("input[name='password']").type("{backspace}{backspace}{backspace}456", { delay: 100 });
      cy.get("button[type='submit']").click();
      cy.url().should("include", "http://localhost:3000/anasayfa");
    });
  });
  