import React from "react"
import { Modal, Button } from 'antd'
import axios from "axios"

class TotalMovies extends React.Component {
  state = {
    loading: false,
    visible: false,
    movies: []
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

  componentDidMount(){
    axios.get('http://localhost:3000/v1/movies')
      .then(res=>{
        this.setState({ movies: res.data.data});
      })
  }

  handleSubmit = event => {
    event.preventDefault()
    const user = {
      name: event.target[0].value,
      phone: event.target[1].value,
      cedula: event.target[2].value,
      email: event.target[3].value,
      id_movie: event.target[4].value
    }
    axios.post("http://localhost:3000/v1/bookings", {
      user 
    })
    window.location.reload(false)
  }

  render () {
    const { visible, loading } = this.state;
    return  (
      <>
        <div className='body'>
          {this.state.movies.map(movie => (
            <div className='film' key={movie.id}>
              <div className='reserve'>
                <button onClick={this.showModal} className='primary button-booking'>Reservar</button>
                <Modal
                  visible={visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={null}
                >
                 <h1>Reservar</h1>
                 <form onSubmit={this.handleSubmit} className='body-modal-booking'>
                   <div>
                     <label> Nombre Completo:
                       <input type="text" name="name" className='input-primary'/>
                     </label>
                     <label> Celular:
                       <input type="text" name="phone" className='input-primary'/>
                     </label>
                     <label> Cedula:
                       <input type="text" name="cedula" className='input-primary'/>
                     </label>
                     <label> Correo Electronico:
                       <input type="text" name="email" className='input-primary'/>
                     </label>
                   </div>
                   <input type="hidden" name="id_movie" value={movie.id}/>
                   <button type="submit" className='primary'> Reservar Ahora </button>
                 </form>
                </Modal>
              </div>
              <div className='image-film' style={{backgroundImage: `url(${movie.image_url})`}}></div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default TotalMovies
