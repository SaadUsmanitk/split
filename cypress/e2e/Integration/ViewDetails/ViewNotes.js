import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';

describe('ViewCustomerNotes', () => {
  it('View Customer Notes', { tags: 'Visit' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new JobInformation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewNotes();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
