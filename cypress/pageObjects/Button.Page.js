class ButtonPage {
    static get url(){
        return "/buttons";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get doubleClickButton(){
        return cy.get("#doubleClickBtn");
    };

    static get doubleClickValid(){
        return cy.get("#doubleClickMessage");
    }

    static get rightClickBtn(){
        return cy.get("#rightClickBtn");
    }

    static get rightClickValid(){
        return cy.get("#rightClickMessage");
    }

    static get dynClickBtn(){
        return cy.get('.btn-primary').eq(2);
    }

    static get dynClickValid(){
        return cy.get("#dynamicClickMessage");
    }
}

export default ButtonPage;