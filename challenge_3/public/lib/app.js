"use strict";

// const formTypes = {
//   'Account Creation': ['Name', 'Email', 'Password'],
//   'Address': ['Line 1', 'Line 2', 'City', 'State', 'Zipcode', 'Phone Number'],
//   'Credit Card Information': ['Card Number', 'Exp', 'CVV', 'Zip Code']
// }
class App extends React.Component {
  constructor(props) {
    super(props);
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
}

function NavButton(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.buttonClickHandler
  }, props.buttonText));
}

function ConfirmationPage(props) {
  return React.createElement("div", null, React.createElement("div", null, "Name:"), React.createElement("span", null, "Bob"), React.createElement("div", null, "Email:"), React.createElement("span", null, "bob@gmail.com"), React.createElement("div", null, "Password:"), React.createElement("span", null, "123Pass"), React.createElement("div", null, "Line 1:"), React.createElement("span", null, "1234 A Street"), React.createElement("div", null, "Line 2:"), React.createElement("span", null), React.createElement("div", null, "City:"), React.createElement("span", null, "San Francisco"), React.createElement("div", null, "State:"), React.createElement("span", null, "CA"), React.createElement("div", null, "Zipcode:"), React.createElement("span", null, "94901"), React.createElement("div", null, "Phone Number:"), React.createElement("span", null, "123 456 789"), React.createElement("div", null, "Card Number:"), React.createElement("span", null, "123894985"), React.createElement("div", null, "Exp:"), React.createElement("span", null, "12/24/2018"), React.createElement("div", null, "CVV:"), React.createElement("span", null, "233"), React.createElement("div", null, "Zip Code:"), React.createElement("span", null, "94901"));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
/****************************************************
CONTROLLERS
****************************************************/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvcm1OYW1lcyIsImJ1dHRvbnMiLCJtYXhGb3JtTnVtIiwic3RhdGUiLCJmb3JtIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwibmV4dEZvcm1OdW0iLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiLCJGb3JtIiwiZm9ybUVsZW1lbnRzIiwiZm9ybVR5cGVzIiwiZm9ybU5hbWUiLCJtYXAiLCJsYWJlbFRleHQiLCJOYXZCdXR0b24iLCJidXR0b25UZXh0IiwiQ29uZmlybWF0aW9uUGFnZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFpQztBQUMvQkMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBQyxFQUFELEVBQUssa0JBQUwsRUFBeUIsU0FBekIsRUFBb0MseUJBQXBDLENBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMsVUFBckMsQ0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQVAsS0FBYjtBQUNEOztBQUVEQyxFQUFBQSxrQkFBa0IsR0FBRztBQUNuQixVQUFNQyxXQUFXLEdBQUcsS0FBS0gsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLEtBQUtGLFVBQXpCLEdBQXNDLENBQXRDLEdBQTBDLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixDQUFoRjtBQUNBLFNBQUtHLFFBQUwsQ0FBYztBQUFFSCxNQUFBQSxJQUFJLEVBQUVFO0FBQVIsS0FBZDtBQUNEOztBQUVERSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUssTUFBQSxFQUFFLEVBQUM7QUFBUixPQUNFLG9CQUFDLFNBQUQ7QUFDRSxNQUFBLGtCQUFrQixFQUFFLEtBQUtILGtCQUFMLENBQXdCSSxJQUF4QixDQUE2QixJQUE3QixDQUR0QjtBQUVFLE1BQUEsVUFBVSxFQUFFLEtBQUtSLE9BQUwsQ0FBYSxLQUFLRSxLQUFMLENBQVdDLElBQXhCO0FBRmQsTUFERixFQUtJLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixDQUFwQixJQUF5QixLQUFLRCxLQUFMLENBQVdDLElBQVgsS0FBb0IsS0FBS0YsVUFBbEQsR0FBK0Qsb0JBQUMsSUFBRDtBQUFNLE1BQUEsUUFBUSxFQUFFLEtBQUtGLFNBQUwsQ0FBZSxLQUFLRyxLQUFMLENBQVdDLElBQTFCO0FBQWhCLE1BQS9ELEdBQXFILEVBTHpILEVBUUksS0FBS0QsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLEtBQUtGLFVBQXpCLEdBQXNDLG9CQUFDLGdCQUFELE9BQXRDLEdBQTZELEVBUmpFLENBREY7QUFhRDs7QUE1QjhCOztBQStCakMsU0FBU1EsSUFBVCxDQUFjWCxLQUFkLEVBQXFCO0FBQ25CLFFBQU1ZLFlBQVksR0FBR0MsU0FBUyxDQUFDYixLQUFLLENBQUNjLFFBQVAsQ0FBVCxDQUEwQkMsR0FBMUIsQ0FBK0JDLFNBQUQsSUFBZTtBQUNoRSxXQUNFLGlDQUNFLG1DQUFRQSxTQUFSLENBREYsRUFFRTtBQUFPLE1BQUEsSUFBSSxFQUFDO0FBQVosTUFGRixDQURGO0FBTUQsR0FQb0IsQ0FBckI7QUFTQSxTQUNFLGtDQUNFLGdDQUFLaEIsS0FBSyxDQUFDYyxRQUFYLENBREYsRUFFR0YsWUFGSCxDQURGO0FBTUQ7O0FBRUQsU0FBU0ssU0FBVCxDQUFtQmpCLEtBQW5CLEVBQTBCO0FBQ3hCLFNBQ0UsaUNBQ0U7QUFBUSxJQUFBLE9BQU8sRUFBRUEsS0FBSyxDQUFDTTtBQUF2QixLQUE0Q04sS0FBSyxDQUFDa0IsVUFBbEQsQ0FERixDQURGO0FBS0Q7O0FBRUQsU0FBU0MsZ0JBQVQsQ0FBMEJuQixLQUExQixFQUFpQztBQUMvQixTQUNFLGlDQUNFLHlDQURGLEVBQ2tCLHdDQURsQixFQUVFLDBDQUZGLEVBRW1CLGtEQUZuQixFQUdFLDZDQUhGLEVBR3NCLDRDQUh0QixFQUlFLDJDQUpGLEVBSW9CLGtEQUpwQixFQUtFLDJDQUxGLEVBS29CLGlDQUxwQixFQU1FLHlDQU5GLEVBTWtCLGtEQU5sQixFQU9FLDBDQVBGLEVBT21CLHVDQVBuQixFQVFFLDRDQVJGLEVBUXFCLDBDQVJyQixFQVNFLGlEQVRGLEVBUzBCLGdEQVQxQixFQVVFLGdEQVZGLEVBVXlCLDhDQVZ6QixFQVdFLHdDQVhGLEVBV2lCLCtDQVhqQixFQVlFLHdDQVpGLEVBWWlCLHdDQVpqQixFQWFFLDZDQWJGLEVBYXNCLDBDQWJ0QixDQURGO0FBaUJEOztBQUVEb0IsUUFBUSxDQUFDWCxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJZLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QjtBQUdBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgZm9ybVR5cGVzID0ge1xuLy8gICAnQWNjb3VudCBDcmVhdGlvbic6IFsnTmFtZScsICdFbWFpbCcsICdQYXNzd29yZCddLFxuLy8gICAnQWRkcmVzcyc6IFsnTGluZSAxJywgJ0xpbmUgMicsICdDaXR5JywgJ1N0YXRlJywgJ1ppcGNvZGUnLCAnUGhvbmUgTnVtYmVyJ10sXG4vLyAgICdDcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbic6IFsnQ2FyZCBOdW1iZXInLCAnRXhwJywgJ0NWVicsICdaaXAgQ29kZSddXG4vLyB9XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5mb3JtTmFtZXMgPSBbJycsICdBY2NvdW50IENyZWF0aW9uJywgJ0FkZHJlc3MnLCAnQ3JlZGl0IENhcmQgSW5mb3JtYXRpb24nXTtcbiAgICB0aGlzLmJ1dHRvbnMgPSBbJ0NoZWNrb3V0JywgJ05leHQnLCAnTmV4dCcsICdOZXh0JywgJ1B1cmNoYXNlJ107XG4gICAgdGhpcy5tYXhGb3JtTnVtID0gNDtcbiAgICB0aGlzLnN0YXRlID0ge2Zvcm06IDB9O1xuICB9XG5cbiAgYnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xuICAgIGNvbnN0IG5leHRGb3JtTnVtID0gdGhpcy5zdGF0ZS5mb3JtID09PSB0aGlzLm1heEZvcm1OdW0gPyAwIDogdGhpcy5zdGF0ZS5mb3JtICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybTogbmV4dEZvcm1OdW0gfSk7IFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSdhcHAnPlxuICAgICAgICA8TmF2QnV0dG9uXG4gICAgICAgICAgYnV0dG9uQ2xpY2tIYW5kbGVyPXt0aGlzLmJ1dHRvbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpfVxuICAgICAgICAgIGJ1dHRvblRleHQ9e3RoaXMuYnV0dG9uc1t0aGlzLnN0YXRlLmZvcm1dfSAvPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtICE9PSAwICYmIHRoaXMuc3RhdGUuZm9ybSAhPT0gdGhpcy5tYXhGb3JtTnVtID8gPEZvcm0gZm9ybU5hbWU9e3RoaXMuZm9ybU5hbWVzW3RoaXMuc3RhdGUuZm9ybV19IC8+IDogJydcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtID09PSB0aGlzLm1heEZvcm1OdW0gPyA8Q29uZmlybWF0aW9uUGFnZSAvPiA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICBjb25zdCBmb3JtRWxlbWVudHMgPSBmb3JtVHlwZXNbcHJvcHMuZm9ybU5hbWVdLm1hcCgobGFiZWxUZXh0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD57bGFiZWxUZXh0fTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgIDxoMj57cHJvcHMuZm9ybU5hbWV9PC9oMj5cbiAgICAgIHtmb3JtRWxlbWVudHN9XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5mdW5jdGlvbiBOYXZCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5idXR0b25DbGlja0hhbmRsZXJ9Pntwcm9wcy5idXR0b25UZXh0fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb25maXJtYXRpb25QYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+TmFtZTo8L2Rpdj48c3Bhbj5Cb2I8L3NwYW4+XG4gICAgICA8ZGl2PkVtYWlsOjwvZGl2PjxzcGFuPmJvYkBnbWFpbC5jb208L3NwYW4+XG4gICAgICA8ZGl2PlBhc3N3b3JkOjwvZGl2PjxzcGFuPjEyM1Bhc3M8L3NwYW4+XG4gICAgICA8ZGl2PkxpbmUgMTo8L2Rpdj48c3Bhbj4xMjM0IEEgU3RyZWV0PC9zcGFuPlxuICAgICAgPGRpdj5MaW5lIDI6PC9kaXY+PHNwYW4+PC9zcGFuPlxuICAgICAgPGRpdj5DaXR5OjwvZGl2PjxzcGFuPlNhbiBGcmFuY2lzY288L3NwYW4+XG4gICAgICA8ZGl2PlN0YXRlOjwvZGl2PjxzcGFuPkNBPC9zcGFuPlxuICAgICAgPGRpdj5aaXBjb2RlOjwvZGl2PjxzcGFuPjk0OTAxPC9zcGFuPlxuICAgICAgPGRpdj5QaG9uZSBOdW1iZXI6PC9kaXY+PHNwYW4+MTIzIDQ1NiA3ODk8L3NwYW4+XG4gICAgICA8ZGl2PkNhcmQgTnVtYmVyOjwvZGl2PjxzcGFuPjEyMzg5NDk4NTwvc3Bhbj5cbiAgICAgIDxkaXY+RXhwOjwvZGl2PjxzcGFuPjEyLzI0LzIwMTg8L3NwYW4+XG4gICAgICA8ZGl2PkNWVjo8L2Rpdj48c3Bhbj4yMzM8L3NwYW4+XG4gICAgICA8ZGl2PlppcCBDb2RlOjwvZGl2PjxzcGFuPjk0OTAxPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNPTlRST0xMRVJTXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=