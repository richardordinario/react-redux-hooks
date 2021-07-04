import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/actions'

function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const { widrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)


  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => widrawMoney(100)} >Widraw</button>
      <button onClick={() => depositMoney(1000)} >Deposit</button>
    </div>
  );
}

export default App;
