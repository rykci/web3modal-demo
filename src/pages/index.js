'use client'

import { useAccount } from 'wagmi'

export default function Home() {
  const account = useAccount()
  return (
    <div className="bg-blue-300 h-lvh flex items-center justify-center">
      <p
        onClick={() => {
          console.log(account.address)
        }}
        className="border-red-300 border-2"
      >
        Print Address
      </p>
      <w3m-button />
    </div>
  )
}
