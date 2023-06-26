import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('LoaderOnJobForMap', () => {
  it('Loader on Job while Map is being fetched', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();
    jobInformation.newJobAssertion();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
