
import Header from './components/Header/Header';
import Routespath from './routescomp/Routespath';
import Footer from './components/footer/Footer';
import DashboardHeader from './components/dashboard/pages/dashboardheader/DashboardHeader';
import InsideTidio from './components/dashboard/pages/insideTidio/InsideTidio';
import NewsFeed from './components/dashboard/pages/dashboardheader/newsFeed/NewsFeed';
import Profile from './components/dashboard/pages/dashboardheader/profile/Profile';
import Account from './components/dashboard/pages/dashboardheader/account/Account';
import Inbox from './components/dashboard/pages/dashboardheader/inbox/Inbox';
import ChatCard from './components/dashboard/pages/dashboardheader/chatCard/ChatCard';
import ChatInbox from './components/chatinbox/ChatInbox';
import ProfileChatInfo from './components/dashboard/profileChatInfo/ProfileChatInfo';
import ProfileModal from './components/modals/profileModal/ProfileModal';
import Chatbot from './components/chatbot/Chatbot';
import Embed from 'react-embed';
function App() {
  return (
    <>
    
    <Routespath/>
    
    
    {/* <ChatInbox /> */}
    {/* <Chatbot /> */}
    {/* <ChatCard /> */}
    
    </>
  );
}

export default App;
