const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('checks to see if a Engineer object is created with a name, id, email, should output Engineer', () => {
    const engineer = new Engineer('Jim', '1911', 'jim@jmail.com', 'JimHub')
    
    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toBe('1911');
    expect(engineer.email).toBe('jim@jmail.com');
    expect(engineer.github).toBe('JimHub');
});