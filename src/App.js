
import CustomerServices from './components/CustomerServices/CustomerServices';
import Header from './components/Header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
function App() {
  return (
    <>
    <div>
    <Login/>
    <Register/>
      <Header />
      <CustomerServices/>
      </div>
    </>
  );
}

export default App;
