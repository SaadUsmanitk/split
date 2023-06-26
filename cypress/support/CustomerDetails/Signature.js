/// <reference types = "Cypress" />

class Signature {
  constructor() {
    this.signature = 'Signatures';
    this.signatureTab = '#signatures-page-tabs-tab-estimate_documents';
    this.signableDoc = '#signatures-page-tabs-tab-signable_documents';
    this.createAgreementButton =
      '.ng-isolate-scope > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2)';
    this.createSignableDocButton =
      '.ng-isolate-scope > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)';
    this.resourcesButton =
      'body > div.modal > div > div > div > div.modal-body > div > div > div:nth-child(1) > div > div > button.btn.btn-light';
    this.jobDocButton =
      'body > div.modal > div > div > div > div.modal-body > div > div > div:nth-child(1) > div > div > button.btn.btn-primary';
    this.checkBox = '[data-testid="select-all"]';
    this.nameField = '#signatureRequestName';
    this.createButton = 'body > div.modal > div > div > div > div.modal-footer > div > button.btn.btn-save';
    this.cancelButton = 'body > div.modal > div > div > div > div.modal-footer > div > button.btn.btn-cancel';
    this.cancelCreateDocButton = '.left-footer-buttons > .btn';
    this.removeDocButton =
      '#selected_documents_table > div > div.table-body.row > div > div:nth-child(1) > div > div:nth-child(3) > span';
    this.spinner = '.spinner-graphic';
    this.downloadButton =
      '#documents_container > div.standard-rl-margin > div:nth-child(2) > div > div:nth-child(4) > button';
    this.backButton =
      'body > div.modal > div > div > div > div.modal-footer > div > div.right-footer-buttons > button.btn.btn-cancel';
    this.nextButton =
      'body > div.modal > div > div > div > div.modal-footer > div > div.right-footer-buttons > button.btn.btn-save';
    this.onScreen = '[name="onscreen"]';
    this.cancelOnScreen = '.modal-footer > .btn-secondary';
  }

  visitSignaturePage() {
    cy.contains(this.signature).click();
    cy.url().should('include', 'signatures');
  }

  visitSignableDoc() {
    cy.get(this.signableDoc).click();
    cy.url().should('include', 'signable_documents');
  }

  visitSignatureTab() {
    cy.get(this.signatureTab).click();
    cy.url().should('include', 'estimate_documents');
  }

  contractButton() {
    cy.get(this.createAgreementButton).click();
    cy.url().should('include', 'contracts');
  }

  signableDocButton() {
    cy.get(this.createSignableDocButton).click();
    cy.url().should('include', 'signature_request');
  }

  selectDocument() {
    cy.get(this.checkBox).click({ force: true });
  }

  createDocument() {
    cy.url().then((url) => {
      let jobId = url.split('/')[4];
      const url1 = Cypress.env('url1');
      let dynamicUrl = `${url1}jobs/${jobId}/documents/combine`;
      console.log(dynamicUrl);
      cy.intercept({
        method: 'POST',
        url: dynamicUrl,
      }).as('combine');
      cy.get(this.createButton).click();

      cy.wait('@combine').then((xhr) => {
        expect(xhr.response.statusCode).to.eq(201);
        cy.contains('Task Completion Successful.');
      });
      cy.get(this.nextButton).click();
      cy.get(this.onScreen).click();
    });
  }

  renameDocument() {
    cy.get(this.nameField).clear();
    cy.get(this.nameField).type('document renamed');
  }

  cancelOnScreenModal() {
    cy.wait(3000);
    cy.get(this.cancelOnScreen).click();
    cy.contains('document renamed');
  }

  deleteDocument() {
    cy.get(this.checkBox).click({ force: true });

    cy.url().then((url) => {
      const url1 = Cypress.env('url1');
      let jobId = url.split('/')[4];
      let dynamicUrl = `${url1}jobs/${jobId}/documents/combine`;
      console.log(dynamicUrl);
      cy.intercept({
        method: 'POST',
        url: dynamicUrl,
      }).as('combine');
      cy.get(this.createButton).should('be.enabled');
      cy.get(this.createButton).click();
      cy.get(this.nextButton).click();
      cy.wait('@combine').then((xhr) => {
        expect(xhr.response.statusCode).to.eq(201);
        let docid = xhr.response.body.document.id;
        cy.contains('Task Completion Successful.');
        let deleteurl = `${url1}jobs/${jobId}/documents/${docid}`;
        console.log(deleteurl);

        cy.intercept({
          method: 'DELETE',
          url: deleteurl,
        }).as('delete');
        cy.get(this.cancelCreateDocButton).click();
        cy.wait(2000);
        cy.wait('@delete').then((xhr) => {
          expect(xhr.response.statusCode).to.eq(204);
        });
      });
    });
  }
}

export default Signature;
