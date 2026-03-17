export interface TimeZoneOption {
  label: string;
  value: string;
}

export const getTimeZones = (): TimeZoneOption[] => {
  return Intl.supportedValuesOf("timeZone").map((tz) => {
    const date = new Date();
    const offset = new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      timeZoneName: "shortOffset",
    })
      .formatToParts(date)
      .find((p) => p.type === "timeZoneName")?.value;

    return {
      label: `${offset} — ${tz.split("/").pop()?.replace("_", " ")}`,
      value: tz,
    };
  });
};

export const industries = [
  { label: "Technology", value: "tech" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Finance", value: "finance" },
  { label: "Education", value: "education" },
  { label: "Manufacturing", value: "manufacturing" },
];
