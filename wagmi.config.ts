import { defineConfig } from "@wagmi/cli"
import fs from "fs"
import path from "path"
import { actions, react } from "@wagmi/cli/plugins"
import { ADDR_WASM_PRECOMPILE } from "./src/evm-core/precompile/wasm"
import { ADDR_ORACLE_PRECOMPILE } from "./src/evm-core/precompile/oracle"
import { ADDR_FUNTOKEN_PRECOMPILE } from "./src/evm-core/precompile/funtoken"
import { ADDR_ERIS_EVM } from "./src/evm-core/const"
import { ADDR_WNIBI } from "./src/evm-core/const"

const readAbi = (relPath: string) => {
  const filePath = path.resolve(__dirname, relPath)
  const json = JSON.parse(fs.readFileSync(filePath, "utf8"))
  // Support both pure ABI array and hardhat-style artifact with an `abi` field
  return Array.isArray(json) ? json : json.abi
}

export default defineConfig({
  out: "src/evm-core/generated.ts",
  contracts: [
    {
      name: "IWasm",
      abi: readAbi("./node_modules/@nibiruchain/solidity/abi/IWasm.json"),
      address: ADDR_WASM_PRECOMPILE,
    },
    {
      name: "IOracle",
      abi: readAbi("./node_modules/@nibiruchain/solidity/abi/IOracle.json"),
      address: ADDR_ORACLE_PRECOMPILE,
    },
    {
      name: "IFunToken",
      abi: readAbi("./node_modules/@nibiruchain/solidity/abi/IFunToken.json"),
      address: ADDR_FUNTOKEN_PRECOMPILE,
    },
    {
      name: "ErisEvm",
      abi: readAbi("./node_modules/@nibiruchain/solidity/abi/ErisEvm.json"),
      address: ADDR_ERIS_EVM,
    },
    {
      name: "WNIBI",
      abi: readAbi(
        "./nibiru/x/evm/embeds/artifacts/contracts/WNIBI.sol/WNIBI.json"
      ),
      address: ADDR_WNIBI,
    },
  ],
  plugins: [
    // Generate non-React viem wrappers (readContract/writeContract helpers)
    actions(),
    react(),
  ],
})
