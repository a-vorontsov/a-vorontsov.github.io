import Header from './header';

export default class About extends React.Component {
    render() {
        return (
            <div className="text-center">
                <Header/>
                <div className="center fadein">
                    <h1>About</h1>
                </div>
            </div>
        );
    }
}
