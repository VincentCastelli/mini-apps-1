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
      password: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      creditCardNumber: '',
      expirationDate: '',
      cvv: '',
      billingZipCode: ''
    };

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleFormOne = this.handleFormOne.bind(this);
    this.handleFormTwo = this.handleFormTwo.bind(this);
    this.handleFormThree = this.handleFormThree.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCheckout() {
    this.setState({
      homePage: false,
      formOne: true
    });
  }

  handleFormOne(evt) {
    this.setState({
      formOne: false,
      formTwo: true,
    });
  }

  handleFormTwo(evt) {
    this.setState({
      formTwo: false,
      formThree: true,
    });
  }

  handleFormThree(evt) {
    this.setState({
      formThree: false,
      purchase: true,
    });
  }

  handleChange(evt) {
    this.setState({ 
      [evt.target.name]: evt.target.value 
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
            <FormOne name={this.state.name} email={this.state.email} password={this.state.password} handleFormOne={this.handleFormOne} handleChange={this.handleChange} />
          </div>
        }
        {this.state.formTwo &&
          <div>
            <FormTwo address={this.state.address} city={this.state.city} state={this.state.state} zip={this.state.zip} phone={this.state.phone} handleFormTwo={this.handleFormTwo} handleChange={this.handleChange} />
          </div>
        }
        {this.state.formThree &&
          <div>
            <FormThree address={this.state.creditCardNumber} city={this.state.expirationDate} state={this.state.cvv} zip={this.state.billingZipCode} handleFormThree={this.handleFormThree} handleChange={this.handleChange} />
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
      <form id="form1">
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

let FormTwo = (props) => {

  return (
    <div>
      <div>
        <h1 className="formTwo">Location Information</h1>
      </div>
      <form id="form2">
        <label>
          Address:
          <input type="text" name="address" value={props.address} onChange={props.handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={props.city} onChange={props.handleChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={props.state} onChange={props.handleChange} />
        </label>
        <label>
          Zip Code:
          <input type="text" name="zip" value={props.zip} onChange={props.handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={props.phone} onChange={props.handleChange} />
        </label>
      </form>
      <button
        className="btn FormTwo" value="Submit"
        onClick={props.handleFormTwo}>{'Next'}</button>
    </div>
  );
}
// change input fields
let FormThree = (props) => { 

  return (
    <div>
      <div>
        <h1 className="formThree">Payment Information</h1>
      </div>
      <form id="form3">
        <label>
          Address:
          <input type="text" name="creditCardNumber" value={props.creditCardNumber} onChange={props.handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="expirationDate" value={props.expirationDate} onChange={props.handleChange} />
        </label>
        <label>
          State:
          <input type="text" name="cvv" value={props.cvv} onChange={props.handleChange} />
        </label>
        <label>
          Zip Code:
          <input type="text" name="billingZipCode" value={props.billingZipCode} onChange={props.handleChange} />
        </label>
      </form>
      <button
        className="btn FormThree" value="Submit"
        onClick={props.handleFormThree}>{'Next'}</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));