import {Footer, Navbar} from './components';
import {Layout} from "antd";
import Routes from "./config/Routes";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <Routes/>
        </Layout>
        <Footer/>
      </div>
    </div>
  );
};

export default App