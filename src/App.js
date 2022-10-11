
import CustomerServices from './components/CustomerServices/CustomerServices';
import Header from './components/Header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Routespath from './routescomp/Routespath';
function App() {
  return (
    <>
    <div>
    <Login/>
    <Register/>
      <Header />
      <CustomerServices/>
      </div>
    <Routespath/>
    </>
  );
}

export default App;
