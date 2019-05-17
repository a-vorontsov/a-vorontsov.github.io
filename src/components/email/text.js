export default class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invalid: false,
            value: "",
        }
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value) {
            const value = nextProps.value;
            this.setState({value})
        }
    }

    validate(value) {
        const {
            required,
            validateFn,
        } = this.props
        let isValid = true;
        if (required) {
            if (validateFn) {
                isValid = validateFn(value);
            }
        } else if (value.length > 0) {
            if (validateFn) {
                isValid = validateFn(value);
            }
        }
        return isValid;
    }

    onChange(event) {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            value,
            invalid: false
        });
        if (this.validate(value)) {
            this.props.context.onValue(this.props.field, value);
        }
    }

    onBlur() {
        const {value} = this.state;
        const isValid = this.validate(value);
        if (isValid) {
            this.setState({
                invalid: false
            });
        } else {
            this.setState({
                invalid: true
            });
        }
    }

    render() {
        const props = this.props;
        const classNames = [];
        const {value, invalid} = this.state;
        if (invalid) {
            classNames.push("invalid");
        }
        const errorMessage = props.error || "Incorrect format";
        if (props.multiline) {
            return (
                <div className="input">
                    <textarea className={classNames.join(" ")}
                              placeholder={props.placeholder}
                              value={value}
                              onChange={this.onChange}
                              onBlur={this.onBlur}/>
                    {
                        (invalid) ?
                        <span className="error">{errorMessage}</span>
                        :
                        null
                    }
                </div>
            )
        } else {
            return (
                <div className="input">
                    <input type={props.type || "text"}
                           className={classNames.join(" ")}
                           placeholder={props.placeholder}
                           value={value}
                           onChange={this.onChange}
                           onBlur={this.onBlur}/>
                    {
                        (invalid) ?
                        <span className="error">{errorMessage}</span>
                        :
                        null
                    }
                </div>
            )
        }
    }
}
