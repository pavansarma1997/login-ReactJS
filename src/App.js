import logo from './logo.svg';
import './App.css';
import Registration from './components/registration';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Registration />} />
        {/* <Route path={["/home", "/users", "/widgets"]} component={Home} /> */}
      </Routes>
    </div>
  );
}

export default App;
