class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homePage: true,
      formOne: false,
      formTwo: false,
      formThree: false,
      purchase: false
    };

    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    this.setState({
      homePage: false,
      formOne: true
    });
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
            <FormOne />
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
        className="btnCheckout"
        onClick={props.handleCheckout}>{'Checkout'}</button>
    </div>
  )
}

let FormOne = (props) => {
  return (
    <div>
      <h1 className="formOne">Basic Information</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));