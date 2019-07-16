import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className="header fadein vertical-center">
                <div className="text-center horizontal-center">
                    <div className="gradient-text">
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
                    <div className="p--16">
                        <a className="purple h4 p--8 icon-link" target="_blank" href="https://www.linkedin.com/in/aleksvorontsov"><i className="fab fa-linkedin"></i></a>
                        <a className="purple h4 p--8 icon-link" target="_blank" href="https://www.github.com/a-vorontsov"><i className="fab fa-github"></i></a>
                        <a className="purple h4 p--8 icon-link" target="_blank" href="./AleksandrVorontsov-CV.pdf"><i className="fas fa-file-alt"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}
