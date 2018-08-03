(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addImg = exports.addToDom = exports.login = undefined;

var _users = __webpack_require__(/*! ./users */ "./src/users.js");

var _users2 = _interopRequireDefault(_users);

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(username, password) {
    var user = _users2.default[username];

    if (user && user.password === password) {
        return 'User logged in as: ' + user.name;
    }

    return 'Invalid username and/or password';
};

var addToDom = exports.addToDom = function addToDom(type, text) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'red';

    var element = (0, _jquery2.default)('<' + type + '>', {
        text: text,
        class: className
    });

    (0, _jquery2.default)('#root').append(element);
};

var addImg = exports.addImg = function addImg(src) {
    var img = (0, _jquery2.default)('<img>', { src: src });

    (0, _jquery2.default)('#root').append(img);
};

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    DiscoStu: {
        password: 'asdf',
        name: 'Stu Dunworth'
    },
    SassySally: {
        password: 'qwer',
        name: 'Heather Newman'
    },
    HopeWaits: {
        password: 'zxcv',
        name: 'Anna Smith'
    },
    DietCoke: {
        password: 'justforthetasteofit',
        name: 'Ben Hur'
    }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnMuanMiXSwibmFtZXMiOlsibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsInVzZXJzIiwibmFtZSIsImFkZFRvRG9tIiwidHlwZSIsInRleHQiLCJjbGFzc05hbWUiLCJlbGVtZW50IiwiY2xhc3MiLCJhcHBlbmQiLCJhZGRJbWciLCJzcmMiLCJpbWciLCJEaXNjb1N0dSIsIlNhc3N5U2FsbHkiLCJIb3BlV2FpdHMiLCJEaWV0Q29rZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSx3QkFBUSxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUN6QyxRQUFNQyxPQUFPQyxnQkFBTUgsUUFBTixDQUFiOztBQUVBLFFBQUdFLFFBQVFBLEtBQUtELFFBQUwsS0FBa0JBLFFBQTdCLEVBQXNDO0FBQ2xDLGVBQU8sd0JBQXdCQyxLQUFLRSxJQUFwQztBQUNIOztBQUVELFdBQU8sa0NBQVA7QUFDSCxDQVJNOztBQVVBLElBQU1DLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQW1DO0FBQUEsUUFBdEJDLFNBQXNCLHVFQUFWLEtBQVU7O0FBQ3ZELFFBQU1DLFVBQVUsNEJBQU1ILElBQU4sUUFBZTtBQUMzQkMsa0JBRDJCO0FBRTNCRyxlQUFPRjtBQUZvQixLQUFmLENBQWhCOztBQUtBLDBCQUFFLE9BQUYsRUFBV0csTUFBWCxDQUFrQkYsT0FBbEI7QUFDSCxDQVBNOztBQVNBLElBQU1HLDBCQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFTO0FBQzNCLFFBQU1DLE1BQU0sc0JBQUUsT0FBRixFQUFXLEVBQUVELFFBQUYsRUFBWCxDQUFaOztBQUVBLDBCQUFFLE9BQUYsRUFBV0YsTUFBWCxDQUFrQkcsR0FBbEI7QUFDSCxDQUpNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3RCUTtBQUNYQyxjQUFVO0FBQ05kLGtCQUFVLE1BREo7QUFFTkcsY0FBTTtBQUZBLEtBREM7QUFLWFksZ0JBQVk7QUFDUmYsa0JBQVUsTUFERjtBQUVSRyxjQUFNO0FBRkUsS0FMRDtBQVNYYSxlQUFXO0FBQ1BoQixrQkFBVSxNQURIO0FBRVBHLGNBQU07QUFGQyxLQVRBO0FBYVhjLGNBQVU7QUFDTmpCLGtCQUFVLHFCQURKO0FBRU5HLGNBQU07QUFGQTtBQWJDLEMiLCJmaWxlIjoiMC5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZXJzIGZyb20gJy4vdXNlcnMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSB1c2Vyc1t1c2VybmFtZV07XG5cbiAgICBpZih1c2VyICYmIHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkKXtcbiAgICAgICAgcmV0dXJuICdVc2VyIGxvZ2dlZCBpbiBhczogJyArIHVzZXIubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gJ0ludmFsaWQgdXNlcm5hbWUgYW5kL29yIHBhc3N3b3JkJztcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRvRG9tID0gKHR5cGUsIHRleHQsIGNsYXNzTmFtZSA9ICdyZWQnKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9ICQoYDwke3R5cGV9PmAsIHsgXG4gICAgICAgIHRleHQsXG4gICAgICAgIGNsYXNzOiBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgICQoJyNyb290JykuYXBwZW5kKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEltZyA9IChzcmMpID0+IHtcbiAgICBjb25zdCBpbWcgPSAkKCc8aW1nPicsIHsgc3JjIH0pO1xuXG4gICAgJCgnI3Jvb3QnKS5hcHBlbmQoaW1nKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBEaXNjb1N0dToge1xuICAgICAgICBwYXNzd29yZDogJ2FzZGYnLFxuICAgICAgICBuYW1lOiAnU3R1IER1bndvcnRoJ1xuICAgIH0sXG4gICAgU2Fzc3lTYWxseToge1xuICAgICAgICBwYXNzd29yZDogJ3F3ZXInLFxuICAgICAgICBuYW1lOiAnSGVhdGhlciBOZXdtYW4nXG4gICAgfSxcbiAgICBIb3BlV2FpdHM6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICd6eGN2JyxcbiAgICAgICAgbmFtZTogJ0FubmEgU21pdGgnLFxuICAgIH0sXG4gICAgRGlldENva2U6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdqdXN0Zm9ydGhldGFzdGVvZml0JyxcbiAgICAgICAgbmFtZTogJ0JlbiBIdXInXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==