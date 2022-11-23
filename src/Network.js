import { useNetwork } from 'wagmi'

export default function Network(){
    const { chain, chains } = useNetwork()
    return (
        <>
        {chain && <div>Connected to {chain.name}</div>}
        </>
    )
}