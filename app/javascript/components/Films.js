import React     from "react"
import PropTypes from "prop-types"

class Films extends React.Component {
  render () {
    return  (
      <>
        <div className='header'>
          <h1>Peliculas</h1>
          <button>+ Crear nueva pelicula</button>
        </div>
        <div className='body'>
          <div className='film'>
            <div className='reserve'>
              <button>Reservar</button>
            </div>
            <div className='image-film'></div>
          </div>
        </div>
      </>
    )
  }
}

export default Films
