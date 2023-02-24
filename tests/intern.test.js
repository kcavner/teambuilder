const Intern = require('../lib/intern')

describe('intern', ()=>{
    it('should return intern when getRole() is called',()=>{
        const intern1 = new Intern("name","id","email","school")
        expect(intern1.getRole()).toBe('intern')
    })
})