import Script from 'next/script'

// @mui
import {
  Button,
} from '@mui/material';

import { useSnackbar } from 'notistack';

export default function CollectRefundDialog({ refund, onRefund }: { refund?: any, onRefund: any }) {

  const { enqueueSnackbar } = useSnackbar();

  let invoice;

  const handleClickOpen = () => {

    //@ts-ignore
    invoice = anypay.showInvoice(refund?.refund_invoice.uid)

    invoice.on('paid', () => {

      //@ts-ignore
      anypay.close()

      // refresh data model
      onRefund();

      enqueueSnackbar('Refund Sent!')

    })

  };

  return (
    <>
      <Script src="https://unpkg.com/@anypayinc/widget/anypay.min.js" />
      <Button variant="outlined" color="warning" onClick={handleClickOpen}>
        Send Refund
      </Button>

    </>
  );
}
