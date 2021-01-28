import logo from './images/ss-logo.svg';
import smallSSLogo from './images/ss-small-logo.svg';

import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const blackButtonStyle = {
  float: 'right',
  margin: '15px 15px 15px 0px',
  height: '34px',
  width: '128px',
  textAlign: 'left',
  backgroundColor: '#000000',
  color: 'white',
  verticalAlign: 'middle',
  fontWeight: 'bold',
  fontSize: '12px',
  padding: '5px',
  borderColor: '#000000',
};

const cyanButtonStyle = {
  float: 'right',
  margin: '15px 15px 15px 0px',
  height: '34px',
  width: '128px',
  backgroundColor: '#30D6E0',
  borderColor: '#30D6E0',
  color: 'white',
  textAlign: 'left',
  fontSize: '12px',
  fontWeight: 'bold',
  verticalAlign: 'middle',
  padding: '5px',
};

const headerStyle = {
  backgroundColor: '#373737',
  paddingRight: '15px',
  paddingLeft: '15px',
};

const contentStyle = {
  backgroundColor: '#000000',
};

function App() {
  return (
    <Layout>
      <Header style={ headerStyle } >
        <div style={{
          position: 'relative',
          float: 'left',
        }}>
          <img 
            src={ smallSSLogo  } 
            alt="Square Symmetry small logo"
            height='34px'
          />
        </div>
        <div style={{ 
          position: 'relative',
        }}>
          <Button style={ cyanButtonStyle }>CONTACT</Button>
          <Button style={ blackButtonStyle }>SERVICES</Button>
          <Button style={ cyanButtonStyle }>ABOUT US</Button>
        </div>
      </Header>
      {/*<Content>
        <div style={ contentStyle }>

        </div>
      </Content> */}
    </Layout>
  );
}

export default App;
