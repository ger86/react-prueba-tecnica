import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import {UserContextProvider} from 'contexts/userContext';
import ErrorBoundary from 'components/common/ErrorBoundary';
import AppLoading from 'components/common/AppLoading';
import UserRoutes from 'components/router/UserRoutes';
import laligaTheme from 'theme/laligaTheme';

function App() {
  return (
    <ThemeProvider theme={laligaTheme}>
      <Suspense fallback={<AppLoading />}>
        <CssBaseline />
        <Router>
          <ErrorBoundary>
            <UserContextProvider>
              <UserRoutes />
            </UserContextProvider>
          </ErrorBoundary>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
