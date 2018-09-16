import React, { Component } from 'react';
import { list } from 'postcss';
 
class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags</p>
        }
        return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    }

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button className="btn btn-secondary btn-small">Increment</button>
                <ul>
                    { this.renderTags() }
                </ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
  
export default Counter;