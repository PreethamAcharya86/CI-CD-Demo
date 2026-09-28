import sum from "./sum.js"

describe("test for sum function", () => {
    test("check 2 + 2 = 4", () => {
        expect(sum(2, 2)).toBe(4)
    })

    test("check 240 - 100 = 140", () => {
        expect(sum(240, -100)).toBe(140)
    })
})
