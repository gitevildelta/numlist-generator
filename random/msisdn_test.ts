import randomMsisdn from "./msisdn.ts";
import { assertMatch } from "https://deno.land/std@0.201.0/assert/assert_match.ts";

Deno.test(function randomMsisdnTest() {
  assertMatch(randomMsisdn(49, 176, 8), /\+49 176 [0-9]{8}/);
});
