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
    }, React.createElement(NavButton, {
      buttonClickHandler: this.buttonClickHandler.bind(this),
      buttonText: this.buttons[this.state.form]
    }), this.state.form !== 0 && this.state.form !== this.maxFormNum ? React.createElement(Form, {
      formName: this.formNames[this.state.form]
    }) : '', this.state.form === this.maxFormNum ? React.createElement(ConfirmationPage, null) : '');
  }

}

function Form(props) {
  const formFields = formTypes[props.formName].map(labelText => React.createElement(FormField, {
    labelText: labelText
  }));
  return React.createElement("form", {
    id: "input-form"
  }, React.createElement("h2", null, props.formName), formFields);
}

function FormField(props) {
  return React.createElement("div", null, React.createElement("label", null, props.labelText), React.createElement("input", {
    type: "text"
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbImZvcm1UeXBlcyIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvcm1OYW1lcyIsImJ1dHRvbnMiLCJtYXhGb3JtTnVtIiwic3RhdGUiLCJmb3JtIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwibmV4dEZvcm1OdW0iLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiLCJGb3JtIiwiZm9ybUZpZWxkcyIsImZvcm1OYW1lIiwibWFwIiwibGFiZWxUZXh0IiwiRm9ybUZpZWxkIiwiTmF2QnV0dG9uIiwiYnV0dG9uVGV4dCIsIkNvbmZpcm1hdGlvblBhZ2UiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsU0FBUyxHQUFHO0FBQ2hCLHNCQUFvQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLENBREo7QUFFaEIsYUFBVyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE1BQXJCLEVBQTZCLE9BQTdCLEVBQXNDLFNBQXRDLEVBQWlELGNBQWpELENBRks7QUFHaEIsNkJBQTJCLENBQUMsYUFBRCxFQUFnQixLQUFoQixFQUF1QixLQUF2QixFQUE4QixVQUE5QjtBQUhYLENBQWxCOztBQU1BLE1BQU1DLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBaUM7QUFDL0JDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQUMsRUFBRCxFQUFLLGtCQUFMLEVBQXlCLFNBQXpCLEVBQW9DLHlCQUFwQyxDQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLFVBQXJDLENBQWY7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0Es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ICdFbWFpbCcsICdQYXNzd29yZCddLFxuICAnQWRkcmVzcyc6IFsnTGluZSAxJywgJ0xpbmUgMicsICdDaXR5JywgJ1N0YXRlJywgJ1ppcGNvZGUnLCAnUGhvbmUgTnVtYmVyJ10sXG4gICdDcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbic6IFsnQ2FyZCBOdW1iZXInLCAnRXhwJywgJ0NWVicsICdaaXAgQ29kZSddXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5mb3JtTmFtZXMgPSBbJycsICdBY2NvdW50IENyZWF0aW9uJywgJ0FkZHJlc3MnLCAnQ3JlZGl0IENhcmQgSW5mb3JtYXRpb24nXTtcbiAgICB0aGlzLmJ1dHRvbnMgPSBbJ0NoZWNrb3V0JywgJ05leHQnLCAnTmV4dCcsICdOZXh0JywgJ1B1cmNoYXNlJ107XG4gICAgdGhpcy5tYXhGb3JtTnVtID0gNDtcbiAgICB0aGlzLnN0YXRlID0ge2Zvcm06IDB9O1xuICB9XG5cbiAgYnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xuICAgIGNvbnN0IG5leHRGb3JtTnVtID0gdGhpcy5zdGF0ZS5mb3JtID09PSB0aGlzLm1heEZvcm1OdW0gPyAwIDogdGhpcy5zdGF0ZS5mb3JtICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybTogbmV4dEZvcm1OdW0gfSk7IFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSdhcHAnPlxuICAgICAgICA8TmF2QnV0dG9uXG4gICAgICAgICAgYnV0dG9uQ2xpY2tIYW5kbGVyPXt0aGlzLmJ1dHRvbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpfVxuICAgICAgICAgIGJ1dHRvblRleHQ9e3RoaXMuYnV0dG9uc1t0aGlzLnN0YXRlLmZvcm1dfSAvPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtICE9PSAwICYmIHRoaXMuc3RhdGUuZm9ybSAhPT0gdGhpcy5tYXhGb3JtTnVtID8gPEZvcm0gZm9ybU5hbWU9e3RoaXMuZm9ybU5hbWVzW3RoaXMuc3RhdGUuZm9ybV19IC8+IDogJydcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtID09PSB0aGlzLm1heEZvcm1OdW0gPyA8Q29uZmlybWF0aW9uUGFnZSAvPiA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICBjb25zdCBmb3JtRmllbGRzID0gZm9ybVR5cGVzW3Byb3BzLmZvcm1OYW1lXS5tYXAobGFiZWxUZXh0ID0+IDxGb3JtRmllbGQgbGFiZWxUZXh0PXtsYWJlbFRleHR9IC8+ICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBpZD0naW5wdXQtZm9ybSc+XG4gICAgICA8aDI+e3Byb3BzLmZvcm1OYW1lfTwvaDI+XG4gICAgICB7Zm9ybUZpZWxkc31cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm1GaWVsZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+e3Byb3BzLmxhYmVsVGV4dH08L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE5hdkJ1dHRvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmJ1dHRvbkNsaWNrSGFuZGxlcn0+e3Byb3BzLmJ1dHRvblRleHR9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbmZpcm1hdGlvblBhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5OYW1lOjwvZGl2PjxzcGFuPkJvYjwvc3Bhbj5cbiAgICAgIDxkaXY+RW1haWw6PC9kaXY+PHNwYW4+Ym9iQGdtYWlsLmNvbTwvc3Bhbj5cbiAgICAgIDxkaXY+UGFzc3dvcmQ6PC9kaXY+PHNwYW4+MTIzUGFzczwvc3Bhbj5cbiAgICAgIDxkaXY+TGluZSAxOjwvZGl2PjxzcGFuPjEyMzQgQSBTdHJlZXQ8L3NwYW4+XG4gICAgICA8ZGl2PkxpbmUgMjo8L2Rpdj48c3Bhbj48L3NwYW4+XG4gICAgICA8ZGl2PkNpdHk6PC9kaXY+PHNwYW4+U2FuIEZyYW5jaXNjbzwvc3Bhbj5cbiAgICAgIDxkaXY+U3RhdGU6PC9kaXY+PHNwYW4+Q0E8L3NwYW4+XG4gICAgICA8ZGl2PlppcGNvZGU6PC9kaXY+PHNwYW4+OTQ5MDE8L3NwYW4+XG4gICAgICA8ZGl2PlBob25lIE51bWJlcjo8L2Rpdj48c3Bhbj4xMjMgNDU2IDc4OTwvc3Bhbj5cbiAgICAgIDxkaXY+Q2FyZCBOdW1iZXI6PC9kaXY+PHNwYW4+MTIzODk0OTg1PC9zcGFuPlxuICAgICAgPGRpdj5FeHA6PC9kaXY+PHNwYW4+MTIvMjQvMjAxODwvc3Bhbj5cbiAgICAgIDxkaXY+Q1ZWOjwvZGl2PjxzcGFuPjIzMzwvc3Bhbj5cbiAgICAgIDxkaXY+WmlwIENvZGU6PC9kaXY+PHNwYW4+OTQ5MDE8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ09OVFJPTExFUlNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==