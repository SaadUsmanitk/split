import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('Save Button Assertion', () => {
  it('Assertion on Save Job Button', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJob();
    jobInformation.customerNameInput();
    jobInformation.saveNewJob();
    jobInformation.failAlertMessage();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
