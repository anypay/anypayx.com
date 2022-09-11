import { useState } from 'react';

import { useRouter } from 'next/router'

import { app } from 'anypay'

import useWalletBot from '../../hooks/useWalletBot'

import { useSnackbar } from 'notistack';



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

export default function NewWalletBotPaymentDialog({ account, onPaymentRequestCreated }: {
    account?: Account,
    onPaymentRequestCreated?: Function
}) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [coin, setCoin] = useState(0);
  const [address, setAddress] = useState(0);

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

    console.log('payment-request.template', template)

    let request = await anypay.request(template)

    console.log('payment-request.created', request)

    setOpen(false)

    if (onPaymentRequestCreated) {

        onPaymentRequestCreated(request)

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
                <option key={'DASH'} value='DASH'>
                    DASH
                </option>
                <option key={'BSV'} value='BSV'>
                    BSV
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
