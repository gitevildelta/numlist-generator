import randomNumber from "./number.ts";
import randomString from "./string.ts";

/**
 * Generate a msisdn with a random SN
 * @param countryCode The counry code of the counry. For example : 49
 * @param nationalDestinationCode The NDC. For example : 176
 * @param subscriberNumberLength The length of the SN. For example : 8
 * @returns A random msisdn in the follow format : "+countryCode nationalDestinationCode [0-9]{subscriberNumberLength}"
 */
export default function randomMsisdn(
  countryCode: number,
  nationalDestinationCode: number,
  subscriberNumberLength: number,
): string {
  const subscriberNumber = randomString(
    subscriberNumberLength,
    () => randomNumber(0, 10),
  );

  return `+${countryCode} ${nationalDestinationCode} ${subscriberNumber}`;
}
