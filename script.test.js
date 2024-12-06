const { luas, keliling } = require("./script");
test("Menghitung luas dengan panjang 5 dan lebar 4", () => {
  expect(luas(5, 4)).toBe(20);
});

test("Menghitung keliling dengan panjang 5 dan lebar 4", () => {
  expect(keliling(5, 4)).toBe(18);
});
