import { Localnet, Chain } from "@nibiruchain/nibijs/src/chain"
import path from "path"

/** CHAIN: Nibiru Network for all usage examples */
export const CHAIN: Chain = Localnet

/** hereDoc: Creates an approximate "here-document", a formatted version of
 * the text including newlines but removing the whitespace prefix from each one.
 *
 * Modeled after the behavior of MakeNowJust/heredoc:
 * @see https://github.com/MakeNowJust/heredoc
 *
 * Here documents are a concept from bash scripting.
 * @see https://tldp.org/LDP/abs/html/here-docs.html
 * */
export function hereDoc(text: string): string {
  return (
    text
      // Split the string into lines
      .split("\n")
      // Remove leading whitespace from each line
      .map((line) => line.replace(/^\s+/g, ""))
      // Join the lines back together
      .join("\n")
  )
}

/** Logs a file-specific success message.
 * @example
 * // Usage example
 * logSuccess(__filename)
 * */
export function logSuccess(fname: string): void {
  console.log(`✅ Successfully completed "${path.basename(fname)}"`)
}
