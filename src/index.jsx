import injectTapEventPlugin from 'react-tap-event-plugin';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StyleRoot, Style } from 'radium';
import { MuiThemeProvider } from 'material-ui';

import configureStore from './store/configureStore';
import { AppContainer } from './containers';
import styles from './styles';
import theme from './theme';

injectTapEventPlugin();

const mountPoint = document.querySelector('#root');
const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot className="flex layout vertical">
      <Style rules={styles} />
      <MuiThemeProvider muiTheme={theme}>
        <AppContainer />
      </MuiThemeProvider>
    </StyleRoot>
  </Provider>,
  mountPoint
);
