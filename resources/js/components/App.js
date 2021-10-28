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


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app tw-bg-gray-100">
                    <TopBar />
                    <TopNav />
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/cart">
                            <ShoppingCart />
                        </Route>
                        <Route path="/my-account">
                            <MyAccount />
                        </Route>
                        <Route path="/product/:id">
                            <ProductPage />
                        </Route>
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
