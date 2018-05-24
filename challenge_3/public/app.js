'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      homePage: true,
      formOne: false,
      formTwo: false,
      formThree: false,
      purchase: false,
      name: '',
      email: '',
      password: ''
    };

    _this.handleCheckout = _this.handleCheckout.bind(_this);
    _this.handleFormOne = _this.handleFormOne.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleFormOneSubmit = _this.handleFormOneSubmit.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleCheckout',
    value: function handleCheckout() {
      this.setState({
        homePage: false,
        formOne: true
      });
    }
  }, {
    key: 'handleFormOne',
    value: function handleFormOne() {
      this.setState({
        formOne: false,
        formTwo: true
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evt) {
      this.setState(_defineProperty({}, evt.target.name, evt.target.value));
      event.preventDefault();
    }
  }, {
    key: 'handleFormOneSubmit',
    value: function handleFormOneSubmit(event) {
      this.setState({
        formOneValue: this.state.value
      });
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.homePage && React.createElement(
          'div',
          null,
          React.createElement(HomePage, { handleCheckout: this.handleCheckout })
        ),
        this.state.formOne && React.createElement(
          'div',
          null,
          React.createElement(FormOne, { name: this.state.name, email: this.state.email, password: this.state.password, handleFormOne: this.handleFormOne, handleFormOneSubmit: this.handleFormOneSubmit, handleChange: this.handleChange })
        )
      );
    }
  }]);

  return App;
}(React.Component);

var HomePage = function HomePage(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'homePage' },
        'HomePage'
      )
    ),
    React.createElement(
      'button',
      {
        className: 'btn Checkout',
        onClick: props.handleCheckout },
      'Checkout'
    )
  );
};

var FormOne = function FormOne(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'formOne' },
        'Account Information'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: props.handleFormOneSubmit },
      React.createElement(
        'label',
        null,
        'Name:',
        React.createElement('input', { type: 'text', name: 'name', value: props.name, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'Email:',
        React.createElement('input', { type: 'text', name: 'email', value: props.email, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'Password:',
        React.createElement('input', { type: 'password', name: 'password', value: props.password, onChange: props.handleChange })
      )
    ),
    React.createElement(
      'button',
      {
        className: 'btn FormOne', value: 'Submit',
        onClick: props.handleFormOne },
      'Next'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaG9tZVBhZ2UiLCJmb3JtT25lIiwiZm9ybVR3byIsImZvcm1UaHJlZSIsInB1cmNoYXNlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGVja291dCIsImJpbmQiLCJoYW5kbGVGb3JtT25lIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlRm9ybU9uZVN1Ym1pdCIsInNldFN0YXRlIiwiZXZ0IiwidGFyZ2V0IiwidmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybU9uZVZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJIb21lUGFnZSIsIkZvcm1PbmUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGVBQVMsS0FGRTtBQUdYQyxlQUFTLEtBSEU7QUFJWEMsaUJBQVcsS0FKQTtBQUtYQyxnQkFBVSxLQUxDO0FBTVhDLFlBQU0sRUFOSztBQU9YQyxhQUFPLEVBUEk7QUFRWEMsZ0JBQVU7QUFSQyxLQUFiOztBQVdBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQixPQUFwQjtBQUNBLFVBQUtHLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCSCxJQUF6QixPQUEzQjtBQWpCaUI7QUFrQmxCOzs7O3FDQUVnQjtBQUNmLFdBQUtJLFFBQUwsQ0FBYztBQUNaYixrQkFBVSxLQURFO0FBRVpDLGlCQUFTO0FBRkcsT0FBZDtBQUlEOzs7b0NBRWU7QUFDZCxXQUFLWSxRQUFMLENBQWM7QUFDWlosaUJBQVMsS0FERztBQUVaQyxpQkFBUztBQUZHLE9BQWQ7QUFJRDs7O2lDQUVZWSxHLEVBQUs7QUFDaEIsV0FBS0QsUUFBTCxxQkFDR0MsSUFBSUMsTUFBSixDQUFXVixJQURkLEVBQ3FCUyxJQUFJQyxNQUFKLENBQVdDLEtBRGhDO0FBR0FDLFlBQU1DLGNBQU47QUFDRDs7O3dDQUVtQkQsSyxFQUFPO0FBQ3pCLFdBQUtKLFFBQUwsQ0FBYztBQUNaTSxzQkFBYyxLQUFLcEIsS0FBTCxDQUFXaUI7QUFEYixPQUFkO0FBR0FDLFlBQU1DLGNBQU47QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRyxhQUFLbkIsS0FBTCxDQUFXQyxRQUFYLElBQ0M7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsUUFBRCxJQUFVLGdCQUFnQixLQUFLUSxjQUEvQjtBQURGLFNBRko7QUFNRyxhQUFLVCxLQUFMLENBQVdFLE9BQVgsSUFDQztBQUFBO0FBQUE7QUFDRSw4QkFBQyxPQUFELElBQVMsTUFBTSxLQUFLRixLQUFMLENBQVdNLElBQTFCLEVBQWdDLE9BQU8sS0FBS04sS0FBTCxDQUFXTyxLQUFsRCxFQUF5RCxVQUFVLEtBQUtQLEtBQUwsQ0FBV1EsUUFBOUUsRUFBd0YsZUFBZSxLQUFLRyxhQUE1RyxFQUEySCxxQkFBcUIsS0FBS0UsbUJBQXJKLEVBQTBLLGNBQWMsS0FBS0QsWUFBN0w7QUFERjtBQVBKLE9BREY7QUFjRDs7OztFQWhFZVMsTUFBTUMsUzs7QUFtRXhCLElBQUlDLFdBQVcsU0FBWEEsUUFBVyxDQUFDeEIsS0FBRCxFQUFXO0FBQ3hCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxVQUFkO0FBQUE7QUFBQTtBQURGLEtBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSxtQkFBVSxjQURaO0FBRUUsaUJBQVNBLE1BQU1VLGNBRmpCO0FBRWtDO0FBRmxDO0FBSkYsR0FERjtBQVVELENBWEQ7O0FBYUEsSUFBSWUsVUFBVSxTQUFWQSxPQUFVLENBQUN6QixLQUFELEVBQVc7QUFDdkIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLFNBQWQ7QUFBQTtBQUFBO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFNLFVBQVVBLE1BQU1jLG1CQUF0QjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsT0FBT2QsTUFBTU8sSUFBNUMsRUFBa0QsVUFBVVAsTUFBTWEsWUFBbEU7QUFGRixPQURGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxPQUFPYixNQUFNUSxLQUE3QyxFQUFvRCxVQUFVUixNQUFNYSxZQUFwRTtBQUZGLE9BTEY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHVDQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLE9BQU9iLE1BQU1TLFFBQXBELEVBQThELFVBQVVULE1BQU1hLFlBQTlFO0FBRkY7QUFURixLQUpGO0FBa0JFO0FBQUE7QUFBQTtBQUNFLG1CQUFVLGFBRFosRUFDMEIsT0FBTSxRQURoQztBQUVFLGlCQUFTYixNQUFNWSxhQUZqQjtBQUVpQztBQUZqQztBQWxCRixHQURGO0FBd0JELENBekJEOztBQTJCQWMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvbWVQYWdlOiB0cnVlLFxuICAgICAgZm9ybU9uZTogZmFsc2UsXG4gICAgICBmb3JtVHdvOiBmYWxzZSxcbiAgICAgIGZvcm1UaHJlZTogZmFsc2UsXG4gICAgICBwdXJjaGFzZTogZmFsc2UsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoZWNrb3V0ID0gdGhpcy5oYW5kbGVDaGVja291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRm9ybU9uZSA9IHRoaXMuaGFuZGxlRm9ybU9uZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZvcm1PbmVTdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1PbmVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrb3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaG9tZVBhZ2U6IGZhbHNlLFxuICAgICAgZm9ybU9uZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRm9ybU9uZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIFtldnQudGFyZ2V0Lm5hbWVdOiBldnQudGFyZ2V0LnZhbHVlIFxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVGb3JtT25lU3VibWl0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtT25lVmFsdWU6IHRoaXMuc3RhdGUudmFsdWVcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5ob21lUGFnZSAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SG9tZVBhZ2UgaGFuZGxlQ2hlY2tvdXQ9e3RoaXMuaGFuZGxlQ2hlY2tvdXR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUuZm9ybU9uZSAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Rm9ybU9uZSBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9IGVtYWlsPXt0aGlzLnN0YXRlLmVtYWlsfSBwYXNzd29yZD17dGhpcy5zdGF0ZS5wYXNzd29yZH0gaGFuZGxlRm9ybU9uZT17dGhpcy5oYW5kbGVGb3JtT25lfSBoYW5kbGVGb3JtT25lU3VibWl0PXt0aGlzLmhhbmRsZUZvcm1PbmVTdWJtaXR9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxubGV0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lUGFnZVwiPkhvbWVQYWdlPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG4gQ2hlY2tvdXRcIlxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDaGVja291dH0+eydDaGVja291dCd9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxubGV0IEZvcm1PbmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1PbmVcIj5BY2NvdW50IEluZm9ybWF0aW9uPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLmhhbmRsZUZvcm1PbmVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTmFtZTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtwcm9wcy5uYW1lfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3Byb3BzLmVtYWlsfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwcm9wcy5wYXNzd29yZH0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIEZvcm1PbmVcIiB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUZvcm1PbmV9PnsnTmV4dCd9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==