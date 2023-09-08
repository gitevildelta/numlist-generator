import randomMsisdn from "./msisdn.ts";

Deno.bench(function randomMsisdnSimonMobile() {
  randomMsisdn(49, 176, 8);
});
