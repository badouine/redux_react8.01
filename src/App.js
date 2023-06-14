import Login from './components/Login';
import './App.css';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';
import {useSelector} from 'react-redux'

function App() {
  const color = useSelector((state) => state.color.value);
  return (
    <div className="App" style={{
      color: `${color.txtcolor}`,
      backgroundColor:`${color.bgcolor}`
    }}>
      <Login />
      <br />
      <Profile />
      <br />
      <ChangeColor/>
    </div>
  );
}

export default App;