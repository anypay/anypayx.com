import { paramCase } from 'change-case';
import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { MenuItem, IconButton } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// components
import Iconify from '../../../../components/Iconify';
import MenuPopover from '../../../../components/MenuPopover';

import { useRouter } from 'next/router'

import { DOMAIN, axios, API_BASE } from 'src/api/useAPI'


// ----------------------------------------------------------------------

type Props = {
  onSendWebhook: VoidFunction;
  invoice?: any;
  payment?: any;
};

export default function PaymentsMoreMenu({ onSendWebhook, invoice, payment }: Props) {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const shareInvoiceUrl = `https://${DOMAIN}/i/${invoice.uid}`

  function onShareReceipt(opts: any) {
    console.log('share receipt clicked', shareInvoiceUrl)
    window.open(shareInvoiceUrl, '_blank')
  }

  function onViewBlockchain(opts: any) {
    console.log('share blockchain clicked', payment)
    window.open(payment.block_explorer_url, '_blank')
  }

  async function cancelInvoice() {

    try {

      const { data } = await axios.delete(`${API_BASE}/r/${invoice.uid}`)

      console.log('invoice.cancelled', data)

    } catch(error) {

      console.error('invoice.cancel.failed', error)

    }

  }

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -1,
          width: 160,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >

        {invoice.status === 'unpaid' && (

          <MenuItem onClick={cancelInvoice} sx={{ color: '' }}>
            <Iconify icon={'eva:cancel-outline'} sx={{ ...ICON }} />
            Cancel Invoice
          </MenuItem>
        )}

        <MenuItem onClick={onSendWebhook} sx={{ color: '' }}>
          <Iconify icon={'eva:log-in-outline'} sx={{ ...ICON }} />
          Send Webhook
        </MenuItem>

        <MenuItem onClick={onViewBlockchain}>
          <Iconify icon={'eva:checkmark-square-outline'} sx={{ mr: 2, width: 24, height: 24 }} />
          See Explorer
        </MenuItem>
      </MenuPopover>
    </>
  );
}
