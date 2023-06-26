import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';
import Proposal from '../../../support/CustomerDetails/Proposal';

describe('ProposalSaveDoc&AddAgreement', () => {
  it('Save Customer Proposals and Add to Agreement', { tags: 'Regression' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new JobInformation();
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

    viewCustomerMenuOptions.viewProposals();
    proposal.clickSaveButton();
    proposal.clickSaveAddAgreementButton();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
