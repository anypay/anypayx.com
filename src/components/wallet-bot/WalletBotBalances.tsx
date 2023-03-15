import {
    Card,
    Container,
    Typography,
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Avatar,
    TableHead
  } from '@mui/material';
  import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import useSettings from "src/hooks/useSettings";
import useWalletBot, { AddressBalance } from "src/hooks/useWalletBot";
import Scrollbar from "../Scrollbar";
import moment from 'moment';


export default function WalletBotBalances({balances}:{ balances: AddressBalance[]}) {

    const { enqueueSnackbar } = useSnackbar();
    const { themeStretch } = useSettings();
    const router = useRouter();
  

    
    const TABLE_HEAD = [
      { id: 'chain', label: 'Chain', alignRight: false },
      { id: 'currency', label: 'Currency', alignRight: false },
      { id: 'address', label: 'Address', alignRight: false },
      { id: 'balance', label: 'Balance', alignRight: false },
      { id: 'usd_balance', label: 'USD Balance', alignRight: false },
      { id: 'date', label: 'Date', alignRight: false },
    ];
  
    function handleRowClicked(row: AddressBalance) {
      router.push(`/apps/wallet-bot/balances/${row.chain}/${row.currency}/${row.address}`)
    }

  
    return (
  
      <Card>
  
      <Scrollbar>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table>
  
          <TableHead>
            <TableRow>
  
              {TABLE_HEAD.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.alignRight ? 'right' : 'left'}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
  
            <TableBody>
              {balances
                .map((row: AddressBalance) => {
                  const { chain, currency, address, balance, updatedAt, usd_balance } = row;
  
                  const date = moment(updatedAt).format('MMM DD, YYYY - hh:mma')
  
                  return (
                    <TableRow
                      hover
                      key={`${chain}-${currency}-${address}`}
                      onClick={() => { handleRowClicked(row) }}
                    >
  
                      <TableCell onClick={() => console.log('row clicked')}>
                            {chain}
                      </TableCell>
                      <TableCell onClick={() => console.log('row clicked')} align="left">
                          {currency}
                      </TableCell>
                      <TableCell align="right">
                          {address}
                      </TableCell>
                      <TableCell onClick={() => console.log('row clicked')} align="left">
                          <span style={{color: 'white', textDecoration: 'none' }}>{balance}</span>
                      </TableCell>
                      <TableCell onClick={() => console.log('row clicked')} align="left">
                          <span style={{color: 'white', textDecoration: 'none' }}>{usd_balance || '?'}</span>
                      </TableCell>
                      <TableCell onClick={() => console.log('row clicked')} align="left">{date}</TableCell>
  
                    </TableRow>
                  );
                })}
  
            </TableBody>
  
          </Table>
        </TableContainer>
      </Scrollbar>
  
      </Card>
    )
  }
  