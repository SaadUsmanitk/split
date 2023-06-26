/// <reference types = "Cypress" />
class Appointment {
  constructor() {
    // create new appointment
    this.appointment = '#appointments';
    this.addappointment = '.add-appt';
    this.addnewappointment = ':nth-child(18) > .fc-timegrid-slot-lane';

    // add appointment details
    this.title = '#summary';
    this.startdate = '#start_date';
    this.enddate = '#end_date';
    this.description = '#description';
    this.savebutton = '.btn-save';
    this.closeappointment = 'body > div.fade.modal.show > div > div > div.modal-footer > button';
  }

  createAppointment() {
    cy.get(this.appointment).click();
    cy.url().should('include', '/appointments');
    cy.get(this.addappointment).click();
    cy.wait(3000);
    cy.get(this.addnewappointment).dblclick({ force: true });
  }

  appointmentDetails(title, description) {
    const date = new Date();
    var DateFormat;

    DateFormat =
      date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

    let currentdate = DateFormat;
    cy.get(this.title).clear().type(title);
    cy.get(this.startdate).clear().type(currentdate);
    cy.get(this.enddate).clear().type(currentdate);
    cy.get(this.description).type(description);
    cy.get(this.savebutton).click();
  }

  closeAppointmentBox() {
    cy.get(this.closeappointment).click();
  }
}
export default Appointment;
