import React from 'react';
import {HashRouter,Route,Link} from 'react-router-dom';
import Main from './main';
import About from './about';
import Topic from './topic';

export default class Home extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topic">topic</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Route exact={true} path="/" component={Main}></Route> 
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </div>
            </HashRouter>
        )
    }
}