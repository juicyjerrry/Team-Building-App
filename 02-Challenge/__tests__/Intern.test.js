const Intern = require('../lib/Intern');
const intern = new Intern('jeremiah', '1', 'kendljeremiah@gmail.com', 'Hard Knocks');

test('test if we can get the constructor values for the intern object', () => {
    expect(intern.name).toBe('jeremiah');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('kendljeremiah@gmail.com');
    expect(intern.githubUsername).toBe('jdeschat');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('jeremiah');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('kendljeremiah@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(intern.getSchool()).toBe('Hard Knocks');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});