import React, { Component } from 'react';
import { Link } from 'react-router';
import Data from './navigation.json';

import './navigation.css';

class Navigation extends Component {
    render() {

        var links = (this.props.alt) ? this.props.alt_links : this.props.links;

        return (
            <ul className={this.props.type}>
                {links.map(function(link, i) {
                    return <li key={i} className="text-left pointer">
                              <Link to={link.url}>
                                  {link.title}
                              </Link>
                            </li>
                })}
            </ul>
        );
    }
}

Navigation.defaultProps = Data;

export default Navigation;
