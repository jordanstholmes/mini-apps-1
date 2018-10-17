"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.forms = ['', React.createElement(Form1, null), React.createElement(Form2, null), React.createElement(Form3, null)];
    this.state = {
      form: 0
    };
  }

  render() {
    return React.createElement("div", {
      id: "app"
    }, React.createElement(NavButton, null), this.forms[this.state.form]);
  }

}

function NavButton(props) {
  return React.createElement("div", null, React.createElement("button", null, "checkout"));
}

function Form1(props) {
  return React.createElement("form", null, React.createElement("h2", null, "Account Creation"), React.createElement("label", null, "Name:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Email:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Password:"), React.createElement("input", {
    type: "text"
  }));
}

function Form2(props) {
  return React.createElement("form", null, React.createElement("h2", null, "Address"), React.createElement("label", null, "Line 1:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Line 2:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "City:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "State:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Zipcode:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Phone Number:"), React.createElement("input", {
    type: "text"
  }));
}

function Form3(props) {
  return React.createElement("form", null, React.createElement("h2", null, "Credit Card Information"), React.createElement("label", null, "Car Number:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Exp:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "CVV:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Zip Code:"), React.createElement("input", {
    type: "text"
  }));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
/****************************************************
CONTROLLERS
****************************************************/

function buttonClickHandler() {}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvcm1zIiwic3RhdGUiLCJmb3JtIiwicmVuZGVyIiwiTmF2QnV0dG9uIiwiRm9ybTEiLCJGb3JtMiIsIkZvcm0zIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBaUM7QUFDL0JDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBQyxFQUFELEVBQUssb0JBQUMsS0FBRCxPQUFMLEVBQWdCLG9CQUFDLEtBQUQsT0FBaEIsRUFBMkIsb0JBQUMsS0FBRCxPQUEzQixDQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQUNDLE1BQUFBLElBQUksRUFBRTtBQUFQLEtBQWI7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFLLE1BQUEsRUFBRSxFQUFDO0FBQVIsT0FDRSxvQkFBQyxTQUFELE9BREYsRUFHSSxLQUFLSCxLQUFMLENBQVcsS0FBS0MsS0FBTCxDQUFXQyxJQUF0QixDQUhKLENBREY7QUFRRDs7QUFoQjhCOztBQW1CakMsU0FBU0UsU0FBVCxDQUFtQkwsS0FBbkIsRUFBMEI7QUFDeEIsU0FDRSxpQ0FDRSwrQ0FERixDQURGO0FBS0Q7O0FBRUQsU0FBU00sS0FBVCxDQUFlTixLQUFmLEVBQXNCO0FBQ3BCLFNBQ0Usa0NBQ0UsbURBREYsRUFFRSwyQ0FGRixFQUVzQjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFGdEIsRUFHRSw0Q0FIRixFQUd1QjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFIdkIsRUFJRSwrQ0FKRixFQUkwQjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFKMUIsQ0FERjtBQVFEOztBQUVELFNBQVNPLEtBQVQsQ0FBZVAsS0FBZixFQUFzQjtBQUNwQixTQUNFLGtDQUNFLDBDQURGLEVBRUUsNkNBRkYsRUFFd0I7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBRnhCLEVBR0UsNkNBSEYsRUFHd0I7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBSHhCLEVBSUUsMkNBSkYsRUFJc0I7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBSnRCLEVBS0UsNENBTEYsRUFLdUI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBTHZCLEVBTUUsOENBTkYsRUFNeUI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBTnpCLEVBT0UsbURBUEYsRUFPOEI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBUDlCLENBREY7QUFXRDs7QUFFRCxTQUFTUSxLQUFULENBQWVSLEtBQWYsRUFBc0I7QUFDcEIsU0FDRSxrQ0FDRSwwREFERixFQUVFLGlEQUZGLEVBRTRCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUY1QixFQUdFLDBDQUhGLEVBR3FCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUhyQixFQUlFLDBDQUpGLEVBSXFCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUpyQixFQUtFLCtDQUxGLEVBSzBCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUwxQixDQURGO0FBU0Q7O0FBRURTLFFBQVEsQ0FBQ0wsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCTSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekI7QUFHQTs7OztBQUlBLFNBQVNDLGtCQUFULEdBQThCLENBRTdCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZvcm1zID0gWycnLCA8Rm9ybTEgLz4sIDxGb3JtMiAvPiwgPEZvcm0zIC8+XTtcbiAgICB0aGlzLnN0YXRlID0ge2Zvcm06IDB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J2FwcCc+XG4gICAgICAgIDxOYXZCdXR0b24gLz5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZm9ybXNbdGhpcy5zdGF0ZS5mb3JtXVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIE5hdkJ1dHRvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uPmNoZWNrb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm0xKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8aDI+QWNjb3VudCBDcmVhdGlvbjwvaDI+XG4gICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm0yKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8aDI+QWRkcmVzczwvaDI+XG4gICAgICA8bGFiZWw+TGluZSAxOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+TGluZSAyOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+Q2l0eTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPlN0YXRlOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+WmlwY29kZTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPlBob25lIE51bWJlcjo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRm9ybTMocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgIDxoMj5DcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICA8bGFiZWw+Q2FyIE51bWJlcjo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPkV4cDo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPkNWVjo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPlppcCBDb2RlOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNPTlRST0xMRVJTXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBidXR0b25DbGlja0hhbmRsZXIoKSB7XG5cbn1cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==