/// <reference types = "Cypress" />

class Note {
  constructor() {
    this.visitnote = '#notes';
    this.note = '#initial-note-textarea';
    this.savenewnote = 'Save New Note';
    this.editnote = '.rsf-edit-link';
    this.deletenote = '.rsf-delete-link';
    this.saveinexsitingnote = '[title="Table Note"] > form > .row > .btn > .rsf-save-link';
    this.assertnote = 'Saved note successfully!';
    this.deleteassert = 'Note deleted successfully!';
  }

  visitNoteTab() {
    cy.get(this.visitnote).click();
    cy.url().should('include', '/notes');
  }

  typeNote() {
    cy.get(this.note).click().clear().type('Enter Note');
  }

  saveNewNotes() {
    cy.contains(this.savenewnote).click();
  }

  editNotes() {
    cy.get(this.editnote).click();
  }

  editTypeNote() {
    cy.contains('Enter Note').clear().type('Enter edit Note');
  }

  saveExistingNotes() {
    cy.get(this.saveinexsitingnote).click();
  }

  deletingNotes() {
    cy.get(this.deletenote).click();
    cy.contains('OK').click();
  }

  deleteAssertNote() {
    cy.contains(this.deleteassert);
  }

  assertNotes() {
    cy.contains(this.assertnote);
  }

  editNotesDisable() {
    cy.get(this.editnote).should('not.exist');
  }

  deleteNoteDisable() {
    cy.get(this.deletenote).should('not.exist');
  }

  editNotesEnabled() {
    cy.get(this.editnote).should('exist');
  }

  deleteNoteEnabled() {
    cy.get(this.deletenote).should('exist');
  }
}
export default Note;
