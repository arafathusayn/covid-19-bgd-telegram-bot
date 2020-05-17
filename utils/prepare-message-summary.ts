import Summary from "../types/Summary"
import MessageSummary from "../types/MessageSummary"
import convertNumbersEnToBn from "../utils/convert-numbers-en-to-bn"

let message: MessageSummary = {
  TotalCases: "",
  NewCases: "",
  TotalDeaths: "",
  NewDeaths: "",
  TotalRecovered: "",
  ActiveCases: "",
  SeriousCases: "",
}

const messageKeys = Object.keys(message)

export default (data: Summary): string => {
  for (const key in data) {
    if (messageKeys.includes(key)) {
      message[key] = convertNumbersEnToBn(data[key].toLocaleString("en-IN"))
    } else {
      continue
    }
  }

  return encodeURIComponent(`
(সূত্রঃ http://covid19tracker.gov.bd)

মোট আক্রান্তঃ	${message.TotalCases}
নতুন সংক্রমণঃ	${message.NewCases}
মোট মৃতঃ	${message.TotalDeaths}
নতুন মৃত্যুঃ	${message.NewDeaths}
মোট সুস্থঃ	${message.TotalRecovered}
চিকিৎসাধীনঃ	${message.ActiveCases}
সংকটপূর্ণঃ	${message.SeriousCases}
`)
}
