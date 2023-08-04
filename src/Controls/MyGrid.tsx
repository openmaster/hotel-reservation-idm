import Grid from '@mui/material/Grid'

interface IMyGrid {
  vp?: number
  children: any
}
export default function MyGrid ({ vp = 6, children }: IMyGrid) {
  return (
        <Grid item xs={vp} sm={vp} md={vp} >
        {children}
      </Grid>
  )
}
