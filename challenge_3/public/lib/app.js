"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'checkout'
    };
  }

  render() {
    return React.createElement("div", {
      id: "app"
    }, React.createElement(NavButton, null), React.createElement(F1, null));
  }

}

function NavButton() {
  return React.createElement("div", null, React.createElement("button", null, "checkout"));
}

function F1() {
  return React.createElement("form", null, React.createElement("label", null, "Name"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Email"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Password"), React.createElement("input", {
    type: "text"
  }));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsInJlbmRlciIsIk5hdkJ1dHRvbiIsIkYxIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBaUM7QUFDL0JDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQVAsS0FBYjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxXQUNFO0FBQUssTUFBQSxFQUFFLEVBQUM7QUFBUixPQUNFLG9CQUFDLFNBQUQsT0FERixFQUVFLG9CQUFDLEVBQUQsT0FGRixDQURGO0FBTUQ7O0FBYjhCOztBQWdCakMsU0FBU0MsU0FBVCxHQUFxQjtBQUNuQixTQUNFLGlDQUNFLCtDQURGLENBREY7QUFLRDs7QUFFRCxTQUFTQyxFQUFULEdBQWM7QUFDWixTQUNFLGtDQUNFLDBDQURGLEVBQ3FCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQURyQixFQUVFLDJDQUZGLEVBRXNCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUZ0QixFQUdFLDhDQUhGLEVBR3lCO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQUh6QixDQURGO0FBT0Q7O0FBRURDLFFBQVEsQ0FBQ0gsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7Zm9ybTogJ2NoZWNrb3V0J31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD0nYXBwJz5cbiAgICAgICAgPE5hdkJ1dHRvbiAvPlxuICAgICAgICA8RjEgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gTmF2QnV0dG9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uPmNoZWNrb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEYxKCkge1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cbiJdfQ==