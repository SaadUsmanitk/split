import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Note from '../../../support/CustomerDetails/Notes';

describe('EditNotes checked', () => {
  it('Check for EditNotes Checkbox', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const note = new Note();

    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('adminUsername'), Cypress.env('adminPassword'));

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();
    jobInformation.newJobAssertion();

    note.visitNoteTab();
    note.typeNote();
    note.saveNewNotes();
    note.assertNotes();
    note.editNotesEnabled();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
