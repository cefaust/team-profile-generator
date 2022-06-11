const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it(' getName() should return the given name', () => {
    const name = 'Chris';
    const engineer = new Engineer(name, 0, 'email', 'github');
    expect(engineer.getName()).toEqual(name);
  });

  it('getId() should return employeeId', () => {
    const employeeId = 0;
    const engineer = new Engineer('name', employeeId, 'email', 'github');
    expect(engineer.getId()).toEqual(employeeId);
  });

  it('getEmail() should return employee email', () => {
    const email = 'hello@example.com';
    const engineer = new Engineer('name', 0, email, 'github');
    expect(engineer.getEmail()).toEqual(email);
  });

  it(`getGithub() should return employee's Github username`, () => {
    const githubUser = 'exampleuser';
    const engineer = new Engineer('name', 0, 'email', githubUser);
    expect(engineer.getGithub()).toEqual(githubUser);
  });

  it('getRole() should return engineer', () => {
    const engineer = new Engineer('name', 0, 'email', 'github');
    expect(engineer.getRole()).toBe(engineer);
  });
});