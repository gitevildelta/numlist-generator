import randomNumber from "./number.ts";
import { assertLess } from "https://deno.land/std@0.201.0/assert/assert_less.ts";
import { assertGreaterOrEqual } from "https://deno.land/std@0.201.0/assert/assert_greater_or_equal.ts";

Deno.test(function randomNumberTest() {
  const x = randomNumber(0, 10);
  assertGreaterOrEqual(x, 0);
  assertLess(x, 10);
});
