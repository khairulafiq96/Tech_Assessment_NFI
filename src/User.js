import { useAccount } from 'wagmi'

export default function User() {
  const { isConnected, address } = useAccount()

  return (
    <>
       Status : {isConnected ? <>User is connected {address}</> : <>User is not connected</>} 
    </>
  )
}