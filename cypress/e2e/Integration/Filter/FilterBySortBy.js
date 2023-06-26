import CustomerFilter from '../../../support/CustomerFilter';
import Login from '../../../support/Login';

describe('FilterBySort', () => {
  it('Filter By Sort', { tags: 'CustomerDashboard' }, () => {
    const login = new Login();
    const customerFilter = new CustomerFilter();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    customerFilter.filterButton();
    customerFilter.filterBySortBy('Oldest to Newest');
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
