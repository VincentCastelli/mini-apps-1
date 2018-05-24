class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homePage: true,
      formOne: false,
      formTwo: false,
      formThree: false,
      purchase: false,
      name: '',
      email: '',
      password: ''
    };

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleFormOne = this.handleFormOne.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormOneSubmit = this.handleFormOneSubmit.bind(this);
  }

  handleCheckout() {
    this.setState({
      homePage: false,
      formOne: true
    });
  }

  handleFormOne() {
    this.setState({
      formOne: false,
      formTwo: true
    });
  }

  handleChange(evt) {
    this.setState({ 
      [evt.target.name]: evt.target.value 
    });
    event.preventDefault();
  }

  handleFormOneSubmit(event) {
    this.setState({
      formOneValue: this.state.value
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.homePage &&
          <div>
            <HomePage handleCheckout={this.handleCheckout} />
          </div>
        }
        {this.state.formOne &&
          <div>
            <FormOne name={this.state.name} email={this.state.email} password={this.state.password} handleFormOne={this.handleFormOne} handleFormOneSubmit={this.handleFormOneSubmit} handleChange={this.handleChange} />
          </div>
        }
      </div>
    );
  }
}

let HomePage = (props) => {
  return (
    <div>
      <div>
        <h1 className="homePage">HomePage</h1>
      </div>
      <button
        className="btn Checkout"
        onClick={props.handleCheckout}>{'Checkout'}</button>
    </div>
  )
}

let FormOne = (props) => {
  return (
    <div>
      <div>
        <h1 className="formOne">Account Information</h1>
      </div>
      <form onSubmit={props.handleFormOneSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={props.name} onChange={props.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={props.email} onChange={props.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={props.password} onChange={props.handleChange} />
        </label>
      </form>
      <button
        className="btn FormOne" value="Submit"
        onClick={props.handleFormOne}>{'Next'}</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));