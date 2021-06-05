const Employee = require('../lib/Employee.js');

describe("Employee class", () => {
    it("Creates new instance of Employee class", () => {
        const obj = new Employee();
        expect(typeof obj).toEqual('object');
    })

    it("Returns Employee Name when getName() is called", () => {
        const employee = new Employee ('Correct Name', 123, 'correctname@email.com');
        expect(employee.getName()).toEqual('Correct Name');
    })

    it("Returns Employee id when getId() is called", () => {
        const employee = new Employee ('Correct Name', 123, 'correctname@email.com');
        expect(employee.getId()).toEqual(123);
    })

    it("Returns Employee email when getEmail() is called", () => {
        const employee = new Employee ('Correct Name', 123, 'correctname@email.com');
        expect(employee.getEmail()).toEqual('correctname@email.com');
    })

    it("Returns Employee role when getRole() is called", () => {
        const employee = new Employee ('Correct Name', 123, 'correctname@email.com');
        expect(employee.getRole()).toEqual('Employee');
    })
})