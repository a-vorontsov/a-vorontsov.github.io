import Header from './header';

export default class About extends React.Component {
    render() {
        return (
            <div className="text-center">
                <Header/>
                <div className="vertical-center fadein">
                    <div className="horizontal-center col-12 col-md-10 col-md-offset-1">
                        <h2>About</h2>
                        <p>
                            I am a developer and MSci Computer Science student at King's College London.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
