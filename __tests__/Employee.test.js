const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('checks to see if a Employee object is created with a name, id, email, should output Employee', () => {
    const employee = new Employee('Jim', '1911', 'jim@jmail.com')
    
    expect(employee.name).toBe('Jim');
    expect(employee.id).toBe('1911');
    expect(employee.email).toBe('jim@jmail.com');
});