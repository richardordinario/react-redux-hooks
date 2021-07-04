import { Grid, Card } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserCard = () => {
  const users = useSelector((state) => state.users.users)
  console.log(users)
  const renderCard = users.map((user) => {
    // JSX
    return (
      <Grid.Column key={user.id}>
        <Link to={`/user/${user.id}`}>
          <Card link>
            <Card.Content>
              <Card.Header>{`${user.name.firstname} ${user.name.lastname}`}</Card.Header>
              <Card.Meta>{user.email}</Card.Meta>
            </Card.Content>
          </Card>
        </Link>
      </Grid.Column>
    )
  })

  return <>{renderCard}</>
}

export default UserCard
