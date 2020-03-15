import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './src/Navigations';
import store from './src/Redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
};

export default App;
