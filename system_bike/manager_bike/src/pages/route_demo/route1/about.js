import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div>
                This is About pages.<br/>
                {this.props.match.params.value}
            </div>
        );
    }
}