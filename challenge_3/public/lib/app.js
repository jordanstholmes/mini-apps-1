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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = ['Checkout', 'Next', 'Next', 'Next', 'Purchase'];
    this.headers = ['', 'Account Creation', 'Address', 'Credit Card Information', 'Confirm Information'];
    this.fieldSets = [undefined, {
      name: 'Name',
      email: 'Email',
      password: 'Password'
    }, {
      address: {
        line1: 'Line 1',
        line2: 'Line 2',
        city: 'City',
        state: 'State',
        zip: 'Zip Code',
        phone: 'Phone'
      }
    }, {
      cc: {
        number: 'Card Number',
        exp: 'Expiration Date',
        cvv: 'CVV',
        zip: 'Billing Zip'
      }
    }, undefined];
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
    return React.createElement("div", {
      id: "app"
    }, React.createElement("button", {
      onClick: this.buttonClickHandler.bind(this)
    }, this.buttons[formNum]), React.createElement(Form, {
      header: this.headers[formNum],
      fields: this.fieldSets[formNum]
    }), formNum === this.headers.length - 1 ? React.createElement(ConfirmationPage, null) : '');
  }

}
/*
Refactor Form into a class component
*/


function Form(props) {
  var formFields = '';

  if (props.fields) {
    formFields = [];

    for (var field in props.fields) {
      formFields.push(React.createElement(FormField, {
        labelText: props.fields[field]
      }));
    }
  }

  return React.createElement("form", {
    id: "input-form"
  }, React.createElement("h2", null, props.header), formFields);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImJ1dHRvbnMiLCJoZWFkZXJzIiwiZmllbGRTZXRzIiwidW5kZWZpbmVkIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJhZGRyZXNzIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJzdGF0ZSIsInppcCIsInBob25lIiwiY2MiLCJudW1iZXIiLCJleHAiLCJjdnYiLCJudW0iLCJidXR0b25DbGlja0hhbmRsZXIiLCJuZXh0Rm9ybU51bSIsImxlbmd0aCIsInNldFN0YXRlIiwicmVuZGVyIiwiZm9ybU51bSIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiRm9ybSIsImZvcm1GaWVsZHMiLCJmaWVsZHMiLCJmaWVsZCIsInB1c2giLCJoZWFkZXIiLCJGb3JtRmllbGQiLCJsYWJlbFRleHQiLCJDb25maXJtYXRpb25QYWdlIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBaUM7QUFDL0JDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxVQUFyQyxDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLENBQUMsRUFBRCxFQUFLLGtCQUFMLEVBQXlCLFNBQXpCLEVBQW9DLHlCQUFwQyxFQUErRCxxQkFBL0QsQ0FBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FDZkMsU0FEZSxFQUVm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QyxnQkFBVCxDQUEwQnJDLEtBQTFCLEVBQWlDO0FBQy9CLFNBQ0UsaUNBQ0UseUNBREYsRUFDa0Isd0NBRGxCLEVBRUUsMENBRkYsRUFFbUIsa0RBRm5CLEVBR0UsNkNBSEYsRUFHc0IsNENBSHRCLEVBSUUsMkNBSkYsRUFJb0Isa0RBSnBCLEVBS0UsMkNBTEYsRUFLb0IsaUNBTHBCLEVBTUUseUNBTkYsRUFNa0Isa0RBTmxCLEVBT0UsMENBUEYsRUFPbUIsdUNBUG5CLEVBUUUsNENBUkYsRUFRcUIsMENBUnJCLEVBU0UsaURBVEYsRUFTMEIsZ0RBVDFCLEVBVUUsZ0RBVkYsRUFVeUIsOENBVnpCLEVBV0Usd0NBWEYsRUFXaUIsK0NBWGpCLEVBWUUsd0NBWkYsRUFZaUIsd0NBWmpCLEVBYUUsNkNBYkYsRUFhc0IsMENBYnRCLENBREY7QUFpQkQ7O0FBRURzQyxRQUFRLENBQUNkLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QmUsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXpCO0FBR0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBmb3JtVHlwZXMgPSB7XG4vLyAgIENIRUNPVVQ6IDAsXG4vLyAgIEFDQ09VTlQ6IDEsXG4vLyAgIEFERFJFU1M6IDIsXG4vLyAgIENSRURJVDogMyxcbi8vICAgQ09ORklSTTogNFxuLy8gfTtcblxuLy8gY29uc3QgZm9ybVRlbXBsYXRlcyA9IHtcbi8vICAgYnV0dG9uOiBbJ0NoZWNrb3V0JywgJ05leHQnLCAnTmV4dCcsICdOZXh0JywgJ1B1cmNoYXNlJ10sXG4vLyAgIGhlYWRlcjogWycnLCAnQWNjb3VudCBDcmVhdGlvbicsICdBZGRyZXNzJywgJ0NyZWRpdCBDYXJkIEluZm9ybWF0aW9uJywgJ0NvbmZpcm0gSW5mb3JtYXRpb24nXSxcbi8vICAgZmllbGRzOiBbXG4vLyAgICAge30sXG4vLyAgICAge25hbWU6ICdOYW1lJywgZW1haWw6ICdFbWFpbCcsIHBhc3N3b3JkOiAnUGFzc3dvcmQnfSxcbi8vICAgICB7YWRkcmVzczoge2xpbmUxOiAnTGluZSAxJywgbGluZTI6ICdMaW5lIDInLCBjaXR5OiAnQ2l0eScsIHN0YXRlOiAnU3RhdGUnLCB6aXA6ICdaaXAgQ29kZScsIHBob25lOiAnUGhvbmUnfX0sXG4vLyAgICAge2NjOiB7bnVtYmVyOiAnQ2FyZCBOdW1iZXInLCBleHA6ICdFeHBpcmF0aW9uIERhdGUnLCBjdnY6ICdDVlYnLCB6aXA6ICdCaWxsaW5nIFppcCd9fSxcbi8vICAgICB7fVxuLy8gICBdXG4vLyB9O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuYnV0dG9ucyA9IFsnQ2hlY2tvdXQnLCAnTmV4dCcsICdOZXh0JywgJ05leHQnLCAnUHVyY2hhc2UnXTtcbiAgICB0aGlzLmhlYWRlcnMgPSBbJycsICdBY2NvdW50IENyZWF0aW9uJywgJ0FkZHJlc3MnLCAnQ3JlZGl0IENhcmQgSW5mb3JtYXRpb24nLCAnQ29uZmlybSBJbmZvcm1hdGlvbiddO1xuICAgIHRoaXMuZmllbGRTZXRzID0gW1xuICAgICAgdW5kZWZpbmVkLFxuICAgICAge25hbWU6ICdOYW1lJywgZW1haWw6ICdFbWFpbCcsIHBhc3N3b3JkOiAnUGFzc3dvcmQnfSxcbiAgICAgIHthZGRyZXNzOiB7bGluZTE6ICdMaW5lIDEnLCBsaW5lMjogJ0xpbmUgMicsIGNpdHk6ICdDaXR5Jywgc3RhdGU6ICdTdGF0ZScsIHppcDogJ1ppcCBDb2RlJywgcGhvbmU6ICdQaG9uZSd9fSxcbiAgICAgIHtjYzoge251bWJlcjogJ0NhcmQgTnVtYmVyJywgZXhwOiAnRXhwaXJhdGlvbiBEYXRlJywgY3Z2OiAnQ1ZWJywgemlwOiAnQmlsbGluZyBaaXAnfX0sXG4gICAgICB1bmRlZmluZWRcbiAgICBdXG4gICAgdGhpcy5zdGF0ZSA9IHtudW06IDB9O1xuICB9XG5cbiAgYnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xuICAgIGNvbnN0IG5leHRGb3JtTnVtID0gdGhpcy5zdGF0ZS5udW0gPT09IHRoaXMuaGVhZGVycy5sZW5ndGggLSAxID8gMCA6IHRoaXMuc3RhdGUubnVtICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbnVtOiBuZXh0Rm9ybU51bSB9KTsgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZm9ybU51bSA9IHRoaXMuc3RhdGUubnVtO1xuICAgIGNvbnNvbGUubG9nKCdJTiBBUFA6JywgdGhpcy5maWVsZFNldHNbZm9ybU51bV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J2FwcCc+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5idXR0b25DbGlja0hhbmRsZXIuYmluZCh0aGlzKX0+e3RoaXMuYnV0dG9uc1tmb3JtTnVtXX08L2J1dHRvbj5cbiAgICAgICAgPEZvcm0gaGVhZGVyPXt0aGlzLmhlYWRlcnNbZm9ybU51bV19IGZpZWxkcz17dGhpcy5maWVsZFNldHNbZm9ybU51bV19Lz5cbiAgICAgICAge1xuICAgICAgICAgIGZvcm1OdW0gPT09IHRoaXMuaGVhZGVycy5sZW5ndGggLSAxID8gPENvbmZpcm1hdGlvblBhZ2UgLz4gOiAnJ1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8qXG5SZWZhY3RvciBGb3JtIGludG8gYSBjbGFzcyBjb21wb25lbnRcbiovXG5cbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgdmFyIGZvcm1GaWVsZHMgPSAnJztcblxuICBpZiAocHJvcHMuZmllbGRzKSB7XG4gICAgZm9ybUZpZWxkcyA9IFtdO1xuICAgIGZvciAodmFyIGZpZWxkIGluIHByb3BzLmZpZWxkcykge1xuICAgICAgZm9ybUZpZWxkcy5wdXNoKDxGb3JtRmllbGQgbGFiZWxUZXh0PXtwcm9wcy5maWVsZHNbZmllbGRdfSAvPik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBpZD0naW5wdXQtZm9ybSc+XG4gICAgICA8aDI+e3Byb3BzLmhlYWRlcn08L2gyPlxuICAgICAge2Zvcm1GaWVsZHN9XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5mdW5jdGlvbiBGb3JtRmllbGQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPntwcm9wcy5sYWJlbFRleHR9PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb25maXJtYXRpb25QYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+TmFtZTo8L2Rpdj48c3Bhbj5Cb2I8L3NwYW4+XG4gICAgICA8ZGl2PkVtYWlsOjwvZGl2PjxzcGFuPmJvYkBnbWFpbC5jb208L3NwYW4+XG4gICAgICA8ZGl2PlBhc3N3b3JkOjwvZGl2PjxzcGFuPjEyM1Bhc3M8L3NwYW4+XG4gICAgICA8ZGl2PkxpbmUgMTo8L2Rpdj48c3Bhbj4xMjM0IEEgU3RyZWV0PC9zcGFuPlxuICAgICAgPGRpdj5MaW5lIDI6PC9kaXY+PHNwYW4+PC9zcGFuPlxuICAgICAgPGRpdj5DaXR5OjwvZGl2PjxzcGFuPlNhbiBGcmFuY2lzY288L3NwYW4+XG4gICAgICA8ZGl2PlN0YXRlOjwvZGl2PjxzcGFuPkNBPC9zcGFuPlxuICAgICAgPGRpdj5aaXBjb2RlOjwvZGl2PjxzcGFuPjk0OTAxPC9zcGFuPlxuICAgICAgPGRpdj5QaG9uZSBOdW1iZXI6PC9kaXY+PHNwYW4+MTIzIDQ1NiA3ODk8L3NwYW4+XG4gICAgICA8ZGl2PkNhcmQgTnVtYmVyOjwvZGl2PjxzcGFuPjEyMzg5NDk4NTwvc3Bhbj5cbiAgICAgIDxkaXY+RXhwOjwvZGl2PjxzcGFuPjEyLzI0LzIwMTg8L3NwYW4+XG4gICAgICA8ZGl2PkNWVjo8L2Rpdj48c3Bhbj4yMzM8L3NwYW4+XG4gICAgICA8ZGl2PlppcCBDb2RlOjwvZGl2PjxzcGFuPjk0OTAxPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNPTlRST0xMRVJTXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=