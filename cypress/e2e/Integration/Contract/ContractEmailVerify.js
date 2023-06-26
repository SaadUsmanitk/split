import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';
import Proposal from '../../../support/CustomerDetails/Proposal';

describe('ContractEmailVerify', () => {
  it('Verifying of Contract Email', { tags: 'Smoke' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new Jobinformation();
    const customerestimates = new CustomerEstimates();
    const proposal = new Proposal();

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

    viewCustomerMenuOptions.viewAgreements();
    proposal.emailOnContractVerify();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
