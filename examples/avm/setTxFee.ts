import { Avalanche, BN } from "../../src"
import { AVMAPI } from "../../src/apis/avm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const xchain: AVMAPI = avalanche.XChain()

const main = async (): Promise<any> => {
  const fee: BN = new BN(507)
  xchain.setTxFee(fee)
  const txFee: BN = xchain.getTxFee()
  console.log(txFee)
}

main()
