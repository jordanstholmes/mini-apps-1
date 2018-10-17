"use strict";

const formTypes = {
  'Account Creation': ['Name', 'Email', 'Password'],
  'Address': ['Line 1', 'Line 2', 'City', 'State', 'Zipcode', 'Phone Number'],
  'Credit Card Information': ['Card Number', 'Exp', 'CVV', 'Zip Code']
};

class App extends React.Component {
  constructor(props) {
    super(props); // this.forms = ['', <Form1 />, <Form2 />, <Form3 />, <ConfirmationPage />];

    this.formNames = ['', 'Account Creation', 'Address', 'Credit Card Information'];
    this.buttons = ['Checkout', 'Next', 'Next', 'Next', 'Purchase'];
    this.maxFormNum = 4;
    this.state = {
      form: 0
    };
  }

  buttonClickHandler() {
    const nextFormNum = this.state.form === this.maxFormNum ? 0 : this.state.form + 1;
    this.setState({
      form: nextFormNum
    });
  }

  render() {
    return React.createElement("div", {
      id: "app"
    }, React.createElement(NavButton, {
      buttonClickHandler: this.buttonClickHandler.bind(this),
      buttonText: this.buttons[this.state.form]
    }), this.state.form !== 0 && this.state.form !== this.maxFormNum ? React.createElement(Form, {
      formName: this.formNames[this.state.form]
    }) : '', this.state.form === this.maxFormNum ? React.createElement(ConfirmationPage, null) : '');
  }

}

function Form(props) {
  const formElements = formTypes[props.formName].map(labelText => {
    return React.createElement("div", null, React.createElement("label", null, labelText), React.createElement("input", {
      type: "text"
    }));
  });
  return React.createElement("form", null, React.createElement("h2", null, props.formName), formElements);
} // function Form(props) {
//   return (
//     <form>
//       <h2>Account Creation</h2>
//       <label>Name:</label><input type='text'></input>
//       <label>Email:</label><input type='text'></input>
//       <label>Password:</label><input type='text'></input>
//     </form>
//   );
// }


function NavButton(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.buttonClickHandler
  }, props.buttonText));
} // function Form2(props) {
//   return (
//     <form>
//       <h2>Address</h2>
//       <label>Line 1:</label><input type='text'></input>
//       <label>Line 2:</label><input type='text'></input>
//       <label>City:</label><input type='text'></input>
//       <label>State:</label><input type='text'></input>
//       <label>Zipcode:</label><input type='text'></input>
//       <label>Phone Number:</label><input type='text'></input>
//     </form>
//   );
// }


function ConfirmationPage(props) {
  return React.createElement("div", null, React.createElement("div", null, "Name:"), React.createElement("span", null, "Bob"), React.createElement("div", null, "Email:"), React.createElement("span", null, "bob@gmail.com"), React.createElement("div", null, "Password:"), React.createElement("span", null, "123Pass"), React.createElement("div", null, "Line 1:"), React.createElement("span", null, "1234 A Street"), React.createElement("div", null, "Line 2:"), React.createElement("span", null), React.createElement("div", null, "City:"), React.createElement("span", null, "San Francisco"), React.createElement("div", null, "State:"), React.createElement("span", null, "CA"), React.createElement("div", null, "Zipcode:"), React.createElement("span", null, "94901"), React.createElement("div", null, "Phone Number:"), React.createElement("span", null, "123 456 789"), React.createElement("div", null, "Card Number:"), React.createElement("span", null, "123894985"), React.createElement("div", null, "Exp:"), React.createElement("span", null, "12/24/2018"), React.createElement("div", null, "CVV:"), React.createElement("span", null, "233"), React.createElement("div", null, "Zip Code:"), React.createElement("span", null, "94901"));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
/****************************************************
CONTROLLERS
****************************************************/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbImZvcm1UeXBlcyIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvcm1OYW1lcyIsImJ1dHRvbnMiLCJtYXhGb3JtTnVtIiwic3RhdGUiLCJmb3JtIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwibmV4dEZvcm1OdW0iLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiLCJGb3JtIiwiZm9ybUVsZW1lbnRzIiwiZm9ybU5hbWUiLCJtYXAiLCJsYWJlbFRleHQiLCJOYXZCdXR0b24iLCJidXR0b25UZXh0IiwiQ29uZmlybWF0aW9uUGFnZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEIsc0JBQW9CLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FESjtBQUVoQixhQUFXLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsTUFBckIsRUFBNkIsT0FBN0IsRUFBc0MsU0FBdEMsRUFBaUQsY0FBakQsQ0FGSztBQUdoQiw2QkFBMkIsQ0FBQyxhQUFELEVBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBQThCLFVBQTlCO0FBSFgsQ0FBbEI7O0FBTUEsTUFBTUMsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFpQztBQUMvQkMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTixFQURpQixDQUVqQjs7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQUMsRUFBRCxFQUFLLGtCQUFMLEVBQXlCLFNBQXpCLEVBQW9DLHlCQUFwQyxDQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLFVBQXJDLENBQWY7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FB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aW9uJzogWydOYW1lJywgJ0VtYWlsJywgJ1Bhc3N3b3JkJ10sXG4gICdBZGRyZXNzJzogWydMaW5lIDEnLCAnTGluZSAyJywgJ0NpdHknLCAnU3RhdGUnLCAnWmlwY29kZScsICdQaG9uZSBOdW1iZXInXSxcbiAgJ0NyZWRpdCBDYXJkIEluZm9ybWF0aW9uJzogWydDYXJkIE51bWJlcicsICdFeHAnLCAnQ1ZWJywgJ1ppcCBDb2RlJ11cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyB0aGlzLmZvcm1zID0gWycnLCA8Rm9ybTEgLz4sIDxGb3JtMiAvPiwgPEZvcm0zIC8+LCA8Q29uZmlybWF0aW9uUGFnZSAvPl07XG4gICAgdGhpcy5mb3JtTmFtZXMgPSBbJycsICdBY2NvdW50IENyZWF0aW9uJywgJ0FkZHJlc3MnLCAnQ3JlZGl0IENhcmQgSW5mb3JtYXRpb24nXTtcbiAgICB0aGlzLmJ1dHRvbnMgPSBbJ0NoZWNrb3V0JywgJ05leHQnLCAnTmV4dCcsICdOZXh0JywgJ1B1cmNoYXNlJ107XG4gICAgdGhpcy5tYXhGb3JtTnVtID0gNDtcbiAgICB0aGlzLnN0YXRlID0ge2Zvcm06IDB9O1xuICB9XG5cbiAgYnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xuICAgIGNvbnN0IG5leHRGb3JtTnVtID0gdGhpcy5zdGF0ZS5mb3JtID09PSB0aGlzLm1heEZvcm1OdW0gPyAwIDogdGhpcy5zdGF0ZS5mb3JtICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybTogbmV4dEZvcm1OdW0gfSk7IFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSdhcHAnPlxuICAgICAgICA8TmF2QnV0dG9uXG4gICAgICAgICAgYnV0dG9uQ2xpY2tIYW5kbGVyPXt0aGlzLmJ1dHRvbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpfVxuICAgICAgICAgIGJ1dHRvblRleHQ9e3RoaXMuYnV0dG9uc1t0aGlzLnN0YXRlLmZvcm1dfSAvPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtICE9PSAwICYmIHRoaXMuc3RhdGUuZm9ybSAhPT0gdGhpcy5tYXhGb3JtTnVtID8gPEZvcm0gZm9ybU5hbWU9e3RoaXMuZm9ybU5hbWVzW3RoaXMuc3RhdGUuZm9ybV19IC8+IDogJydcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtID09PSB0aGlzLm1heEZvcm1OdW0gPyA8Q29uZmlybWF0aW9uUGFnZSAvPiA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtVHlwZXNbcHJvcHMuZm9ybU5hbWVdLm1hcCgobGFiZWxUZXh0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD57bGFiZWxUZXh0fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgIDxoMj57cHJvcHMuZm9ybU5hbWV9PC9oMj5cbiAgICAgIHtmb3JtRWxlbWVudHN9XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG4vLyBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGZvcm0+XG4vLyAgICAgICA8aDI+QWNjb3VudCBDcmVhdGlvbjwvaDI+XG4vLyAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuLy8gICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4vLyAgICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9XG5cblxuZnVuY3Rpb24gTmF2QnV0dG9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuYnV0dG9uQ2xpY2tIYW5kbGVyfT57cHJvcHMuYnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG4vLyBmdW5jdGlvbiBGb3JtMihwcm9wcykge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxmb3JtPlxuLy8gICAgICAgPGgyPkFkZHJlc3M8L2gyPlxuLy8gICAgICAgPGxhYmVsPkxpbmUgMTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuLy8gICAgICAgPGxhYmVsPkxpbmUgMjo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuLy8gICAgICAgPGxhYmVsPkNpdHk6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbi8vICAgICAgIDxsYWJlbD5TdGF0ZTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuLy8gICAgICAgPGxhYmVsPlppcGNvZGU6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbi8vICAgICAgIDxsYWJlbD5QaG9uZSBOdW1iZXI6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbi8vICAgICA8L2Zvcm0+XG4vLyAgICk7XG4vLyB9XG5cbmZ1bmN0aW9uIENvbmZpcm1hdGlvblBhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5OYW1lOjwvZGl2PjxzcGFuPkJvYjwvc3Bhbj5cbiAgICAgIDxkaXY+RW1haWw6PC9kaXY+PHNwYW4+Ym9iQGdtYWlsLmNvbTwvc3Bhbj5cbiAgICAgIDxkaXY+UGFzc3dvcmQ6PC9kaXY+PHNwYW4+MTIzUGFzczwvc3Bhbj5cbiAgICAgIDxkaXY+TGluZSAxOjwvZGl2PjxzcGFuPjEyMzQgQSBTdHJlZXQ8L3NwYW4+XG4gICAgICA8ZGl2PkxpbmUgMjo8L2Rpdj48c3Bhbj48L3NwYW4+XG4gICAgICA8ZGl2PkNpdHk6PC9kaXY+PHNwYW4+U2FuIEZyYW5jaXNjbzwvc3Bhbj5cbiAgICAgIDxkaXY+U3RhdGU6PC9kaXY+PHNwYW4+Q0E8L3NwYW4+XG4gICAgICA8ZGl2PlppcGNvZGU6PC9kaXY+PHNwYW4+OTQ5MDE8L3NwYW4+XG4gICAgICA8ZGl2PlBob25lIE51bWJlcjo8L2Rpdj48c3Bhbj4xMjMgNDU2IDc4OTwvc3Bhbj5cbiAgICAgIDxkaXY+Q2FyZCBOdW1iZXI6PC9kaXY+PHNwYW4+MTIzODk0OTg1PC9zcGFuPlxuICAgICAgPGRpdj5FeHA6PC9kaXY+PHNwYW4+MTIvMjQvMjAxODwvc3Bhbj5cbiAgICAgIDxkaXY+Q1ZWOjwvZGl2PjxzcGFuPjIzMzwvc3Bhbj5cbiAgICAgIDxkaXY+WmlwIENvZGU6PC9kaXY+PHNwYW4+OTQ5MDE8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ09OVFJPTExFUlNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG5cblxuXG5cblxuXG4iXX0=