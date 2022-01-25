/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nconst PageDetail = (argument = '') => {\r\n    console.log('Page Detail', argument);\r\n  };\r\n\r\n\n\n//# sourceURL=webpack://hyper_progame/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/js/components.js\");\n\r\n\r\nconst PageList = (argument = '') => {\r\n    let hideShow = 0;\r\n\r\n    const filteredView = (e) => {\r\n        hideShow = 0;\r\n        document.getElementById(\"showmore\").innerHTML = \"\";\r\n\r\n        let games = document.querySelectorAll(\".card\");\r\n\r\n        document.querySelectorAll(\".card\").forEach((game) => {\r\n            game.classList.add(\"not-visible\");\r\n        });\r\n\r\n        for (let i = 0; i < 27; i++){\r\n            if (hideShow > 8){\r\n                document.getElementById(\"showmore\").innerHTML = ` <p class=\"button\">Show more</p> `;\r\n                document.querySelector(\".button\").addEventListener(\"click\", showMore);\r\n                break;\r\n            }\r\n            if (games[i].classList.contains(e.target.value)) {\r\n                games[i].classList.remove(\"not-visible\");\r\n                hideShow++;\r\n            }\r\n        }\r\n    };\r\n\r\n    const showMore = () => {\r\n        let run = hideShow;\r\n        let games = new Array();\r\n        let filter = document.getElementById(\"platforms\");\r\n        document.querySelectorAll(\".card\").forEach((game) => {\r\n            if (game.classList.contains(filter.value)){\r\n                games.push(game);\r\n            }\r\n        });\r\n        for (let i = run; i < run + 9; i++) {\r\n            if (!games[i]) {\r\n              document.querySelector(\".button\").style.display = \"none\";\r\n              break;\r\n            }\r\n            games[i].classList.remove(\"not-visible\");\r\n            hideShow++;\r\n          }\r\n          if (hideShow >= 27) {\r\n            document.querySelector(\".button\").style.display = \"none\";\r\n        }\r\n    };\r\n\r\n    const prepareFilter = () => {\r\n        let selectors = \"<option value='any'>Platform : Any</option>\\n\";\r\n        fetch(\"https://api.rawg.io/api/platforms/lists/parents\")\r\n          .then((response) => response.json())\r\n          .then((response) => {\r\n              response.results.forEach((platform) => {\r\n                  selectors += `<option value='${platform.slug}'>${platform.name}</option>\\n`;\r\n              });\r\n              let filter = document.getElementById(\"platforms\");\r\n              filter.innerHTML = selectors;\r\n              filter.addEventListener(\"change\", filteredView);\r\n          });\r\n    };\r\n\r\n    const preparePage = () => {\r\n        let cleanedArgument;\r\n        cleanedArgument = argument.replace(/\\s+/g, \"-\");\r\n        let games = \"\";\r\n    \r\n        const fetchList = async (url, argument) => {\r\n          let finalURL = url;\r\n          if (argument) {\r\n            url = \"https://api.rawg.io/api/games\";\r\n            finalURL = url + argument + \"&page_size=30\";\r\n          }\r\n    \r\n          fetch(`${finalURL}`)\r\n            .then((response) => response.json())\r\n            .then((response) => {\r\n              response.results.forEach((game) => {\r\n                let platforms = \"\";\r\n                let filters = \"\";\r\n                if (game.parent_platforms) {\r\n                  game.parent_platforms.forEach((platform) => {\r\n                    filters += platform.platform.slug + \" \";\r\n                    let icon = platformsIcons[platform.platform.slug];\r\n                    platforms += icon + \" \";\r\n                   });\r\n                }\r\n                let genres = \"\";\r\n                if (game.genres) {\r\n                  game.genres.forEach((genre) => {\r\n                    genres += \" \" + genre.name;\r\n                  });\r\n                }\r\n                let firstDiv = `<div class='cardGame card text-white h-100 col-lg-4 any ${filters}'>`;\r\n                if (hideShow > 8) {\r\n                  firstDiv = `<div class='cardGame card text-white h-100 col-lg-4 any ${filters} not-visible'>`;\r\n                }\r\n                games += `\r\n                      ${firstDiv}\r\n                        <img src=\"${\r\n                          game.background_image\r\n                        }\" class=\"cover card-img-top\" alt=\"${game.name}-cover\">\r\n                        <div class=\"game-infos card-img-top not-visible\">\r\n                          <h3>${convertDate(game.released)}</h3>\r\n                          <h3 class=\"creators\">${game.slug}</h3>\r\n                          <h4>${game.rating}/5 - ${game.ratings_count} votes</h4>\r\n                          <p>${genres}</p>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <h2><a href = \"#gamedetail/${\r\n                            game.slug\r\n                          }\"class=\"card-title\">${game.name}</a></h2>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                          <p class=\"d-flex align-items-center\">${platforms}</p>\r\n                        </div>\r\n                      </div>\r\n                    `;\r\n                hideShow++;\r\n              });\r\n              document.querySelector(\".game-list .games\").innerHTML = games;\r\n              document.querySelectorAll(\".cover\").forEach((img) => {\r\n                img.addEventListener(\"mouseover\", showInfo);\r\n              });\r\n              document.querySelectorAll(\".game-infos\").forEach((img) => {\r\n                img.addEventListener(\"mouseleave\", hideInfo);\r\n              });\r\n              if (hideShow > 8) {\r\n                document.getElementById(\r\n                  \"showmore\"\r\n                ).innerHTML = `<p class=\"button\">Show more</p>`;\r\n                document\r\n                  .querySelector(\".button\")\r\n                  .addEventListener(\"click\", showMore);\r\n              }\r\n              hideShow = 9;\r\n              addCreators();\r\n              document.querySelectorAll(\".card-footer p\").forEach((footer) => {\r\n                for (let i = 0; i < footer.children.length; i++) {\r\n                  footer.children[i].addEventListener(\"click\", seePlatform);\r\n                }\r\n              });\r\n            });\r\n        };\r\n    \r\n        let dates = getHomeDefault();\r\n    \r\n        fetchList(\r\n          `https://api.rawg.io/api/games${dates}&page_size=30`,\r\n          cleanedArgument\r\n        );\r\n    };\r\n\r\n    const render = () => {\r\n        pageContent.innerHTML = `\r\n          ${(0,_components__WEBPACK_IMPORTED_MODULE_0__.header)()}\r\n    \r\n          <header>\r\n            <h1>Welcome,</h1>\r\n            <p>The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industy's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industy. For three exiting days, leading-edge compagnies, groundbrealing new technologies, and never-before seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>\r\n            <div class=\"box\">\r\n              <select id=\"platforms\" name=\"platformlist\">\r\n                <option value=\"any\">Platform : Any</option>\r\n              </select>\r\n            </div>  \r\n          </header>\r\n    \r\n    \r\n          <section class=\"game-list\">\r\n            <div class=\"games row\">...loading\r\n            </div>\r\n            <div id=\"showmore\" class=\"d-flex justify-content-center text-center mb-3\">\r\n            </div>\r\n          </section>\r\n    \r\n          ${(0,_components__WEBPACK_IMPORTED_MODULE_0__.footer)()}\r\n          <script src=\"https://code.iconify.design/1/1.0.6/iconify.min.js\"></script>\r\n        `;\r\n    \r\n        document\r\n          .querySelector(\".form-control\")\r\n          .addEventListener(\"keypress\", (e) => {\r\n            if (e.code == \"Enter\") {\r\n              searchGame();\r\n            }\r\n        });\r\n    \r\n        document.querySelector(\".fa-search\").addEventListener(\"click\", searchGame);\r\n    \r\n        prepareFilter();\r\n        preparePage();\r\n    };\r\n    \r\n    render();\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hyper_progame/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/components.js":
/*!******************************!*\
  !*** ./src/js/components.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst header = () => {\n    return `\n    <nav>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <a href=\"#\"><h1>The Hyper Progame</h1></a><br>\n        </div>\n        <div class=\"col-lg-4\">\n          <div id=\"searchbar\" class=\"d-flex justify-content-between flew-row align-items-center form-div\">\n            <i class=\"fas fa-search mx-3\"></i>\n            <input type=\"text\" id=\"findgame\" value=\"\" placeholder=\"Find a game...\" class=\"form-control\"><br><br>\n          </div>\n        </div>\n      <br>\n    </nav>\n    `;\n  };\n  \n  const footer = () => {\n    return `\n    <footer class=\"mt-3\">\n      <div class=\"redbar\"></div>\n      <p><b>Hary ANDRIANARISOA </b> © THP-2022 </p>\n    </footer>\n    `;\n  };\n  \n  \n  \n\n//# sourceURL=webpack://hyper_progame/./src/js/components.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\r\n\r\nconst callRoute = () => {\r\n    const { hash } = window.location;\r\n    const pathParts = hash.substring(1).split('/');\r\n  \r\n    const pageName = pathParts[0];\r\n    const pageArgument = pathParts[1] || '';\r\n    const pageFunction = _routes__WEBPACK_IMPORTED_MODULE_0__.routes[pageName];\r\n  \r\n    if (pageFunction !== undefined) {\r\n      pageFunction(pageArgument);\r\n    }\r\n  };\r\n  \r\n  window.addEventListener('hashchange', () => callRoute());\r\n  window.addEventListener('DOMContentLoaded', () => callRoute());\n\n//# sourceURL=webpack://hyper_progame/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\nconst routes = {\r\n    '': _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\r\n    'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\r\n    'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail,\r\n  };\r\n\r\n  \r\n  \r\n   \n\n//# sourceURL=webpack://hyper_progame/./src/js/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;