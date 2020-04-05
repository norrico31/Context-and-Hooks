import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark ;

        const booklistStyle = {
            color: theme.syntax,
            background: theme.bg
        };
        const liStyle = {
            background: theme.ui
        };
        return (
            <div className="book-list" style={ booklistStyle }>
                <ul>
                    <li style={ liStyle }>The way of kings</li>
                    <li style={ liStyle }>The name of the wind</li>
                    <li style={ liStyle }>The final empire</li>
                </ul>
            </div>
        )
    }
    

}


export default BookList;