/// <reference types = "Cypress" />
class Appointments {
  constructor() {
    //Locators
    this.globalappointments = '#appointments';
    this.apptsidebar = '.table-row';
    this.navtoappt = '.sidebar-appointments > :nth-child(4)';
    this.monthView = '.k-view-month';
    this.workweekView = '.k-view-workweek';
    this.weekView = '.k-view-week';
    this.dayView = '.k-view-day';
    this.user = '#state-filter';
    this.title = '[data-container-for="title"] > .k-input';
  }

  verifyAppointmentSidebarLength() {
    cy.get(this.apptsidebar).should(($appointmentisdebar) => {
      // should have found 4 elements
      expect($appointmentisdebar).to.have.length(4);
    });
  }

  navigateToJobFromSidebar() {
    cy.get(this.navtoappt).click();
  }

  viewMonthAppointments() {
    cy.get(this.monthView).click().should('not.be.disabled');
  }

  viewWorkWeekAppointments() {
    cy.get(this.workweekView).click().should('not.be.disabled');
  }

  viewWeekAppointments() {
    cy.get(this.weekView).click().should('not.be.disabled');
  }

  viewDayAppointments() {
    cy.get(this.dayView).click().should('not.be.disabled');
  }

  userField() {
    cy.get(this.user).click().should('not.be.disabled');
  }

  multipleUsers() {
    cy.contains('Demo User').click({ force: true });
    cy.contains('Test OCC').click({ force: true });
  }

  verifyUserAppointment() {
    cy.wait(3000);
    cy.contains('appointment 2').dblclick({ force: true });
    cy.get(this.title).should('have.value', 'This is test appointment 2 for scheduler');
  }
}
export default Appointments;
