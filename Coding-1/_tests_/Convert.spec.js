const Convert = require("../Convert.js")
describe("Convert currency", () => {
    test("convert $2 to Rs149", () => {
        expect(Convert(2,"Rs")).toBe("Rs149.00")
    })
    test("Convert $7.546 to Rs562.177", () => {
        expect(Convert(7.546,"Rs")).not.toBe("Rs562.177")
    })
})