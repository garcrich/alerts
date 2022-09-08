import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, TextField, Typography } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { AlertProps, SeverityType } from './Alert/AlertType'
const AlertForm: FC<any> = ({ dispatch }) => {
  type textFieldType = 'title' | 'message' | 'link'
  const defaultState: AlertProps = {
    severity: 'success',
    title: '',
    link: '',
    message: '',
    duration: 10,
    id: null
  };
  const [alertSubmission, setAlertSubmission] = useState(defaultState)
  const { severity, title, link, message, duration, } = alertSubmission

  const setLinkProtocol = (link: string): string => {
    const containsProtocol: boolean = /^https?:\/\//i.test(link)
    return containsProtocol ? link : `https://${link}`
  }

  const handleDispatch = async () => {

    if (message === '') {
      return;
    }

    const protocolLink: string = setLinkProtocol(link);

    dispatch({
      type: 'ADD_ALERT',
      payload: { ...alertSubmission, link: protocolLink }
    })
    setAlertSubmission(defaultState)
  }

  const handleSliderChange = (event: Event, duration: number | number[]) => {
    setAlertSubmission({ ...alertSubmission, duration });
  };

  const handleAlertType = (event: SelectChangeEvent<string>) => {
    const severity = event.target.value as SeverityType
    setAlertSubmission({ ...alertSubmission, severity });
  };

  const handleText = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: textFieldType) => {
    const text: string = event.target.value

    switch (type) {
      case 'title':
        return setAlertSubmission({ ...alertSubmission, title: text })
      case 'message':
        return setAlertSubmission({ ...alertSubmission, message: text })
      case 'link':
        return setAlertSubmission({ ...alertSubmission, link: text })
      default:
        throw new Error();
    }
  }

  return (
    <Box
      width='18.75em'
      component="form"
      position='absolute'
      top='25vh'
      left='50vw'
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      textAlign='center'
    >
      <Typography variant="h4" component="h1" mt={2} mb={2}>
        Set Alert
      </Typography>

      <FormControl sx={{ mt: 1, minWidth: 213, textAlign: 'left' }} >
        <InputLabel id="demo-simple-select-helper-label">Alert Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={severity}
          label="Alert Type"
          onChange={handleAlertType}
        >
          <MenuItem value={'error'}>Error</MenuItem>
          <MenuItem value={'warning'}>Warning</MenuItem>
          <MenuItem value={'info'}>Info</MenuItem>
          <MenuItem value={'success'}>Success</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="title"
        variant="outlined"
        value={title}
        onChange={(e) => handleText(e, 'title')}
      />
      <TextField
        label="message"
        variant="outlined"
        value={message}
        onChange={(e) => handleText(e, 'message')}
      />
      <TextField
        label="link"
        variant="outlined"
        value={link}
        onChange={(e) => handleText(e, 'link')}
      />

      <p>Alert Display Duration for {duration} seconds</p>
      <Box width='12.5em' margin="0 auto">
        <Slider
          aria-label="time limit"
          name="time-limit"
          defaultValue={duration}
          step={1}
          min={1}
          max={20}
          value={duration}
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
        />
      </Box>
      <Box textAlign='center' margin="1em 0">
        <Button
          variant="contained"
          onClick={handleDispatch}
        >
          Set Alert
        </Button>
      </Box>
    </Box >
  );
}

export default AlertForm;