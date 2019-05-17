import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="gradient-text nav">
                <Link to="/">Home</Link>
                &nbsp;|&nbsp;
                <Link to="/about">About</Link>
                &nbsp;|&nbsp;
                <Link to="/projects">Projects</Link>
                &nbsp;|&nbsp;
                <Link to="/contact">Contact</Link>
            </nav>
        );
    }
}
