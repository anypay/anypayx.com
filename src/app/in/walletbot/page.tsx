'use client'

import { useEffect, useState } from 'react'
import useWalletBot, { AddressBalance } from '@/hooks/useWalletBot'

export default function WalletBotPage() {
    const { data, error, loading } = useWalletBot()

    console.log('WalletBotPage', data, error, loading)

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading WalletBot data...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="bg-red-500/10 text-red-500 p-4 rounded-lg max-w-md text-center">
                    <svg 
                        className="w-8 h-8 mx-auto mb-3" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                        />
                    </svg>
                    <h3 className="text-lg font-medium mb-2">Error Loading Data</h3>
                    <p className="text-sm text-red-400">{error.message}</p>
                </div>
            </div>
        )
    }

    return <div>WalletBotPage</div>
} 