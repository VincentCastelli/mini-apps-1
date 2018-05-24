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
      password: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      creditCardNumber: '',
      expirationDate: '',
      cvv: '',
      billingZipCode: ''
    };

    _this.handleCheckout = _this.handleCheckout.bind(_this);
    _this.handleFormOne = _this.handleFormOne.bind(_this);
    _this.handleFormTwo = _this.handleFormTwo.bind(_this);
    _this.handleFormThree = _this.handleFormThree.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
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
    value: function handleFormOne(evt) {
      this.setState({
        formOne: false,
        formTwo: true
      });
    }
  }, {
    key: 'handleFormTwo',
    value: function handleFormTwo(evt) {
      this.setState({
        formTwo: false,
        formThree: true
      });
    }
  }, {
    key: 'handleFormThree',
    value: function handleFormThree(evt) {
      this.setState({
        formThree: false,
        purchase: true
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evt) {
      this.setState(_defineProperty({}, evt.target.name, evt.target.value));
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
          React.createElement(FormOne, { name: this.state.name, email: this.state.email, password: this.state.password, handleFormOne: this.handleFormOne, handleChange: this.handleChange })
        ),
        this.state.formTwo && React.createElement(
          'div',
          null,
          React.createElement(FormTwo, { address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, phone: this.state.phone, handleFormTwo: this.handleFormTwo, handleChange: this.handleChange })
        ),
        this.state.formThree && React.createElement(
          'div',
          null,
          React.createElement(FormThree, { address: this.state.creditCardNumber, city: this.state.expirationDate, state: this.state.cvv, zip: this.state.billingZipCode, handleFormThree: this.handleFormThree, handleChange: this.handleChange })
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
      { id: 'form1' },
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

var FormTwo = function FormTwo(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'formTwo' },
        'Location Information'
      )
    ),
    React.createElement(
      'form',
      { id: 'form2' },
      React.createElement(
        'label',
        null,
        'Address:',
        React.createElement('input', { type: 'text', name: 'address', value: props.address, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'City:',
        React.createElement('input', { type: 'text', name: 'city', value: props.city, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'State:',
        React.createElement('input', { type: 'text', name: 'state', value: props.state, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'Zip Code:',
        React.createElement('input', { type: 'text', name: 'zip', value: props.zip, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'Phone:',
        React.createElement('input', { type: 'text', name: 'phone', value: props.phone, onChange: props.handleChange })
      )
    ),
    React.createElement(
      'button',
      {
        className: 'btn FormTwo', value: 'Submit',
        onClick: props.handleFormTwo },
      'Next'
    )
  );
};
// change input fields
var FormThree = function FormThree(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'formThree' },
        'Payment Information'
      )
    ),
    React.createElement(
      'form',
      { id: 'form3' },
      React.createElement(
        'label',
        null,
        'Address:',
        React.createElement('input', { type: 'text', name: 'creditCardNumber', value: props.creditCardNumber, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'City:',
        React.createElement('input', { type: 'text', name: 'expirationDate', value: props.expirationDate, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'State:',
        React.createElement('input', { type: 'text', name: 'cvv', value: props.cvv, onChange: props.handleChange })
      ),
      React.createElement(
        'label',
        null,
        'Zip Code:',
        React.createElement('input', { type: 'text', name: 'billingZipCode', value: props.billingZipCode, onChange: props.handleChange })
      )
    ),
    React.createElement(
      'button',
      {
        className: 'btn FormThree', value: 'Submit',
        onClick: props.handleFormThree },
      'Next'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaG9tZVBhZ2UiLCJmb3JtT25lIiwiZm9ybVR3byIsImZvcm1UaHJlZSIsInB1cmNoYXNlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJhZGRyZXNzIiwiY2l0eSIsInppcCIsInBob25lIiwiY3JlZGl0Q2FyZE51bWJlciIsImV4cGlyYXRpb25EYXRlIiwiY3Z2IiwiYmlsbGluZ1ppcENvZGUiLCJoYW5kbGVDaGVja291dCIsImJpbmQiLCJoYW5kbGVGb3JtT25lIiwiaGFuZGxlRm9ybVR3byIsImhhbmRsZUZvcm1UaHJlZSIsImhhbmRsZUNoYW5nZSIsInNldFN0YXRlIiwiZXZ0IiwidGFyZ2V0IiwidmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJIb21lUGFnZSIsIkZvcm1PbmUiLCJGb3JtVHdvIiwiRm9ybVRocmVlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxlQUFTLEtBRkU7QUFHWEMsZUFBUyxLQUhFO0FBSVhDLGlCQUFXLEtBSkE7QUFLWEMsZ0JBQVUsS0FMQztBQU1YQyxZQUFNLEVBTks7QUFPWEMsYUFBTyxFQVBJO0FBUVhDLGdCQUFVLEVBUkM7QUFTWEMsZUFBUyxFQVRFO0FBVVhDLFlBQU0sRUFWSztBQVdYVixhQUFPLEVBWEk7QUFZWFcsV0FBSyxFQVpNO0FBYVhDLGFBQU8sRUFiSTtBQWNYQyx3QkFBa0IsRUFkUDtBQWVYQyxzQkFBZ0IsRUFmTDtBQWdCWEMsV0FBSyxFQWhCTTtBQWlCWEMsc0JBQWdCO0FBakJMLEtB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RCxFQUEwRSxVQUFVZCxNQUFNdUIsWUFBMUY7QUFGRixPQURGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxnQkFBeEIsRUFBeUMsT0FBT3ZCLE1BQU1lLGNBQXRELEVBQXNFLFVBQVVmLE1BQU11QixZQUF0RjtBQUZGLE9BTEY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHVDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLEtBQXhCLEVBQThCLE9BQU92QixNQUFNZ0IsR0FBM0MsRUFBZ0QsVUFBVWhCLE1BQU11QixZQUFoRTtBQUZGLE9BVEY7QUFhRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHVDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGdCQUF4QixFQUF5QyxPQUFPdkIsTUFBTWlCLGNBQXRELEVBQXNFLFVBQVVqQixNQUFNdUIsWUFBdEY7QUFGRjtBQWJGLEtBSkY7QUFzQkU7QUFBQTtBQUFBO0FBQ0UsbUJBQVUsZUFEWixFQUM0QixPQUFNLFFBRGxDO0FBRUUsaUJBQVN2QixNQUFNc0IsZUFGakI7QUFFbUM7QUFGbkM7QUF0QkYsR0FERjtBQTRCRCxDQTlCRDs7QUFnQ0FjLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob21lUGFnZTogdHJ1ZSxcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogZmFsc2UsXG4gICAgICBmb3JtVGhyZWU6IGZhbHNlLFxuICAgICAgcHVyY2hhc2U6IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBhZGRyZXNzOiAnJyxcbiAgICAgIGNpdHk6ICcnLFxuICAgICAgc3RhdGU6ICcnLFxuICAgICAgemlwOiAnJyxcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIGNyZWRpdENhcmROdW1iZXI6ICcnLFxuICAgICAgZXhwaXJhdGlvbkRhdGU6ICcnLFxuICAgICAgY3Z2OiAnJyxcbiAgICAgIGJpbGxpbmdaaXBDb2RlOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoZWNrb3V0ID0gdGhpcy5oYW5kbGVDaGVja291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRm9ybU9uZSA9IHRoaXMuaGFuZGxlRm9ybU9uZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRm9ybVR3byA9IHRoaXMuaGFuZGxlRm9ybVR3by5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRm9ybVRocmVlID0gdGhpcy5oYW5kbGVGb3JtVGhyZWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGVja291dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhvbWVQYWdlOiBmYWxzZSxcbiAgICAgIGZvcm1PbmU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUZvcm1PbmUoZXZ0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtT25lOiBmYWxzZSxcbiAgICAgIGZvcm1Ud286IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGb3JtVHdvKGV2dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybVR3bzogZmFsc2UsXG4gICAgICBmb3JtVGhyZWU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGb3JtVGhyZWUoZXZ0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtVGhyZWU6IGZhbHNlLFxuICAgICAgcHVyY2hhc2U6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZ0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgW2V2dC50YXJnZXQubmFtZV06IGV2dC50YXJnZXQudmFsdWUgXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuaG9tZVBhZ2UgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhvbWVQYWdlIGhhbmRsZUNoZWNrb3V0PXt0aGlzLmhhbmRsZUNoZWNrb3V0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnN0YXRlLmZvcm1PbmUgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZvcm1PbmUgbmFtZT17dGhpcy5zdGF0ZS5uYW1lfSBlbWFpbD17dGhpcy5zdGF0ZS5lbWFpbH0gcGFzc3dvcmQ9e3RoaXMuc3RhdGUucGFzc3dvcmR9IGhhbmRsZUZvcm1PbmU9e3RoaXMuaGFuZGxlRm9ybU9uZX0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtVHdvICYmXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGb3JtVHdvIGFkZHJlc3M9e3RoaXMuc3RhdGUuYWRkcmVzc30gY2l0eT17dGhpcy5zdGF0ZS5jaXR5fSBzdGF0ZT17dGhpcy5zdGF0ZS5zdGF0ZX0gemlwPXt0aGlzLnN0YXRlLnppcH0gcGhvbmU9e3RoaXMuc3RhdGUucGhvbmV9IGhhbmRsZUZvcm1Ud289e3RoaXMuaGFuZGxlRm9ybVR3b30gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtVGhyZWUgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZvcm1UaHJlZSBhZGRyZXNzPXt0aGlzLnN0YXRlLmNyZWRpdENhcmROdW1iZXJ9IGNpdHk9e3RoaXMuc3RhdGUuZXhwaXJhdGlvbkRhdGV9IHN0YXRlPXt0aGlzLnN0YXRlLmN2dn0gemlwPXt0aGlzLnN0YXRlLmJpbGxpbmdaaXBDb2RlfSBoYW5kbGVGb3JtVGhyZWU9e3RoaXMuaGFuZGxlRm9ybVRocmVlfSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmxldCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZVBhZ2VcIj5Ib21lUGFnZTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIENoZWNrb3V0XCJcbiAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlQ2hlY2tvdXR9PnsnQ2hlY2tvdXQnfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmxldCBGb3JtT25lID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1PbmVcIj5BY2NvdW50IEluZm9ybWF0aW9uPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvcm0gaWQ9XCJmb3JtMVwiPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTmFtZTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtwcm9wcy5uYW1lfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3Byb3BzLmVtYWlsfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwcm9wcy5wYXNzd29yZH0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIEZvcm1PbmVcIiB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUZvcm1PbmV9PnsnTmV4dCd9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmxldCBGb3JtVHdvID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1Ud29cIj5Mb2NhdGlvbiBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIGlkPVwiZm9ybTJcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEFkZHJlc3M6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3NcIiB2YWx1ZT17cHJvcHMuYWRkcmVzc30gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIENpdHk6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiB2YWx1ZT17cHJvcHMuY2l0eX0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIHZhbHVlPXtwcm9wcy5zdGF0ZX0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFppcCBDb2RlOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBcIiB2YWx1ZT17cHJvcHMuemlwfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgUGhvbmU6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgdmFsdWU9e3Byb3BzLnBob25lfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG4gRm9ybVR3b1wiIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlRm9ybVR3b30+eydOZXh0J308L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbi8vIGNoYW5nZSBpbnB1dCBmaWVsZHNcbmxldCBGb3JtVGhyZWUgPSAocHJvcHMpID0+IHsgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaHJlZVwiPlBheW1lbnQgSW5mb3JtYXRpb248L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBpZD1cImZvcm0zXCI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBBZGRyZXNzOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjcmVkaXRDYXJkTnVtYmVyXCIgdmFsdWU9e3Byb3BzLmNyZWRpdENhcmROdW1iZXJ9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBDaXR5OlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBpcmF0aW9uRGF0ZVwiIHZhbHVlPXtwcm9wcy5leHBpcmF0aW9uRGF0ZX0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdnZcIiB2YWx1ZT17cHJvcHMuY3Z2fSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgWmlwIENvZGU6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJpbGxpbmdaaXBDb2RlXCIgdmFsdWU9e3Byb3BzLmJpbGxpbmdaaXBDb2RlfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG4gRm9ybVRocmVlXCIgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVGb3JtVGhyZWV9PnsnTmV4dCd9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==