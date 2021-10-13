import {Avatar, Menu, Typography} from "antd";
import {Link} from 'react-router-dom';
import icon from '../../images/cryptocurrency.png';
import {BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined} from "@ant-design/icons";
import {Paths} from "../../App.type";

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
        <Menu.Item icon={<HomeOutlined/>}><Link to={Paths.HomPage}>Home</Link></Menu.Item>
        <Menu.Item icon={<FundOutlined/>}><Link to={Paths.Cryptocurrencies}>Crypto currencies</Link></Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}><Link to={Paths.Exchanges}>Exchanges</Link></Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}><Link to={Paths.News}>News</Link></Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar;