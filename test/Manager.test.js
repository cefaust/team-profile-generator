const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('getName() should return the given name', function () {
    const name = 'Chris';
    const manager = new Manager(name, 0, 'email', 'officeNumber');
    expect(manager.getName()).toEqual(name);
  });

  it('getId() should return a number for id', function () {
    const employeeId = 0;
    const manager = new Manager('name', employeeId, 'email', 'officeNumber');
    expect(manager.getId()).toEqual(employeeId);
  });

  it('getEmail should return a given email', function () {
    const email = 'hello@example.com';
    const manager = new Manager('name', 'id', email, 'officeNumber');
    expect(manager.getEmail()).toEqual(email);
  });

  it('officeNumber() should return a number that is the office', function () {
    const officeNumber = 0;
    const manager = new Manager('name', 'id', 'email', officeNumber);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
  });

  it('getRole() should return manager', function () {
    const manager = new Manager('name', 0, 'email', 'officeNumber');
    expect(manager.getRole()).toBe(manager);

  });


});