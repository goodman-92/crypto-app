import {Avatar, Button, Menu, Typography} from "antd";
import {Link} from 'react-router-dom';
import icon from '../../images/cryptocurrency.png';
import {BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined} from "@ant-design/icons";
import {makeLinkTo, Paths} from "../../config/routes";
import {useEffect, useState} from "react";

const Navbar = (props: any) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  useEffect(() => {
    setActiveMenu(!screenSize || screenSize > 768);
  }, [screenSize])


  const handleActiveMenu = () => setActiveMenu((prevState => !prevState));

  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className='logo'>
          <Link to="/">Crytoverse</Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={handleActiveMenu}>
          <MenuOutlined/>
        </Button>
      </div>
      {
        activeMenu &&
          <Menu theme="dark">
            <Menu.Item key={Paths.HomePage} icon={<HomeOutlined/>}><Link
              to={makeLinkTo(Paths.HomePage)}>Home</Link></Menu.Item>
            <Menu.Item key={Paths.Cryptocurrencies} icon={<FundOutlined/>}><Link to={makeLinkTo(Paths.Cryptocurrencies)}>Crypto
              currencies</Link></Menu.Item>
            <Menu.Item key={Paths.Exchanges} icon={<MoneyCollectOutlined/>}><Link
              to={makeLinkTo(Paths.Exchanges)}>Exchanges</Link></Menu.Item>
            <Menu.Item key={Paths.News} icon={<BulbOutlined/>}><Link to={makeLinkTo(Paths.News)}>News</Link></Menu.Item>
          </Menu>
      }
    </div>
  )
}

export default Navbar;