const map: { [key: string]: string } = {
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
  ",": ",",
  ".": ".",
}

export default (en: string): string =>
  en
    .split("")
    .map((x) => map[x] || x)
    .join("")
