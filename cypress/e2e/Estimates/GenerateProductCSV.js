import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';

describe('GenerateProductCSV', () => {
  it('Generates a Product CSV', { tags: 'Smoke' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new Jobinformation();
    const customerestimates = new CustomerEstimates();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    viewCustomerMenuOptions.viewEstimates();
    customerestimates.estimateNameFromFixture();
    customerestimates.productNameFromFixture();
    customerestimates.paymentEstimatorFromFixture();
    customerestimates.salesTaxFromFixture();
    customerestimates.discountNameFromFixture();
    customerestimates.addMarkupFromFixture();
    customerestimates.saveEstimate();
    customerestimates.newEstimateAssertion();
    customerestimates.backToAllEstimatesListings();
    customerestimates.generatesProductCSV();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});