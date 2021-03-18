/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Navigator from './navigations';
import UserProvider from './utils/context/user';
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <UserProvider>
      <Navigator />
    </UserProvider>
  );
};

export default App;
