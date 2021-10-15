import {Avatar, Menu, Typography} from "antd";
import {Link} from 'react-router-dom';
import icon from '../../images/cryptocurrency.png';
import {BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined} from "@ant-design/icons";
import {makeLinkTo, Paths} from "../../config/routes";

const Navbar = (props: any) => {
  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className='logo'>
          <Link to="/">Crytoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item key={Paths.HomePage} icon={<HomeOutlined/>}><Link to={makeLinkTo(Paths.HomePage)}>Home</Link></Menu.Item>
        <Menu.Item key={Paths.Cryptocurrencies} icon={<FundOutlined/>}><Link to={makeLinkTo(Paths.Cryptocurrencies)}>Crypto currencies</Link></Menu.Item>
        <Menu.Item key={Paths.Exchanges} icon={<MoneyCollectOutlined/>}><Link to={makeLinkTo(Paths.Exchanges)}>Exchanges</Link></Menu.Item>
        <Menu.Item key={Paths.News} icon={<BulbOutlined/>}><Link to={makeLinkTo(Paths.News)}>News</Link></Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar;