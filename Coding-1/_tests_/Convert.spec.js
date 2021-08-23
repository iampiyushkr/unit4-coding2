const Convert = require("../Convert.js")
describe("Convert currency", () => {
    test("convert $2 to Rs149", () => {
        expect(Convert(2,"Rs")).toBe("Rs149")
    })
})