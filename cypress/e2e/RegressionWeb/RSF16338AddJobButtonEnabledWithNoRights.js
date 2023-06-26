import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('AddJobButtonEnabledWithNoRights', () => {
  it('Add New Job Button is enabled with no rights', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();

    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('restrictedAddJobUsername'), Cypress.env('restrictedAddJobPassword'));

    jobInformation.noAddNewJobButton();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
