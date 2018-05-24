class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homePage: true,
      formOne: false,
      formOneValue: null,
      formTwo: false,
      formThree: false,
      purchase: false
    };

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleFormOne = this.handleFormOne.bind(this);
    this.handleFormOneSubmit = this.handleFormOneChange.bind(this);
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

  handleFormOneChange(event) {
    this.setState({
      formOneValue: event.target.value
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
            <FormOne formOneValue={this.state.formOneValue} handleFormOne={this.handleFormOne} handleFormOneSubmit={this.handleFormOneSubmit} handleFormOneChange={this.handleFormOneChange} />
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
          <input type="text" value={props.formOneValue} onChange={props.handleFormOneChange} />
        </label>
        <label>
          Email:
          <input type="text" value={props.formOneValue} onChange={props.handleFormOneChange} />
        </label>
        <label>
          Password:
          <input type="text" value={props.formOneValue} onChange={props.handleFormOneChange} />
        </label>
      </form>
      <button
        className="btn FormOne" value="Submit"
        onClick={props.handleFormOne}>{'Next'}</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));