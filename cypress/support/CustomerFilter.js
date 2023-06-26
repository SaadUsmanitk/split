/// <reference types="cypress" />
class CustomerFilter {
  constructor() {
    // Locators

    this.filter = 'button.btn.btn-primary';
    this.assignee = '#user_id';
    this.statuses = '#state > .css-13cymwt-control > .css-hlgwow';
    this.jobType = '#job_type';
    this.leadSources = '#lead_source';
    this.lastUpdate = '#updated_since';
    this.sortBy = '#sort_order';
    this.applyFilter = '.text-center > .btn-primary';
    this.includesArchive = '[type="checkbox"]';
    this.closeIcon = '#jobs_filter_close';
    this.resetClose = '';
  }

  filterButton() {
    cy.get(this.filter).click();
    return this;
  }

  filterByAssignee(assignee, value1) {
    cy.get(this.assignee).select(assignee, { force: true }).should('have.value', value1).invoke('val');
  }

  filterByStatuses() {
    cy.waitForReact(1000, '');
    cy.react('MyComponent');
    cy.get(this.statuses).type('Unable to Contact: Bad Phone{enter}');
  }

  filterByJobType(jobType) {
    cy.get(this.jobType).select(jobType, { force: true }).should('have.value').invoke('val');
  }

  filterByLeadSource(lead) {
    cy.get(this.leadSources).select(lead, { force: true }).invoke('val');
  }

  applyFilterButton() {
    cy.get(this.applyFilter).then(($filter) => {
      if ($filter.hasClass('active')) {
        $filter.check();
        $filter.should(be.check);
      } else {
        cy.get(this.applyFilter).should('be.visible', { timeout: 10000 }).click({ force: true });
      }
    });
  }

  filterByLastUpdated(updateDate) {
    cy.get(this.lastUpdate).select(updateDate, { force: true }).invoke('val');
  }

  filterBySortBy(sort) {
    cy.get(this.sortBy).select(sort, { force: true }).invoke('val');
  }

  addArchivedJobs() {
    cy.get(this.includesArchive).check({ force: true });
  }

  closeFilterButton() {
    cy.get(this.closeIcon).click();
    return this;
  }
}

export default CustomerFilter;
