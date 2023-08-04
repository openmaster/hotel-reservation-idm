import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

interface ISearch {
  txt: string
  handleOnChange: any
}
export default function Search ({ handleOnChange, txt }: ISearch) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <TextField
        onChange={(e) => handleOnChange(e.target.value)}
        value={txt}
        fullWidth
        label="Search with name or phone number"
        id="searchBar"
      />
    </Box>
  )
}
