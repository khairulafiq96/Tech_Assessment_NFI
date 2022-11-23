//Defining libraries
import { Web3Modal } from "@web3modal/react";
import { Web3Button } from "@web3modal/react";
import initWeb3Modal from "./initWeb3Modal";

//Defining classes/functions
import User from './User'
import Network from "./Network";

export default function App(){
  return (
    <div className="h-screen w-screen bg-slate-300">
      <Web3Modal
        projectId="416444d4d1ceb572bd760628eeb52677"
        theme="dark"
        accentColor="default"
        ethereumClient={initWeb3Modal()}
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
