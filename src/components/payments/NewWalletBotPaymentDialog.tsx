import { useState } from 'react';

import { useRouter } from 'next/router'

import { app } from 'anypay'

import useWalletBot from '../../hooks/useWalletBot'

import { useSnackbar } from 'notistack';

import { API_BASE } from '../../api/useAPI'

// @mui
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Select
} from '@mui/material';

// ----------------------------------------------------------------------

interface Account {
    id: number;
    denomination: string;
}

export default function NewWalletBotPaymentDialog({ account, onPaymentRequestCreated, coins }: {
    account?: Account,
    onPaymentRequestCreated?: Function,
    coins?: string[]
}) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [coin, setCoin] = useState('DASH');
  const [address, setAddress] = useState(undefined);

  const { enqueueSnackbar } = useSnackbar();

  const { token } = useWalletBot()

  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
      console.log('cancel')
      setOpen(false);

  }

  const handleAmountChange = (event: any) => {

      setAmount(event.target.value)
  }

  const handleAddressChange = (event: any) => {

    setAddress(event.target.value)

  }

  const handleCoinChange = (event: any) => {

    setCoin(event.target.value)
    
  }

  const denomination = account?.denomination || 'USD'

  const handleSubmit = async () => {

    const anypay = app(token)

    const template = [{
        currency: coin,
        to: [{
            address: address,
            amount: amount,
            currency: denomination
        }]
    }]

    const options = {
      webhook_url: `https://${API_BASE}/v1/api/test/webhooks`
    }

    console.log('payment-request', { template, options})

    setOpen(false)

    try {

      let request = await anypay.request(template, options)

      console.log('payment-request.created', request)

      enqueueSnackbar('wallet bot payment request created')

      if (onPaymentRequestCreated) {

          onPaymentRequestCreated(request)

      }

    } catch(error) {

      console.error('wallet-bot.payment-request.create.error', error)

    }

  };

  return (
    <div>
      <Button variant="outlined" color="warning" onClick={handleClickOpen}>
        + Send Payment
      </Button>

      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>New Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the amount of {denomination} you would like to send
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            type="number"
            margin="dense"
            variant="outlined"
            label="Amount to Send"
            onChange={handleAmountChange}
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>
            Enter the recipient address
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            type="string"
            margin="dense"
            variant="outlined"
            label="RecipientAddress"
            onChange={handleAddressChange}
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>
            Choose the coin you would like to send
          </DialogContentText>
          <Select
              native
              fullWidth
              value={coin}
              onChange={handleCoinChange}

            >
                <option key={'BCH'} value='BCH'>
                    BCH
                </option>
                <option key={'DASH'} value='DASH'>
                    DASH
                </option>
                <option key={'BSV'} value='BSV'>
                    BSV
                </option>
                <option key={'LTC'} value='LTC'>
                    LTC
                </option>
                <option key={'DOGE'} value='DOGE'>
                    DOGE
                </option>
                <option key={'BTC'} value='BTC'>
                    BTC
                </option>

            </Select>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
