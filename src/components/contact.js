import Header from './header';
import EmailForm from './email/form';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="text-center">
                <Header/>
                <div className="center fadein">
                    <h1>Contact</h1>
                    <EmailForm/>
                </div>
            </div>
        );
    }
}
