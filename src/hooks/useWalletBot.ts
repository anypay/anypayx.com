

import { app } from 'anypay'

import { useState } from 'react'

import { useAPI, API_BASE } from '../api/useAPI'

import axios from 'axios';

interface Card {
    chain?: string;
    currency: string;
    address: string;
    balance: number;
    usd_balance: number;
    timestamp?: Date;
}

export interface Address {
    chain: string;
    currency: string;
    address: string;
}

export interface AddressBalance extends Address {
    balance: number;
    updatedAt: string;
    usd_balance?: number;
}

export interface UseWalletBot {
    loading: boolean;
    unpaid: any;
    paid: any;
    cancelled: any;
    numberPending: number | null;
    numberPaid: number | null;
    numberCancelled: number | null;
    connected: boolean;
    listPending: () => Promise<any>;
    cancelPayment: () => Promise<any>;
    addPayment: () => Promise<any>;
    token: string;
    data: any;
    error: any;
    status: string;
    balances: any;
    counts: any;
    refresh: () => Promise<any>;
    listAddressBalances: () => Promise<AddressBalance[]>;
    listAddressBalanceHistory: (Address) => Promise<AddressBalance[]>;
    listPaid: ({limit, offset}: {limit: number, offset: number}) => Promise<AddressBalance[]>;
    listUnpaid: ({limit, offset}: {limit: number, offset: number}) => Promise<AddressBalance[]>;
}



export class WalletBot {

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

export default function(): UseWalletBot {

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

    async function listAddressBalances(): Promise<AddressBalance[]> {

        const { data } = await axios.get(`${API_BASE}/apps/wallet-bot/address-balances`, {
            auth: {
                username: token,
                password: ''
            }
        })

        return data.balances

    }

    async function listAddressBalanceHistory({address,chain,currency}: Address): Promise<AddressBalance[]> {

        const { data } = await axios.get(`${API_BASE}/apps/wallet-bot/address-balances/${chain}/${currency}/${address}`, {
            auth: {
                username: token,
                password: ''
            }
        })

        return data.history

    }

    async function listPaid({limit, offset}: {limit: number, offset: number}): Promise<any[]> {

        const { data } = await axios.get(`${API_BASE}/apps/wallet-bot/invoices?status=paid&limit=${limit}&offset=${offset}`, {
            auth: {
                username: token,
                password: ''
            }
        })

        return data.invoices

    }


    async function listUnpaid({limit, offset}: {limit: number, offset: number}): Promise<AddressBalance[]> {

        const { data } = await axios.get(`${API_BASE}/apps/wallet-bot/invoices?status=unpaid&limit=${limit}&offset=${offset}`, {
            auth: {
                username: token,
                password: ''
            }
        })

        return data.invoices

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
        listPaid,
        listUnpaid,
        listPending,
        cancelPayment,
        addPayment,
        token,
        data,
        error,
        status,
        balances,
        counts,
        refresh,
        listAddressBalances,
        listAddressBalanceHistory
    }

}

