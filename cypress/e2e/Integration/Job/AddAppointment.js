import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Appointment from '../../../support/CustomerDetails/Appointment';

describe('AddAppointment', () => {
  it('Add New Appointment', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const appointment = new Appointment();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    appointment.createAppointment();
    cy.fixture('appointment').then((newappointment) => {
      appointment.appointmentDetails(
        newappointment.title,
        newappointment.start_date,
        newappointment.end_date,
        newappointment.description
      );
      appointment.closeAppointmentBox();
    });
    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
