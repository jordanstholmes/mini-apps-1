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
const labelKey = {
  name: 'Name',
  email: 'Email',
  password: 'Password',
  line1: 'Line 1', 
  line2: 'Line 2',
  city: 'City', 
  state: 'State', 
  zip: 'Zip Code',
  phone: 'Phone',
  ccNumber: 'Card Number',
  exp: 'Expiration Date',
  cvv: 'CVV',
  zip: 'Billing Zip'
};

class App extends React.Component{
  constructor(props) {
    super(props);
    this.buttons = ['Checkout', 'Next', 'Next', 'Next', 'Purchase'];
    this.headers = ['', 'Account Creation', 'Address', 'Credit Card Information', 'Confirm Information'];
    this.fieldSets = [
      undefined,
      ['name', 'email', 'password'],
      ['line1', 'line2', 'city', 'state', 'zip', 'phone'],
      ['ccNumber', 'exp', 'cvv', 'zip'],
      undefined
    ];
    this.state = {num: 0};
  }

  buttonClickHandler() {
    const nextFormNum = this.state.num === this.headers.length - 1 ? 0 : this.state.num + 1;
    this.setState({ num: nextFormNum }); 
  }

  render() {
    const formNum = this.state.num;
    console.log('IN APP:', this.fieldSets[formNum]);
    console.log('HEADERS:', this.headers[formNum]);


    return (
      <div id='app'>
        <button onClick={this.buttonClickHandler.bind(this)}>{this.buttons[formNum]}</button>
        { this.fieldSets[formNum] ? <Form header={this.headers[formNum]} fields={this.fieldSets[formNum]}/> : <div></div> }
        { formNum === this.headers.length - 1 ? <ConfirmationPage /> : <div></div> }
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log('FORM PROPS:', props);
    this.state = this.state = this.props.fields.reduce((acc, field) => {
      acc[field] = '';
      return acc;
    }, {});
  }

  render() {

    const formFields = [];
    
    for (var field in this.state) {
      formFields.push(<FormField name={this.state[field]} labelText={labelKey[field]} />);
    }

    return (
      <form id='input-form'>
        <h2>{this.props.header}</h2>
        {formFields}
      </form>
    );
  }
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










