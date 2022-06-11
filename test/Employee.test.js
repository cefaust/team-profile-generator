const Employee = require('../lib/Employee');

describe('Employee', () => {

  it('getName() should return a given name', () => {
    const name = 'Chris';
    const employee = new Employee(name, 0, 'email');
    expect(employee.getName()).toEqual(name);
  });

  it('getId() should return the employeeId', () => {
    const num = 0;
    const employee = new Employee('name', num, 'email');
    expect(employee.getId()).toEqual(num);
  });

  it('getEmail() should return employeeEmail', () => {
    const email = 'hello@example.com';
    const employee = new Employee('name', 0, email);
    expect(employee.getEmail()).toEqual(email);
  });

  it('getRole() should return the instance of Employee', function () {
    const employee = new Employee('name', 0, 'email');
    expect(employee.getRole()).toBe(employee);
  });

});