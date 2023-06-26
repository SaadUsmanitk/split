/// <reference types = "Cypress" />

class Document {
  constructor() {
    this.documents = '#documents';
    this.createNewFolder = 'Create a New Folder';
    this.writeName = '[data-testid="name-editing"]';
    this.saveButton = '[data-testid="save-button"]';
    this.savePButton = 'Save Changes';
    this.upload = '#job-add-documents';
    this.sendtext =
      'body > div.fade.modal.show > div > div > div.modal-body > form:nth-child(3) > div > div.col-sm-3 > button';
    this.dotButton = '[data-testid="dropdown-button"]';
    this.editWriteName = '[data-testid="name-editing"]';
    this.editDName =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div > div:nth-child(6) > div > div.table-body.row > div > div > div > div:nth-child(7) > div > a:nth-child(1)';
    this.renameDName = '#title';
    this.deleted =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div > div > div:nth-child(6) > div > div > div.table-body.row > div > div > div > div:nth-child(6) > a:nth-child(3)';
    this.resources = 'button.btn.btn-light';
    this.spinner = '#spinner';
    this.magicWand = '.rsf-magic-link';
    this.requiredError = '.has-error > span';
    this.childInsideParent = '[data-testid="folder-card"] > .card-body > .fa-folder-open-o';
    this.childInsideChild = '.card-footer';
    this.backToDocuments = '[data-testid="parent-0"] > a';
    this.closePDFButton = 'button[title="Close View"]';
    this.okButtonpdfTron = '[data-testid="ok-button"]';
    this.dropdown = '[data-testid="parent-2"] > a';
    this.dropdownButton = '[data-testid="dropdown-button"]';
    this.itemCount = '#documents > .k-link > .badge';
    this.saveButtonModal = '.btn-save';
  }

  navigateToDocument() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.documents).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.url().should('include', '/documents');
  }

  backToDocument() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.get(this.backToDocuments).click();
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.url().should('include', '/documents');
  }

  addNewFolder() {
    cy.contains(this.createNewFolder).click({ force: true });
  }

  writeNames(dname) {
    cy.get(this.writeName).click().type(dname);
  }

  uploadFile() {
    cy.get(this.upload).selectFile('cypress/fixtures/document.pdf', {
      action: 'drag-drop',
    });
  }

  uploadFileAssert() {
    cy.get(this.spinner, { timeout: 10000 }).should('not.exist');
    cy.contains('document');
  }

  editDocumentName() {
    cy.get(this.editDName).click();
  }

  renameDocument(DName) {
    cy.get(this.renameDName).type(DName);
  }

  resource() {
    cy.get(this.resources).click();
    cy.contains('Available Resources');
  }

  dotRightButton() {
    cy.get(this.dotButton).click();
  }

  editFolder() {
    cy.contains('Edit').click();
  }

  renameFolder(newdname) {
    cy.get(this.editWriteName).clear().type(newdname);
  }

  deleteFolder() {
    cy.contains('Delete').click();
    cy.contains('OK').click();
  }

  deletePhoto() {
    cy.get(this.deleted).click();
    cy.contains('OK').click();
    cy.contains('Document successfully deleted');
  }

  renameSaveButton() {
    cy.contains(this.savePButton).click();
  }

  saveFolder() {
    cy.get(this.saveButton).click({ multiple: true });
    cy.contains('Saved folder successfully');
  }

  saveFolderWithoutName() {
    cy.get(this.saveButton).click({ multiple: true });
    cy.get(this.requiredError).contains('Required');
  }

  clearFolderName() {
    cy.get(this.editWriteName).clear();
  }

  childInsideParentFolder() {
    cy.get(this.childInsideParent, { timeout: 5000 }).click();
    cy.contains(this.createNewFolder).click({ force: true });
    cy.contains('Saved folder successfully', { timeout: 5000 }).should('not.exist');
  }

  writeFolderName(fixture = 'folderName') {
    cy.fixture(fixture).then((foldersName) => {
      this.writeNames(foldersName.dname);
    });
  }

  childInsideChildFolder() {
    cy.get(this.childInsideChild, { timeout: 5000 }).click();
    cy.contains(this.createNewFolder).click({ force: true });
    cy.contains('Saved folder successfully', { timeout: 5000 }).should('not.exist');
  }

  childInsideAnotherChildFolder() {
    cy.get(this.childInsideParent, { timeout: 5000 }).click({ force: true });
  }

  navigateToFolder() {
    cy.get(this.childInsideChild, { timeout: 5000 }).click();
    cy.contains('Destination_Motivation_Condo_Acceptance.pdf');
  }

  updateItemCount() {
    cy.get(this.dropdown, { timeout: 5000 }).click();
    cy.get(this.dropdownButton).click();
    this.deleteFolder();
    cy.get(this.itemCount).then(($itemcount) => {
      const item = $itemcount.text();
      expect(item).to.eq('1');
    });
  }

  clickMagicWand() {
    cy.get(this.magicWand).click();
    cy.wait(30000);
    cy.get('#webviewer-1').then(function ($iframe) {
      const iFrameC = $iframe
        .contents()
        .find('#app > div.App > div.Header > div > button:nth-child(11)', { timeout: 30000 });
      cy.wrap(iFrameC).click({ force: true });
    });
    cy.get(this.saveButtonModal).click();
    cy.get(this.closePDFButton).click({ force: true });
  }

  clickMagicWandOnly() {
    cy.get(this.magicWand).click();
    cy.wait(30000);
    cy.get('#webviewer-1', { timeout: 25000 }).iframe('button.Button.ActionButton').should('exist');
    cy.get('#webviewer-1', { timeout: 25000 })
      .iframe(
        '#app > div.App > div.content > div.document-content-container > div.measurement-container > div.DocumentContainer'
      )
      .should('exist')
      .click();
  }

  clickPdfCloseButton() {
    cy.get(this.closePDFButton).click();
    cy.contains('There are unsaved changes that will be lost. Are you sure you want to continue?');
  }

  clickPdfOkButton() {
    cy.get(this.closePDFButton).click();
    cy.contains('There are unsaved changes that will be lost. Are you sure you want to continue?');
    cy.get(this.okButtonpdfTron).click();
  }
}
export default Document;
