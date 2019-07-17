let timeout;
export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disableLink: true
        };
        this.handleHoverOn = this.handleHoverOn.bind(this);
        this.handleHoverOff = this.handleHoverOff.bind(this);
    }
    handleHoverOn(event) {
        clearTimeout(timeout);
        if (this.state.disableLink) {
            timeout = setTimeout(() => {
                this.setState({disableLink: false});
            }, 300);
        }
    }
    handleHoverOff(event) {
        this.setState({disableLink: true});
    }
    render() {
        const {project} = this.props;
        const classNames = (this.state.disableLink) ? "purple disabled" : "purple";
        return (
            <div className="col-6 col-lg-3 col-md-3 col-sm-4">
                <div className="card bg-white">
                    <div className="card-body">
                        <img src={project.image} className="card-img" alt="..."/>
                        <div onMouseEnter={this.handleHoverOn} onMouseLeave={this.handleHoverOff} onBlur={this.handleHoverOff} onFocus={this.handleHoverOn} className="card-img-overlay project-content text-left">
                            <h3 className="project-title">
                                <a href={(!!project.weburl) ? project.weburl : project.url} target="_blank" className={`${classNames} semi-bold`}>{project.name}</a>
                            </h3>
                            {
                                (!!project.weburl) ?
                                <a href={project.url} target="_blank" className={classNames}>Github repo</a>
                                :
                                null
                            }
                            <p>{project.desc}</p>
                            <div>
                                {
                                    project.technologies.map(t => <code key={t} className="project-code">{t}</code>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
