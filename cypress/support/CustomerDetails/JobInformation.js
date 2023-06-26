/// <reference types = "Cypress" />

class JobInformation {
  constructor() {
    // add job
    this.addJob = '#btn_add_job';
    // information locators
    // customer details
    this.customerName = '#customer_name';
    this.customerEmailId = '#email';
    this.phoneType = 'input[ng-model="phoneNumber.name"]';
    this.customerPhoneNo = 'input[ng-model="phoneNumber.number';
    this.deleteButton = 'button[ng-click="$ctrl.removePhoneNumber(phoneNumber)"]';
    this.newButton = 'button[ng-click="$ctrl.addPhoneNumber()"]';

    // job details
    this.jobName = '#name';
    this.jobStatus = '';
    this.changeStatus = '#actions';
    this.organization = '';
    this.assignto = '#user';
    this.selectleadsource = '#lead_source';
    this.inputleadsource = '';

    // job address
    this.address1 = '#address_1';
    this.address2 = '#address_2';
    this.city = '#address_city';
    this.state = '#address_state';
    this.postalcode = '#address_postal_code';
    this.country = '#address_country';

    //navmenu
    this.customerename = 'h1.ng-binding';
    // customeraddrss

    this.checkcustomeraddress = '';
    this.uncheckcustomeraddress = '';

    // save job
    this.savejob = '#job-top-save-changes';
    this.alertmessage = 'body > flash-alert > div';
    this.loader = '.graphic';
    // Archivejob
    this.archivejob = '#job-archive';
  }

  addNewJobFromFixture(fixture = 'job') {
    this.addNewJob();

    cy.fixture(fixture).then((job) => {
      this.customerDetails(job.cname, job.cemail, job.cphone, job.ctype);
      this.jobDetails(job.jname, job.jstatus, job.jassign, job.jlead);
      this.jobAddress(job.jaddress, job.jaddress2, job.jcity, job.jstate, job.jpostalcode, job.jcountry);
    });
  }

  renamJobNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameJobName(job.renameJobName);
    });
  }

  renamCustomerNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameCustomerNameAndVerify(job.customerrename);
    });
  }

  renamCustomerNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameCustomerNameAndVerify(job.customerrename);
      this.saveNewJob();
    });
  }

  //customer rename assertion
  customerNameAssertion(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      cy.get(this.customerename).then(($customerrenamename) => {
        const rename = $customerrenamename.text();
        expect(rename).to.eq(job.customerrename);
      });
    });
  }

  custAndJobVerify(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      cy.get(this.customerName).then(($custjob) => {
        const jobname = $custjob.val();
        expect(jobname).to.not.eq(job.jname);
      });
    });
  }

  renameJobNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameJobName(job.renameJobName);
    });
  }

  renameCustomerNameFromFixture(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      this.renameCustomerNameAndVerify(job.customerrename);
      this.saveNewJob();
    });
  }

  //customer rename assertion
  customerNameAssertion(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      cy.get(this.customerename).then(($customerrenamename) => {
        const rename = $customerrenamename.text();
        expect(rename).to.eq(job.customerrename);
      });
    });
  }

  custAndJobVerify(fixture = 'job') {
    cy.fixture(fixture).then((job) => {
      cy.get(this.customerName).then(($custjob) => {
        const jobname = $custjob.val();
        expect(jobname).to.not.eq(job.jname);
      });
    });
  }

  addNewJob() {
    cy.get(this.addJob).click();
    cy.url().should('include', '/info');
  }

  customerDetails(cname, cemail, cphone, ctype) {
    cy.get(this.customerName).click().type(cname);
    cy.get(this.customerEmailId).type(cemail);
    cy.get(this.phoneType).type(ctype);
    cy.get(this.customerPhoneNo).type(cphone);
  }

  jobDetails(jname) {
    cy.get(this.jobName).clear().type(jname);
  }

  jobAddress(jaddress, jaddress2, jcity, jstate, jpostalcode, jcountry) {
    cy.get(this.address1).click().type(jaddress);
    cy.get(this.address2).type(jaddress2);
    cy.get(this.city).type(jcity);
    cy.get(this.state).select(jstate, { force: true }).invoke('val');
    cy.get(this.postalcode).type(jpostalcode);
    cy.get(this.country).select(jcountry, { force: true }).invoke('val');
  }

  customerNewButton() {
    cy.get(this.newButton).click();
  }

  customerDeleteButton() {
    cy.get(this.deleteButton).click();
  }

  saveNewJob() {
    cy.get(this.savejob, { timeout: 10000 }).should('be.enabled');
    cy.get(this.savejob).click({ force: true });
  }

  newJobAssertion() {
    cy.get(this.loader);
    cy.contains('Job Saved', { timeout: 10000 });
  }

  renameJobName(jobrename) {
    cy.get(this.jobName).click({ force: true });
    cy.get(this.jobName).clear().type(jobrename);
  }

  renameCustomerNameAndVerify(customerrename) {
    cy.get(this.customerName).click({ force: true });
    cy.get(this.customerName).clear().type(customerrename);
  }

  archiveTheJob() {
    cy.get(this.alertmessage, { timeout: 10000 }).should('not.be.visible');
    cy.get(this.archivejob).click({ force: true });
    cy.contains('Are you sure you wish to archive this job?');
    cy.contains('OK').click();
    cy.contains('Job Archived');
    cy.url().should('include', '/jobs');
  }

  waitUntilJobsaved() {
    cy.get(this.alertmessage, { timeout: 10000 }).should('not.be.visible');
  }

  addNewJobMandatoryFieldFromFixture(fixture = 'job') {
    this.addNewJob();

    cy.fixture(fixture).then((job) => {
      this.customerDetailsMandatory(job.cname, job.cemail);
    });
  }

  customerDetailsMandatory(cname, cemail) {
    cy.get(this.customerName).click().type(cname);
    cy.get(this.customerEmailId).type(cemail);
  }

  noAddNewJobButton() {
    cy.get(this.addJob).should('not.be.visible');
  }

  failAlertMessage() {
    cy.get(this.alertmessage, { timeout: 1000 }).should(
      'not.contain',
      'Unknown Error - Please check your internet connection. If the problem persists, please contact support.'
    );
  }

  customerNameInput() {
    cy.get(this.customerName).type('testing the save button');
  }

  nameFieldMandatory() {
    this.addNewJob();
    cy.get(this.customerName).type('testing the save button');
    cy.get(this.customerName).clear();
    cy.get(this.savejob).should('be.disabled');
  }

  emailField() {
    this.addNewJob();
    cy.get(this.customerEmailId)
      .type('saad@gmail.com', { delay: 100 })
      .type(
        '{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}',
        { delay: 100 }
      );
    cy.get(this.customerEmailId).clear();
    cy.get(this.savejob).should('be.disabled');
  }

  phoneNoFieldMandatory() {
    this.addNewJob();
    cy.wait(1000);
    cy.get(this.customerPhoneNo).type('03327400423');
    cy.get(this.customerPhoneNo).clear();
    cy.get(this.savejob).should('be.disabled');
  }

  jobNameMandatory() {
    this.addNewJob();
    cy.wait(1000);
    cy.get(this.jobName)
      .type('saad@gmail.com', { delay: 100 })
      .type(
        '{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}',
        { delay: 100 }
      );
    cy.get(this.savejob).should('be.disabled');
  }

  phonePlusSign() {
    this.addNewJob();
    cy.get(this.newButton).click();
    cy.get(this.savejob).should('be.disabled');
  }

  addressMandatory() {
    this.addNewJob();
    cy.wait(2000);
    cy.get(this.address1).click().type('this is test address');
    cy.get(this.address1).clear();
    cy.get(this.savejob).should('be.disabled');
  }

  address2Mandatory() {
    this.addNewJob();
    cy.wait(1000);
    cy.get(this.address1).click().type('this is test address 2');
    cy.get(this.address1).clear();
    cy.get(this.savejob).should('be.disabled');
  }

  cityMandatory() {
    this.addNewJob();
    cy.wait(1000);
    cy.get(this.city)
      .type('this is test city', { delay: 100 })
      .type(
        '{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}',
        { delay: 100 }
      );
    cy.get(this.savejob).should('be.disabled');
  }

  postalCodeMandatory() {
    this.addNewJob();
    cy.wait(1000);
    cy.get(this.postalcode).type('2122');
    cy.get(this.postalcode).clear();
    cy.get(this.savejob).should('be.disabled');
  }

  emailFieldMandatory(fixture = 'job') {
    this.addNewJob();
    cy.wait(2000);
    cy.fixture(fixture).then((job) => {
      this.customerDetailsMandatory(job.email);
    });
  }
}
export default JobInformation;
