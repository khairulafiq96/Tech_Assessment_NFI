import {EthereumClient,modalConnectors,walletConnectProvider} from "@web3modal/ethereum";
import { chain, configureChains, createClient } from "wagmi";

export default function initWeb3Modal(){

    //Defining chains
    const chains = [chain.mainnet,chain.goerli, chain.sepolia];

    // Wagmi client
    const { provider } = configureChains(chains, [
        walletConnectProvider({ projectId: "416444d4d1ceb572bd760628eeb52677"}),
    ]);
    const wagmiClient = createClient({
        autoConnect: true,
        connectors: modalConnectors({ appName: "nfitest", chains }),
        provider,
    });

    // Web3Modal Ethereum Client
    const ethereumClient = new EthereumClient(wagmiClient, chains);

    return ethereumClient
}

