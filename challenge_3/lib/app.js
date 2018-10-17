"use strict";

function NavButton() {
  return React.createElement("div", null, React.createElement("button", null, "checkout"), React.createElement(NameEmailPassword, null));
}

function NameEmailPassword() {
  return React.createElement("form", null, React.createElement("label", null, "Name"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Email"), React.createElement("input", {
    type: "text"
  }), React.createElement("label", null, "Password"), React.createElement("input", {
    type: "text"
  }));
}

ReactDOM.render(React.createElement(NavButton, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIk5hdkJ1dHRvbiIsIk5hbWVFbWFpbFBhc3N3b3JkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUNBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FDRSxpQ0FDRSwrQ0FERixFQUVFLG9CQUFDLGlCQUFELE9BRkYsQ0FERjtBQU1EOztBQUVELFNBQVNDLGlCQUFULEdBQTZCO0FBQzNCLFNBQ0Usa0NBQ0UsMENBREYsRUFDcUI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBRHJCLEVBRUUsMkNBRkYsRUFFc0I7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBRnRCLEVBR0UsOENBSEYsRUFHeUI7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBSHpCLENBREY7QUFPRDs7QUFJREMsUUFBUSxDQUFDQyxNQUFULENBQWdCLG9CQUFDLFNBQUQsT0FBaEIsRUFBK0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gTmF2QnV0dG9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uPmNoZWNrb3V0PC9idXR0b24+XG4gICAgICA8TmFtZUVtYWlsUGFzc3dvcmQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTmFtZUVtYWlsUGFzc3dvcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+PGlucHV0IHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPjxpbnB1dCB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPE5hdkJ1dHRvbiAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cbiJdfQ==