import { useState } from 'react';

import { useRouter } from 'next/router'

import { createInvoice } from '../../api/invoices'
// @mui
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@mui/material';

import { DOMAIN } from '../../api/useAPI'

// ----------------------------------------------------------------------

interface Account {
    id: number;
    denomination: string;
}

export default function NewPaymentDialog({ account }: { account?: Account }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);

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

  const handleSubmit = async () => {
    console.log({ amount })
    // show loading

    // create invoice
    const invoice = await createInvoice({ amount })

    console.log('create invoice result', invoice)

    // set open false
    setOpen(false);

    // open new window target="_blank"
    window.open(`https://${DOMAIN}/i/${invoice.uid}`)

    router.push(`/dashboard/invoices/${invoice.uid}`)

  };

  const denomination = account?.denomination || 'USD'

  return (
    <div>
      <Button variant="outlined" color="warning" onClick={handleClickOpen}>
        + Collect Payment
      </Button>

      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>New Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the amount of {denomination} you would like to collect
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            type="number"
            margin="dense"
            variant="outlined"
            label="Amount to Collect"
            onChange={handleAmountChange}
          />
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
