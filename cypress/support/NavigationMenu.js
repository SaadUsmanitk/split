/// <reference types="cypress" />
class NavigationMenu {
  constructor() {
    //Locators

    this.customerDetailScreen = '#job-list > span > div > div:nth-child(1) > div > div.job-list-hover';
    this.dashboardIcon = '.navbar-brand > .ng-scope';
    this.appointmentMenu = '#navbar > ul > li:nth-child(6) > a';
    this.customerMenu = 'Customers';
    this.administrationMenu = 'Administration';
    this.search = '#search';
    this.backToCustomer = 'Back to All Customers';
    this.backToCustomers = '.customer-nav-back';
    this.cancel =
      'body > div.modal.on-top-modal.fade.ng-scope.ng-isolate-scope.show > div > div > div.modal-footer.ng-scope > button.btn.btn-default';
    this.addJobScreen = 'Add Job';
    this.customersInGridView = '.btn-light > .ng-scope';
    this.customersInLinearView = 'button.btn.btn-success';
    this.signout = 'Logout';
    this.customer = 'Customers';
    this.customerDiv = '#job-list > span > div > div:nth-child(1) > div';
    this.viewDetailButton = '//*[@id="job-list"]/span/div/div[1]/div/div[5]/a';
    this.jobbox = '#job-list > span > div > div:nth-child(1) > div';
    this.navMenu = '[data-testid="dropdown-toggle"] > .row';
    this.spinner = '.spinner-graphic';
    this.selectOrgProfileDropdown = '[href="/orgs/accesses"]';
    (this.selectOrgListProfileDropdown = Cypress.env('org')),
      (this.orgID = '[ng-repeat="org in $ctrl.orgResponse.orgs"][href="/orgs/5/info?parent_id=2"] > :nth-child(2)');
    this.orgName = '#name';
    this.orgEmptyError = '.has-error > .ng-scope';
    this.scheduler = 'Scheduler';
    this.apptsidebar = '.sidebar-appointments';
    this.orgs = 'body > div.container-fluid > div > div > div > div:nth-child(2) > div > table > tbody';
  }

  viewDashboardIcon() {
    cy.get(this.dashboardIcon).click();
    cy.url().should('include', '/jobs');
  }

  viewCustomerDetailScreen() {
    cy.get(this.customerDetailScreen).invoke('show');
    cy.contains('View Details').click();
  }

  viewAppointmentMenu() {
    cy.get(this.appointmentMenu).click({ force: true });
    cy.url().should('include', '/calendar');
  }

  viewCustomerMenu() {
    cy.contains(this.customerMenu).click();
    cy.url().should('include', '/jobs');
  }

  viewAdministrationMenu() {
    cy.contains(this.administrationMenu).click();
    cy.url().should('include', '/orgs');
  }

  viewSearchFunctionality(searchText) {
    cy.get(this.jobbox).should('be.visible');
    cy.get(this.search).clear().type(searchText);
  }

  backToCustomerScreen() {
    cy.contains(this.backToCustomer).scrollIntoView();
    cy.get(this.backToCustomers, { timeout: 35000 }).click({ force: true });
    cy.url().should('include', '/jobs');
  }

  backToCustomersScreen() {
    cy.contains(this.backToCustomer).scrollIntoView();
    cy.get(this.backToCustomers, { timeout: 35000 }).click({ force: true });
    cy.url().should('include', '/jobs');
  }

  viewAddJobScreen() {
    cy.contains(this.addJobScreen).click();
  }

  viewCustomersInGridView() {
    cy.get(this.customersInGridView).click();
  }

  viewCustomersInLinearView() {
    cy.get(this.customersInLinearView).click();
  }

  LogOut() {
    cy.get(this.navMenu).click();

    cy.contains(this.signout).click();
  }

  profileMenu() {
    cy.contains(this.customerMenu).click();
    cy.url().should('include', '/jobs');
    cy.get(this.navMenu).click();
  }

  selectOrganization() {
    cy.contains(this.customerMenu).click();
    cy.url().should('include', '/jobs');
    cy.get(this.navMenu).click();
    cy.get(this.selectOrgProfileDropdown).click();
    cy.get(this.selectOrgListProfileDropdown).click();
  }

  selectOrgName() {
    cy.contains(this.administrationMenu).click();
    cy.url().should('include', '/orgs');
    cy.get(this.orgs).contains(/^QA$/).click();
    cy.get(this.orgName).clear();
    cy.contains(this.orgEmptyError, 'Required');
  }

  viewScheduler() {
    cy.contains(this.scheduler).click({ force: true });
    cy.url().should('include', '/scheduler');
  }

  viewApptSidebar() {
    cy.get(this.apptsidebar);
    cy.contains('Upcoming Appointments');
  }
}

export default NavigationMenu;
