
function NavButton() {
  return (
    <div>
      <button>checkout</button>
      <NameEmailPassword />
    </div>
  );
}

function NameEmailPassword() {
  return (
    <form>
      <label>Name</label><input type='text'></input>
      <label>Email</label><input type='text'></input>
      <label>Password</label><input type='text'></input>
    </form>
  );
}

ReactDOM.render(<NavButton />, document.getElementById('root'));

