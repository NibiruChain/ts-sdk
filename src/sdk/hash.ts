import { Result } from "./result"

/**
 * Converts an 8-bit byte array (Uint8Array) into a hexadecimal (hex) string.
 *
 * Each 8-bit byte ranges from 0 to 255 and is represented by a 2-tuple of
 * hex digits (0-9, A-F). Values from 0-15 (0x0 to 0xF)
 * are indeed single-digit in hex, but in the context of hex strings, these
 * values are padded with a leading zero to maintain a consistent two-character
 * representation for each byte.
 *
 * Thus, a byte value of 9 is represented as "09".
 * */
export const bytesToHex = (bz: Uint8Array): string =>
  Array.from(bz)
    .map((b) => b.toString(16).toUpperCase().padStart(2, "0"))
    .join("")

/**
 * Converts a hexadecimal-encoded string into a Uint8Array.
 *
 * The hexadecimal string must have an even length, as each byte is represented
 * by two hex digits. Each of hex digit 2-tuples  (ranging from 00 to FF) is
 * converted to a single byte ranging from 0 to 255.
 *
 * @param {string} hex - The hexadecimal string to be decoded. If the string
 * has an odd length or contains non-hexadecimal characters, the function
 * returns an error wrapped in a Result object rather than throwing.
 * @returns {Result<Uint8Array>} The decoded Uint8Array if successful or an
 * error result if the input is invalid.
 *
 * @example
 * // Successful decoding
 * const result = hexToBytes("7A919F2CC9A51B139444F7D8E84A46EE");
 * if (result.isOk()) {
 *   console.log(result.ok); // Uint8Array of bytes
 * } else {
 *   console.error(result.err); // Error
 * }
 *
 * @example
 * // Error handling for invalid hex string
 * const result = hexToBytes("7G919F");
 * if (result.isOk()) {
 *   console.log(result.ok);
 * } else {
 *   console.error(result.err.message);
 *   // "HexError: non-hex characters detected in hex: 7G919F"
 * }
 */
export const hexToBytes = (hex: string): Result<Uint8Array> => {
  if (hex.length % 2 !== 0) {
    return new Result({
      err: new Error(
        `HexError: hex string must have even length to decode into bytes: hex ${hex}`
      ),
    })
  }

  return Result.ofSafeExec(() =>
    Uint8Array.from(
      hex.match(/.{1,2}/g)!.map((hexTuple: string) => {
        const byte = parseInt(hexTuple, 16)
        if (Number.isNaN(byte)) {
          throw new Error(
            `HexError: non-hex characters detected in hex: ${hex}`
          )
        }
        return byte
      })
    )
  )
}
