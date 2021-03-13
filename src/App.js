import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Payments from './pages/Payments';
import Refunds from './pages/Refunds';
import Settlements from './pages/Settlements';
import Smartrouting from './pages/Smartrouting';
import Plans from './pages/Plans';
import Subscriptions from './pages/Subscriptions';
import Paymentlinks from './pages/Paymentlinks';
import Analytics from './pages/Analytics';
import Checkouttheme from './pages/Checkouttheme';
import Settings from './pages/Settings';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/payments' component={Payments} />
          <Route path='/refunds' component={Refunds} />
          <Route path='/settlements' component={Settlements} />
          <Route path='/smartrouting' component={Smartrouting} />
          <Route path='/plans' component={Plans} />
          <Route path='/subscriptions' component={Subscriptions} />
          <Route path='/paymentlinks' component={Paymentlinks} />
          <Route path='/analytics' component={Analytics} />
          <Route path='/checkouttheme' component={Checkouttheme} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
