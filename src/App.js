import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './redux/actions'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './containers/layouts/Header'
import Home from './containers/pages/Home'
import Users from './containers/pages/Users'
import UserDetails from './containers/pages/UserDetails';

import { Container } from 'semantic-ui-react'

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const { widrawMoney, depositMoney } = bindActionCreators(actions, dispatch)


  return (
    <Router>
      <Header/>
      <Container style={{ marginTop: '7em' }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/user/:userId" component={UserDetails} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
