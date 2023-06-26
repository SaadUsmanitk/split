/// <reference types = "Cypress" />

class ViewCustomerMenuOptions {
  constructor() {
    // View customer Details

    this.informationMenu = '#information > .k-link > .menu-text > .customer_nav_text';
    this.appointmentsMenu = '#appointments > .k-link > .menu-text > .customer_nav_text';
    this.propertyDataMenu = '#property_data > .k-link > .menu-text > .customer_nav_text';
    this.toolsMenu = '#tools > .k-link > .menu-text > .customer_nav_text';
    this.imagesMenu = '#images > .k-link > .menu-text > .customer_nav_text';
    this.documentsMenu = '#documents > .k-link > .menu-text > .customer_nav_text';
    this.measurementsMenu = '#measurements > .k-link > .menu-text > .customer_nav_text';
    this.notesMenu = '#notes > .k-link > .menu-text > .customer_nav_text';
    this.historyMenu = '#history > .k-link > .menu-text > .customer_nav_text';

    //View Company Information
    this.presentationsMenu = '#presentations';
    this.designToolsMenu = '#design_tools > .k-link > .menu-text > .customer_nav_text';
    this.estimatesMenu = '#estimates > .k-link > .menu-text > .customer_nav_text';

    //Proposals & Agreements
    this.agreementsMenu = '#contracts > .k-link > .menu-text > .customer_nav_text';
    this.proposalsMenu = '#proposals > .k-link';
    this.spinner = '#spinner';
  }

  viewInformation() {
    cy.get(this.informationMenu).click();
    cy.url().should('include', '/info');
  }

  viewAppointments() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.appointmentsMenu).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.url().should('include', '/appointments');
  }

  viewPropertyData() {
    cy.get(this.propertyDataMenu).click();
    cy.url().should('include', '/property');
  }

  viewTools() {
    cy.get(this.toolsMenu).click();
    cy.url().should('include', '/tools');
  }

  viewImages() {
    cy.get(this.imagesMenu).click();
    cy.url().should('include', '/images');
  }

  viewDocuments() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.documentsMenu).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.url().should('include', '/documents');
  }

  viewMeasurements() {
    cy.get(this.measurementsMenu).click();
    cy.url().should('include', '/measurements');
  }

  viewNotes() {
    cy.get(this.notesMenu).click();
    cy.url().should('include', '/notes');
  }

  viewHistory() {
    cy.get(this.historyMenu).click();
    cy.url().should('include', '/history');
  }

  viewPresentations() {
    cy.get(this.presentationsMenu).click();
    cy.url().should('include', '/presentations');
  }

  viewDesignTools() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.designToolsMenu).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.url().should('include', '/design-tools');
  }

  viewEstimates() {
    cy.get(this.spinner, { timeout: 15000 }).should('not.exist');
    cy.get(this.estimatesMenu).click();
    cy.get(this.spinner, { timeout: 15000 }).should('not.exist');
    cy.url().should('include', '/estimates/new');
  }

  viewProposals() {
    cy.get(this.proposalsMenu).click();
    cy.url().should('include', '/proposals');
  }

  viewAgreements() {
    cy.get(this.agreementsMenu).click();
    cy.url().should('include', '/contracts');
  }
}
export default ViewCustomerMenuOptions;
