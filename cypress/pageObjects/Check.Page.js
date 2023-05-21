class CheckPage {
    static get url(){
        return "/checkbox";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get expandButton(){
        return cy.get('[aria-label="Expand all"]');
    };

    static get nodeTitles(){
        return cy.get(".rct-title");
    }

    static get selectedNodes(){
        return cy.get(".text-success");
    }
}

export default CheckPage;