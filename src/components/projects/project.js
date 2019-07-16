export default class Project extends React.Component {
    render() {
        const {project} = this.props;
        return (
            <div className="col-6 col-lg-3 col-md-3 col-sm-4">
                <div className="card bg-white">
                    <div className="card-body">
                        <img src={project.image} className="card-img" alt="..."/>
                        <div className="card-img-overlay project-content text-left">
                            <h4 className="project-title">
                            <a href={(!!project.weburl) ? project.weburl : project.url} target="_blank" className="purple semi-bold">{project.name}</a></h4>
                            {
                                (!!project.weburl) ?
                                <a href={project.url} target="_blank" className="purple">Github repo</a>
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
