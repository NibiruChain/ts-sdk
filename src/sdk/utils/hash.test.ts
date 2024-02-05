import { bytesToHex, hexToBytes } from "."

const TEST_CASES: { hex: string; bz: Uint8Array }[] = [
  {
    hex: "7A919F2CC9A51B139444F7D8E84A46EEF307E839C6CA914C1A1C594FEF5C1562",
    bz: Uint8Array.from([
      122, 145, 159, 44, 201, 165, 27, 19, 148, 68, 247, 216, 232, 74, 70, 238,
      243, 7, 232, 57, 198, 202, 145, 76, 26, 28, 89, 79, 239, 92, 21, 98,
    ]),
  },
  {
    hex: "C171E757AA0EEDB45703DC733A92162A2413CA1ACFCE8FBBA912A0B9F01122C1",
    bz: Uint8Array.from([
      193, 113, 231, 87, 170, 14, 237, 180, 87, 3, 220, 115, 58, 146, 22, 42,
      36, 19, 202, 26, 207, 206, 143, 187, 169, 18, 160, 185, 240, 17, 34, 193,
    ]),
  },
  {
    hex: "792C9F0D5052BD722BBD2DC332F24944143436AA1E1FA30E9A5E5B45C73831D0",
    bz: Uint8Array.from([
      121, 44, 159, 13, 80, 82, 189, 114, 43, 189, 45, 195, 50, 242, 73, 68, 20,
      52, 54, 170, 30, 31, 163, 14, 154, 94, 91, 69, 199, 56, 49, 208,
    ]),
  },
  {
    hex: "D3EB2222E9A46BF3A0D6C70544E8916EFE016DD42820F27CDA382991FC336274",
    bz: Uint8Array.from([
      211, 235, 34, 34, 233, 164, 107, 243, 160, 214, 199, 5, 68, 232, 145, 110,
      254, 1, 109, 212, 40, 32, 242, 124, 218, 56, 41, 145, 252, 51, 98, 116,
    ]),
  },
  {
    hex: "E56701BF3110CCD73AFA94C149024BC2A64C1DDD75A74F3DB397677EC6C47D52",
    bz: Uint8Array.from([
      229, 103, 1, 191, 49, 16, 204, 215, 58, 250, 148, 193, 73, 2, 75, 194,
      166, 76, 29, 221, 117, 167, 79, 61, 179, 151, 103, 126, 198, 196, 125, 82,
    ]),
  },
]

test("encode to hex, decode to bytes", () => {
  TEST_CASES.forEach((tc) => {
    const resBz = hexToBytes(tc.hex)
    expect(resBz.isOk()).toBeTruthy()
    expect(resBz.ok).toEqual(tc.bz)
    if (!resBz.ok) {
      expect(1).toEqual(2)
      return
    }
    const gotHex = bytesToHex(resBz.ok)
    expect(gotHex).toEqual(tc.hex)
  })
})

test("hex encode: sad path", () => {
  const hex = "ABC12"
  const resBz = hexToBytes(hex)
  expect(resBz.isErr()).toBeTruthy()
  expect(resBz.err?.message).toContain("even length")
})

test("hexToBytes - empty string", () => {
  const resBz = hexToBytes("")
  expect(resBz.isOk()).toBeTruthy()
  if (!resBz.ok) {
    expect(1).toEqual(2)
    return
  }
  const gotHex = bytesToHex(resBz.ok)
  expect(gotHex).toContain("")
})

test("hexToBytes - incorrect string", () => {
  const nonhex = "mock"
  const resBz = hexToBytes(nonhex)
  expect(resBz.isErr()).toBeTruthy()
  expect(resBz.err).toEqual(
    new Error(`HexError: non-hex characters detected in hex: ${nonhex}`)
  )
})
