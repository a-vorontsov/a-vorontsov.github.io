import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="gradient-text">
                    <Link to="/">Home</Link>
                    &nbsp;|&nbsp;
                    <Link to="/about">About</Link>
                    &nbsp;|&nbsp;
                    <Link to="/projects">Projects</Link>
                    &nbsp;|&nbsp;
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        );
    }
}
