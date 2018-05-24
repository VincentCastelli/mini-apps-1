"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      purchase: false
    };

    _this.handleCheckout = _this.handleCheckout.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleCheckout",
    value: function handleCheckout() {
      this.setState({
        homePage: false,
        formOne: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.homePage && React.createElement(
          "div",
          null,
          React.createElement(HomePage, { handleCheckout: this.handleCheckout })
        ),
        this.state.formOne && React.createElement(
          "div",
          null,
          React.createElement(FormOne, null)
        )
      );
    }
  }]);

  return App;
}(React.Component);

var HomePage = function HomePage(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { className: "homePage" },
        "HomePage"
      )
    ),
    React.createElement(
      "button",
      {
        className: "btnCheckout",
        onClick: props.handleCheckout },
      'Checkout'
    )
  );
};

var FormOne = function FormOne(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { className: "formOne" },
      "Basic Information"
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaG9tZVBhZ2UiLCJmb3JtT25lIiwiZm9ybVR3byIsImZvcm1UaHJlZSIsInB1cmNoYXNlIiwiaGFuZGxlQ2hlY2tvdXQiLCJiaW5kIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhvbWVQYWdlIiwiRm9ybU9uZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGVBQVMsS0FGRTtBQUdYQyxlQUFTLEtBSEU7QUFJWEMsaUJBQVcsS0FKQTtBQUtYQyxnQkFBVTtBQUxDLEtBQWI7O0FBUUEsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQVhpQjtBQVlsQjs7OztxQ0FFZ0I7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFDWlAsa0JBQVUsS0FERTtBQUVaQyxpQkFBUztBQUZHLE9BQWQ7QUFJRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRyxhQUFLRixLQUFMLENBQVdDLFFBQVgsSUFDQztBQUFBO0FBQUE7QUFDRSw4QkFBQyxRQUFELElBQVUsZ0JBQWdCLEtBQUtLLGNBQS9CO0FBREYsU0FGSjtBQU1HLGFBQUtOLEtBQUwsQ0FBV0UsT0FBWCxJQUNDO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE9BQUQ7QUFERjtBQVBKLE9BREY7QUFjRDs7OztFQXJDZU8sTUFBTUMsUzs7QUF3Q3hCLElBQUlDLFdBQVcsU0FBWEEsUUFBVyxDQUFDWixLQUFELEVBQVc7QUFDeEIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLFVBQWQ7QUFBQTtBQUFBO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFLG1CQUFVLGFBRFo7QUFFRSxpQkFBU0EsTUFBTU8sY0FGakI7QUFFa0M7QUFGbEM7QUFKRixHQURGO0FBVUQsQ0FYRDs7QUFhQSxJQUFJTSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ2IsS0FBRCxFQUFXO0FBQ3ZCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUksV0FBVSxTQUFkO0FBQUE7QUFBQTtBQURGLEdBREY7QUFLRCxDQU5EOztBQVFBYyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG9tZVBhZ2U6IHRydWUsXG4gICAgICBmb3JtT25lOiBmYWxzZSxcbiAgICAgIGZvcm1Ud286IGZhbHNlLFxuICAgICAgZm9ybVRocmVlOiBmYWxzZSxcbiAgICAgIHB1cmNoYXNlOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoZWNrb3V0ID0gdGhpcy5oYW5kbGVDaGVja291dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2tvdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBob21lUGFnZTogZmFsc2UsXG4gICAgICBmb3JtT25lOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmhvbWVQYWdlICYmXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIb21lUGFnZSBoYW5kbGVDaGVja291dD17dGhpcy5oYW5kbGVDaGVja291dH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtT25lICYmXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGb3JtT25lIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxubGV0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lUGFnZVwiPkhvbWVQYWdlPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG5DaGVja291dFwiXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNoZWNrb3V0fT57J0NoZWNrb3V0J308L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5sZXQgRm9ybU9uZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybU9uZVwiPkJhc2ljIEluZm9ybWF0aW9uPC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=