

import { app } from 'anypay'

import { useEffect, useState } from 'react'

import { useAPI } from '../api/useAPI'

interface UseWalletBot {
    updateBalances: Function;
    queuePayment: Function;
    cancelPayment: Function;
}

interface Card {
    chain?: string;
    currency: string;
    address: string;
    balance: number;
    usd_balance: number;
    timestamp?: Date;
}

class WalletBot {

    accessToken: string;

    anypay: any;

    cards: Card[];
    
    constructor(accessToken: string) {

        this.accessToken = accessToken;

        this.anypay = app(accessToken)

        this.cards = []
    }

    cancelInvoice() {

    }
    queuePayment() {

    }
    listQueue() {

    }
    listPayments() {

    }
    listCancelled() {

    }
}

export default function() {

    const { data, error, loading } = useAPI(`/apps/wallet-bot`)

    const { data: paid } = useAPI(`/apps/wallet-bot/invoices?status=paid`)
    const { data: unpaid } = useAPI(`/apps/wallet-bot/invoices?status=unpaid`)
    const { data: cancelled } = useAPI(`/apps/wallet-bot/invoices?status=cancelled`)
    const { data: failed } = useAPI(`/apps/wallet-bot/invoices?status=failed`)

    const [numberPending, setNumberPending] = useState<number | null>(0)
    const [numberPaid, setNumberPaid] = useState<number | null>(null)
    const [numberCancelled, setNumberCancelled] = useState<number | null>(null)
    const [numberFailed, setNumberFailed] = useState<number | null>(null)

    const [connected, setConnected] = useState<boolean>(false)

    const [walletBot, setWalletBot] = useState<WalletBot>()

    const listPending = async function() {
        return walletBot?.listQueue()
    }

    const listCancelled = async function() {
        return walletBot?.listQueue()
    }

    const cancelPayment = async function() {
        return walletBot?.cancelInvoice()
    }

    const addPayment = async function() {
        return walletBot?.queuePayment()
    }

    const status = data?.wallet_bot.status || 'disconnected'

    if (data?.counts) {
        console.log('COUNTS', data?.counts)
    }

    var counts = data?.counts || []

    const token = data?.access_token

    const balances = data?.balances

    counts = counts.reduce((map, row) => {
        map[row.status] = row.count
        return map
    }, {})

    return {
        loading,
        unpaid,
        paid,
        cancelled,
        failed,
        numberPending,
        numberPaid,
        numberCancelled,
        numberFailed,
        connected,
        listPending,
        listCancelled,
        cancelPayment,
        addPayment,
        token,
        data,
        error,
        status,
        balances,
        counts
    }

}
