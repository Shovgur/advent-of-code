import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "./index.txt")).toString();

const lines = input.split("\n").filter((line) => line.trim() !== "");

const result = lines
  .map((line) => {
    const numberArray = line //'ab3' < string
      .split("") // ['a', 'b', '3']... и т.д < string[]
      .map(Number) // [ NaN, NaN, 3, ] ... и т.д < number[]
      .filter((number) => !Number.isNaN(number)); // [3]; < number[]
    const first = numberArray[0];
    const last = numberArray[numberArray.length - 1];

    return first * 10 + last;
  })
  .reduce((acc, item) => acc + item, 0);

console.log(result);
