import React from 'react';
import { Switch,HashRouter, Route} from 'react-router-dom';
import Main from './../route1/main';
import Topic from './../route1/topic';
import About from './../route1/about';
import Home from './home'

export default class Iroute extends React.Component{
    render(){
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route path="/about/:value" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/" render={() =>
                        <Main>
                            <Route path="/:value" component={About}></Route>
                        </Main>
                        }>
                        </Route>
                    </Switch>
                </Home>
            </HashRouter>
        );
    }
}