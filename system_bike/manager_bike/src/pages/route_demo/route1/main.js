import React from 'react';
import {Link} from 'react-router-dom';

export default class Main extends React.Component{
    render(){
        return(
            <div>
                This is Main pages.
                <Link to="/a">嵌套路由</Link>
                {this.props.children}
            </div>
        );
    }
}