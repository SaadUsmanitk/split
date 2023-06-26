import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Presentation from '../../../support/CustomerDetails/Presentation';

describe('ErrorWhenStartingBasicScreenShare', () => {
  it('Starting Basic Screen Share gives an error', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const presentation = new Presentation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    presentation.presentationFromTopMenu();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
