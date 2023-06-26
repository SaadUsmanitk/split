import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Measurement from '../../../support/CustomerDetails/Measurement';

describe('AddMeasurement', () => {
  it('Add New Measurement', () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const measurement = new Measurement();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();

    jobInformation.saveNewJob();
    jobInformation.newJobAssertion();
    measurement.visitmMeasurement();
    cy.fixture('measurements').then((addmeasurement) => {
      measurement.slidingArea(
        addmeasurement.stotalArea,
        addmeasurement.sflatArea,
        addmeasurement.shighArea,
        addmeasurement.spitchArea
      );
    });
    cy.fixture('measurements').then((addmeasurement) => {
      measurement.soffitArea(
        addmeasurement.sflatShallow,
        addmeasurement.slowsCopeArea,
        addmeasurement.savgSlopArea,
        addmeasurement.ssteepSlopeArea,
        addmeasurement.sultraSteepSlopeArea,
        addmeasurement.sslopedArea,
        addmeasurement.spitchAreaSoffit
      );
    });
    cy.fixture('measurements').then((addmeasurement) => {
      measurement.ridgeArea(
        addmeasurement.sridge,
        addmeasurement.ship,
        addmeasurement.sridgeHip,
        addmeasurement.svalley,
        addmeasurement.sdownSpoutElbows,
        addmeasurement.sdownSpoute,
        addmeasurement.sgutter,
        addmeasurement.spitchAreaRidge
      );
    });
    cy.fixture('measurements').then((addmeasurement) => {
      measurement.eaveArea(
        addmeasurement.seave,
        addmeasurement.srake,
        addmeasurement.sperimeter,
        addmeasurement.sstepFlashing,
        addmeasurement.sheadWallFlashing,
        addmeasurement.stotalFlashing,
        addmeasurement.svalleyEave,
        addmeasurement.svalleyEaveRake
      );
    });
    measurement.saveMeasurement();
    measurement.areavalue();
    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
