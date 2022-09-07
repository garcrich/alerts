import { Box, Button, FormControl, InputLabel, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';

const AlertForm = () => {
  return (
    <Box
      width='18.75em'
      margin="0 auto"
      component="form"
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
          value={'success'}
          label="Alert Type"
          onChange={() => console.log('haha')}
        >
          <MenuItem value={'error'}>Error</MenuItem>
          <MenuItem value={'warning'}>Warning</MenuItem>
          <MenuItem value={'info'}>Info</MenuItem>
          <MenuItem value={'success'}>success</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="title"
        variant="outlined"
      />
      <TextField
        label="message"
        variant="outlined"
        required
      />
      <TextField
        label="link"
        variant="outlined"
      />

      <p>Alert Display Duration for (x) seconds</p>
      <Box width='12.5em' margin="0 auto">
        <Slider
          aria-label="time limit"
          name="time-limit"
          defaultValue={10}
          step={1}
          min={1}
          max={15}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box textAlign='center' margin="1em 0">
        <Button
          type="submit"
          variant="contained"
        >
          Set Alert
        </Button>
      </Box>
    </Box>
  );
}

export default AlertForm;