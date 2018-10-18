"use strict";

// const formTypes = {
//   CHECOUT: 0,
//   ACCOUNT: 1,
//   ADDRESS: 2,
//   CREDIT: 3,
//   CONFIRM: 4
// };
// const formTemplates = {
//   button: ['Checkout', 'Next', 'Next', 'Next', 'Purchase'],
//   header: ['', 'Account Creation', 'Address', 'Credit Card Information', 'Confirm Information'],
//   fields: [
//     {},
//     {name: 'Name', email: 'Email', password: 'Password'},
//     {address: {line1: 'Line 1', line2: 'Line 2', city: 'City', state: 'State', zip: 'Zip Code', phone: 'Phone'}},
//     {cc: {number: 'Card Number', exp: 'Expiration Date', cvv: 'CVV', zip: 'Billing Zip'}},
//     {}
//   ]
// };
const labelKey = {
  name: 'Name',
  email: 'Email',
  password: 'Password',
  line1: 'Line 1',
  line2: 'Line 2',
  city: 'City',
  state: 'State',
  zip: 'Zip Code',
  phone: 'Phone',
  ccNumber: 'Card Number',
  exp: 'Expiration Date',
  cvv: 'CVV',
  zip: 'Billing Zip'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = ['Checkout', 'Next', 'Next', 'Next', 'Purchase'];
    this.headers = ['', 'Account Creation', 'Address', 'Credit Card Information', 'Confirm Information'];
    this.fieldSets = [undefined, ['name', 'email', 'password'], ['line1', 'line2', 'city', 'state', 'zip', 'phone'], ['ccNumber', 'exp', 'cvv', 'zip'], undefined];
    this.state = {
      num: 0
    };
  }

  buttonClickHandler() {
    const nextFormNum = this.state.num === this.headers.length - 1 ? 0 : this.state.num + 1;
    this.setState({
      num: nextFormNum
    });
  }

  render() {
    const formNum = this.state.num;
    console.log('IN APP:', this.fieldSets[formNum]);
    console.log('HEADERS:', this.headers[formNum]);
    return React.createElement("div", {
      id: "app"
    }, React.createElement("button", {
      onClick: this.buttonClickHandler.bind(this)
    }, this.buttons[formNum]), this.fieldSets[formNum] ? React.createElement(Form, {
      header: this.headers[formNum],
      fields: this.fieldSets[formNum]
    }) : React.createElement("div", null), formNum === this.headers.length - 1 ? React.createElement(ConfirmationPage, null) : React.createElement("div", null));
  }

}

class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log('FORM PROPS:', props);
    this.state = this.state = this.props.fields.reduce((acc, field) => {
      acc[field] = '';
      return acc;
    }, {});
  }

  render() {
    const formFields = [];

    for (var field in this.state) {
      formFields.push(React.createElement(FormField, {
        name: this.state[field],
        labelText: labelKey[field]
      }));
    }

    return React.createElement("form", {
      id: "input-form"
    }, React.createElement("h2", null, this.props.header), formFields);
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbImxhYmVsS2V5IiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicGhvbmUiLCJjY051bWJlciIsImV4cCIsImN2diIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImJ1dHRvbnMiLCJoZWFkZXJzIiwiZmllbGRTZXRzIiwidW5kZWZpbmVkIiwibnVtIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwibmV4dEZvcm1OdW0iLCJsZW5ndGgiLCJzZXRTdGF0ZSIsInJlbmRlciIsImZvcm1OdW0iLCJjb25zb2xlIiwibG9nIiwiYmluZCIsIkZvcm0iLCJmaWVsZHMiLCJyZWR1Y2UiLCJhY2MiLCJmaWVsZCIsImZvcm1GaWVsZHMiLCJwdXNoIiwiaGVhZGVyIiwiRm9ybUZpZWxkIiwibGFiZWxUZXh0IiwiQ29uZmlybWF0aW9uUGFnZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxRQUFRLEdBQUc7QUFDZkMsRUFBQUEsSUFBSSxFQUFFLE1BRFM7QUFFZkMsRUFBQUEsS0FBSyxFQUFFLE9BRlE7QUFHZkMsRUFBQUEsUUFBUSxFQUFFLFVBSEs7QUFJZkMsRUFBQUEsS0FBSyxFQUFFLFFBSlE7QUFLZkMsRUFBQUEsS0FBSyxFQUFFLFFBTFE7QUFNZkMsRUFBQUEsSUFBSSxFQUFFLE1BTlM7QUFPZkMsRUFBQUEsS0FBSyxFQUFFLE9BUFE7QUFRZkMsRUFBQUEsR0FBRyxFQUFFLFVBUlU7QUFTZkMsRUFBQUEsS0FBSyxFQUFFLE9BVFE7QUFVZkMsRUFBQUEsUUFBUSxFQUFFLGFB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UUFBUSxDQUFDaEIsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCaUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXpCO0FBR0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBmb3JtVHlwZXMgPSB7XG4vLyAgIENIRUNPVVQ6IDAsXG4vLyAgIEFDQ09VTlQ6IDEsXG4vLyAgIEFERFJFU1M6IDIsXG4vLyAgIENSRURJVDogMyxcbi8vICAgQ09ORklSTTogNFxuLy8gfTtcblxuLy8gY29uc3QgZm9ybVRlbXBsYXRlcyA9IHtcbi8vICAgYnV0dG9uOiBbJ0NoZWNrb3V0JywgJ05leHQnLCAnTmV4dCcsICdOZXh0JywgJ1B1cmNoYXNlJ10sXG4vLyAgIGhlYWRlcjogWycnLCAnQWNjb3VudCBDcmVhdGlvbicsICdBZGRyZXNzJywgJ0NyZWRpdCBDYXJkIEluZm9ybWF0aW9uJywgJ0NvbmZpcm0gSW5mb3JtYXRpb24nXSxcbi8vICAgZmllbGRzOiBbXG4vLyAgICAge30sXG4vLyAgICAge25hbWU6ICdOYW1lJywgZW1haWw6ICdFbWFpbCcsIHBhc3N3b3JkOiAnUGFzc3dvcmQnfSxcbi8vICAgICB7YWRkcmVzczoge2xpbmUxOiAnTGluZSAxJywgbGluZTI6ICdMaW5lIDInLCBjaXR5OiAnQ2l0eScsIHN0YXRlOiAnU3RhdGUnLCB6aXA6ICdaaXAgQ29kZScsIHBob25lOiAnUGhvbmUnfX0sXG4vLyAgICAge2NjOiB7bnVtYmVyOiAnQ2FyZCBOdW1iZXInLCBleHA6ICdFeHBpcmF0aW9uIERhdGUnLCBjdnY6ICdDVlYnLCB6aXA6ICdCaWxsaW5nIFppcCd9fSxcbi8vICAgICB7fVxuLy8gICBdXG4vLyB9O1xuY29uc3QgbGFiZWxLZXkgPSB7XG4gIG5hbWU6ICdOYW1lJyxcbiAgZW1haWw6ICdFbWFpbCcsXG4gIHBhc3N3b3JkOiAnUGFzc3dvcmQnLFxuICBsaW5lMTogJ0xpbmUgMScsIFxuICBsaW5lMjogJ0xpbmUgMicsXG4gIGNpdHk6ICdDaXR5JywgXG4gIHN0YXRlOiAnU3RhdGUnLCBcbiAgemlwOiAnWmlwIENvZGUnLFxuICBwaG9uZTogJ1Bob25lJyxcbiAgY2NOdW1iZXI6ICdDYXJkIE51bWJlcicsXG4gIGV4cDogJ0V4cGlyYXRpb24gRGF0ZScsXG4gIGN2djogJ0NWVicsXG4gIHppcDogJ0JpbGxpbmcgWmlwJ1xufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmJ1dHRvbnMgPSBbJ0NoZWNrb3V0JywgJ05leHQnLCAnTmV4dCcsICdOZXh0JywgJ1B1cmNoYXNlJ107XG4gICAgdGhpcy5oZWFkZXJzID0gWycnLCAnQWNjb3VudCBDcmVhdGlvbicsICdBZGRyZXNzJywgJ0NyZWRpdCBDYXJkIEluZm9ybWF0aW9uJywgJ0NvbmZpcm0gSW5mb3JtYXRpb24nXTtcbiAgICB0aGlzLmZpZWxkU2V0cyA9IFtcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIFsnbmFtZScsICdlbWFpbCcsICdwYXNzd29yZCddLFxuICAgICAgWydsaW5lMScsICdsaW5lMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdwaG9uZSddLFxuICAgICAgWydjY051bWJlcicsICdleHAnLCAnY3Z2JywgJ3ppcCddLFxuICAgICAgdW5kZWZpbmVkXG4gICAgXTtcbiAgICB0aGlzLnN0YXRlID0ge251bTogMH07XG4gIH1cblxuICBidXR0b25DbGlja0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbmV4dEZvcm1OdW0gPSB0aGlzLnN0YXRlLm51bSA9PT0gdGhpcy5oZWFkZXJzLmxlbmd0aCAtIDEgPyAwIDogdGhpcy5zdGF0ZS5udW0gKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBudW06IG5leHRGb3JtTnVtIH0pOyBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmb3JtTnVtID0gdGhpcy5zdGF0ZS5udW07XG4gICAgY29uc29sZS5sb2coJ0lOIEFQUDonLCB0aGlzLmZpZWxkU2V0c1tmb3JtTnVtXSk7XG4gICAgY29uc29sZS5sb2coJ0hFQURFUlM6JywgdGhpcy5oZWFkZXJzW2Zvcm1OdW1dKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J2FwcCc+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5idXR0b25DbGlja0hhbmRsZXIuYmluZCh0aGlzKX0+e3RoaXMuYnV0dG9uc1tmb3JtTnVtXX08L2J1dHRvbj5cbiAgICAgICAgeyB0aGlzLmZpZWxkU2V0c1tmb3JtTnVtXSA/IDxGb3JtIGhlYWRlcj17dGhpcy5oZWFkZXJzW2Zvcm1OdW1dfSBmaWVsZHM9e3RoaXMuZmllbGRTZXRzW2Zvcm1OdW1dfS8+IDogPGRpdj48L2Rpdj4gfVxuICAgICAgICB7IGZvcm1OdW0gPT09IHRoaXMuaGVhZGVycy5sZW5ndGggLSAxID8gPENvbmZpcm1hdGlvblBhZ2UgLz4gOiA8ZGl2PjwvZGl2PiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZygnRk9STSBQUk9QUzonLCBwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPSB0aGlzLnByb3BzLmZpZWxkcy5yZWR1Y2UoKGFjYywgZmllbGQpID0+IHtcbiAgICAgIGFjY1tmaWVsZF0gPSAnJztcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgZm9ybUZpZWxkcyA9IFtdO1xuICAgIFxuICAgIGZvciAodmFyIGZpZWxkIGluIHRoaXMuc3RhdGUpIHtcbiAgICAgIGZvcm1GaWVsZHMucHVzaCg8Rm9ybUZpZWxkIG5hbWU9e3RoaXMuc3RhdGVbZmllbGRdfSBsYWJlbFRleHQ9e2xhYmVsS2V5W2ZpZWxkXX0gLz4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBpZD0naW5wdXQtZm9ybSc+XG4gICAgICAgIDxoMj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9oMj5cbiAgICAgICAge2Zvcm1GaWVsZHN9XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGb3JtRmllbGQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPntwcm9wcy5sYWJlbFRleHR9PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb25maXJtYXRpb25QYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+TmFtZTo8L2Rpdj48c3Bhbj5Cb2I8L3NwYW4+XG4gICAgICA8ZGl2PkVtYWlsOjwvZGl2PjxzcGFuPmJvYkBnbWFpbC5jb208L3NwYW4+XG4gICAgICA8ZGl2PlBhc3N3b3JkOjwvZGl2PjxzcGFuPjEyM1Bhc3M8L3NwYW4+XG4gICAgICA8ZGl2PkxpbmUgMTo8L2Rpdj48c3Bhbj4xMjM0IEEgU3RyZWV0PC9zcGFuPlxuICAgICAgPGRpdj5MaW5lIDI6PC9kaXY+PHNwYW4+PC9zcGFuPlxuICAgICAgPGRpdj5DaXR5OjwvZGl2PjxzcGFuPlNhbiBGcmFuY2lzY288L3NwYW4+XG4gICAgICA8ZGl2PlN0YXRlOjwvZGl2PjxzcGFuPkNBPC9zcGFuPlxuICAgICAgPGRpdj5aaXBjb2RlOjwvZGl2PjxzcGFuPjk0OTAxPC9zcGFuPlxuICAgICAgPGRpdj5QaG9uZSBOdW1iZXI6PC9kaXY+PHNwYW4+MTIzIDQ1NiA3ODk8L3NwYW4+XG4gICAgICA8ZGl2PkNhcmQgTnVtYmVyOjwvZGl2PjxzcGFuPjEyMzg5NDk4NTwvc3Bhbj5cbiAgICAgIDxkaXY+RXhwOjwvZGl2PjxzcGFuPjEyLzI0LzIwMTg8L3NwYW4+XG4gICAgICA8ZGl2PkNWVjo8L2Rpdj48c3Bhbj4yMzM8L3NwYW4+XG4gICAgICA8ZGl2PlppcCBDb2RlOjwvZGl2PjxzcGFuPjk0OTAxPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNPTlRST0xMRVJTXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=