import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import TopBar from './TopBar';
import Login from './Login'
import Register from './Register';
import Home from './Home';
import TopNav from './TopNav';
import Navbar from './Navbar';
import Footer from './Footer'
import ShoppingCart from './admin/cart/ShoppingCart'
import MyAccount from './admin/account/MyAccount';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './admin/store/reducers/RootReducer';
import ProductPage from './product/ProductPage';
import ProtectedRoute from './ProtectedRoute';
import Alert from './Alert';
import ProductsPage from './product/ProductsPage';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Settings from './Settings';
import ProfileSettings from './settings/ProfileSettings';
import DownloadApp from './DownloadApp';
import UserProfile from './UserProfile';
import SellOnBee from './SellOnBee';
import StoreRegister from './StoreRegister';
import LoginMyStore from './LoginMyStore';
import CustomerServices from './CustomerServices';
import PrivacyPolicy from './PrivacyPolicy';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app tw-bg-gray-100">
                    <TopBar />
                    <TopNav />
                    <Navbar />
                    <Alert />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/sell-on-bee">
                            <SellOnBee />
                        </Route>
                        <Route path="/login-my-store">
                            <LoginMyStore />
                        </Route>
                        <Route path="/register-my-store">
                            <StoreRegister />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/profile-settings">
                            <ProfileSettings />
                        </Route>
                        <Route path="/download-app">
                            <DownloadApp />
                        </Route>
                        <Route path="/user-informations">
                            <UserProfile />
                        </Route>
                        <Route path="/customer-services">
                            <CustomerServices />
                        </Route>
                        <Route path="/privacy-policy">
                            <PrivacyPolicy />
                        </Route>
                        <ProtectedRoute path="/cart" component={ShoppingCart} />
                        <ProtectedRoute path="/my-account" component={MyAccount} />
                        <Route path="/product/:id">
                            <ProductPage />
                        </Route>
                        <Route path="/category/:catid/products" component={ProductsPage} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
