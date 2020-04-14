import React from "react"
import { Modal, Button } from 'antd'
import axios from "axios"
import TotalMovies from './TotalMovies'

class Films extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
    }, 3000);
    this.handleSubmit
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  handleSubmit = event => {
    event.preventDefault()
    const movie = {
      name: event.target[0].value,
      description: event.target[1].value,
      image_url: event.target[2].value
    }
    axios.post("http://localhost:3000/v1/movies", {
      movie
    })
    window.location.reload(false)
  }

  render () {
    const { visible, loading } = this.state
    return(
      <>
        <div className='header'>
          <h1>Peliculas</h1>
          <button onClick={this.showModal} className='primary button-create-movie'>+ Crear nueva pelicula</button>
          <Modal
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
           <h1>Crear Pelicula</h1>
           <form onSubmit={this.handleSubmit} className='body-modal'>
             <label> Name:
               <input type="text" name="name" className='input-primary'/>
             </label>
             <label> Description:
               <input type="text" name="description" className='input-primary'/>
             </label>
             <label> Imagen:
               <input type="text" name="image_url" className='input-primary'/>
             </label>
             <button type="submit" className='primary'> + Crear Pelicula </button>
           </form>
          </Modal>
        </div>
        <TotalMovies />
      </>
    )
  }
}

export default Films
