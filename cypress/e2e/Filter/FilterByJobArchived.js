import CustomerFilter from '../../../support/CustomerFilter';
import Login from '../../../support/Login';

describe('FilterByJobArchived', () => {
  it('Add Archived Jobs In Filter', { tags: 'CustomerDashboard' }, () => {
    const login = new Login();
    const customerFilter = new CustomerFilter();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    customerFilter.filterButton();
    customerFilter.addArchivedJobs();
    customerFilter.applyFilterButton();
    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
