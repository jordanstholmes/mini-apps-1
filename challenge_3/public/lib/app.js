"use strict";

const formTypes = {
  'Account Creation': ['Name', 'Email', 'Password'],
  'Address': ['Line 1', 'Line 2', 'City', 'State', 'Zipcode', 'Phone Number'],
  'Credit Card Information': ['Card Number', 'Exp', 'CVV', 'Zip Code']
};

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
    }, React.createElement("button", {
      onClick: this.buttonClickHandler.bind(this)
    }, this.buttons[this.state.form]), React.createElement(Form, {
      formName: this.formNames[this.state.form]
    }), this.state.form === this.maxFormNum ? React.createElement(ConfirmationPage, null) : '');
  }

}

function Form(props) {
  const formFields = props.formName ? formTypes[props.formName].map(labelText => React.createElement(FormField, {
    labelText: labelText
  })) : '';
  return React.createElement("form", {
    id: "input-form"
  }, React.createElement("h2", null, props.formName), formFields);
}

function FormField(props) {
  return React.createElement("div", null, React.createElement("label", null, props.labelText), React.createElement("input", {
    type: "text"
  }));
}

function ConfirmationPage(props) {
  return React.createElement("div", null, React.createElement("div", null, "Name:"), React.createElement("span", null, "Bob"), React.createElement("div", null, "Email:"), React.createElement("span", null, "bob@gmail.com"), React.createElement("div", null, "Password:"), React.createElement("span", null, "123Pass"), React.createElement("div", null, "Line 1:"), React.createElement("span", null, "1234 A Street"), React.createElement("div", null, "Line 2:"), React.createElement("span", null), React.createElement("div", null, "City:"), React.createElement("span", null, "San Francisco"), React.createElement("div", null, "State:"), React.createElement("span", null, "CA"), React.createElement("div", null, "Zipcode:"), React.createElement("span", null, "94901"), React.createElement("div", null, "Phone Number:"), React.createElement("span", null, "123 456 789"), React.createElement("div", null, "Card Number:"), React.createElement("span", null, "123894985"), React.createElement("div", null, "Exp:"), React.createElement("span", null, "12/24/2018"), React.createElement("div", null, "CVV:"), React.createElement("span", null, "233"), React.createElement("div", null, "Zip Code:"), React.createElement("span", null, "94901"));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
/****************************************************
CONTROLLERS
****************************************************/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbImZvcm1UeXBlcyIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvcm1OYW1lcyIsImJ1dHRvbnMiLCJtYXhGb3JtTnVtIiwic3RhdGUiLCJmb3JtIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwibmV4dEZvcm1OdW0iLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiLCJGb3JtIiwiZm9ybUZpZWxkcyIsImZvcm1OYW1lIiwibWFwIiwibGFiZWxUZXh0IiwiRm9ybUZpZWxkIiwiQ29uZmlybWF0aW9uUGFnZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEIsc0JBQW9CLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FESjtBQUVoQixhQUFXLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsTUFBckIsRUFBNkIsT0FBN0IsRUFBc0MsU0FBdEMsRUFBaUQsY0FBakQsQ0FGSztBQUdoQiw2QkFBMkIsQ0FBQyxhQUFELEVBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBQThCLFVBQTlCO0FBSFgsQ0FBbEI7O0FBTUEsTUFBTUMsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFpQztBQUMvQkMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBQyxFQUFELEVBQUssa0JBQUwsRUFBeUIsU0FBekIsRUFBb0MseUJBQXBDLENBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMsVUFBckMsQ0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQVAsS0FBYjtBQUNEOztBQUVEQyxFQUFBQSxrQkFBa0IsR0FBRztBQUNuQixVQUFNQyxXQUFXLEdBQUcsS0FBS0gsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLEtBQUtGLFVBQXpCLEdBQXNDLENBQXRDLEdBQTBDLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixDQUFoRjtBQUNBLFNBQUtHLFFBQUwsQ0FBYztBQUFFSCxNQUFBQSxJQUFJLEVBQUVFO0FBQVIsS0FBZDtBQUNEOztBQUVERSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUssTUFBQSxFQUFFLEVBQUM7QUFBUixPQUNFO0FBQVEsTUFBQSxPQUFPLEVBQUUsS0FBS0gsa0JBQUwsQ0FBd0JJLElBQXhCLENBQTZCLElBQTdCO0FBQWpCLE9BQXNELEtBQUtSLE9BQUwsQ0FBYSxLQUFLRSxLQUFMLENBQVdDLElBQXhCLENBQXRELENBREYsRUFFRSxvQkFBQyxJQUFEO0FBQU0sTUFBQSxRQUFRLEVBQUUsS0FBS0osU0FBTCxDQUFlLEtBQUtHLEtBQUwsQ0FBV0MsSUFBMUI7QUFBaEIsTUFGRixFQUlJLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixLQUFLRixVQUF6QixHQUFzQyxvQkFBQyxnQkFBRCxPQUF0QyxHQUE2RCxFQUpqRSxDQURGO0FBU0Q7O0FBeEI4Qjs7QUEyQmpDLFNBQVNRLElBQVQsQ0FBY1gsS0FBZCxFQUFxQjtBQUNuQixRQUFNWSxVQUFVLEdBQUdaLEtBQUssQ0FBQ2EsUUFBTixHQUFpQmxCLFNBQVMsQ0FBQ0ssS0FBSyxDQUFDYSxRQUFQLENBQVQsQ0FBMEJDLEdBQTFCLENBQThCQyxTQUFTLElBQUksb0JBQUMsU0FBRDtBQUFXLElBQUEsU0FBUyxFQUFFQTtBQUF0QixJQUEzQyxDQUFqQixHQUFvRyxFQUF2SDtBQUVBLFNBQ0U7QUFBTSxJQUFBLEVBQUUsRUFBQztBQUFULEtBQ0UsZ0NBQUtmLEtBQUssQ0FBQ2EsUUFBWCxDQURGLEVBRUdELFVBRkgsQ0FERjtBQU1EOztBQUVELFNBQVNJLFNBQVQsQ0FBbUJoQixLQUFuQixFQUEwQjtBQUN4QixTQUNFLGlDQUNFLG1DQUFRQSxLQUFLLENBQUNlLFNBQWQsQ0FERixFQUVFO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUZGLENBREY7QUFNRDs7QUFFRCxTQUFTRSxnQkFBVCxDQUEwQmpCLEtBQTFCLEVBQWlDO0FBQy9CLFNBQ0UsaUNBQ0UseUNBREYsRUFDa0Isd0NBRGxCLEVBRUUsMENBRkYsRUFFbUIsa0RBRm5CLEVBR0UsNkNBSEYsRUFHc0IsNENBSHRCLEVBSUUsMkNBSkYsRUFJb0Isa0RBSnBCLEVBS0UsMkNBTEYsRUFLb0IsaUNBTHBCLEVBTUUseUNBTkYsRUFNa0Isa0RBTmxCLEVBT0UsMENBUEYsRUFPbUIsdUNBUG5CLEVBUUUsNENBUkYsRUFRcUIsMENBUnJCLEVBU0UsaURBVEYsRUFTMEIsZ0RBVDFCLEVBVUUsZ0RBVkYsRUFVeUIsOENBVnpCLEVBV0Usd0NBWEYsRUFXaUIsK0NBWGpCLEVBWUUsd0NBWkYsRUFZaUIsd0NBWmpCLEVBYUUsNkNBYkYsRUFhc0IsMENBYnRCLENBREY7QUFpQkQ7O0FBRURrQixRQUFRLENBQUNULE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QlUsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXpCO0FBR0EiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtVHlwZXMgPSB7XG4gICdBY2NvdW50IENyZWF0aW9uJzogWydOYW1lJywgJ0VtYWlsJywgJ1Bhc3N3b3JkJ10sXG4gICdBZGRyZXNzJzogWydMaW5lIDEnLCAnTGluZSAyJywgJ0NpdHknLCAnU3RhdGUnLCAnWmlwY29kZScsICdQaG9uZSBOdW1iZXInXSxcbiAgJ0NyZWRpdCBDYXJkIEluZm9ybWF0aW9uJzogWydDYXJkIE51bWJlcicsICdFeHAnLCAnQ1ZWJywgJ1ppcCBDb2RlJ11cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZvcm1OYW1lcyA9IFsnJywgJ0FjY291bnQgQ3JlYXRpb24nLCAnQWRkcmVzcycsICdDcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbiddO1xuICAgIHRoaXMuYnV0dG9ucyA9IFsnQ2hlY2tvdXQnLCAnTmV4dCcsICdOZXh0JywgJ05leHQnLCAnUHVyY2hhc2UnXTtcbiAgICB0aGlzLm1heEZvcm1OdW0gPSA0O1xuICAgIHRoaXMuc3RhdGUgPSB7Zm9ybTogMH07XG4gIH1cblxuICBidXR0b25DbGlja0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbmV4dEZvcm1OdW0gPSB0aGlzLnN0YXRlLmZvcm0gPT09IHRoaXMubWF4Rm9ybU51bSA/IDAgOiB0aGlzLnN0YXRlLmZvcm0gKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtOiBuZXh0Rm9ybU51bSB9KTsgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J2FwcCc+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5idXR0b25DbGlja0hhbmRsZXIuYmluZCh0aGlzKX0+e3RoaXMuYnV0dG9uc1t0aGlzLnN0YXRlLmZvcm1dfTwvYnV0dG9uPlxuICAgICAgICA8Rm9ybSBmb3JtTmFtZT17dGhpcy5mb3JtTmFtZXNbdGhpcy5zdGF0ZS5mb3JtXX0vPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtID09PSB0aGlzLm1heEZvcm1OdW0gPyA8Q29uZmlybWF0aW9uUGFnZSAvPiA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICBjb25zdCBmb3JtRmllbGRzID0gcHJvcHMuZm9ybU5hbWUgPyBmb3JtVHlwZXNbcHJvcHMuZm9ybU5hbWVdLm1hcChsYWJlbFRleHQgPT4gPEZvcm1GaWVsZCBsYWJlbFRleHQ9e2xhYmVsVGV4dH0gLz4gKSA6ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gaWQ9J2lucHV0LWZvcm0nPlxuICAgICAgPGgyPntwcm9wcy5mb3JtTmFtZX08L2gyPlxuICAgICAge2Zvcm1GaWVsZHN9XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5mdW5jdGlvbiBGb3JtRmllbGQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPntwcm9wcy5sYWJlbFRleHR9PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb25maXJtYXRpb25QYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+TmFtZTo8L2Rpdj48c3Bhbj5Cb2I8L3NwYW4+XG4gICAgICA8ZGl2PkVtYWlsOjwvZGl2PjxzcGFuPmJvYkBnbWFpbC5jb208L3NwYW4+XG4gICAgICA8ZGl2PlBhc3N3b3JkOjwvZGl2PjxzcGFuPjEyM1Bhc3M8L3NwYW4+XG4gICAgICA8ZGl2PkxpbmUgMTo8L2Rpdj48c3Bhbj4xMjM0IEEgU3RyZWV0PC9zcGFuPlxuICAgICAgPGRpdj5MaW5lIDI6PC9kaXY+PHNwYW4+PC9zcGFuPlxuICAgICAgPGRpdj5DaXR5OjwvZGl2PjxzcGFuPlNhbiBGcmFuY2lzY288L3NwYW4+XG4gICAgICA8ZGl2PlN0YXRlOjwvZGl2PjxzcGFuPkNBPC9zcGFuPlxuICAgICAgPGRpdj5aaXBjb2RlOjwvZGl2PjxzcGFuPjk0OTAxPC9zcGFuPlxuICAgICAgPGRpdj5QaG9uZSBOdW1iZXI6PC9kaXY+PHNwYW4+MTIzIDQ1NiA3ODk8L3NwYW4+XG4gICAgICA8ZGl2PkNhcmQgTnVtYmVyOjwvZGl2PjxzcGFuPjEyMzg5NDk4NTwvc3Bhbj5cbiAgICAgIDxkaXY+RXhwOjwvZGl2PjxzcGFuPjEyLzI0LzIwMTg8L3NwYW4+XG4gICAgICA8ZGl2PkNWVjo8L2Rpdj48c3Bhbj4yMzM8L3NwYW4+XG4gICAgICA8ZGl2PlppcCBDb2RlOjwvZGl2PjxzcGFuPjk0OTAxPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNPTlRST0xMRVJTXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=