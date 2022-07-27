import { useSnackbar } from 'notistack';
import { useState } from 'react';

import useWebSocket, { ReadyState } from 'react-use-websocket';

import EventEmitter from 'eventemitter3';
import { snackbarClasses } from '@mui/material';

import { DOMAIN } from '../api/useAPI'

// ----------------------------------------------------------------------

const useWebsocket = () => {

    const { enqueueSnackbar } = useSnackbar();

    const [socketUrl, setSocketUrl] = useState(`wss://${DOMAIN}`);
    const [messageHistory, setMessageHistory] = useState([]);

  const events = new EventEmitter()

  const { sendMessage, sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    share: true,
    //shouldReconnect: true,
    retryOnError: true,
    onOpen: () => {

      enqueueSnackbar('Websocket Connected');

      sendJsonMessage({
        "type": "authorization",
        "payload": {
          "token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoxMTc3LCJ1aWQiOiJmNzJhNGMyZi0xMjE0LTQ5MDQtYTM4NS01MmYzNjFkMjNjNDgiLCJpYXQiOjE2NDcxNzY3MTksImV4cCI6MTY0OTc2ODcxOSwiYXVkIjoiaHR0cHM6Ly9hbnlwYXl4LmNvbSIsImlzcyI6ImFueXBheXguY29tIiwic3ViIjoiYXV0aEBhbnlwYXl4LmNvbSJ9.HathcOZ7e2Th9yiy8TvruKttAItRtpxh66if32dfotODwyr_BfGqZB7W2de-8ceJszCTtaFcdKrgALfNsYpEDkZkF9wNA3HU_JsuEwCNQzj4rw3aWg_zyPntw190RnC9v9atoX0bd8FL9ieN9P59faK_i1Ztu7_NGB3SIE4a5_qV24QO_rhyJUedbR4ZaFOVTX76hy2nUg90RFy46PtAxw79pMXa4B65TbnUo4Lu-YtVnxo0H2KRJIBO1_ZRVF-uuyAjbsoPgupjEYkjwag5vS5Xr6UdKg41uMmcqhkGSfreSoPEUblgRZb3p3Go_hLNv2FpOJXNVRK_wOnUO4JhLkTjqU3uv2vepYLu38jspQVzzT6Gp1zzs-u4S8OkUz_ePCHmlqN7SXSvDjhZXcpFyZCJagJiI8YugW1LCi2PUl5NKotPKzjCcdlJhKuUsqiWDkkCty3laJ17PtN6eiOVgLc-ax-l0CVUt8eFBxeQ750BWU2EK8Nk1oYANArY5i5d8g5sQsAmUFmQ62RhgDyEbqP6i1OUyzYS5G_L2N7ZL4sCSWMdIeINBkj7fTJqE005jMT5OBTySlIRuzSmPMgiKqqGmyeZQdOBBYjbBuMKraNyVto4mXp77s1t6ppu5Kib7BYm8fPqeBaSyP-o4yFrNATpn9rC-mQhhOXHh6hYM9Y"
        }
      })
    },
    onError: (error: any) => {

        console.error('ws.error', error);

        //enqueueSnackbar(error.message, { variant: 'error' })
    },
    onMessage: (message) => {

        try {

            const json = JSON.parse(message.data);

            console.log('ws.message.json', json)

            const {type, payload} = json;

            if (type && payload) {
                
                events.emit(type, payload);
            }

        } catch(error) {

            console.error('ws.message.json.parse.error', error)

        }
    
    },
    queryParams: {
      authorization: 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoxMTc3LCJ1aWQiOiJmNzJhNGMyZi0xMjE0LTQ5MDQtYTM4NS01MmYzNjFkMjNjNDgiLCJpYXQiOjE2NDcxNzY3MTksImV4cCI6MTY0OTc2ODcxOSwiYXVkIjoiaHR0cHM6Ly9hbnlwYXl4LmNvbSIsImlzcyI6ImFueXBheXguY29tIiwic3ViIjoiYXV0aEBhbnlwYXl4LmNvbSJ9.HathcOZ7e2Th9yiy8TvruKttAItRtpxh66if32dfotODwyr_BfGqZB7W2de-8ceJszCTtaFcdKrgALfNsYpEDkZkF9wNA3HU_JsuEwCNQzj4rw3aWg_zyPntw190RnC9v9atoX0bd8FL9ieN9P59faK_i1Ztu7_NGB3SIE4a5_qV24QO_rhyJUedbR4ZaFOVTX76hy2nUg90RFy46PtAxw79pMXa4B65TbnUo4Lu-YtVnxo0H2KRJIBO1_ZRVF-uuyAjbsoPgupjEYkjwag5vS5Xr6UdKg41uMmcqhkGSfreSoPEUblgRZb3p3Go_hLNv2FpOJXNVRK_wOnUO4JhLkTjqU3uv2vepYLu38jspQVzzT6Gp1zzs-u4S8OkUz_ePCHmlqN7SXSvDjhZXcpFyZCJagJiI8YugW1LCi2PUl5NKotPKzjCcdlJhKuUsqiWDkkCty3laJ17PtN6eiOVgLc-ax-l0CVUt8eFBxeQ750BWU2EK8Nk1oYANArY5i5d8g5sQsAmUFmQ62RhgDyEbqP6i1OUyzYS5G_L2N7ZL4sCSWMdIeINBkj7fTJqE005jMT5OBTySlIRuzSmPMgiKqqGmyeZQdOBBYjbBuMKraNyVto4mXp77s1t6ppu5Kib7BYm8fPqeBaSyP-o4yFrNATpn9rC-mQhhOXHh6hYM9Y'
    }
  })



  return { sendMessage, sendJsonMessage, lastMessage, readyState, events }
  
};

export default useWebsocket;
