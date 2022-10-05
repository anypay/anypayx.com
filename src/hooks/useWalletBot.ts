

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

    const status = data?.wallet_bot.status || 'disconnected'

    var counts = data?.counts || []

    const token = data?.access_token

    const balances = data?.balances

    const { data: paid, refresh: refreshPaid } = useAPI(`/apps/wallet-bot/invoices?status=paid`, {
        auth: {
            username: token,
            password: ''
        }
    })

    const { data: unpaid, refresh: refreshUnpaid } = useAPI(`/apps/wallet-bot/invoices?status=unpaid`, {
        auth: {
            username: token,
            password: ''
        }
    })
    const { data: cancelled, refresh: refreshCancelled } = useAPI(`/apps/wallet-bot/invoices?status=cancelled`, {
        auth: {
            username: token,
            password: ''
        }
    })

    const refresh = async function() {
        return Promise.all([
            refreshPaid,
            refreshUnpaid,
            refreshCancelled
        ])
    }

    const [numberPending, setNumberPending] = useState<number | null>(0)
    const [numberPaid, setNumberPaid] = useState<number | null>(null)
    const [numberCancelled, setNumberCancelled] = useState<number | null>(null)

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



    return {
        loading,
        unpaid,
        paid,
        cancelled,
        numberPending,
        numberPaid,
        numberCancelled,
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
        counts,
        refresh
    }

}
