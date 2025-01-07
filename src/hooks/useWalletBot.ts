import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import { app } from 'anypay'
import { useAPI, API_BASE } from '../api/useAPI'
import axiosInstance from '@/lib/axios'

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
    cancelPayment: (string) => Promise<any>;
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
    app: any | null;
    createInvoice: (amount: number, currency: string) => Promise<any>;
    createPayment: (amount: number, currency: string, address: string) => Promise<any>;
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

    async cancelInvoice(uid: string) {
        console.log('cancelInvoice', { uid })
        const result = await axiosInstance.delete(`${API_BASE}/r/${uid}`, {
            auth: {
                username: this.accessToken,
                password: ''
            }
        })
        console.log('createInvoice.result', result)
        return result.data
    }

    queuePayment() {}
    listQueue() {}
    listPayments() {}
    listCancelled() {}
}

export default function useWalletBot(): UseWalletBot {
    const { apiKey } = useSupabaseAuth()
    const [app, setApp] = useState<any | null>(null)
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const supabase = createClient()

    useEffect(() => {
        const fetchApp = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser()
                if (!user) throw new Error('User not authenticated')

                const { data: account, error: accountError } = await supabase
                    .from('accounts')
                    .select('id')
                    .eq('user_id', user.id)
                    .single()

                if (accountError) throw accountError
                if (!account) throw new Error('No account found')

                const { data: appsData, error: appError } = await supabase
                    .from('Apps')
                    .select('*')
                    .eq('name', '@wallet-bot')
                    .eq('account_id', account.id)

                console.log('->>>>appError', appError)
                console.log('->>>>appsData', appsData)

                if (appError) throw appError

                if (appsData?.length === 0) {
                    // create app
                    const { data: appData, error: appError } = await supabase
                        .from('Apps')
                        .insert({
                            name: '@wallet-bot',
                            account_id: account.id,
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                        })
                        .select()
                        .single()

                    if (appError) throw appError
                    setApp(appData)
                } else {
                    setApp(appsData![0])
                }
            } catch (err: any) {
                console.error('Error fetching app:', err)
            }
        }

        fetchApp()
    }, [])

    const [walletBotRecord, setWalletBotRecord] = useState<any | null>(null)

    useEffect(() => {

        async function fetchWalletBotRecord() {
            console.log('FETCH WALLET BOT RECORD')

            if (!app) return

            // find or create from "WalletBots" table in supabase where app_id = app.id

            console.log('3333 fetch wallet bot record 33333')

            const { data: walletBotData, error: walletBotError } = await supabase
                .from('WalletBots')
                .select('*')
                .eq('app_id', app.id)
                .eq('account_id', app.account_id)

            console.log({walletBotData, walletBotError})

            if (walletBotData?.length === 0) {
                // create wallet bot record
                const { data: walletBotData, error: walletBotError } = await supabase
                    .from('WalletBots')
                    .insert({
                        app_id: app.id,
                        account_id: app.account_id,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    })
                    .select()
                    .single()

                console.log({walletBotData, walletBotError})

                if (walletBotError) throw walletBotError
                setWalletBotRecord(walletBotData)
            } else {
                setWalletBotRecord(walletBotData![0])
            }

        }

        fetchWalletBotRecord()
    }, [app])

    useEffect(() => {
        const fetchAccessToken = async () => {
            if (!app || !walletBotRecord) return

            console.log('4444 fetch access token 44444')

            try {
                const { data: tokenData, error: tokenError } = await supabase
                    .from('access_tokens')
                    .select('*')
                    .eq('account_id', app.account_id)
                    .eq('app_id', app.id)
                    
                console.log('->>>>tokenData1', tokenData)
                console.log('->>>>tokenError1', tokenError)

                if (tokenError) throw tokenError

                if (!tokenData || tokenData.length === 0) {
                    // create access token
                    const { data: tokenData, error: tokenError } = await supabase
                        .from('access_tokens')
                        .insert({
                            account_id: app.account_id,
                            app_id: app.id,
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                        })
                        .select()
                        .single()

                    console.log('->>>>tokenError', tokenError)

                    console.log('->>>>tokenData', tokenData)

                    if (tokenError) throw tokenError

                    setAccessToken(tokenData?.uid || null)
                } else {
                    setAccessToken(tokenData?.[0]?.uid || null)
                }

                
            } catch (err: any) {
                console.error('Error fetching access token:', err)
            }
        }

        fetchAccessToken()
    }, [walletBotRecord])

    useEffect(() => {
        if (accessToken) {
            console.log('WALLETBOT ACCESS TOKEN SET', accessToken)            
        }
    }, [accessToken])

    useEffect(() => {
        if (app) {
            console.log('WALLETBOT APP SET', app)
            //setWalletBot(new WalletBot(app.private_key))
        }
    }, [app])

    const [status, setStatus] = useState<string>('disconnected')
    const [counts, setCounts] = useState<any[]>([])
    const [token, setToken] = useState<string | null>(null)
    const [balances, setBalances] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    const [paid, setPaid] = useState<any[]>([])
    const [unpaid, setUnpaid] = useState<any[]>([])
    const [cancelled, setCancelled] = useState<any[]>([])

    async function fetchPaid() {
        if (!accessToken) return

        const { data: paidData, refresh: refreshPaid } = useAPI(`/v1/api/apps/wallet-bot/invoices?status=paid`, {
            auth: {
                username: accessToken,
                password: ''
            }
        })

        setPaid(paidData)
    }

    async function fetchUnpaid() {
        if (!accessToken) return

        const { data: unpaidData, refresh: refreshUnpaid } = useAPI(`/v1/api/apps/wallet-bot/invoices?status=unpaid`, {
            auth: {
                username: accessToken,
                password: ''
            }
        })

        setUnpaid(unpaidData)
    }

    async function fetchCancelled() {
        if (!accessToken) return

        const { data: cancelledData, refresh: refreshCancelled } = useAPI(`/v1/api/apps/wallet-bot/invoices?status=cancelled`, {
            auth: {
                username: accessToken,
                password: ''
            }
        })

        setCancelled(cancelledData)
    }

    useEffect(() => {
        if (!accessToken) return

        fetchPaid()
    }, [accessToken])

    useEffect(() => {
        if (!accessToken) return

        fetchUnpaid()
        
    }, [accessToken])

    useEffect(() => {
        if (!accessToken) return

        fetchCancelled()
        
    }, [accessToken])

    const refresh = async function() {
        return Promise.all([
            fetchPaid(),
            fetchUnpaid(),
            fetchCancelled()
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

    const cancelPayment = async function(uid: string) {
        console.log('cancelInvoice', { uid })
        const result = await axiosInstance.delete(`https://api.anypayx.com/r/${uid}`, {
            auth: {
                username: accessToken || '',
                password: ''
            }
        })
        console.log('createInvoice.result', result)
        return result.data
    }

    const addPayment = async function() {
        return walletBot?.queuePayment()
    }

    async function listAddressBalances(): Promise<AddressBalance[]> {
        const { data } = await axiosInstance.get(`${API_BASE}/v1/api/apps/wallet-bot/address-balances`, {
            auth: {
                username: accessToken || '',
                password: ''
            }
        })
        return data.balances
    }

    async function listAddressBalanceHistory({address,chain,currency}: Address): Promise<AddressBalance[]> {
        const { data } = await axiosInstance.get(`${API_BASE}/v1/api/apps/wallet-bot/address-balances/${chain}/${currency}/${address}`, {
            auth: {
                username: accessToken || '',
                password: ''
            }
        })
        return data.history
    }

    async function listPaid({limit, offset}: {limit: number, offset: number}): Promise<any[]> {
        const { data } = await axiosInstance.get(`${API_BASE}/v1/api/apps/wallet-bot/invoices?status=paid&limit=${limit}&offset=${offset}`, {
            auth: {
                username: accessToken || '',
                password: ''
            }
        })
        return data.invoices
    }

    async function listUnpaid({limit, offset}: {limit: number, offset: number}): Promise<AddressBalance[]> {
        const { data } = await axiosInstance.get(`${API_BASE}/v1/api/apps/wallet-bot/invoices?status=unpaid&limit=${limit}&offset=${offset}`, {
            auth: {
                username: accessToken || '',
                password: ''
            }
        })
        return data.invoices
    }

    const createInvoice = async (amount: number, currency: string) => {
        if (!accessToken) throw new Error('Access token is not set')

        try {
            const response = await axiosInstance.post(`${API_BASE}/v1/api/apps/wallet-bot/invoices`, {
                amount,
                currency,
            }, {
                auth: {
                    username: accessToken,
                    password: '',
                },
            })

            console.log('Invoice created:', response.data)
            return response.data
        } catch (err) {
            console.error('Error creating invoice:', err)
            throw err
        }
    }

    const createPayment = async (amount: number, currency: string, address: string) => {
        if (!accessToken) throw new Error('Access token is not set')

        try {
            const response = await axiosInstance.post(`${API_BASE}/v1/api/apps/wallet-bot/invoices`, {
                currency: currency,
                to: {
                    amount,
                    currency: 'USD',
                    address,
                }

            }, {
                auth: {
                    username: accessToken,
                    password: '',
                },
            })

            console.log('Payment created:', response.data)
            return response.data
        } catch (err) {
            console.error('Error creating payment:', err)
            throw err
        }
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
        token: accessToken || '',
        data: walletBotRecord,
        error,
        status,
        balances,
        counts,
        refresh,
        listAddressBalances,
        listAddressBalanceHistory,
        app,
        createInvoice,
        createPayment,
    }
}

