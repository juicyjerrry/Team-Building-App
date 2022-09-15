const Engineer = require('../lib/Engineer');
const engineer = new Engineer('jeremiah', '1', 'kendljeremiah@gmail.com', 'juicyjerrry');

test('test for values', () => {
    expect(engineer.name).toBe('jeremiah');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('kendljeremiah@gmail.com');
    expect(engineer.githubUsername).toBe('juicyjerrry');
});

test('test for Name', () => {
    expect(engineer.getName()).toBe('jeremiah');
});

test('test for ID', () => {
    expect(engineer.getId()).toBe('1');
});

test('test for email', () => {
    expect(engineer.getEmail()).toBe('kendljeremiah@gmail.com');
});

test('test for GitHub', () => {
    expect(engineer.getGithub()).toBe('juicyjerrry');
});

test('test for role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});