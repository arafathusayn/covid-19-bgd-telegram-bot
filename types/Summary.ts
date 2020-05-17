export default interface Summary {
  TotalCases: number
  NewDeaths: number
  TotalRecovered: number
  SeriousCases: number
  ActiveCases: number
  NewCases: number
  TotalDeaths: number
  [key: string]: number
}
