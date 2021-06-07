const Engineer = require('../lib/Engineer.js');

describe("Engineer subclass", () => {
    it("Creates new instance of Engineer subclass", () => {
        const obj = new Engineer();
        expect(typeof obj).toEqual('object');
    })

    it("Returns Engineer Name when getName() is called", () => {
        const engineer = new Engineer ('Correct Name', 123, 'correctname@email.com', 'engineergit');
        expect(engineer.getName()).toEqual('Correct Name');
    })

    it("Returns GitHub user name when getGithub() is called", () => {
        const engineer = new Engineer ('Correct Name', 123, 'correctname@email.com', 'engineergit');
        expect(engineer.getGithub()).toEqual('engineergit');
    })

    it("Returns Engineer role when getRole() is called", () => {
        const engineer = new Engineer ('Correct Name', 123, 'correctname@email.com', 'engineergit');
        expect(engineer.getRole()).toEqual('Engineer');
    })
})