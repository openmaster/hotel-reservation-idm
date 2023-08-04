import Button from '@mui/material/Button'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import Grid from '@mui/material/Grid'
import { Controls } from './Controls'

import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { MuiChipsInput } from 'mui-chips-input'
import useFormValidation from './Hooks/useFormValidation'
import { type InitData, type PaymentRadioTypes } from './models'

interface IDetailsDialog {
  formValues: InitData
  setFormValues: any
  openDialog: boolean
  handleDialogClose: any
  handleData: any
  addNew: boolean
}

export default function DetailsDialog (props: IDetailsDialog) {
  const { formValues, setFormValues, openDialog, handleDialogClose, handleData, addNew } = props

  const { validLength, validEmail } = useFormValidation()
  // using basic validation as instruction suggests. we can use library like 'react-hook-forms' for better implementation.
  const error = validLength(formValues.firstName) || validLength(formValues.lastName) || validEmail(formValues.email)

  const paymentRadioTypes: PaymentRadioTypes[] = [
    { label: 'Cash', value: 'cash' },
    { label: 'Credit Card', value: 'cc' },
    { label: 'Pay pal', value: 'paypal' },
    { label: 'Bitcoin', value: 'bitcoin' }
  ]
  return (
        <Dialog open={openDialog} onClose={handleDialogClose} fullWidth={true} maxWidth={'lg'}>
        <DialogTitle>Your Reservation Details </DialogTitle>
        <DialogContent>
          <form>
            <Grid
              container
              spacing={2}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Controls.MyGrid>
                <Controls.MyDatePicker
                  value={formValues.stay.arrivalDate}
                  minDate={addNew ? new Date() : ''}
                  label="Date of Arrival"
                  onChange={(newDate: string) => {
                    // setting range of date picker based on starting date.
                    // useing Date Range component would be better but it is pro feature. so I am using this one.
                    if (new Date(newDate) > new Date(formValues.stay.departureDate)) {
                      setFormValues({ ...formValues, stay: { ...formValues.stay, arrivalDate: new Date(newDate).toISOString(), departureDate: new Date(newDate).toISOString() } })
                    } else {
                      setFormValues({ ...formValues, stay: { ...formValues.stay, arrivalDate: new Date(newDate).toISOString() } })
                    }
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid>
                <Controls.MyDatePicker
                  value={formValues.stay.departureDate}
                  minDate={formValues.stay.arrivalDate}
                  label="Date of Arrival"
                  onChange={(newDate: string) => {
                    setFormValues({ ...formValues, stay: { ...formValues.stay, departureDate: new Date(newDate).toISOString() } })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid>
                <FormControl variant="standard" sx={{ margin: '20px' }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Room Size
                  </InputLabel>
                  <Select
                    name="roomSize"
                    value={formValues.room.roomSize}
                    label="Room Size"
                    onChange={(e: any) => {
                      setFormValues({ ...formValues, room: { ...formValues.room, [e.target.name]: e.target.value } })
                    }}
                  >
                    <MenuItem value={'business-suite'}>business-suite</MenuItem>
                    <MenuItem value={'presidential-suite'}>
                      presidential-suite
                    </MenuItem>
                  </Select>
                  <FormHelperText>Choose a room type</FormHelperText>
                </FormControl>
              </Controls.MyGrid>

              <Controls.MyGrid>
                <Controls.MyTextField
                  type="number"
                  label='Room Quantity'
                  required
                  name="roomQuantity"
                  value={formValues.room.roomQuantity}
                  helperText="Maxium: 5"
                  max={5}
                  min={1}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, room: { ...formValues.room, [e.target.name]: e.target.value } })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <Controls.MyTextField
                  required
                  name="firstName"
                  label="First Name"
                  error={validLength(formValues.firstName)}
                  errorMSg='Please enter your first Name'
                  value={formValues.firstName}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.value })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <Controls.MyTextField
                  required
                  name="lastName"
                  label="Last Name"
                  error={validLength(formValues.lastName)}
                  errorMSg='please enter your last name'
                  value={formValues.lastName}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.value })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <Controls.MyTextField
                  error={validEmail(formValues.email)}
                  errorMSg='Please enter a valid email'
                  type="email"
                  name="email"
                  label="Email"
                  value={formValues.email}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.value })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <Controls.MyTextField
                  required
                  name="phone"
                  label="Phone Number"
                  value={formValues.phone}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.value })
                  }}
                />
              </Controls.MyGrid>
              {/* address */}
              <Controls.MyGrid vp={6}>
                <TextField
                  name="streetName"
                  label="Street Name"
                  value={formValues.addressStreet.streetName}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, addressStreet: { ...formValues.addressStreet, [e.target.name]: e.target.value } })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={6}>
                <TextField
                  name="streetNumber"
                  label="Street Number"
                  value={formValues.addressStreet.streetNumber}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, addressStreet: { ...formValues.addressStreet, [e.target.name]: e.target.value } })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={4}>
                <TextField
                  name="zipCode"
                  label="Zip"
                  value={formValues.addressLocation.zipCode}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, addressLocation: { ...formValues.addressLocation, [e.target.name]: e.target.value } })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={4}>
                <TextField
                  name="state"
                  label="State"
                  value={formValues.addressLocation.state}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, addressLocation: { ...formValues.addressLocation, [e.target.name]: e.target.value } })
                  }}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={4}>
                <TextField
                  name="city"
                  label="City"
                  value={formValues.addressLocation.city}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, addressLocation: { ...formValues.addressLocation, [e.target.name]: e.target.value } })
                  }}
                />
              </Controls.MyGrid>
              {/* Extras */}
              <Controls.MyGrid vp={4}>
                <FormControl variant="standard" sx={{ margin: '20px' }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Extras
                  </InputLabel>
                  <Select
                    multiple
                    name="extras"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={formValues.extras}
                    label="Extras"
                    onChange={(e: any) => {
                      setFormValues({ ...formValues, [e.target.name]: [...e.target.value] })
                    }}
                  >
                    <MenuItem value={'extraBreakfast'}>extraBreakfast</MenuItem>
                    <MenuItem value={'extraTV'}>extraTV</MenuItem>
                    <MenuItem value={'extraWiFi'}>extraWiFi</MenuItem>
                    <MenuItem value={'extraParking'}>extraParking</MenuItem>
                    <MenuItem value={'extraBalcony'}>extraBalcony</MenuItem>
                  </Select>
                  <FormHelperText>Choose a room type</FormHelperText>
                </FormControl>
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <Controls.MyRadioGroup
                  name="payment"
                  label="Payment"
                  value={formValues.payment}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.value })
                  }}
                  items={paymentRadioTypes}
                />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <Controls.MyTextField
                  name="note"
                  label="Personal Notes"
                  value={formValues.note}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.value })
                  }}
                  />
              </Controls.MyGrid>
              <Controls.MyGrid>
                  <MuiChipsInput variant='standard' label='Tags' name="tags" value={formValues.tags} onChange={(newChips: any) => {
                    setFormValues({ ...formValues, tags: [...newChips] })
                  }} />
              </Controls.MyGrid>
              <Controls.MyGrid vp={12}>
                <Controls.MyColorSwitch
                  name='reminder'
                  label='Send me a reminder'
                  checked={formValues.reminder}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
                  }}
                />
              </Controls.MyGrid>
               <Controls.MyGrid vp={12}>
                <Controls.MyColorSwitch
                  name='newsletter'
                  label='Subscribe to newsletter'
                  checked={formValues.newsletter}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
                  }}
                />
              </Controls.MyGrid>
               <Controls.MyGrid vp={12}>
                <Controls.MyCheckBox
                  name='confirm'
                  label='I confirm the information given above'
                  checked={formValues.confirm}
                  onChange={(e: any) => {
                    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
                  }}
                />
              </Controls.MyGrid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button disabled={error} onClick={handleData}>{addNew ? 'Add' : 'Update'}</Button>
        </DialogActions>
      </Dialog>
  )
}
