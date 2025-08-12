import { sortCharactersByHealth } from "../app.js";

const characters = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
];

test("Testing if the array was sorted correctly", () => {
    expect(sortCharactersByHealth(characters)).toEqual([
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
        { name: "мечник", health: 10 },
    ]);
});
