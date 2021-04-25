const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('checks to see if a Manager object is created with a name, id, email, should output Manager', () => {
    const manager = new Manager('Jim', '1911', 'jim@jmail.com')
    
    expect(manager.name).toBe('Jim');
    expect(manager.id).toBe('1911');
    expect(manager.email).toBe('jim@jmail.com');
});