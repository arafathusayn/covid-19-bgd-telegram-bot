import got, { HTTPError, Response } from "got"
import dotenv from "dotenv"

const TELEGRAM_BOT_API_KEY: string | undefined =
  process.env.TELEGRAM_BOT_API_KEY

if (!TELEGRAM_BOT_API_KEY) {
  dotenv.config()
}

export default (
  chatId: number,
  message: string,
): Promise<void | Response<string>> => {
  const url: string = `https://api.telegram.org/bot${TELEGRAM_BOT_API_KEY}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=HTML`

  return got({
    url,
  }).catch((e: HTTPError) => {
    console.log(e)
  })
}
