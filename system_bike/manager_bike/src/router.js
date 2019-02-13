import React from 'react';
import App from './App';
import Login from './pages/login/index';
import Admin from './admin';
import Buttons from './pages/ui/button';
import Modals from './pages/ui/modals';
import Home from './pages/home/index';
import NoMatch from './pages/noMatch/index';
import {HashRouter,Route,Switch} from 'react-router-dom';

export default class Router extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}