import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    
    render() {
        return (

            // Consumer - 2nd way to use context
            // AuthContext nested the ThemeContext
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                        const { isAuthenticated, toggleAuth } = authContext;
                        const { isLightTheme, light, dark } = themeContext;
                        const theme = isLightTheme ? light : dark;

                        const navStyle = {
                            background: theme.ui,
                            color: theme.syntax
                        };

                        return (
                            <nav style= { navStyle }>
                                <h1>Context App</h1>
                                <div onClick={ toggleAuth }>
                                    { isAuthenticated ? 'Logged in' : 'Logged out' }
                                </div>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        )
                    }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}

export default Navbar;