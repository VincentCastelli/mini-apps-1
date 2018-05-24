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
      formOneValue: null,
      formTwo: false,
      formThree: false,
      purchase: false
    };

    _this.handleCheckout = _this.handleCheckout.bind(_this);
    _this.handleFormOne = _this.handleFormOne.bind(_this);
    _this.handleFormOneSubmit = _this.handleFormOneChange.bind(_this);
    _this.handleFormOneSubmit = _this.handleFormOneSubmit.bind(_this);
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
    key: "handleFormOne",
    value: function handleFormOne() {
      this.setState({
        formOne: false,
        formTwo: true
      });
    }
  }, {
    key: "handleFormOneChange",
    value: function handleFormOneChange(event) {
      this.setState({
        formOneValue: event.target.value
      });
      event.preventDefault();
    }
  }, {
    key: "handleFormOneSubmit",
    value: function handleFormOneSubmit(event) {
      this.setState({
        formOneValue: this.state.value
      });
      event.preventDefault();
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
          React.createElement(FormOne, { formOneValue: this.state.formOneValue, handleFormOne: this.handleFormOne, handleFormOneSubmit: this.handleFormOneSubmit, handleFormOneChange: this.handleFormOneChange })
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
        className: "btn Checkout",
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
      "div",
      null,
      React.createElement(
        "h1",
        { className: "formOne" },
        "Account Information"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: props.handleFormOneSubmit },
      React.createElement(
        "label",
        null,
        "Name:",
        React.createElement("input", { type: "text", value: props.formOneValue, onChange: props.handleFormOneChange })
      ),
      React.createElement(
        "label",
        null,
        "Email:",
        React.createElement("input", { type: "text", value: props.formOneValue, onChange: props.handleFormOneChange })
      ),
      React.createElement(
        "label",
        null,
        "Password:",
        React.createElement("input", { type: "text", value: props.formOneValue, onChange: props.handleFormOneChange })
      )
    ),
    React.createElement(
      "button",
      {
        className: "btn FormOne", value: "Submit",
        onClick: props.handleFormOne },
      'Next'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaG9tZVBhZ2UiLCJmb3JtT25lIiwiZm9ybU9uZVZhbHVlIiwiZm9ybVR3byIsImZvcm1UaHJlZSIsInB1cmNoYXNlIiwiaGFuZGxlQ2hlY2tvdXQiLCJiaW5kIiwiaGFuZGxlRm9ybU9uZSIsImhhbmRsZUZvcm1PbmVTdWJtaXQiLCJoYW5kbGVGb3JtT25lQ2hhbmdlIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhvbWVQYWdlIiwiRm9ybU9uZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGVBQVMsS0FGRTtBQUdYQyxvQkFBYyxJQUhIO0FBSVhDLGVBQVMsS0FKRTtBQUtYQyxpQkFBVyxLQUxBO0FBTVhDLGdCQUFVO0FBTkMsS0FBYjs7QUFTQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVBQUtFLG1CQUFMLEdBQTJCLE1BQUtDLG1CQUFMLENBQXlCSCxJQUF6QixPQUEzQjtBQUNBLFVBQUtFLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCRixJQUF6QixPQUEzQjtBQWZpQjtBQWdCbEI7Ozs7cUNBRWdCO0FBQ2YsV0FBS0ksUUFBTCxDQUFjO0FBQ1pYLGtCQUFVLEtBREU7QUFFWkMsaUJBQVM7QUFGRyxPQUFkO0FBSUQ7OztvQ0FFZTtBQUNkLFdBQUtVLFFBQUwsQ0FBYztBQUNaVixpQkFBUyxLQURHO0FBRVpFLGlCQUFTO0FBRkcsT0FBZDtBQUlEOzs7d0NBRW1CUyxLLEVBQU87QUFDekIsV0FBS0QsUUFBTCxDQUFjO0FBQ1pULHNCQUFjVSxNQUFNQyxNQUFOLENBQWFDO0FBRGYsT0FBZDtBQUdBRixZQUFNRyxjQUFOO0FBQ0Q7Ozt3Q0FFbUJILEssRUFBTztBQUN6QixXQUFLRCxRQUFMLENBQWM7QUFDWlQsc0JBQWMsS0FBS0gsS0FBTCxDQUFXZTtBQURiLE9BQWQ7QUFHQUYsWUFBTUcsY0FBTjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNHLGFBQUtoQixLQUFMLENBQVdDLFFBQVgsSUFDQztBQUFBO0FBQUE7QUFDRSw4QkFBQyxRQUFELElBQVUsZ0JBQWdCLEtBQUtNLGNBQS9CO0FBREYsU0FGSjtBQU1HLGFBQUtQLEtBQUwsQ0FBV0UsT0FBWCxJQUNDO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE9BQUQsSUFBUyxjQUFjLEtBQUtGLEtBQUwsQ0FBV0csWUFBbEMsRUFBZ0QsZUFBZSxLQUFLTSxhQUFwRSxFQUFtRixxQkFBcUIsS0FBS0MsbUJBQTdHLEVBQWtJLHFCQUFxQixLQUFLQyxtQkFBNUo7QUFERjtBQVBKLE9BREY7QUFjRDs7OztFQTlEZU0sTUFBTUMsUzs7QUFpRXhCLElBQUlDLFdBQVcsU0FBWEEsUUFBVyxDQUFDcEIsS0FBRCxFQUFXO0FBQ3hCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxVQUFkO0FBQUE7QUFBQTtBQURGLEtBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSxtQkFBVSxjQURaO0FBRUUsaUJBQVNBLE1BQU1RLGNBRmpCO0FBRWtDO0FBRmxDO0FBSkYsR0FERjtBQVVELENBWEQ7O0FBYUEsSUFBSWEsVUFBVSxTQUFWQSxPQUFVLENBQUNyQixLQUFELEVBQVc7QUFDdkIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLFNBQWQ7QUFBQTtBQUFBO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFNLFVBQVVBLE1BQU1XLG1CQUF0QjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUUsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU9YLE1BQU1JLFlBQWhDLEVBQThDLFVBQVVKLE1BQU1ZLG1CQUE5RDtBQUZGLE9BREY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUVFLHVDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPWixNQUFNSSxZQUFoQyxFQUE4QyxVQUFVSixNQUFNWSxtQkFBOUQ7QUFGRixPQUxGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFFRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBT1osTUFBTUksWUFBaEMsRUFBOEMsVUFBVUosTUFBTVksbUJBQTlEO0FBRkY7QUFURixLQUpGO0FBa0JFO0FBQUE7QUFBQTtBQUNFLG1CQUFVLGFBRFosRUFDMEIsT0FBTSxRQURoQztBQUVFLGlCQUFTWixNQUFNVSxhQUZqQjtBQUVpQztBQUZqQztBQWxCRixHQURGO0FBd0JELENBekJEOztBQTJCQVksU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvbWVQYWdlOiB0cnVlLFxuICAgICAgZm9ybU9uZTogZmFsc2UsXG4gICAgICBmb3JtT25lVmFsdWU6IG51bGwsXG4gICAgICBmb3JtVHdvOiBmYWxzZSxcbiAgICAgIGZvcm1UaHJlZTogZmFsc2UsXG4gICAgICBwdXJjaGFzZTogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGVja291dCA9IHRoaXMuaGFuZGxlQ2hlY2tvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZvcm1PbmUgPSB0aGlzLmhhbmRsZUZvcm1PbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZvcm1PbmVTdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1PbmVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZvcm1PbmVTdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1PbmVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrb3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaG9tZVBhZ2U6IGZhbHNlLFxuICAgICAgZm9ybU9uZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRm9ybU9uZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRm9ybU9uZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybU9uZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaGFuZGxlRm9ybU9uZVN1Ym1pdChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybU9uZVZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuaG9tZVBhZ2UgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhvbWVQYWdlIGhhbmRsZUNoZWNrb3V0PXt0aGlzLmhhbmRsZUNoZWNrb3V0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnN0YXRlLmZvcm1PbmUgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZvcm1PbmUgZm9ybU9uZVZhbHVlPXt0aGlzLnN0YXRlLmZvcm1PbmVWYWx1ZX0gaGFuZGxlRm9ybU9uZT17dGhpcy5oYW5kbGVGb3JtT25lfSBoYW5kbGVGb3JtT25lU3VibWl0PXt0aGlzLmhhbmRsZUZvcm1PbmVTdWJtaXR9IGhhbmRsZUZvcm1PbmVDaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybU9uZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5sZXQgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhvbWVQYWdlXCI+SG9tZVBhZ2U8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBDaGVja291dFwiXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNoZWNrb3V0fT57J0NoZWNrb3V0J308L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5sZXQgRm9ybU9uZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybU9uZVwiPkFjY291bnQgSW5mb3JtYXRpb248L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuaGFuZGxlRm9ybU9uZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOYW1lOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9wcy5mb3JtT25lVmFsdWV9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVGb3JtT25lQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRW1haWw6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb3BzLmZvcm1PbmVWYWx1ZX0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUZvcm1PbmVDaGFuZ2V9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuZm9ybU9uZVZhbHVlfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlRm9ybU9uZUNoYW5nZX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIEZvcm1PbmVcIiB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUZvcm1PbmV9PnsnTmV4dCd9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==