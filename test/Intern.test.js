const Intern = require('../lib/Intern');

describe('Intern', function () {
  it('getName() should return employee name', () => {
    const name = 'Chris';
    const intern = new Intern(name, 0, 'email', 'school');
    expect(intern.getName()).toEqual(name);
  });

  it('getID() should return employee id', () => {
    const employeeId = 0;
    const intern = new Intern('name', employeeId, 'email', 'school');
    expect(intern.getId()).toEqual(employeeId);
  });

  it('getEmail() should return employee email', () => {
    const email = 'hello@example.com';
    const intern = new Intern('name', 0, email, 'school');
    expect(intern.getEmail()).toEqual(email);
  });

  it('getSchool() should return employee\'s attended school', () => {
    const school = 'UW';
    const intern = new Intern('name', 0, 'email', school);
    expect(intern.getSchool()).toEqual(school);
  });

  it('getRole() should return intern', () => {
    const intern = new Intern('name', 0, 'email', 'school');
    expect(intern.getRole()).toBe(intern);
  });
});