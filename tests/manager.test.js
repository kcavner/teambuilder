const Manager = require('../lib/manager')

describe('manager', ()=>{
    it('should return manager when getRole() is called',()=>{
        const manager1 = new Manager("name","id","email")
        expect(manager1.getRole()).toBe('Manager')
    })
})