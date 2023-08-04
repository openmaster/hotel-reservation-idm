import { type InitData } from './models'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import { dateTimeFormate } from './utils'
import ReservationDetails from './ReservationDetails'
import DeleteReservation from './DeleteReservation'

interface ISearchResults {
  reservations: InitData[]
}
export default function SearchResults ({ reservations }: ISearchResults) {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      {reservations.map((reservation: InitData, index: number) => (
        <div key={index}>
          <ListItem alignItems="center">
            <ListItemText
              primary={`${reservation.firstName} ${reservation.lastName}`}
              secondary={
                <>
                  <small style={{ textAlign: 'right' }}>
                    Ph: {reservation.phone}
                  </small>
                  <p>
                    {`Arrival: ${dateTimeFormate(
                      reservation.stay.arrivalDate
                    )} - Departure: ${dateTimeFormate(
                      reservation.stay.departureDate
                    )}`}
                    <br />
                    {`${reservation.room.roomSize} - ${reservation.room.roomQuantity} - Ph: ${reservation.phone}`}
                  </p>

                  <DeleteReservation id={reservation.id} />
                  <ReservationDetails reservation={reservation} />
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  )
}
