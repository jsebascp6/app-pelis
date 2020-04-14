import React from "react"
import TableBookings from './TableBookings'

class Reserves extends React.Component {
  render() {
    return(
      <>
        <div className='header'>
          <h1>Reservas Realizadas</h1>
        </div>
        <div>
          <TableBookings />
        </div>
      </>
    )
  }
}

export default Reserves
