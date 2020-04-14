import React     from "react"
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
    axios.post('http://localhost:3000/v1/movies', {
      movie
    })
    window.location.reload(false)
  }

  render () {
    const { visible, loading } = this.state;
    return  (
      <>
        <div className='header'>
          <h1>Peliculas</h1>
          <button onClick={this.showModal}>+ Crear nueva pelicula</button>
          <Modal
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
           <form onSubmit={this.handleSubmit}>
             <label> Name:
               <input type="text" name="name"/>
             </label>
             <label> Description:
               <input type="text" name="description"/>
             </label>
             <label> Imagen:
               <input type="text" name="image_url"/>
             </label>
             <button type="submit"> Add </button>
           </form>
          </Modal>
        </div>
        <TotalMovies />
      </>
    )
  }
}

export default Films
