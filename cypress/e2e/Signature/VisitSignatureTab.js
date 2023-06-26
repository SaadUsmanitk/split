import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Signature from '../../../support/CustomerDetails/Signature';

describe('VisitSignatureTab', () => {
  it('Visiting The Signature Tab', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const signature = new Signature();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    signature.visitSignaturePage();
    signature.visitSignableDoc();
    signature.visitSignatureTab();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
