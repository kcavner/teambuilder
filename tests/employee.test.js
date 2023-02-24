const Employee = require('../lib/employee')

describe('employee', ()=>{
    it('should return employee when getRole() is called',()=>{
        const employee1 = new Employee("name","id","email",)
        expect(employee1.getRole()).toBe('Employee')
    })
})