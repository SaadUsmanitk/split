import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';

describe('Rsf520', () => {
  it('Rsf-Tc-520', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const customerestimates = new CustomerEstimates();

    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('adminUsername'), Cypress.env('adminPassword'));

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewEstimates();
    customerestimates.estimateNameFromFixture();
    customerestimates.addTemplateEstimate();
    cy.contains('My Estimate Template Successfully Added to Estimate.');
    customerestimates.saveEstimate();
    customerestimates.newEstimateAssertion();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
