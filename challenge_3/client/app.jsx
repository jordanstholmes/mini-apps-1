// const formTypes = {
//   CHECOUT: 0,
//   ACCOUNT: 1,
//   ADDRESS: 2,
//   CREDIT: 3,
//   CONFIRM: 4
// };

// const formTemplates = {
//   button: ['Checkout', 'Next', 'Next', 'Next', 'Purchase'],
//   header: ['', 'Account Creation', 'Address', 'Credit Card Information', 'Confirm Information'],
//   fields: [
//     {},
//     {name: 'Name', email: 'Email', password: 'Password'},
//     {address: {line1: 'Line 1', line2: 'Line 2', city: 'City', state: 'State', zip: 'Zip Code', phone: 'Phone'}},
//     {cc: {number: 'Card Number', exp: 'Expiration Date', cvv: 'CVV', zip: 'Billing Zip'}},
//     {}
//   ]
// };

class App extends React.Component{
  constructor(props) {
    super(props);
    this.buttons = ['Checkout', 'Next', 'Next', 'Next', 'Purchase'];
    this.headers = ['', 'Account Creation', 'Address', 'Credit Card Information', 'Confirm Information'];
    this.fieldSets = [
      undefined,
      {name: 'Name', email: 'Email', password: 'Password'},
      {address: {line1: 'Line 1', line2: 'Line 2', city: 'City', state: 'State', zip: 'Zip Code', phone: 'Phone'}},
      {cc: {number: 'Card Number', exp: 'Expiration Date', cvv: 'CVV', zip: 'Billing Zip'}},
      undefined
    ]
    this.state = {num: 0};
  }

  buttonClickHandler() {
    const nextFormNum = this.state.num === this.headers.length - 1 ? 0 : this.state.num + 1;
    this.setState({ num: nextFormNum }); 
  }

  render() {
    const formNum = this.state.num;
    console.log('IN APP:', this.fieldSets[formNum]);

    return (
      <div id='app'>
        <button onClick={this.buttonClickHandler.bind(this)}>{this.buttons[formNum]}</button>
        <Form header={this.headers[formNum]} fields={this.fieldSets[formNum]}/>
        {
          formNum === this.headers.length - 1 ? <ConfirmationPage /> : ''
        }
      </div>
    );
  }
}

/*
Refactor Form into a class component
*/

function Form(props) {
  var formFields = '';

  if (props.fields) {
    formFields = [];
    for (var field in props.fields) {
      formFields.push(<FormField labelText={props.fields[field]} />);
    }
  }

  return (
    <form id='input-form'>
      <h2>{props.header}</h2>
      {formFields}
    </form>
  );
}

function FormField(props) {
  return (
    <div>
      <label>{props.labelText}</label>
      <input type='text'></input>
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










