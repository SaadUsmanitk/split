/// <reference types="cypress" />
class AdministrationNavigation {
  constructor() {
    //Locators

    this.information = 'Information';
    this.notification = 'Notifications';
    this.setup = 'Setup';
    this.preferences = 'Preferences';
    this.settings = 'Settings';
    this.jobs = 'Jobs';
    this.childOrgs = 'Child Orgs';
    this.users = 'Users';
    this.billing = 'Billing';
    this.integrations = 'Integrations';
    this.documents = 'Documents';
    this.presentation = 'Presentations';
    this.pricelists = 'Price Lists';
    this.pricelisteditor = 'Price List Editor';
    this.measurementlinks = 'Measurement Links';
    this.pdfpatterneditor = 'PDF Pattern Editor';
    this.paymentterms = 'Payment Terms';
    this.Jobtypes = 'Job Attributes';
    this.discounts = 'Discounts';
    this.statistics = 'Statistics';
    this.emailhistory = 'Email History';
    this.orgnav = 'body > div.container-fluid > div';
  }

  selectAdministration() {
    cy.get(this.orgnav).contains('QA').click();
  }

  viewInformation() {
    cy.contains(this.information).click();
    cy.url().should('include', '/info');
  }

  viewNotification() {
    cy.contains(this.notification).click();
    cy.url().should('include', '/notifications');
  }

  viewSetup() {
    cy.contains(this.setup).click();
    cy.url().should('include', '/setup');
  }

  viewPreferences() {
    cy.contains(this.preferences).click();
    cy.url().should('include', '/preferences');
  }

  viewSettings() {
    cy.contains(this.settings).click();
    cy.url().should('include', '/settings');
  }

  viewJobs() {
    cy.contains(this.jobs).click();
    cy.url().should('include', '/jobs');
  }

  viewChildOrgs() {
    cy.contains(this.childOrgs).click();
    cy.url().should('include', '/orgs');
  }

  viewUsers() {
    cy.contains(this.users).click();
    cy.url().should('include', '/users');
  }

  viewbilling() {
    cy.contains(this.billing).click();
    cy.url().should('include', '/billing');
  }

  viewIntegration() {
    cy.contains(this.integrations).click();
    cy.url().should('include', '/integrations');
  }

  viewDocuments() {
    cy.contains(this.documents).click();
    cy.url().should('include', '/documents');
  }

  viewPresentation() {
    cy.contains(this.presentation).click();
    cy.url().should('include', '/presentations');
  }

  viewPriceList() {
    cy.contains(this.pricelists).click();
    cy.url().should('include', '/price_lists');
  }

  viewPricelistEditor() {
    cy.contains(this.pricelisteditor).click();
    cy.url().should('include', '/price_list_editor');
  }

  viewMeasurementLinks() {
    cy.contains(this.measurementlinks).click();
    cy.url().should('include', '/measurement_links');
  }

  viewPdfPatternEditor() {
    cy.contains(this.pdfpatterneditor).click();
    cy.url().should('include', '/patterns');
  }

  viewPaymentTerms() {
    cy.contains(this.paymentterms).click();
    cy.url().should('include', '/payment_terms');
  }

  viewJobTypes() {
    cy.contains(this.Jobtypes).click();
    cy.url().should('include', '/job_type');
  }

  viewDiscounts() {
    cy.contains(this.discounts).click();
    cy.url().should('include', '/discounts');
  }

  viewStatistics() {
    cy.contains(this.statistics).click();
    cy.url().should('include', '/stats');
  }

  viewEmailHistory() {
    cy.contains(this.emailhistory).click();
    cy.url().should('include', '/emails');
  }
}

export default AdministrationNavigation;
