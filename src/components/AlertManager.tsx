import { Stack } from "@mui/material";
import React, { FC, useReducer } from "react";
import Alert, { AlertProps } from "./Alert/Alert";


export const useAlertReducer = () => {
  const initialState: [] = []

  type actionType = {
    type: 'ADD_ALERT' | 'REMOVE_ALERT'
    alert: AlertProps,
  }

  const reducer = (state: [AlertProps], action: actionType) => {
    switch (action.type) {
      case 'ADD_ALERT':
        return [...state, action.alert];
      case 'REMOVE_ALERT':
        return state.filter(alert => alert.message !== action.alert.message)
      default:
        throw new Error();
    }
  }
}

const AlertManager: FC = () => {
  return (
    <Stack direction={'column'} sx={{ maxWidth: '18.75em', margin: '.5em .5em 0 auto' }} spacing={2}>
      <Alert severity='error' title='Research for meeting' link="https://google.com" message='mono repo presentation' />
      <Alert severity='warning' title='Daily LinkedIn Post' link="https://linkedin.com" message='Send business post about merger' />
      <Alert severity='warning' link="https://linkedin.com" message='Send business post about merger' />
      <Alert severity='info' title='Birthday party for Rachel' link="https://amazon.com" message='Buy party gifts' />
      <Alert severity='success' title='Order lunch' message='eat healthy' />
    </Stack>
  );
}

export default AlertManager;
