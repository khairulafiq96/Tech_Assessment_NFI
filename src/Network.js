import { useNetwork } from 'wagmi'

export default function Network(){
    //Getting Network Details
    const { chain } = useNetwork()
    return (
        <div>
            {chain && <div>Network : {chain.name}</div>}
        </div>
    )
}