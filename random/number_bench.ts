import randomNumber from "./number.ts";

Deno.bench(function randomNumberOneDigit() {
  randomNumber(0, 10);
});
