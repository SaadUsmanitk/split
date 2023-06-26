import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Appointment from '../../../support/CustomerDetails/Appointment';
import NavigationMenu from '../../../support/NavigationMenu';
import Scheduler from '../../../support/Scheduler';

describe('VerifyAppointment', () => {
  it('Verify Appointment On Scheduler', { tags: 'CustomerDashboard' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const appointment = new Appointment();
    const navigationMenu = new NavigationMenu();
    const scheduler = new Scheduler();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    appointment.createAppointment();
    cy.fixture('appointment').then((newappointment) => {
      appointment.appointmentDetails(newappointment.scheduler_title, newappointment.scheduler_description);
      appointment.closeAppointmentBox();
    });
    appointment.createAppointment();
    cy.fixture('appointment').then((newappointment) => {
      appointment.appointmentDetails(newappointment.scheduler_title1, newappointment.scheduler_description1);
      appointment.closeAppointmentBox();
    });
    navigationMenu.backToCustomersScreen();
    navigationMenu.viewScheduler();
    scheduler.viewDayScheduler();
    scheduler.verifyAppointmentOfUser();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
