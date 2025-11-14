import { DATA } from "./resume";
import { DATA_ES } from "./resume-es";

export function getResumeData(locale: string) {
  switch (locale) {
    case "es":
      return DATA_ES;
    case "en":
    default:
      return DATA;
  }
}
