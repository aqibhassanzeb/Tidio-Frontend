
import Header from './components/Header/Header';
import Routespath from './routescomp/Routespath';
import Footer from './components/footer/Footer';
import DashboardHeader from './components/dashboard/pages/dashboardheader/DashboardHeader';
import InsideTidio from './components/dashboard/pages/insideTidio/InsideTidio';
function App() {
  return (
    <>
    <Routespath/>
   <DashboardHeader/>
   <InsideTidio/>
    </>
  );
}

export default App;
