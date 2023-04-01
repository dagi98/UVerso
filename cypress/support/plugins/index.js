const { addMatchImageSnapshotCommand } = require('cypress-image-snapshot/command');

module.exports = (on, config) => {
  addMatchImageSnapshotCommand({
    failureThreshold: 0.05,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.1 },
    capture: 'viewport'
  });
};
Cypress.Selector.add('mybox', {
    parent: 'canvas',
    selector: '[name="my-box"]'
  });
  