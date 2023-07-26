import { Avalanche, BN } from "../../src"
import { PlatformVMAPI } from "../../src/apis/platformvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = avalanche.PChain()

const main = async (): Promise<any> => {
  const currentSupply: BN = await pchain.getCurrentSupply()
  console.log(currentSupply.toString())
}

main()
