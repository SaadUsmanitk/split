import CustomerFilter from '../../../support/CustomerFilter';
import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('Open Filter Assertion', () => {
  it('Assertion on the filter button', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const customerFilter = new CustomerFilter();
    const jobInformation = new JobInformation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    customerFilter.filterButton();
    cy.wait(3000);
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
