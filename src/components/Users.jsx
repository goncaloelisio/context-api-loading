import React, { Component } from 'react'
 
import { getUsers } from '../services/api'
 
class Users extends Component {
 
    state = {
        loading: false
    }
 
    getUsers = async () => {
        const { showLoading, hideLoading } = this.props
 
        showLoading('Carregando usuários')
 
        const response = await getUsers().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }
 
    render() {
        return (
            <button onClick={this.getUsers}>Loading Users</button>
        )
    }
}
 
export default Users