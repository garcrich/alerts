import { Stack } from "@mui/material"
import { FC } from "react"
import Alert from "./Alert/Alert"
import { AlertProps } from './Alert/AlertType'
import uuid from 'react-uuid'
import { type } from "os"
export type ActionType = {
  type: 'ADD_ALERT' | 'REMOVE_ALERT'
  payload: AlertProps,
}

export const useAlertReducer = (state: AlertProps[] | [], action: ActionType) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_ALERT':
      payload.id = payload.id ? payload.id : uuid()
      return [...state, payload];
    case 'REMOVE_ALERT':
      return state.filter(alert => alert.id !== payload.id)
    default:
      throw new Error()
  }
}

const AlertManager: FC<{ sentAlerts: AlertProps[] | [] }> = ({ sentAlerts }) => {
  return (
    <Stack direction={'column'} sx={{ maxWidth: '18.75em', margin: '.5em .5em 0 auto' }} spacing={2}>
      {sentAlerts.length > 0 && sentAlerts.map((props) => (
        <Alert key={props.id} {...props} />
      ))}
    </Stack>
  );
}

export default AlertManager;
