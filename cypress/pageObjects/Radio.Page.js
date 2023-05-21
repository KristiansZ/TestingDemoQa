class RadioPage {
    static get url(){
        return "/radio-button";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get yesButton(){
        return cy.get("#yesRadio + label");
    };

    static get impresButton(){
        return cy.get("#impressiveRadio");
    }

    static get selectedText(){
        return cy.get(".text-success");
    }

    static get noDisabled(){
        return cy.get("#noRadio");
    }
}

export default RadioPage;