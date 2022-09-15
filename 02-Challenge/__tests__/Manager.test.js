const Manager = require('../lib/manager');
const manager = new Manager('jeremiah', '1', 'kendljeremiah@gmail.com', '222444888');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('jeremiah');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('kendljeremiah@gmail.com');
    expect(manager.officeNumber).toBe('222444888');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('jeremiah');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('kendljeremiah@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(manager.getOfficeNumber()).toBe('2224448888');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});