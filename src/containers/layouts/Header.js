import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'

const Header = () => {
  return (
    <Menu fixed="top" pointing inverted>
      <Container>
        <Menu.Item as='a' header>
            Api React Redux
        </Menu.Item>
        <Menu.Item as={ Link } name="Home" to="/">
          Home
        </Menu.Item>
        <Menu.Item as={ Link } name="Home" to="/users">
          Users
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Header
