Deno.bench(function randomStringWithArrayFrom() {
  Array.from({ length: 8 }, () => 1).join("");
});

Deno.bench(function randomStringManual() {
  const result = new Array(8);
  for (let index = 0; index < 8; index++) {
    result[index] = (() => 1)();
  }
  result.join("");
});
