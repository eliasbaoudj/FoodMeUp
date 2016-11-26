import React from 'react';

import { AppBar } from 'material-ui';

const styles = {
  intro: {
    margin: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '80%',
    textAlign: 'center',
  },
};

export default () => (
  <header>
    <AppBar
      title="Discount Ascii Warehouse"
      iconElementLeft={<span />}
    />

    <div style={styles.intro}>
      Here you're sure to find a bargain on some of the finest ascii available to purchase.
      Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.
    </div>
  </header>
);
