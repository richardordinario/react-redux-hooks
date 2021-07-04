import { useEffect } from 'react'
import { Grid, Card } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../redux/actions'
import { bindActionCreators } from 'redux'
import UserCard from '../components/UserCard'
import axios from 'axios'

const Users = () => {

  const dispatch = useDispatch()
  const { setUsers } = bindActionCreators(actions, dispatch)

  const fetchUsers = async () => {
    const res = await 
      axios.get('https://fakestoreapi.com/users')
      .catch((err) => {
        console.log(err)
      })
    setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()

  }, [])

  return (
    <Grid columns={4} celled  inverted stackable>
      <Grid.Row>
        <UserCard/>
      </Grid.Row>
    </Grid>
  )
}

export default Users
