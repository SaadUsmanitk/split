import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Note from '../../../support/CustomerDetails/Notes';

describe('AddNotes', () => {
  it('Add New Notes', { tags: 'Smoke' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const note = new Note();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    jobInformation.newJobAssertion();

    note.visitNoteTab();
    note.typeNote();
    note.saveNewNotes();
    note.assertNotes();
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
