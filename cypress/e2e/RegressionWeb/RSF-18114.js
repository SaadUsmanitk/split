import Login from '../../../support/Login';
import Jobinformation from '../../../support/CustomerDetails/JobInformation';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import CustomerEstimates from '../../../support/CustomerEstimates';

describe('AddEstimate', () => {
  it('Adding a new estimate', { tags: 'Regression' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const jobInformation = new Jobinformation();
    const customerestimates = new CustomerEstimates();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();
    viewCustomerMenuOptions.viewEstimates();
    customerestimates.secondEstimateNameFromFixture();
    customerestimates.secondProductNameFromFixture();

    customerestimates.saveEstimate();
    customerestimates.assertionAfterEditingEstimate();
  });
});
