import React, { Component } from 'react';
// import { list } from 'postcss';


class Counter extends Component {
    state = {  
        value: this.props.value
        // tags: ['tag1', 'tag2', 'tag3'],
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) {
    //         return <p>There are no tags</p>
    //     }
    //     return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    // }
    handleIncrement = product => {
        console.log(product);
        this.setState({value: this.state.value + 1})
    }

    render() { 
        return (
            <div>
                {/* {this.props.children} */}
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement() } className="btn btn-secondary btn-small">Increment</button>
                {/* <ul>
                    { this.renderTags() }
                </ul> */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}


export default Counter;