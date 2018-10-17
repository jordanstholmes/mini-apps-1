class App extends React.Component{
  constructor(props) {
    super(props);
    this.forms = ['', <Form1 />, <Form2 />, <Form3 />, <ConfirmationPage />];
    this.buttons = ['Checkout', 'Next', 'Next', 'Next'];
    this.maxFormNum = 4;
    this.state = {form: 0};
  }

  buttonClickHandler() {
    const nextFormNum = this.state.form === this.maxFormNum ? 0 : this.state.form + 1;
    this.setState({ form: nextFormNum }); 
  }

  render() {
    return (
      <div id='app'>
        <NavButton buttonClickHandler={this.buttonClickHandler.bind(this)}/>
        {
          this.forms[this.state.form]
        }
      </div>
    );
  }
}

function NavButton(props) {
  return (
    <div>
      <button onClick={props.buttonClickHandler}>checkout</button>
    </div>
  );
}

function Form1(props) {
  return (
    <form>
      <h2>Account Creation</h2>
      <label>Name:</label><input type='text'></input>
      <label>Email:</label><input type='text'></input>
      <label>Password:</label><input type='text'></input>
    </form>
  );
}

function Form2(props) {
  return (
    <form>
      <h2>Address</h2>
      <label>Line 1:</label><input type='text'></input>
      <label>Line 2:</label><input type='text'></input>
      <label>City:</label><input type='text'></input>
      <label>State:</label><input type='text'></input>
      <label>Zipcode:</label><input type='text'></input>
      <label>Phone Number:</label><input type='text'></input>
    </form>
  );
}

function Form3(props) {
  return (
    <form>
      <h2>Credit Card Information</h2>
      <label>Card Number:</label><input type='text'></input>
      <label>Exp:</label><input type='text'></input>
      <label>CVV:</label><input type='text'></input>
      <label>Zip Code:</label><input type='text'></input>
    </form>
  );
}

function ConfirmationPage(props) {
  return (
    <div>
      <div>Name:</div><span>Bob</span>
      <div>Email:</div><span>bob@gmail.com</span>
      <div>Password:</div><span>123Pass</span>
      <div>Line 1:</div><span>1234 A Street</span>
      <div>Line 2:</div><span></span>
      <div>City:</div><span>San Francisco</span>
      <div>State:</div><span>CA</span>
      <div>Zipcode:</div><span>94901</span>
      <div>Phone Number:</div><span>123 456 789</span>
      <div>Card Number:</div><span>123894985</span>
      <div>Exp:</div><span>12/24/2018</span>
      <div>CVV:</div><span>233</span>
      <div>Zip Code:</div><span>94901</span>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


/****************************************************
CONTROLLERS
****************************************************/









