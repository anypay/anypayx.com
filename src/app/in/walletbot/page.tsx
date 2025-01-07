'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useWalletBot from '@/hooks/useWalletBot'

export default function WalletBotPage() {
  const { paid, unpaid, loading, error, createPayment, token } = useWalletBot()
  const [activeTab, setActiveTab] = useState<'paid' | 'pending'>('paid')
  const [showCreatePaymentForm, setShowCreatePaymentForm] = useState(false)
  const [showToken, setShowToken] = useState(false)

  const handleTabChange = (tab: 'paid' | 'pending') => {
    setActiveTab(tab)
  }

  const handleCreatePayment = () => {
    setShowCreatePaymentForm(true)
  }

  const handleCloseForm = () => {
    setShowCreatePaymentForm(false)
  }

  const formik = useFormik({
    initialValues: {
      amount: '',
      currency: '',
      address: '',
    },
    validationSchema: Yup.object({
      amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
      currency: Yup.string().required('Currency is required'),
      address: Yup.string().required('Address is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const amount = parseFloat(values.amount);
        if (isNaN(amount)) {
          throw new Error('Invalid amount');
        }
        
        await createPayment(amount, values.currency, values.address);
        resetForm();
        handleCloseForm();
      } catch (err) {
        console.error('Error creating payment:', err);
      }
    },
  })

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">WalletBot Payments</h1>
        <button
          onClick={handleCreatePayment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Create Payment
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Access Token</h2>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
          <div className="text-gray-400">
            {showToken ? token : `${token?.slice(0, 4)}xxxx${token?.slice(-4)}`}
          </div>
          <button onClick={() => setShowToken(!showToken)} className="text-gray-400 hover:text-white">
            {showToken ? 'Hide' : 'Show'}
          </button>
        </div>
        <p className="text-gray-400 mt-4">
          Use this access token with the WalletBot CLI or Node.js SDK to manage your payments programmatically.
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 mt-4">
          <code>
            {`# Using WalletBot CLI
walletbot --token ${token} list-payments

# Using Node.js SDK
const walletbot = require('walletbot-sdk');
const client = new walletbot.Client({ token: '${token}' });
client.listPayments().then(console.log);`}
          </code>
        </pre>
      </div>

      <div className="mb-4">
        <button
          onClick={() => handleTabChange('paid')}
          className={`px-4 py-2 rounded-md ${activeTab === 'paid' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}
        >
          Paid
        </button>
        <button
          onClick={() => handleTabChange('pending')}
          className={`ml-2 px-4 py-2 rounded-md ${activeTab === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}
        >
          Pending
        </button>
      </div>

      {activeTab === 'paid' && (
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Paid Payments</h2>
          <ul className="space-y-4">
            {paid?.map((payment: any) => (
              <li key={payment.id} className="bg-gray-900 p-4 rounded-lg">
                <p className="text-white">Payment ID: {payment.id}</p>
                <p className="text-gray-400">Amount: {payment.amount}</p>
                <p className="text-gray-400">Currency: {payment.currency}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'pending' && (
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Pending Payments</h2>
          <ul className="space-y-4">
            {unpaid?.map((payment: any) => (
              <li key={payment.id} className="bg-gray-900 p-4 rounded-lg">
                <p className="text-white">Payment ID: {payment.id}</p>
                <p className="text-gray-400">Amount: {payment.amount}</p>
                <p className="text-gray-400">Currency: {payment.currency}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showCreatePaymentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-medium text-white mb-4">Create Payment</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Amount to Send (USD)</label>
                <input
                  type="number"
                  name="amount"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.amount}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
                />
                {formik.touched.amount && formik.errors.amount ? (
                  <div className="text-red-500 text-sm">{formik.errors.amount}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Coin to Send</label>
                <input
                  type="text"
                  name="currency"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.currency}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
                />
                {formik.touched.currency && formik.errors.currency ? (
                  <div className="text-red-500 text-sm">{formik.errors.currency}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Recipient Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-500 text-sm">{formik.errors.address}</div>
                ) : null}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-gray-700 text-white px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 