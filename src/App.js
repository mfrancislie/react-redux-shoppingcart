// feature 1
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import AdminScreen from './screens/AdminScreen';
import HomeScreen from './screens/HomeScreen';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="admin">Admin</Link>
            </header>
            <main>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/admin" element={<AdminScreen />} />
              </Routes>
            </main>
            <footer>All right is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
