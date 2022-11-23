import { useAccount } from 'wagmi'

export default function User() {
  //Getting account details
  const { isConnected, address } = useAccount()

  return (
    <div>
        {isConnected ? <>Address : {address}</> : <>User is not connected</>} 
    </div>
  )
}