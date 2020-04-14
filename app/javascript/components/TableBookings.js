import React from "react"
import { Table, Tag } from 'antd'
import axios from "axios"

const columns = [
  {
    title: 'Pelicula',
    dataIndex: 'movie',
    key: 'movie',
  },
  {
    title: 'Nombre Reservante',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Correo Electronico',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Cedula',
    dataIndex: 'cedula',
    key: 'cedula',
  },
  {
    title: 'Celular',
    dataIndex: 'phone',
    key: 'phone',
  },
]

class TableBookings extends React.Component {
  state = {
    bookings: []
  }

  componentDidMount(){
    axios.get("http://localhost:3000/v1/bookings")
      .then(res=>{
        this.setState({ bookings: res.data.data});
      })
  }

  render () {
    return  (
      <>
        <Table columns={columns} dataSource={this.state.bookings} />
      </>
    )
  }
}

export default TableBookings
