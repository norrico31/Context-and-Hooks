import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    
    render() {
        return (

            // Consumer - 2nd way to use context
            <ThemeContext.Consumer>
                {(context) => {

                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;

                    const navStyle = {
                        background: theme.ui,
                        color: theme.syntax
                    };

                    return (
                        <nav style= { navStyle }>
                            <h1>Context App</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}

export default Navbar;