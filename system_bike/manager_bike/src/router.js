import React from 'react';
import App from './App';
import Login from './pages/login/index';
import Admin from './admin';
import Buttons from './pages/ui/button';
import Modals from './pages/ui/modals';
import Home from './pages/home/index';
import Loadings from './pages/ui/loadings';
import Notify from './pages/ui/notify';
import NoMatch from './pages/noMatch/index';
import Message from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import LoginForm from './pages/form/login';
import Regist from './pages/form/regist';
import BasicTable from './pages/table/basicTable';
import SuperTable from './pages/table/superTable';
import City from './pages/city/index'
// import BikeMap from './pages/map/bikeMap';
import Order from './pages/order/index';
import Detail from './pages/order/detail';
import Common from './common'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// 该类用于封装和转发路由
export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={Detail}></Route>
                            </Common>
                        }></Route>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/ui/buttons" component={Buttons}></Route>
                                    <Route path="/ui/modals" component={Modals}></Route>
                                    <Route path="/ui/loadings" component={Loadings}></Route>
                                    <Route path="/ui/notification" component={Notify}></Route>
                                    <Route path="/ui/messages" component={Message}></Route>
                                    <Route path="/ui/tabs" component={Tabs}></Route>
                                    <Route path="/ui/gallery" component={Gallery}></Route>
                                    <Route path="/ui/carousel" component={Carousels}></Route>
                                    <Route path="/form/login" component={LoginForm}></Route>
                                    <Route path="/form/reg" component={Regist}></Route>
                                    <Route path="/table/basic" component={BasicTable}></Route>
                                    <Route path="/table/high" component={SuperTable}></Route>
                                    <Route path="/city" component={City}></Route>
                                    <Route path="/order" component={Order}></Route>
                                    <Redirect to="/home" />
                                    {/* <Route path="/admin/bikeMap" component={BikeMap}></Route> */}
                                    {/* <Route component={NoMatch}></Route> */}
                                </Switch>
                            </Admin>
                        }></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}