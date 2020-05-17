import { NowRequest, NowResponse } from "@now/node"

import Summary from "../types/Summary"
import prepareMessageSummary from "../utils/prepare-message-summary"
import callSourceToGetSummary from "../utils/call-source-to-get-summary"
import sendSummaryMessage from "../utils/send-summary-message"

export default async (req: NowRequest, res: NowResponse): Promise<void> => {
  const data: Summary = await callSourceToGetSummary()

  const message: string = prepareMessageSummary(data)

  const chatId: number =
    req.body &&
    req.body.message &&
    req.body.message.chat &&
    req.body.message.chat.id

  if (chatId && typeof chatId === "number") {
    await sendSummaryMessage(chatId, message)
  }

  res.send("")
}
