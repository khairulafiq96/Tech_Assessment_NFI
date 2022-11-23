//Defining libraries
import {EthereumClient,modalConnectors,walletConnectProvider} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { chain, configureChains, createClient } from "wagmi";
import { Web3Button } from "@web3modal/react";

//Defining classes/functions
import User from './User'
import Network from "./Network";


//Defining chainns
const chains = [chain.mainnet,chain.goerli, chain.sepolia];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "416444d4d1ceb572bd760628eeb52677" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "nfitest", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);


export default function App(){
  return (
    <div 
      className="h-screen w-screen bg-slate-300">
      <Web3Modal
        projectId="416444d4d1ceb572bd760628eeb52677"
        theme="dark"
        accentColor="default"
        ethereumClient={ethereumClient}
      />
      <div className="container mx-auto 
                      flex flex-col items-center space-y-5 pt-20 break-all px-3
                      lg:text-xl">
        <Web3Button></Web3Button>
        <User></User>
        <Network></Network>
      </div>
    </div>
  )
};
