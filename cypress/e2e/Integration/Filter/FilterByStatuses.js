import CustomerFilter from '../../../support/CustomerFilter';
import Login from '../../../support/Login';

describe('FilterByStatuses', () => {
  it('Filter By Statuses', { tags: 'CustomerDashboard' }, () => {
    const login = new Login();
    const customerFilter = new CustomerFilter();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    customerFilter.filterButton();
    customerFilter.filterByStatuses();
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
