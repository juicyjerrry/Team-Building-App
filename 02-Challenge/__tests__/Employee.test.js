const Employee = require('../lib/Employee');
const employee = new Employee('jeremiah', '1', 'kendljeremiah@gmail.com');

test('test for values', () => {
    expect(employee.name).toBe('jeremiah');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('kendljeremiah@gmail.com');
});

test('test for name', () => {
    expect(employee.getName()).toBe('jeremiah');
});

test('test for ID', () => {
    expect(employee.getId()).toBe('1');
});

test('test for Email', () => {
    expect(employee.getEmail()).toBe('kendljeremiah@gmail.com');
});

test('test for role', () => {
    expect(employee.getRole()).toBe('Employee');
});