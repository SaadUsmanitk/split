import Login from '../../../support/Login';
import Proposal from '../../../support/CustomerDetails/Proposal';

describe('LeadPerfection', () => {
  it('Lead Perction Button Verify', { tags: 'Smoke' }, () => {
    const login = new Login();

    const proposal = new Proposal();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    proposal.leadPerfectionButtonVerify();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
