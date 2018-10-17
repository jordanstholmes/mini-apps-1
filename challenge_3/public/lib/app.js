"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.forms = ['', React.createElement(Form1, null), React.createElement(Form2, null), React.createElement(Form3, null), React.createElement(ConfirmationPage, null)];
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
    }), this.forms[this.state.form]);
  }

}

function NavButton(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.buttonClickHandler
  }, props.buttonText));
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
  return React.createElement("form", null, React.createElement("h2", null, "Credit Card Information"), React.createElement("label", null, "Card Number:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Exp:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "CVV:"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Zip Code:"), React.createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvcm1zIiwiYnV0dG9ucyIsIm1heEZvcm1OdW0iLCJzdGF0ZSIsImZvcm0iLCJidXR0b25DbGlja0hhbmRsZXIiLCJuZXh0Rm9ybU51bSIsInNldFN0YXRlIiwicmVuZGVyIiwiYmluZCIsIk5hdkJ1dHRvbiIsImJ1dHRvblRleHQiLCJGb3JtMSIsIkZvcm0yIiwiRm9ybTMiLCJDb25maXJtYXRpb25QYWdlIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBaUM7QUFDL0JDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBQyxFQUFELEVBQUssb0JBQUMsS0FBRCxPQUFMLEVBQWdCLG9CQUFDLEtBQUQsT0FBaEIsRUFBMkIsb0JBQUMsS0FBRCxPQUEzQixFQUFzQyxvQkFBQyxnQkFBRCxPQUF0QyxDQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMsVUFBckMsQ0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQVAsS0FBYjtBQUNEOztBQUVEQyxFQUFBQSxrQkFBa0IsR0FBRztBQUNuQixVQUFNQyxXQUFXLEdBQUcsS0FBS0gsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLEtBQUtGLFVBQXpCLEdBQXNDLENBQXRDLEdBQTBDLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixDQUFoRjtBQUNBLFNBQUtHLFFBQUwsQ0FBYztBQUFFSCxNQUFBQSxJQUFJLEVBQUVFO0FBQVIsS0FBZDtBQUNEOztBQUVERSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUssTUFBQSxFQUFFLEVBQUM7QUFBUixPQUNFLG9CQUFDLFNBQUQ7QUFDRSxNQUFBLGtCQUFrQixFQUFFLEtBQUtILGtCQUFMLENBQXdCSSxJQUF4QixDQUE2QixJQUE3QixDQUR0QjtBQUVFLE1BQUEsVUFBVSxFQUFFLEtBQUtSLE9BQUwsQ0FBYSxLQUFLRSxLQUFMLENBQVdDLElBQXhCO0FBRmQsTUFERixFQUtJLEtBQUtKLEtBQUwsQ0FBVyxLQUFLRyxLQUFMLENBQVdDLElBQXRCLENBTEosQ0FERjtBQVVEOztBQXpCOEI7O0FBNEJqQyxTQUFTTSxTQUFULENBQW1CWCxLQUFuQixFQUEwQjtBQUN4QixTQUNFLGlDQUNFO0FBQVEsSUFBQSxPQUFPLEVBQUVBLEtBQUssQ0FBQ007QUFBdkIsS0FBNENOLEtBQUssQ0FBQ1ksVUFBbEQsQ0FERixDQURGO0FBS0Q7O0FBRUQsU0FBU0MsS0FBVCxDQUFlYixLQUFmLEVBQXNCO0FBQ3BCLFNBQ0Usa0NBQ0UsbURBREYsRUFFRSwyQ0FGRixFQUVzQjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFGdEIsRUFHRSw0Q0FIRixFQUd1QjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFIdkIsRUFJRSwrQ0FKRixFQUkwQjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFKMUIsQ0FERjtBQVFEOztBQUVELFNBQVNjLEtBQVQsQ0FBZWQsS0FBZixFQUFzQjtBQUNwQixTQUNFLGtDQUNFLDBDQURGLEVBRUUsNkNBRkYsRUFFd0I7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBRnhCLEVBR0UsNkNBSEYsRUFHd0I7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBSHhCLEVBSUUsMkNBSkYsRUFJc0I7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBSnRCLEVBS0UsNENBTEYsRUFLdUI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBTHZCLEVBTUUsOENBTkYsRUFNeUI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBTnpCLEVBT0UsbURBUEYsRUFPOEI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBUDlCLENBREY7QUFXRDs7QUFFRCxTQUFTZSxLQUFULENBQWVmLEtBQWYsRUFBc0I7QUFDcEIsU0FDRSxrQ0FDRSwwREFERixFQUVFLGtEQUZGLEVBRTZCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUY3QixFQUdFLDBDQUhGLEVBR3FCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUhyQixFQUlFLDBDQUpGLEVBSXFCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUpyQixFQUtFLCtDQUxGLEVBSzBCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUwxQixDQURGO0FBU0Q7O0FBRUQsU0FBU2dCLGdCQUFULENBQTBCaEIsS0FBMUIsRUFBaUM7QUFDL0IsU0FDRSxpQ0FDRSx5Q0FERixFQUNrQix3Q0FEbEIsRUFFRSwwQ0FGRixFQUVtQixrREFGbkIsRUFHRSw2Q0FIRixFQUdzQiw0Q0FIdEIsRUFJRSwyQ0FKRixFQUlvQixrREFKcEIsRUFLRSwyQ0FMRixFQUtvQixpQ0FMcEIsRUFNRSx5Q0FORixFQU1rQixrREFObEIsRUFPRSwwQ0FQRixFQU9tQix1Q0FQbkIsRUFRRSw0Q0FSRixFQVFxQiwwQ0FSckIsRUFTRSxpREFURixFQVMwQixnREFUMUIsRUFVRSxnREFWRixFQVV5Qiw4Q0FWekIsRUFXRSx3Q0FYRixFQVdpQiwrQ0FYakIsRUFZRSx3Q0FaRixFQVlpQix3Q0FaakIsRUFhRSw2Q0FiRixFQWFzQiwwQ0FidEIsQ0FERjtBQWlCRDs7QUFFRGlCLFFBQVEsQ0FBQ1IsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCUyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekI7QUFHQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5mb3JtcyA9IFsnJywgPEZvcm0xIC8+LCA8Rm9ybTIgLz4sIDxGb3JtMyAvPiwgPENvbmZpcm1hdGlvblBhZ2UgLz5dO1xuICAgIHRoaXMuYnV0dG9ucyA9IFsnQ2hlY2tvdXQnLCAnTmV4dCcsICdOZXh0JywgJ05leHQnLCAnUHVyY2hhc2UnXTtcbiAgICB0aGlzLm1heEZvcm1OdW0gPSA0O1xuICAgIHRoaXMuc3RhdGUgPSB7Zm9ybTogMH07XG4gIH1cblxuICBidXR0b25DbGlja0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbmV4dEZvcm1OdW0gPSB0aGlzLnN0YXRlLmZvcm0gPT09IHRoaXMubWF4Rm9ybU51bSA/IDAgOiB0aGlzLnN0YXRlLmZvcm0gKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtOiBuZXh0Rm9ybU51bSB9KTsgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J2FwcCc+XG4gICAgICAgIDxOYXZCdXR0b25cbiAgICAgICAgICBidXR0b25DbGlja0hhbmRsZXI9e3RoaXMuYnV0dG9uQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgYnV0dG9uVGV4dD17dGhpcy5idXR0b25zW3RoaXMuc3RhdGUuZm9ybV19IC8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmZvcm1zW3RoaXMuc3RhdGUuZm9ybV1cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBOYXZCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5idXR0b25DbGlja0hhbmRsZXJ9Pntwcm9wcy5idXR0b25UZXh0fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBGb3JtMShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGgyPkFjY291bnQgQ3JlYXRpb248L2gyPlxuICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5mdW5jdGlvbiBGb3JtMihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGgyPkFkZHJlc3M8L2gyPlxuICAgICAgPGxhYmVsPkxpbmUgMTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPkxpbmUgMjo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPkNpdHk6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICAgIDxsYWJlbD5TdGF0ZTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPlppcGNvZGU6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICAgIDxsYWJlbD5QaG9uZSBOdW1iZXI6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm0zKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8aDI+Q3JlZGl0IENhcmQgSW5mb3JtYXRpb248L2gyPlxuICAgICAgPGxhYmVsPkNhcmQgTnVtYmVyOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+RXhwOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+Q1ZWOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+WmlwIENvZGU6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbmZpcm1hdGlvblBhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5OYW1lOjwvZGl2PjxzcGFuPkJvYjwvc3Bhbj5cbiAgICAgIDxkaXY+RW1haWw6PC9kaXY+PHNwYW4+Ym9iQGdtYWlsLmNvbTwvc3Bhbj5cbiAgICAgIDxkaXY+UGFzc3dvcmQ6PC9kaXY+PHNwYW4+MTIzUGFzczwvc3Bhbj5cbiAgICAgIDxkaXY+TGluZSAxOjwvZGl2PjxzcGFuPjEyMzQgQSBTdHJlZXQ8L3NwYW4+XG4gICAgICA8ZGl2PkxpbmUgMjo8L2Rpdj48c3Bhbj48L3NwYW4+XG4gICAgICA8ZGl2PkNpdHk6PC9kaXY+PHNwYW4+U2FuIEZyYW5jaXNjbzwvc3Bhbj5cbiAgICAgIDxkaXY+U3RhdGU6PC9kaXY+PHNwYW4+Q0E8L3NwYW4+XG4gICAgICA8ZGl2PlppcGNvZGU6PC9kaXY+PHNwYW4+OTQ5MDE8L3NwYW4+XG4gICAgICA8ZGl2PlBob25lIE51bWJlcjo8L2Rpdj48c3Bhbj4xMjMgNDU2IDc4OTwvc3Bhbj5cbiAgICAgIDxkaXY+Q2FyZCBOdW1iZXI6PC9kaXY+PHNwYW4+MTIzODk0OTg1PC9zcGFuPlxuICAgICAgPGRpdj5FeHA6PC9kaXY+PHNwYW4+MTIvMjQvMjAxODwvc3Bhbj5cbiAgICAgIDxkaXY+Q1ZWOjwvZGl2PjxzcGFuPjIzMzwvc3Bhbj5cbiAgICAgIDxkaXY+WmlwIENvZGU6PC9kaXY+PHNwYW4+OTQ5MDE8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ09OVFJPTExFUlNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG5cblxuXG5cblxuXG4iXX0=