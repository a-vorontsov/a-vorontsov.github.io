import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className="header text-center fadein center gradient-text">
                <h1>Aleksandr Vorontsov</h1>
                <div>
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
