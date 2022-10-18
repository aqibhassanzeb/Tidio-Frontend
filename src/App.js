
import Header from './components/Header/Header';
import Routespath from './routescomp/Routespath';
import Footer from './components/footer/Footer';
import DashboardHeader from './components/dashboard/pages/dashboardheader/DashboardHeader';
import InsideTidio from './components/dashboard/pages/insideTidio/InsideTidio';
import NewsFeed from './components/dashboard/pages/dashboardheader/newsFeed/NewsFeed';
import Profile from './components/dashboard/pages/dashboardheader/profile/Profile';
function App() {
  return (
    <>
    <Routespath/>
   <Profile/>
    </>
  );
}

export default App;
