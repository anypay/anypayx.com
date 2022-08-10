import { useState } from 'react';

import { useRouter } from 'next/router'

import { axios, useAPI } from '../../api/useAPI'
// @mui
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';

import { useSnackbar } from 'notistack';


// ----------------------------------------------------------------------

interface Account {
    id: number;
    denomination: string;
}

export default function LinkAccountDialog({ account }: { account?: Account, refresh: Function }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
      console.log('cancel')
      setOpen(false);

  }

  const handleEmailChange = (event: any) => {

    setError(null)

      setEmail(event.target.value)
  }

  const { enqueueSnackbar } = useSnackbar();

  const { refresh } = useAPI('/linked-accounts')

  const handleSubmit = async () => {


    setError(null)

    console.log({ email })

    try {

        let result = await axios.post('/linked-accounts', { email })

        console.log(result.data);

        if (result.status === 201) {

            enqueueSnackbar('Successfully Linked Account', { variant: 'success' })

        } else if (result.status === 200) {

            enqueueSnackbar('Account Already Linked', { variant: 'warning' })

        }

        refresh()

        setOpen(false);

    } catch(error) {

        console.error(error)

        enqueueSnackbar(error.message, { variant: 'error' })

        setError(error.message)

    }
    // set open false
    

    // open new window target="_blank"
  };


  return (
    <div>
      <Button variant="outlined" color="warning" onClick={handleClickOpen}>
        + Link Account
      </Button>

      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Link Account Read-Only</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the email address you would like to access your account
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            type="email"
            margin="dense"
            variant="outlined"
            label="Email of target Anypay account"
            onChange={handleEmailChange}
          />
        </DialogContent>
        {error && (
            <DialogContent>
                <DialogContentText sx={{color: 'red'}}>
                    {error}
                </DialogContentText>
            </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleCancel} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Link
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
