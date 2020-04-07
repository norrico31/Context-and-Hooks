import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//     render() {
//         return (
//             <ThemeContext.Consumer>{(context) => {

//                     const { toggleTheme } = context;

//                     return (
//                         <button onClick={toggleTheme}>Toggle the theme</button>
//                     )
//                 }}
//             </ThemeContext.Consumer>
//         )
//     }
// }

const ThemeToggle = () => {

    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>Toggle the theme</button>
    )
}

export default ThemeToggle;