class TextPage {
    static get url(){
        return "/text-box";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get userName(){
        return cy.get("#userName");
    };

    static get emailField(){
        return cy.get("#userEmail");
    };

    static get currentAddress(){
        return cy.get("#currentAddress");
    };

    static get permanentAdress(){
        return cy.get("#permanentAddress");
    };

    static get submitButton(){
        return cy.get("#submit");
    };

    static get userNameOutput(){
        return cy.get("#name");
    };

    static get emailOutput(){
        return cy.get("#email");
    };

    static get currentAddressOutput(){
        return cy.get("#output #currentAddress");
    };

    static get permanentAddressOutput(){
        return cy.get("#output #permanentAddress");
    };

    static get emailValid(){
        return cy.get(".field-error");
    }

}

export default TextPage;