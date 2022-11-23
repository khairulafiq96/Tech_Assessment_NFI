//Defining libraries
import {EthereumClient,modalConnectors,walletConnectProvider} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { Web3Button } from "@web3modal/react";

//Defining classes/functions
import User from './User'
import Network from "./Network";


//Defining chainns
const chains = [chain.mainnet,chain.goerli, chain.sepolia];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "c2b975a1e9bc302f69b3adf13a2c3f4b" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "bitpasar", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);


export default function App(){
  return (
    <>
    <Web3Modal
        projectId="c2b975a1e9bc302f69b3adf13a2c3f4b"
        theme="dark"
        accentColor="default"
        ethereumClient={ethereumClient}
      />
    <Web3Button></Web3Button>
    <User></User>
    <Network></Network>
    
    </>
  )
};
