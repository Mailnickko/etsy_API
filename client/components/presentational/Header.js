import React from 'react';
import Appbar from 'material-ui/AppBar';

const Header = () => {
  return (
    <Appbar
      style={ styles.headerStyle }
      title='Etsy Favorites'
      iconElementLeft={ <img src="https://i.ytimg.com/vi/CE-JlvmnRtY/hqdefault.jpg" style={{ width: '40px', margin: '10px 10px'}}/> }
    />
  )
};

const styles = {
  headerStyle: {
    margin: '0px'
  }
};

export default Header;
