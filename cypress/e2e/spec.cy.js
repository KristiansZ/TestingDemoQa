import TextPage from "../pageObjects/Text.Page.js";
import CheckPage from "../pageObjects/Check.Page.js";
import RadioPage from "../pageObjects/Radio.Page.js";
import ButtonPage from "../pageObjects/Button.Page.js";

describe("DemoQA spec", () => {
    context("Textbox scenarios", () => {
        beforeEach(() => {
            cy.visit("/text-box");
            TextPage.visit();
        });
    
        it.only("Textbox - positive case", () => {
            TextPage.userName.type("sheesh");
            TextPage.emailField.type("siuuu@hy.lv")
            TextPage.currentAddress.type("Nonya Binness St.");
            TextPage.permanentAdress.type("Styll Nonya Binness St.");
            TextPage.submitButton.click();
            TextPage.userNameOutput.should("have.text", "Name:sheesh");
            TextPage.emailOutput.should("have.text", "Email:siuuu@hy.lv");
            TextPage.currentAddressOutput.should("have.text", "Current Address :Nonya Binness St. ");
            TextPage.permanentAddressOutput.should("have.text", "Permananet Address :Styll Nonya Binness St.");
        });

        it("Textbox - negative case", ()  =>{
            TextPage.emailField.type("siu@uu@hy.lv");
            TextPage.submitButton.click();
            TextPage.emailValid.should("be.visible");
        });
    });

    context("Checkbox scenarios", () => {
        beforeEach(() => {
            cy.visit("/checkbox");
            CheckPage.visit();
        });
        
        it("Check values", () => {
            CheckPage.expandButton.click();
            CheckPage.nodeTitles.contains("Notes").click();
            CheckPage.nodeTitles.contains("Angular").click();
            CheckPage.nodeTitles.contains("Private").click();
            CheckPage.nodeTitles.contains("Excel File").click();
            CheckPage.selectedNodes.should("contain.text", "notes", "angular", "private", "excelFile");
        })

        it("Check value - Office", () => {
            CheckPage.expandButton.click();
            CheckPage.nodeTitles.contains("Office").click();
            CheckPage.selectedNodes.should("contain.text", "office", "public", "private", "classified", "general");
        })
    });

    context("Radio button scenarios", () => {
        beforeEach(() => {
            cy.visit("/radio-button");
            RadioPage.visit();
        });
        
        it("Validate buttons", () => {
            RadioPage.yesButton.click();
            RadioPage.selectedText.should("contain.text", "Yes");
            RadioPage.impresButton.click({force:true});
            RadioPage.selectedText.should("contain.text", "Impressive");
            RadioPage.noDisabled.should("be.disabled");         
        })
    })

    context("Buttons", () => {
        beforeEach(() => {
            cy.visit("/buttons");
            ButtonPage.visit();
        });
        
        it("Button clicking", () => {
            ButtonPage.doubleClickButton.dblclick();
            ButtonPage.doubleClickValid.should("have.text", "You have done a double click");
            ButtonPage.rightClickBtn.rightclick();
            ButtonPage.rightClickValid.should("have.text", "You have done a right click");
            ButtonPage.dynClickBtn.click();
            ButtonPage.dynClickValid.should("have.text", "You have done a dynamic click");

        })
    })
  });