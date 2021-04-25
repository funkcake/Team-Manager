const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('checks to see if a Intern object is created with a name, id, email, should output Intern', () => {
    const intern = new Intern('Jim', '1911', 'jim@jmail.com', 'JU')
    
    expect(intern.name).toBe('Jim');
    expect(intern.id).toBe('1911');
    expect(intern.email).toBe('jim@jmail.com');
    expect(intern.school).toBe('JU');
});