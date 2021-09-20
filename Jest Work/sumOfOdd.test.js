const sOD = require("./sumOfOdd");

test("works for positive and negative integers", () => {
    expect(sOD([1, 3, 5, 8, -7])).toBe(2);
});

test("works for empty arr", () => {
    expect(sOD([])).toBe(0);
});

test("works for only negative integers", () => {
    expect(sOD([-5, -6, -3])).toBe(-8);
});

