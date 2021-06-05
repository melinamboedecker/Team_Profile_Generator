const Manager = require('../lib/Manager.js');

describe("Manager subclass", () => {
    it("Creates new instance of Manager subclass", () => {
        const obj = new Manager();
        expect(typeof obj).toEqual('object');
    })

    it("Returns Manager Name when getName() is called", () => {
        const manager = new Manager ('Manager Name', 456, 'managername@email.com', '2A');
        expect(manager.getName()).toEqual('Manager Name');
    })

    it("Returns office number when getOfficeNumber() is called", () => {
        const manager = new Manager ('Manager Name', 456, 'managername@email.com', '2A');
        expect(manager.getOfficeNumber()).toEqual('2A');
    })

    it("Returns Manger role when getRole() is called", () => {
        const manager = new Manager ('Manager Name', 456, 'managername@email.com', '2A');
        expect(manager.getRole()).toEqual('Manager');
    })
})