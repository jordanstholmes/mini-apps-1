class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {form: 'checkout'}
  }

  render() {
    return (
      <div id='app'>
        <NavButton />
        <F1 />
      </div>
    );
  }
}

function NavButton() {
  return (
    <div>
      <button>checkout</button>
    </div>
  );
}

function F1() {
  return (
    <form>
      <label>Name</label><input type='text'></input>
      <label>Email</label><input type='text'></input>
      <label>Password</label><input type='text'></input>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

