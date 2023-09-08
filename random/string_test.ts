import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { assertMatch } from "https://deno.land/std@0.201.0/assert/assert_match.ts";
import randomString from "./string.ts";

Deno.test(function randomStringConstant() {
  const actual = randomString(10, () => "x");
  assertEquals(actual, "xxxxxxxxxx");
});

Deno.test(function randomStringTest() {
  const actual = randomString(6, () => Math.floor(Math.random() * 10));
  assertMatch(actual, /[0-9]{6}/);
});
