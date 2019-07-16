import Header from './header';
import EmailForm from './email/form';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="text-center">
                <Header/>
                <div className="vertical-center fadein">
                    <div className="horizontal-center col-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                        <h1>Contact Me</h1>
                        <div className="row">
                            <div className="col-12">
                                <EmailForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
