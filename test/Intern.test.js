const Intern = require('../lib/Intern.js');

describe("Intern subclass", () => {
    it("Creates new instance of Intern subclass", () => {
        const obj = new Intern();
        expect(typeof obj).toEqual('object');
    })

    it("Returns Intern Name when getName() is called", () => {
        const intern = new Intern ('Correct Name', 789, 'correctname@email.com', 'Great School');
        expect(intern.getName()).toEqual('Correct Name');
    })

    it("Returns school when getSchool() is called", () => {
        const intern = new Intern ('Correct Name', 789, 'correctname@email.com', 'Great School');
        expect(intern.getSchool()).toEqual('Great School');
    })

    it("Returns Intern role when getRole() is called", () => {
        const intern = new Intern ('Correct Name', 789, 'correctname@email.com', 'Great School');
        expect(intern.getRole()).toEqual('Intern');
    })
})