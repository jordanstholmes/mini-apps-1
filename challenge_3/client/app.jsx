const formTypes = {
  'Account Creation': ['Name', 'Email', 'Password'],
  'Address': ['Line 1', 'Line 2', 'City', 'State', 'Zipcode', 'Phone Number'],
  'Credit Card Information': ['Card Number', 'Exp', 'CVV', 'Zip Code']
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.formNames = ['', 'Account Creation', 'Address', 'Credit Card Information'];
    this.buttons = ['Checkout', 'Next', 'Next', 'Next', 'Purchase'];
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
        <NavButton
          buttonClickHandler={this.buttonClickHandler.bind(this)}
          buttonText={this.buttons[this.state.form]} />
        {
          this.state.form !== 0 && this.state.form !== this.maxFormNum ? <Form formName={this.formNames[this.state.form]} /> : ''
        }
        {
          this.state.form === this.maxFormNum ? <ConfirmationPage /> : ''
        }
      </div>
    );
  }
}

function Form(props) {
  const formElements = formTypes[props.formName].map((labelText) => {
    return (
      <div>
        <label>{labelText}</label>
        <input type='text'></input>
      </div>
    );
  });

  return (
    <form>
      <h2>{props.formName}</h2>
      {formElements}
    </form>
  );
}

function NavButton(props) {
  return (
    <div>
      <button onClick={props.buttonClickHandler}>{props.buttonText}</button>
    </div>
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









