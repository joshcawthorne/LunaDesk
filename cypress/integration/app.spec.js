context("App", () => {
  it("Load the register page & register with a fake user", () => {
    function generateString(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }

      return result;
    }

    const email = generateString(6) + "@email.com";
    const password = generateString(10);

    cy.visit("http://localhost:3000/register");
    cy.contains("Register for LunaDesk");
    cy.get("#emailInput").type(email).should("have.value", email);
    cy.get("#passwordInput").type(password).should("have.value", password);
    cy.get("#registerButton").click();
    cy.contains("Check your email!");
  });
});
