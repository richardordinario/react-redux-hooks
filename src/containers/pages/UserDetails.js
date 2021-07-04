import {React, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'semantic-ui-react'
import { actions } from '../../redux/actions'
import { bindActionCreators } from 'redux'
import axios from 'axios'

const UserDetails = () => {
  const dispatch = useDispatch()

  const { 
    setUser, 
    removeSelectedUser 
  } = bindActionCreators(actions, dispatch)

  const user = useSelector((state) => state.user)

  const { userId } = useParams();

  const fetchDetails = async () => {
    const res = await 
      axios.get(`https://fakestoreapi.com/users/${userId}`)
      .catch(err => {
        console.log(err)
      })
    setUser(res.data)
  }

  useEffect(() => {
    if(userId && userId !== '') fetchDetails()

    return () => {
      removeSelectedUser()
    }
  }, [userId])

  return (
    <div>
      { 
        Object.keys(user).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Card>
            <Card.Content>
              <Card.Header>{`${user.name.firstname} ${user.name.lastname}`}</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              
            </Card.Content>
          </Card>
        )
      }
   
    </div>
  )
}

export default UserDetails
