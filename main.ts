import { Args, parse } from "https://deno.land/std@0.201.0/flags/mod.ts";
import randomMsisdn from "./random/msisdn.ts";

interface NumlistGeneratorArgs {
  count: number;

  cc: number;
  ndc: number;
  snLen: number;

  [key: string]: unknown;
}

function getSampleMsisdn(
  countryCode: number,
  nationalDestinationCode: number,
  subscriberNumberLength: number,
): string {
  const exampleSubsriberNumber = new Array(subscriberNumberLength).fill("0")
    .join("");
  return `"+${countryCode} ${nationalDestinationCode} ${exampleSubsriberNumber}"`;
}

async function generateNumlist(
  countryCode: number,
  nationalDestinationCode: number,
  subscriberNumberLength: number,
  count: number,
): Promise<void> {
  const output = await Deno.open("numlist.txt", {
    createNew: true,
    write: true,
  });
  const writer = output.writable.getWriter();
  await writer.ready;

  const encoder = new TextEncoder();

  console.log(`Generating ${count} msisdn`);
  console.log(
    `Format : ${
      getSampleMsisdn(
        countryCode,
        nationalDestinationCode,
        subscriberNumberLength,
      )
    }`,
  );

  // Separator between generated msisdn
  const separator = new Uint8Array(["\n".charCodeAt(0)]);

  for (let index = 0; index < count; index++) {
    const msisdn = randomMsisdn(
      countryCode,
      nationalDestinationCode,
      subscriberNumberLength,
    );

    await writer.write(encoder.encode(msisdn));
    await writer.write(separator);
  }

  await writer.close();
}

(async function () {
  const args: Args<NumlistGeneratorArgs> = parse(Deno.args);

  if (
    args.cc == undefined || args.ndc == undefined || args.snLen == undefined ||
    args.count == undefined
  ) {
    console.log(
      "Usage : deno run main.ts --count 100000 --cc 49 --ndc 176 --snLen 8",
    );
    return;
  }

  await generateNumlist(args.cc, args.ndc, args.snLen, args.count);
  console.log("Completed successfully.");
})();
