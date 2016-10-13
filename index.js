/*jslint browser: true*/
/*global define:true */
define(function () {
    'use strict';
    return {
        create: function (tag) {
            var _obj = document.createElement(tag),
                _classes = {},
                self = this;

            return {
                attr: function (attr, value) {
                    _obj.setAttribute(attr, value);
                    return this;
                },
                css: function (cl) {
                    if (Array.isArray(cl)) {
                        cl.forEach(function (className) {
                            _classes[className] = true;
                        });
                    } else {
                        _classes[cl] = true;
                    }
                    return this;
                },
                append: function (domElement) {
                    _obj.appendChild(domElement);
                    return this;
                },
                text: function (text) {
                    _obj.appendChild(self.text(text));
                    return this;
                },
                event: function (event, func) {
                    _obj.addEventListener(event, func);
                    return this;
                },
                build: function () {
                    if (Object.keys(_classes).length !== 0) {
                        _obj.className = Object.keys(_classes).join(" ");
                    }
                    return _obj;
                }
            };
        },
        text: function (text) {
            return document.createTextNode(text);
        }
    }
});
