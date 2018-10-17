class App extends React.Component{
  constructor(props) {
    super(props);
    this.forms = ['', <Form1 />, <Form2 />, <Form3 />];
    this.state = {form: 0}
  }

  render() {
    return (
      <div id='app'>
        <NavButton />
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
      <button>checkout</button>
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
      <label>Car Number:</label><input type='text'></input>
      <label>Exp:</label><input type='text'></input>
      <label>CVV:</label><input type='text'></input>
      <label>Zip Code:</label><input type='text'></input>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


/****************************************************
CONTROLLERS
****************************************************/

function buttonClickHandler() {

}









