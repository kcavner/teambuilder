const Engineer = require('../lib/engineer')

describe('engineer', ()=>{
    it('should return engineer when getRole() is called',()=>{
        const engineer1 = new Engineer("name","id","email","github")
        expect(engineer1.getRole()).toBe('Engineer')
    })
})