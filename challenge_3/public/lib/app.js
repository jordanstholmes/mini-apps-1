"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.forms = ['', React.createElement(Form1, null), React.createElement(Form2, null), React.createElement(Form3, null), React.createElement(ConfirmationPage, null)];
    this.buttons = ['Checkout', 'Next', 'Next', 'Next'];
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
      buttonClickHandler: this.buttonClickHandler.bind(this)
    }), this.forms[this.state.form]);
  }

}

function NavButton(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.buttonClickHandler
  }, "checkout"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvcm1zIiwiYnV0dG9ucyIsIm1heEZvcm1OdW0iLCJzdGF0ZSIsImZvcm0iLCJidXR0b25DbGlja0hhbmRsZXIiLCJuZXh0Rm9ybU51bSIsInNldFN0YXRlIiwicmVuZGVyIiwiYmluZCIsIk5hdkJ1dHRvbiIsIkZvcm0xIiwiRm9ybTIiLCJGb3JtMyIsIkNvbmZpcm1hdGlvblBhZ2UiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFpQztBQUMvQkMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFDLEVBQUQsRUFBSyxvQkFBQyxLQUFELE9BQUwsRUFBZ0Isb0JBQUMsS0FBRCxPQUFoQixFQUEyQixvQkFBQyxLQUFELE9BQTNCLEVBQXNDLG9CQUFDLGdCQUFELE9BQXRDLENBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QixNQUE3QixDQUFmO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUFDQyxNQUFBQSxJQUFJLEVBQUU7QUFBUCxLQUFiO0FBQ0Q7O0FBRURDLEVBQUFBLGtCQUFrQixHQUFHO0FBQ25CLFVBQU1DLFdBQVcsR0FBRyxLQUFLSCxLQUFMLENBQVdDLElBQVgsS0FBb0IsS0FBS0YsVUFBekIsR0FBc0MsQ0FBdEMsR0FBMEMsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLEdBQWtCLENBQWhGO0FBQ0EsU0FBS0csUUFBTCxDQUFjO0FBQUVILE1BQUFBLElBQUksRUFBRUU7QUFBUixLQUFkO0FBQ0Q7O0FBRURFLEVBQUFBLE1BQU0sR0FBRztBQUNQLFdBQ0U7QUFBSyxNQUFBLEVBQUUsRUFBQztBQUFSLE9BQ0Usb0JBQUMsU0FBRDtBQUFXLE1BQUEsa0JBQWtCLEVBQUUsS0FBS0gsa0JBQUwsQ0FBd0JJLElBQXhCLENBQTZCLElBQTdCO0FBQS9CLE1BREYsRUFHSSxLQUFLVCxLQUFMLENBQVcsS0FBS0csS0FBTCxDQUFXQyxJQUF0QixDQUhKLENBREY7QUFRRDs7QUF2QjhCOztBQTBCakMsU0FBU00sU0FBVCxDQUFtQlgsS0FBbkIsRUFBMEI7QUFDeEIsU0FDRSxpQ0FDRTtBQUFRLElBQUEsT0FBTyxFQUFFQSxLQUFLLENBQUNNO0FBQXZCLGdCQURGLENBREY7QUFLRDs7QUFFRCxTQUFTTSxLQUFULENBQWVaLEtBQWYsRUFBc0I7QUFDcEIsU0FDRSxrQ0FDRSxtREFERixFQUVFLDJDQUZGLEVBRXNCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUZ0QixFQUdFLDRDQUhGLEVBR3VCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUh2QixFQUlFLCtDQUpGLEVBSTBCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUoxQixDQURGO0FBUUQ7O0FBRUQsU0FBU2EsS0FBVCxDQUFlYixLQUFmLEVBQXNCO0FBQ3BCLFNBQ0Usa0NBQ0UsMENBREYsRUFFRSw2Q0FGRixFQUV3QjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFGeEIsRUFHRSw2Q0FIRixFQUd3QjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFIeEIsRUFJRSwyQ0FKRixFQUlzQjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFKdEIsRUFLRSw0Q0FMRixFQUt1QjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFMdkIsRUFNRSw4Q0FORixFQU15QjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFOekIsRUFPRSxtREFQRixFQU84QjtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFQOUIsQ0FERjtBQVdEOztBQUVELFNBQVNjLEtBQVQsQ0FBZWQsS0FBZixFQUFzQjtBQUNwQixTQUNFLGtDQUNFLDBEQURGLEVBRUUsa0RBRkYsRUFFNkI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBRjdCLEVBR0UsMENBSEYsRUFHcUI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBSHJCLEVBSUUsMENBSkYsRUFJcUI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBSnJCLEVBS0UsK0NBTEYsRUFLMEI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBTDFCLENBREY7QUFTRDs7QUFFRCxTQUFTZSxnQkFBVCxDQUEwQmYsS0FBMUIsRUFBaUM7QUFDL0IsU0FDRSxpQ0FDRSx5Q0FERixFQUNrQix3Q0FEbEIsRUFFRSwwQ0FGRixFQUVtQixrREFGbkIsRUFHRSw2Q0FIRixFQUdzQiw0Q0FIdEIsRUFJRSwyQ0FKRixFQUlvQixrREFKcEIsRUFLRSwyQ0FMRixFQUtvQixpQ0FMcEIsRUFNRSx5Q0FORixFQU1rQixrREFObEIsRUFPRSwwQ0FQRixFQU9tQix1Q0FQbkIsRUFRRSw0Q0FSRixFQVFxQiwwQ0FSckIsRUFTRSxpREFURixFQVMwQixnREFUMUIsRUFVRSxnREFWRixFQVV5Qiw4Q0FWekIsRUFXRSx3Q0FYRixFQVdpQiwrQ0FYakIsRUFZRSx3Q0FaRixFQVlpQix3Q0FaakIsRUFhRSw2Q0FiRixFQWFzQiwwQ0FidEIsQ0FERjtBQWlCRDs7QUFFRGdCLFFBQVEsQ0FBQ1AsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCUSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekI7QUFHQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5mb3JtcyA9IFsnJywgPEZvcm0xIC8+LCA8Rm9ybTIgLz4sIDxGb3JtMyAvPiwgPENvbmZpcm1hdGlvblBhZ2UgLz5dO1xuICAgIHRoaXMuYnV0dG9ucyA9IFsnQ2hlY2tvdXQnLCAnTmV4dCcsICdOZXh0JywgJ05leHQnXTtcbiAgICB0aGlzLm1heEZvcm1OdW0gPSA0O1xuICAgIHRoaXMuc3RhdGUgPSB7Zm9ybTogMH07XG4gIH1cblxuICBidXR0b25DbGlja0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbmV4dEZvcm1OdW0gPSB0aGlzLnN0YXRlLmZvcm0gPT09IHRoaXMubWF4Rm9ybU51bSA/IDAgOiB0aGlzLnN0YXRlLmZvcm0gKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtOiBuZXh0Rm9ybU51bSB9KTsgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J2FwcCc+XG4gICAgICAgIDxOYXZCdXR0b24gYnV0dG9uQ2xpY2tIYW5kbGVyPXt0aGlzLmJ1dHRvbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpfS8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmZvcm1zW3RoaXMuc3RhdGUuZm9ybV1cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBOYXZCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5idXR0b25DbGlja0hhbmRsZXJ9PmNoZWNrb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm0xKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8aDI+QWNjb3VudCBDcmVhdGlvbjwvaDI+XG4gICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm0yKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8aDI+QWRkcmVzczwvaDI+XG4gICAgICA8bGFiZWw+TGluZSAxOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+TGluZSAyOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+Q2l0eTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPlN0YXRlOjwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+WmlwY29kZTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPlBob25lIE51bWJlcjo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRm9ybTMocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgIDxoMj5DcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICA8bGFiZWw+Q2FyZCBOdW1iZXI6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICAgIDxsYWJlbD5FeHA6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICAgIDxsYWJlbD5DVlY6PC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICAgIDxsYWJlbD5aaXAgQ29kZTo8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ29uZmlybWF0aW9uUGFnZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2Pk5hbWU6PC9kaXY+PHNwYW4+Qm9iPC9zcGFuPlxuICAgICAgPGRpdj5FbWFpbDo8L2Rpdj48c3Bhbj5ib2JAZ21haWwuY29tPC9zcGFuPlxuICAgICAgPGRpdj5QYXNzd29yZDo8L2Rpdj48c3Bhbj4xMjNQYXNzPC9zcGFuPlxuICAgICAgPGRpdj5MaW5lIDE6PC9kaXY+PHNwYW4+MTIzNCBBIFN0cmVldDwvc3Bhbj5cbiAgICAgIDxkaXY+TGluZSAyOjwvZGl2PjxzcGFuPjwvc3Bhbj5cbiAgICAgIDxkaXY+Q2l0eTo8L2Rpdj48c3Bhbj5TYW4gRnJhbmNpc2NvPC9zcGFuPlxuICAgICAgPGRpdj5TdGF0ZTo8L2Rpdj48c3Bhbj5DQTwvc3Bhbj5cbiAgICAgIDxkaXY+WmlwY29kZTo8L2Rpdj48c3Bhbj45NDkwMTwvc3Bhbj5cbiAgICAgIDxkaXY+UGhvbmUgTnVtYmVyOjwvZGl2PjxzcGFuPjEyMyA0NTYgNzg5PC9zcGFuPlxuICAgICAgPGRpdj5DYXJkIE51bWJlcjo8L2Rpdj48c3Bhbj4xMjM4OTQ5ODU8L3NwYW4+XG4gICAgICA8ZGl2PkV4cDo8L2Rpdj48c3Bhbj4xMi8yNC8yMDE4PC9zcGFuPlxuICAgICAgPGRpdj5DVlY6PC9kaXY+PHNwYW4+MjMzPC9zcGFuPlxuICAgICAgPGRpdj5aaXAgQ29kZTo8L2Rpdj48c3Bhbj45NDkwMTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5DT05UUk9MTEVSU1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==