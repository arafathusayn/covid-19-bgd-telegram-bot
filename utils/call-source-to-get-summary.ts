import got from "got"
import Summary from "../types/Summary"

export default (): Promise<Summary> =>
  got({
    url:
      "http://covid19tracker.gov.bd/api/country/latest?onlyCountries=true&iso3=BGD",
  }).then((r) => JSON.parse(r.body)[0])
