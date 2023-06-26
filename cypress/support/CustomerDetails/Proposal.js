/// <reference types = "Cypress" />
class Proposal {
  constructor() {
    this.downloadButtonModal = 'button.btn-default[title="Download"] i.fa.fa-download';
    this.saveButtonModal = 'button.btn-save[title="Save to Docs"] i.fa.fa-save';
    this.saveAndAddAgreementButton =
      'button.btn-save[title="Save to Docs and Agreement"] i.fa.fa-save + img[title="Agreement"]';
    this.proposalEmailButton = 'button.btn.btn-primary.ml-2[type="button"]';
    this.propsalemailField = 'body > div.fade.modal.show > div > div > div.modal-body > div:nth-child(1) > input';
    this.propsalSendButton = '.btn-save';
    this.contractEmailButton =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div.row > div:nth-child(2) > div > button:nth-child(1)';
    this.contractEmailField = 'body > div.fade.modal.show > div > div > div.modal-body > div:nth-child(1) > input';
    this.contractSendButton = 'body > div.fade.modal.show > div > div > div.modal-footer > div > button.btn.btn-save';
    this.leadPerfectionButton =
      'body > div.container-fluid > div > div > div.job-content > job-tabs > div:nth-child(1) > div:nth-child(2) > div > button:nth-child(1)';
  }

  clickSaveButton() {
    cy.wait(50000);
    cy.get('#webviewer-1').then(function ($iframe) {
      const iFrameC = $iframe
        .contents()
        .find('#app > div.App > div.Header > div > button:nth-child(11)', { timeout: 30000 });
      cy.wrap(iFrameC).click({ force: true });
    });
  }

  clickDownloadButton() {
    cy.get(this.downloadButtonModal).click();
  }

  clickSaveProposalButton() {
    cy.get(this.saveButtonModal).click();
  }

  clickSaveAddAgreementButton() {
    cy.get(this.saveAndAddAgreementButton).click();
  }

  emailOnProposalVerify() {
    cy.get(this.proposalEmailButton).contains('Email').click();
    cy.url().should('include', '/email');
    cy.get(this.propsalemailField).clear().type('saad.usmani@tkxel.io');
    cy.url().then((url) => {
      let url1 = Cypress.env('url1');
      let proposalId = url.split('/')[6];
      console.log(proposalId);
      let dynamicUrl = `${url1}estimates/${proposalId}/email`;
      console.log(dynamicUrl);
      cy.intercept({
        method: 'POST',
        url: dynamicUrl,
      }).as('combine');
      cy.get(this.propsalSendButton).click();
      cy.wait('@combine').then((xhr) => {
        expect(xhr.response.statusCode).to.eq(200);
        cy.contains('Document was successfully sent.');
      });
    });
  }

  emailOnContractVerify() {
    cy.get(this.contractEmailButton).contains('Email').click();
    cy.get(this.contractEmailField).clear().type('saad.usmani@tkxel.io');
    cy.url().then((url) => {
      let url1 = Cypress.env('url1');
      let contractId = url.split('/')[6];
      console.log(contractId);
      let dynamicUrl = `${url1}estimates/${contractId}/email`;
      console.log(dynamicUrl);
      cy.intercept({
        method: 'POST',
        url: dynamicUrl,
      }).as('combine');
      cy.get(this.contractSendButton).click();
      cy.wait('@combine').then((xhr) => {
        expect(xhr.response.statusCode).to.eq(200);
        cy.contains('Document was successfully sent.');
      });
    });
  }

  leadPerfectionButtonVerify() {
    let url1 = Cypress.config('baseUrl');
    let jobId = Cypress.env('jobId');
    let estimateId = Cypress.env('estimateId');
    let dynamicUrl = `${url1}jobs/${jobId}/proposals/${estimateId}`;
    cy.visit(dynamicUrl);
    cy.get(this.leadPerfectionButton).contains('LeadPerfection').should('be.enabled');
  }
}

export default Proposal;
