import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import MyContext from './views/MyContext';


const App = () => {
  const routing = useRoutes(routes);
  
  const [user] = useState({
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith'
  })

  return (
    <MyContext.Provider
      value={{
        API: 'http://172.18.1.194/sts_web_center/',
        user: user,
        // incrementPrice: selectedID => {
        //   const cars = Object.assign({}, state.cars);
        //   cars[selectedID].price = cars[selectedID].price + 1;
        //   setState({
        //     cars
        //   });
        // },
        // decrementPrice: selectedID => {
        //   const cars = Object.assign({}, state.cars);
        //   cars[selectedID].price = cars[selectedID].price - 1;
        //   setState({
        //     cars
        //   });
        // }
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </MyContext.Provider>

  );
};

export default App;
