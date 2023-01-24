// /assets/katanalotis-microsite.js

'use strict';



;
define("katanalotis-microsite/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _jsonApi.default;
        }
    });
});;
define("katanalotis-microsite/app", ["exports", "katanalotis-microsite/resolver", "ember-load-initializers", "katanalotis-microsite/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    class App extends Ember.Application {
        constructor(...args) {
            super(...args);

            _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

            _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

            _defineProperty(this, "Resolver", _resolver.default);
        }

    }

    _exports.default = App;
    (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});;
define("katanalotis-microsite/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _basicDropdown.default;
        }
    });
});;
define("katanalotis-microsite/components/basic-dropdown/content-element", ["exports", "ember-basic-dropdown/components/basic-dropdown/content-element"], function (_exports, _contentElement) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _contentElement.default;
        }
    });
});;
define("katanalotis-microsite/components/basic-dropdown/content", ["exports", "ember-basic-dropdown/components/basic-dropdown/content"], function (_exports, _content) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _content.default;
        }
    });
});;
define("katanalotis-microsite/components/basic-dropdown/trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown/trigger"], function (_exports, _trigger) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _trigger.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsAccordion.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _item.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _body.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _title.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsAlert.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsButtonGroup.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _button.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsButton.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsCarousel.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _slide.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsCollapse.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsDropdown.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _button.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _menu.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _divider.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _item.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _linkTo.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _toggle.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsForm.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _element.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _control.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _checkbox.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _input.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _radio.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _textarea.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _errors.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _feedbackIcon.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _helpText.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _label.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _horizontal.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _checkbox.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _inline.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _checkbox.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _vertical.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _checkbox.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _group.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsModalSimple.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsModal.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _body.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _dialog.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _footer.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _header.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _close.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _title.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsNav.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _item.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _linkTo.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsNavbar.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _content.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _linkTo.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _nav.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _toggle.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsPopover.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _element.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsProgress.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bar.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsTab.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _pane.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsTooltip.default;
        }
    });
});;
define("katanalotis-microsite/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _element.default;
        }
    });
});;
define("katanalotis-microsite/components/cart", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        didRender() {
            this._super(...arguments); // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


            let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

            document.documentElement.style.setProperty('--vh', `${vh}px`);
        },

        actions: {
            emptyCart() {
                this.cart.empty();
            },

            removeFromCart(item) {
                this.cart.remove(item);
            },

            addPiece(item) {
                this.cart.add(item.product);
            },

            removePiece(item) {
                this.cart.removePiece(item.product);
            },

            expandMerchant(merchant) {
                this.cart.expandMerchant(merchant);
            },

            collapseMerchant(merchant) {
                this.cart.collapseMerchant(merchant);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/cookies", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        didRender() {
            this._super(...arguments);

            let cookie = localStorage.getItem('cookiesAccepted');

            if (cookie == 'true') {
                Ember.set(this, 'cookiesAccepted', true);
            }
        },

        actions: {
            hideCookies() {
                Ember.set(this, 'cookiesAccepted', true);
                localStorage.setItem('cookiesAccepted', true);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _emberPopperTargetingParent.default;
        }
    });
});;
define("katanalotis-microsite/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _emberPopper.default;
        }
    });
});;
define("katanalotis-microsite/components/filter", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        companiesShowAll: false,
        countiesShowAll: false,
        actions: {
            clearFilter(type) {
                var filter = this.get(type);
                filter.forEach(x => Ember.set(x, 'checked', false));
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/footer", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        actions: {
            closeCart() {
                this.cart.closeCart();
            },

            openCookiesModal() {
                $('#cookieModal').modal('show');
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/fuels-map-component", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        watchSearchInput: Ember.observer('region', function () {
            let q = this.get('region');
            this.set('regionQuery', q);
        }),
        initMap: function (action) {
            var stationsToRender = this.get('fuelstations');
            var code = this.get('storeId')['fuels-map'];
            let store = stationsToRender.find(x => x.store_id == code);
            const fuelType = this.get('fuelType');
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 37.983810,
                    lng: 23.727539
                },
                zoom: 6,
                mapTypeControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            self = this;
            var infowindow = null;
            var fuelsMarkers = stationsToRender.map(function (shop, i) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(shop.latitude, shop.longitude),
                    map: map
                });
                marker.addListener("click", () => {
                    if (infowindow) {
                        infowindow.close();
                    }

                    infowindow = new google.maps.InfoWindow({
                        maxWidth: 300,
                        content: `
                    <div class="position-relative pt-3 pr-3 info-container">
                        <div class="row mb-3">
                            <div class="col-3">
                                <img class="info-img img-fluid" src="/assets/fuelstation.png">
                            </div>
                            <div class="col-6 d-flex align-items-center">
                                <span class="info-name">${shop.address}</span>
                            </div>
                          <img class="info-nav-icon cursor-pointer" src="/assets/nav_icon.png" onClick="getDirections(${shop.latitude},${shop.longitude})">
                        </div>
                        <div class="row">
                            <div class="col-12 d-flex justify-content-between">
                                <div class="d-flex flex-column">  
                                    <span class="info-price-text">ΞΞ―Ξ΄ΞΏΟ ΞΊΞ±ΟΟΞ―ΞΌΞΏΟ</span>                          
                                    <span class="info-fuel-type">${fuelType}</span>
                                </div>
                                <div class="d-flex flex-column">      
                                    <span class="info-price-text">ΞΞ­ΟΞ· ΟΞΉΞΌΞ�</span>               
                                    <span class="info-fuel-price">${shop.price}β¬</span>
                                </div>
                            </div>
                        </div>
                    </div>`
                    });
                    infowindow.open(map, marker);
                });
                return marker;
            });
            var markerCluster = new MarkerClusterer(map, fuelsMarkers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
            var currentPosition; // if (navigator.geolocation) {
            //     navigator.geolocation.getCurrentPosition(

            if (store) {
                try {
                    const pos = {
                        lat: store.latitude,
                        lng: store.longitude
                    };
                    currentPosition = pos;
                    map.setCenter(pos);
                    map.setZoom(13);

                    () => {
                        handleLocationError(true, infoWindow, map.getCenter());
                    };
                } catch (e) {
                    console.log(e);
                }
            } else {
                try {
                    const pos = {
                        lat: fuelsMarkers[0].position.lat(),
                        lng: fuelsMarkers[0].position.lng()
                    };
                    currentPosition = pos;
                    map.setCenter(pos);
                    map.setZoom(10);

                    () => {
                        handleLocationError(true, infoWindow, map.getCenter());
                    };
                } catch (e) {
                    console.log(e);
                }
            } // );
            // } else {
            //     // Browser doesn't support Geolocation
            //     handleLocationError(false, infoWindow, map.getCenter());
            // }


            if (action === 'findRegion') {
                if (markers.length === 0) {
                    $('#map').modal('show');
                    return;
                }

                var bounds = new google.maps.LatLngBounds();

                for (var i = 0; i < markers.length; i++) {
                    bounds.extend(markers[i].getPosition());
                }

                map.fitBounds(bounds);
            } else if (action === 'goToCurrentLocation') {
                // if (navigator.geolocation) {
                //     navigator.geolocation.getCurrentPosition(function(position) {
                let pos = {
                    lat: store.latitude,
                    lng: store.longitude
                };
                map.panTo(pos);
                map.setZoom(16); // }, function() {
                //     console.log('error fetching user\'s position');
                // });
                // } else {
                //     console.log('Browser doesn\'t support Geolocation');
                // }
            }
        },

        didUpdateAttrs() {
            this.initMap();
        },

        didInsertElement() {
            this.initMap();
        },

        actions: {
            findRegion() {
                this.initMap('findRegion');
            },

            goToCurrentLocation() {
                this.initMap('goToCurrentLocation');
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/global-map-component", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        watchSearchInput: Ember.observer('region', function () {
            let q = this.get('region');
            this.set('regionQuery', q);
        }),
        initMap: function (action) {
            var shopsToRender = this.get('products');
            var stationsToRender = this.get('fuelstations');
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 37.983810,
                    lng: 23.727539
                },
                zoom: 6,
                mapTypeControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            self = this;
            var infowindow = null;
            var shopMarkers = shopsToRender.map(function (shop, i) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(shop.latitude, shop.longitude),
                    map: map
                });
                marker.addListener("click", () => {
                    if (infowindow) {
                        infowindow.close();
                    }

                    infowindow = new google.maps.InfoWindow({
                        maxWidth: 300,
                        content: `
                    <div class="position-relative pt-3 pr-3 info-container">
                        <div class="row mb-3">
                            <div class="col-3">
                                <img class="info-img img-fluid" src="${shop.image}">
                            </div>
                            <div class="col-6 d-flex align-items-center">
                                <span class="info-name">${shop.address}</span>
                            </div>
                          <img class="info-nav-icon cursor-pointer" src="/assets/nav_icon.png" onClick="getDirections(${shop.latitude},${shop.longitude})">
                        </div>
                    </div>`
                    });
                    infowindow.open(map, marker);
                });
                return marker;
            });
            var fuelMarkers = stationsToRender.map(function (shop, i) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(shop.latitude, shop.longitude),
                    map: map
                });
                marker.addListener("click", () => {
                    if (infowindow) {
                        infowindow.close();
                    }

                    infowindow = new google.maps.InfoWindow({
                        maxWidth: 300,
                        content: `
                    <div class="position-relative pt-3 pr-3 info-container">
                        <div class="row mb-3">
                            <div class="col-3">
                                <img class="info-img img-fluid" src="/assets/fuelstation.png">
                            </div>
                            <div class="col-6 d-flex align-items-center">
                                <span class="info-name">${shop.address}</span>
                            </div>
                          <img class="info-nav-icon cursor-pointer" src="/assets/nav_icon.png" onClick="getDirections(${shop.latitude},${shop.longitude})">
                        </div>
                    </div>`
                    });
                    infowindow.open(map, marker);
                });
                return marker;
            });
            var markerCluster = new MarkerClusterer(map, shopMarkers.concat(fuelMarkers), {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
            var currentPosition;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    currentPosition = pos;
                    map.setCenter(pos);
                    map.setZoom(13);
                }, () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }

            if (action === 'findRegion') {
                if (markers.length === 0) {
                    $('#map').modal('show');
                    return;
                }

                var bounds = new google.maps.LatLngBounds();

                for (var i = 0; i < markers.length; i++) {
                    bounds.extend(markers[i].getPosition());
                }

                map.fitBounds(bounds);
            } else if (action === 'goToCurrentLocation') {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        let pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        map.panTo(pos);
                        map.setZoom(16);
                    }, function () {
                        console.log('error fetching user\'s position');
                    });
                } else {
                    console.log('Browser doesn\'t support Geolocation');
                }
            }
        },

        didUpdateAttrs() {
            this.initMap();
        },

        didInsertElement() {
            this.initMap();
        },

        actions: {
            findRegion() {
                this.initMap('findRegion');
            },

            goToCurrentLocation() {
                this.initMap('goToCurrentLocation');
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/high-charts", ["exports", "ember-highcharts/components/high-charts"], function (_exports, _highCharts) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var _default = _highCharts.default;
    _exports.default = _default;
});;
define("katanalotis-microsite/components/map-component", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        watchSearchInput: Ember.observer('region', function () {
            let q = this.get('region');
            this.set('regionQuery', q);
        }),
        initMap: function (action) {
            var shopsToRender = this.get('shops');
            var prices = this.get('product').prices;
            var productName = this.get('product').name;
            var avgPrice = this.get('avgPrice');
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 37.983810,
                    lng: 23.727539
                },
                zoom: 6,
                mapTypeControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            self = this;
            var infowindow = null; //custom marker

            /* var markers = shopsToRender.map(function(shop, i) {
                var price = prices.find(function(price){
                    if(price.merchant.name == shop.merchant || (shop.merchant == "My Market" && price.merchant.name == "My Market ")){
                        return true
                    }
                }).price
                if(shop.latitude && shop.longitude){
                    return createHTMLMapMarker({
                        latlng: new google.maps.LatLng(shop.latitude, shop.longitude),
                        map: map,
                        html: `<div style="position:absolute;top:-50px;">
                                <div class="marker-wrapper">
                                    <img src=${shop.image} class="marker-image">
                                    <span class="marker-price">${price}β¬</span>
                                </div> 
                                <div style="margin:auto;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top: 10px solid #fff;"></div>                            
                                </div>`
                        });
                } else {                
                    return createHTMLMapMarker({
                        latlng: new google.maps.LatLng(shop.latitude, shop.longitude),
                        map: map,
                        html: `<div style="display:none;" class="marker-wrapper">
                                    <img src=${shop.image} class="marker-image">
                                    <span class="marker-price">${price}β¬</span>
                                </div> `
                        });
                }
            });  */

            var markers = shopsToRender.map(function (shop, i) {
                var price = prices.find(function (price) {
                    if (price.merchant.name == shop.merchant || shop.merchant == "My Market" && price.merchant.name == "My Market ") {
                        return true;
                    }
                }).price;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(shop.latitude, shop.longitude),
                    map: map
                });
                marker.addListener("click", () => {
                    if (infowindow) {
                        infowindow.close();
                    }

                    infowindow = new google.maps.InfoWindow({
                        maxWidth: 300,
                        content: `
                    <div class="position-relative pt-3 pr-3 info-container">
                        <div class="row mb-3">
                            <div class="col-3">
                                <img class="info-img img-fluid" src="${shop.image}">
                            </div>
                            <div class="col-6 d-flex align-items-center">
                                <span class="info-name">${productName}</span>
                            </div>
                          <img class="info-nav-icon cursor-pointer" src="/assets/nav_icon.png" onClick="getDirections(${shop.latitude},${shop.longitude})">
                        </div>
                        <div class="row">
                          <div class="col-12 d-flex justify-content-between">
                              <div class="d-flex flex-column">                        
                                  <span class="info-aveg-price-text">ΞΞ­ΟΞ· ΟΞΉΞΌΞ� ΟΟΞ»Ξ·ΟΞ·Ο</span>
                                  <span class="info-aveg-price">${avgPrice}β¬</span>
                              </div>
                              <div class="d-flex flex-column">                        
                                  <span class="info-price-text">Ξ€ΞΉΞΌΞ� ΟΞ±ΟΞΉΞΏΟ</span>
                                  <span class="info-price">${price}β¬</span>
                              </div>
                          </div>
                      </div>
                    </div>`
                    });
                    infowindow.open(map, marker);
                });
                return marker;
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
                maxZoom: 100
            });
            var currentPosition;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    currentPosition = pos;
                    map.setCenter(pos);
                    map.setZoom(13);
                }, () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }

            if (action === 'findRegion') {
                if (markers.length === 0) {
                    $('#map').modal('show');
                    return;
                }

                var bounds = new google.maps.LatLngBounds();

                for (var i = 0; i < markers.length; i++) {
                    bounds.extend(markers[i].getPosition());
                }

                map.fitBounds(bounds);
            } else if (action === 'goToCurrentLocation') {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        let pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        map.panTo(pos);
                        map.setZoom(16);
                    }, function () {
                        console.log('error fetching user\'s position');
                    });
                } else {
                    console.log('Browser doesn\'t support Geolocation');
                }
            }
        },

        didUpdateAttrs() {
            this.initMap();
        },

        didInsertElement() {
            this.initMap();
        },

        actions: {
            findRegion() {
                this.initMap('findRegion');
            },

            goToCurrentLocation() {
                this.initMap('goToCurrentLocation');
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/navbar", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        cartCount: 0,
        actions: {
            toggleCart() {
                this.cart.toggleCart();
            },

            openCart() {
                this.cart.openCart();
            },

            closeCart() {
                this.cart.closeCart();
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _powerSelectMultiple.default;
        }
    });
});;
define("katanalotis-microsite/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _trigger.default;
        }
    });
});;
define("katanalotis-microsite/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _powerSelect.default;
        }
    });
});;
define("katanalotis-microsite/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _beforeOptions.default;
        }
    });
});;
define("katanalotis-microsite/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _options.default;
        }
    });
});;
define("katanalotis-microsite/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _placeholder.default;
        }
    });
});;
define("katanalotis-microsite/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _powerSelectGroup.default;
        }
    });
});;
define("katanalotis-microsite/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _searchMessage.default;
        }
    });
});;
define("katanalotis-microsite/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _trigger.default;
        }
    });
});;
define("katanalotis-microsite/components/product-search", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        didRender() {
            this._super(...arguments);

            $('.search-input-container')[0].addEventListener('keyup', function () {
                $('.ember-power-select-options').css('display', 'block');
            });
        },

        actions: {
            goToProduct(product) {
                this.sendAction('goToProduct', product);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/products-filter", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Component.extend({
        marketsShowAll: false,
        countiesShowAll: false,
        actions: {
            clearFilter() {
                Ember.set(this, 'checkedMarket', null);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/components/qr-code", ["exports", "ember-qrcode-shim/components/qr-code"], function (_exports, _qrCode) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _qrCode.default;
        }
    });
});;
define("katanalotis-microsite/components/radio-button-input", ["exports", "ember-radio-button/components/radio-button-input"], function (_exports, _radioButtonInput) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _radioButtonInput.default;
        }
    });
});;
define("katanalotis-microsite/components/radio-button", ["exports", "ember-radio-button/components/radio-button"], function (_exports, _radioButton) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _radioButton.default;
        }
    });
});;
define("katanalotis-microsite/components/slick-slider", ["exports", "ember-cli-slick/components/slick-slider"], function (_exports, _slickSlider) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _slickSlider.default;
        }
    });
});;
define("katanalotis-microsite/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _welcomePage.default;
        }
    });
});;
define("katanalotis-microsite/controllers/charts", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        product: Ember.computed('model', function () {
            return this.get('model');
        }),
        merchantsImagesPrefix: Ember.computed('product', function () {
            var image = this.get('store').peekAll('product').get('firstObject').prices[0].merchant.image;
            return image.slice(0, image.lastIndexOf('/') + 1);
        }),
        merchantsImages: Ember.computed('product', function () {
            return this.get('store').peekAll('product').get('firstObject').prices.map(price => price.merchant.image);
        }),
        minMerchantsImages: Ember.computed('merchantsImages', function () {
            const self = this;
            var minMarkets = this.get('pricePerDay').slice(-6).map(price => price.Min_Markets);
            return minMarkets.map(market => market.map(item => self.merchantsImages.find(x => x.includes(item))));
        }),
        colNum: Ember.computed('minMerchantsImages', function () {
            return parseInt(12 / this.get('minMerchantsImages').length);
        }),
        colOffset: Ember.computed('minMerchantsImages', function () {
            return parseInt(12 % this.get('minMerchantsImages').length);
        }),
        pricePerDay: Ember.computed('product', function () {
            return this.get('store').peekAll('price-per-day').slice(-6);
        }),
        pricePerDayDates: Ember.computed('pricePerDay', function () {
            return this.get('pricePerDay').map(item => item.Day_Month);
        }),
        pricePerDayFullDates: Ember.computed('pricePerDay', function () {
            var fullDate = this.get('pricePerDay').map(item => item.Full_Date).map(function (date) {
                const greekDates = ['Ξ', 'Ξ€', 'Ξ€', 'Ξ ', 'Ξ ', 'Ξ£', 'Ξ'];
                const engDates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                return greekDates[engDates.findIndex(engDate => engDate == date)];
            });
            return fullDate;
        }),
        pricePerDayMin: Ember.computed('pricePerDay', function () {
            return this.get('pricePerDay').map(item => item.Min_Price);
        }),
        minMax: Ember.computed('pricePerDayMin', function () {
            return Math.max(...this.get('pricePerDayMin'));
        }),
        minMin: Ember.computed('pricePerDayMin', function () {
            return Math.min(...this.get('pricePerDayMin'));
        }),
        pricePerDayAvg: Ember.computed('pricePerDay', function () {
            return this.get('pricePerDay').map(item => item.Avg_Price);
        }),
        avgMax: Ember.computed('pricePerDayAvg', function () {
            return Math.max(...this.get('pricePerDayAvg'));
        }),
        avgMin: Ember.computed('pricePerDayAvg', function () {
            return Math.min(...this.get('pricePerDayAvg'));
        }),
        date: Ember.computed(function () {
            return JSON.parse(this.get('product').prices[0].extra_fields).date;
        }),
        chartOptionsMin: Ember.computed('pricePerDayDates', function () {
            const self = this;
            return {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'ΞΞΞΞ§ΞΞ£Ξ€Ξ Ξ€ΞΞΞ'
                },
                xAxis: {
                    categories: this.get('pricePerDayDates')
                },
                yAxis: {
                    labels: {
                        formatter: function () {
                            return parseFloat(this.axis.defaultLabelFormatter.call(this)).toFixed(2) + 'β¬';
                        }
                    },
                    title: {
                        text: ''
                    },
                    max: this.get('minMax') + 0.02,
                    min: this.get('minMin') - 0.02
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'β¬'
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#D987D9'],
                                [1, Highcharts.color('#D987D9').setOpacity(0).get('rgba')]
                            ]
                        }
                    },
                    series: {
                        color: '#D987D9'
                    }
                }
            };
        }),
        chartDataMin: Ember.computed('pricePerDayDates', function () {
            const self = this;
            return [{
                name: '',
                data: this.get('pricePerDayMin')
            }];
        }),
        chartOptionsAvg: Ember.computed('pricePerDayDates', function () {
            const self = this;
            return {
                chart: {
                    type: 'areaspline'
                },
                title: {
                    text: 'ΞΞΞ£Ξ Ξ€ΞΞΞ'
                },
                xAxis: {
                    categories: this.get('pricePerDayDates')
                },
                yAxis: {
                    labels: {
                        formatter: function () {
                            return parseFloat(this.axis.defaultLabelFormatter.call(this)).toFixed(2) + 'β¬';
                        }
                    },
                    title: {
                        text: ''
                    },
                    max: this.get('avgMax') + 0.02,
                    min: this.get('avgMin') - 0.02
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'β¬'
                },
                plotOptions: {
                    areaspline: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#29D0BC'],
                                [1, Highcharts.color('#29D0BC').setOpacity(0).get('rgba')]
                            ]
                        }
                    },
                    series: {
                        color: '#29D0BC'
                    }
                }
            };
        }),
        chartDataAvg: Ember.computed('pricePerDayDates', function () {
            const self = this;
            return [{
                name: '',
                data: this.get('pricePerDayAvg')
            }];
        }),
        chartOptionsMerchant: Ember.computed('pricePerDayDates', function () {
            const self = this;
            return {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'ΞΞΞ₯Ξ£ΞΞΞ ΞΞ ΞΞΞΞ§ΞΞ£Ξ€Ξ Ξ€ΞΞΞ'
                },
                xAxis: {
                    categories: this.get('pricePerDayFullDates')
                },
                yAxis: {
                    labels: {
                        formatter: function () {
                            return parseFloat(this.axis.defaultLabelFormatter.call(this)).toFixed(2) + 'β¬';
                        }
                    },
                    title: {
                        text: ''
                    },
                    max: this.get('minMax') + 0.02,
                    min: this.get('minMin') - 0.02
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'β¬'
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                }
            };
        }),
        chartDataMerchant: Ember.computed('pricePerDayDates', function () {
            const self = this;
            return [{
                name: '',
                data: this.get('pricePerDayMin'),
                color: '#E3E9F6'
            }];
        })
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/click-away", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        actions: {
            request() {
                this.get('warply_sdk').post_context(JSON.stringify({
                    "products": {
                        "action": "click_away",
                        "subaction": "generate_coupon"
                    }
                }), this.success.bind(this), this.failure);
            },

            rantevou() {
                let branchName = 4994;
                let afm = this.get('afm');
                let dieu8insi = this.get('dieu8insi');
                let date = this.get('date');
                let time = this.get('time');
                let code = this.get('customerCode');
                let message = this.get('messageText');

                if (this.get('model') === 'inside') {
                    var click = true;
                } else {
                    var click = false;
                }

                var inputError = false;

                if (!afm || afm && (afm.length != 9 || !parseInt(afm))) {
                    $('#afm').addClass('error-input');
                    inputError = true;
                } else {
                    $('#afm').removeClass('error-input');
                }

                if (!dieu8insi) {
                    $('#dieu8insi').addClass('error-input');
                    inputError = true;
                } else {
                    $('#dieu8insi').removeClass('error-input');
                }

                if (!date) {
                    $('#date').addClass('error-input');
                    inputError = true;
                } else {
                    $('#date').removeClass('error-input');
                }

                if (!time) {
                    $('#time').addClass('error-input');
                    inputError = true;
                } else {
                    $('#time').removeClass('error-input');
                }

                if (!code || code && (code.length != 6 || !parseInt(code))) {
                    $('#customerCode').addClass('error-input');
                    inputError = true;
                } else {
                    $('#customerCode').removeClass('error-input');
                }

                if (!message) {
                    $('#messageText').addClass('error-input');
                    inputError = true;
                } else {
                    $('#messageText').removeClass('error-input');
                }

                this.get('warply_sdk').post_context(JSON.stringify({
                    'products': {
                        action: 'click_away',
                        subaction: "add_appointment",
                        code: code,
                        extra_fields: {
                            merchant: branchName ? branchName : null,
                            afm: afm ? afm : null,
                            dieu8insi: dieu8insi ? dieu8insi : null,
                            date: date ? date : null,
                            time: time ? time : null,
                            comments: message ? message : null,
                            clickInside: click
                        }
                    }
                }), this.congrats.bind(this), this.failure);
            }

        },
        congrats: function (response) {
            console.log(response);
        },
        success: function (data) {
            Ember.set(this, 'codeValue', data.context.MAPP_PRODUCTS.code);
        },
        failure: function () {
            console.log("Error");
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/contact", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        actions: {
            submit() {
                const firstName = this.get('firstName');
                const lastName = this.get('lastName');
                const email = this.get('email');
                const msisdn = this.get('msisdn');
                const message = this.get('message');
                var inputError = false;

                if (!firstName) {
                    $('#firstName').addClass('error-input');
                    inputError = true;
                } else {
                    $('#firstName').removeClass('error-input');
                }

                if (!lastName) {
                    $('#lastName').addClass('error-input');
                    inputError = true;
                } else {
                    $('#lastName').removeClass('error-input');
                }

                if (!email || email && !this.validateEmail(email)) {
                    $('#email').addClass('error-input');
                    inputError = true;
                } else {
                    $('#email').removeClass('error-input');
                }

                if (!msisdn || msisdn && (msisdn.length != 10 || !parseInt(msisdn))) {
                    $('#msisdn').addClass('error-input');
                    inputError = true;
                } else {
                    $('#msisdn').removeClass('error-input');
                }

                if (!message) {
                    $('#message').addClass('error-input');
                    inputError = true;
                } else {
                    $('#message').removeClass('error-input');
                }

                if (inputError) {
                    return;
                }

                var warplySDK = this.get('warply_sdk');
                const self = this;
                warplySDK.post_context(JSON.stringify({
                    "contact": {
                        "action": "addContact",
                        'first_name': firstName,
                        'last_name': lastName,
                        'email': email,
                        'msisdn': msisdn,
                        'message': message
                    }
                }), function (response) {
                    Ember.set(self, 'responseText', 'H Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ± ΟΞ±Ο Ξ­ΟΞ΅ΞΉ Ξ±ΟΞΏΟΟΞ±Ξ»Ξ΅Ξ― Ξ΅ΟΞΉΟΟΟΟΟ.');
                    $('#contactModal').modal('show');
                    $('#contactModal').on('hidden.bs.modal', function () {
                        Ember.set(self, 'firstName', '');
                        Ember.set(self, 'lastName', '');
                        Ember.set(self, 'email', '');
                        Ember.set(self, 'msisdn', '');
                        Ember.set(self, 'message', '');
                    });
                }, function (response) {
                    Ember.set(self, 'responseText', Ember.String.htmlSafe('H Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ± ΟΞ±Ο Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ Ξ±ΟΞΏΟΟΞ±Ξ»Ξ΅Ξ―. <br>Ξ Ξ±ΟΞ±ΞΊΞ±Ξ»ΞΏΟΞΌΞ΅ ΟΟΞΏΟΟΞ±ΞΈΞ�ΟΟΞ΅ ΞΎΞ±Ξ½Ξ¬.'));
                    $('#contactModal').modal('show');
                });
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/fuels-map", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        fuelstations: Ember.computed('trigger', function () {
            var stations = this.get('store').peekAll('fuelstation').filter(x => x.longitude && x.latitude);
            const selectedRegion = this.get('selectedRegion');
            const selectedCity = this.get('selectedCity');

            if (selectedRegion) {
                stations = stations.filter(x => x.region == selectedRegion);
            }

            if (selectedCity) {
                stations = stations.filter(x => x.city == selectedCity);
            }

            return stations;
        }),
        fuelType: Ember.computed('warply_sdk.fuelType', function () {
            if (this.get('warply_sdk').fuelType) {
                return this.get('warply_sdk').fuelType.name;
            }
        }),
        storeId: Ember.computed('model', function () {
            return this.get('model');
        }),
        cityOptions: Ember.computed('warply_sdk.fuelFiltersSet', function () {
            return this.get('store').peekAll('fuel-filter').map(x => x.city)[0];
        }),
        regionOptions: Ember.computed('warply_sdk.fuelFiltersSet', function () {
            return this.get('store').peekAll('fuel-filter').map(x => x.region)[0];
        }),
        actions: {
            toggleFilter() {
                Ember.set(this, 'filterMinimized', !this.get("filterMinimized"));
            },

            toggleFilterTrigger() {
                Ember.set(this, 'trigger', !this.get("trigger"));
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/fuels-results", ["exports", "ember-resolver", "katanalotis-microsite/config/environment"], function (_exports, _emberResolver, _environment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        queryParams: ['merchant', 'date'],
        isMobile: Ember.computed(function () {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            }

            return false;
        }),
        qrDate: Ember.computed('date', 'yesterdayDate', 'requestCount', function () {
            console.log(this.get('requestCount'));
            return this.get('date') && this.get('requestCount') < 2 ? this.get('date') : this.get('yesterdayDate');
        }),
        qrMerchant: Ember.computed('fuelType', function () {
            return this.get('fuelType').id;
        }),
        qrUrl: Ember.computed('qrDate', 'qrMerchant', function () {
            return `https://e-katanalotis.gov.gr/fuels-results?date=${this.get('qrDate')}&merchant=${this.get('qrMerchant')}`;
        }),
        filterExpanded: false,
        resultsService: Ember.inject.service('results-preview'),
        selectedPage: 1,
        itemsPerPage: 15,
        sorting: 'ascending',
        fuelCategories: Ember.computed(function () {
            return this.get('store').peekAll('fuelstation-category');
        }),
        counties: Ember.computed('model', function () {
            return [];
        }),
        companies: Ember.computed('model', function () {
            return [];
        }),
        stations: Ember.computed(function () {
            return this.get('store').peekAll('fuelstationPin');
        }),

        /*  fuels: Ember.computed('companies.@each.checked', 'counties.@each.checked', 'model', 'sorting', 'model.@each', function () {
             console.log('fuels-results')
             var model = this.get('model')
             var countiesFilter = this.get('counties').filter(function (item) {
                 if (item.checked) {
                     return true
                 }
                 return false
             }).map(x => x.name)
             var companiesFilter = this.get('companies').filter(function (item) {
                 if (item.checked) {
                     return true
                 }
                 return false
             }).map(x => x.name)
               model = model.filter(function (item) {
                 if (item.price && item.price != "0") {
                     if ((!countiesFilter.length && !companiesFilter.length) ||
                         ((countiesFilter.length && countiesFilter.includes(item.county)) || !countiesFilter.length) &&
                         ((companiesFilter.length && companiesFilter.includes(item.company)) || !companiesFilter.length)) {
                         return true
                     }
                 }
                 return false
             })
               if (this.get('sorting') == 'ascending') {
                 return model.sortBy('price')
             } else {
                 return model.sortBy('price').reverse()
             }
           }), */
        padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        },

        formatDate(date) {
            return [this.padTo2Digits(date.getDate()), this.padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('/');
        },

        fakeDate: Ember.computed(function () {
            return this.formatDate(new Date());
        }),
        yesterdayDate: Ember.computed(function () {
            var d = new Date();
            d.setDate(d.getDate() - 1);
            return this.formatDate(d);
        }),
        twoDaysAgoDate: Ember.computed(function () {
            var d = new Date();
            d.setDate(d.getDate() - 2);
            return this.formatDate(d);
        }),
        avgPriceDate: Ember.computed('date', 'requestCount', function () {
            return this.get('date') && this.get('requestCount') < 2 && this.get('merchant') == this.get('fuelType').id ? this.get('date') : this.get('twoDaysAgoDate');
        }),
        fuels: Ember.computed('companies.@each.checked', 'cityOptions.@each.checked', 'model', 'sorting', 'model.@each', function () {
            var model = this.get('model');
            var cityOptionsFilter = this.get('cityOptions').filter(x => x.checked).map(x => x.name);
            model = model.filter(function (item) {
                if (item.price && item.price != "0") {
                    if (!cityOptionsFilter.length || cityOptionsFilter.length && cityOptionsFilter.includes(item.city)) {
                        return true;
                    }
                }

                return false;
            });
            return model;
        }),
        fuelAveragePrice: Ember.computed('fuels', function () {
            const prices = this.get('fuels').map(x => x.price);
            const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
            return avgPrice.toFixed(3);
        }),
        fuelsPaginated: Ember.computed('fuels', 'fuels.@each', 'selectedPage', function () {
            var indexStart = (this.get('selectedPage') - 1) * this.get('itemsPerPage');
            return this.get('fuels').slice(indexStart, this.get('itemsPerPage') + indexStart);
        }),
        lastPage: Ember.computed('fuels', 'fuels.@each', 'selectedPage', function () {
            return this.totalPages() == 1 ? null : this.totalPages();
        }),
        midPages: Ember.computed('fuels', 'fuels.@each', 'selectedPage', function () {
            var selectedPage = this.get('selectedPage');
            var totalPages = this.totalPages();
            var lastPage = this.get('lastPage');

            if (totalPages > 2) {
                var midPages = [];

                if (selectedPage - 1 > 1) {
                    midPages = [selectedPage];
                    midPages.unshift(selectedPage - 1);
                } else if (selectedPage - 1 > 0) {
                    midPages = [selectedPage];
                }

                if (lastPage - selectedPage > 1) {
                    midPages.push(selectedPage + 1);
                } else if (lastPage - selectedPage > 0) {
                    midPages = [selectedPage];
                }

                if (selectedPage - 1 > 1) {
                    Ember.set(this, 'showPrevDots', true);
                } else {
                    Ember.set(this, 'showPrevDots', false);
                }

                if (lastPage - selectedPage > 1) {
                    Ember.set(this, 'showAfterDots', true);
                } else {
                    Ember.set(this, 'showAfterDots', false);
                }

                return midPages;
            }

            return null;
        }),
        cityOptions: Ember.computed('warply_sdk.fuelFiltersSet', function () {
            return this.get('store').peekAll('fuel-filter').map(x => x.city)[0].map(x => {
                return {
                    name: x,
                    checked: false
                };
            });
        }),

        totalPages() {
            return Math.ceil(this.get('fuels').length / this.get('itemsPerPage'));
        },

        successGetFuels_old(data) {
            var self = this;
            var count = this.get('count') || 0;
            var stations = this.get('store').peekAll('fuelstationPin').map(x => x.toJSON());
            var fuels = data.context.MAPP_PRODUCTS.result.products;
            var counties = [];
            var companies = [];

            if (this.get('store').peekAll('fuelstation').content.length) {
                this.get('store').peekAll('fuelstation').forEach(function (item) {
                    Ember.run.once(function () {
                        item.deleteRecord();
                    });
                });
            }

            for (var i = 0; i < fuels.length; i++) {
                var fuel = fuels[i];
                var list = fuel.prices[0].price;

                for (const key in list) {
                    var price = list[key];

                    if (price && price.constructor != Object && price != "0") {
                        var station = stations.find(x => x.store_id == key);

                        if (station) {
                            if (!counties.includes(station.county)) {
                                counties.push(station.county);
                            }

                            if (!companies.includes(station.company)) {
                                companies.push(station.company);
                            }

                            count++;
                            station.price = price;
                            station.type = this.get('fuelType').name;
                            self.get('store').createRecord('fuelstation', station);
                        }
                    }
                }

                Ember.set(this, 'counties', counties.map(x => ({
                    name: x,
                    checked: false
                })));
                Ember.set(this, 'companies', companies.map(x => ({
                    name: x,
                    checked: false
                })));
                Ember.set(this, 'selectedPage', 1);
            }
        },

        successGetFuels(data) {
            const self = this;
            var result = data.context.MAPP_SHOPS.result;

            if (this.get('store').peekAll('fuelstation').content.length) {
                this.get('store').peekAll('fuelstation').forEach(function (item) {
                    Ember.run.once(function () {
                        item.deleteRecord();
                    });
                });
            }

            $.each(result, function (i, item) {
                item.id = item.uuid;
                item.price = item.product[self.get('fuelType').id];

                try {
                    self.store.createRecord('fuelstation', item);
                } catch (e) {
                    console.log(e);
                }
            });
            Ember.set(this.get('warply_sdk'), 'fuelType', this.get('fuelType'));
            Ember.set(this, 'requestCount', this.get('requestCount') + 1);
        },

        errorGetFuels(data) {
            console.log(data);
        },

        requestCount: 0,
        fuelType_obs: Ember.observer('fuelType', function () {
            const self = this;
            let date;

            if (this.get('date') && this.get('requestCount') == 0) {
                date = this.get('date');
            } else {
                date = this.get('yesterdayDate');
            }

            this.get('warply_sdk').post_context(JSON.stringify({
                "shops": {
                    "action": "retrieve_multilingual",
                    "merchant_id": _environment.default.merchant_id,
                    "active": true,
                    "tags": null,
                    "language": 'el',
                    "product_uuids": [this.get('fuelType').id],
                    "last_product_update": date
                }
            }), this.successGetFuels.bind(this), this.errorGetFuels.bind(this));
        }),
        actions: {
            decrementPage() {
                if (this.get('selectedPage') != 1) {
                    Ember.set(this, 'selectedPage', this.get('selectedPage') - 1);
                }
            },

            incrementPage() {
                if (this.get('selectedPage') != this.totalPages()) {
                    Ember.set(this, 'selectedPage', this.get('selectedPage') + 1);
                }
            },

            selectPage(page) {
                Ember.set(this, 'selectedPage', page);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/fuels", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        resultsService: Ember.inject.service('results-preview'),
        fuelCategories: Ember.computed(function () {
            return this.get('store').peekAll('fuelstation-category');
        }),
        actions: {
            search() {
                Ember.set(this.get('resultsService'), 'fuelType', this.get('selectedCategory'));
                this.transitionToRoute('fuels-results');
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/global-map", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        products: Ember.computed(function () {
            return this.get('store').peekAll('shop');
        })
        /* fuelstations: Ember.computed(function(){
            return this.get('store').peekAll('fuelstation')
        }) */

    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/household-basket", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        selectedPage: 1,
        itemsPerPage: 51,
        displayOptions: {
            diabetes: 'Ξ§ΞΞΞΞΞΞ£ ΞΞΞ₯ΞΞΞΞΞΞΞΞ£ ΞΞΞΞΞ€ΞΞ£',
            xmas: 'Ξ§Ξ‘ΞΞ£Ξ€ΞΞ₯ΞΞΞΞΞΞΞ€ΞΞΞ Ξ Ξ‘ΞΞͺΞΞ'
        },
        products: Ember.computed('model', function () {
            try {
                return this.get('model').get('firstObject').basket;
            } catch (e) {
                console.log(e);
            }
        }),
        productsPaginated: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            if (this.get('products')) {
                var indexStart = (this.get('selectedPage') - 1) * this.get('itemsPerPage');
                return this.get('products').slice(indexStart, this.get('itemsPerPage') + indexStart);
            }
        }),
        lastPage: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            if (this.get('products')) {
                return this.totalPages() == 1 ? null : this.totalPages();
            }
        }),
        midPages: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            if (this.get('products')) {
                var selectedPage = this.get('selectedPage');
                var totalPages = this.totalPages();
                var lastPage = this.get('lastPage');

                if (totalPages > 3) {
                    var midPages = [];

                    if (selectedPage - 1 > 1) {
                        midPages = [selectedPage];
                        midPages.unshift(selectedPage - 1);
                    } else if (selectedPage - 1 > 0) {
                        midPages = [selectedPage];
                    }

                    if (lastPage - selectedPage > 1) {
                        midPages.push(selectedPage + 1);
                    } else if (lastPage - selectedPage > 0) {
                        midPages = [selectedPage];
                    }

                    if (selectedPage - 1 > 1) {
                        Ember.set(this, 'showPrevDots', true);
                    } else {
                        Ember.set(this, 'showPrevDots', false);
                    }

                    if (lastPage - selectedPage > 1) {
                        Ember.set(this, 'showAfterDots', true);
                    } else {
                        Ember.set(this, 'showAfterDots', false);
                    }

                    return midPages;
                } else if (totalPages == 3) {
                    return [2];
                }

                return null;
            }
        }),

        totalPages() {
            if (this.get('products')) {
                return Math.ceil(this.get('products').length / this.get('itemsPerPage'));
            } else {
                return 0;
            }
        },

        pricePerDayAvg: Ember.computed(function () {
            return this.get('variance').map(item => item.Avg_Price);
        }),
        pricePerDayDates: Ember.computed(function () {
            return this.get('variance')[0].map(item => item.Day_Month);
        }),
        chartOptionsProduct: Ember.computed(function () {
            const self = this;
            return {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Ξ€ΞΉΞΌΞ� ΟΟΞΏΟΟΞ½ΟΞΏΟ',
                    style: {
                        fontSize: '10px'
                    }
                },
                xAxis: {
                    visible: false,
                    categories: self.get('pricePerDayDates')
                },
                yAxis: {
                    visible: false
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'β¬/ΟΞ΅ΞΌ'
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#29D0BC'],
                                [1, Highcharts.color('#29D0BC').setOpacity(0).get('rgba')]
                            ]
                        }
                    },
                    series: {
                        color: '#29D0BC'
                    }
                }
            };
        }),
        chartOptionsCategory: Ember.computed(function () {
            const self = this;
            return {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'ΞΞΉΞ±ΞΊΟΞΌΞ±Ξ½ΟΞ· ΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±Ο',
                    style: {
                        fontSize: '10px'
                    }
                },
                xAxis: {
                    visible: false,
                    categories: self.get('pricePerDayDates')
                },
                yAxis: {
                    visible: false
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'β¬/ΟΞ΅ΞΌ'
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#0035C5'],
                                [1, Highcharts.color('#0035C5').setOpacity(0).get('rgba')]
                            ]
                        }
                    },
                    series: {
                        color: '#0035C5'
                    }
                }
            };
        }),
        actions: {
            selectRetailer(retailer) {
                this.get('model').forEach(x => x.active = false);
                retailer.active = true;
                Ember.set(this, 'products', retailer.basket);
                Ember.set(this, 'selectedPage', 1);
            },

            decrementPage() {
                if (this.get('selectedPage') != 1) {
                    Ember.set(this, 'selectedPage', this.get('selectedPage') - 1);
                }
            },

            incrementPage() {
                if (this.get('selectedPage') != this.totalPages()) {
                    Ember.set(this, 'selectedPage', this.get('selectedPage') + 1);
                }
            },

            selectPage(page) {
                Ember.set(this, 'selectedPage', page);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/index-news", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({});

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/index", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        queryParams: ['stores'],
        stores: null,
        products: Ember.computed(function () {
            return this.get('store').peekAll('product');
        }),
        results: Ember.inject.service('index-news'),
        articles: Ember.computed(function () {
            console.log(this.get('store').peekAll('article'));
            return this.get('store').peekAll('article');
        }),
        offers: Ember.computed(function () {
            return this.get('store').peekAll('offer');
        }),
        displayContact: Ember.computed('articles', function () {
            return this.get('articles').find(article => article.category_name == 'contact_form').active;
        }),
        displayAntiseptic: Ember.computed('articles', function () {
            return this.get('articles').find(article => article.category_name == 'antiseptic').active;
        }),
        actions: {
            goToProduct(product) {
                this.transitionToRoute('product', product.id);
            },

            goToNews() {
                this.transitionToRoute('index-news');
                Ember.set(this, 'results.article', this.get('articles'));
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/product-preview", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        isMobile: Ember.computed(function () {
            if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            }

            return false;
        }),
        filterExpanded: false,
        selectedPage: 1,
        itemsPerPage: 8,
        sorting: 'ascending',
        markets: Ember.computed('selectedSubCategory.name', function () {
            if (this.get('selectedSubCategory')) {
                var prods = this.get('store').peekAll('product').filter(product => product.sub_category == this.get('selectedSubCategory').uuid);
                var markets = [];

                for (var i = 0; i < prods.length; i++) {
                    var product = prods[i];

                    for (var z = 0; z < product.prices.length; z++) {
                        if (!markets.includes(product.prices[z].merchant.name)) {
                            markets.push(product.prices[z].merchant.name);
                        }
                    }
                }

                return markets.map(x => ({
                    name: x,
                    checked: false
                }));
            }
        }),
        results: Ember.inject.service('results-preview'),
        selectedCategory: Ember.computed('results.category', function () {
            return this.get('results').category;
        }),
        selectedSubCategory: Ember.computed('results.subCategory', function () {
            return this.get('results').subCategory;
        }),
        categories: Ember.computed(function () {
            return this.get('store').peekAll('category').sortBy('name');
        }),
        product: Ember.computed('model', function () {
            return this.get('model');
        }),
        market: Ember.computed(function () {
            return this.get('store').peekAll('shop');
        }),
        checkedMarkets: Ember.computed('markets.@each.checked', function () {
            if (this.get('markets')) {
                return this.get('markets').filter(function (item) {
                    if (item.checked) {
                        return true;
                    }

                    return false;
                }).map(x => x.name);
            }
        }),
        productsPaginated: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            var indexStart = (this.get('selectedPage') - 1) * this.get('itemsPerPage');
            return this.get('products').slice(indexStart, this.get('itemsPerPage') + indexStart);
        }),
        lastPage: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            return this.totalPages() == 1 ? null : this.totalPages();
        }),
        midPages: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            var selectedPage = this.get('selectedPage');
            var totalPages = this.totalPages();
            var lastPage = this.get('lastPage');

            if (totalPages > 2) {
                var midPages = [];

                if (selectedPage - 1 > 1) {
                    midPages = [selectedPage];
                    midPages.unshift(selectedPage - 1);
                } else if (selectedPage - 1 > 0) {
                    midPages = [selectedPage];
                }

                if (lastPage - selectedPage > 1) {
                    midPages.push(selectedPage + 1);
                } else if (lastPage - selectedPage > 0) {
                    midPages = [selectedPage];
                }

                if (selectedPage - 1 > 1) {
                    Ember.set(this, 'showPrevDots', true);
                } else {
                    Ember.set(this, 'showPrevDots', false);
                }

                if (lastPage - selectedPage > 1) {
                    Ember.set(this, 'showAfterDots', true);
                } else {
                    Ember.set(this, 'showAfterDots', false);
                }

                return midPages;
            }

            return null;
        }),

        totalPages() {
            return Math.ceil(this.get('products').length / this.get('itemsPerPage'));
        },

        productsCount: Ember.computed('products', function () {
            return this.get('products') ? this.get('products').length : 0;
        }),
        subCategories: Ember.computed('selectedCategory', function () {
            return this.get('selectedCategory') ? this.get('store').peekRecord('category', this.get('selectedCategory').id).sub_categories.sortBy('name') : null;
        }),
        filteredProducts: Ember.computed('selectedSubCategory.name', function () {
            if (this.get('selectedSubCategory')) {
                var products = this.get('store').peekAll('product').filter(product => product.sub_category == this.get('selectedSubCategory').uuid);
            }

            return products;
        }),
        products: Ember.computed('checkedMarket', 'sorting', 'filteredProducts', function () {
            var prods = this.get('filteredProducts');
            var market = this.get('checkedMarket');
            var marketImg;
            var flag;

            if (market) {
                var prods = prods.filter(function (product) {
                    for (var z = 0; z < product.prices.length; z++) {
                        if (product.prices[z].price && market == product.prices[z].merchant.name) {
                            flag = true;
                            marketImg = product.prices[z].merchant.image;
                            Ember.set(product, 'singlePrice', [product.prices[z]]);
                            break;
                        } else {
                            flag = false;
                        }
                    }

                    return flag;
                });
                Ember.set(this, 'marketImg', marketImg);
            } else {
                Ember.set(this, 'marketImg', null);
            }

            if (this.get('sorting') == 'ascending') {
                return prods.sortBy('minPrice');
            } else {
                return prods.sortBy('minPrice').reverse();
            }
        }),
        changeOutline: Ember.observer('selectedSubCategory.name', function () {
            if (this.get('selectedSubCategory')) {
                $("#enabled").addClass("noOutline");
            }
        }),
        date: Ember.computed('productsCount', function () {
            var date = parseInt(this.get('productsCount')) > 0 ? JSON.parse(this.get('filteredProducts')[0].prices[this.get('filteredProducts')[0].prices.length - 1].extra_fields).date : null;
            Ember.set(this.get('cart'), 'date', date);
            return date;
        }),
        actions: {
            addToCart(product) {
                this.cart.add(product);
                Ember.set(product, 'isInBasket', true);
            },

            removePiece(product) {
                this.cart.removePiece(product);
            },

            click() {
                let clickable = true;
            },

            decrementPage() {
                if (this.get('selectedPage') != 1) {
                    Ember.set(this, 'selectedPage', this.get('selectedPage') - 1);
                }
            },

            incrementPage() {
                if (this.get('selectedPage') != this.totalPages()) {
                    Ember.set(this, 'selectedPage', this.get('selectedPage') + 1);
                }
            },

            selectPage(page) {
                Ember.set(this, 'selectedPage', page);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/product", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        selectedSorting: 'Ξ¦ΞΈΞ―Ξ½ΞΏΟΟΞ± Ξ£Ξ΅ΞΉΟΞ¬',
        sortingOptions: ['Ξ¦ΞΈΞ―Ξ½ΞΏΟΟΞ± Ξ£Ξ΅ΞΉΟΞ¬', 'ΞΟΞΎΞΏΟΟΞ± Ξ£Ξ΅ΞΉΟΞ¬'],
        product: Ember.computed('model', function () {
            return this.get('model');
        }),
        marketPrices: Ember.computed('product', 'selectedSorting', function () {
            var product = this.get('product');
            var prices = this.get('selectedSorting') == 'Ξ¦ΞΈΞ―Ξ½ΞΏΟΟΞ± Ξ£Ξ΅ΞΉΟΞ¬' ? product.prices.sortBy('price') : product.prices.sortBy('price').reverse();
            return prices;
        }),
        subCategory: Ember.computed('product', function () {
            const category = this.get('store').peekRecord('category', this.get('product').category);
            return category.sub_categories.find(subcategory => subcategory.uuid == this.get('product').sub_category).name;
        }),
        pricePerDay: Ember.computed('product', function () {
            return this.get('store').peekAll('price-per-day').slice(-6);
        }),
        pricePerDayDates: Ember.computed('pricePerDay', function () {
            return this.get('pricePerDay').map(item => item.Day_Month);
        }),
        pricePerDayAvg: Ember.computed('pricePerDay', function () {
            return this.get('pricePerDay').map(item => item.Avg_Price);
        }),
        avgMax: Ember.computed('pricePerDayAvg', function () {
            return Math.max(...this.get('pricePerDayAvg'));
        }),
        avgMin: Ember.computed('pricePerDayAvg', function () {
            return Math.min(...this.get('pricePerDayAvg'));
        }),

        padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        },

        formatDate(date) {
            return [this.padTo2Digits(date.getDate()), this.padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('/');
        },

        date: Ember.computed(function () {
            var dates = this.get('product').prices.map(x => {
                var date = JSON.parse(x.extra_fields).date;
                date = date.split('/').reverse().join('/');
                return new Date(date).getTime();
            });
            var maxDate = Math.max(...dates);
            maxDate = this.formatDate(new Date(maxDate));
            return maxDate;
        }),
        chartOptions: Ember.computed('pricePerDayDates', function () {
            const self = this;
            return {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'ΞΞΎΞ­Ξ»ΞΉΞΎΞ· Ξ€ΞΉΞΌΞ�Ο ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ΅Ξ½Ξ·Ο Ξ΅Ξ²Ξ΄ΞΏΞΌΞ¬Ξ΄Ξ±Ο'
                },
                xAxis: {
                    categories: this.get('pricePerDayDates')
                },
                yAxis: {
                    labels: {
                        formatter: function () {
                            return parseFloat(this.axis.defaultLabelFormatter.call(this)).toFixed(2) + 'β¬';
                        }
                    },
                    title: {
                        text: ''
                    },
                    max: this.get('avgMax') + 0.02,
                    min: this.get('avgMin') - 0.02
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'β¬'
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#29D0BC'],
                                [1, Highcharts.color('#29D0BC').setOpacity(0).get('rgba')]
                            ]
                        }
                    },
                    series: {
                        color: '#29D0BC'
                    }
                }
            };
        }),
        chartData: Ember.computed('pricePerDayDates', function () {
            const self = this;
            return [{
                name: '',
                data: this.get('pricePerDayAvg')
            }];
        }),
        actions: {
            addToCart(product) {
                this.cart.add(product);
                Ember.set(product, 'isInBasket', true);
            },

            removePiece(product) {
                this.cart.removePiece(product);
            },

            toggleSorting() {
                if (this.get('selectedSorting') == 'Ξ¦ΞΈΞ―Ξ½ΞΏΟΟΞ± Ξ£Ξ΅ΞΉΟΞ¬') {
                    Ember.set(this, 'selectedSorting', 'ΞΟΞΎΞΏΟΟΞ± Ξ£Ξ΅ΞΉΟΞ¬');
                } else {
                    Ember.set(this, 'selectedSorting', 'Ξ¦ΞΈΞ―Ξ½ΞΏΟΟΞ± Ξ£Ξ΅ΞΉΟΞ¬');
                }
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/products", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        categories: Ember.computed(function () {
            return this.get('store').peekAll('category').sortBy('name');
        }),
        subCategories: Ember.computed('selectedCategory', function () {
            return this.get('selectedCategory') ? this.get('store').peekRecord('category', this.get('selectedCategory').id).sub_categories.sortBy('name') : null;
        }),
        changeOutline: Ember.observer('selectedSubCategory.name', function () {
            if (this.get('selectedSubCategory')) {
                $("#enabled").addClass("noOutline");
            }
        }),
        results: Ember.inject.service('results-preview'),

        padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        },

        formatDate(date) {
            return [this.padTo2Digits(date.getDate()), this.padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('/');
        },

        date: Ember.computed('productsCount', function () {
            if (parseInt(this.get('productsCount')) > 0) {
                var product = this.get('filteredProducts')[0];
                var dates = product.prices.map(x => {
                    var date = JSON.parse(x.extra_fields).date;
                    date = date.split('/').reverse().join('/');
                    return new Date(date).getTime();
                });
                var maxDate = Math.max(...dates);
                maxDate = this.formatDate(new Date(maxDate));
                return maxDate;
            } else {
                return null;
            }
        }),
        actions: {
            goToProducts() {
                if (!this.get('selectedCategory')) {
                    Ember.set(this, 'categoryError', true);
                    Ember.set(this, 'subCategoryError', true);
                    return;
                } else if (!this.get('selectedSubCategory')) {
                    Ember.set(this, 'categoryError', false);
                    Ember.set(this, 'subCategoryError', true);
                    return;
                }

                this.transitionToRoute('product-preview');
                let results = Ember.set(this, 'results.category', this.get('selectedCategory'));
                let results1 = Ember.set(this, 'results.subCategory', this.get('selectedSubCategory'));
                console.log(this.get('results').category);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/rantevou", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        incomplete: Ember.computed('model', function () {
            let model = this.model;
            return model.filter(item => new Date(item.time) > new Date());
        }),
        complete: Ember.computed('model', function () {
            let model = this.model;
            return model.filter(item => new Date(item.time) <= new Date());
        }),
        actions: {
            submit() {
                try {
                    //   document.getElementById("spinner-back").classList.add("show");
                    //   document.getElementById("spinner-front").classList.add("show");
                    var unsetFields = false;
                    var data = {
                        name: $("#name").val(),
                        vat: $("#vat").val(),
                        address: $("#address").val(),
                        email: $("#email").val()
                    };

                    for (var x in data) {
                        $("#" + x).removeClass('error');

                        if (!data[x]) {
                            $("#" + x).addClass('error');
                            unsetFields = true;
                        }
                    }

                    if (unsetFields) {
                        // document.getElementById("spinner-back").classList.remove("show");
                        // document.getElementById("spinner-front").classList.remove("show");
                        return;
                    }

                    $.ajax({
                        'url': ' https://engage-stage.warp.ly/dashboard/api/merchants/click_away',
                        'method': 'POST',
                        'data': JSON.stringify(data),
                        'contentType': "application/json",
                        'success': function (response) {
                            //   document.getElementById("spinner-back").classList.remove("show");
                            //   document.getElementById("spinner-front").classList.remove("show");
                            for (var x in data) {
                                $("#" + x).val('');
                            }

                            if (response.status == 1) {
                                $('#responseMessage').text('Ξ Ξ΅Ξ³Ξ³ΟΞ±ΟΞ� ΟΞ±Ο ΞΊΞ±ΟΞ±ΟΟΟΞ�ΞΈΞ·ΞΊΞ΅ Ξ΅ΟΞΉΟΟΟΟΟ!');
                            } else if (response.status == 3) {
                                $('#responseMessage').text('Ξ ΟΟΞ³ΞΊΞ΅ΞΊΟΞΉΞΌΞ­Ξ½ΞΏΟ ΟΟΞ�ΟΟΞ·Ο Ξ­ΟΞ΅ΞΉ Ξ�Ξ΄Ξ· Ξ΅Ξ³Ξ³ΟΞ±ΟΞ΅Ξ―.');
                            } else {
                                $('#responseMessage').text('ΞΞ¬ΟΞΉ ΟΞ�Ξ³Ξ΅ ΟΟΟΞ±Ξ²Ξ¬, ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ο Ξ΄ΞΏΞΊΞΉΞΌΞ¬ΟΟΞ΅ Ξ±ΟΞ³ΞΏΟΞ΅ΟΞ¬.');
                            }

                            $('#exampleModal').modal('hide');
                            $('#responseModal').modal('show');
                        },
                        'error': function (response) {
                            //   document.getElementById("spinner-back").classList.remove("show");
                            //   document.getElementById("spinner-front").classList.remove("show");
                            $('#responseMessage').text('ΞΞ¬ΟΞΉ ΟΞ�Ξ³Ξ΅ ΟΟΟΞ±Ξ²Ξ¬, ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ο Ξ΄ΞΏΞΊΞΉΞΌΞ¬ΟΟΞ΅ Ξ±ΟΞ³ΞΏΟΞ΅ΟΞ¬.');
                            $('#exampleModal').modal('hide');
                            $('#responseModal').modal('show');
                        }
                    });
                } catch (error) {
                    console.log(error); //   document.getElementById("spinner-back").classList.remove("show");
                    //   document.getElementById("spinner-front").classList.remove("show");

                    $('#responseMessage').text('ΞΞ¬ΟΞΉ ΟΞ�Ξ³Ξ΅ ΟΟΟΞ±Ξ²Ξ¬, ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ο Ξ΄ΞΏΞΊΞΉΞΌΞ¬ΟΟΞ΅ Ξ±ΟΞ³ΞΏΟΞ΅ΟΞ¬.');
                    $('#exampleModal').modal('hide');
                    $('#responseModal').modal('show');
                }
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/santas-basket", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        selectedPage: 1,
        itemsPerPage: 51,
        displayOptions: {
            diabetes: 'Ξ§ΞΞΞΞΞΞ£ ΞΞΞ₯ΞΞΞΞΞΞΞΞ£ ΞΞΞΞΞ€ΞΞ£'
        },
        products: Ember.computed('model', function () {
            try {
                console.log(this.get('model'));
                return this.get('model').get('firstObject').basket;
            } catch (e) {
                console.log(e);
            }
        }),
        productsPaginated: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            if (this.get('products')) {
                var indexStart = (this.get('selectedPage') - 1) * this.get('itemsPerPage');
                return this.get('products').slice(indexStart, this.get('itemsPerPage') + indexStart);
            }
        }),
        lastPage: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            if (this.get('products')) {
                return this.totalPages() == 1 ? null : this.totalPages();
            }
        }),
        midPages: Ember.computed('products', 'products.@each', 'selectedPage', function () {
            if (this.get('products')) {
                var selectedPage = this.get('selectedPage');
                var totalPages = this.totalPages();
                var lastPage = this.get('lastPage');

                if (totalPages > 3) {
                    var midPages = [];

                    if (selectedPage - 1 > 1) {
                        midPages = [selectedPage];
                        midPages.unshift(selectedPage - 1);
                    } else if (selectedPage - 1 > 0) {
                        midPages = [selectedPage];
                    }

                    if (lastPage - selectedPage > 1) {
                        midPages.push(selectedPage + 1);
                    } else if (lastPage - selectedPage > 0) {
                        midPages = [selectedPage];
                    }

                    if (selectedPage - 1 > 1) {
                        Ember.set(this, 'showPrevDots', true);
                    } else {
                        Ember.set(this, 'showPrevDots', false);
                    }

                    if (lastPage - selectedPage > 1) {
                        Ember.set(this, 'showAfterDots', true);
                    } else {
                        Ember.set(this, 'showAfterDots', false);
                    }

                    return midPages;
                } else if (totalPages == 3) {
                    return [2];
                }

                return null;
            }
        }),

        totalPages() {
            if (this.get('products')) {
                return Math.ceil(this.get('products').length / this.get('itemsPerPage'));
            } else {
                return 0;
            }
        },

        pricePerDayAvg: Ember.computed(function () {
            return this.get('variance').map(item => item.Avg_Price);
        }),
        pricePerDayDates: Ember.computed(function () {
            return this.get('variance')[0].map(item => item.Day_Month);
        }),
        chartOptionsProduct: Ember.computed(function () {
            const self = this;
            return {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Ξ€ΞΉΞΌΞ� ΟΟΞΏΟΟΞ½ΟΞΏΟ',
                    style: {
                        fontSize: '10px'
                    }
                },
                xAxis: {
                    visible: false,
                    categories: self.get('pricePerDayDates')
                },
                yAxis: {
                    visible: false
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'β¬/ΟΞ΅ΞΌ'
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#29D0BC'],
                                [1, Highcharts.color('#29D0BC').setOpacity(0).get('rgba')]
                            ]
                        }
                    },
                    series: {
                        color: '#29D0BC'
                    }
                }
            };
        }),
        chartOptionsCategory: Ember.computed(function () {
            const self = this;
            return {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'ΞΞΉΞ±ΞΊΟΞΌΞ±Ξ½ΟΞ· ΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±Ο',
                    style: {
                        fontSize: '10px'
                    }
                },
                xAxis: {
                    visible: false,
                    categories: self.get('pricePerDayDates')
                },
                yAxis: {
                    visible: false
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: 'β¬/ΟΞ΅ΞΌ'
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#0035C5'],
                                [1, Highcharts.color('#0035C5').setOpacity(0).get('rgba')]
                            ]
                        }
                    },
                    series: {
                        color: '#0035C5'
                    }
                }
            };
        }),
        actions: {
            selectRetailer(retailer) {
                this.get('model').forEach(x => x.active = false);
                retailer.active = true;
                Ember.set(this, 'products', retailer.basket);
                Ember.set(this, 'selectedPage', 1);
            },

            decrementPage() {
                if (this.get('selectedPage') != 1) {
                    Ember.set(this, 'selectedPage', this.get('selectedPage') - 1);
                }
            },

            incrementPage() {
                if (this.get('selectedPage') != this.totalPages()) {
                    Ember.set(this, 'selectedPage', this.get('selectedPage') + 1);
                }
            },

            selectPage(page) {
                Ember.set(this, 'selectedPage', page);
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/controllers/shops", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Controller.extend({
        filteredShopsByRegion: Ember.computed('regionQuery', 'filteredShops', function () {
            let query = this.get('regionQuery');

            if (!query) {
                return this.get('filteredShops');
            } else {
                return this.get('filteredShops').filter(shop => shop.region.includes(query.toLocaleUpperCase()));
            }
        }),
        product: Ember.computed('model', function () {
            return this.get('model');
        }),
        merchants: Ember.computed('model', function () {
            var merchants = this.get('model').prices.filter(price => price.price > 0).map(price => price.merchant.name);
            return merchants.map(function (merchant) {
                if (merchant == 'My Market ') {
                    return 'My Market';
                }

                return merchant;
            });
        }),
        filteredShops: Ember.computed('model', function () {
            return this.store.peekAll('shop').filter(shop => this.get('merchants').includes(shop.merchant));
        }),
        avgPrice: Ember.computed('pricePerDay', function () {
            var pricePerDay = this.get('store').peekAll('price-per-day').slice(-6);
            return pricePerDay[pricePerDay.length - 1].Avg_Price;
        })
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _and.default;
        }
    });
    Object.defineProperty(_exports, "and", {
        enumerable: true,
        get: function () {
            return _and.and;
        }
    });
});;
define("katanalotis-microsite/helpers/app-version", ["exports", "katanalotis-microsite/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.appVersion = appVersion;
    _exports.default = void 0;

    function appVersion(_, hash = {}) {
        const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
        // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

        let versionOnly = hash.versionOnly || hash.hideSha;
        let shaOnly = hash.shaOnly || hash.hideVersion;
        let match = null;

        if (versionOnly) {
            if (hash.showExtended) {
                match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
            } // Fallback to just version


            if (!match) {
                match = version.match(_regexp.versionRegExp); // 1.0.0
            }
        }

        if (shaOnly) {
            match = version.match(_regexp.shaRegExp); // 4jds75hf
        }

        return match ? match[0] : version;
    }

    var _default = Ember.Helper.helper(appVersion);

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/available-markets", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Helper.helper(function availableMarkets(params
        /*, hash*/
    ) {
        const prices = params[0].map(price => price.price).filter(price => price != 0);
        return prices.length;
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsContains.default;
        }
    });
    Object.defineProperty(_exports, "bsContains", {
        enumerable: true,
        get: function () {
            return _bsContains.bsContains;
        }
    });
});;
define("katanalotis-microsite/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _bsEq.default;
        }
    });
    Object.defineProperty(_exports, "eq", {
        enumerable: true,
        get: function () {
            return _bsEq.eq;
        }
    });
});;
define("katanalotis-microsite/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _cancelAll.default;
        }
    });
});;
define("katanalotis-microsite/helpers/decimals", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Helper.helper(function lowestPrice(params
        /*, hash*/
    ) {
        return params[0].toFixed(2);
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _emberPowerSelectIsGroup.default;
        }
    });
    Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
        enumerable: true,
        get: function () {
            return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
        }
    });
});;
define("katanalotis-microsite/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _emberPowerSelectIsSelected.default;
        }
    });
    Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
        enumerable: true,
        get: function () {
            return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
        }
    });
});;
define("katanalotis-microsite/helpers/ember-power-select-true-string-if-present", ["exports", "ember-power-select/helpers/ember-power-select-true-string-if-present"], function (_exports, _emberPowerSelectTrueStringIfPresent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _emberPowerSelectTrueStringIfPresent.default;
        }
    });
    Object.defineProperty(_exports, "emberPowerSelectTrueStringIfPresent", {
        enumerable: true,
        get: function () {
            return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
        }
    });
});;
define("katanalotis-microsite/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _equal.default;
        }
    });
    Object.defineProperty(_exports, "equal", {
        enumerable: true,
        get: function () {
            return _equal.equal;
        }
    });
});;
define("katanalotis-microsite/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _gt.default;
        }
    });
    Object.defineProperty(_exports, "gt", {
        enumerable: true,
        get: function () {
            return _gt.gt;
        }
    });
});;
define("katanalotis-microsite/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _gte.default;
        }
    });
    Object.defineProperty(_exports, "gte", {
        enumerable: true,
        get: function () {
            return _gte.gte;
        }
    });
});;
define("katanalotis-microsite/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _isArray.default;
        }
    });
    Object.defineProperty(_exports, "isArray", {
        enumerable: true,
        get: function () {
            return _isArray.isArray;
        }
    });
});;
define("katanalotis-microsite/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _isEmpty.default;
        }
    });
});;
define("katanalotis-microsite/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _isEqual.default;
        }
    });
    Object.defineProperty(_exports, "isEqual", {
        enumerable: true,
        get: function () {
            return _isEqual.isEqual;
        }
    });
});;
define("katanalotis-microsite/helpers/lowest-price", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Helper.helper(function lowestPrice(params
        /*, hash*/
    ) {
        if (params[1] && params[2]) {
            return params[1][0].price.toFixed(2);
        }

        const prices = params[0].map(price => price.price).filter(price => price != 0);
        var least = Math.min(...prices);
        return least.toFixed(2);
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _lt.default;
        }
    });
    Object.defineProperty(_exports, "lt", {
        enumerable: true,
        get: function () {
            return _lt.lt;
        }
    });
});;
define("katanalotis-microsite/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _lte.default;
        }
    });
    Object.defineProperty(_exports, "lte", {
        enumerable: true,
        get: function () {
            return _lte.lte;
        }
    });
});;
define("katanalotis-microsite/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _notEqual.default;
        }
    });
    Object.defineProperty(_exports, "notEq", {
        enumerable: true,
        get: function () {
            return _notEqual.notEq;
        }
    });
});;
define("katanalotis-microsite/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _not.default;
        }
    });
    Object.defineProperty(_exports, "not", {
        enumerable: true,
        get: function () {
            return _not.not;
        }
    });
});;
define("katanalotis-microsite/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _onDocument.default;
        }
    });
});;
define("katanalotis-microsite/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _onWindow.default;
        }
    });
});;
define("katanalotis-microsite/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _on.default;
        }
    });
});;
define("katanalotis-microsite/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _or.default;
        }
    });
    Object.defineProperty(_exports, "or", {
        enumerable: true,
        get: function () {
            return _or.or;
        }
    });
});;
define("katanalotis-microsite/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _perform.default;
        }
    });
});;
define("katanalotis-microsite/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var _default = _pluralize.default;
    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/price-sum", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Helper.helper(function priceSum(params
        /*, hash*/
    ) {
        var result = params[0].map(product => product.price * product.count).reduce((a, b) => a + b, 0);
        return result % 1 == 0 ? result : result.toFixed(2);
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/product-price-sum", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Helper.helper(function productPriceSum(params
        /*, hash*/
    ) {
        var result = params[0].price * params[0].count;
        return result % 1 == 0 ? result : result.toFixed(2);
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/set-chart-data", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Helper.helper(function setChartData(params
        /*, hash*/
    ) {
        if (params.length == 2) {
            let variance = params[0];
            let category = params[1] - 1;

            try {
                let data = variance[category].map(item => parseFloat(item.Price));
                return [{
                    name: '',
                    data: data
                }];
            } catch (e) {
                return [{
                    name: '',
                    data: []
                }];
            }
        } else {
            try {
                let data = params[0].map(item => parseFloat(item.Price));
                return [{
                    name: '',
                    data: data
                }];
            } catch (e) {
                return [{
                    name: '',
                    data: []
                }];
            }
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/set-chart-options", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Helper.helper(function setChartOptions(params
        /*, hash*/
    ) {
        let variance = params[0];
        let type = params[1];
        let category;
        let categories;

        if (params[2]) {
            category = params[2] - 1;
            categories = variance[category].map(item => item.Product + ' ' + item.Day_Month);
        } else {
            categories = variance.map(item => item.Product + ' ' + item.Day_Month);
        }

        let color = type == 'product' ? '#29D0BC' : '#0035C5';
        let title = type == 'product' ? 'ΞΞΉΞ±ΞΊΟΞΌΞ±Ξ½ΟΞ· ΟΟΞΏΟΟΞ½ΟΞΏΟ' : 'ΞΞΉΞ±ΞΊΟΞΌΞ±Ξ½ΟΞ· ΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±Ο';
        return {
            chart: {
                type: 'area'
            },
            title: {
                text: title,
                style: {
                    fontSize: '10px'
                }
            },
            xAxis: {
                visible: false,
                categories: categories
            },
            yAxis: {
                visible: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            tooltip: {
                valueSuffix: 'β¬/ΟΞ΅ΞΌ',
                outside: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, color],
                            [1, Highcharts.color(color).setOpacity(0).get('rgba')]
                        ]
                    }
                },
                series: {
                    color: color
                }
            }
        };
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var _default = _singularize.default;
    _exports.default = _default;
});;
define("katanalotis-microsite/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _task.default;
        }
    });
});;
define("katanalotis-microsite/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _xor.default;
        }
    });
    Object.defineProperty(_exports, "xor", {
        enumerable: true,
        get: function () {
            return _xor.xor;
        }
    });
});;
define("katanalotis-microsite/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "katanalotis-microsite/config/environment"], function (_exports, _initializerFactory, _environment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    let name, version;

    if (_environment.default.APP) {
        name = _environment.default.APP.name;
        version = _environment.default.APP.version;
    }

    var _default = {
        name: 'App Version',
        initialize: (0, _initializerFactory.default)(name, version)
    };
    _exports.default = _default;
});;
define("katanalotis-microsite/initializers/cart", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.initialize = initialize;
    _exports.default = void 0;

    function initialize(application) {
        application.inject('route', 'cart', 'service:cart');
        application.inject('controller', 'cart', 'service:cart');
        application.inject('component', 'cart', 'service:cart');
        application.inject('router:main', 'cart', 'service:cart');
    }

    var _default = {
        name: 'cart',
        initialize
    };
    _exports.default = _default;
});;
define("katanalotis-microsite/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var _default = {
        name: 'container-debug-adapter',

        initialize() {
            let app = arguments[1] || arguments[0];
            app.register('container-debug-adapter:main', _containerDebugAdapter.default);
            app.inject('container-debug-adapter:main', 'namespace', 'application:main');
        }

    };
    _exports.default = _default;
});;
define("katanalotis-microsite/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _emberConcurrency.default;
        }
    });
});;
define("katanalotis-microsite/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    /*
      This code initializes EmberData in an Ember application.
    
      It ensures that the `store` service is automatically injected
      as the `store` property on all routes and controllers.
    */
    var _default = {
        name: 'ember-data',
        initialize: _setupContainer.default
    };
    _exports.default = _default;
});;
define("katanalotis-microsite/initializers/export-application-global", ["exports", "katanalotis-microsite/config/environment"], function (_exports, _environment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.initialize = initialize;
    _exports.default = void 0;

    function initialize() {
        var application = arguments[1] || arguments[0];

        if (_environment.default.exportApplicationGlobal !== false) {
            var theGlobal;

            if (typeof window !== 'undefined') {
                theGlobal = window;
            } else if (typeof global !== 'undefined') {
                theGlobal = global;
            } else if (typeof self !== 'undefined') {
                theGlobal = self;
            } else {
                // no reasonable global, just bail
                return;
            }

            var value = _environment.default.exportApplicationGlobal;
            var globalName;

            if (typeof value === 'string') {
                globalName = value;
            } else {
                globalName = Ember.String.classify(_environment.default.modulePrefix);
            }

            if (!theGlobal[globalName]) {
                theGlobal[globalName] = application;
                application.reopen({
                    willDestroy: function () {
                        this._super.apply(this, arguments);

                        delete theGlobal[globalName];
                    }
                });
            }
        }
    }

    var _default = {
        name: 'export-application-global',
        initialize: initialize
    };
    _exports.default = _default;
});;
define("katanalotis-microsite/initializers/load-bootstrap-config", ["exports", "katanalotis-microsite/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.initialize = initialize;
    _exports.default = void 0;

    function initialize()
    /* container, application */ {
        _config.default.load(_environment.default['ember-bootstrap'] || {});
    }

    var _default = {
        name: 'load-bootstrap-config',
        initialize
    };
    _exports.default = _default;
});;
define("katanalotis-microsite/initializers/warply-sdk", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.initialize = initialize;
    _exports.default = void 0;

    function initialize(application) {
        application.inject('route', 'warply_sdk', 'service:warply-sdk');
        application.inject('controller', 'warply_sdk', 'service:warply-sdk');
        application.inject('component', 'warply_sdk', 'service:warply-sdk');
        application.inject('router:main', 'warply_sdk', 'service:warply-sdk');
    }

    var _default = {
        name: 'warply-sdk',
        initialize
    };
    _exports.default = _default;
});;
define("katanalotis-microsite/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var _default = {
        name: 'ember-data',
        initialize: _initializeStoreService.default
    };
    _exports.default = _default;
});;
define("katanalotis-microsite/models/article", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        description: _emberData.default.attr('string'),
        img_preview: _emberData.default.attr('string'),
        img: _emberData.default.attr('string'),
        category_name: _emberData.default.attr('string')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/category", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        uuid: _emberData.default.attr('string'),
        sub_categories: _emberData.default.attr()
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/fuel-filter", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        city: _emberData.default.attr(),
        region: _emberData.default.attr()
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/fuelstation-category", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        admin_name: _emberData.default.attr('string'),
        name: _emberData.default.attr('string'),
        uuid: _emberData.default.attr('string')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/fuelstation-pin", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        admin_name: _emberData.default.attr('string'),
        name: _emberData.default.attr('string'),
        address: _emberData.default.attr('string'),
        latitude: _emberData.default.attr('number'),
        longitude: _emberData.default.attr('number'),
        region: _emberData.default.attr('string'),
        city: _emberData.default.attr('string'),
        company: _emberData.default.attr('string'),
        merchant_uuid: _emberData.default.attr('string'),
        store_id: _emberData.default.attr('string'),
        postal_code: _emberData.default.attr('string'),
        vat: _emberData.default.attr('string'),
        logo: _emberData.default.attr('string'),
        price: _emberData.default.attr('string'),
        type: _emberData.default.attr('string'),
        category_uuid: _emberData.default.attr('string'),
        city: _emberData.default.attr('string'),
        latitude: _emberData.default.attr('string'),
        longitude: _emberData.default.attr('string'),
        uuid: _emberData.default.attr('string')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/fuelstation", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        admin_name: _emberData.default.attr('string'),
        name: _emberData.default.attr('string'),
        address: _emberData.default.attr('string'),
        latitude: _emberData.default.attr('number'),
        longitude: _emberData.default.attr('number'),
        region: _emberData.default.attr('string'),
        city: _emberData.default.attr('string'),
        company: _emberData.default.attr('string'),
        merchant_uuid: _emberData.default.attr('string'),
        store_id: _emberData.default.attr('string'),
        postal_code: _emberData.default.attr('string'),
        vat: _emberData.default.attr('string'),
        logo: _emberData.default.attr('string'),
        price: _emberData.default.attr('string'),
        type: _emberData.default.attr('string'),
        category_uuid: _emberData.default.attr('string'),
        city: _emberData.default.attr('string'),
        latitude: _emberData.default.attr('string'),
        longitude: _emberData.default.attr('string'),
        uuid: _emberData.default.attr('string')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/offer", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        title: _emberData.default.attr('string'),
        subtitle: _emberData.default.attr('string'),
        extra_fields: _emberData.default.attr('string'),
        logo_url: _emberData.default.attr('string'),
        offer_category: _emberData.default.attr('string')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/price-per-day", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        Avg_Price: _emberData.default.attr('number'),
        Date: _emberData.default.attr('string'),
        Day_Month: _emberData.default.attr('string'),
        Full_Date: _emberData.default.attr('string'),
        Min_Price: _emberData.default.attr('number'),
        Min_Markets: _emberData.default.attr()
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/product", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        barcode: _emberData.default.attr('string'),
        name: _emberData.default.attr('string'),
        image: _emberData.default.attr('string'),
        category: _emberData.default.attr('string'),
        sub_category: _emberData.default.attr('string'),
        prices: _emberData.default.attr()
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/rantevou", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        katastima: _emberData.default.attr('string'),
        afm: _emberData.default.attr('string'),
        type: _emberData.default.attr('string'),
        date: _emberData.default.attr('date'),
        hour: _emberData.default.attr('string')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/retailer", ["exports", "ember-data", "highcharts"], function (_exports, _emberData, _highcharts) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        logo: _emberData.default.attr('string'),
        basket: _emberData.default.attr(),
        active: _emberData.default.attr('boolean')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/shop", ["exports", "ember-data"], function (_exports, _emberData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        address: _emberData.default.attr('string'),
        merchant: _emberData.default.attr('string'),
        latitude: _emberData.default.attr('number'),
        longitude: _emberData.default.attr('number'),
        image: _emberData.default.attr('number'),
        county: _emberData.default.attr('string')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/models/subcategory", ["exports", "@ember-data/model"], function (_exports, _model) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _model.default.extend({});

    _exports.default = _default;
});;
define("katanalotis-microsite/models/toy-retailer", ["exports", "ember-data", "highcharts"], function (_exports, _emberData, _highcharts) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        logo: _emberData.default.attr('string'),
        basket: _emberData.default.attr(),
        active: _emberData.default.attr('boolean')
    });

    _exports.default = _default;
    ember;
});;
define("katanalotis-microsite/models/toys-retailer", ["exports", "ember-data", "highcharts"], function (_exports, _emberData, _highcharts) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        logo: _emberData.default.attr('string'),
        basket: _emberData.default.attr(),
        active: _emberData.default.attr('boolean')
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _focusTrap.default;
        }
    });
});;
define("katanalotis-microsite/modifiers/ref", ["exports", "ember-ref-modifier/modifiers/ref"], function (_exports, _ref) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _ref.default;
        }
    });
});;
define("katanalotis-microsite/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var _default = _emberResolver.default;
    _exports.default = _default;
});;
define("katanalotis-microsite/router", ["exports", "katanalotis-microsite/config/environment"], function (_exports, _environment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    class Router extends Ember.Router {
        constructor(...args) {
            super(...args);

            _defineProperty(this, "location", _environment.default.locationType);

            _defineProperty(this, "rootURL", _environment.default.rootURL);
        }

    }

    _exports.default = Router;
    Router.map(function () {
        this.route('products', {
            path: '/products/:products_id'
        });
        this.route('useful');
        this.route('product', {
            path: '/product/:product_id'
        });
        this.route('charts', {
            path: '/charts/:product_id'
        });
        this.route('shops', {
            path: '/shops/:product_id'
        });
        this.route('product-preview');
        this.route('contact');
        this.route('fuels');
        this.route('click-away', {
            path: ':type'
        });
        this.route('rantevouModal');
        this.route('metakinisiModal');
        this.route('katastimaModal');
        this.route('rantevou');
        this.route('fuels-results');
        this.route('useful-differences');
        this.route('useful-rights');
        this.route('global-map');
        this.route('fuels-map', {
            path: ':fuels-map'
        });
        this.route('informative');
        this.route('terms');
        this.route('policy');
        this.route('faq');
        this.route('index-news', {
            path: '/index-news/:article_id'
        });
        this.route('householdBasket');
        this.route('santasBasket');
    });
});;
define("katanalotis-microsite/routes/application", ["exports", "katanalotis-microsite/config/environment", "ember-resolver"], function (_exports, _environment, _emberResolver) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        successGetProducts(data) {
            let self = this;
            var categories = data.context.MAPP_PRODUCTS.result.categories;
            var products = data.context.MAPP_PRODUCTS.result.products;
            $.each(categories, function (i, item) {
                self.store.createRecord('category', {
                    name: item.name,
                    uuid: item.uuid,
                    id: item.uuid,
                    sub_categories: item.sub_categories
                });
            });
            $.each(products, function (i, item) {
                if (item.prices.find(x => x.price != 0)) {
                    self.store.createRecord('product', {
                        name: item.name,
                        barcode: item.barcode,
                        image: item.image,
                        category: item.category[0],
                        sub_category: item.category[1],
                        prices: item.prices,
                        id: i,
                        minPrice: item.prices.sortBy('price').find(x => x.price != 0).price
                    });
                }
            });
        },

        errorGetProducts(data) {
            console.log(data);
        },

        successGetFuelstationCatgories(data) {
            let self = this;
            var products = data.context.MAPP_PRODUCTS.result;
            $.each(products, function (i, item) {
                self.store.createRecord('fuelstation-category', {
                    admin_name: item.admin_name,
                    name: item.name,
                    uuid: item.uuid,
                    id: item.uuid
                });
            });
        },

        errorGetFuelstationCatgories(data) {
            console.log(data);
        },

        successGetShops(data) {
            let self = this;
            var shops = data.context.MAPP_SHOPS.shops;
            $.each(shops, function (i, item) {
                let longitude = item.lng;
                let latitude = item.lat;

                if (!['undefined', '0', 'NaN'].includes(longitude) && !['undefined', '0', 'NaN'].includes(latitude) && typeof longitude != 'undefined' && typeof latitude != 'undefined' && !isNaN(longitude) && !isNaN(latitude) && longitude && latitude) {
                    self.store.createRecord('shop', {
                        address: item.address,
                        image: item.images[0],
                        latitude: parseFloat(item.lat),
                        longitude: parseFloat(item.lng),
                        name: item.name,
                        merchant: item.retailer_name
                    });
                }
            });
        },

        errorGetShops(data) {
            console.log(data);
        },

        successGetContent(data) {
            let self = this;
            var articles = data.context.CONTENT;
            $.each(articles, function (i, item) {
                if (item['img']) {
                    item['img'] = JSON.parse(item['img'])[0];
                }

                item.description = Ember.String.htmlSafe(item.description);
                self.store.createRecord('article', item);
            });
            self.store.createRecord('article', {
                img: '/assets/santasBasket.png',
                name: 'Ξ€ΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ ΟΞΏΟ ΞΞ· ΞΞ±ΟΞ―Ξ»Ξ·',
                custom_description: 'ΞΟΞ΅Ξ―ΟΞ΅ ΟΞΉΟ ΟΞΉΞΌΞ­Ο ΟΞ΅ Ξ΅ΟΞΉΞ»Ξ΅Ξ³ΞΌΞ­Ξ½Ξ± ΟΞ±ΞΉΟΞ½Ξ―Ξ΄ΞΉΞ± Ξ³ΞΉΞ± ΟΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ ΟΞΏΟ ΞΞ· ΞΞ±ΟΞ―Ξ»Ξ·!',
                category_name: 'santasbasket',
                custom_btn: 'ΞΞ΅Ο ΟΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ'
            });
            self.store.createRecord('article', {
                img: '/assets/householdBasket.png',
                name: 'Ξ€ΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ ΟΞΏΟ Ξ½ΞΏΞΉΞΊΞΏΞΊΟΟΞΉΞΏΟ',
                custom_description: 'ΞΟΞ΅Ξ―ΟΞ΅ ΟΞΉΟ ΟΞΉΞΌΞ­Ο ΟΞ΅ Ξ΅ΟΞΉΞ»Ξ΅Ξ³ΞΌΞ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ΟΞ± Ξ³ΞΉΞ± ΟΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ ΟΞΏΟ Ξ½ΞΏΞΉΞΊΞΏΞΊΟΟΞΉΞΏΟ!',
                category_name: 'basket',
                custom_btn: 'ΞΞ΅Ο ΟΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ'
            });
        },

        errorGetContent(data) {
            console.log(data);
        },

        successGetOffers(data) {
            let self = this;
            var offers = data.context.MAPP_OFFER;
            $.each(offers, function (i, item) {
                self.store.createRecord('offer', {
                    "title": item.title,
                    "subtitle": item.subtitle,
                    "logo_url": item.logo_url,
                    "extra_fields": JSON.parse(item.extra_fields),
                    "offer_category": item.offer_category
                });
            });
        },

        errorGetOffers(data) {
            console.log(data);
        },

        successGetStations(data) {
            let self = this;
            var stations = data.context.MAPP_SHOPS;
            $.each(stations, function (i, item) {
                if (item.longitude && item.latitude) {
                    item.id = i;
                    self.store.createRecord('fuelstationPin', item);
                }
            });
        },

        errorGetStations(data) {
            console.log(data);
        },

        successGetRetailers(data) {
            let self = this;
            var retailers = data.retailers;
            $.each(retailers, function (i, item) {
                self.store.createRecord('retailer', item);
            });
        },

        successGetToysRetailers(data) {
            let self = this;
            var retailers = data.retailers;
            $.each(retailers, function (i, item) {
                self.store.createRecord('toys-retailer', item);
            });
        },

        promise1() {
            new Promise((resolve, reject) => {
                warplySDK.post_context(JSON.stringify({
                    "products": {
                        "action": "katanalotis",
                        "merchant_id": _environment.default.merchant_id
                    }
                }), function (response) {
                    self.successGetProducts(response);
                    resolve(true);
                }, function (response) {
                    self.errorGetProducts(response);
                });
            });
        },

        model() {
            const self = this;
            var warplySDK = this.get('warply_sdk');
            const promise1 = new Promise((resolve, reject) => {
                warplySDK.post_context(JSON.stringify({
                    "products": {
                        "action": "katanalotis",
                        "merchant_id": _environment.default.merchant_id
                    }
                }), function (response) {
                    self.successGetProducts(response);
                    resolve(true);
                }, function (response) {
                    self.errorGetProducts(response);
                });
            });
            const promise2 = new Promise((resolve, reject) => {
                warplySDK.post_context(JSON.stringify({
                    "products": {
                        "action": "get_all_multilingual",
                        "merchant_id": _environment.default.merchant_id,
                        "filters": {
                            category_name: 'Fuels New'
                        },
                        "language": 'el'
                    }
                }), function (response) {
                    self.successGetFuelstationCatgories(response);
                    resolve(true);
                }, function (response) {
                    self.errorGetFuelstationCatgories(response);
                });
            });
            const promise3 = new Promise((resolve, reject) => {
                warplySDK.post_context(JSON.stringify({
                    "shops": {
                        "action": "get_all",
                        "merchant_id": _environment.default.merchant_id
                    }
                }), function (response) {
                    self.successGetShops(response);
                    resolve(true);
                }, function (response) {
                    self.errorGetShops(response);
                });
            });
            const promise4 = new Promise((resolve, reject) => {
                warplySDK.post_context(JSON.stringify({
                    "content": {
                        "action": "retrieve_multilingual",
                        "active": true,
                        "language": "el",
                        "merchant_id": _environment.default.merchant_id,
                        "filters": {
                            "category_name": "newsfeed"
                        }
                    }
                }), function (response) {
                    self.successGetContent(response);
                    resolve(true);
                }, function (response) {
                    self.errorGetContent(response);
                });
            });
            const promise5 = new Promise((resolve, reject) => {
                warplySDK.post_context(JSON.stringify({
                    "offers": {
                        "action": "get_inbox",
                        "merchant_id": _environment.default.merchant_id
                    }
                }), function (response) {
                    self.successGetOffers(response);
                    resolve(true);
                }, function (response) {
                    self.errorGetOffers(response);
                });
            });
            const promise6 = new Promise((resolve, reject) => {
                warplySDK.post_context(JSON.stringify({
                    shops: {
                        action: 'get_fuel_stations'
                    }
                }), function (response) {
                    self.successGetStations(response);
                    resolve(true);
                }, function (response) {
                    self.errorGetStations(response);
                });
            });
            const promise7 = new Promise((resolve, reject) => {
                warplySDK.post_context(JSON.stringify({
                    "shops": {
                        "language": "el",
                        "action": "retrieve_filters"
                    }
                }), function (data) {
                    var result = data.context.MAPP_SHOPS.result;
                    var item = {};
                    item['city'] = result.city_v4;
                    item['region'] = result.region_v4;
                    self.store.createRecord('fuel-filter', item);
                    Ember.set(self, 'fuelFiltersSet', true);
                    resolve(true);
                }, function (error) {
                    console.log(error);
                });
            });
            return new Promise(function (resolve) {
                return Ember.RSVP.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7]).then(() => {
                    $('.lds-circle').hide();
                    resolve(true);
                });
            });
        }

    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/charts", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        successGetHistory(data) {
            const self = this;
            this.get('store').peekAll('price_per_day').content.forEach(function (rec) {
                Ember.run.once(this, function () {
                    rec.deleteRecord();
                    rec.save();
                });
            }, this);
            var price = data.context.MAPP_PRODUCTS.result.Avg_min_price_per_day;
            $.each(price, function (i, item) {
                self.store.createRecord('price_per_day', item);
            });
        },

        errorGetHistory(data) {
            console.log(data);
        },

        model(params) {
            const store = this.store.peekRecord('product', params.product_id);

            if (!this.store.peekAll('price_per_day').content.length) {
                var warplySDK = this.get('warply_sdk');
                warplySDK.post_context(JSON.stringify({
                    "products": {
                        "action": "product_history",
                        "barcode": store.barcode
                    }
                }), this.successGetHistory.bind(this), this.errorGetHistory.bind(this));
            }

            try {
                return store;
            } catch (e) {
                return {};
            }
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/click-away", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        model(params) {
            return params.type;
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/contact", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/faq", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/fuels-map", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        setupController(controller) {
            this._super(...arguments);

            controller.set('trigger', true);
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/fuels-results", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        resultsService: Ember.inject.service('results-preview'),

        model(params) {
            const controller = this.controllerFor('fuels-results');
            Ember.set(this, 'date', params.date);
            Ember.set(this, 'merchant', params.merchant);
            Ember.set(controller, 'date', params.date);
            Ember.set(controller, 'merchant', params.merchant);
            return this.get('store').peekAll('fuelstation');
        },

        actions: {
            didTransition() {
                if (this.get('date') || this.get('merchant')) {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                    Ember.set(this.get('controller'), 'fuelType', this.get('store').peekAll('fuelstation-category').find(x => x.id == this.get('merchant')));
                } else if (!this.get('resultsService').fuelType) {
                    this.transitionTo('fuels');
                } else {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                    Ember.set(this.get('controller'), 'fuelType', this.get('resultsService').fuelType);
                }
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/fuels", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        setupController(controller, model) {
            controller.set('selectedCategory', null);
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/global-map", ["exports", "ember-resolver", "katanalotis-microsite/config/environment"], function (_exports, _emberResolver, _environment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        },

        formatDate(date) {
            return [this.padTo2Digits(date.getDate()), this.padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('/');
        },

        yesteradayDate: Ember.computed(function () {
            var d = new Date();
            d.setDate(d.getDate() - 1);
            return this.formatDate(d);
        }),

        successGetFuels(data) {
            const self = this;
            var result = data.context.MAPP_SHOPS.result;
            $.each(result, function (i, item) {
                let longitude = item.longitude;
                let latitude = item.latitude;

                if (!['undefined', '0', 'NaN'].includes(longitude) && !['undefined', '0', 'NaN'].includes(latitude) && typeof longitude != 'undefined' && typeof latitude != 'undefined' && !isNaN(longitude) && !isNaN(latitude) && longitude && latitude) {
                    item.id = item.uuid;

                    try {
                        self.store.createRecord('fuelstation-pin', item);
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
            Ember.set(this.controllerFor('global-map'), 'fuelstations', this.get('store').peekAll('fuelstation-pin'));
        },

        errorGetFuels(data) {
            console.log(data);
        },

        model() {
            const self = this;

            if (!this.get('store').peekAll('fuelstation-pin').length) {
                this.get('warply_sdk').post_context(JSON.stringify({
                    "shops": {
                        "action": "retrieve_multilingual",
                        "merchant_id": _environment.default.merchant_id,
                        "active": true,
                        "tags": null,
                        "language": 'el',
                        "last_product_update": this.get('yesteradayDate')
                    }
                }), this.successGetFuels.bind(this), this.errorGetFuels.bind(this));
            }
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/household-basket", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        async model() {
            let self = this;
            let controller = this.controllerFor('household-basket');
            let date = new Date();
            let formattedDate = ('0' + date.getDate()).slice(-2) + '_' + ('0' + (date.getMonth() + 1)).slice(-2) + '_' + date.getFullYear();

            if (!this.get('store').peekAll('retailer').length) {
                await $.getJSON('https://warply.s3.eu-west-1.amazonaws.com/applications/ed840ad545884deeb6c6b699176797ed/basket-retailers/basket.json', function (data) {
                    var retailers = data.retailers;
                    $.each(retailers, function (i, item) {
                        if (i == 'ab') {
                            item.active = true;
                        }

                        self.store.createRecord('retailer', item);
                    });
                    controller.set('baseURL', data.base_url);
                    controller.set('from', data.from);
                    controller.set('to', data.to);
                    controller.set('variance', data.variance);
                });
                return self.get('store').peekAll('retailer');
            }
        }

    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/index-news", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        model(params) {
            return this.store.peekRecord('article', params.article_id);
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/index", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                if (this.get('controller').stores) {
                    var scrollBottom = $(window).scrollTop() + $(window).height();
                    $("html, body").animate({
                        scrollTop: scrollBottom
                    }, "slow");
                    Ember.set(this.get('controller'), 'stores', null);
                } else {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                }
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/informative", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/policy", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/product-preview", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        resultsService: Ember.inject.service('results-preview'),
        actions: {
            didTransition() {
                if (!this.get('resultsService').category) {
                    this.transitionTo('products', 'navbar');
                } else {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                }
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/product", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        successGetHistory(data) {
            const self = this;
            this.get('store').peekAll('price_per_day').content.forEach(function (rec) {
                Ember.run.once(this, function () {
                    rec.deleteRecord();
                    rec.save();
                });
            }, this);
            var price = data.context.MAPP_PRODUCTS.result.Avg_min_price_per_day;
            $.each(price, function (i, item) {
                self.store.createRecord('price_per_day', item);
            });
        },

        errorGetHistory(data) {
            console.log(data);
        },

        model(params) {
            const store = this.store.peekRecord('product', params.product_id);
            var warplySDK = this.get('warply_sdk');
            warplySDK.post_context(JSON.stringify({
                "products": {
                    "action": "product_history",
                    "barcode": store.barcode
                }
            }), this.successGetHistory.bind(this), this.errorGetHistory.bind(this));

            try {
                return store;
            } catch (e) {
                return {};
            }
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/products", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        model(params) {
            Ember.set(this, 'isAntiseptic', params.products_id == 'antiseptic' ? true : false);
        },

        /*results: service('results-preview'),*/
        setupController(controller, model) {
            this._super(...arguments);

            controller.set('selectedCategory', null);
            controller.set('selectedSubCategory', null);
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/rantevou", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        /* 
            successGetRantevou: function(data){
                let self = this;
                var rantevou = data.context.MAPP_PRODUCTS;
                $.each(rantevou, function(i, item) {
                    self.store.createRecord('rantevou', {
                        afm: item.afm,
                        type: item.clickInside,
                        date: item.date,
                        hour: item.time,
                        id: i,     
                    });
                });
            },
        
            errorGetRantevou: function(){
                console.log("Error");
            },
        
            model(params){
                const rantevou = this.store.peekAll('rantevou', params.rantevou_id);
                this.get('warply_sdk').post_context(
                    JSON.stringify({
                        "products": {
                            "action":"click_away",
                            "subaction": "get_appointments"
                        }
                    }),this.successGetRantevou.bind(this),this.errorGetRantevou);
                    try {
                        return rantevou
                    } catch (e) {
                        return {};
                    }
            
            },
        
         */
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/santas-basket", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        async model() {
            let self = this;
            let controller = this.controllerFor('santas-basket');
            let date = new Date();
            let formattedDate = ('0' + date.getDate()).slice(-2) + '_' + ('0' + (date.getMonth() + 1)).slice(-2) + '_' + date.getFullYear();

            if (!this.get('store').peekAll('toys-retailer').length) {
                await $.getJSON('https://warply.s3.eu-west-1.amazonaws.com/applications/ed840ad545884deeb6c6b699176797ed/basket-toys/toys_basket.json', function (data) {
                    var retailers = data.retailers;
                    $.each(retailers, function (i, item) {
                        if (i == 'blablatoys') {
                            item.active = true;
                        }

                        item.logo = item.logo ? data.base_url + item.logo : "/assets/defaulticon.jpg";
                        $.each(item.basket, function (i, toy) {
                            toy.IMAGE = toy.IMAGE != null ? data.base_url + toy.IMAGE : "/assets/defaulticon.jpg";
                        });
                        self.store.createRecord('toys-retailer', item);
                    });
                    controller.set('baseURL', data.base_url);
                    controller.set('from', data.from);
                    controller.set('to', data.to);
                    controller.set('variance', data.variance);
                });
                return self.get('store').peekAll('toys-retailer');
            }
        }

    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/shops", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        successGetHistory(data) {
            const self = this;
            this.get('store').peekAll('price_per_day').content.forEach(function (rec) {
                Ember.run.once(this, function () {
                    rec.deleteRecord();
                    rec.save();
                });
            }, this);
            var price = data.context.MAPP_PRODUCTS.result.Avg_min_price_per_day;
            $.each(price, function (i, item) {
                self.store.createRecord('price_per_day', item);
            });
        },

        errorGetHistory(data) {
            console.log(data);
        },

        model(params) {
            const store = this.store.peekRecord('product', params.product_id);
            var warplySDK = this.get('warply_sdk');
            warplySDK.post_context(JSON.stringify({
                "products": {
                    "action": "product_history",
                    "barcode": store.barcode
                }
            }), this.successGetHistory.bind(this), this.errorGetHistory.bind(this));

            try {
                return store;
            } catch (e) {
                return {};
            }
        },

        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/terms", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/useful-differences", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/useful-rights", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/routes/useful", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Route.extend({
        actions: {
            didTransition() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            }

        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _json.default;
        }
    });
});;
define("katanalotis-microsite/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _jsonApi.default;
        }
    });
});;
define("katanalotis-microsite/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _rest.default;
        }
    });
});;
define("katanalotis-microsite/services/cart", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Service.extend({
        store: Ember.inject.service(),
        flag: false,
        cartOpenedOnce: false,

        init() {
            this._super(...arguments);

            const self = this;
            Ember.set(this, 'items', JSON.parse(localStorage.getItem('cartItems')) || []);
            Ember.set(this, 'merchants', JSON.parse(localStorage.getItem('cartMerchants')));
            var itemsCount = this.items.length > 0 ? this.items.reduce(function (total, x) {
                return {
                    count: total.count + x.count
                };
            }).count : 0;
            Ember.set(this, 'itemsCount', itemsCount);
        },

        updateLocalStorage(merchants) {
            var items = this.items;

            if (!this.get('flag')) {
                //items in localStorage are converted to object from ember model class   
                //Here they are converted back to model classes
                //It is implemented (first only time that cart is modified) here and not in init beacuse store is not yet populated
                Ember.set(this, 'flag', true);
                const self = this;
                var items = items.map(function (item) {
                    return {
                        count: item.count,
                        product: self.get('store').peekRecord('product', item.product.id)
                    };
                });
                Ember.set(this, 'items', items);
            }

            var cartItemsTobeStringified = items.map(function (item) {
                var a = {};
                a.product = item.product.toJSON({
                    includeId: true
                });
                a.count = item.count;
                return a;
            });
            localStorage.setItem("cartCount", this.get('itemsCount'));
            localStorage.setItem("cartItems", JSON.stringify(cartItemsTobeStringified));
            merchants ? localStorage.setItem("cartMerchants", JSON.stringify(merchants)) : localStorage.removeItem('cartMerchants');
        },

        itemsCount: 0,
        helperTrigger: 0,
        displayCart: false,
        sortedMerchants: Ember.computed.sort('merchants', function (a, b) {
            a.sum = 0;
            b.sum = 0;
            a.products.forEach(pro => a.sum += pro.price * pro.count);
            b.products.forEach(pro => b.sum += pro.price * pro.count);
            return a.sum - b.sum;
        }),
        merchantAvailable: Ember.computed('merchants', function () {
            var merchantAvailable = this.get('merchants').find(merchant => merchant.products.length == this.get('itemsCount'));
            return merchantAvailable ? true : false;
        }),

        add(item) {
            if (this.items.length == 0 || !this.get('cartOpenedOnce')) {
                Ember.set(this, 'cartOpenedOnce', true);
                this.openCart();
            }

            var alreadyAddedProduct = this.items.find(x => x.product.id == item.id);

            if (alreadyAddedProduct) {
                Ember.set(alreadyAddedProduct.product, 'count', alreadyAddedProduct.count + 1);
                Ember.set(alreadyAddedProduct, 'count', alreadyAddedProduct.count + 1); //Add product piece to merchants object

                var merchants = this.merchants;
                const self = this;
                merchants.forEach(function (merchant) {
                    merchant.products.forEach(function (product) {
                        if (product.id == item.id) {
                            Ember.set(product, 'count', product.count + 1);
                            Ember.set(self, 'helperTrigger', self.helperTrigger + 1);
                        }
                    });
                });
                Ember.set(this, 'itemsCount', this.itemsCount + 1);
                this.notifyPropertyChange('merchants');
            } else {
                Ember.set(item, 'count', 1);
                this.items.pushObject({
                    product: item,
                    count: 1
                });
                Ember.set(this, 'itemsCount', this.itemsCount + 1);

                if (!this.merchants) {
                    var merchants = this.items[0].product.prices.map(item => ({
                        name: item.merchant.name,
                        uuid: item.merchant.uuid,
                        image: item.merchant.image,
                        expanded: false,
                        products: [],
                        sum: 0
                    }));
                    Ember.set(this, 'merchants', merchants);
                } else {
                    var merchants = this.merchants;
                }

                var item = this.items[this.items.length - 1];
                var prices = item.product.prices.filter(price => price.price != 0).map(item => ({
                    merchant: item.merchant,
                    price: item.price
                }));
                prices.forEach(function (price) {
                    var product = {
                        name: item.product.name,
                        id: item.product.id,
                        price: price.price,
                        count: 1
                    };
                    merchants.find(merchant => merchant.uuid == price.merchant.uuid).products.pushObject(product);
                });
                this.notifyPropertyChange('merchants');
            }

            this.updateLocalStorage(merchants);
        },

        remove(item) {
            Ember.set(item.product, 'isInBasket', false);
            this.items.removeObject(item);
            Ember.set(this, 'itemsCount', this.itemsCount - item.count);
            var merchants = this.merchants;
            merchants.forEach(function (merchant) {
                merchant.products.forEach(function (product, index) {
                    if (product.id == item.product.id) {
                        merchant.products.removeObject(product);
                    }
                });
            });
            this.notifyPropertyChange('merchants');
            this.updateLocalStorage(merchants);
        },

        removePiece(item) {
            var product = this.items.find(x => x.product.id == item.id);

            if (!product) {
                Ember.set(item, 'count', 0);
                Ember.set(item, 'isInBasket', false);
            } else {
                if (product.count > 1) {
                    Ember.set(item, 'count', product.count - 1);
                    Ember.set(product, 'count', product.count - 1);
                    Ember.set(this, 'itemsCount', this.itemsCount - 1);
                    var merchants = this.merchants;
                    const self = this;
                    merchants.forEach(function (merchant) {
                        merchant.products.forEach(function (product) {
                            if (product.id == item.id) {
                                Ember.set(product, 'count', product.count - 1);
                                Ember.set(self, 'helperTrigger', self.helperTrigger - 1);
                            }
                        });
                    });
                } else {
                    this.remove(product);
                }
            }

            this.notifyPropertyChange('merchants');
            this.updateLocalStorage(merchants);
        },

        empty() {
            const self = this;
            var merchants = this.items[0].product.prices.map(item => ({
                name: item.merchant.name,
                uuid: item.merchant.uuid,
                image: item.merchant.image,
                expanded: false,
                products: []
            }));
            this.items.forEach(function (item) {
                var storeItem = self.get('store').peekRecord('product', item.product.id);
                Ember.set(storeItem, 'isInBasket', false);
            });
            this.items.clear();
            Ember.set(this, 'itemsCount', 0);
            Ember.set(this, 'merchants', merchants);
            this.updateLocalStorage(merchants);
        },

        expandMerchant(merchant) {
            var merchants = this.merchants;
            merchants.forEach(function (item) {
                if (item.uuid == merchant.uuid) {
                    Ember.set(merchant, 'expanded', true);
                }
            });
        },

        collapseMerchant(merchant) {
            var merchants = this.merchants;
            merchants.forEach(function (item) {
                if (item.uuid == merchant.uuid) {
                    Ember.set(merchant, 'expanded', false);
                }
            });
        },

        toggleCart() {
            this.toggleProperty('displayCart');
        },

        openCart() {
            Ember.set(this, 'displayCart', true);
        },

        closeCart() {
            Ember.set(this, 'displayCart', false);
        }

    });

    _exports.default = _default;
});;
define("katanalotis-microsite/services/index-news", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Service.extend({});

    _exports.default = _default;
});;
define("katanalotis-microsite/services/results-preview", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.Service.extend({});

    _exports.default = _default;
});;
define("katanalotis-microsite/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _textMeasurer.default;
        }
    });
});;
define("katanalotis-microsite/services/warply-sdk", ["exports", "katanalotis-microsite/config/environment"], function (_exports, _environment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    /* Warply SDK v0.1 */
    var _default = Ember.Service.extend({
        base_url: _environment.default.engageHost,
        web_id: null,
        app_uuid: _environment.default.app_uuid,
        api_key: null,
        retries: 0,
        init: function () {
            "use strict";

            this._super(...arguments);

            var self = this;
            var web_id = this.get("web_id") || localStorage.getItem("web_id");
            var api_key = this.get("api_key") || localStorage.getItem("api_key");

            if (!(web_id && api_key)) {
                this.register(function (data) {
                    if (data.hasOwnProperty("status") && data.status === "1" && data.hasOwnProperty("context")) {
                        if (data.context.hasOwnProperty("api_key")) {
                            self.set("api_key", data.context.api_key);
                            localStorage.setItem("api_key", data.context.api_key);
                        }

                        if (data.context.hasOwnProperty("web_id")) {
                            self.set("web_id", data.context.web_id);
                            localStorage.setItem("web_id", data.context.web_id);
                        }
                    }
                }.bind(this), function () {
                    console.log("Register Failed");
                }.bind(this));
            }

            if (!(this.get("web_id") && this.get("api_key"))) {
                this.set("api_key", localStorage.getItem("api_key"));
                this.set("web_id", localStorage.getItem("web_id"));
            }

            Ember.run.scheduleOnce('afterRender', this, function () {
                $('body').on('click', '[data-rmd-action]', function (e) {
                    e.preventDefault();
                    var action = $(this).data('rmd-action');
                    var $this = $(this);

                    switch (action) {
                        /*-------------------------------------------
                                Toggle Block
                        ---------------------------------------------*/
                        case 'block-open':
                            var rmdTarget = $(this).data('rmd-target');
                            var rmdBackdrop = $(this).data('rmd-backdrop-class') || '';
                            $(rmdTarget).addClass('toggled');
                            $('body').addClass('block-opened').append('<div data-rmd-action="block-close" data-rmd-target=' + rmdTarget + ' class="rmd-backdrop rmd-backdrop--dark ' + rmdBackdrop + '" />');
                            $('.rmd-backdrop').fadeIn(300);
                            break;

                        case 'block-close':
                            var rmdTarget = $(this).data('rmd-target');
                            $(rmdTarget).removeClass('toggled');
                            $('body').removeClass('block-opened');
                            $('.rmd-backdrop').fadeOut(300);
                            setTimeout(function () {
                                $('.rmd-backdrop').remove();
                            }, 300);
                            break;

                        /*-------------------------------------------
                                Navigation close
                        ---------------------------------------------*/

                        case 'navigation-close':
                            $('.navigation').removeClass('toggled');
                            $('body').removeClass('block-opened');
                            $('.rmd-backdrop').fadeOut(300);
                            setTimeout(function () {
                                $('.rmd-backdrop').remove();
                            }, 300);
                            break;

                        case 'dropdown-open':
                            console.log('click');
                            $('.navigation__dropdown.visible-xs .navigation__drop-menu').toggleClass('hidden');
                            $('.navigation__dropdown.visible-xs').toggleClass('opened');
                    }
                });
            });
        },
        prepare_request: function (xhr) {
            "use strict";

            var now = new Date();
            var date_format = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            xhr.setRequestHeader('loyalty-web-id', this.get("web_id"));
            xhr.setRequestHeader('loyalty-date', date_format);
            xhr.setRequestHeader('loyalty-signature', sha256_digest(this.get("api_key") + date_format));
            xhr.setRequestHeader('Channel', 'web');
        },
        register: function (succ_cb, error_cb) {
            "use strict";

            $.ajax({
                url: 'https://engage.warp.ly/api/mobile/v2/' + this.get("app_uuid") + '/register/',
                type: 'GET',
                async: false,
                success: function (data) {
                    succ_cb(data);
                },
                error: function () {
                    error_cb();
                }
            });
        },
        add_tags: function (...tags) {
            this.send_tag_event("add_tags", tags);
        },
        remove_tags: function (...tags) {
            this.send_tag_event("remove_tags", tags);
        },
        rewrite_tags: function (...tags) {
            this.send_tag_event("rewrite_tags", tags);
        },
        send_tag_event: function (action, tags) {
            var data = {};
            data.tags = {};
            data.tags.action = action;
            data.tags.tags = tags;
            this.post_context(JSON.stringify(data));
        },
        add_event: function (page_id, event) {
            var data = {};
            data.inapp_analytics = {};
            data.inapp_analytics.page_id = page_id;
            data.inapp_analytics.event_id = event;
            data.inapp_analytics.time_submitted = Date.now().toString();
            this.post_context(JSON.stringify(data));
        },
        get_context: function (succ_cb, error_cb) {
            // var self = this;
            // self.get("spinner").task();
            $.ajax({
                url: 'https://engage.warp.ly/api/mobile/v2/' + this.get("app_uuid") + '/context/',
                type: 'GET',
                success: function (data) {
                    succ_cb(data);
                },
                error: function () {
                    error_cb();
                },
                beforeSend: this.prepare_request // }).always(function(){self.get("spinner").endTask();});

            });
        },
        get_method: function (url, succ_cb, error_cb) {
            // var self = this;
            // self.get("spinner").task();
            $.ajax({
                url: url,
                type: 'GET',
                success: function (data) {
                    succ_cb(data);
                },
                error: function () {
                    error_cb();
                },
                beforeSend: this.prepare_request // }).always(function(){self.get("spinner").endTask();});

            });
        },
        post_context: function (payload, succ_cb, error_cb) {
            var self = this;
            var app_uuid = this.get('app_uuid'); // self.get("spinner").task();

            try {
                $.ajax({
                    url: 'https://engage.warp.ly/api/mobile/v2/' + app_uuid + '/context/',
                    type: 'POST',
                    async: false,
                    data: payload,
                    success: function (data) {
                        if (succ_cb) {
                            if (data.hasOwnProperty('status') && data.status === "9") {
                                self.set('retries', self.get('retries') + 1);

                                if (self.get('retries') <= 1) {
                                    $.ajax({
                                        url: 'https://engage.warp.ly/api/mobile/v2/' + this.get("app_uuid") + '/register/',
                                        type: 'GET',
                                        async: false,
                                        success: function (data) {
                                            if (data.hasOwnProperty("status") && data.status === "1" && data.hasOwnProperty("context")) {
                                                if (data.context.hasOwnProperty("api_key")) {
                                                    self.set("api_key", data.context.api_key);
                                                    localStorage.setItem("api_key", data.context.api_key);
                                                }

                                                if (data.context.hasOwnProperty("web_id")) {
                                                    self.set("web_id", data.context.web_id);
                                                    localStorage.setItem("web_id", data.context.web_id);
                                                }

                                                self.post_context(payload, succ_cb, error_cb);
                                            }
                                        }.bind(this),
                                        error: function () {
                                            error_cb();
                                        }
                                    });
                                }
                            }

                            succ_cb(data);
                        }
                    }.bind(self),
                    error: function () {
                        if (succ_cb) {
                            error_cb();
                        }
                    },
                    beforeSend: this.prepare_request.bind(this),
                    contentType: "application/json"
                }).always(function () { // self.get("spinner").endTask();
                });
            } catch (e) {
                console.log(e); // self.get("spinner").endTask();
            }
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/application", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "Y1Gt4+iN",
        "block": "{\"symbols\":[],\"statements\":[[1,[22,\"navbar\"],false],[0,\"\\n\"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[1,[22,\"footer\"],false],[0,\"\\n\"],[1,[22,\"cookies\"],false]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/application.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/charts", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "27k6pV4g",
        "block": "{\"symbols\":[\"date\",\"minMerchantImage\"],\"statements\":[[7,\"div\",true],[10,\"id\",\"charts\"],[10,\"class\",\"container-fluid navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"mt-50 white-title\"],[8],[0,\"ΞΞΎΞ­Ξ»ΞΉΞΎΞ· Ξ€ΞΉΞΌΞ�Ο\"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"white-container container pt-4\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"d-flex align-items-center\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"class\",\"chart-product-img\"],[11,\"src\",[24,[\"product\",\"image\"]]],[8],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"product-name\"],[8],[1,[24,[\"product\",\"name\"]],false],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-lg-8 offset-lg-2 mt-lg-5 mb-lg-5\"],[8],[0,\"\\n        \"],[1,[28,\"high-charts\",null,[[\"chartOptions\",\"content\"],[[24,[\"chartOptionsMin\"]],[24,[\"chartDataMin\"]]]]],false],[0,\"\\n        \"],[9],[0,\"        \\n        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-lg-8 offset-lg-2 mt-lg-5 mb-lg-5\"],[8],[0,\"\\n        \"],[1,[28,\"high-charts\",null,[[\"chartOptions\",\"content\"],[[24,[\"chartOptionsAvg\"]],[24,[\"chartDataAvg\"]]]]],false],[0,\"\\n        \"],[9],[0,\"     \\n        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-lg-8 offset-lg-2 mt-lg-5\"],[8],[0,\"\\n        \"],[1,[28,\"high-charts\",null,[[\"chartOptions\",\"content\"],[[24,[\"chartOptionsMerchant\"]],[24,[\"chartDataMerchant\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-lg-8 offset-lg-2\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row row-chart-img\"],[8],[0,\"              \\n\"],[4,\"each\",[[24,[\"minMerchantsImages\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"flex-1\"],[8],[0,\"  \\n\"],[4,\"each\",[[23,1,[]]],null,{\"statements\":[[0,\"                    \"],[7,\"div\",true],[10,\"class\",\"chart-imgs-wrapper\"],[8],[0,\"\\n                        \"],[7,\"img\",true],[10,\"class\",\"chart-img\"],[11,\"src\",[23,2,[]]],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"                \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/charts.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/click-away", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "f2fHuXdq",
        "block": "{\"symbols\":[],\"statements\":[[7,\"link\",true],[10,\"rel\",\"stylesheet\"],[10,\"href\",\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\"],[8],[9],[0,\"\\n\"],[7,\"script\",true],[10,\"src\",\"https://code.jquery.com/jquery-3.5.1.min.js\"],[8],[9],[0,\"\\n\"],[7,\"script\",true],[10,\"src\",\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\"],[8],[9],[0,\"\\n\"],[7,\"script\",true],[10,\"src\",\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"],[8],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"id\",\"clickAway\"],[10,\"class\",\"container-fluid\"],[10,\"title\",\"click-away-box\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"bg\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"first-text\"],[8],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"click-away\"],[8],[0,\"Click Away\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"second-click\"],[8],[0,\"Ξ€ΞΏ click away Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΌΞΉΞ± Ξ½Ξ­Ξ± ΟΟΞ·ΟΞ΅ΟΞ―Ξ± ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ�Ο ΟΞ·Ο ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο ΟΞ±Ο ΞΌΞ΅ Ξ±ΟΟΞ¬Ξ»Ξ΅ΞΉΞ± ΞΌΞ­ΟΟ ΟΞ±Ξ½ΟΞ΅Ξ²ΞΏΟ.\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"click\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col-5\"],[10,\"id\",\"click-away-container\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"img1-container\"],[8],[0,\"\\n          \"],[7,\"img\",true],[10,\"class\",\"click-away-left-img\"],[10,\"src\",\"/assets/click-away-img-left.png\"],[8],[9],[0,\"\\n          \"],[7,\"p\",true],[10,\"class\",\"bottom-left\"],[8],[0,\"ΞΞΉΞ± ΟΞΏΞ½ \"],[7,\"br\",true],[8],[9],[0,\" ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"button\",false],[12,\"href\",\"#rantevouModal\"],[12,\"class\",\"rantevou-btn\"],[12,\"data-toggle\",\"modal\"],[3,\"action\",[[23,0,[]],\"request\"]],[8],[0,\"ΞΞ·ΟΞ�ΟΟΞ΅ ΟΞ±Ξ½ΟΞ΅Ξ²ΞΏΟ\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"id\",\"rantevouModal\"],[10,\"class\",\"modal fade\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-dialog\"],[8],[0,\"\\n              \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"modal-body-1\"],[8],[0,\"\\n                  \"],[7,\"p\",true],[10,\"class\",\"modal-title-1\"],[8],[0,\"ΞΞ·ΟΞ�ΟΟΞ΅ ΟΞ±Ξ½ΟΞ΅Ξ²ΞΏΟ\"],[9],[0,\"\\n                  \"],[7,\"p\",true],[10,\"class\",\"textmodal1\"],[8],[0,\"ΞΟΟΟΞ΅ ΟΞΏΞ½ ΞΊΟΞ΄ΞΉΞΊΟ ΞΊΞ±ΟΞ¬ ΟΞ·Ξ½ ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΉΞΊΞ� \"],[7,\"br\",true],[8],[9],[0,\" ΟΞ±Ο ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± Ξ³ΞΉΞ± Ξ½Ξ± ΞΊΞ»Ξ΅Ξ―ΟΞ΅ΟΞ΅ \"],[7,\"br\",true],[8],[9],[0,\" ΟΞΏ ΟΞ±Ξ½ΟΞ΅Ξ²ΞΏΟ Ξ³ΞΉΞ± ΟΞΏ pick up\"],[9],[0,\"\\n                  \"],[7,\"p\",true],[10,\"class\",\"text-secondary\"],[8],[0,\"ΞΟΞ΄ΞΉΞΊΟΟ Ξ‘Ξ±Ξ½ΟΞ΅Ξ²ΞΏΟ\"],[9],[0,\"\\n                  \"],[7,\"form\",true],[10,\"class\",\"kwdikos\"],[8],[1,[22,\"codeValue\"],false],[9],[0,\"\\n                  \"],[7,\"button\",true],[10,\"class\",\"ok-btn\"],[10,\"data-dismiss\",\"modal\"],[10,\"value\",\"\"],[10,\"type\",\"button\"],[8],[0,\"ΞΞ\"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[9],[0,\" \\n\\n        \"],[7,\"button\",true],[10,\"href\",\"#metakinisiModal\"],[10,\"class\",\"metakinisi-btn\"],[10,\"data-toggle\",\"modal\"],[8],[0,\"ΞΞ»Ξ΅Ξ―ΟΟΞ΅ ΞΌΞ΅ΟΞ±ΞΊΞ―Ξ½Ξ·ΟΞ·\"],[9],[0,\"\\n          \"],[7,\"div\",true],[10,\"id\",\"metakinisiModal\"],[10,\"class\",\"modal fade\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-dialog\"],[8],[0,\"\\n              \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"modal-body-2\"],[8],[0,\"\\n                  \"],[7,\"h5\",true],[10,\"class\",\"modal-title-2\"],[8],[0,\"ΞΞ»Ξ΅Ξ―ΟΟΞ΅ ΞΌΞ΅ΟΞ±ΞΊΞ―Ξ½Ξ·ΟΞ·\"],[9],[0,\"\\n                  \"],[7,\"p\",true],[10,\"class\",\"textmodal2\"],[8],[0,\"Ξ£ΟΞΌΟΞ»Ξ·ΟΟΟΟΞ΅ ΟΞ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± ΟΞ±Ο Ξ³ΞΉΞ± Ξ½Ξ± \"],[7,\"br\",true],[8],[9],[0,\" ΞΊΞ¬Ξ½Ξ΅ΟΞ΅ ΟΞΏ pick up ΟΞ·Ο ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο ΟΞ±Ο\"],[9],[0,\"\\n                   \"],[7,\"form\",true],[8],[0,\"\\n                     \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n                       \"],[7,\"label\",true],[10,\"for\",\"Onomatepwnumo\"],[10,\"class\",\"col-form\"],[8],[0,\"ΞΞ½ΞΏΞΌΞ±ΟΞ΅ΟΟΞ½ΟΞΌΞΏ\"],[9],[0,\"\\n                       \"],[7,\"input\",true],[10,\"class\",\"form-control\"],[10,\"id\",\"Onomatepwnumo\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                     \"],[9],[0,\"\\n                     \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n                       \"],[7,\"label\",true],[10,\"for\",\"Address\"],[10,\"class\",\"col-form\"],[8],[0,\"ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·\"],[9],[0,\"\\n                       \"],[7,\"input\",true],[10,\"class\",\"form-control\"],[10,\"id\",\"Address\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                     \"],[9],[0,\"\\n                     \"],[7,\"label\",true],[10,\"class\",\"prwtocheckbox\"],[8],[7,\"input\",true],[10,\"type\",\"checkbox\"],[8],[9],[0,\"ΞΟΞΏΞΈΞ�ΞΊΞ΅ΟΟΞ· ΟΟΞΏΞΉΟΞ΅Ξ―ΟΞ½ Ξ³ΞΉΞ± Ξ΅ΟΞΊΞΏΞ»Ξ· \"],[7,\"br\",true],[8],[9],[0,\" ΞΌΞ΅Ξ»Ξ»ΞΏΞ½ΟΞΉΞΊΞ� ΟΟΞ�ΟΞ·\"],[9],[0,\"\\n                   \"],[9],[0,\"\\n                  \"],[7,\"button\",true],[10,\"class\",\"ok2-btn\"],[10,\"data-dismiss\",\"modal\"],[10,\"type\",\"button\"],[8],[0,\"ΞΞ\"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col-5\"],[10,\"id\",\"click-away-2-container\"],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"img2-container\"],[8],[0,\"\\n        \"],[7,\"img\",true],[10,\"class\",\"click-away-right-img\"],[10,\"src\",\"/assets/click-away-right-img.png\"],[8],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"left\"],[8],[0,\"ΞΞΉΞ± ΟΞΏ \"],[7,\"br\",true],[8],[9],[0,\" ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ±\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"button\",true],[10,\"href\",\"#katastimaModal\"],[10,\"class\",\"rantevou-katastima-btn\"],[10,\"data-toggle\",\"modal\"],[8],[0,\"ΞΞ»Ξ΅Ξ―ΟΟΞ΅ ΟΞ±Ξ½ΟΞ΅Ξ²ΞΏΟ\"],[9],[0,\"\\n      \"],[7,\"div\",true],[10,\"id\",\"katastimaModal\"],[10,\"class\",\"modal fade\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-dialog\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"modal-dialog\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n              \"],[7,\"div\",true],[10,\"class\",\"modal-body-3\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"modal-title-3\"],[8],[0,\"ΞΞ»Ξ΅Ξ―ΟΟΞ΅ ΟΞ±Ξ½ΟΞ΅Ξ²ΞΏΟ\"],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"textmodal3\"],[8],[0,\"ΞΞ¬Ξ½ Ξ΅Ξ―ΟΟΞ΅ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ± ΟΟΞΌΟΞ»Ξ·ΟΟΟΟΞ΅ ΟΞ± ΟΞ±ΟΞ±ΞΊΞ¬ΟΟ ΟΞ΅Ξ΄Ξ―Ξ± Ξ³ΞΉΞ± Ξ½Ξ± ΟΟΞ΅Ξ―Ξ»Ξ΅ΟΞ΅ ΟΞΏ \"],[7,\"br\",true],[8],[9],[0,\" ΞΊΟΞ΄ΞΉΞΊΟ ΟΞΏΟ ΟΞ΅Ξ»Ξ¬ΟΞ· Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ� ΟΞ·Ο ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο.\"],[9],[0,\"\\n                \"],[7,\"form\",true],[8],[0,\"\\n                  \"],[7,\"div\",true],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                      \"],[7,\"div\",true],[10,\"class\",\"form-group col-6\"],[8],[0,\"\\n                        \"],[7,\"label\",true],[10,\"for\",\"epwnumia\"],[10,\"class\",\"col-form-label\"],[10,\"id\",\"3\"],[8],[0,\"ΞΟΟΞ½ΟΞΌΞ―Ξ±\"],[9],[0,\"\\n                        \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"id\",\"value\"],[\"text\",\"form-control\",\"epwnumia\",[24,[\"epwnumia\"]]]]],false],[0,\"\\n                      \"],[9],[0,\"\\n                      \"],[7,\"div\",true],[10,\"class\",\"form-group col-6\"],[8],[0,\"\\n                        \"],[7,\"label\",true],[10,\"for\",\"afm\"],[10,\"class\",\"col-form-label\"],[10,\"id\",\"3\"],[8],[0,\"ΞΞ¦Ξ\"],[9],[0,\"\\n                       \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"id\",\"value\"],[\"text\",\"form-control\",\"afm\",[24,[\"afm\"]]]]],false],[0,\"\\n                      \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[7,\"div\",true],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                      \"],[7,\"div\",true],[10,\"class\",\"form-group col-6\"],[8],[0,\"\\n                        \"],[7,\"label\",true],[10,\"for\",\"dieu8insi\"],[10,\"class\",\"col-form-label\"],[10,\"id\",\"3\"],[8],[0,\"ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·\"],[9],[0,\"\\n                        \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"id\",\"value\"],[\"text\",\"form-control\",\"dieu8insi\",[24,[\"dieu8insi\"]]]]],false],[0,\"\\n                      \"],[9],[0,\"\\n                      \"],[7,\"div\",true],[10,\"class\",\"form-group col-6\"],[8],[0,\"\\n                        \"],[7,\"label\",true],[10,\"for\",\"date\"],[10,\"class\",\"col-form-label\"],[10,\"id\",\"3\"],[8],[0,\"ΞΞΌΞ΅ΟΞΏΞΌΞ·Ξ½Ξ―Ξ± ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ�Ο\"],[9],[0,\"\\n                        \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"id\",\"value\"],[\"text\",\"form-control\",\"date\",[24,[\"date\"]]]]],false],[0,\"\\n                      \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[7,\"div\",true],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n                      \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"form-group col-6\"],[8],[0,\"\\n                          \"],[7,\"label\",true],[10,\"for\",\"time\"],[10,\"class\",\"col-form-label\"],[10,\"id\",\"3\"],[8],[0,\"ΞΟΞ± ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ�Ο\"],[9],[0,\"\\n                          \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"id\",\"value\"],[\"text\",\"form-control\",\"time\",[24,[\"time\"]]]]],false],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"form-group col-6\"],[8],[0,\"\\n                          \"],[7,\"label\",true],[10,\"for\",\"customerCode\"],[10,\"class\",\"col-form-label\"],[10,\"id\",\"3\"],[8],[0,\"ΞΟΞ΄ΞΉΞΊΟΟ Ξ Ξ΅Ξ»Ξ¬ΟΞ·\"],[9],[0,\"\\n                          \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"id\",\"value\"],[\"text\",\"form-control\",\"customerCode\",[24,[\"customerCode\"]]]]],false],[0,\"\\n                        \"],[9],[0,\"\\n                      \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[7,\"div\",true],[10,\"class\",\"form-group\"],[8],[0,\"\\n                    \"],[7,\"label\",true],[10,\"for\",\"messageText\"],[10,\"class\",\"col-form-label\"],[10,\"id\",\"3\"],[8],[0,\"Ξ£Ξ·ΞΌΞ΅ΞΉΟΟΞ΅ΞΉΟ\"],[9],[0,\"\\n                   \"],[1,[28,\"input\",null,[[\"type\",\"class\",\"id\",\"value\"],[\"text\",\"form-control\",\"messageText\",[24,[\"messageText\"]]]]],false],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[7,\"label\",true],[10,\"class\",\"stoixeia\"],[8],[7,\"input\",true],[10,\"type\",\"checkbox\"],[8],[9],[0,\"ΞΟΞΏΞΈΞ�ΞΊΞ΅ΟΟΞ· ΟΟΞΏΞΉΟΞ΅Ξ―ΟΞ½ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ Ξ³ΞΉΞ± Ξ΅ΟΞΊΞΏΞ»Ξ· ΞΌΞ΅Ξ»Ξ»ΞΏΞ½ΟΞΉΞΊΞ� ΟΟΞ�ΟΞ·\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[7,\"button\",false],[12,\"class\",\"ok3-btn\"],[12,\"id\",\"buttonCloseID\"],[12,\"data-dismiss\",\"modal\"],[12,\"type\",\"button\"],[3,\"action\",[[23,0,[]],\"rantevou\"]],[8],[0,\"ΞΞ\"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/click-away.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/cart", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "DjcwxQ2N",
        "block": "{\"symbols\":[\"merchant\",\"product\",\"item\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n\"],[4,\"if\",[[28,\"not\",[[24,[\"cart\",\"items\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"img\",true],[10,\"class\",\"empty-cart-image\"],[10,\"src\",\"/assets/grey-cart.png\"],[8],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"empty-cart-text\"],[8],[0,\"Ξ€ΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ ΟΞ±Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ¬Ξ΄Ξ΅ΞΉΞΏ.\"],[7,\"br\",true],[8],[9],[0,\"Ξ ΟΞΏΟΞΈΞ­ΟΟΞ΅ ΟΟΞΏΟΟΞ½ΟΞ± ΟΟΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ Ξ³ΞΉΞ± Ξ½Ξ± Ξ΄Ξ΅Ξ―ΟΞ΅ ΟΞΏ ΟΟΞ½ΞΏΞ»ΞΏ ΞΌΞ­ΟΞ·Ο ΟΞΉΞΌΞ�Ο ΟΟΞ»Ξ·ΟΞ·Ο Ξ±Ξ½Ξ¬ Ξ±Ξ»ΟΟΞ―Ξ΄Ξ±.\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\",false],[12,\"class\",\"trash-wrapper cursor-pointer\"],[3,\"action\",[[23,0,[]],\"emptyCart\"]],[8],[0,\"\\n        \"],[7,\"img\",true],[10,\"src\",\"/assets/group-7071.png\"],[10,\"class\",\"trash-icon\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"trash-text\"],[8],[0,\"ΞΞΞΞΞ‘ΞΞ£ΞΞΞ£ ΞΞΞΞΞΞΞΞ₯\"],[9],[0,\"\\n        \\n    \"],[9],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"my-basket\"],[8],[0,\"Ξ€ΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ ΞΌΞΏΟ\"],[9],[0,\"\\n\\n  \\n\"],[4,\"each\",[[24,[\"cart\",\"items\"]]],null,{\"statements\":[[0,\"    \\n     \"],[7,\"div\",true],[10,\"class\",\"remove\"],[8],[0,\"\\n        \"],[7,\"button\",false],[12,\"class\",\"remove-btn\"],[3,\"action\",[[23,0,[]],\"removeFromCart\",[23,3,[]]]],[8],[0,\"x\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"proionta\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"flex-1\"],[8],[0,\"\\n                \"],[7,\"img\",true],[11,\"src\",[23,3,[\"product\",\"image\"]]],[10,\"class\",\"cart-product-img\"],[8],[9],[0,\"\\n            \"],[9],[0,\"                \\n            \"],[7,\"div\",true],[10,\"class\",\"flex-2 v-center\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"                    \\n                                \"],[7,\"span\",true],[10,\"class\",\"cart-product-name\"],[8],[1,[23,3,[\"product\",\"name\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"  \\n                            \"],[7,\"div\",true],[10,\"class\",\"timi\"],[8],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"apo\"],[8],[0,\"ΞΟΟ\"],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"prod-price\"],[8],[1,[28,\"lowest-price\",[[23,3,[\"product\",\"prices\"]]],null],false],[0,\"β¬\"],[9],[0,\"\\n                            \"],[9],[0,\"              \\n                        \"],[9],[0,\" \\n                    \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                            \"],[7,\"button\",false],[12,\"class\",\"minus-icon\"],[3,\"action\",[[23,0,[]],\"removePiece\",[23,3,[]]]],[8],[0,\"-\"],[9],[0,\"\\n                            \"],[7,\"span\",true],[10,\"class\",\"plus-minus-text\"],[8],[1,[23,3,[\"count\"]],false],[9],[0,\"\\n                            \"],[7,\"button\",false],[12,\"class\",\"plus-icon\"],[3,\"action\",[[23,0,[]],\"addPiece\",[23,3,[]]]],[8],[0,\"+\"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\" \\n                    \"],[9],[0,\"\\n                \"],[9],[0,\" \\n                               \\n            \"],[9],[0,\"\\n        \"],[9],[0,\"   \\n    \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"],[7,\"div\",true],[10,\"class\",\"middle-text-box\"],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"cart-blue-text\"],[8],[0,\"Ξ ΟΞΉΞΌΞ� ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ ΟΞΏΟ Ξ±Ξ½Ξ±Ξ³ΟΞ¬ΟΞ΅ΟΞ±ΞΉ \"],[7,\"br\",true],[8],[9],[0,\" Ξ±ΟΞΏΟΞ¬ ΟΞ·Ξ½ ΞΌΞ­ΟΞ· ΟΞΉΞΌΞ� ΟΟΞ»Ξ·ΟΞ·Ο Ξ³ΞΉΞ± ΟΞΉΟ \"],[7,\"b\",true],[8],[0,\" \"],[1,[24,[\"cart\",\"date\"]],false],[0,\" \"],[9],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"each\",[[24,[\"cart\",\"sortedMerchants\"]]],null,{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,1,[\"products\",\"length\"]],[24,[\"cart\",\"itemsCount\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"cart-merchant-wrapper\"],[8],[0,\"\\n            \"],[7,\"img\",true],[11,\"src\",[23,1,[\"image\"]]],[10,\"class\",\"cart-merchant-img\"],[8],[9],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"cart-merchant-name\"],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"cart-merchant-price\"],[8],[1,[28,\"price-sum\",[[23,1,[\"products\"]],[24,[\"cart\",\"helperTrigger\"]]],null],false],[0,\"β¬\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"if\",[[23,1,[\"expanded\"]]],null,{\"statements\":[[4,\"each\",[[23,1,[\"products\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"cart-merchant-product-wrapper\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"proionta-cart\"],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"cart-merchant-product-name\"],[8],[1,[23,2,[\"name\"]],false],[0,\" \"],[9],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"cart-merchant-product-price\"],[8],[1,[28,\"product-price-sum\",[[23,2,[]],[24,[\"cart\",\"helperTrigger\"]]],null],false],[0,\"β¬\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\" \\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[4,\"if\",[[23,1,[\"expanded\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",false],[12,\"class\",\"bent-line\"],[3,\"action\",[[23,0,[]],\"collapseMerchant\",[23,1,[]]]],[8],[0,\"\\n            \"],[7,\"div\",true],[11,\"class\",[29,[\"arrow-line \",[28,\"if\",[[23,1,[\"expanded\"]],\"changeBar\"],null]]]],[8],[9],[0,\"\\n            \"],[7,\"div\",true],[11,\"class\",[29,[\"arrow-up \",[28,\"if\",[[28,\"not\",[[23,1,[\"expanded\"]]],null],\"display-none\"],null],\"  \",[28,\"if\",[[23,1,[\"expanded\"]],\"changeColor\"],null]]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"div\",false],[12,\"class\",\"bent-line\"],[3,\"action\",[[23,0,[]],\"expandMerchant\",[23,1,[]]]],[8],[0,\"\\n            \"],[7,\"div\",true],[11,\"class\",[29,[\"arrow-line \",[28,\"if\",[[23,1,[\"expanded\"]],\"changeBar\"],null]]]],[8],[9],[0,\"\\n            \"],[7,\"div\",true],[11,\"class\",[29,[\"arrow-down \",[28,\"if\",[[23,1,[\"expanded\"]],\"display-none\"],null]]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[1]},null],[4,\"if\",[[28,\"not\",[[24,[\"cart\",\"merchantAvailable\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\",true],[10,\"class\",\"empty-cart-text\"],[8],[0,\"ΞΟΟΞ� ΟΞ· ΟΟΞΉΞ³ΞΌΞ� Ξ΄Ξ΅Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ Ξ΄ΞΉΞ±ΞΈΞ­ΟΞΉΞΌΞ· ΞΌΞ­ΟΞ· ΟΞΉΞΌΞ� ΟΟΞ»Ξ·ΟΞ·Ο ΟΞ΅ ΞΊΞ¬ΟΞΏΞΉΞ± Ξ±Ξ»ΟΟΞ―Ξ΄Ξ± Ξ³ΞΉΞ± ΟΞΏΞ½ ΟΟΞ³ΞΊΞ΅ΞΊΟΞΉΞΌΞ­Ξ½ΞΏ ΟΟΞ½Ξ΄ΞΉΞ±ΟΞΌΟ ΟΟΞΏΟΟΞ½ΟΟΞ½.\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/cart.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/cookies", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "7OYdqugG",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[4,\"unless\",[[24,[\"cookiesAccepted\"]]],null,{\"statements\":[[7,\"div\",true],[10,\"class\",\"cookieBottomBar container-fluid\"],[8],[0,\"\\n\"],[0,\"\\t\\t\\t  \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\\n\\t\\t\\t\\t  \\t\"],[7,\"div\",true],[10,\"class\",\"cookieLeftSide\"],[8],[0,\"\\t\\t\\t\\t  \\t\\t\\n\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookieMainPopuoTitle pb-10\"],[8],[0,\"\\n\\t\\t\\t\\t  \\t\\t\\tΞΞΉΞ±ΟΞ΅Ξ―ΟΞΉΟΞ· cookies ΞΊΞ±ΞΉ ΟΞ±ΟΟΞΌΞΏΞΉΟΞ½ ΟΞ΅ΟΞ½ΞΏΞ»ΞΏΞ³ΞΉΟΞ½\\n\\t\\t\\t\\t  \\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\tΞ€Ξ± cookies ΞΊΞ±ΞΉ Ξ¬Ξ»Ξ»ΞΏΞΉ ΟΞ±ΟΟΞΌΞΏΞΉΞΏΞΉ ΞΌΞ·ΟΞ±Ξ½ΞΉΟΞΌΞΏΞ― ΞΉΟΞ½Ξ·Ξ»Ξ¬ΟΞΉΟΞ·Ο (Ξ΅ΟΞ΅ΞΎΞ�Ο cookies) Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ·ΞΌΞ±Ξ½ΟΞΉΞΊΞΏΞ― Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅ΟΟΟΞΈΞΌΞ· Ξ»Ξ΅ΞΉΟΞΏΟΟΞ³Ξ―Ξ± ΟΞ·Ο ΞΉΟΟΞΏΟΞ΅Ξ»Ξ―Ξ΄Ξ±Ο.\"],[7,\"br\",true],[8],[9],[0,\"ΞΞΉΞ± ΟΞΏΞ½ Ξ»ΟΞ³ΞΏ Ξ±ΟΟΟ Ξ±ΟΟΞ¬ ΟΞ± cookies Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ¬Ξ½ΟΞ± Ξ΅Ξ½Ξ΅ΟΞ³ΞΏΟΞΏΞΉΞ·ΞΌΞ­Ξ½Ξ±. \\n                      \"],[7,\"br\",true],[8],[9],[7,\"br\",true],[8],[9],[0,\"\\n                      Ξ Ξ±ΟΞ�ΟΟΞ΅ Β«ΞΞ½Ξ·ΞΌΞ΅ΟΟΞΈΞ·ΞΊΞ± Ξ³ΞΉΞ± ΟΞ± cookiesΒ» Ξ� Ξ΅ΟΞΉΞ»Ξ­ΞΎΟΞ΅ Β«Ξ Ξ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅ΟΒ» Ξ³ΞΉΞ± Ξ½Ξ± ΞΌΞ¬ΞΈΞ΅ΟΞ΅ ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ³ΞΉΞ± Ξ±ΟΟΞ¬.\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookieRightSide\"],[8],[0,\"\\n\\t\\t\\t\\t  \\t\\t\"],[7,\"div\",true],[8],[0,\"\\n\\t                        \"],[7,\"button\",false],[12,\"class\",\"cookieMainPopupButton\"],[3,\"action\",[[23,0,[]],\"hideCookies\"]],[8],[0,\"ΞΞ½Ξ·ΞΌΞ΅ΟΟΞΈΞ·ΞΊΞ± Ξ³ΞΉΞ± ΟΞ± \"],[7,\"br\",true],[8],[9],[0,\" Cookies\"],[9],[0,\"\\n\\t                    \"],[9],[0,\"\\n\\t                    \\n\\t                    \"],[7,\"div\",true],[10,\"class\",\"mt-3\"],[8],[0,\"   \\n\\t                        \"],[7,\"button\",true],[10,\"class\",\"cookieMoreInfoBtn\"],[10,\"data-toggle\",\"modal\"],[10,\"data-target\",\"#cookieModal\"],[8],[0,\"\\n\\t                        \\tΞ Ξ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο Ξ Ξ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο\\n\\t                    \\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t \\t\"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"modal show\"],[10,\"id\",\"cookieModal\"],[10,\"tabindex\",\"-1\"],[10,\"role\",\"dialog\"],[10,\"aria-labelledby\",\"cookieModalLabel\"],[10,\"aria-hidden\",\"false\"],[8],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"modal-dialog modal-lg\"],[10,\"role\",\"document\"],[8],[0,\"\\n\\t\\t  \"],[7,\"button\",true],[10,\"class\",\"close-cookie\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"type\",\"button\"],[8],[0,\"\\n        \\t\"],[7,\"span\",true],[10,\"aria-hidden\",\"true\"],[8],[0,\"Γ\"],[9],[0,\"\\n      \\t  \"],[9],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \\t\"],[7,\"div\",true],[10,\"class\",\"modal-header-cookies\"],[8],[0,\"\\n              \\t\\t\"],[7,\"span\",true],[10,\"class\",\"modal-title-cookie\"],[10,\"id\",\"cookieModalLabel\"],[8],[0,\"Ξ Ξ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ³ΞΉΞ± ΟΞ± cookies\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[7,\"span\",true],[10,\"class\",\"arrow-right\"],[8],[9],[0,\"\\n            \\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-right-text\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[7,\"span\",true],[10,\"class\",\"cookie-text\"],[8],[0,\"Ξ§ΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞΏΟΞΌΞ΅ cookies ΟΟΞΏΞ½ ΞΉΟΟΟΟΞΏΟΞΏ ΞΌΞ±Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ ΞΏΟΞΈΞ� \"],[7,\"br\",true],[8],[9],[0,\" Ξ»Ξ΅ΞΉΟΞΏΟΟΞ³Ξ―Ξ± ΟΞΏΟ ΞΉΟΟΟΟΞΏΟΞΏΟ. Ξ€Ξ± cookies Ξ±ΟΟΞ�Ο ΟΞ·Ο ΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±Ο \"],[7,\"br\",true],[8],[9],[0,\" Ξ΄Ξ΅Ξ½ ΞΌΟΞΏΟΞΏΟΞ½ Ξ½Ξ± Ξ±ΟΞ΅Ξ½Ξ΅ΟΞ³ΞΏΟΞΏΞΉΞ·ΞΈΞΏΟΞ½.\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-body-cookie\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookie-container\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"row display-flex\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-cell col-lg-4 col-sm-12\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"mid-cookie\"],[8],[0,\"ΞΟΞ½Ξ·Ξ»Ξ¬ΟΞ·Ο\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-down-cell\"],[8],[0,\"e-katanalotis\"],[9],[0,\"\\t\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-cell col-lg-2 col-sm-12\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"mid-cookie\"],[8],[0,\" ΞΞΉΞ¬ΟΞΊΞ΅ΞΉΞ±  ΞΞ΅ΞΉΟΞΏΟΟΞ³Ξ΅Ξ―Ξ±Ο\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-down-cell\"],[8],[0,\"e-katanalotis\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-cell col-lg-2 col-sm-12\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"mid-cookie\"],[8],[0,\" Ξ₯ΟΞ΅ΟΞΈΟΞ½ΞΏΟ  ΞΟΞ΅ΞΎΞ΅ΟΞ³Ξ±ΟΞ―Ξ±Ο\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-down-cell\"],[8],[0,\"e-katanalotis\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-cell col-lg-4 col-sm-12\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"mid-cookie-4\"],[8],[0,\" ΞΟΞΏΞ΄Ξ­ΞΊΟΞ΅Ο\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"cookies-down-cell-4\"],[8],[0,\"e-katanalotis\"],[9],[0,\"\\t\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n            \"],[9],[0,\"\\n\\n\\t\\t\\t\"],[7,\"div\",true],[10,\"class\",\"check-cookies\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[7,\"span\",true],[10,\"class\",\"check-text-2\"],[8],[0,\"Ξ Ξ¬Ξ½ΟΞ± Ξ΅Ξ½Ξ΅ΟΞ³Ξ¬\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[7,\"label\",true],[10,\"class\",\"switch\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[7,\"input\",true],[10,\"checked\",\"\"],[10,\"type\",\"checkbox\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[7,\"span\",true],[10,\"class\",\"slider round\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[7,\"span\",true],[10,\"class\",\"check-text\"],[8],[0,\"Ξ Ξ¬Ξ½ΟΞ± Ξ΅Ξ½Ξ΅ΟΞ³Ξ¬\"],[9],[0,\"\\t\\n\\t\\t\\t\"],[9],[0,\"\\n\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-footer\"],[8],[0,\"\\n                \"],[7,\"button\",true],[10,\"class\",\"modal-cookies-btn h5 mt-4\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[8],[0,\"ΞΞ½Ξ·ΞΌΞ΅ΟΟΞΈΞ·ΞΊΞ± Ξ³ΞΉΞ± ΟΞ± Cookies\"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/cookies.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _emberPopperTargetingParent.default;
        }
    });
});;
define("katanalotis-microsite/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _emberPopper.default;
        }
    });
});;
define("katanalotis-microsite/templates/components/filter", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "Piaps1Dz",
        "block": "{\"symbols\":[\"filter\",\"index\",\"filter\",\"index\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row mb-5 mt-5\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"h5 nova-sb hide-mobile\"],[8],[0,\"Ξ¦Ξ―Ξ»ΟΟΞ±\"],[9],[0,\"\\n            \"],[7,\"div\",false],[12,\"class\",\"hide-desktop\"],[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"filterExpanded\"]]],null],false]],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"h5 nova-sb mb-0 mr-3\"],[8],[0,\"Ξ¦Ξ―Ξ»ΟΟΞ±\"],[9],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"ember-power-select-status-icon-up\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"isFuels\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row mt-5\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"Ξ Ξ΅ΟΞΉΞΏΟΞ­Ο\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row mb-3\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"span\",false],[12,\"class\",\"font-xs blue nova-sb cursor-pointer\"],[3,\"action\",[[23,0,[]],\"clearFilter\",\"counties\"]],[8],[0,\"ΞΞΊΞΊΞ±ΞΈΞ¬ΟΞΉΟΞ· Ξ¦Ξ―Ξ»ΟΟΟΞ½\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"countiesShowAll\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"show-all-scroll-container\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"counties\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                \"],[7,\"label\",true],[10,\"class\",\"checkbox-container font-s\"],[11,\"for\",[28,\"concat\",[\"county\",[23,4,[]]],null]],[8],[1,[23,3,[\"name\"]],false],[0,\"\\n                    \"],[1,[28,\"input\",null,[[\"id\",\"type\",\"checked\"],[[28,\"concat\",[\"county\",[23,4,[]]],null],\"checkbox\",[23,3,[\"checked\"]]]]],false],[0,\"\\n                    \"],[7,\"span\",true],[10,\"class\",\"checkmark\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[24,[\"counties\"]]],null,{\"statements\":[[4,\"if\",[[28,\"lt\",[[23,2,[]],5],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                    \"],[7,\"label\",true],[10,\"class\",\"checkbox-container font-s\"],[11,\"for\",[28,\"concat\",[\"county\",[23,2,[]]],null]],[8],[1,[23,1,[\"name\"]],false],[0,\"\\n                        \"],[1,[28,\"input\",null,[[\"id\",\"type\",\"checked\"],[[28,\"concat\",[\"county\",[23,2,[]]],null],\"checkbox\",[23,1,[\"checked\"]]]]],false],[0,\"\\n                        \"],[7,\"span\",true],[10,\"class\",\"checkmark\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"        \"],[7,\"p\",false],[12,\"class\",\"font-xs nova-sb cursor-pointer\"],[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"countiesShowAll\"]]],null],true]],[8],[0,\"+ ΞΞΌΟΞ¬Ξ½ΞΉΟΞ· Ξ Ξ΅ΟΞΉΟΟΟΟΞ΅ΟΟΞ½\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/filter.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/footer", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "lafH+ZxV",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container-fluid footer\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"grey-back row\"],[8],[0,\"\\n\\n    \"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"container-fluid footer\"],[8],[0,\"\\n\"],[0,\"    \"],[7,\"img\",true],[10,\"src\",\"/assets/basket.png\"],[10,\"class\",\"footer-basket\"],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-5 col-xl-5 offset-lg-7 offset-xl-7 z2\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"footer-title\"],[8],[0,\"ΞΟΟΟΟΞ� Ξ±Ξ½Ξ¬ΟΟΟΞΎΞ·\"],[7,\"br\",true],[8],[9],[7,\"span\",true],[10,\"class\",\"footer-text-lightblue\"],[8],[0,\"#ependytiki_epanekkinisi\"],[9],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"    \\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"id\",\"footer-mb\"],[10,\"class\",\"col-12 col-md-6 col-lg-3 col-xl-3 z2\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"query\",\"route\"],[[28,\"hash\",null,[[\"stores\"],[\"stores\"]]],\"index\"]],{\"statements\":[[0,\"                \"],[7,\"p\",false],[12,\"class\",\"footer-options\"],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"ΞΟΞ±ΟΞΌΞΏΞ³Ξ� e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",null,[[\"route\"],[\"contact\"]],{\"statements\":[[0,\"                \"],[7,\"p\",false],[12,\"class\",\"footer-options\"],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"ΞΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ±\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",null,[[\"route\"],[\"faq\"]],{\"statements\":[[0,\"                \"],[7,\"p\",false],[12,\"class\",\"footer-options\"],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"Ξ£ΟΟΞ½Ξ­Ο ΞΟΟΟΞ�ΟΞ΅ΞΉΟ\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"id\",\"footer-mb\"],[10,\"class\",\"col-12 col-md-6 col-lg-3 col-xl-3 z2\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\"],[\"terms\"]],{\"statements\":[[0,\"                \"],[7,\"p\",false],[12,\"class\",\"footer-options\"],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"ΞΟΞΏΞΉ ΟΟΞ�ΟΞ·Ο\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",null,[[\"route\"],[\"policy\"]],{\"statements\":[[0,\"                \"],[7,\"p\",false],[12,\"class\",\"footer-options\"],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ� Ξ±ΟΞΏΟΟΞ�ΟΞΏΟ\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[7,\"p\",false],[12,\"class\",\"footer-options\"],[3,\"action\",[[23,0,[]],\"openCookiesModal\"]],[8],[0,\"Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ� Ξ³ΞΉΞ± ΟΞ± cookies\"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"id\",\"footer-mb\"],[10,\"class\",\"col-12 col-md-12 col-lg-6 col-xl-6 z2 d-flex flex-column\"],[8],[0,\"\\n                \"],[7,\"img\",true],[10,\"class\",\"greece-icon\"],[10,\"src\",\"/assets/ellada.png\"],[8],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"footer-greece-text\"],[8],[0,\"ΞΞΞΞΞΞΞΞ ΞΞΞΞΞΞ‘ΞΞ€ΞΞ\"],[7,\"br\",true],[8],[9],[0,\"Ξ₯Ξ ΞΞ₯Ξ‘ΞΞΞΞ\"],[7,\"br\",true],[8],[9],[0,\" ΞΞΞΞ Ξ€Ξ₯ΞΞΞ£ ΞΞΞ ΞΞ ΞΞΞΞ₯Ξ£ΞΞ©Ξ\"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/footer.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/fuels-map-component", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "8ccIlPyP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"script\",true],[8],[0,\"\\n    \\n    function getDirections(x, y) {\\n        //Navigate from user location to selected shop\\n        if(navigator.userAgent.toLowerCase().indexOf(\\\"iphone\\\") > -1 || navigator.userAgent.toLowerCase().indexOf(\\\"ipad\\\") > -1){\\n            window.open(\\\"https://maps.apple.com/?daddr=\\\"+x+\\\",\\\"+y,'_blank');\\n        }else{\\n            window.open(\\\"https://maps.google.com/maps?daddr=\\\"+x+\\\",\\\"+y,'_blank');\\n\\n        }\\n    }\\n    \"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"id\",\"map\"],[8],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/fuels-map-component.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/global-map-component", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "qI5hIkj0",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"script\",true],[8],[0,\"\\n    \\n    function getDirections(x, y) {\\n        //Navigate from user location to selected shop\\n        if(navigator.userAgent.toLowerCase().indexOf(\\\"iphone\\\") > -1 || navigator.userAgent.toLowerCase().indexOf(\\\"ipad\\\") > -1){\\n            window.open(\\\"https://maps.apple.com/?daddr=\\\"+x+\\\",\\\"+y,'_blank');\\n        }else{\\n            window.open(\\\"https://maps.google.com/maps?daddr=\\\"+x+\\\",\\\"+y,'_blank');\\n\\n        }\\n    }\\n    \"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"id\",\"map\"],[8],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/global-map-component.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/map-component", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "fGxMfmQt",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"script\",true],[8],[0,\"\\n    \\n    function getDirections(x, y) {\\n        //Navigate from user location to selected shop\\n        if(navigator.userAgent.toLowerCase().indexOf(\\\"iphone\\\") > -1 || navigator.userAgent.toLowerCase().indexOf(\\\"ipad\\\") > -1){\\n            window.open(\\\"https://maps.apple.com/?daddr=\\\"+x+\\\",\\\"+y,'_blank');\\n        }else{\\n            window.open(\\\"https://maps.google.com/maps?daddr=\\\"+x+\\\",\\\"+y,'_blank');\\n\\n        }\\n    }\\n    \"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"id\",\"map\"],[8],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/map-component.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/navbar", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "WOtHeTws",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"script\",true],[10,\"src\",\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"],[8],[9],[0,\"\\n\"],[7,\"nav\",true],[10,\"id\",\"navbar\"],[10,\"class\",\"hide-mobile navbar navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n  \"],[7,\"div\",false],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"navbar-brand\",\"index\"]],{\"statements\":[[0,\"    \"],[7,\"img\",true],[10,\"src\",\"/assets/cart.png\"],[10,\"class\",\"nav-logo\"],[8],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο\"],[7,\"br\",true],[8],[9],[9],[0,\"\\n    \"],[7,\"img\",true],[10,\"src\",\"/assets/chris_logo.png\"],[10,\"class\",\"nav-logo ml-1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"button\",true],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarSupportedContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Toggle navigation\"],[10,\"type\",\"button\"],[8],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarSupportedContent\"],[8],[0,\"\\n    \"],[7,\"ul\",true],[10,\"class\",\"navbar-nav ml-auto\"],[8],[0,\"\\n      \"],[7,\"li\",false],[12,\"class\",\"nav-item\"],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"\\n        \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"index\"]],{\"statements\":[[0,\"ΞΟΟΞΉΞΊΞ�\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[8],[0,\"\\n       \"],[4,\"link-to\",null,[[\"class\",\"route\",\"model\"],[\"nav-link\",\"products\",\"navbar\"]],{\"statements\":[[0,\"Ξ ΟΞΏΟΟΞ½ΟΞ±\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[8],[0,\"\\n       \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"householdBasket\"]],{\"statements\":[[0,\"ΞΞ±Ξ»Ξ¬ΞΈΞΉ Ξ½ΞΏΞΉΞΊΞΏΞΊΟΟΞΉΞΏΟ\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"      \\n      \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[8],[0,\"\\n       \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"santasBasket\"]],{\"statements\":[[0,\"ΞΞ±Ξ»Ξ¬ΞΈΞΉ ΞΞ· ΞΞ±ΟΞ―Ξ»Ξ·\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n       \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[8],[0,\"\\n       \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"fuels\"]],{\"statements\":[[0,\"ΞΞ±ΟΟΞΉΞΌΞ±\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",false],[12,\"class\",\"nav-item\"],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"\\n        \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"useful\"]],{\"statements\":[[0,\"Ξ§ΟΞ�ΟΞΉΞΌΞ±\"]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",false],[12,\"class\",\"nav-item\"],[12,\"style\",\"    display: flex;\\n    align-items: center;\"],[3,\"action\",[[23,0,[]],\"toggleCart\"]],[8],[0,\"\\n        \"],[7,\"img\",true],[10,\"class\",\"navbar-cart\"],[10,\"src\",\"/assets/navbar_cart.png\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[11,\"class\",[29,[\"nav-link \",[28,\"if\",[[24,[\"cart\",\"displayCart\"]],\"clicked-cart-text\"],null]]]],[8],[0,\"ΞΞ±Ξ»Ξ¬ΞΈΞΉ\"],[9],[0,\"\\n        \"],[7,\"span\",true],[11,\"class\",[29,[\"navbar-cart-count \",[28,\"if\",[[28,\"gt\",[[24,[\"cart\",\"itemsCount\"]],9],null],\"navbar-cart-count-2digit\"],null]]]],[8],[0,\"(\"],[1,[24,[\"cart\",\"itemsCount\"]],false],[0,\")\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[\"clicked-cart-background \",[28,\"if\",[[28,\"not\",[[24,[\"cart\",\"displayCart\"]]],null],\"display-none\"],null]]]],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"class\",\"navbar-cart-white\"],[10,\"src\",\"/assets/white-cart.png\"],[8],[9],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"cart-bg-text\"],[8],[0,\"ΞΞ±Ξ»Ξ¬ΞΈΞΉ Ξ ΟΞΏΟΟΞ½ΟΟΞ½\"],[9],[0,\"\\n    \"],[7,\"div\",false],[12,\"class\",\"cart-bg-count-bg\"],[3,\"action\",[[23,0,[]],\"toggleCart\"]],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"cart-bg-count\"],[8],[1,[24,[\"cart\",\"itemsCount\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"span\",false],[12,\"class\",\"cart-bg-x\"],[3,\"action\",[[23,0,[]],\"toggleCart\"]],[8],[0,\"β\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \\n  \"],[7,\"div\",true],[11,\"class\",[29,[\"cart \",[28,\"if\",[[28,\"not\",[[24,[\"cart\",\"displayCart\"]]],null],\"display-none\"],null]]]],[8],[0,\"\\n    \"],[1,[22,\"cart\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"nav\",true],[10,\"id\",\"navbar\"],[10,\"class\",\"hide-desktop navbar navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n  \"],[7,\"div\",false],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"navbar-brand\",\"index\"]],{\"statements\":[[0,\"    \"],[7,\"img\",true],[10,\"src\",\"/assets/cart.png\"],[10,\"class\",\"nav-logo\"],[8],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο\"],[7,\"br\",true],[8],[9],[9],[0,\"\\n    \"],[7,\"img\",true],[10,\"src\",\"/assets/chris_logo.png\"],[10,\"class\",\"nav-logo ml-1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"button\",true],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarSupportedContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Toggle navigation\"],[10,\"type\",\"button\"],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"src\",\"/assets/burger.png\"],[10,\"class\",\"burger\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarSupportedContent\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"hide-desktop navbar-mobile-top\"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"ΞΞ΅Ξ½ΞΏΟ\"],[9],[0,\"\\n      \"],[7,\"button\",true],[10,\"class\",\"navbar-toggler navbar-x-container\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarSupportedContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Toggle navigation\"],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"navbar-x\"],[8],[0,\"x\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"ul\",true],[10,\"class\",\"navbar-nav ml-auto\"],[8],[0,\"\\n      \"],[7,\"li\",false],[12,\"class\",\"nav-item\"],[12,\"data-toggle\",\"collapse\"],[12,\"data-target\",\"#navbarSupportedContent\"],[12,\"aria-controls\",\"navbarSupportedContent\"],[12,\"aria-expanded\",\"false\"],[12,\"aria-label\",\"Toggle navigation\"],[3,\"action\",[[23,0,[]],\"toggleCart\"]],[8],[0,\"\\n        \"],[7,\"img\",true],[10,\"class\",\"navbar-cart\"],[10,\"src\",\"/assets/navbar_cart.png\"],[8],[9],[0,\"\\n        \"],[7,\"span\",true],[11,\"class\",[29,[\"nav-link \",[28,\"if\",[[24,[\"cart\",\"displayCart\"]],\"clicked-cart-text\"],null]]]],[8],[0,\"ΞΞ±Ξ»Ξ¬ΞΈΞΉ\"],[9],[0,\"\\n        \"],[7,\"span\",true],[11,\"class\",[29,[\"navbar-cart-count \",[28,\"if\",[[28,\"gt\",[[24,[\"cart\",\"itemsCount\"]],9],null],\"navbar-cart-count-2digit\"],null]]]],[8],[0,\"(\"],[1,[24,[\"cart\",\"itemsCount\"]],false],[0,\") \"],[7,\"span\",true],[10,\"class\",\"angle-right\"],[8],[9],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarSupportedContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Toggle navigation\"],[8],[0,\"\\n       \"],[4,\"link-to\",null,[[\"class\",\"route\",\"model\"],[\"nav-link\",\"products\",\"navbar\"]],{\"statements\":[[0,\"Ξ ΟΞΏΟΟΞ½ΟΞ± \"],[7,\"span\",true],[10,\"class\",\"angle-right\"],[8],[9]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarSupportedContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Toggle navigation\"],[8],[0,\"\\n       \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"householdBasket\"]],{\"statements\":[[0,\"ΞΞ±Ξ»Ξ¬ΞΈΞΉ Ξ½ΞΏΞΉΞΊΞΏΞΊΟΟΞΉΞΏΟ \"],[7,\"span\",true],[10,\"class\",\"angle-right\"],[8],[9]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\" \\n      \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarSupportedContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Toggle navigation\"],[8],[0,\"\\n       \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"santasBasket\"]],{\"statements\":[[0,\"ΞΞ±Ξ»Ξ¬ΞΈΞΉ ΞΞ· ΞΞ±ΟΞ―Ξ»Ξ· \"],[7,\"span\",true],[10,\"class\",\"angle-right\"],[8],[9]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n       \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarSupportedContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Toggle navigation\"],[8],[0,\"\\n       \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"fuels\"]],{\"statements\":[[0,\"ΞΞ±ΟΟΞΉΞΌΞ± \"],[7,\"span\",true],[10,\"class\",\"angle-right\"],[8],[9]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"li\",false],[12,\"class\",\"nav-item\"],[12,\"data-toggle\",\"collapse\"],[12,\"data-target\",\"#navbarSupportedContent\"],[12,\"aria-controls\",\"navbarSupportedContent\"],[12,\"aria-expanded\",\"false\"],[12,\"aria-label\",\"Toggle navigation\"],[3,\"action\",[[23,0,[]],\"closeCart\"]],[8],[0,\"\\n        \"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"nav-link\",\"useful\"]],{\"statements\":[[0,\"Ξ§ΟΞ�ΟΞΉΞΌΞ± \"],[7,\"span\",true],[10,\"class\",\"angle-right\"],[8],[9]],\"parameters\":[]},null],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \\n  \"],[7,\"div\",true],[11,\"class\",[29,[\"clicked-cart-background \",[28,\"if\",[[28,\"not\",[[24,[\"cart\",\"displayCart\"]]],null],\"display-none\"],null]]]],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"class\",\"navbar-cart-white\"],[10,\"src\",\"/assets/white-cart.png\"],[8],[9],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"cart-bg-text\"],[8],[0,\"ΞΞ±Ξ»Ξ¬ΞΈΞΉ Ξ ΟΞΏΟΟΞ½ΟΟΞ½\"],[9],[0,\"\\n    \"],[7,\"div\",false],[12,\"class\",\"cart-bg-count-bg\"],[3,\"action\",[[23,0,[]],\"toggleCart\"]],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"cart-bg-count\"],[8],[1,[24,[\"cart\",\"itemsCount\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"span\",false],[12,\"class\",\"cart-bg-x\"],[3,\"action\",[[23,0,[]],\"toggleCart\"]],[8],[0,\"β\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[\"cart \",[28,\"if\",[[28,\"not\",[[24,[\"cart\",\"displayCart\"]]],null],\"display-none\"],null]]]],[8],[0,\"\\n    \"],[1,[22,\"cart\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/navbar.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/product-search", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "Kzp7d1dO",
        "block": "{\"symbols\":[\"product\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"search-container\"],[8],[0,\"\\n\"],[0,\"    \"],[7,\"div\",true],[10,\"class\",\"search-input-container\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"searchField\",\"options\",\"placeholder\",\"onchange\"],[[24,[\"selectedProduct\"]],true,true,\"name\",[24,[\"products\"]],\"ΞΞ½Ξ±ΞΆΞ�ΟΞ·ΟΞ· Ξ ΟΞΏΟΟΞ½ΟΞΏΟ\",[28,\"action\",[[23,0,[]],\"goToProduct\"],null]]],{\"statements\":[[0,\"        \"],[1,[23,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[7,\"div\",true],[10,\"class\",\"search-icon-bg\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/search.png\"],[10,\"class\",\"search-icon\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/product-search.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/components/products-filter", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "k9luqVvg",
        "block": "{\"symbols\":[\"filter\",\"index\",\"filter\",\"index\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row mb-5 mt-lg-5\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"h5 nova-sb hide-mobile\"],[8],[0,\"Ξ¦Ξ―Ξ»ΟΟΞ±\"],[9],[0,\"\\n            \"],[7,\"div\",false],[12,\"class\",\" hide-desktop\"],[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"filterExpanded\"]]],null],false]],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"h5 nova-sb mb-0 mr-3\"],[8],[0,\"Ξ¦Ξ―Ξ»ΟΟΞ±\"],[9],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"ember-power-select-status-icon-up\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row mt-5 mb-3\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"Ξ£Ξ΅ΞΉΟΞ¬\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n\"],[4,\"radio-button\",null,[[\"value\",\"groupValue\"],[\"ascending\",[24,[\"sorting\"]]]],{\"statements\":[[0,\"                \"],[7,\"span\",true],[8],[0,\"Ξ¦ΞΈΞ―Ξ½ΞΏΟΟΞ±\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row mb-5\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n\"],[4,\"radio-button\",null,[[\"value\",\"groupValue\"],[\"descending\",[24,[\"sorting\"]]]],{\"statements\":[[0,\"                \"],[7,\"span\",true],[8],[0,\"ΞΟΞΎΞΏΟΟΞ±\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"isProducts\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row mb-1\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"ΞΞ»ΟΟΞ―Ξ΄Ξ±\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row mb-3\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"span\",false],[12,\"class\",\"font-xs blue nova-sb cursor-pointer\"],[3,\"action\",[[23,0,[]],\"clearFilter\"]],[8],[0,\"ΞΞΊΞΊΞ±ΞΈΞ¬ΟΞΉΟΞ· Ξ¦Ξ―Ξ»ΟΟΟΞ½\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"marketsShowAll\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"show-all-scroll-container\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"markets\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n\"],[4,\"radio-button\",null,[[\"value\",\"groupValue\"],[[23,3,[\"name\"]],[24,[\"checkedMarket\"]]]],{\"statements\":[[0,\"                \"],[7,\"span\",true],[8],[1,[23,3,[\"name\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[24,[\"markets\"]]],null,{\"statements\":[[4,\"if\",[[28,\"lt\",[[23,2,[]],5],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n\"],[4,\"radio-button\",null,[[\"value\",\"groupValue\"],[[23,1,[\"name\"]],[24,[\"checkedMarket\"]]]],{\"statements\":[[0,\"            \"],[7,\"span\",true],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1,2]},null],[0,\"    \"],[7,\"p\",false],[12,\"class\",\"font-xs nova-sb cursor-pointer\"],[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"marketsShowAll\"]]],null],true]],[8],[0,\"+ ΞΞΌΟΞ¬Ξ½ΞΉΟΞ· Ξ Ξ΅ΟΞΉΟΟΟΟΞ΅ΟΟΞ½\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/components/products-filter.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/contact", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "3cF/QvKr",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"id\",\"contact\"],[10,\"class\",\"container-fluid px-0 navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"class\",\"banner-img\"],[10,\"src\",\"/assets/banner-contact.png\"],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"container mt-5 pt-5\"],[8],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"h5 mb-5 nova-b\"],[8],[0,\"Ξ¦ΟΟΞΌΞ± ΞΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ±Ο\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"contact-title mb-5\"],[8],[0,\"Ξ£ΟΞΌΟΞ»Ξ·ΟΟΟΟΞ΅ ΟΞ± ΟΞ΅Ξ΄Ξ―Ξ± Ξ³ΞΉΞ± Ξ½Ξ± ΟΟΞ΅Ξ―Ξ»Ξ΅ΟΞ΅ ΟΞ·Ξ½ Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ± ΟΞ±Ο\"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-3\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"blue nova-b\"],[8],[0,\"ΞΞ½ΞΏΞΌΞ±\"],[9],[0,\"\\n                \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"placeholder\",\"class\"],[\"text\",\"firstName\",[24,[\"firstName\"]],\"\",\"contact-input\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-3\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"blue nova-b\"],[8],[0,\"ΞΟΟΞ½ΟΞΌΞΏ\"],[9],[0,\"\\n                \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"placeholder\",\"class\"],[\"text\",\"lastName\",[24,[\"lastName\"]],\"\",\"contact-input\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-3\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"blue nova-b\"],[8],[0,\"E-mail\"],[9],[0,\"\\n                \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"placeholder\",\"class\"],[\"email\",\"email\",[24,[\"email\"]],\"\",\"contact-input\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-3\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"blue nova-b\"],[8],[0,\"Ξ€Ξ·Ξ»Ξ­ΟΟΞ½ΞΏ\"],[9],[0,\"\\n                \"],[1,[28,\"input\",null,[[\"type\",\"id\",\"value\",\"placeholder\",\"class\"],[\"text\",\"msisdn\",[24,[\"msisdn\"]],\"\",\"contact-input\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-6\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"blue nova-b\"],[8],[0,\"ΞΞ�Ξ½ΟΞΌΞ± (Ξ­ΟΟ 1.900 ΟΞ±ΟΞ±ΞΊΟΞ�ΟΞ΅Ο)\"],[9],[0,\"\\n                \"],[1,[28,\"textarea\",null,[[\"id\",\"value\",\"placeholder\",\"class\"],[\"message\",[24,[\"message\"]],\"\",\"contact-textarea contact-input\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"  \\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                \"],[7,\"button\",false],[12,\"class\",\"send-btn\"],[3,\"action\",[[23,0,[]],\"submit\"]],[8],[0,\"ΞΞ ΞΞ£Ξ€ΞΞΞ\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"    \\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"id\",\"contactModal\"],[10,\"class\",\"modal useful-modal\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"modal-dialog modal-dialog-centered modal-md\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n            \"],[7,\"button\",true],[10,\"class\",\"close useful-modal-close\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"aria-hidden\",\"true\"],[8],[0,\"Γ\"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column align-items-center justify-content-around\"],[8],[0,\"\\n                \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/consumer.png\"],[10,\"class\",\"useful-modal-img mb-5\"],[8],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"h5 nova-b mb-5 text-center\"],[8],[1,[22,\"responseText\"],false],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/contact.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/faq", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "FnRh0zZW",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container mt-5 navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[10,\"class\",\"mb-5\"],[8],[0,\"Ξ£Ξ₯Ξ§ΞΞΞ£ ΞΞ‘Ξ©Ξ€ΞΞ£ΞΞΞ£ & ΞΞ ΞΞΞ€ΞΞ£ΞΞΞ£\"],[9],[0,\"\\n\"],[7,\"h4\",true],[8],[0,\"Ξ£ΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ ΟΟΞ»Ξ·ΟΞ·Ο ΟΟΞΏΟΟΞ½ΟΟΞ½ ΞΊΞ±ΞΉ ΟΞ±ΟΞΏΟΞ�Ο ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½:\"],[9],[0,\"\\n\"],[7,\"h5\",true],[8],[0,\"Ξ£ΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ·\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΞΌΞ­ΟΟ ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΏΟ Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ ΟΞΏΟ Ξ΄ΞΉΞ±ΟΞ�ΞΌΞΉΞΆΞ΅ ΞΌΞΉΞ± Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΟΟΞ·Ξ½ ΟΞ·Ξ»Ξ΅ΟΟΞ±ΟΞ·. ΞΟΟΞ� Ξ· ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ� ΞΌΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΞΌΞ²Ξ±ΟΞ· Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ· ;\\nΞΞ±ΞΉ, Ξ³ΞΉΞ±ΟΞ― ΟΟΞ½Ξ¬ΟΞΈΞ·ΞΊΞ΅ ΟΟΞΏ ΟΞ»Ξ±Ξ―ΟΞΉΞΏ Ξ΅Ξ½ΟΟ ΞΏΟΞ³Ξ±Ξ½ΟΞΌΞ­Ξ½ΞΏΟ ΟΟΟΟΞ�ΞΌΞ±ΟΞΏΟ ΟΟΞ»Ξ�ΟΞ΅ΟΞ½ Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ·, ΞΌΞ΅ Ξ±ΟΞΏΞΊΞ»Ξ΅ΞΉΟΟΞΉΞΊΞ� ΟΟΞ�ΟΞ· ΞΌΞ­ΟΟΞ½ Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ±Ο Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ· ΞΊΞ±ΞΉ ΟΟΟΞ―Ο ΟΞ±ΟΟΟΟΟΞΏΞ½Ξ· ΟΟΟΞΉΞΊΞ� ΟΞ±ΟΞΏΟΟΞ―Ξ± ΟΞΏΟ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΞΊΞ±ΞΉ ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΞΊΞ±Ξ½Ξ± Ξ±Ξ³ΞΏΟΞ¬ ΞΌΞ­ΟΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ ΞΊΞ±ΞΉ ΞΈΞ­Ξ»Ο Ξ½Ξ± Ξ³ΟΟΞ―ΟΟ ΟΞΏ ΟΟΞΏΟΟΞ½ ΟΞ―ΟΟ. Ξ ΟΟΞ»Ξ·ΟΞ�Ο Ξ±ΟΞ½Ξ΅Ξ―ΟΞ±ΞΉ Ξ³ΞΉΞ±ΟΞ― Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ.\\nΞ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ­ΟΞ΅ΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ±Ξ½Ξ±ΞΉΟΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ·Ο ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΟ ΟΞΉΟ ΟΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ·, Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ� ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΞΌΞ· Ξ±Ξ½Ξ±Ξ³Ξ½ΟΟΞΉΟΞ·Ο ΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β ΞΞΊΞ±Ξ½Ξ± Ξ±Ξ³ΞΏΟΞ¬ ΞΊΞΉΞ½Ξ·ΟΞΏΟ ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΏΟ ΞΌΞ­ΟΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ ΞΊΞ±ΞΉ Ξ΅Ξ½Ο Ξ΅ΟΞ­ΟΟΟΞ΅ΟΞ± Ξ¬ΞΈΞΉΞΊΟΞΏ ΟΞΏ ΟΟΞΏΟΟΞ½, Ξ΄Ξ΅ ΞΌΞΏΟ Ξ΅ΟΞΉΟΟΟΞ­ΟΞΏΟΞ½ ΟΟΞ�ΞΌΞ±ΟΞ± Ξ³ΞΉΞ±ΟΞ― Ξ±ΟΞΏΟΟΟΞ¬Ξ³ΞΉΟΞ± ΟΞ· ΟΟΟΞΊΞ΅ΟΞ±ΟΞ―Ξ±. ΞΞ·Ξ»ΟΞ½ΞΏΟΞ½ ΟΟΞΉ ΟΞΏ Ξ­ΟΞΏΟΞ½ Ξ±Ξ½Ξ±ΟΞ­ΟΞ΅ΞΉ ΞΊΞ±ΞΉ ΟΟΞΏΟΟ ΟΟΞΏΟΟ ΟΟΞ�ΟΞ·Ο ΟΞΏΟ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞΏΟ ΟΞΏΟΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ. ΞΞ―Ξ½Ξ±ΞΉ Ξ½ΟΞΌΞΉΞΌΞΏ ;\\nΞ€Ξ± Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ¬ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞ± ΟΟΞΏΟΟΞ΅ΞΏΟΞ½ΟΞ±ΞΉ Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞ½ΞΏΟΞ½ ΟΞΏΟΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ­Ο, ΞΌΞ΅ΟΞ±ΞΎΟ Ξ¬Ξ»Ξ»ΟΞ½, Ξ³ΞΉΞ± ΟΞΏ ΞΊΞ±ΟΞ¬ ΟΞΏ Ξ.2251/94 Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΟ ΟΟΞΌΞ²Ξ±ΟΞ· Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ·, ΟΞΉΟ ΟΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΞΉΟ, ΟΞ·Ξ½ ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ± ΞΊΞ±ΞΉ ΟΞΉΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ΅Ο Ξ¬ΟΞΊΞ·ΟΞ�Ο ΟΞΏΟ, ΟΟΟΞ―Ο Ξ½Ξ± Ξ΅ΟΞΉΞ²Ξ¬Ξ»Ξ»ΞΏΟΞ½ ΟΟΟΟΞΈΞ΅ΟΞΏΟΟ ΟΞ΅ΟΞΉΞΏΟΞΉΟΞΌΞΏΟΟ ΟΞΏΟ Ξ΄Ξ΅Ξ½ ΟΟΞΏΞ²Ξ»Ξ­ΟΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞ·Ξ½ ΞΊΞ΅Ξ―ΞΌΞ΅Ξ½Ξ· Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ±, ΟΟΟΟ Ξ· ΞΌΞ· Ξ±ΟΞΏΟΟΟΞ¬Ξ³ΞΉΟΞ· ΟΞ·Ο ΟΟΟΞΊΞ΅ΟΞ±ΟΞ―Ξ±Ο. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ·Β ΞΌΞ· Ξ±Ξ½Ξ±Ξ³Ξ½ΟΟΞΉΟΞ·Ο ΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\nΞΟΞΉΟΞ·ΞΌΞ±Ξ―Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΞΉ Ξ΅Ξ¬Ξ½ ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ­ΟΞ΅ΞΉ ΟΟΞΏΞ²Ξ΅Ξ― ΟΞ΅ Ξ΄ΞΉΞ±ΟΞ΅Ξ―ΟΞΉΟΞ· ΟΟΞ½ Ξ±Ξ³Ξ±ΞΈΟΞ½ Ξ¬Ξ»Ξ»Ξ· Ξ±ΟΟ Ξ΅ΞΊΞ΅Ξ―Ξ½Ξ· ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±Ξ½Ξ±Ξ³ΞΊΞ±Ξ―Ξ± Ξ³ΞΉΞ± ΟΞ· Ξ΄ΞΉΞ±ΟΞ―ΟΟΟΟΞ· ΟΞ·Ο ΟΟΟΞ·Ο, ΟΟΞ½ ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΟΞ½ ΞΊΞ±ΞΉ ΟΞ·Ο Ξ»Ξ΅ΞΉΟΞΏΟΟΞ³Ξ―Ξ±Ο ΟΟΞ½ Ξ±Ξ³Ξ±ΞΈΟΞ½, ΟΟΟΞ΅ ΟΞ­ΟΞ΅ΞΉ ΟΞ·Ξ½ Ξ΅ΟΞΈΟΞ½Ξ· Ξ³ΞΉΞ± ΟΟΟΟΞ½ ΞΌΞ΅Ξ―ΟΟΞ· ΟΞ·Ο Ξ±ΞΎΞ―Ξ±Ο ΟΞΏΟΟ ΞΊΞ±ΞΉ ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΞΏΟ Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΞΉ ΟΞΏΟΟ ΞΌΞΉΞΊΟΟΟΞ΅ΟΞΏ Ξ±ΟΟ ΟΞΏ ΟΞΏΟΟ Ξ±Ξ³ΞΏΟΞ¬Ο.Β \\nΞΟΞ―ΟΞ·Ο, Ξ΅ΞΎΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο, Ξ΅Ξ¬Ξ½ Ξ±ΟΞΏΟΟΟΞ±Ξ³Ξ―ΟΟΞ·ΞΊΞ±Ξ½ ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·, ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±ΞΊΞ±ΟΞ¬Ξ»Ξ»Ξ·Ξ»Ξ± ΟΟΞΏΟ Ξ΅ΟΞΉΟΟΟΞΏΟΞ� Ξ³ΞΉΞ± Ξ»ΟΞ³ΞΏΟΟ ΟΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΟΞ·Ο ΟΞ³Ξ΅Ξ―Ξ±Ο Ξ� Ξ³ΞΉΞ± Ξ»ΟΞ³ΞΏΟΟ ΟΞ³ΞΉΞ΅ΞΉΞ½Ξ�Ο, ΞΏΞΉ ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½Ξ΅Ο Ξ·ΟΞ·ΟΞΉΞΊΞ­Ο Ξ΅Ξ³Ξ³ΟΞ±ΟΞ­Ο, ΞΏΞΉ ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½Ξ΅Ο Ξ΅Ξ³Ξ³ΟΞ±ΟΞ­Ο Ξ²Ξ―Ξ½ΟΞ΅ΞΏ ΞΊΞ±ΞΉ ΟΞΏ ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½ΞΏ Ξ»ΞΏΞ³ΞΉΟΞΌΞΉΞΊΟ Ξ³ΞΉΞ± ΟΟΞΏΞ»ΞΏΞ³ΞΉΟΟΞ­Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"4.Β Β Β Ξ ΟΟ Ξ±ΟΞΊΞ΅Ξ―ΟΞ±ΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ;\\nΞ Ξ΄Ξ�Ξ»ΟΟΞ· ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ³Ξ―Ξ½Ξ΅ΞΉ Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ Ξ� ΟΞ΅ Ξ¬Ξ»Ξ»ΞΏ ΟΟΞ±ΞΈΞ΅ΟΟ ΞΌΞ­ΟΞΏ, ΞΊΞ±ΞΈΟΟ ΟΞΏ Ξ²Ξ¬ΟΞΏΟ Ξ±ΟΟΞ΄Ξ΅ΞΉΞΎΞ·Ο ΟΟΞΉ Ξ¬ΟΞΊΞ·ΟΞ΅ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ±, ΟΞΏ ΟΞ­ΟΞ΅ΞΉ ΞΏ Ξ―Ξ΄ΞΉΞΏΟ. Ξ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞ�ΟΞ΅ΞΉ ΟΞΏ ΟΟΟΞ΄Ξ΅ΞΉΞ³ΞΌΞ± Ξ΅Ξ½ΟΟΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ� Ξ½Ξ± ΞΊΞ¬Ξ½Ξ΅ΞΉ ΞΏΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ Ξ¬Ξ»Ξ»Ξ· ΟΞ±ΟΞ� Ξ΄Ξ�Ξ»ΟΟΞ· Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±ΟΟΟΞ±ΟΞ� ΟΞΏΟ Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΞ΅ΞΉ Ξ±ΟΟ ΟΞ· ΟΟΞ³ΞΊΞ΅ΞΊΟΞΉΞΌΞ­Ξ½Ξ· ΟΟΞΌΞ²Ξ±ΟΞ·.Β \\nΞ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ­ΟΞ΅ΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΞ΅ΞΉ Ξ±Ξ½Ξ±ΞΉΟΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ± Ξ±ΟΟ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ· Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ� ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ. ΞΞ½ Ξ΄Ξ΅Ξ½ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ΅Ξ― ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ³ΞΉΞ± ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο, Ξ· ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΞΎΞ¬Ξ½Ξ΅ΟΞ±ΞΉ ΞΊΞ±ΟΞ¬ 12 ΞΌΞ�Ξ½Ξ΅Ο Ξ�, Ξ±Ξ½ ΟΟΞ¬ΟΞΎΞ΅ΞΉ Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· ΟΟΞΏ Ξ΅Ξ½Ξ΄ΞΉΞ¬ΞΌΞ΅ΟΞΏ,Β Ξ³ΞΉΞ± 14 Ξ·ΞΌΞ­ΟΞ΅Ο Ξ±ΟΟ ΟΞ·Ξ½ Ξ·ΞΌΞ΅ΟΞΏΞΌΞ·Ξ½Ξ―Ξ± Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο.\\nΞ ΟΟΞ»Ξ·ΟΞ�Ο ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΞΉ ΟΞ± ΟΟΞ�ΞΌΞ±ΟΞ± Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ· Ξ΄Ξ�Ξ»ΟΟΞ· ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ±ΞΈΞ­ΟΞ·ΟΞ·Ο Ξ±ΟΟΞ�Ο ΟΞ·Ο ΟΟΞΏΟΟΞ­ΟΟΞ·Ο Ξ� ΞΌΞ· Ξ±Ξ½Ξ±Ξ³Ξ½ΟΟΞΉΟΞ·Ο ΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"5.Β Β Β Ξ ΞΏΞΉΞ± ΟΟΞΏΟΟΞ½ΟΞ± Ξ΅ΞΎΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ;\\nΞΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ΅ΞΎΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ, ΞΌΞ΅ΟΞ±ΞΎΟ Ξ¬Ξ»Ξ»ΟΞ½, ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞΏΟ ΞΊΞ±ΟΞ±ΟΞΊΞ΅ΟΞ¬ΞΆΞΏΞ½ΟΞ±ΞΉ ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΉΟ ΟΟΞΏΞ΄ΞΉΞ±Ξ³ΟΞ±ΟΞ­Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞ± ΞΏΟΞΏΞ―Ξ± ΞΌΟΞΏΟΞΏΟΞ½ Ξ½Ξ± Ξ±Ξ»Ξ»ΞΏΞΉΟΞΈΞΏΟΞ½ Ξ� Ξ»Ξ�Ξ³ΞΏΟΞ½ ΟΟΞ½ΟΞΏΞΌΞ±, ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞ± ΞΏΟΞΏΞ―Ξ± Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΊΞ±ΟΞ¬Ξ»Ξ»Ξ·Ξ»Ξ± ΟΟΞΏΟ Ξ΅ΟΞΉΟΟΟΞΏΟΞ� Ξ³ΞΉΞ± Ξ»ΟΞ³ΞΏΟΟ ΟΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΟΞ·Ο ΟΞ³Ξ΅Ξ―Ξ±Ο Ξ� Ξ³ΞΉΞ± Ξ»ΟΞ³ΞΏΟΟ ΟΞ³ΞΉΞ΅ΞΉΞ½Ξ�Ο, Ξ΅ΟΟΟΞΏΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½Ξ± ΞΊΞ±ΞΉ Ξ­ΟΞΏΟΞ½ Ξ±ΟΞΏΟΟΟΞ±Ξ³ΞΉΟΟΞ΅Ξ― ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·, ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΟΟΞΏΟΟΞ½ΟΞ± ΟΞ± ΞΏΟΞΏΞ―Ξ±, ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·, Ξ»ΟΞ³Ο ΟΞ·Ο ΟΟΟΞ·Ο ΟΞΏΟΟ, Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±Ξ½Ξ±ΟΟΟΟΞ±ΟΟΞ± Ξ±Ξ½Ξ±ΞΌΞ΅ΞΌΞ΅ΞΉΞ³ΞΌΞ­Ξ½Ξ± ΞΌΞ΅ Ξ¬Ξ»Ξ»Ξ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ±. ΞΟΞ―ΟΞ·Ο, Ξ΅ΞΎΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ· ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ± ΟΞ·ΟΞΉΞ±ΞΊΞΏΟ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΞΏΟ ΞΌΞ· ΟΞ±ΟΞ΅ΟΟΞΌΞ΅Ξ½ΞΏΟ ΟΞ¬Ξ½Ο ΟΞ΅ ΟΞ»ΞΉΞΊΟ ΞΌΞ­ΟΞΏ, Ξ΅Ξ¬Ξ½ Ξ· Ξ΅ΞΊΟΞ­Ξ»Ξ΅ΟΞ· ΞΎΞ΅ΞΊΞ―Ξ½Ξ·ΟΞ΅ ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ΅Ξ½Ξ· ΟΞ·ΟΞ� ΟΟΞ³ΞΊΞ±ΟΞ¬ΞΈΞ΅ΟΞ· ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΞΊΞ±ΞΉ ΟΞ·Ξ½ Ξ΅ΟΞΉΞ²Ξ΅Ξ²Ξ±Ξ―ΟΟΞ· Ξ΅ΞΊ ΞΌΞ­ΟΞΏΟΟ ΟΞΏΟ ΟΟΞΉ ΟΞ¬Ξ½Ξ΅ΞΉ Ξ­ΟΟΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ¬ ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΞΊΞ±ΞΉ Ξ· ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ± ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½ΟΞ½ Ξ·ΟΞ·ΟΞΉΞΊΟΞ½ Ξ΅Ξ³Ξ³ΟΞ±ΟΟΞ½ Ξ� ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½ΟΞ½ Ξ΅Ξ³Ξ³ΟΞ±ΟΟΞ½ Ξ²Ξ―Ξ½ΟΞ΅ΞΏ Ξ� ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½ΞΏΟ Ξ»ΞΏΞ³ΞΉΟΞΌΞΉΞΊΞΏΟ Ξ³ΞΉΞ± ΟΟΞΏΞ»ΞΏΞ³ΞΉΟΟΞ­Ο, ΟΞΏΟ Ξ±ΟΞΏΟΟΟΞ±Ξ³Ξ―ΟΟΞ·ΞΊΞ±Ξ½ ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·.\\nΞ Ξ΅ΟΞ±ΞΉΟΞ­ΟΟ, Ξ±ΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ΅ΞΎΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ· ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ± ΟΟΞΏΟΞ―ΞΌΟΞ½, ΟΞΏΟΟΞ½ Ξ� Ξ¬Ξ»Ξ»ΟΞ½ Ξ±Ξ³Ξ±ΞΈΟΞ½ ΟΞΏΟ ΟΟΞΏΞΏΟΞ―ΞΆΞΏΞ½ΟΞ±ΞΉ Ξ³ΞΉΞ± ΟΟΞ­ΟΞΏΟΟΞ± ΞΊΞ±ΟΞ±Ξ½Ξ¬Ξ»ΟΟΞ· ΟΟΞΏ ΟΞ»Ξ±Ξ―ΟΞΉΞΏ ΟΞΏΟ Ξ½ΞΏΞΉΞΊΞΏΞΊΟΟΞΉΞΏΟ ΞΊΞ±ΞΉ ΟΞ± ΞΏΟΞΏΞ―Ξ± ΟΞ±ΟΞ±Ξ΄Ξ―Ξ΄ΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΟΞ΅ ΟΟΟΞ½Ξ� ΞΊΞ±ΞΉ ΟΞ±ΞΊΟΞΉΞΊΞ� Ξ²Ξ¬ΟΞ· ΟΟΞΏ ΟΟΞ―ΟΞΉ, ΟΞ·Ξ½ ΞΊΞ±ΟΞΏΞΉΞΊΞ―Ξ± Ξ� ΟΞΏΞ½ ΟΟΟΞΏ Ξ΅ΟΞ³Ξ±ΟΞ―Ξ±Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΞΏΞΉ Ξ΅ΟΞ·ΞΌΞ΅ΟΞ―Ξ΄Ξ΅Ο ΞΊΞ±ΞΉ ΟΞ± ΟΞ΅ΟΞΉΞΏΞ΄ΞΉΞΊΞ¬, Ξ΅ΞΊΟΟΟ ΞΊΞΉ Ξ±Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ ΟΟΞ½Ξ΄ΟΞΏΞΌΞ·ΟΞΉΞΊΞ� ΟΟΞΌΞ²Ξ±ΟΞ· Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ¬ ΟΞΏΟΟ.\\n\"],[9],[7,\"p\",true],[8],[0,\"6.Β Β Β ΞΞ±ΟΞ¬ ΟΞ·Ξ½ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ± ΟΟΞΏΞ²ΞΏΞ»Ξ�Ο ΟΞ·Ο ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο ΞΌΞΏΟ ΞΌΞ­ΟΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ Ξ΄Ξ΅Ξ½ Ξ�ΟΞ±Ξ½ ΟΞ±ΟΞ­Ο ΟΟΞΉ Ξ· ΟΟΞΏΞ²ΞΏΞ»Ξ� ΟΞ·Ο ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο ΟΟΞ½Ξ΅ΟΞ¬Ξ³Ξ΅ΟΞ±ΞΉ ΟΟΞΏΟΟΞ­ΟΟΞ� ΞΌΞΏΟ Ξ½Ξ± ΟΞ»Ξ·ΟΟΟΟ. Ξ£Ξ΅ Ξ±ΟΟΞ�Ξ½ ΟΞ·Ξ½ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ­ΟΟ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± Ξ±ΞΊΟΟΟΟΟ ΟΞ· ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ� ΞΌΞΏΟ ;\\nΞΞ±ΞΉ, Ξ΄ΞΉΟΟΞΉ ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο ΞΏΟΞ΅Ξ―Ξ»Ξ΅ΞΉ Ξ½Ξ± ΞΌΞ΅ΟΞΉΞΌΞ½Ξ�ΟΞ΅ΞΉ ΟΟΟΞ΅ ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο, ΟΟΞΏΞ²Ξ¬Ξ»Ξ»ΞΏΞ½ΟΞ±Ο ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΞΏΟ, Ξ½Ξ± Ξ±Ξ½Ξ±Ξ³Ξ½ΟΟΞ―ΟΞ΅ΞΉ ΟΞ·ΟΟΟ ΟΟΞΉ Ξ· ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ½Ξ΅ΟΞ¬Ξ³Ξ΅ΟΞ±ΞΉ ΟΟΞΏΟΟΞ­ΟΟΞ· ΟΞ»Ξ·ΟΟΞΌΞ�Ο. ΞΞ¬Ξ½ Ξ΄Ξ΅ ΟΟΞΌΞΌΞΏΟΟΟΞΈΞ΅Ξ― ΞΌΞ΅ Ξ±ΟΟΟ, ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ΄Ξ΅ Ξ΄Ξ΅ΟΞΌΞ΅ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· Ξ� ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"7.Β Β Β Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΞΊΞ±ΞΉ Ξ΅ΟΞΉΟΟΟΞΏΟΞ�Ο ΟΟΞ½ Ξ±Ξ³Ξ±ΞΈΟΞ½ Ξ΅Ξ½ΟΟΟ ΟΞ·Ο ΟΟΞΏΞ²Ξ»Ξ΅ΟΟΞΌΞ΅Ξ½Ξ·Ο Ξ±ΟΟ ΟΞΏ Ξ½ΟΞΌΞΏ ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ±Ο, ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΞΉ ΞΊΞ±ΞΉ ΟΞ± Ξ­ΞΎΞΏΞ΄Ξ± Ξ±ΟΟΞΉΞΊΞ�Ο ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·Ο ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½; ΞΟΞ―ΟΞ·Ο, ΟΞΏΞΉΞΏΟ Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½Ξ΅ΟΞ±ΞΉ ΞΌΞ΅ ΟΞ± Ξ­ΞΎΞΏΞ΄Ξ± Ξ΅ΟΞΉΟΟΟΞΏΟΞ�Ο ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½;\\nΞ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΞΉ ΞΊΞ¬ΞΈΞ΅ ΟΞ»Ξ·ΟΟΞΌΞ� ΟΞΏΟ Ξ­Ξ»Ξ±Ξ²Ξ΅ Ξ±ΟΟ ΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, ΟΟΞΌΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΟΞ½, ΞΊΞ±ΟΞ¬ ΟΞ΅ΟΞ―ΟΟΟΟΞ·, ΟΟΞ½ Ξ΄Ξ±ΟΞ±Ξ½ΟΞ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·Ο, Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ· ΞΌΞ­ΟΞ± ΟΞΏΟ ΟΞΏΟ Ξ±Ξ½Ξ±ΞΊΞΏΞΉΞ½ΟΟΞ±ΟΞ΅ ΟΞ·Ξ½ Ξ±ΟΟΟΞ±ΟΞ� ΟΞ±Ο Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΞ΅ΟΞ΅ Ξ±ΟΟ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ·. Ξ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½Ξ΅ΟΞ±ΞΉ ΞΌΞ΅ ΟΞΏ ΞΊΟΟΟΞΏΟ Ξ΅ΟΞΉΟΟΟΞΏΟΞ�Ο ΟΟΞ½ Ξ±Ξ³Ξ±ΞΈΟΞ½, Ξ΅ΞΊΟΟΟ Ξ±Ξ½ ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο Ξ­ΟΞ΅ΞΉ ΟΟΞΌΟΟΞ½Ξ�ΟΞ΅ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½ΞΈΞ΅Ξ― ΞΏ Ξ―Ξ΄ΞΉΞΏΟ Ξ� Ξ­ΟΞ΅ΞΉ ΟΞ±ΟΞ±Ξ»Ξ΅Ξ―ΟΞ΅ΞΉ Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΟΞ΅ΞΉ ΟΟΞ΅ΟΞΉΞΊΞ¬ ΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"8.Β Β Β Ξ ΟΞ±Ξ³ΞΌΞ±ΟΞΏΟΞΏΞ―Ξ·ΟΞ± ΞΌΞΉΞ± Ξ±Ξ³ΞΏΟΞ¬ ΞΌΞ­ΟΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ ΞΊΞ±ΞΉ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ± Ξ±ΟΟ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΟΞ½. ΞΞ­ΟΟΞΉ ΟΟΟΞ΅ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΟ ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ±;\\nΞ₯ΟΞΏΟΟΞ΅ΞΏΟΟΟΞ΅ Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΟΞ΅ ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΟΟΞ―Ο Ξ±Ξ΄ΞΉΞΊΞ±ΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ· ΞΊΞ±ΞΈΟΟΟΞ­ΟΞ·ΟΞ· ΞΊΞ±ΞΉ ΞΏΟΟΟΞ΄Ξ�ΟΞΏΟΞ΅ Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ· ΞΌΞ­ΟΞ± ΟΞΏΟ Ξ±Ξ½Ξ±ΞΊΞΏΞΉΞ½ΟΟΞ±ΟΞ΅ ΟΟΞΏΞ½ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΟΞ·Ξ½ Ξ±ΟΟΟΞ±ΟΞ� ΟΞ±Ο Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΞ΅ΟΞ΅ Ξ±ΟΟ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ·.\\n\"],[9],[7,\"p\",true],[8],[0,\"9.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΞΊΞΏΟΟΟΞ―Ξ½Ξ΅Ο Ξ±ΟΟ ΟΞΏ Ξ΄ΞΉΞ±Ξ΄Ξ―ΞΊΟΟΞΏ. ΞΞ΅Ξ½ Ξ΅Ξ―ΟΞ±Ξ½ Ξ­ΟΞΏΞΉΞΌΞ΅Ο ΟΟΞ± ΞΌΞ­ΟΟΞ± ΟΞΏΟ Ξ�ΞΈΞ΅Ξ»Ξ± ΞΊΞ±ΞΉ ΟΞΏΟΟ Ξ­Ξ΄ΟΟΞ± Ξ΅Ξ³Ο ΟΞΉΟ Ξ΄ΞΉΞ±ΟΟΞ¬ΟΞ΅ΞΉΟ. Ξ§ΟΞ΅Ο ΟΞΉΟ ΟΞ±ΟΞ­Ξ»Ξ±Ξ²Ξ± ΞΊΞ±ΞΉ Ξ΄Ξ΅ ΞΌΞΏΟ Ξ¬ΟΞ΅ΟΞ΅ ΟΞΏ ΟΟΞ­Ξ΄ΞΉΞΏ. ΞΟΞΏΟΟ Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΟ;\\nΞΟΞΉ. Ξ€Ξ± Ξ±Ξ³Ξ±ΞΈΞ¬ ΟΞΏΟ ΞΊΞ±ΟΞ±ΟΞΊΞ΅ΟΞ¬ΞΆΞΏΞ½ΟΞ±ΞΉ ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΉΟ ΟΟΞΏΞ΄ΞΉΞ±Ξ³ΟΞ±ΟΞ­Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� Ξ� Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ±ΟΟΟ Ξ΅ΞΎΞ±ΟΞΏΞΌΞΉΞΊΞ΅ΟΞΌΞ­Ξ½Ξ± Ξ΅ΞΎΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"10.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ· ΞΌΞ―Ξ± ΟΟΟΞΊΞ΅ΟΞ� ΞΌΞ΅ ΟΞΉΞΌΞΏΞ»ΟΞ³ΞΉΞΏ, Ξ³ΞΉΞ± Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΟΞ·Ο Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ�Ο ΞΌΞΏΟ. ΞΟΞΏΟΟ Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΟ ΞΌΞ΅ Ξ²Ξ¬ΟΞ· ΟΞΉΟ Ξ΄ΞΉΞ±ΟΞ¬ΞΎΞ΅ΞΉΟ ΟΞΏΟ Ξ.2251/94;\\nΞΟΞΉ, Ξ³ΞΉΞ±ΟΞ― Ξ΄Ξ΅Ξ½ Ξ΅Ξ―ΟΟΞ΅ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΊΞ±ΟΞ¬ ΟΞ·Ξ½ Ξ­Ξ½Ξ½ΞΏΞΉΞ± ΟΞΏΟ Ξ.2251/94. Ξ©Ο ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΏΟΞ―ΞΆΞ΅ΟΞ±ΞΉ ΞΊΞ¬ΞΈΞ΅ ΟΟΟΞΉΞΊΟ ΟΟΟΟΟΟΞΏ ΟΞΏ ΞΏΟΞΏΞ―ΞΏ Ξ΅Ξ½Ξ΅ΟΞ³Ξ΅Ξ― Ξ³ΞΉΞ± Ξ»ΟΞ³ΞΏΟΟ ΟΞΏΟ Ξ΄Ξ΅Ξ½ Ξ΅ΞΌΟΞ―ΟΟΞΏΟΞ½ ΟΟΞ·Ξ½ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ�, Ξ΅ΟΞΉΟΞ΅ΞΉΟΞ·ΞΌΞ±ΟΞΉΞΊΞ�, Ξ²ΞΉΞΏΟΞ΅ΟΞ½ΞΉΞΊΞ� Ξ� Ξ΅Ξ»Ξ΅ΟΞΈΞ­ΟΞΉΞ± Ξ΅ΟΞ±Ξ³Ξ³Ξ΅Ξ»ΞΌΞ±ΟΞΉΞΊΞ� ΟΞΏΟ Ξ΄ΟΞ±ΟΟΞ·ΟΞΉΟΟΞ·ΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"11.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ Ξ±ΟΟ ΞΉΞ΄ΞΉΟΟΞ· ΞΌΞ­ΟΟ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ�Ο Ξ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο. ΞΟΞΏΟΟ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ο ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±;\\nΞΟΞΉ, Ξ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� Ξ΄Ξ΅Ξ½ Ξ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ±ΞΉ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»ΞΉΟΞ½ Ξ±Ξ½ ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο Ξ΄Ξ΅Ξ½ Ξ΅Ξ½Ξ΅ΟΞ³Ξ΅Ξ― Ξ³ΞΉΞ± ΟΞΊΞΏΟΞΏΟΟ ΞΏΞΉ ΞΏΟΞΏΞ―ΞΏΞΉ ΟΟΞ΅ΟΞ―ΞΆΞΏΞ½ΟΞ±ΞΉ ΞΌΞ΅ ΟΞΉΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ­Ο, Ξ²ΞΉΞΏΟΞ΅ΟΞ½ΞΉΞΊΞ­Ο Ξ� Ξ΅ΟΞ±Ξ³Ξ³Ξ΅Ξ»ΞΌΞ±ΟΞΉΞΊΞ­Ο Ξ΄ΟΞ±ΟΟΞ·ΟΞΉΟΟΞ·ΟΞ­Ο ΟΞΏΟ.\\n\"],[9],[7,\"p\",true],[8],[0,\"12.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ Ξ±ΟΟ ΟΞ· ΞΞ΅ΟΞΌΞ±Ξ½Ξ―Ξ± ΞΊΞ±ΞΉ Ξ�ΟΞ±Ξ½ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;Β \\nΞΞ½ Ξ±Ξ½ΟΞΉΞΌΞ΅ΟΟΟΞ―ΞΆΞ΅ΟΞ΅ ΟΟΟΞ²Ξ»Ξ·ΞΌΞ± ΟΞ΅ ΟΟΞ­ΟΞ· ΞΌΞ΅ ΟΟΞΏΟΟΞ½ ΟΞΏΟ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�ΞΊΞ±ΟΞ΅ Ξ±ΟΟ ΞΊΟΞ¬ΟΞΏΟ-ΞΌΞ­Ξ»ΞΏΟ ΟΞ·Ο ΞΟΟΟΟΞ±ΟΞΊΞ�Ο ΞΞ½ΟΟΞ·Ο, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ�ΟΞ΅ΟΞ΅ ΞΌΞ΅ ΟΞΏ ΞΟΟΟΟΞ±ΟΞΊΟ ΞΞ­Ξ½ΟΟΞΏ ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΞΞ»Ξ»Ξ¬Ξ΄Ξ±Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"13.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ Ξ±ΟΟ ΟΟΟΞ± Ξ΅ΞΊΟΟΟ ΞΟΟΟΟΞ±ΟΞΊΞ�Ο ΞΞ½ΟΟΞ·Ο ΞΊΞ±ΞΉ ΟΟΞ±Ξ½ ΟΞΏ ΟΞ±ΟΞ­Ξ»Ξ±Ξ²Ξ± Ξ΄ΞΉΞ±ΟΞ―ΟΟΟΟΞ± ΟΟΞΉ Ξ΄Ξ΅Ξ½ Ξ�ΟΞ±Ξ½ Ξ±ΟΟΟ ΟΞΏΟ ΟΞ±ΟΞ�Ξ³Ξ³Ξ΅ΞΉΞ»Ξ±. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞΞΉ ΞΊΞ±Ξ½ΟΞ½Ξ΅Ο ΟΞ·Ο ΞΟΟΟΟΞ±ΟΞΊΞ�Ο ΞΞ½ΟΟΞ·Ο (ΞΞ) Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΟΞΏΟΟΞ±ΟΞ―Ξ± ΟΟΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½ ΞΊΞ±Ξ»ΟΟΟΞΏΟΞ½ ΟΟΞΏΟΟΞ½ΟΞ± ΞΊΞ±ΞΉ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞΏΟ Ξ±Ξ³ΞΏΟΞ¬ΟΟΞ·ΞΊΞ±Ξ½ ΟΟΞ·Ξ½ ΞΞ.Β ΞΟΟΟΞΏΞ½, ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο Ξ΅Ξ΄ΟΞ΅ΟΞ΅ΞΉ ΟΞ΅ ΟΟΟΞ±, Ξ· ΞΏΟΞΏΞ―Ξ± ΟΟΞΌΞΌΞ΅ΟΞ­ΟΞ΅ΞΉ ΟΟΞ· Ξ΄ΟΞ¬ΟΞ· econsumer ΟΞΏΟ ΞΞΉΞ΅ΞΈΞ½ΞΏΟΟ ΞΞΉΞΊΟΟΞΏΟ ΞΟΞΉΞ²ΞΏΞ»Ξ�Ο ΟΞ·Ο ΞΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ±Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ± ΟΟΞ½ ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½ (ICPEN) ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΟΞ·Ξ½ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΞ±Ο ΟΟΞ· Ξ΄ΞΉΞ΅ΞΈΞ½Ξ� ΟΞ»Ξ±ΟΟΟΟΞΌΞ± ΟΟΞΏΞ²ΞΏΞ»Ξ�Ο ΟΞ±ΟΞ±ΟΟΞ½ΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"14.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΟΞ±ΟΞΏΟΟΟΞΉΞ± ΞΌΞ­ΟΟ Facebook. ΞΞΏΟ ΟΟΞ΅Ξ―Ξ»Ξ±Ξ½Ξ΅ Ξ»Ξ¬ΞΈΞΏΟ Ξ½ΞΏΟΞΌΞ΅ΟΞΏ. ΞΟΞ―ΟΞ·Ο, Ξ½ΞΏΞΌΞ―ΞΆΟ ΟΟΞΉ ΟΟΟΞΊΞ΅ΞΉΟΞ±ΞΉ Ξ³ΞΉΞ± Ξ±ΟΞΏΞΌΞΉΞΌΞ·ΟΞΉΞΊΟ ΟΟΞΏΟΟΞ½. ΞΞ΅Ξ½ Ξ±ΟΞ±Ξ½ΟΞΏΟΞ½ ΟΟΞ± ΟΞ·Ξ»Ξ­ΟΟΞ½Ξ± ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ Ξ­ΟΟ ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± Ξ΄ΞΉΞ΅ΟΞΈΟΞ½ΟΞ·Ο Ξ� Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ±Ο ΟΞΏΟ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�, ΞΌΟΞ½ΞΏ ΞΊΞΉΞ½Ξ·ΟΟ ΟΞ·Ξ»Ξ­ΟΟΞ½ΞΏ ΞΊΞ±ΞΉ email.\\nΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞΏ Ξ£ΞΞΞΒ Ξ³ΞΉΞ± ΟΞΏ ΞΈΞ­ΞΌΞ± ΟΞ·Ο Ξ³Ξ½Ξ·ΟΞΉΟΟΞ·ΟΞ±Ο ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ ΞΊΞ±ΞΉΒ ΟΟΞ· ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΞΞ―ΟΞΎΞ·Ο ΞΞ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞΏΟ ΞΞ³ΞΊΞ»Ξ�ΞΌΞ±ΟΞΏΟΒ (ΟΞ·Ξ»: 11188, email : ydheve@cybercrimeunit.gov.gr)Β Ξ³ΞΉΞ± ΟΞ· Ξ΄ΞΉΞ΅ΟΞ΅ΟΞ½Ξ·ΟΞ· ΟΞ·Ο ΟΟΟΞΈΞ΅ΟΞ·Ο, Ξ΅ΟΟΟΞΏΞ½Β ΟΞ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± ΟΞ±ΟΟΟΟΞ·ΟΞ±Ο, Ξ΄ΞΉΞ΅ΟΞΈΟΞ½ΟΞ·Ο Ξ� Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ±Ο ΟΞΏΟ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄ΞΉΞ±ΞΈΞ­ΟΞΉΞΌΞ±.\\n\"],[9],[7,\"h5\",true],[8],[0,\"Ξ£ΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ Ξ΅ΞΊΟΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ΅ΞΊΟΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ Ξ±ΞΎΞ―Ξ±Ο 15 Ξ΅ΟΟΟ ΞΊΞ±ΞΉ ΞΈΞ­Ξ»Ο Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΟ. ΞΟΟ Ξ±ΟΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ;\\nΞΟΞΉ, ΞΏΞΉ Ξ΄ΞΉΞ±ΟΞ¬ΞΎΞ΅ΞΉΟ Ξ³ΞΉΞ± ΟΞΉΟ ΟΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ Ξ΅ΞΊΟΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ Ξ΄Ξ΅Ξ½ Ξ΅ΟΞ±ΟΞΌΟΞΆΞΏΞ½ΟΞ±ΞΉ ΟΞ΅ ΟΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ Ξ³ΞΉΞ± ΟΞΉΟ ΞΏΟΞΏΞ―Ξ΅Ο ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»Ξ΅ΞΉ ΟΞΏΟΟ ΞΌΞΉΞΊΟΟΟΞ΅ΟΞΏ ΟΟΞ½ 30 Ξ΅ΟΟΟ.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ΄ΟΞΏ Ξ²ΞΉΞ²Ξ»Ξ―Ξ± Ξ±ΟΟ ΟΟΞ»Ξ·ΟΞ� Ξ²ΞΉΞ²Ξ»Ξ―ΟΞ½ ΟΞΏΟ ΞΌΞ΅ Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ·ΞΊΞ΅ ΟΟΞΏ ΟΟΞ―ΟΞΉ ΞΌΞΏΟ. ΞΟΞ±Ξ½ Ξ­ΟΟΞ³Ξ΅ ΟΞΏ ΞΎΞ±Ξ½Ξ±ΟΞΊΞ­ΟΟΞ·ΞΊΞ± ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ ΟΞ± ΟΟΞ΅ΞΉΞ¬ΞΆΞΏΞΌΞ±ΞΉ ΟΟΞ±Ξ³ΞΌΞ±ΟΞΉΞΊΞ¬. ΞΟΟ Ξ΄ΟΟΞ΅ΞΉ ΞΊΞ±ΞΉ ΞΌΞΉΞ± ΞΌΞΉΞΊΟΞ� ΟΟΞΏΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ�. ΞΟΞΏΟΟ Ξ½Ξ± ΟΞ± Ξ΅ΟΞΉΟΟΟΞ­ΟΟ ;\\nΞ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ­ΟΞ΅ΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΞ΅ΞΉ Ξ±Ξ½Ξ±ΞΉΟΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ±Β Ξ±ΟΟ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· Ξ΅ΞΊΟΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ� ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ. Ξ£ΟΞΏ Ξ±Ξ½ΟΟΞ­ΟΟ ΟΟΞΏΞ½ΞΉΞΊΟ Ξ΄ΞΉΞ¬ΟΟΞ·ΞΌΞ± Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΟΞ±ΞΉ Ξ· Ξ΅Ξ―ΟΟΟΞ±ΞΎΞ· ΟΟΞΏΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ�Ο Ξ±ΟΟ ΟΞ·Ξ½ ΟΟΞ»Ξ�ΟΟΞΉΞ± Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ·.Β \\nΞΞ½ Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ΅Ξ― ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ³ΞΉΞ± ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο, Ξ· ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΞΎΞ¬Ξ½Ξ΅ΟΞ±ΞΉ ΞΊΞ±ΟΞ¬ 12 ΞΌΞ�Ξ½Ξ΅Ο Ξ� 14 ΞΌΞ­ΟΞ΅Ο Ξ±ΟΟ ΟΞ·Ξ½ Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ� ΟΞΏΟ. Ξ Ξ΄Ξ�Ξ»ΟΟΞ· ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ±Β Ξ³Ξ―Ξ½Ξ΅ΞΉ Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ Ξ� ΟΞ΅ Ξ¬Ξ»Ξ»ΞΏ ΟΟΞ±ΞΈΞ΅ΟΟ ΞΌΞ­ΟΞΏ, Ξ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΟΞ­ΟΞ΅ΞΉ ΟΞΏ Ξ²Ξ¬ΟΞΏΟ ΟΞ·Ο Ξ±ΟΟΞ΄Ξ΅ΞΉΞΎΞ·Ο ΟΟΞΉ Ξ¬ΟΞΊΞ·ΟΞ΅ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΞ·Ο ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·ΟΒ Ξ ΟΟΞ»Ξ·ΟΞ�Ο ΞΏΟΞ΅Ξ―Ξ»Ξ΅ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΞΉ ΟΞ± ΟΟΞ�ΞΌΞ±ΟΞ± Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ Ξ·ΞΌΞ­ΟΞ± ΞΊΞ±ΟΞ¬ ΟΞ·Ξ½ ΞΏΟΞΏΞ―Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ·ΞΊΞ΅ Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±ΟΟΟΞ±ΟΞ· ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΞ΅ΞΉ Ξ±ΟΟ ΟΞ·Ξ½ ΟΟΞΌΞ²Ξ±ΟΞ·. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ±ΞΈΞ­ΟΞ·ΟΞ·Ο Ξ±ΟΟΞ�Ο ΟΞ·Ο ΟΟΞΏΟΟΞ­ΟΟΞ·Ο Ξ� ΞΌΞ· Ξ±Ξ½Ξ±Ξ³Ξ½ΟΟΞΉΟΞ·Ο ΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± DVD Ξ±ΟΟ Ξ­Ξ½Ξ±Ξ½ ΟΟΞ»Ξ·ΟΞ� ΟΞΏΟ Ξ�ΟΞΈΞ΅ ΟΟΞΏ ΟΟΞ―ΟΞΉ ΞΌΞΏΟ. ΞΞ΅ΟΞ¬ Ξ΅Ξ―Ξ΄Ξ± ΟΟΞΉ Ξ΄Ξ΅Ξ½ Ξ­ΟΞΏΟΞ½ ΞΊΞ±ΞΌΞ―Ξ± ΟΟΞ­ΟΞ· ΞΌΞ΅ Ξ±ΟΟΟ ΟΞΏΟ ΞΌΞΏΟ ΟΞ΅ΟΞΉΞ­Ξ³ΟΞ±ΟΞ΅. ΞΟΞΏΟΟ Ξ½Ξ± ΟΞ± Ξ΅ΟΞΉΟΟΟΞ­ΟΟ ;\\nΞ€ΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ΄Ξ΅Ξ½ ΞΉΟΟΟΞ΅ΞΉ ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ±Ο ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½ΟΞ½ Ξ·ΟΞ·ΟΞΉΞΊΟΞ½ Ξ΅Ξ³Ξ³ΟΞ±ΟΟΞ½ Ξ� ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½ΟΞ½ Ξ΅Ξ³Ξ³ΟΞ±ΟΟΞ½ Ξ²Ξ―Ξ½ΟΞ΅ΞΏ Ξ� ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½ΞΏΟ Ξ»ΞΏΞ³ΞΉΟΞΌΞΉΞΊΞΏΟ Ξ³ΞΉΞ± ΟΟΞΏΞ»ΞΏΞ³ΞΉΟΟΞ­Ο, ΟΞΏΟ Ξ±ΟΞΏΟΟΟΞ±Ξ³Ξ―ΟΟΞ·ΞΊΞ±Ξ½ ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·.\\n\"],[9],[7,\"p\",true],[8],[0,\"4.Β Β Β Ξ ΞΏΞΉΞ± Ξ¬Ξ»Ξ»Ξ± ΟΟΞΏΟΟΞ½ΟΞ± Ξ΅ΞΎΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ;\\nΞΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ΅ΞΎΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ, ΞΌΞ΅ΟΞ±ΞΎΟ Ξ¬Ξ»Ξ»ΟΞ½, ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞΏΟ ΞΊΞ±ΟΞ±ΟΞΊΞ΅ΟΞ¬ΞΆΞΏΞ½ΟΞ±ΞΉ ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΉΟ ΟΟΞΏΞ΄ΞΉΞ±Ξ³ΟΞ±ΟΞ­Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞ± ΞΏΟΞΏΞ―Ξ± ΞΌΟΞΏΟΞΏΟΞ½ Ξ½Ξ± Ξ±Ξ»Ξ»ΞΏΞΉΟΞΈΞΏΟΞ½ Ξ� Ξ»Ξ�Ξ³ΞΏΟΞ½ ΟΟΞ½ΟΞΏΞΌΞ±, ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞ± ΞΏΟΞΏΞ―Ξ± Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΊΞ±ΟΞ¬Ξ»Ξ»Ξ·Ξ»Ξ± ΟΟΞΏΟ Ξ΅ΟΞΉΟΟΟΞΏΟΞ� Ξ³ΞΉΞ± Ξ»ΟΞ³ΞΏΟΟ ΟΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΟΞ·Ο ΟΞ³Ξ΅Ξ―Ξ±Ο Ξ� Ξ³ΞΉΞ± Ξ»ΟΞ³ΞΏΟΟ ΟΞ³ΞΉΞ΅ΞΉΞ½Ξ�Ο, Ξ΅ΟΟΟΞΏΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΟΞ±Ξ³ΞΉΟΞΌΞ­Ξ½Ξ± ΞΊΞ±ΞΉ Ξ­ΟΞΏΟΞ½ Ξ±ΟΞΏΟΟΟΞ±Ξ³ΞΉΟΟΞ΅Ξ― ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·, ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΟΟΞΏΟΟΞ½ΟΞ± ΟΞ± ΞΏΟΞΏΞ―Ξ±, ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·, Ξ»ΟΞ³Ο ΟΞ·Ο ΟΟΟΞ·Ο ΟΞΏΟΟ, Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±Ξ½Ξ±ΟΟΟΟΞ±ΟΟΞ± Ξ±Ξ½Ξ±ΞΌΞ΅ΞΌΞ΅ΞΉΞ³ΞΌΞ­Ξ½Ξ± ΞΌΞ΅ Ξ¬Ξ»Ξ»Ξ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ±. ΞΟΞ―ΟΞ·Ο, Ξ΅ΞΎΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ· ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ± ΟΞ·ΟΞΉΞ±ΞΊΞΏΟ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΞΏΟ ΞΌΞ· ΟΞ±ΟΞ΅ΟΟΞΌΞ΅Ξ½ΞΏΟ ΟΞ¬Ξ½Ο ΟΞ΅ ΟΞ»ΞΉΞΊΟ ΞΌΞ­ΟΞΏ, Ξ΅Ξ¬Ξ½ Ξ· Ξ΅ΞΊΟΞ­Ξ»Ξ΅ΟΞ· ΞΎΞ΅ΞΊΞ―Ξ½Ξ·ΟΞ΅ ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ΅Ξ½Ξ· ΟΞ·ΟΞ� ΟΟΞ³ΞΊΞ±ΟΞ¬ΞΈΞ΅ΟΞ· ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΞΊΞ±ΞΉ ΟΞ·Ξ½ Ξ΅ΟΞΉΞ²Ξ΅Ξ²Ξ±Ξ―ΟΟΞ· Ξ΅ΞΊ ΞΌΞ­ΟΞΏΟΟ ΟΞΏΟ ΟΟΞΉ ΟΞ¬Ξ½Ξ΅ΞΉ Ξ­ΟΟΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ¬ ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο.Β \\nΞ Ξ΅ΟΞ±ΞΉΟΞ­ΟΟ, Ξ±ΟΟ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ΅ΞΎΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ· ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ± ΟΟΞΏΟΞ―ΞΌΟΞ½, ΟΞΏΟΟΞ½ Ξ� Ξ¬Ξ»Ξ»ΟΞ½ Ξ±Ξ³Ξ±ΞΈΟΞ½ ΟΞΏΟ ΟΟΞΏΞΏΟΞ―ΞΆΞΏΞ½ΟΞ±ΞΉ Ξ³ΞΉΞ± ΟΟΞ­ΟΞΏΟΟΞ± ΞΊΞ±ΟΞ±Ξ½Ξ¬Ξ»ΟΟΞ· ΟΟΞΏ ΟΞ»Ξ±Ξ―ΟΞΉΞΏ ΟΞΏΟ Ξ½ΞΏΞΉΞΊΞΏΞΊΟΟΞΉΞΏΟ ΞΊΞ±ΞΉ ΟΞ± ΞΏΟΞΏΞ―Ξ± ΟΞ±ΟΞ±Ξ΄Ξ―Ξ΄ΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΟΞ΅ ΟΟΟΞ½Ξ� ΞΊΞ±ΞΉ ΟΞ±ΞΊΟΞΉΞΊΞ� Ξ²Ξ¬ΟΞ· ΟΟΞΏ ΟΟΞ―ΟΞΉ, ΟΞ·Ξ½ ΞΊΞ±ΟΞΏΞΉΞΊΞ―Ξ± Ξ� ΟΞΏΞ½ ΟΟΟΞΏ Ξ΅ΟΞ³Ξ±ΟΞ―Ξ±Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΞΏΞΉ Ξ΅ΟΞ·ΞΌΞ΅ΟΞ―Ξ΄Ξ΅Ο ΞΊΞ±ΞΉ ΟΞ± ΟΞ΅ΟΞΉΞΏΞ΄ΞΉΞΊΞ¬, Ξ΅ΞΊΟΟΟ ΞΊΞΉ Ξ±Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ ΟΟΞ½Ξ΄ΟΞΏΞΌΞ·ΟΞΉΞΊΞ� ΟΟΞΌΞ²Ξ±ΟΞ· Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ¬ ΟΞΏΟΟ.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"5.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ»Ξ΅ΞΎΞΉΞΊΟ Ξ±ΞΎΞ―Ξ±Ο 80 Ξ΅ΟΟΟ Ξ±ΟΟ Ξ­Ξ½Ξ±Ξ½ ΟΟΞ»Ξ·ΟΞ� ΟΞΏΟ Ξ�ΟΞΈΞ΅ Ξ³ΞΉΞ± Ξ΄ΟΞΏ ΞΌΞ­ΟΞ΅Ο ΟΟΞΏΞ½ ΟΟΞΏΞ±ΟΞ»ΞΉΞΏ ΟΟΟΞΏ ΟΞΏΟ ΟΞ±Ξ½Ξ΅ΟΞΉΟΟΞ·ΞΌΞ―ΞΏΟ ΞΌΞΏΟ. ΞΟΞΏΟΟ Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΟ ;\\nΞΞ±ΞΉ. ΞΟΟΟΞΏΞ½ ΞΏ ΟΟΟΞΏΟ Ξ±ΟΟΟΟ Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ· ΟΟΞ½Ξ�ΞΈΞ·Ο Ξ²Ξ¬ΟΞ· ΟΞΏΟ ΟΟΞ»Ξ·ΟΞ�, ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ±ΞΉ ΟΟΞΌΞ²Ξ±ΟΞ· Ξ΅ΞΊΟΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ ΞΊΞ±ΞΉ ΞΉΟΟΟΞ΅ΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ� ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ.\\n\"],[9],[7,\"p\",true],[8],[0,\"6.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΞΌΞΉΞ± Ξ΅Ξ³ΞΊΟΞΊΞ»ΞΏΟΞ±Ξ―Ξ΄Ξ΅ΞΉΞ± Ξ΅ΞΊΟΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ ΞΊΞ±ΞΉ Ξ¬Ξ»Ξ»Ξ±ΞΎΞ± Ξ³Ξ½ΟΞΌΞ·. Ξ ΟΟΞ»Ξ·ΟΞ�Ο ΞΌΞΏΟ Ξ­Ξ΄ΟΟΞ΅ ΞΌΞΉΞ± ΞΊΞ±ΟΟΞ­Ξ»Ξ± ΟΟΞ½Ξ΄ΟΞΏΞΌΞ·ΟΞ� ΟΞΏΟ Ξ»Ξ­Ξ΅ΞΉ ΟΟΞΉ Ξ΅ΟΞΉΟΟΟΞΏΟΞ­Ο Ξ΄Ξ΅ Ξ³Ξ―Ξ½ΞΏΞ½ΟΞ±ΞΉ Ξ΄Ξ΅ΞΊΟΞ­Ο. Ξ€ΟΟΞ± ΞΌΞΏΟ ΞΆΞ·ΟΞ¬Ξ΅ΞΉ 260 Ξ΅ΟΟΟ Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅ΞΎΟΟΞ»Ξ·ΟΞ· ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ. Ξ€ΞΉ Ξ½Ξ± ΞΊΞ¬Ξ½Ο ;\\nΞΞ¬Ξ½ ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο Ξ΄Ξ΅Ξ½ ΟΞ·ΟΞ�ΟΞ΅ΞΉ ΟΞΉΟ ΟΟΞΏΟΟΞ΅ΟΟΞ΅ΞΉΟ Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΟΞΏΟ ΟΟΞΏΞ²Ξ»Ξ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΞΏ Ξ.2251/94, Ξ· ΟΟΞΌΞ²Ξ±ΟΞ· Ξ΅ΞΊΟΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ¬ΞΊΟΟΞ· ΟΟΞ­Ο ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�. Ξ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΟΞ±ΟΞ­ΟΞ΅ΞΉ ΟΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, ΞΌΞ΅ΟΞ±ΞΎΟ Ξ¬Ξ»Ξ»ΟΞ½, ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΞ±ΟΟΟΟΞ·ΟΞ¬ ΟΞΏΟ, ΟΞ· Ξ³Ξ΅ΟΞ³ΟΞ±ΟΞΉΞΊΞ� Ξ΄ΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΞΊΞ±ΞΉ ΟΞΏ ΟΞ·Ξ»Ξ­ΟΟΞ½Ο ΟΞΏΟ, ΟΞ± ΞΊΟΟΞΉΞ± ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΞ¬ ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ ΟΞΏΟ Ξ±Ξ³ΟΟΞ±ΟΞ΅, ΟΞ·Ξ½ ΟΞΉΞΌΞ� ΟΞΏΟΟ, ΟΞΉΟ Ξ΄ΞΉΞ΅ΟΞΈΞ΅ΟΞ�ΟΞ΅ΞΉΟ ΟΞ»Ξ·ΟΟΞΌΞ�Ο ΞΊΞ±ΞΉ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·Ο ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΟΟΞ±ΟΞΎΞ· ΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο, ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΟΞΉΟ ΟΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΞΉΟ, ΟΞ·Ξ½ ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ± ΞΊΞ±ΞΉ ΟΞΉΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ΅Ο Ξ¬ΟΞΊΞ·ΟΞ�Ο ΟΞΏΟ. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ±ΞΈΞ­ΟΞ·ΟΞ·Ο Ξ±ΟΟΞ�Ο ΟΞ·Ο ΟΟΞΏΟΟΞ­ΟΟΞ·Ο Ξ� ΞΌΞ· Ξ±Ξ½Ξ±Ξ³Ξ½ΟΟΞΉΟΞ·Ο ΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"7.Β Β Β ΞΟΟ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ―Ξ»Ξ΅ΞΉ Ξ­ΟΞΉΟΞ»ΞΏ Ξ±ΟΟ Ξ­Ξ½Ξ± ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ± ΞΊΞ±ΞΉ ΟΞΏ Ξ­ΟΟ Ξ΅ΞΎΞΏΟΞ»Ξ�ΟΞ΅ΞΉ. Ξ Ξ±ΟΟΞ»ΞΏ ΟΞΏΟ Ξ­ΟΞΏΟΞ½ ΟΞ΅ΟΞ¬ΟΞ΅ΞΉ 45 ΞΌΞ­ΟΞ΅Ο Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±, Ξ±ΟΟΞ� Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ ΟΞ±ΟΞ±Ξ΄ΞΏΞΈΞ΅Ξ― ΞΏΟΟΞ΅ Ξ­ΟΟ ΞΊΞ¬ΟΞΏΞΉΞ± Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· Ξ³ΞΉΞ± ΟΞΏ ΟΟΟΞ΅ ΞΈΞ± ΟΞ±ΟΞ±Ξ΄ΞΏΞΈΞ΅Ξ―. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο ;\\nΒ ΞΞ½ Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ ΟΟΞΌΟΟΞ½Ξ·ΞΈΞ΅Ξ― Ξ΄ΞΉΞ±ΟΞΏΟΞ΅ΟΞΉΞΊΞ¬, ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο ΟΞ±ΟΞ±Ξ΄Ξ―Ξ΄Ξ΅ΞΉ ΟΞ± Ξ±Ξ³Ξ±ΞΈΞ¬ Ξ΅Ξ½ΟΟΟ 30 Ξ·ΞΌΞ΅ΟΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ· ΟΟΞ½Ξ±ΟΞ· ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο. ΞΞ½ Ξ΄Ξ΅Ξ½ ΟΞ± ΟΞ±ΟΞ±Ξ΄ΟΟΞ΅ΞΉ Ξ΅ΞΌΟΟΟΞΈΞ΅ΟΞΌΞ±, ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞΏΟ ΞΆΞ·ΟΞ�ΟΞ΅ΞΉ Ξ½Ξ± ΟΟΞ±Ξ³ΞΌΞ±ΟΞΏΟΞΏΞΉΞ�ΟΞ΅ΞΉ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ· Ξ΅Ξ½ΟΟΟ Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ±Ο Ξ±Ξ½Ξ¬Ξ»ΞΏΞ³Ξ·Ο ΟΟΞ½ ΟΞ΅ΟΞΉΟΟΞ¬ΟΞ΅ΟΞ½. ΞΞ½ ΞΊΞ±ΞΉ Ξ±ΟΟΞ� Ξ΄Ξ΅Ξ½ ΟΞ·ΟΞ·ΞΈΞ΅Ξ―, ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ―Ξ»Ξ΅ΞΉ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· ΞΊΞ±ΞΉ ΞΏ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο ΞΏΟΞ΅Ξ―Ξ»Ξ΅ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΞΉ, ΟΟΟΞ―Ο Ξ±Ξ΄ΞΉΞΊΞ±ΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ· ΞΊΞ±ΞΈΟΟΟΞ­ΟΞ·ΟΞ·, ΟΞ»Ξ± ΟΞ± ΟΟΞ�ΞΌΞ±ΟΞ± ΟΞΏΟ Ξ΅Ξ―ΟΞ±Ξ½ ΟΞ»Ξ·ΟΟΞΈΞ΅Ξ― Ξ²Ξ¬ΟΞ΅ΞΉ ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"8.Β Β Β Ξ Ξ±ΟΞ�Ξ³Ξ³Ξ΅ΞΉΞ»Ξ± ΞΌΞ­ΟΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ ΞΌΞ―Ξ± ΟΟΟΞΊΞ΅ΟΞ� ΟΞ΅ ΞΏΟΞΉΟΞΌΞ­Ξ½Ξ· ΟΞΉΞΌΞ�. ΞΞ΅ ΞΌΞΏΟ ΟΞ·Ξ½ Ξ­ΟΟΞ΅ΞΉΞ»Ξ±Ξ½ Ξ³ΞΉΞ±ΟΞ―, ΟΟΟΟ ΞΌΞΏΟ Ξ΅Ξ―ΟΞ±Ξ½, Ξ­Ξ³ΞΉΞ½Ξ΅ Ξ»Ξ¬ΞΈΞΏΟ ΟΟΞ·Ξ½ ΟΞΉΞΌΞ�. ΞΞ―Ξ½Ξ±ΞΉ Ξ½ΟΞΌΞΉΞΌΞΏ ;\\nΞ Ξ±Ξ½Ξ±Ξ³ΟΞ±ΟΞ� Ξ»Ξ±Ξ½ΞΈΞ±ΟΞΌΞ­Ξ½Ξ·Ο ΟΞΉΞΌΞ�Ο ΞΊΞ±ΞΉ Ξ³Ξ΅Ξ½ΞΉΞΊΟΟΞ΅ΟΞ± ΞΊΞ¬ΞΈΞ΅ ΟΞ±ΟΞΏΟΞ� Ξ΅ΟΟΞ±Ξ»ΞΌΞ­Ξ½ΟΞ½ Ξ� Ξ±Ξ½Ξ±ΞΊΟΞΉΞ²ΟΞ½ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞΉΟΞ½ ΟΞΏΟ Ξ΅Ξ½Ξ΄Ξ­ΟΞ΅ΟΞ±ΞΉ Ξ½Ξ± ΟΞ±ΟΞ±ΟΞ»Ξ±Ξ½Ξ�ΟΞ΅ΞΉ ΟΞΏ ΞΌΞ­ΟΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΞΊΞ±ΞΉ Ξ½Ξ± ΟΞΏΞ½ ΞΏΞ΄Ξ·Ξ³Ξ�ΟΞ΅ΞΉ Ξ½Ξ± Ξ»Ξ¬Ξ²Ξ΅ΞΉ Ξ±ΟΟΟΞ±ΟΞ· ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ�Ο ΟΞ·Ξ½ ΞΏΟΞΏΞ―Ξ±, Ξ΄ΞΉΞ±ΟΞΏΟΞ΅ΟΞΉΞΊΞ¬, Ξ΄Ξ΅ ΞΈΞ± Ξ΅Ξ»Ξ¬ΞΌΞ²Ξ±Ξ½Ξ΅, ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ±ΞΉ ΟΞ±ΟΞ±ΟΞ»Ξ±Ξ½Ξ·ΟΞΉΞΊΞ� Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� ΟΟΞ±ΞΊΟΞΉΞΊΞ� ΞΊΞ±ΞΉ Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ.2251/94. ΞΞΉΞ± ΟΞ·Ξ½ Ξ΅ΞΎΞ­ΟΞ±ΟΞ· ΟΟΞ΅ΟΞΉΞΊΟΞ½ ΞΈΞ΅ΞΌΞ¬ΟΟΞ½, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"h5\",true],[8],[0,\"Ξ£ΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ ΞΟΞΌΞ½Ξ±ΟΟΞ�ΟΞΉΞ±-ΞΞ­Ξ½ΟΟΞ± Ξ±ΞΉΟΞΈΞ·ΟΞΉΞΊΞ�Ο\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΞΌΞΉΞ± ΟΟΞ½Ξ΄ΟΞΏΞΌΞ� Ξ³ΞΉΞ± Ξ½Ξ± ΟΞ·Ξ³Ξ±Ξ―Ξ½Ο ΟΟΞΏ Ξ³ΟΞΌΞ½Ξ±ΟΟΞ�ΟΞΉΞΏ. Ξ€ΞΏ ΞΎΞ±Ξ½Ξ±ΟΞΊΞ­ΟΟΞ·ΞΊΞ± ΟΞ·Ξ½ Ξ΅ΟΟΞΌΞ΅Ξ½Ξ· Ξ·ΞΌΞ­ΟΞ±. ΞΞ΅Ξ½ Ξ­ΟΟ ΟΟΞ±Ξ³ΞΌΞ±ΟΞΉΞΊΞ¬ ΟΞΏ ΟΟΟΞ½ΞΏ Ξ³ΞΉΞ± ΞΊΞ¬ΟΞΉ ΟΞ­ΟΞΏΞΉΞΏ ΞΊΞ±ΞΉ ΞΌΞ¬Ξ»Ξ»ΞΏΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΊΞ±ΞΉ Ξ»Ξ―Ξ³ΞΏ Ξ±ΞΊΟΞΉΞ²Ο. ΞΟΞΏΟΟ Ξ½Ξ± Ξ±ΞΊΟΟΟΟΟ ΟΞ· ΟΟΞ½Ξ΄ΟΞΏΞΌΞ� ΞΌΞΏΟ;\\nΞ Ξ±ΞΊΟΟΟΟΞ· ΟΞ·Ο ΟΟΞ½Ξ΄ΟΞΏΞΌΞ�Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ³Ξ―Ξ½Ξ΅ΞΉ ΞΏΟΞΏΟΞ΅Ξ΄Ξ�ΟΞΏΟΞ΅ ΞΊΞ±ΞΉ Ξ³ΞΉΞ± ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅ Ξ»ΟΞ³ΞΏ ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞΏΞ²ΞΏΞ»Ξ� ΟΟΞ΅ΟΞΉΞΊΞΏΟ Ξ΅Ξ½ΟΟΟΞΏΟ Ξ΄Ξ�Ξ»ΟΟΞ·Ο ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΟΟΞ·Ξ½ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ±. ΞΞ½ Ξ· ΟΟΞΏΞ²ΞΏΞ»Ξ� ΟΞ·Ο ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο Ξ³Ξ―Ξ½Ξ΅ΞΉ ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ­Ξ»Ξ΅ΟΟΞ· 30 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΟΞΏΞ³ΟΞ±ΟΞ� ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο, ΞΏ Ξ­ΞΌΟΞΏΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΟΞ±ΟΞ±ΞΊΟΞ±ΟΞ�ΟΞ΅ΞΉ ΟΞΏΟΟ ΟΞΏΟ Ξ±Ξ½ΟΞΉΟΟΞΏΞΉΟΞ΅Ξ― ΟΟΞΏ 2,5% ΟΞΏΟ ΟΞΏΟΞΏΟ ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο, Ξ±ΟΞ±ΞΉΟΟΞ½ΟΞ±Ο ΟΞΏ ΟΞΏΟΟ ΟΞΏΟ Ξ±Ξ½ΟΞΉΟΟΞΏΞΉΟΞ΅Ξ― ΟΟΞΉΟ Ξ�Ξ΄Ξ· Ξ΅ΞΊΟΞ΅Ξ»Ξ΅ΟΞΈΞ΅Ξ―ΟΞ΅Ο ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο. Ξ ΟΞ±ΟΞ±ΞΊΟΞ¬ΟΞ·ΟΞ· ΟΞΏΟ 2,5% Ξ΄Ξ΅Ξ½ ΞΉΟΟΟΞ΅ΞΉ ΟΟΞ·Ξ½ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞ·Ο ΟΟΞΏΞ²ΞΏΞ»Ξ�Ο ΟΞ·Ο Ξ΄Ξ�Ξ»ΟΟΞ·Ο ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΟΟΞΉΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ­Ξ»Ξ΅ΟΟΞ· 30 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΟΞΏΞ³ΟΞ±ΟΞ� ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο (Y.A. Z1-1262/29.10.2007, Ξ¦ΞΞ ΞΞ 2122).\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΞΌΞΉΞ± ΟΟΞ½Ξ΄ΟΞΏΞΌΞ� Ξ³ΞΉΞ± ΟΟΞ½Ξ΅Ξ΄ΟΞ―Ξ΅Ο ΟΞ΅ ΞΉΞ½ΟΟΞΉΟΞΏΟΟΞΏ Ξ±Ξ΄ΟΞ½Ξ±ΟΞ―ΟΞΌΞ±ΟΞΏΟ. Ξ€ΞΏ ΞΎΞ±Ξ½Ξ±ΟΞΊΞ­ΟΟΞ·ΞΊΞ± ΟΞ·Ξ½ Ξ΅ΟΟΞΌΞ΅Ξ½Ξ· Ξ·ΞΌΞ­ΟΞ±. ΞΞ΅Ξ½ Ξ­ΟΟ ΟΟΞ±Ξ³ΞΌΞ±ΟΞΉΞΊΞ� Ξ±Ξ½Ξ¬Ξ³ΞΊΞ· Ξ³ΞΉΞ± ΞΊΞ¬ΟΞΉ ΟΞ­ΟΞΏΞΉΞΏ ΞΊΞ± ΞΌΞ¬Ξ»Ξ»ΞΏΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΊΞ±ΞΉ Ξ»Ξ―Ξ³ΞΏ Ξ±ΞΊΟΞΉΞ²Ο. ΞΟΞΏΟΟ Ξ½Ξ± Ξ±ΞΊΟΟΟΟΟ ΟΞ· ΟΟΞ½Ξ΄ΟΞΏΞΌΞ� ΞΌΞΏΟ;\\nΞ Ξ±ΞΊΟΟΟΟΞ· ΟΞ·Ο ΟΟΞ½Ξ΄ΟΞΏΞΌΞ�Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ³Ξ―Ξ½Ξ΅ΞΉ ΞΏΟΞΏΟΞ΅Ξ΄Ξ�ΟΞΏΟΞ΅ ΞΊΞ±ΞΉ Ξ³ΞΉΞ± ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅ Ξ»ΟΞ³ΞΏ ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞΏΞ²ΞΏΞ»Ξ� ΟΟΞ΅ΟΞΉΞΊΞΏΟ Ξ΅Ξ½ΟΟΟΞΏΟ Ξ΄Ξ�Ξ»ΟΟΞ·Ο ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΟΟΞ·Ξ½ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ±. ΞΞ½ Ξ· ΟΟΞΏΞ²ΞΏΞ»Ξ� ΟΞ·Ο ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο Ξ³Ξ―Ξ½Ξ΅ΞΉ ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ­Ξ»Ξ΅ΟΟΞ· 30 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΟΞΏΞ³ΟΞ±ΟΞ� ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο, ΞΏ Ξ­ΞΌΟΞΏΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΟΞ±ΟΞ±ΞΊΟΞ±ΟΞ�ΟΞ΅ΞΉ ΟΞΏΟΟ ΟΞΏΟ Ξ±Ξ½ΟΞΉΟΟΞΏΞΉΟΞ΅Ξ― ΟΟΞΏ 2,5% ΟΞΏΟ ΟΞΏΟΞΏΟ ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο, ΟΞ­ΟΞ±Ξ½ ΟΞΏΟ ΟΞΏΟΞΏΟ ΟΞΏΟ Ξ±Ξ½ΟΞΉΟΟΞΏΞΉΟΞ΅Ξ― ΟΟΞΉΟ Ξ�Ξ΄Ξ· Ξ΅ΞΊΟΞ΅Ξ»Ξ΅ΟΞΈΞ΅Ξ―ΟΞ΅Ο ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο. Ξ ΟΞ±ΟΞ±ΞΊΟΞ¬ΟΞ·ΟΞ· ΟΞΏΟ 2,5% Ξ΄Ξ΅Ξ½ ΞΉΟΟΟΞ΅ΞΉ ΟΟΞ·Ξ½ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞ·Ο ΟΟΞΏΞ²ΞΏΞ»Ξ�Ο ΟΞ·Ο Ξ΄Ξ�Ξ»ΟΟΞ·Ο ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΟΟΞΉΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ­Ξ»Ξ΅ΟΟΞ· 30 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΟΞΏΞ³ΟΞ±ΟΞ� ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο (Y.A. Z1-1262/2007, Ξ¦ΞΞ ΞΞ 2122).\\n\"],[9],[7,\"h5\",true],[8],[0,\"ΞΞ³Ξ³ΟΞ�ΟΞ΅ΞΉΟ ΞΊΞ±ΞΉ Ξ΅ΟΞΉΟΟΟΞΏΟΞ­Ο ΟΟΞΏΟΟΞ½ΟΟΞ½ (ΞΞ³Ξ³ΟΞ�ΟΞ΅ΞΉΟ, Service, ΞΏΞ΄Ξ·Ξ³Ξ―Ξ΅Ο ΟΟΞ�ΟΞ΅ΟΟ, ΞΊΞ»Ο)\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΟΞΌΞΉΞΌΞ· Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·\\n\"],[9],[7,\"p\",true],[8],[0,\"1.1.Β Β Β Ξ ΞΏΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ· Ξ΄ΞΉΞ¬ΟΞΊΞ΅ΞΉΞ± ΟΞ·Ο Ξ½ΟΞΌΞΉΞΌΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο Ξ³ΞΉΞ± ΞΊΞ±ΞΉΞ½ΞΏΟΟΞ³ΞΉΞ± ΞΊΞ±ΞΉ ΞΌΞ΅ΟΞ±ΟΞ΅ΞΉΟΞΉΟΞΌΞ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ΟΞ±;\\nΞ©Ο Ξ½ΟΞΌΞΉΞΌΞ· Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· ΞΏΟΞ―ΞΆΞ΅ΟΞ±ΞΉ Ξ· Ξ΅ΟΞΈΟΞ½Ξ· ΟΞΏΟ Ξ­ΟΞ΅ΞΉ ΞΏ ΟΟΞ»Ξ·ΟΞ�Ο Ξ±Ξ½ ΟΞΏ ΟΟΞΏΟΟΞ½, ΞΊΞ±ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ� ΟΞΏΟ ΟΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ Ξ� Ξ΄Ξ΅Ξ½ Ξ±Ξ½ΟΞ±ΟΞΏΞΊΟΞ―Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΞ± ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΞ¬ ΟΞΏΟ, ΟΟΟΟ Ξ±ΟΟΞ¬ ΟΞ΅ΟΞΉΞ³ΟΞ¬ΟΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�. Ξ Ξ΄ΞΉΞ¬ΟΞΊΞ΅ΞΉΞ± ΟΞ·Ο Ξ½ΟΞΌΞΉΞΌΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο Ξ³ΞΉΞ± ΞΊΞ±ΞΉΞ½ΞΏΟΟΞ³ΞΉΞ± ΞΊΞ±ΞΉ ΞΌΞ΅ΟΞ±ΟΞ΅ΞΉΟΞΉΟΞΌΞ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ΟΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄ΟΞΏ ΟΟΟΞ½ΞΉΞ±. Ξ Ξ±ΟΟΞ»Ξ± Ξ±ΟΟΞ¬, Ξ΅ΞΉΞ΄ΞΉΞΊΞ¬ Ξ³ΞΉΞ± ΟΞ± ΞΌΞ΅ΟΞ±ΟΞ΅ΞΉΟΞΉΟΞΌΞ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ΟΞ±, ΞΏ ΟΟΞ»Ξ·ΟΞ�Ο ΞΊΞ±ΞΉ ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο, ΞΌΟΞΏΟΞΏΟΞ½ Ξ½Ξ± ΟΟΞΌΟΟΞ½Ξ�ΟΞΏΟΞ½ ΟΞ΅ ΞΌΞΉΞΊΟΟΟΞ΅ΟΞ· ΟΞ΅ΟΞ―ΞΏΞ΄ΞΏ, Ξ±Ξ»Ξ»Ξ¬ ΟΟΞΉ ΞΌΞΉΞΊΟΟΟΞ΅ΟΞ· ΟΞΏΟ Ξ΅Ξ½ΟΟ Ξ­ΟΞΏΟΟ. ΞΞ±ΟΞ¬ ΟΞ· Ξ΄ΞΉΞ¬ΟΞΊΞ΅ΞΉΞ± ΟΞ·Ο Ξ½ΟΞΌΞΉΞΌΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο, ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ― ΟΟΞ± Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ¬ ΞΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞ±, ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ΄ΞΉΞ±ΟΟΞ½Ξ―Ξ±Ο ΟΞΏΟ ΞΌΞ΅ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ� Ξ� ΟΞ΅ ΟΞΏΟΞ΅Ξ―Ο Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ�Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"1.2.Β Β Β ΞΞ¬Ξ½ ΟΞΏ ΟΟΞΏΟΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ ΟΞΏΞΉΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΞ΅ΟΞΈΟΞ½ΞΏΟ Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±ΟΞΏΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ·;\\nΞΞΉΞ± ΟΞ·Ξ½ Ξ΅ΟΞ―Ξ»ΟΟΞ· ΟΞΏΟ ΞΈΞ­ΞΌΞ±ΟΞΏΟ ΟΟΞ΅ΟΞΈΟΞ½ΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΏ ΟΟΞ»Ξ·ΟΞ�Ο, ΞΏ ΞΏΟΞΏΞ―ΞΏΟ ΟΞ­ΟΞ΅ΞΉ ΟΞ·Ξ½ Ξ΅ΟΞΈΟΞ½Ξ· Ξ±Ξ½ ΟΞΏ ΟΟΞΏΟΟΞ½, ΞΊΞ±ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ� ΟΞΏΟ, Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ Ξ� Ξ΄Ξ΅Ξ½ Ξ±Ξ½ΟΞ±ΟΞΏΞΊΟΞ―Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΞ± ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΞ¬ ΟΞΏΟ. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞ±ΞΊΞ�Ο ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ�Ο ΞΌΞ­ΟΟ ΟΞ»Ξ±ΟΟΟΟΞΌΞ±Ο, ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΟΞΌΟΟΞ½Ξ·ΞΈΞ΅Ξ― ΟΟΞΉ Ξ· ΟΞ»Ξ±ΟΟΟΟΞΌΞ± Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅Ξ― ΟΞΏΞ½ Ξ΅Ξ½Ξ΄ΞΉΞ¬ΞΌΞ΅ΟΞΏ ΞΊΞ±ΞΉ ΟΟΞΉ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ� ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ, Ξ³ΞΉ' Ξ±ΟΟΟ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ³Ξ―Ξ½Ξ΅ΞΉ Ξ­Ξ»Ξ΅Ξ³ΟΞΏΟ ΟΟΞΏΟΟ ΟΟΞΏΟΟ ΞΊΞ±ΞΉ ΟΞΉΟ ΟΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΞΉΟ ΟΞ·Ο ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ�Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"1.3.Β Β Β ΞΞ½ΟΟΟ ΟΞΏΞΉΞΏΟ ΟΟΞΏΞ½ΞΉΞΊΞΏΟ Ξ΄ΞΉΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ ΟΟΞ­ΟΞ΅ΞΉ ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΟΞ΅ΞΉ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�;\\nΞ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΟΞ΅ΞΉ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ� ΞΌΞ­ΟΞ± ΟΞ΅ Ξ΅ΟΞ»ΞΏΞ³ΞΏ ΟΟΞΏΞ½ΞΉΞΊΟ Ξ΄ΞΉΞ¬ΟΟΞ·ΞΌΞ±, ΟΞΏ ΞΏΟΞΏΞ―ΞΏ Ξ΄Ξ΅Ξ½ ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΞΎΞ΅ΟΞ΅ΟΞ½Ξ¬ ΟΞ± Ξ΄ΟΞΏ Ξ­ΟΞ· Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ· ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"1.4.Β Β Β Ξ ΞΏΞΉΞΏΟ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞΏΞ΄Ξ΅Ξ―ΞΎΞ΅ΞΉ ΟΞ·Ξ½ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟΟΞ·ΟΞ± ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ ΞΊΞ±ΞΉ Ξ΅Ξ½ΟΟΟ ΟΞΏΞΉΞΏΟ ΟΟΞΏΞ½ΞΉΞΊΞΏΟ Ξ΄ΞΉΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ;\\nΞΞ―Ξ½Ξ±ΞΉ Ξ΅ΟΞΈΟΞ½Ξ· ΟΞΏΟ ΟΟΞ»Ξ·ΟΞ� Ξ³ΞΉΞ± ΟΞΏΟΟ Ξ­ΞΎΞΉ ΟΟΟΟΞΏΟΟ ΞΌΞ�Ξ½Ξ΅Ο, ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ Ξ±Ξ³ΞΏΟΞ¬, Ξ½Ξ± Ξ±ΟΞΏΞ΄Ξ΅Ξ―ΞΎΞ΅ΞΉ ΟΟΞΉ Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ ΟΞΏ ΟΟΞΏΟΟΞ½. ΞΞ΅ΟΞ¬ ΟΞ·Ξ½ ΟΞ΅ΟΞ―ΞΏΞ΄ΞΏ Ξ±ΟΟΞ� ΞΊΞ±ΞΉ ΟΟ ΟΞΏ ΟΞ­Ξ»ΞΏΟ ΟΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο, Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΞΏΟΟΞ΅ΟΞΌΞ­Ξ½ΞΏΟ ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ½Ξ± Ξ±ΟΞΏΞ΄Ξ΅Ξ―ΞΎΞ΅ΞΉ ΟΞ·Ξ½ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟΟΞ·ΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"1.5.Β Β Β Ξ₯ΟΞ¬ΟΟΞ΅ΞΉ ΟΟΞ―ΟΞΏ ΞΌΞ­ΟΞΏΟΒ ΟΞΏΟ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΞ±ΟΞ¬ΟΟΞ΅ΞΉ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο Ξ±ΟΟΞ΄Ξ΅ΞΉΞΎΞ·Ο;\\nΞ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΌΞ΅ Ξ΄ΞΉΞΊΞ¬ ΟΞΏΟ Ξ­ΞΎΞΏΞ΄Ξ± ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΞ΅ΞΉ ΟΞ· Ξ³Ξ½ΟΞΌΞ· Ξ΅Ξ½ΟΟ Ξ΅ΞΌΟΞ΅ΞΉΟΞΏΞ³Ξ½ΟΞΌΞΏΞ½Ξ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"1.6.Β Β Β Ξ ΞΏΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, ΟΟ ΟΟΞΏΟ ΟΞ·Ξ½ Ξ΅ΟΞ±Ξ½ΟΟΞΈΟΟΞ· ΟΞ·Ο Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟΟΞ·ΟΞ±Ο, ΟΟΟΞ―Ο Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»Ξ΅ΞΉ ΟΟΞ�ΞΌΞ±ΟΞ±; Ξ₯ΟΞ¬ΟΟΞ΅ΞΉ ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ± Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅ΟΞ±Ξ½ΟΟΞΈΟΟΞ·;\\nΞ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ΅ΟΞΉΞ»Ξ­ΞΎΞ΅ΞΉ ΟΞ·Ξ½ Ξ΅ΟΞΉΞ΄ΞΉΟΟΞΈΟΟΞ· Ξ� ΟΞ·Ξ½ Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ· ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ -Ξ±ΟΞΊΞ΅Ξ― Ξ±ΟΟΞ� Ξ½Ξ± Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄ΟΞ½Ξ±ΟΞ� ΞΊΞ±ΞΉ Ξ½Ξ± ΞΌΞ·Ξ½ Ξ±ΟΞ±ΞΉΟΞ΅Ξ― Ξ΄ΟΟΞ±Ξ½Ξ¬Ξ»ΞΏΞ³Ξ΅Ο Ξ΄Ξ±ΟΞ¬Ξ½Ξ΅Ο- ΟΞ·Ξ½ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ· -Ξ΅ΟΟΟΞΏΞ½ ΟΞΏ Ξ΅Ξ»Ξ¬ΟΟΟΞΌΞ± Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±ΟΞ�ΞΌΞ±Ξ½ΟΞΏ- Ξ� ΟΞ·Ξ½ Ξ­ΞΊΟΟΟΟΞ· ΟΟΞ·Ξ½ ΟΞΉΞΌΞ� (ΞΌΞ΅Ξ―ΟΟΞ· ΟΞΉΞΌΞ�ΞΌΞ±ΟΞΏΟ). Ξ ΟΟΞ»Ξ·ΟΞ�Ο ΞΏΟΞ΅Ξ―Ξ»Ξ΅ΞΉ Ξ΅Ξ½ΟΟΟ Ξ΅ΟΞ»ΟΞ³ΞΏΟ ΟΟΞΏΞ½ΞΉΞΊΞΏΟ Ξ΄ΞΉΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ Ξ½Ξ± Ξ΅ΟΞΉΞ΄ΞΉΞΏΟΞΈΟΟΞ΅ΞΉ Ξ� Ξ½Ξ± Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ±ΟΟΞ�ΟΞ΅ΞΉ ΟΞΏ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ ΟΟΞΏΟΟΞ½. Ξ£Ξ·ΞΌΞ΅ΞΉΟΞ½Ξ΅ΟΞ±ΞΉ ΟΟΞΉ Ξ΄Ξ΅Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ ΞΉΞ΅ΟΞ¬ΟΟΞ·ΟΞ· ΟΟΞ½ ΟΞ±ΟΞ±ΟΞ¬Ξ½Ο Ξ»ΟΟΞ΅ΟΞ½.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"1.7.Β Β Β ΞΞ½ Ξ΄Ξ΅Ξ½ ΟΟΞ¬ΟΞΎΞ΅ΞΉ Ξ»ΟΟΞ· ΞΌΞ΅ΟΞ±ΞΎΟ ΟΟΞ»Ξ·ΟΞ� ΞΊΞ±ΞΉ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, ΟΞΏΞΉΞΏ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞΏ ΟΟΞΏΞ½ΞΉΞΊΟ ΟΞ΅ΟΞΉΞΈΟΟΞΉΞΏ Ξ³ΞΉΞ± Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ― ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΟΟΞ± Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ¬ ΞΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞ±;\\nΞ ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ± ΟΞ±ΟΞ±Ξ³ΟΞ±ΟΞ�Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ 2 ΟΟΟΞ½ΞΉΞ± Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ· ΟΟΞ½ Ξ΅ΞΌΟΞΏΟΞ΅ΟΞΌΞ¬ΟΟΞ½ Ξ΅ΞΊΟΟΟ Ξ±Ξ½ ΞΉΟΟΟΞ΅ΞΉ Ξ±Ξ½Ξ±ΟΟΞΏΞ»Ξ� ΟΞ·Ο Ξ½ΟΞΌΞΉΞΌΞ·Ο ΟΞ΅ΟΞΉΟΞ΄ΞΏΟ ΟΞ±ΟΞ±Ξ³ΟΞ±ΟΞ�Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"1.8.Β Β Β ΞΟΞΏΟΞ΅Ξ― ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ½Ξ± ΞΊΞΉΞ½Ξ·ΞΈΞ΅Ξ― Ξ½ΞΏΞΌΞΉΞΊΞ¬ Ξ΅Ξ½Ξ±Ξ½ΟΞ―ΞΏΞ½ ΟΞΏΟ Ξ΅ΞΉΟΞ±Ξ³ΟΞ³Ξ­Ξ± Ξ� ΞΏΟΞΏΞΉΞΏΟΞ΄Ξ�ΟΞΏΟΞ΅ Ξ΅Ξ½Ξ΄ΞΉΞ¬ΞΌΞ΅ΟΞΏΟ Ξ­ΟΟ ΞΊΞ±ΞΉ ΟΞΏΞ½ ΟΞ±ΟΞ±Ξ³ΟΞ³Ο;\\nΞΞ±ΞΉ, Ξ±Ξ»Ξ»Ξ¬ ΞΌΟΞ½ΞΏ Ξ΅Ξ¬Ξ½ ΞΏ Ξ΅ΞΉΟΞ±Ξ³ΟΞ³Ξ­Ξ±Ο Ξ� ΞΏ ΟΞ±ΟΞ±Ξ³ΟΞ³ΟΟ ΟΞ±ΟΞ­ΟΞ΅ΞΉ Ξ΄ΞΉΞΊΞ� ΟΞΏΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·.\\n\"],[9],[7,\"p\",true],[8],[0,\"1.9.Β Β Β Ξ₯ΟΞ¬ΟΟΞ΅ΞΉ Ξ¬Ξ»Ξ»Ξ· Ξ½ΟΞΌΞΉΞΌΞ· Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· ΟΞΏΟ Ξ½Ξ± ΞΉΟΟΟΞ΅ΞΉ Ξ²Ξ¬ΟΞ΅ΞΉ ΟΞΏΟ Ξ΅ΞΈΞ½ΞΉΞΊΞΏΟ Ξ΄ΞΉΞΊΞ±Ξ―ΞΏΟ;\\n\"],[9],[7,\"p\",true],[8],[0,\"Ξ₯ΟΞ¬ΟΟΞ΅ΞΉ Ξ· 5Ξ΅ΟΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· Ξ³ΞΉΞ± ΟΞ± Ξ±ΞΊΞ―Ξ½Ξ·ΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·\\n\"],[9],[7,\"p\",true],[8],[0,\"2.1.Β Β Β Ξ€ΞΉ Ξ΄ΞΉΞ±ΟΞΏΟΞ¬ Ξ­ΟΞ΅ΞΉ Ξ· Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ±ΟΟ ΟΞ· Ξ½ΟΞΌΞΉΞΌΞ· Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· ;\\nΞ©Ο Ξ½ΟΞΌΞΉΞΌΞ· Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· ΞΏΟΞ―ΞΆΞ΅ΟΞ±ΞΉ Ξ· Ξ΅ΟΞΈΟΞ½Ξ· ΟΞΏΟ Ξ­ΟΞ΅ΞΉ ΞΏ ΟΟΞ»Ξ·ΟΞ�Ο Ξ±Ξ½ ΟΞΏ ΟΟΞΏΟΟΞ½, ΞΊΞ±ΟΞ¬ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ� ΟΞΏΟ ΟΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ Ξ� Ξ΄Ξ΅Ξ½ Ξ±Ξ½ΟΞ±ΟΞΏΞΊΟΞ―Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΞ± ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΞ¬ ΟΞΏΟ, ΟΟΟΟ Ξ±ΟΟΞ¬ ΟΞ΅ΟΞΉΞ³ΟΞ¬ΟΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�. ΞΞ±ΟΞ¬ ΟΞ· Ξ΄ΞΉΞ¬ΟΞΊΞ΅ΞΉΞ± ΟΞ·Ο Ξ½ΟΞΌΞΉΞΌΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο, ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ― ΟΟΞ± Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ¬ ΞΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞ± Ξ� ΟΞ΅ ΟΞΏΟΞ΅Ξ―Ο Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ�Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½, ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ΄ΞΉΞ±ΟΟΞ½Ξ―Ξ±Ο ΟΞΏΟ ΞΌΞ΅ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ� ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞ·Ξ½ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟΟΞ·ΟΞ± Ξ� ΟΞ·Ξ½ Ξ­Ξ»Ξ»Ξ΅ΞΉΟΞ· ΟΟΞ½ ΟΟΞΌΟΟΞ½Ξ·ΞΈΞ­Ξ½ΟΟΞ½ ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΟΞ½ ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ.Β \\nΞ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ ΟΟΞΏΞ±ΞΉΟΞ΅ΟΞΉΞΊΞ¬ Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ»Ξ·ΟΞ� Ξ� ΟΞΏΞ½ ΟΞ±ΟΞ±Ξ³ΟΞ³Ο, Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ ΟΞ·Ο Ξ½ΟΞΌΞΉΞΌΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο, ΞΊΞ±ΞΉ Ξ±ΟΞΏΟΞ¬ Ξ΅ΟΞΉΟΞΊΞ΅ΟΞ� ΟΟΞΏΟΟΞ½ΟΞΏΟ Ξ� Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ· Ξ� Ξ΅ΟΞΉΟΟΟΞΏΟΞ� ΟΟΞ·ΞΌΞ¬ΟΟΞ½, ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΏΟΟ ΟΟΞΏΟΟ ΟΞ·Ο Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο, ΟΟΟΞ―Ο Ξ΅ΟΞΉΞ²Ξ¬ΟΟΞ½ΟΞ· ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, Ξ±Ξ½ ΟΞΏ ΟΟΞΏΟΟΞ½ Ξ΄Ξ΅Ξ½ Ξ±Ξ½ΟΞ±ΟΞΏΞΊΟΞ―Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΞ± ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΞ¬ ΟΞΏΟ. Ξ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ±ΟΞ΅ΟΞΈΟΞ½Ξ΅ΟΞ±ΞΉ ΟΟΞΏΞ½ Ξ΅Ξ³Ξ³ΟΞ·ΟΞ� Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΞ�ΟΞ·ΟΞ· ΟΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο ΞΊΞ±ΞΉ ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� Ξ³ΞΉΞ± ΟΞ· Ξ΄ΞΉΞ΅ΟΞ΅ΟΞ½Ξ·ΟΞ· ΟΟΟΟΞ½ ΟΞ±ΟΞ¬Ξ²Ξ±ΟΞ·Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.2.Β Β Β Ξ ΞΏΞΉΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΞ΅ΟΞΈΟΞ½ΞΏΟ Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΞ±ΟΞΏΟΞ� Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο;\\nΞ ΟΟΞ»Ξ·ΟΞ�Ο, ΞΏ ΟΞ±ΟΞ±Ξ³ΟΞ³ΟΟ Ξ� Ξ­Ξ½Ξ± ΟΟΞ―ΟΞΏΟ Ξ΅Ξ³Ξ³ΟΞ·ΟΞ�Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΞ±ΟΞ­ΟΞ΅ΞΉ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·. Ξ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±Ξ½Ξ±ΟΟΞ­ΞΎΞ΅ΞΉ ΟΟΞΏ ΞΊΞ΅Ξ―ΞΌΞ΅Ξ½ΞΏ ΟΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο Ξ³ΞΉΞ± ΟΞΏΞ½ ΟΟΞΏΟΞ΄ΞΉΞΏΟΞΉΟΞΌΟΒ ΟΞΏΟ Ξ΅Ξ³Ξ³ΟΞ·ΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.3.Β Β Β ΞΞ±ΟΞ¬ ΞΌΞ­ΟΞΏ ΟΟΞΏ ΟΟΟΞΏ Ξ΄ΞΉΞ±ΟΞΊΞ΅Ξ― Ξ· Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·;\\nΞ£ΟΞΉΟ ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΞΉΟ Ξ΄ΞΉΞ±ΟΞΊΞ΅Ξ― Ξ΄ΟΞΏ ΟΟΟΞ½ΞΉΞ±, Ξ±Ξ»Ξ»Ξ¬ ΟΞ΅ ΞΊΞ¬ΞΈΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ·, Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅Ξ― Ξ΅ΟΞΉΞ»ΞΏΞ³Ξ� ΟΞΏΟ Ξ΅Ξ³Ξ³ΟΞ·ΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.4.Β Β Β Ξ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄ΟΟΞ΅Ξ¬Ξ½;\\nΞΟΞΉ Ξ±ΟΞ±ΟΞ±Ξ―ΟΞ·ΟΞ±. Ξ Ξ­ΞΌΟΞΏΟΞΏΟ ΞΈΞ­ΟΞ΅ΞΉ ΟΞΏΟΟ ΟΟΞΏΟΟ. ΞΟΞ± ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄ΟΟΞ΅Ξ¬Ξ½ Ξ� Ξ΅ΟΞ― ΟΞ»Ξ·ΟΟΞΌΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.5.Β Β Β Ξ ΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ;\\nΞ Ξ­ΞΌΟΞΏΟΞΏΟ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ±ΟΞ­ΟΞ΅ΞΉ ΟΞ·Ξ½ Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ Ξ� ΟΞ¬Ξ½Ο ΟΞ΅ Ξ¬Ξ»Ξ»ΞΏ ΟΟΞ±ΞΈΞ΅ΟΟ ΞΌΞ­ΟΞΏ Ξ΄ΞΉΞ±ΞΈΞ­ΟΞΉΞΌΞΏ ΞΊΞ±ΞΉ ΟΟΞΏΟΞ²Ξ¬ΟΞΉΞΌΞΏ Ξ±ΟΟ ΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.6.Β Β Β Ξ€ΞΏ ΟΟΞΏΟΟΞ½ ΟΞΏΟ Ξ±Ξ½ΟΞΉΞΊΞ±ΞΈΞ―ΟΟΞ±ΟΞ±ΞΉ Ξ� Ξ΅ΟΞΉΟΞΊΞ΅ΟΞ¬ΞΆΞ΅ΟΞ±ΞΉ ΟΞ­ΟΞ΅ΞΉ Ξ½Ξ­Ξ± Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·;\\nΞ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ·Ο ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ Ξ� Ξ±Ξ½ΟΞ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞΏΟ ΟΞΏΟ Ξ΅Ξ½ΟΟΟ ΟΞΏΟ ΟΟΟΞ½ΞΏΟ ΟΞ·Ο Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο, Ξ· Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· Ξ±Ξ½Ξ±Ξ½Ξ΅ΟΞ½Ξ΅ΟΞ±ΞΉ Ξ±ΟΟΟΞΌΞ±ΟΞ± Ξ³ΞΉΞ± ΟΞ»Ξ· ΟΞ·Ο ΟΞ· Ξ΄ΞΉΞ¬ΟΞΊΞ΅ΞΉΞ± ΟΟ ΟΟΞΏΟ ΟΞΏ Ξ½Ξ­ΞΏ ΟΟΞΏΟΟΞ½ Ξ� Ξ±Ξ½ΟΞ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΟ, Ξ΅ΞΊΟΟΟ Ξ±Ξ½ ΟΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ ΟΞ·Ο Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο ΞΏΟΞ―ΞΆΞ΅ΟΞ±ΞΉ ΞΊΞ¬ΟΞΉ Ξ΄ΞΉΞ±ΟΞΏΟΞ΅ΟΞΉΞΊΟ.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.7.Β Β Β Ξ€ΞΉ Ξ΅Ξ―Ξ΄ΞΏΟΟ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ΄Ξ―Ξ½ΞΏΞ½ΟΞ±ΞΉ ΟΟΞΏΟΟΞ΅ΟΟΞΉΞΊΞ¬ ΟΟΞ·Ξ½ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·;\\nΞ Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΞΉ, ΞΌΞ΅ Ξ±ΟΞ»Ξ� Ξ΄ΞΉΞ±ΟΟΟΟΟΞ· ΟΟΞ·Ξ½ Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞ� Ξ³Ξ»ΟΟΟΞ±, ΟΞΏΟΞ»Ξ¬ΟΞΉΟΟΞΏΞ½ ΟΞ·Ξ½ Ξ΅ΟΟΞ½ΟΞΌΞ―Ξ± ΞΊΞ±ΞΉ ΟΞ· Ξ΄ΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΟΞΏΟ Ξ΅Ξ³Ξ³ΟΞ·ΟΞ�, ΟΞΏ ΟΟΞΏΟΟΞ½ ΟΟΞΏ ΞΏΟΞΏΞ―ΞΏ Ξ±Ξ½Ξ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ· Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·, ΟΞΏ Ξ±ΞΊΟΞΉΞ²Ξ­Ο ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½Ο ΟΞ·Ο, ΟΞ· Ξ΄ΞΉΞ¬ΟΞΊΞ΅ΞΉΞ¬ ΟΞ·Ο ΞΊΞ±ΞΉ ΟΞ·Ξ½ Ξ΅Ξ΄Ξ±ΟΞΉΞΊΞ� ΞΉΟΟΟ ΟΞ·Ο. Ξ£Ξ΅ ΞΊΞ¬ΞΈΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ³Ξ―Ξ½Ξ΅ΟΞ±ΞΉ ΞΊΞ±ΞΉ ΞΌΞΉΞ± ΟΟΞ΅Ξ½ΞΈΟΞΌΞΉΟΞ· ΟΞ·Ο Ξ½ΟΞΌΞΉΞΌΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο ΞΊΞ±ΞΉ Ξ½Ξ± Ξ΄ΞΉΞ΅ΟΞΊΟΞΉΞ½Ξ―ΞΆΞ΅ΟΞ±ΞΉ ΟΟΞΉ Ξ±ΟΟΞ� Ξ΄Ξ΅Ξ½ ΞΈΞ―Ξ³Ξ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞ·Ξ½ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.8.Β Β Β Ξ€ΞΏ ΟΟΞ³Ξ΅Ξ―ΞΏ ΟΞΏΟ Ξ±Ξ³ΟΟΞ±ΟΞ± ΟΞ±ΟΞΏΟΟΞ―Ξ±ΟΞ΅ Ξ²Ξ»Ξ¬Ξ²Ξ· Ξ΅Ξ½ΟΟΟ ΟΞ·Ο Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο ΞΊΞ±ΞΉ ΞΊΞ±ΞΈΟΟΟΞ΅ΟΞΏΟΞ½ ΟΟΞ΅ΟΞ²ΞΏΞ»ΞΉΞΊΞ¬ Ξ½Ξ± ΟΞΏ Ξ΅ΟΞΉΟΞΊΞ΅ΟΞ¬ΟΞΏΟΞ½\\nΞΟΞ±Ξ½ ΞΏ Ξ±ΟΞ±ΞΉΟΞΏΟΞΌΞ΅Ξ½ΞΏΟ ΟΟΟΞ½ΞΏΟ Ξ΅ΟΞΉΟΞΊΞ΅ΟΞ�Ο Ξ³ΞΉΞ± ΟΟΞΏΟΟΞ½ Ξ΅Ξ½ΟΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο ΟΟΞ΅ΟΞ²Ξ±Ξ―Ξ½Ξ΅ΞΉ ΟΞΉΟ Ξ΄Ξ΅ΞΊΞ±ΟΞ­Ξ½ΟΞ΅ (15) Ξ΅ΟΞ³Ξ¬ΟΞΉΞΌΞ΅Ο Ξ·ΞΌΞ­ΟΞ΅Ο, Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΟΞ΅ Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΞ΅ΟΞ΅ ΟΞ·Ξ½ ΟΟΞΏΟΟΟΞΉΞ½Ξ� Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ· ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ Ξ³ΞΉΞ± ΟΟΞΏ ΟΟΟΞ½ΞΏ Ξ΄ΞΉΞ±ΟΞΊΞ΅Ξ― Ξ· Ξ΅ΟΞΉΟΞΊΞ΅ΟΞ�. ΞΞ½ ΟΞΏ Ξ±Ξ―ΟΞ·ΞΌΞ¬ ΟΞ±Ο Ξ΄Ξ΅ Ξ³Ξ―Ξ½Ξ΅ΞΉ Ξ΄Ξ΅ΞΊΟΟ Ξ±ΟΟ ΟΞ·Ξ½ Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ·, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.9.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ­Ξ½Ξ± ΟΞ»ΟΞ½ΟΞ�ΟΞΉΞΏ ΟΞΏΟ ΟΞ±ΟΞΏΟΟΞ―Ξ±ΟΞ΅ Ξ²Ξ»Ξ¬Ξ²Ξ· Ξ΅Ξ½ΟΟΟ ΟΞ·Ο Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο. Ξ ΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½ΞΈΟ ΞΌΞ΅ ΟΞ± Ξ­ΞΎΞΏΞ΄Ξ± Ξ΅ΟΞ―ΟΞΊΞ΅ΟΞ·Ο ΟΞΏΟ ΟΞ΅ΟΞ½ΞΉΞΊΞΏΟ ;\\nΞΟΞ±Ξ½ ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·, Ξ· Ξ΅ΟΞΉΟΞΊΞ΅ΟΞ�, Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ· ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ Ξ� Ξ΅ΟΞΉΟΟΟΞΏΟΞ� ΟΟΞ·ΞΌΞ¬ΟΟΞ½ ΟΟΞΏ ΟΞ»Ξ±Ξ―ΟΞΉΞΏ ΟΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο Ξ±ΟΟΞ�Ο Ξ³Ξ―Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΟΞ―Ο Ξ΅ΟΞΉΞ²Ξ¬ΟΟΞ½ΟΞ· ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ±ΞΈΞ­ΟΞ·ΟΞ·Ο Ξ±ΟΟΞ�Ο ΟΞ·Ο ΟΟΞΏΟΟΞ­ΟΟΞ·Ο Ξ±ΟΟ ΟΞ·Ξ½ Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ·, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β Ξ€Ξ΅ΟΞ½ΞΉΞΊΞ� ΟΟΞΏΟΟΞ�ΟΞΉΞΎΞ·-ΞΏΞ΄Ξ·Ξ³Ξ―Ξ΅Ο ΟΟΞ�ΟΞ·Ο-Ξ±ΟΟΞ¬Ξ»Ξ΅ΞΉΞ± ΟΟΞΏΟΟΞ½ΟΞΏΟ-Ξ΄ΞΉΞ¬ΟΞΏΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.1.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΞΌΞΉΞ± ΟΟΟΞΊΞ΅ΟΞ� ΞΊΞΉΞ½Ξ·ΟΞΏΟ ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΏΟ. Ξ Ξ±ΟΞΏΟΟΞ―Ξ±ΟΞ΅ Ξ²Ξ»Ξ¬Ξ²Ξ· ΞΊΞ±ΞΉ Ξ· Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ»Ξ­Ξ΅ΞΉ ΟΟΞΉ Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ Ξ±Ξ½ΟΞ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΟ.Β \\nΞΞΉ ΟΞ±ΟΞ±Ξ³ΟΞ³ΞΏΞ― ΞΊΞ±ΞΉ ΞΏΞΉ ΟΟΞ»Ξ·ΟΞ­Ο ΞΊΞ±ΞΉΞ½ΞΏΟΟΞ³ΞΉΟΞ½ Ξ΄ΞΉΞ±ΟΞΊΟΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟΞ½ Ξ±Ξ³Ξ±ΞΈΟΞ½ ΞΏΟΞ΅Ξ―Ξ»ΞΏΟΞ½ Ξ½Ξ± Ξ΅ΞΎΞ±ΟΟΞ±Ξ»Ξ―ΞΆΞΏΟΞ½ Ξ±Ξ½ΟΞ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ¬ ΞΊΞ±ΞΉ ΟΞ΅ΟΞ½ΞΉΞΊΞ� ΟΟΞΏΟΟΞ�ΟΞΉΞΎΞ· Ξ³ΞΉΞ± ΟΟΞΏΞ½ΞΉΞΊΟ Ξ΄ΞΉΞ¬ΟΟΞ·ΞΌΞ± ΟΞΏΟΞ»Ξ¬ΟΞΉΟΟΞΏΞ½ Ξ΄ΟΞΏ (2) Ξ΅ΟΟΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ· ΟΞΏΟ Ξ±Ξ³Ξ±ΞΈΞΏΟ. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ±ΞΈΞ­ΟΞ·ΟΞ·Ο Ξ±ΟΟΞ�Ο ΟΞ·Ο ΟΟΞΏΟΟΞ­ΟΟΞ·Ο Ξ±ΟΟ ΟΞ·Ξ½ Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ·, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"3.2.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΞΌΞ―Ξ± Ξ·Ξ»Ξ΅ΞΊΟΟΞΉΞΊΞ� ΟΟΟΞΊΞ΅ΟΞ� ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ ΞΏΞ΄Ξ·Ξ³Ξ―Ξ΅Ο ΟΟΞ�ΟΞ·Ο ΟΟΞ± Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞ¬.\\nΞ ΟΞ±ΟΞ±Ξ³ΟΞ³ΟΟ ΞΏΟΞ΅Ξ―Ξ»Ξ΅ΞΉ Ξ½Ξ± ΟΞ±ΟΞ­ΟΞ΅ΞΉ ΟΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΟΟΞ·Ξ½ Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞ� Ξ³Ξ»ΟΟΟΞ± Ξ� ΞΌΞ΅ ΟΟΞΌΞ²ΞΏΞ»Ξ± Ξ΄ΞΉΞ΅ΞΈΞ½ΟΟ ΞΊΞ±ΞΈΞΉΞ΅ΟΟΞΌΞ­Ξ½Ξ±, Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ Ξ� ΟΞ¬Ξ½Ο ΟΞ΅ ΟΟΞ±ΞΈΞ΅ΟΟ ΞΌΞ­ΟΞΏ Ξ±ΟΞΏΟΟΟΟΟΞ·Ο Ο.Ο. CD Ξ� email, ΟΞ±ΟΞ΅Ξ―Ο ΞΊΞ±ΞΉ ΟΞ»Ξ�ΟΞ΅ΞΉΟ ΞΏΞ΄Ξ·Ξ³Ξ―Ξ΅Ο Ξ³ΞΉΞ± ΟΞ· ΟΟΞ�ΟΞ·, ΟΞ· ΟΟΞ½ΟΞ�ΟΞ·ΟΞ· ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΟΞ»Ξ�ΟΞ· Ξ±ΞΎΞΉΞΏΟΞΏΞ―Ξ·ΟΞ· ΟΞΏΟ Ξ±Ξ³Ξ±ΞΈΞΏΟ. ΞΞΎΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±ΟΞ»Ξ¬ ΟΟΞ·Ξ½ ΞΊΞ±ΟΞ±ΟΞΊΞ΅ΟΞ�, ΟΞ· ΟΟΞ�ΟΞ· ΞΊΞ±ΞΉ ΟΞ· ΟΟΞ½ΟΞ�ΟΞ·ΟΞ� ΟΞΏΟΟ, Ξ΅ΟΟΟΞΏΞ½ Ξ³ΞΉΞ± ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± Ξ±ΟΟΞ¬ Ξ΄Ξ΅Ξ½ ΟΞ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏΞ½ ΞΊΞ±ΟΞ±ΟΞΊΞ΅ΟΞ±ΟΟΞ� ΞΏΞ΄Ξ·Ξ³Ξ―Ξ΅Ο ΟΞ΅ ΞΏΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ Ξ³Ξ»ΟΟΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.3.Β Β Β Ξ€ΞΏ ΟΟΞΏΟΟΞ½ ΟΞΏΟ Ξ±Ξ³ΟΟΞ±ΟΞ± ΟΞ±ΟΞΏΟΟΞ―Ξ±ΟΞ΅ ΟΞΏΞ²Ξ±ΟΟ ΞΈΞ­ΞΌΞ± Ξ±ΟΟΞ¬Ξ»Ξ΅ΞΉΞ±Ο. Ξ ΞΏΟ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΟ ;\\nΞΟΞΌΟΞ΄ΞΉΞ± Ξ³ΞΉΞ± ΞΈΞ­ΞΌΞ±ΟΞ± Ξ±ΟΟΞ¬Ξ»Ξ΅ΞΉΞ±Ο ΟΟΞΏΟΟΞ½ΟΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΟΞ±ΞΌΞΌΞ±ΟΞ΅Ξ―Ξ± ΞΞΉΞΏΞΌΞ·ΟΞ±Ξ½Ξ―Ξ±Ο ΟΞΏΟ Ξ₯ΟΞΏΟΟΞ³Ξ΅Ξ―ΞΏΟ ΞΞΉΞΊΞΏΞ½ΞΏΞΌΞ―Ξ±Ο ΞΊΞ±ΞΉ ΞΞ½Ξ¬ΟΟΟΞΎΞ·Ο. ΞΞ½ ΟΟΟΞΊΞ΅ΞΉΟΞ±ΞΉ Ξ³ΞΉΞ± Ξ±ΟΟΞ¬Ξ»Ξ΅ΞΉΞ± ΞΏΟΞ�ΞΌΞ±ΟΞΏΟ, ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ· ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΞΟΞΏΟΟΞ΅Ξ―Ξ±Ο ΞΊΞ±ΞΉ ΞΞ»Ξ­Ξ³ΟΞΏΟ ΟΞΏΟ Ξ₯ΟΞΏΟΟΞ³Ξ΅Ξ―ΞΏΟ Ξ₯ΟΞΏΞ΄ΞΏΞΌΟΞ½ ΞΊΞ±ΞΉ ΞΞ΅ΟΞ±ΟΞΏΟΟΞ½. Ξ Ξ±ΟΞ¬Ξ»Ξ»Ξ·Ξ»Ξ±, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ± Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ¬ ΞΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞ± Ξ� ΟΞ΅ Ξ΅ΞΎΟΞ΄ΞΉΞΊΞ±ΟΟΞΉΞΊΞΏΟΟ ΟΞΏΟΞ΅Ξ―Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅ΟΞ―Ξ»ΟΟΞ· ΟΞ·Ο Ξ±ΟΞΏΞΌΞΉΞΊΞ�Ο ΟΞ±Ο Ξ΄ΞΉΞ±ΟΞΏΟΞ¬Ο Ξ� ΟΟΟΟΞ½ ΞΈΞ­ΞΌΞ±ΟΞ± Ξ±ΟΞΏΞΆΞ·ΞΌΞΉΟΟΞ΅ΟΞ½.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"3.4.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ ΞΊΞ±ΞΉ Ξ­ΟΞ΅ΞΉ ΟΟΟΞ²Ξ»Ξ·ΞΌΞ±. Ξ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�Ο ΞΉΟΟΟΟΞ―ΞΆΞ΅ΟΞ±ΞΉ ΟΟΞΉ ΟΞΏ ΟΞ¬Ξ»Ξ±ΟΞ± Ξ΅Ξ³Ο.Β \\nΞΞΉΞ± ΟΞΉΟ Ξ±Ξ½Ξ±ΟΟΟΞΌΞ΅Ξ½Ξ΅Ο Ξ΄ΞΉΞ±ΟΞΏΟΞ­Ο ΟΟΞΏΟ Ξ±ΟΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ· ΞΊΟΞ―ΟΞ· ΟΟΞ±Ξ³ΞΌΞ±ΟΞΉΞΊΟΞ½ ΟΞ΅ΟΞΉΟΟΞ±ΟΞΉΞΊΟΞ½ Ξ±ΟΞΌΟΞ΄ΞΉΞ± Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅ΟΞ―Ξ»ΟΟΞ· Ξ±ΟΟΟΞ½ ΟΟΞ½ Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± ΟΞΏΞ»ΞΉΟΞΉΞΊΞ¬ Ξ΄ΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞ± Ξ� ΞΏΞΉ Ξ΅ΞΎΟΞ΄ΞΉΞΊΞ±ΟΟΞΉΞΊΞΏΞ― ΟΞΏΟΞ΅Ξ―Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.5.Β Β Β ΞΟΞ³Ο ΟΞ·Ο Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟΟΞ·ΟΞ±Ο ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ ΟΞΏΟ Ξ±Ξ³ΟΟΞ±ΟΞ±, Ξ­ΟΟ ΟΟΞ±Ξ³ΞΌΞ±ΟΞΏΟΞΏΞΉΞ�ΟΞ΅ΞΉ ΟΞΏΞ»Ξ»Ξ¬ Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ Ξ­ΞΎΞΏΞ΄Ξ±. ΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΞΌΞ΅ Ξ²ΞΏΞ·ΞΈΞ�ΟΞ΅ΟΞ΅ Ξ½Ξ± Ξ΄ΞΉΞ΅ΞΊΞ΄ΞΉΞΊΞ�ΟΟ Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ· Ξ±ΟΟ ΟΞ·Ξ½ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ;\\nΞΟΞΉ, Ξ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ Ξ±ΟΞΌΞΏΞ΄ΞΉΟΟΞ·ΟΞ± Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±ΟΞΏΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ· ΟΞ·Ο ΟΟΞΏΟΟΟΞΉΞΊΞ�Ο Ξ²Ξ»Ξ¬Ξ²Ξ·Ο ΟΞΏΟ ΟΟΞ­ΟΟΞ· ΞΏ Ξ΅ΞΊΞ¬ΟΟΞΏΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ­Ξ»Ξ»ΟΞ½, ΞΏΟΟΞ΅ Ξ΄ΟΞ½Ξ±ΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΞ΄ΞΉΟΞΎΞ΅ΞΉ Ξ� Ξ±ΟΞ±ΞΉΟΞ�ΟΞ΅ΞΉ ΟΞ·Ξ½ ΟΞΉΞΈΞ±Ξ½Ξ� Ξ΅ΟΞΉΞ΄Ξ―ΞΊΞ±ΟΞ· Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ·Ο Ξ»ΟΞ³Ο ΟΞ»ΞΉΞΊΞ�Ο Ξ� Ξ·ΞΈΞΉΞΊΞ�Ο Ξ²Ξ»Ξ¬Ξ²Ξ·Ο Ξ� ΟΞΏΞ½ Ξ΅ΞΎΞ±Ξ½Ξ±Ξ³ΞΊΞ±ΟΞΌΟ ΟΟΞ½ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΟΞ½ ΟΞ΅ Ξ΅ΟΞΉΟΟΟΞΏΟΞ� Ξ±ΟΟΞ΅ΟΟΟΞ�ΟΟΟ ΞΊΞ±ΟΞ±Ξ²Ξ»Ξ·ΞΈΞ­Ξ½ΟΟΞ½ ΟΞΏΟΟΞ½. ΞΟΞΌΟΞ΄ΞΉΞ± Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅ΟΞ―Ξ»ΟΟΞ· Ξ±ΟΟΟΞ½ ΟΟΞ½ Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± ΟΞΏΞ»ΞΉΟΞΉΞΊΞ¬ Ξ΄ΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞ± Ξ� ΞΏΞΉ Ξ΅ΞΎΟΞ΄ΞΉΞΊΞ±ΟΟΞΉΞΊΞΏΞ― ΟΞΏΟΞ΅Ξ―Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"3.6.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ Ξ±ΟΟ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ±. Ξ€Ξ΅Ξ»ΞΉΞΊΞ¬ Ξ΄Ξ΅ ΟΞΏ ΞΈΞ­Ξ»Ο. ΞΟΞΏΟΟ Ξ½Ξ± ΟΞΏ Ξ΅ΟΞΉΟΟΟΞ­ΟΟ ΞΊΞ±ΞΉ Ξ½Ξ± ΟΞ¬ΟΟ ΟΞ± ΟΟΞ�ΞΌΞ±ΟΞ¬ ΞΌΞΏΟ ΟΞ―ΟΟ Ξ� Ξ½Ξ± ΟΞ¬ΟΟ ΞΊΞ¬ΟΞΉ Ξ¬Ξ»Ξ»ΞΏ ;\\nΞΟΟΟΞΏΞ½ ΟΞΏ ΟΟΞΏΟΟΞ½ Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ ΞΊΞ±ΞΉ Ξ­ΟΞ΅ΞΉ Ξ±Ξ³ΞΏΟΞ±ΟΟΞ΅Ξ― Ξ±ΟΟ ΟΟΟΞΉΞΊΟ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ±, Ξ· Ξ±Ξ»Ξ»Ξ±Ξ³Ξ� ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ Ξ� Ξ· ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ· Ξ±ΟΟ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· Ξ΅Ξ½Ξ±ΟΟΞΊΞ΅ΞΉΞ½ΟΞ±ΞΉ ΟΟΞ·Ξ½ ΟΞΏΞ»ΞΉΟΞΉΞΊΞ� ΟΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ\\n\"],[9],[7,\"h5\",true],[8],[0,\"ΞΞΈΞ­ΞΌΞΉΟΞ΅Ο ΟΟΞ±ΞΊΟΞΉΞΊΞ­Ο ΞΊΞ±ΞΉ ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΞΏΞ― ΟΟΞΏΞΉΒ \"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΞ―Ξ± Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΌΞΏΟ Ξ­ΟΟΞ΅ΞΉΞ»Ξ΅ email Ξ³ΞΉΞ± ΞΌΞΉΞ± ΟΞΏΞ»Ο ΞΊΞ±Ξ»Ξ� ΟΟΞΏΟΟΞΏΟΞ¬ ΟΞΏΟ ΞΊΞ¬Ξ½Ξ΅ΞΉ Ξ±ΟΟΞ­Ο ΟΞΉΟ ΞΌΞ­ΟΞ΅Ο ΟΞ΅ Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½. Ξ Ξ�Ξ³Ξ± ΟΞ΅ 3 ΟΟΞΏΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞ¬ ΟΞ·Ο Ξ±Ξ»Ξ»Ξ¬ Ξ΄Ξ΅Ξ½ ΟΟΞ�ΟΟΞ΅ ΟΞΏΟΞΈΞ΅Ξ½Ξ¬ Ξ΄ΞΉΞ±ΞΈΞ­ΟΞΉΞΌΞΏ. ΞΞ―Ξ½Ξ±ΞΉ Ξ½ΟΞΌΞΉΞΌΞΏ;\\nΞ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ΅ΞΉ ΟΞΏ ΟΟΞΏΟΟΞ½ Ξ� ΞΉΟΞΏΞ΄ΟΞ½Ξ±ΞΌΟ ΟΞΏΟ ΟΞ΅ Ξ΅ΟΞ»ΞΏΞ³Ξ΅Ο ΟΞΏΟΟΟΞ·ΟΞ΅Ο, Ξ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΟΞ½ ΟΟ' ΟΟΞΉΞ½ ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ, ΟΞ·Ο ΞΊΞ»Ξ―ΞΌΞ±ΞΊΞ±Ο Ξ΄ΞΉΞ±ΟΞ�ΞΌΞΉΟΞ·Ο Ξ±ΟΟΞΏΟ ΞΊΞ±ΞΉ ΟΞ·Ο ΟΞΉΞΌΞ�Ο ΟΞΏΟ ΟΟΞΏΟΟΞ­ΟΞ΅ΟΞ±ΞΉ. ΞΞΉΞ±ΟΞΏΟΞ΅ΟΞΉΞΊΞ¬ ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ±ΞΉ Ξ΄ΞΉΞ±ΟΞ�ΞΌΞΉΟΞ· Ξ΄ΟΞ»ΟΞΌΞ± ΞΊΞ±ΞΉ Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ.2251/94 ΟΟ ΟΞ±ΟΞ±ΟΞ»Ξ±Ξ½Ξ·ΟΞΉΞΊΞ� Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� ΟΟΞ±ΞΊΟΞΉΞΊΞ�. ΞΞΉΞ± ΟΞ·Ξ½ Ξ΅ΞΎΞ­ΟΞ±ΟΞ· ΟΟΞ΅ΟΞΉΞΊΟΞ½ ΞΈΞ΅ΞΌΞ¬ΟΟΞ½, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β Ξ Ξ±ΟΞ�Ξ³Ξ³Ξ΅ΞΉΞ»Ξ± ΞΌΞ­ΟΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ ΞΌΞ΅ ΟΞ·Ξ½ Ξ­Ξ½Ξ΄Ξ΅ΞΉΞΎΞ· Β«ΞΞΌΞ΅ΟΞ± Ξ΄ΞΉΞ±ΞΈΞ­ΟΞΉΞΌΞΏΒ». Ξ©ΟΟΟΟΞΏ, Ξ΄Ξ΅ ΞΌΞΏΟ Ξ­ΟΞ΅ΞΉ ΟΞ±ΟΞ±Ξ΄ΞΏΞΈΞ΅Ξ― Ξ΅Ξ΄Ο ΞΊΞ±ΞΉ 10 ΞΌΞ­ΟΞ΅Ο ΞΊΞ±ΞΉ ΞΌΞΏΟ Ξ΅Ξ―ΟΞ±Ξ½ ΟΟΞΉ Ξ΄Ξ΅Ξ½ ΞΎΞ­ΟΞΏΟΞ½ ΟΟΟΞ΅ ΞΈΞ± ΞΌΞΏΟ ΟΞΏ ΟΞ±ΟΞ±Ξ΄ΟΟΞΏΟΞ½, ΟΞ΅ΟΞΉΞΌΞ­Ξ½ΞΏΟΞ½ Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΟΞΏΟΟ. ΞΞ―Ξ½Ξ±ΞΉ Ξ½ΟΞΌΞΉΞΌΞΏ;\\nΞ ΟΞ±ΟΞΏΟΞ� Ξ΅ΟΟΞ±Ξ»ΞΌΞ­Ξ½ΟΞ½ Ξ� Ξ±Ξ½Ξ±ΞΊΟΞΉΞ²ΟΞ½ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞΉΟΞ½ ΟΞΏΟ Ξ΅Ξ½Ξ΄Ξ­ΟΞ΅ΟΞ±ΞΉ Ξ½Ξ± ΟΞ±ΟΞ±ΟΞ»Ξ±Ξ½Ξ�ΟΞ΅ΞΉ ΟΞΏ ΞΌΞ­ΟΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΞΊΞ±ΞΉ Ξ½Ξ± ΟΞΏΞ½ ΞΏΞ΄Ξ·Ξ³Ξ�ΟΞ΅ΞΉ Ξ½Ξ± Ξ»Ξ¬Ξ²Ξ΅ΞΉ Ξ±ΟΟΟΞ±ΟΞ· ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ�Ο ΟΞ·Ξ½ ΞΏΟΞΏΞ―Ξ±, Ξ΄ΞΉΞ±ΟΞΏΟΞ΅ΟΞΉΞΊΞ¬, Ξ΄Ξ΅ ΞΈΞ± Ξ΅Ξ»Ξ¬ΞΌΞ²Ξ±Ξ½Ξ΅, ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ±ΞΉ ΟΞ±ΟΞ±ΟΞ»Ξ±Ξ½Ξ·ΟΞΉΞΊΞ� Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� ΟΟΞ±ΞΊΟΞΉΞΊΞ� ΞΊΞ±ΞΉ Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ.2251/94. ΞΞΉ Ξ±Ξ½Ξ±ΞΊΟΞΉΞ²Ξ΅Ξ―Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ±ΟΞΏΟΞΏΟΞ½ ΟΞ· Ξ΄ΞΉΞ±ΞΈΞ΅ΟΞΉΞΌΟΟΞ·ΟΞ± ΞΊΞ±ΞΉ ΟΞΏ ΟΟΟΞ½ΞΏ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ·Ο ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ Ξ� Ξ¬Ξ»Ξ»Ξ± ΞΈΞ­ΞΌΞ±ΟΞ±, ΟΟΟΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ο.Ο. Ξ· ΟΟΞΏΞ­Ξ»Ξ΅ΟΟΞ· ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ, ΞΏΞΉ ΟΟΞΏΞ΄ΞΉΞ±Ξ³ΟΞ±ΟΞ­Ο ΟΞΏΟ, ΟΞ± ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΞ¬ ΟΞΏΟ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΞΊΞ±ΞΉ ΞΏΞΉ Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞ΅ΞΉΟ ΟΞΏΟ Ξ­Ξ½Ξ±Ξ½ΟΞΉ ΟΟΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½. Ξ Ξ±ΟΞ±ΟΞ»Ξ±Ξ½Ξ·ΟΞΉΞΊΞ� ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ±ΞΉ ΞΊΞ±ΞΉ Ξ· Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� ΟΟΞ±ΞΊΟΞΉΞΊΞ� ΟΞΏΟ ΟΞ±ΟΞ±Ξ»Ξ΅Ξ―ΟΞ΅ΞΉ ΞΏΟΟΞΉΟΞ΄Ξ΅ΞΉΟ Ξ³ΞΉΞ± ΟΞ· Ξ»Ξ�ΟΞ· Ξ±ΟΟΟΞ±ΟΞ·Ο ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ�Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο.Β ΞΞΉΞ± ΟΞ·Ξ½ Ξ΅ΞΎΞ­ΟΞ±ΟΞ· ΟΟΞ΅ΟΞΉΞΊΟΞ½ ΞΈΞ΅ΞΌΞ¬ΟΟΞ½, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[0,\"3.Β Β Β ΞΟΞ�ΞΊΞ± ΟΞ΅ Ξ­Ξ½Ξ± ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ± ΟΞΉΞ½Ξ±ΞΊΞ―Ξ΄Ξ± ΟΞΏΟ Ξ³ΟΞ¬ΟΞ΅ΞΉ Β«ΞΟΞΉΟΟΟΞΏΟΞ­Ο Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ Ξ΄Ξ΅ Ξ³Ξ―Ξ½ΞΏΞ½ΟΞ±ΞΉ Ξ΄Ξ΅ΞΊΟΞ­ΟΒ». ΞΞ―Ξ½Ξ±ΞΉ Ξ½ΟΞΌΞΉΞΌΞΏ;\\nΞΟΞ±Ξ³ΞΏΟΞ΅ΟΞΏΞ½ΟΞ±ΞΉ ΟΟ ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΞΏΞ― ΞΏΞΉ ΟΟΞΏΞΉ ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³ΟΞ½ ΟΞΏΟ ΟΞ΅ΟΞΉΞΏΟΞ―ΞΆΞΏΟΞ½ ΟΞ·Ξ½ Ξ΅ΟΞΈΟΞ½Ξ· ΟΞΏΟ ΟΟΞ»Ξ·ΟΞ� Ξ³ΞΉΞ± ΞΊΟΟΞΌΞΌΞ­Ξ½Ξ± Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞ± ΟΞΏΟ ΟΟΞ¬Ξ³ΞΌΞ±ΟΞΏΟ, ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ Ξ³Ξ΅Ξ½ΞΉΞΊΟΟΞ΅ΟΞ± ΞΏΞΉ ΟΟΞΏΞΉ ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³ΟΞ½ ΟΞΏΟ Ξ΄ΞΉΞ±ΟΞ±ΟΞ¬ΟΟΞΏΟΞ½ ΟΞ·Ξ½ ΞΉΟΞΏΟΟΞΏΟΞ―Ξ± ΟΟΞ½ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ¬ΟΟΞ½ ΞΊΞ±ΞΉ ΟΟΞΏΟΟΞ΅ΟΟΞ΅ΟΞ½ ΟΟΞ½ ΟΟΞΌΞ²Ξ±Ξ»Ξ»ΞΏΞΌΞ­Ξ½ΟΞ½ ΟΞ΅ Ξ²Ξ¬ΟΞΏΟ ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�. ΞΞΉ ΟΟΞΏΞΉΒ Ξ±ΟΟΞΏΞ― Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ¬ΞΊΟΟΞΏΞΉ. ΞΞΉΞ± ΟΞ·Ξ½ Ξ΅ΞΎΞ­ΟΞ±ΟΞ· ΟΟΞ΅ΟΞΉΞΊΟΞ½ ΞΈΞ΅ΞΌΞ¬ΟΟΞ½, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[7,\"h5\",true],[8],[0,\"Ξ§ΟΞ·ΞΌΞ±ΟΞΏΞΏΞΉΞΊΞΏΞ½ΞΏΞΌΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ± ΞΊΞ±ΞΉ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β Ξ§ΟΟΟΟΞ¬Ο ΟΞ΅ ΞΊΞ¬ΟΟΞ΅Ο ΞΊΞ±ΞΉ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΞ¬ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞ±. Ξ€Ξ― ΞΊΞΉΞ½Ξ΄ΟΞ½ΞΏΟΟ Ξ΄ΞΉΞ±ΟΟΞ­ΟΟ, Ξ΅ΟΟΟΞΏΞ½ Ξ΄Ξ΅Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ ΟΟΞΏ ΟΞ½ΞΏΞΌΞ± ΞΌΞΏΟ Ξ±ΞΊΞ―Ξ½Ξ·ΟΞ· ΟΞ΅ΟΞΉΞΏΟΟΞ―Ξ±;\\nΞ ΟΟΞ¬ΟΞ΅ΞΆΞ± ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ±ΟΞΊΞ�ΟΞ΅ΞΉ ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅ ΞΊΞ±ΟΞ±Ξ΄ΞΉΟΞΊΟΞΉΞΊΟ ΞΌΞ­ΟΞΏ ΟΞ·Ο Ξ΄Ξ―Ξ½Ξ΅ΞΉ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΞΏ Ξ½ΟΞΌΞΏΟ, Ο.Ο. ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞ· Ξ±ΟΟΞΏΞΊΞΉΞ½Ξ�ΟΞΏΟ. ΞΟΞΉΟΞ·ΞΌΞ±Ξ―Ξ½Ξ΅ΟΞ±ΞΉ Ξ΄Ξ΅ ΟΟΞΉ ΟΞ΅ ΟΞ­ΟΞΏΞΉΞ± ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ­ΟΞ΅ΟΞ΅ Ξ΅Ξ³Ξ³ΟΞ±ΟΞ΅Ξ― ΟΟΞ·Ξ½ Ξ€ΞΞΞ‘ΞΞ£ΞΞΞ£ Ξ.Ξ., Ξ³Ξ΅Ξ³ΞΏΞ½ΟΟ ΟΞΏΟ Ξ΅ΟΞ·ΟΞ΅Ξ¬ΞΆΞ΅ΞΉ ΟΞ·Ξ½ ΟΞ΅ΟΞ±ΞΉΟΞ­ΟΟ ΟΞΉΟΟΞΏΞ»Ξ·ΟΟΞΉΞΊΞ� ΟΞ±Ο ΞΉΞΊΞ±Ξ½ΟΟΞ·ΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΞΏΟ Ξ΅Ξ³ΞΊΟΞ―ΞΈΞ·ΞΊΞ΅ ΟΟΞ΅Ξ³Ξ±ΟΟΞΉΞΊΟ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ ΞΊΞ±ΞΉ ΞΌΞΏΟ ΞΆΞ·ΟΞΏΟΞ½ Ξ­ΞΎΞΏΞ΄Ξ± ΟΞ±ΞΊΞ­Ξ»ΞΏΟ. ΞΞ―Ξ½Ξ±ΞΉ Ξ½ΟΞΌΞΉΞΌΞΏ;Β \\nΞΞΎΞΏΞ΄Ξ± ΟΞΏΟ Ξ΄Ξ΅ ΟΟΞ½Ξ΄Ξ­ΞΏΞ½ΟΞ±ΞΉ ΞΌΞ΅ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΞ»ΞΏΞ³Ξ·ΞΌΞ­Ξ½Ξ΅Ο Ξ΄Ξ±ΟΞ¬Ξ½Ξ΅Ο ΟΟΞΏΟ ΟΟΞ―ΟΞΏΟΟ Ξ΅Ξ»Ξ­Ξ³ΟΞΏΞ½ΟΞ±ΞΉ ΟΟ ΟΟΞΏΟ ΟΞ·Ξ½ ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΟΟΞ·ΟΞ¬ ΟΞΏΟΟ. Ξ£ΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞ·Ξ½ Ξ₯Ξ Ξ1-798/2008 (Ξ¦ΞΞ Ξ' 1353) ΞΊΞ±ΞΉ ΟΞ· ΟΟΞ΅ΟΞΉΞΊΞ� Ξ½ΞΏΞΌΞΏΞ»ΞΏΞ³Ξ―Ξ± Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΟΞ±ΞΉ ΞΊΞ±ΞΉ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΟΟ ΞΏ ΟΟΞΏΟ ΟΞ΅ ΟΟΞΌΞ²Ξ±ΟΞ· ΟΟΞ΅Ξ³Ξ±ΟΟΞΉΞΊΞΏΟ Ξ΄Ξ±Ξ½Ξ΅Ξ―ΞΏΟ ΟΞΏΟ ΟΟΞΏΞ²Ξ»Ξ­ΟΞ΅ΞΉ ΟΞ·Ξ½ Ξ΅ΟΞΉΞ²ΞΏΞ»Ξ� \\\"ΟΟΞΏΞΌΞ�ΞΈΞ΅ΞΉΞ±Ο\\\" Ξ� Ξ΅ΞΎΟΞ΄ΟΞ½ ΟΞ±ΞΊΞ­Ξ»ΞΏΟ.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β Ξ§ΟΟΟΟΞ¬Ο ΟΟΞ· ΟΞΉΟΟΟΟΞΉΞΊΞ� ΞΌΞΏΟ ΞΊΞ¬ΟΟΞ± ΞΊΞ±ΞΉ Ξ· Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΞΌΞΏΟ ΞΌΞ΅Ξ―ΟΟΞ΅ ΟΞΏ ΟΞΉΟΟΟΟΞΉΞΊΟ ΟΟΞΉΞΏ. ΞΟΞ΅ΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ±;\\nΞ ΟΟΞ¬ΟΞ΅ΞΆΞ± Ξ­ΟΞ΅ΞΉ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± Ξ΅ΞΎΞ΅ΟΞ¬ΞΆΞ΅ΞΉ ΟΟΞ½Ξ΅ΟΟΟ ΞΊΞ±ΞΉ ΞΊΞ±Ο' Ξ΅ΟΞ­ΞΊΟΞ±ΟΞ· Ξ½Ξ± Ξ±Ξ½Ξ±ΞΈΞ΅ΟΟΞ΅Ξ― ΞΊΞ±ΞΉ Ξ½Ξ± Ξ±ΟΞΎΞΏΞΌΞ΅ΞΉΟΞ½Ξ΅ΞΉ ΟΞΏ ΟΞΉΟΟΟΟΞΉΞΊΟ ΟΟΞΉΞΏ Ξ±Ξ½Ξ±Ξ»ΟΞ³ΟΟ ΟΞ·Ο ΟΞΉΟΟΞΏΞ»Ξ·ΟΟΞΉΞΊΞ�Ο ΞΉΞΊΞ±Ξ½ΟΟΞ·ΟΞ±Ο ΞΊΞ±ΞΉ ΟΞ·Ο Ξ΅Ξ½ Ξ³Ξ­Ξ½Ξ΅ΞΉ ΟΞΉΟΟΟΟΞΉΞΊΞ�Ο ΟΟΞΌΟΞ΅ΟΞΉΟΞΏΟΞ¬Ο ΟΞΏΟ ΞΊΞ±ΟΟΟΞΏΟ ΟΞ·Ο ΞΊΞ¬ΟΟΞ±Ο ΞΊΞ±ΞΉ Ξ½Ξ± Ξ±ΞΎΞΉΞΏΞ»ΞΏΞ³Ξ΅Ξ― ΞΊΞ±ΟΞ¬ ΟΟΟΞΏ Ξ±ΟΟΟΟ ΟΞ»Ξ·ΟΞΏΞ― ΟΞ± ΟΞΉΟΟΞΏΞ΄ΞΏΟΞΉΞΊΞ¬ ΞΊΟΞΉΟΞ�ΟΞΉΞ± ΟΞ·Ο ΟΟΞ¬ΟΞ΅ΞΆΞ±Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"4.Β Β Β ΞΟΟ ΟΞ¬ΟΞ΅ΞΉ Ξ­Ξ½Ξ± ΟΟΞ΅Ξ³Ξ±ΟΟΞΉΞΊΟ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ ΟΞΏ ΞΏΟΞΏΞ―ΞΏ ΟΞ± ΟΟΟΟΞ± Ξ΄Ξ­ΞΊΞ± ΟΟΟΞ½ΞΉΞ± Ξ­ΟΞ΅ΞΉ ΟΟΞ±ΞΈΞ΅ΟΟ Ξ΅ΟΞΉΟΟΞΊΞΉΞΏ ΞΊΞ±ΞΉ ΟΞ± Ξ΅ΟΟΞΌΞ΅Ξ½Ξ± ΞΊΟΞΌΞ±ΞΉΞ½ΟΞΌΞ΅Ξ½ΞΏ. ΞΞ±ΟΞ¬ ΟΞ·Ξ½ ΟΞ΅ΟΞ―ΞΏΞ΄ΞΏ ΟΞΏΟ ΞΊΟΞΌΞ±ΞΉΞ½ΟΞΌΞ΅Ξ½ΞΏΟ Ξ΅ΟΞΉΟΞΏΞΊΞ―ΞΏΟ Ξ±Ξ½ ΟΟΞΏΞ΅ΞΎΞΏΟΞ»Ξ�ΟΟ ΞΈΞ± Ξ­ΟΟ ΟΞΏΞΉΞ½Ξ� ΟΟΞΏΞ΅ΞΎΟΟΞ»Ξ·ΟΞ·Ο;Β Β Β \\nΞΟΞ΅ΞΉ ΞΊΟΞΉΞΈΞ΅Ξ― Ξ�Ξ΄Ξ· ΞΌΞ΅ ΟΞ·Ξ½ Ξ±ΟΟΟΞ±ΟΞ· ΟΞΏΟ ΞΟΞ΅Ξ―ΞΏΟ Ξ Ξ¬Ξ³ΞΏΟ Ξ±Ο. 430/2005, ΟΟΞΉ Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅ΟΞΉΟΟΞ΅ΟΟΞ� Ξ· ΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� ΟΞΏΞΉΞ½Ξ�Ο ΟΟΟΟΟΞ·Ο Ξ΅ΞΎΟΟΞ»Ξ·ΟΞ·Ο ΟΞ΅ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ ΞΌΞ΅ ΞΊΟΞΌΞ±ΞΉΞ½ΟΞΌΞ΅Ξ½ΞΏ Ξ΅ΟΞΉΟΟΞΊΞΉΞΏ. Ξ€ΞΏ Ξ―Ξ΄ΞΉΞΏ ΟΟΞΏΞ²Ξ»Ξ­ΟΞ΅ΞΉ ΞΊΞ±ΞΉ Ξ· Ξ₯Ξ Ξ1-798/2008 (Ξ¦ΞΞ Ξ' 1353) ΟΞΏΟ Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΞΉ ΟΞ·Ξ½ Ξ±Ξ½Ξ±Ξ³ΟΞ±ΟΞ� ΟΟΞΏΟ ΟΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· ΟΞΏΟ Ξ΄Ξ±Ξ½Ξ΅Ξ―ΞΏΟ ΟΞΏΟ ΟΟΞΏΞ²Ξ»Ξ­ΟΞ΅ΞΉ ΟΟΞΉ ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΟΟΟΟΞ·Ο Ξ΅ΞΎΟΟΞ»Ξ·ΟΞ·Ο ΞΌΞ΅ΟΞΉΞΊΟΟ Ξ� ΞΏΞ»ΞΉΞΊΟΟ ΟΞΏΟ ΞΊΞ΅ΟΞ±Ξ»Ξ±Ξ―ΞΏΟ ΟΞΏΟ Ξ΄Ξ±Ξ½Ξ΅Ξ―ΞΏΟ ΞΌΞ΅ ΞΊΟΞΌΞ±ΞΉΞ½ΟΞΌΞ΅Ξ½ΞΏ Ξ΅ΟΞΉΟΟΞΊΞΉΞΏ, Ξ· ΞΏΟΞΏΞ―Ξ± ΟΟΞ±Ξ³ΞΌΞ±ΟΞΏΟΞΏΞΉΞ΅Ξ―ΟΞ±ΞΉ ΞΌΞ΅ΟΞ¬ ΟΞΏΞ½ ΟΟΟΟΞΏ ΟΟΟΞ½ΞΏ ΟΟΞ½Ξ±ΟΞ·Ο ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο ΞΊΞ±ΞΉ Ξ΅ΟΟΟΞΏΞ½ Ξ΄Ξ΅Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ ΞΊΞ±ΞΈΟΟΟΞ­ΟΞ·ΟΞ· ΞΏΟΞ΅ΞΉΞ»Ξ�Ο, ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΈΞ± ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ΅ΞΉ ΟΟ Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ· ΟΟΞΏ ΟΞΉΟΟΟΟΞΉΞΊΟ Ξ―Ξ΄ΟΟΞΌΞ± ΟΞΏΟΟ Ξ―ΟΞΏ ΞΌΞ΅ ΟΞΏΟΞΏΟΟΟ Ξ΅ΟΞ― ΟΞΏΟ ΞΊΞ΅ΟΞ±Ξ»Ξ±Ξ―ΞΏΟ ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»Ξ΅ΟΞ±ΞΉ ΟΟΟΟΟΞ±, Ξ� ΟΟΞΊΞΏΟΟ ΞΏΟΞΉΟΞΌΞ­Ξ½ΟΞ½ ΞΌΞ·Ξ½ΟΞ½ Ξ΅ΟΞ― ΟΞΏΟ ΞΊΞ΅ΟΞ±Ξ»Ξ±Ξ―ΞΏΟ Ξ±ΟΟΞΏΟ. ΞΟΞ―ΟΞ·Ο, Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΞΉ ΟΞ·Ξ½ Ξ±Ξ½Ξ±Ξ³ΟΞ±ΟΞ� ΞΊΞ¬ΞΈΞ΅ ΟΟΞΏΟ ΟΞΏΟ Ξ΅ΞΎΞ±ΟΟΞ¬ ΟΞ·Ξ½ Ξ¬ΟΞΊΞ·ΟΞ· ΟΞΏΟ ΟΟΞΏΞ±Ξ½Ξ±ΟΞ΅ΟΟΞΌΞ΅Ξ½ΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΟΟΟΞ·Ο Ξ΅ΞΎΟΟΞ»Ξ·ΟΞ·Ο Ξ±ΟΟ ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅ Ξ±Ξ½ΟΞ¬Ξ»Ξ»Ξ±Ξ³ΞΌΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"5.Β Β Β Ξ ΟΟΟΟΞ±ΟΞ± ΟΞ­ΞΈΞ±Ξ½Ξ΅ ΟΟΞ³Ξ³Ξ΅Ξ½Ξ�Ο ΞΌΞΏΟ ΞΊΞ±ΞΉ Ξ· Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΞΌΞ΅ ΞΊΞ¬Ξ»Ξ΅ΟΞ΅ ΟΞ±Ξ½ Ξ½ΟΞΌΞΉΞΌΞΏ ΞΊΞ»Ξ·ΟΞΏΞ½ΟΞΌΞΏ Ξ½Ξ± Ξ±ΟΞΏΟΞ»Ξ·ΟΟΟΟ Ξ­Ξ½Ξ± Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ ΟΞΏΟ Ξ­ΟΞ΅ΞΉ Ξ»Ξ¬Ξ²Ξ΅ΞΉ. Ξ₯ΟΞΏΟΟΞ΅ΞΏΟΞΌΞ±ΞΉ Ξ½Ξ± ΟΞΏ Ξ±ΟΞΏΟΞ»Ξ·ΟΟΟΟ;Β \\nΞ£Ξ±Ο Ξ³Ξ½ΟΟΞ―ΞΆΞΏΟΞΌΞ΅ ΟΟΞΉ ΞΌΞ΅ΟΞ¬ ΟΞ·Ξ½ Ξ±ΟΞΏΞ²Ξ―ΟΟΞ· Ξ΅Ξ½ΟΟ ΟΟΞΏΟΟΟΞΏΟ, ΞΏΞΉ Ξ½ΟΞΌΞΉΞΌΞΏΞΉ ΞΊΞ»Ξ·ΟΞΏΞ½ΟΞΌΞΏΞΉ ΟΞΏΟ Ξ­ΟΞΏΟΞ½ Ξ΄ΟΞΏ Ξ΄ΟΞ½Ξ±ΟΟΟΞ·ΟΞ΅Ο:\\n\"],[7,\"br\",true],[8],[9],[0,\"β’Β Β Β ΞΞ± ΞΊΞ¬Ξ½ΞΏΟΞ½ Ξ±ΟΞΏΞ΄ΞΏΟΞ� ΟΞ·Ο ΞΊΞ»Ξ·ΟΞΏΞ½ΞΏΞΌΞΉΞ¬Ο Ξ³Ξ΅Ξ³ΞΏΞ½ΟΟ ΟΞΏΟ ΟΞ·ΞΌΞ±Ξ―Ξ½Ξ΅ΞΉ ΟΟΞΉ ΟΟΞΏΟΟΞ΅ΞΏΟΞ½ΟΞ±ΞΉ Ξ½Ξ± ΟΞ»Ξ·ΟΟΟΞΏΟΞ½ ΞΊΞ±ΞΉ ΟΞΉΟ ΟΟΟΟΞ½ ΞΏΟΞ΅ΞΉΞ»Ξ­Ο ΟΞΏΟ ΞΈΞ±Ξ½ΟΞ½ΟΞ± ΟΞ΅ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ΅Ο.\\n\"],[7,\"br\",true],[8],[9],[0,\"β’Β Β Β ΞΞ± ΞΌΞ·Ξ½ Ξ±ΟΞΏΞ΄Ξ΅ΟΟΞΏΟΞ½ ΟΞ·Ξ½ ΞΊΞ»Ξ·ΟΞΏΞ½ΞΏΞΌΞΉΞ¬, ΞΏΟΟΟΞ΅ ΟΞ΅ Ξ±ΟΟΞ�Ξ½ ΟΞ·Ξ½ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ΄Ξ΅Ξ½ Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½ΞΏΟΞ½ ΞΊΞ±Ξ½Ξ­Ξ½Ξ± ΞΊΞΉΞ½Ξ·ΟΟ Ξ� Ξ±ΞΊΞ―Ξ½Ξ·ΟΞΏ ΟΞ΅ΟΞΉΞΏΟΟΞΉΞ±ΞΊΟ ΟΟΞΏΞΉΟΞ΅Ξ―ΞΏ ΟΞΏΟ ΞΈΞ±Ξ½ΟΞ½ΟΞ± ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ ΟΟΞΏΟΟΞ΅ΞΏΟΞ½ΟΞ±ΞΉ Ξ½Ξ± Ξ±ΟΞΏΟΞ»Ξ·ΟΟΟΞΏΟΞ½ ΟΞΉΟ ΟΟΟΟΞ½ ΞΏΟΞ΅ΞΉΞ»Ξ­Ο ΟΞΏΟ ΟΞ΅ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ΅Ο.\\nΞΞ±ΟΞ¬ ΟΟΞ½Ξ­ΟΞ΅ΞΉΞ±, ΟΞΏ Ξ΅Ξ¬Ξ½ ΞΈΞ± Ξ΅ΟΞΉΞ»Ξ­ΞΎΞ΅ΟΞ΅ Ξ½Ξ± Ξ±ΟΞΏΞ΄Ξ΅ΟΟΞ΅Ξ―ΟΞ΅ ΟΞ·Ξ½ ΞΊΞ»Ξ·ΟΞΏΞ½ΞΏΞΌΞΉΞ¬ ΟΞΏΟ ΟΟΞ³Ξ³Ξ΅Ξ½ΞΏΟΟ ΟΞ±Ο Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅Ξ― Ξ΄ΞΉΞΊΞ� ΟΞ±Ο Ξ±ΟΟΟΞ±ΟΞ· ΞΊΞ±ΞΉ Ξ΅ΟΟΟΞΏΞ½ ΟΞΏ ΟΟΞ¬ΞΎΞ΅ΟΞ΅ ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞΏΟΞ»Ξ·ΟΟΟΞ΅ΟΞ΅ ΞΊΞ±ΞΉ ΟΞΏ ΟΟΞ½ΞΏΞ»ΞΏ ΟΟΞ½ ΞΏΟΞ΅ΞΉΞ»ΟΞ½ ΟΞΏΟ.\\n\"],[9],[7,\"p\",true],[8],[0,\"6.Β Β Β Ξ ΞΏΞΉΞ¬ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ· Ξ±ΟΞΌΟΞ΄ΞΉΞ± Ξ±ΟΟΞ� ΟΞΏΟ Ξ΅ΞΎΞ΅ΟΞ¬ΞΆΞ΅ΞΉ ΞΊΞ±ΞΉ Ξ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ±ΞΉ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»ΞΉΟΞ½ ΟΟΞ΅ΟΞΉΞΊΟΞ½ ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞΏΟΟΞ±ΟΞ―Ξ± ΟΞ·Ο ΞΞ΅ΟΞ±Ξ»Ξ±ΞΉΞ±Ξ³ΞΏΟΞ¬Ο, ΟΞ·Ξ½ ΟΞ±ΟΞ±ΟΞ»Ξ·ΟΞΏΟΟΟΞ·ΟΞ· ΞΌΞ΅ ΟΞΊΞΏΟΟ ΟΞ·Ξ½ ΟΞ΅ΞΉΟΞ±Ξ³ΟΞ³Ξ·ΟΞ· ΟΟΞ½ ΞΌΞ΅ΟΞΏΟΟΞ½ ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΟΞ±ΟΞ±ΟΞ»Ξ¬Ξ½Ξ·ΟΞ· ΟΟΞ½ Ξ΅ΟΞ΅Ξ½Ξ΄ΟΟΟΞ½;Β \\nΞ ΞΟΞΉΟΟΞΏΟΞ� ΞΞ΅ΟΞ±Ξ»Ξ±ΞΉΞ±Ξ³ΞΏΟΞ¬Ο Ξ΄ΞΉΞ΅ΟΞ΅ΟΞ½Ξ¬ Ξ­Ξ³Ξ³ΟΞ±ΟΞ΅Ο ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ΅Ο Ξ΅ΟΞ΅Ξ½Ξ΄ΟΟΟΞ½, ΞΏΞΉ ΞΏΟΞΏΞ―Ξ΅Ο Ξ΅Ξ½Ξ΄Ξ­ΟΞ΅ΟΞ±ΞΉ Ξ½Ξ± Ξ±ΟΞΏΟΞΏΟΞ½ ΟΞ±ΟΞ±Ξ²Ξ¬ΟΞ΅ΞΉΟ ΟΞ·Ο Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ±Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ ΞΊΞ΅ΟΞ±Ξ»Ξ±ΞΉΞ±Ξ³ΞΏΟΞ¬ ΞΊΞ±ΞΉ Ξ΅ΟΞΉΞ²Ξ¬Ξ»Ξ»Ξ΅ΞΉ Ξ΄ΞΉΞΏΞΉΞΊΞ·ΟΞΉΞΊΞ­Ο ΞΊΟΟΟΟΞ΅ΞΉΟ ΟΟΞΉΟ ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΞΉΟ ΟΞΏΟ Ξ΄ΞΉΞ±ΟΞΉΟΟΟΞ½ΞΏΞ½ΟΞ±ΞΉ ΟΟΞ΅ΟΞΉΞΊΞ­Ο ΟΞ±ΟΞ±Ξ²Ξ¬ΟΞ΅ΞΉΟ.\\nΞ/Ξ½ΟΞ·: ΞΞΏΞ»ΞΏΞΊΞΏΟΟΟΞ½Ξ· 1 ΞΊΞ±ΞΉ Ξ£ΟΞ±Ξ΄Ξ―ΞΏΟ, 105 62 ΞΞΈΞ�Ξ½Ξ±,Β \\nΞ€Ξ·Ξ». ΞΞ­Ξ½ΟΟΞΏ: 210 3377 110.\\n\"],[9],[7,\"p\",true],[8],[0,\"7.Β Β Β Ξ§ΟΟΟΟΞ¬Ο ΟΟΞΏ ΞΞ·ΞΌΟΟΞΉΞΏ ΞΊΞ±ΞΉ Ξ΄ΟΟΞΊΞΏΞ»Ξ΅ΟΞΏΞΌΞ±ΞΉ Ξ½Ξ± ΟΞ»Ξ·ΟΟΟΟ ΟΞ± ΟΟΞ­Ξ· ΞΌΞΏΟ. ΞΟΞΏΟΞΏΟΞ½ Ξ½Ξ± ΞΊΞ±ΟΞ±ΟΟΞ­ΟΞΏΟΞ½ ΟΟΞ�ΞΌΞ±ΟΞ± Ξ±ΟΟ ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΞΌΞΏΟ;Β Β Β \\nΞ ΞΟΞ΄ΞΉΞΊΞ±Ο ΞΞ―ΟΟΟΞ±ΞΎΞ·Ο ΞΞ·ΞΌΞΏΟΞ―ΟΞ½ ΞΟΟΞ΄ΟΞ½ (Ξ.Ξ.Ξ.Ξ) ΟΞ΅ΟΞΉΞ­ΟΞ΅ΞΉ Ξ΅ΞΉΞ΄ΞΉΞΊΞ­Ο Ξ΄ΞΉΞ±ΟΞ¬ΞΎΞ΅ΞΉΟ Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΟΞΏΟΟΞ±ΟΞ―Ξ± Ξ±ΟΟ ΟΞ·Ξ½ ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞ· Ξ±) ΞΌΞΉΟΞΈΟΞ½, ΟΟΞ½ΟΞ¬ΞΎΞ΅ΟΞ½ Ξ� Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΟΞ½ Ξ²ΞΏΞ·ΞΈΞ·ΞΌΞ¬ΟΟΞ½ ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»ΞΏΞ½ΟΞ±ΞΉ ΟΞ΅ΟΞΉΞΏΞ΄ΞΉΞΊΞ¬ ΞΊΞ±ΞΉ Ξ²) ΟΟΞ½ ΞΊΞ±ΟΞ±ΞΈΞ­ΟΞ΅ΟΞ½ ΟΞ΅ ΟΞΉΟΟΟΟΞΉΞΊΞ¬ ΞΉΞ΄ΟΟΞΌΞ±ΟΞ±. ΞΞΉΞ΄ΞΉΞΊΟΟΞ΅ΟΞ±:\\n\"],[7,\"br\",true],[8],[9],[0,\"Ξ±) ΞΞΉΟΞΈΞΏΞ―, ΟΟΞ½ΟΞ¬ΞΎΞ΅ΞΉΟ Ξ� Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ¬ Ξ²ΞΏΞ·ΞΈΞ�ΞΌΞ±ΟΞ± ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»ΞΏΞ½ΟΞ±ΞΉ ΟΞ΅ΟΞΉΞΏΞ΄ΞΉΞΊΞ¬.\\nΞΞ΅Ξ½ Ξ΅ΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ· ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞ· ΟΟΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΟΞ±Ο Ξ±ΟΟ ΟΞΏ ΞΞ·ΞΌΟΟΞΉΞΏ ΞΌΞΉΟΞΈΟΞ½, ΟΟΞ½ΟΞ¬ΞΎΞ΅ΟΞ½ ΞΊΞ±ΞΉ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΟΞ½ Ξ²ΞΏΞ·ΞΈΞ·ΞΌΞ¬ΟΟΞ½, ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»ΞΏΞ½ΟΞ±ΞΉ ΟΞ΅ΟΞΉΞΏΞ΄ΞΉΞΊΞ¬, Ξ΅ΟΟΟΞΏΞ½ ΟΞΏ ΟΞΏΟΟ Ξ±ΟΟΟΞ½ ΞΌΞ·Ξ½ΞΉΞ±Ξ―ΟΟ, Ξ±ΟΞ±ΞΉΟΞΏΟΞΌΞ­Ξ½ΟΞ½ ΟΟΞ½ ΟΟΞΏΟΟΞ΅ΟΟΞΉΞΊΟΞ½ Ξ΅ΞΉΟΟΞΏΟΟΞ½, Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΌΞΉΞΊΟΟΟΞ΅ΟΞΏ ΟΟΞ½ ΟΞΉΞ»Ξ―ΟΞ½ (1.000) Ξ΅ΟΟΟ. Ξ£ΟΞΉΟ ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΞΉΟ Ξ΄Ξ΅ ΟΞΏΟ ΟΟΞ΅ΟΞ²Ξ±Ξ―Ξ½Ξ΅ΞΉ ΟΞΏ ΟΞΏΟΟ Ξ±ΟΟΟ, Ξ΅ΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ· ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞ· Ξ³ΞΉΞ± ΟΞ± ΟΟΞ­Ξ· ΟΟΞΏΟ ΟΞΏ ΞΞ·ΞΌΟΟΞΉΞΏ Ξ΅ΟΞ― ΟΞΏΟ Ξ΅Ξ½ΟΟ Ξ΄Ξ΅ΟΟΞ­ΟΞΏΟ (1/2) ΟΞΏΟ ΟΟΞ΅ΟΞ²Ξ¬Ξ»Ξ»ΞΏΞ½ΟΞΏΟ ΟΞΏΟΞΏΟ ΟΟΞ½ ΟΞΉΞ»Ξ―ΟΞ½ (1.000) Ξ΅ΟΟΟ ΞΊΞ±ΞΉ ΞΌΞ­ΟΟΞΉ ΟΞΏΟ ΟΞΏΟΞΏΟ ΟΟΞ½ ΟΞΉΞ»Ξ―ΟΞ½ ΟΞ΅Ξ½ΟΞ±ΞΊΞΏΟΞ―ΟΞ½ (1.500) Ξ΅ΟΟΟ, Ξ΅Ξ½Ο Ξ³ΞΉΞ± ΟΞΏΟΞ¬ Ξ¬Ξ½Ο ΟΟΞ½ ΟΞΉΞ»Ξ―ΟΞ½ ΟΞ΅Ξ½ΟΞ±ΞΊΞΏΟΞ―ΟΞ½ (1.500) Ξ΅ΟΟΟ Ξ΅ΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ· ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞ· Ξ΅ΟΞ― ΟΞΏΟ ΟΟΞ½ΟΞ»ΞΏΟ ΟΞΏΟ ΟΟΞ΅ΟΞ²Ξ¬Ξ»Ξ»ΞΏΞ½ΟΞΏΟ ΟΞΏΟΞΏΟ ΟΟΞ½ ΟΞΉΞ»Ξ―ΟΞ½ ΟΞ΅Ξ½ΟΞ±ΞΊΞΏΟΞ―ΟΞ½ (1.500) Ξ΅ΟΟΟ (Ξ¬ΟΞΈΟΞΏ 31Β Ξ.Ξ.Ξ.Ξ, ΟΟΟΟ ΟΟΞΏΟΞΏΟΞΏΞΉΞ�ΞΈΞ·ΞΊΞ΅ ΞΊΞ±ΞΉ ΞΉΟΟΟΞ΅ΞΉ).\\n\"],[7,\"br\",true],[8],[9],[0,\"Ξ²) ΞΞ±ΟΞ±ΞΈΞ­ΟΞ΅ΞΉΟ ΟΞ΅ ΟΞΉΟΟΟΟΞΉΞΊΞ¬ ΞΉΞ΄ΟΟΞΌΞ±ΟΞ±.\\nΞΞ±ΟΞ±ΞΈΞ­ΟΞ΅ΞΉΟ ΟΞ΅ ΟΞΉΟΟΟΟΞΉΞΊΞ¬ ΞΉΞ΄ΟΟΞΌΞ±ΟΞ± ΟΞ΅ Ξ±ΟΞΏΞΌΞΉΞΊΟ Ξ� ΞΊΞΏΞΉΞ½Ο Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞ΅Ο ΞΌΞ­ΟΟΞΉ ΟΞΏΟ ΟΞΏΟΞΏΟ ΟΟΞ½ ΟΞΉΞ»Ξ―ΟΞ½ Ξ΄ΞΉΞ±ΞΊΞΏΟΞ―ΟΞ½ ΟΞ΅Ξ½Ξ�Ξ½ΟΞ± (1.250) Ξ΅ΟΟΟ Ξ³ΞΉΞ± ΞΊΞ¬ΞΈΞ΅ ΟΟΟΞΉΞΊΟ ΟΟΟΟΟΟΞΏ ΞΊΞ±ΞΉ ΟΞ΅ Ξ­Ξ½Ξ± ΞΌΟΞ½ΞΏ ΟΞΉΟΟΟΟΞΉΞΊΟ Ξ―Ξ΄ΟΟΞΌΞ±. ΞΞΉΞ± ΟΞ·Ξ½ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� ΟΞΏΟ ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ΅Ξ½ΞΏΟ Ξ΅Ξ΄Ξ±ΟΞ―ΞΏΟ Ξ±ΟΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ³Ξ½ΟΟΟΞΏΟΞΏΞ―Ξ·ΟΞ· Ξ±ΟΟ ΟΞΏ ΟΟΟΞΉΞΊΟ ΟΟΟΟΟΟΞΏ Ξ΅Ξ½ΟΟ ΞΌΞΏΞ½Ξ±Ξ΄ΞΉΞΊΞΏΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΞΏΟ, ΞΌΞ΅ ΟΟΞΏΞ²ΞΏΞ»Ξ� Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ�Ο Ξ΄Ξ�Ξ»ΟΟΞ·Ο ΟΟΞΏ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞΉΞ±ΞΊΟ ΟΟΟΟΞ·ΞΌΞ± ΟΞ·Ο Ξ¦ΞΏΟΞΏΞ»ΞΏΞ³ΞΉΞΊΞ�Ο ΞΞΉΞΏΞ―ΞΊΞ·ΟΞ·Ο. ΞΟΟΟΞΏΞ½ ΟΟΞ¬ΟΟΞ΅ΞΉ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟΟ ΟΞ΅ΟΞΉΞΏΞ΄ΞΉΞΊΞ�Ο ΟΞ―ΟΟΟΟΞ·Ο ΞΌΞΉΟΞΈΟΞ½, ΟΟΞ½ΟΞ¬ΞΎΞ΅ΟΞ½ ΞΊΞ±ΞΉ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΟΞ½ Ξ²ΞΏΞ·ΞΈΞ·ΞΌΞ¬ΟΟΞ½, Ξ³Ξ½ΟΟΟΞΏΟΞΏΞΉΞ΅Ξ―ΟΞ±ΞΉ, Ξ±ΟΞΏΞΊΞ»Ξ΅ΞΉΟΟΞΉΞΊΞ¬ ΞΊΞ±ΞΉ ΞΌΟΞ½ΞΏ, ΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟΟ Ξ±ΟΟΟΟ (Ξ¬ΟΞΈΟΞΏ 31 ΟΞ±Ο.2 Ξ΅Ξ΄Ξ¬ΟΞΉΞ± Ξ΄Ξ΅ΟΟΞ΅ΟΞΏ & ΟΟΞ―ΟΞΏ ΟΞΏΟ Ξ.Ξ.Ξ.Ξ, ΟΟΟΟ ΟΟΞΏΟΞΏΟΞΏΞΉΞ�ΞΈΞ·ΞΊΞ΅ ΞΊΞ±ΞΉ ΞΉΟΟΟΞ΅ΞΉ).\\n\"],[9],[7,\"p\",true],[8],[0,\"8.Β Β Β ΞΞ―ΞΌΞ±ΞΉ Ξ¬Ξ½Ξ΅ΟΞ³ΞΏΟ ΞΊΞΉ Ξ­ΟΟ ΟΟΞ­Ξ· ΟΞ΅ ΟΟΞ¬ΟΞ΅ΞΆΞ±. ΞΟΞΏΟΞ΅Ξ― Ξ· ΟΟΞ¬ΟΞ΅ΞΆΞ± Ξ½Ξ± ΞΊΞ±ΟΞ±ΟΟΞ­ΟΞ΅ΞΉ ΟΞΏ Ξ΅ΟΞ―Ξ΄ΞΏΞΌΞ± Ξ±Ξ½Ξ΅ΟΞ³Ξ―Ξ±Ο ΟΞΏΟ Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½Ο Ξ³ΞΉΞ± Ξ½Ξ± ΞΉΞΊΞ±Ξ½ΞΏΟΞΏΞΉΞ�ΟΞ΅ΞΉ ΟΞΉΟ Ξ±ΟΞ±ΞΉΟΞ�ΟΞ΅ΞΉΟ ΟΞ·Ο;Β Β Β Β Β \\nΞ Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ± ΞΏΟΞ―ΞΆΞ΅ΞΉ ΟΟΞΉ ΟΞΏ ΟΞΏΟΟ ΟΞΏΟ Ξ΅ΟΞΉΞ΄ΟΞΌΞ±ΟΞΏΟ Ξ±Ξ½Ξ΅ΟΞ³Ξ―Ξ±Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞΏ (Ξ¬ΟΞΈΟΞΏ 21 ΟΞ±Ο.6 Ξ.Ξ. 2961/1954).Β \\n\"],[9],[7,\"p\",true],[8],[0,\"9.Β Β Β ΞΞΉΞ±ΟΞ·ΟΟ ΞΊΞΏΞΉΞ½Ο Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΞΌΞ΅ Ξ­Ξ½Ξ± Ξ¬Ξ»Ξ»ΞΏ Ξ¬ΟΞΏΞΌΞΏ ΟΞΏ ΞΏΟΞΏΞ―ΞΏ ΟΟΟΟΟΞ¬Ξ΅ΞΉ ΟΟΞ·Ξ½ ΟΟΞ¬ΟΞ΅ΞΆΞ±. Ξ ΟΟΞ¬ΟΞ΅ΞΆΞ± ΞΌΟΞ�ΞΊΞ΅ ΟΟΞΏΞ½ ΞΊΞΏΞΉΞ½Ο ΞΌΞ±Ο Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΞΊΞ±ΞΉ ΟΞ�ΟΞ΅ ΟΞ»Ξ± ΟΞ± ΟΟΞ�ΞΌΞ±ΟΞ±. ΞΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΟΟΞΏΞ²Ξ΅Ξ― ΟΞ΅ Ξ±ΟΟΞ�Ξ½ ΟΞ·Ξ½ Ξ΅Ξ½Ξ­ΟΞ³Ξ΅ΞΉΞ±?Β Β Β \\nΞΞ½Ξ±ΟΞΏΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞ±ΟΞ±ΞΊΟΞ±ΟΞ�ΟΞ΅ΞΉΟ ΟΞΏΟΟΞ½ Ξ±ΟΟ ΞΊΞΏΞΉΞ½ΞΏΟΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΞΏΟΟ (Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΞΏΟΟ ΞΌΞ΅ Ξ΄ΟΞΏ Ξ� ΟΞ±ΟΞ±ΟΞ¬Ξ½Ο ΟΟΞ½Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞΏΟΟ), ΟΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟ ΞΊΞΏΞΉΞ½Ο ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ³Ξ½ΟΟΞ―ΞΆΞ΅ΞΉ ΟΟΞΉ, ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΏ Ξ¬ΟΞΈΟΞΏ 1 ΟΞ±Ο. 1 ΞΊΞ±ΞΉ 2 ΟΞΏΟ Ξ.5638/1932, ΟΟΟΟ Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ±ΟΟΞ¬ΞΈΞ·ΞΊΞ΅ ΞΌΞ΅ ΟΞΏ Ξ¬ΟΞΈΟΞΏ 1 ΟΞΏΟ ΞΞ 951/1971 ΞΊΞ±ΞΉ Ξ΄ΞΉΞ±ΟΞ·ΟΞ�ΞΈΞ·ΞΊΞ΅ ΟΞ΅ ΞΉΟΟΟ ΞΌΞ΅ ΟΞΏ Ξ¬ΟΞΈΟΞΏ 124 ΟΞ΅Ο. Ξ ΟΟΞΏΞΉΟ. Ξ ΟΞΏΟ ΞΞ 118/1973, ΟΟΞΏΞΊΟΟΟΞ΅ΞΉ, ΟΟΞΉ ΞΏ ΞΊΞ±ΞΈΞ­Ξ½Ξ±Ο Ξ±ΟΟ ΟΞΏΟΟ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞΏΟΟ ΟΟΞ·ΞΌΞ±ΟΞΉΞΊΞ�Ο ΞΊΞ±ΟΞ¬ΞΈΞ΅ΟΞ·Ο ΟΞ΅ ΞΊΞΏΞΉΞ½Ο ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ, Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞΏΟ ΟΞΏΟ ΟΟΞ½ΟΞ»ΞΏΟ ΟΟΞ½ ΟΟΞ·ΞΌΞ¬ΟΟΞ½ ΟΞΏΟ ΞΊΞ±ΟΞ±ΟΞ­ΞΈΞ·ΞΊΞ±Ξ½ ΟΟΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ Ξ±ΟΟΟ ΞΊΞ±ΞΉ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΞ± ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞ΅Ξ― ΟΟΟΞ―Ο ΟΞ· ΟΟΞΌΟΟΞ±ΞΎΞ· ΟΟΞ½ Ξ»ΞΏΞΉΟΟΞ½ ΟΟΞ½Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΟΞ½. ΞΞ½ΟΞΉΟΟΞΏΞ―ΟΟΟ, Ξ· Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞ΅ΞΉ ΟΞΏΟΞ¬ Ξ±ΟΟ Ξ­Ξ½Ξ±Ξ½ ΟΞ­ΟΞΏΞΉΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ Ξ­Ξ½Ξ±Ξ½ΟΞΉ Ξ±ΟΞ±Ξ―ΟΞ·ΟΞ·Ο ΟΞΏΟ ΟΟΟΟΞ½ Ξ­ΟΞ΅ΞΉ ΞΊΞ±ΟΞ¬ Ξ΅Ξ½ΟΟ Ξ΅ΞΊ ΟΟΞ½ ΟΟΞ½Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"10.Β Β Β Ξ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΟΞ±Ξ―ΟΞ½Ξ΅ΞΉ ΟΞΉΟ Ξ΄ΟΟΞ΅ΞΉΟ ΟΞΏΟ Ξ΄Ξ±Ξ½Ξ΅Ξ―ΞΏΟ ΞΌΞΏΟ Ξ±ΟΟ ΟΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΟΞΏΟ ΞΊΞ±ΟΞ±ΟΞ―ΞΈΞ΅ΟΞ±ΞΉ Ξ· ΞΌΞΉΟΞΈΞΏΞ΄ΞΏΟΞ―Ξ± ΞΌΞΏΟ, ΞΊΞ±ΟΟΟΞΉΞ½ ΟΞ¬Ξ³ΞΉΞ±Ο Ξ΅Ξ½ΟΞΏΞ»Ξ�Ο ΞΌΞΏΟ. ΞΟΟΞ� ΟΞ· ΟΟΞΉΞ³ΞΌΞ� ΟΞΌΟΟ Ξ΄ΟΟΞΊΞΏΞ»Ξ΅ΟΞΏΞΌΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΞ²ΞΉΟΟΟ ΞΏΞΉΞΊΞΏΞ½ΞΏΞΌΞΉΞΊΞ¬ Ξ»ΟΞ³Ο ΟΞ·Ο ΞΏΞΉΞΊΞΏΞ½ΞΏΞΌΞΉΞΊΞ�Ο ΞΊΟΞ―ΟΞ·Ο. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;Β Β \\nΞΞΉ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ­Ο ΟΞΏΟ Ξ­ΟΞΏΟΞ½ ΟΟΞ½Ξ΄Ξ­ΟΞ΅ΞΉ ΞΌΞ΅ (ΞΎΞ΅ΟΟΟΞΉΟΟΞ� Ξ±ΟΟ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ·) Ξ­Ξ³Ξ³ΟΞ±ΟΞ· Ξ΅Ξ½ΟΞΏΞ»Ξ�-Ξ΅ΞΎΞΏΟΟΞΉΞΏΞ΄ΟΟΞ·ΟΞ· ΟΟΞΏΟ ΟΞ·Ξ½ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ±, ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΟΞΏΟΟ Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅ΞΎΟΟΞ·ΟΞ­ΟΞ·ΟΞ· Ξ΄Ξ±Ξ½Ξ΅ΞΉΞ±ΞΊΟΞ½ ΟΞΏΟΟ ΟΟΞΏΟΟΞ΅ΟΟΞ΅ΟΞ½ ΟΟΞΏΞ½ ΞΏΟΞΏΞ―ΞΏ ΞΊΞ±ΟΞ±ΟΞ―ΞΈΞ΅Ξ½ΟΞ±ΞΉ ΞΌΞ·Ξ½ΞΉΞ±Ξ―ΟΟ ΟΞ± ΟΞΏΟΞ¬ ΟΞ·Ο ΞΌΞΉΟΞΈΞΏΞ΄ΞΏΟΞ―Ξ±Ο, ΟΞ·Ο ΟΟΞ½ΟΞ±ΞΎΞ·Ο Ξ� ΟΞΏΟ Ξ΅ΟΞΉΞ΄ΟΞΌΞ±ΟΞΏΟ Ξ±Ξ½Ξ΅ΟΞ³Ξ―Ξ±Ο Ξ­ΟΞΏΟΞ½ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΞΌΞ΅ Ξ³ΟΞ±ΟΟΟ Ξ±Ξ―ΟΞ·ΞΌΞ¬ ΟΞΏΟΟ ΟΟΞΏΟ ΟΞ·Ξ½ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΞΏΟΞ½ Ξ±Ξ½Ξ¬ΞΊΞ»Ξ·ΟΞ· ΟΞ·Ο ΟΟ Ξ¬Ξ½Ο Ξ΅Ξ½ΟΞΏΞ»Ξ�Ο ΞΊΞ±ΞΉ Ξ΅ΞΎΟΟΞ·ΟΞ­ΟΞ·ΟΞ· ΟΞ·Ο Ξ΄Ξ±Ξ½Ξ΅ΞΉΞ±ΞΊΞ�Ο ΟΟΞΏΟΟΞ­ΟΟΞ·Ο ΞΌΞ΅ Ξ¬Ξ»Ξ»ΞΏ ΟΟΟΟΞΏ. Ξ Ξ΅Ξ½ΟΞΏΞ»Ξ� Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±Ξ½Ξ­ΞΊΞΊΞ»Ξ·ΟΞ· Ξ³ΞΉΞ± ΟΞΏΟΟ ΟΟ Ξ¬Ξ½Ο ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΞΏΟΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΞΏΟΟ.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"11.Β Β Β Ξ§ΟΟΟΟΞ¬Ο ΟΞ΅ ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο ΞΊΞ±ΞΉ Ξ΄ΟΟΞΊΞΏΞ»Ξ΅ΟΞΏΞΌΞ±ΞΉ Ξ½Ξ± ΟΞ»Ξ·ΟΟΟΟ ΟΞ± ΟΟΞ­Ξ· ΞΌΞΏΟ. ΞΟΞΏΟΞΏΟΞ½ ΞΏΞΉ ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο Ξ½Ξ± ΞΊΞ±ΟΞ±ΟΟΞ­ΟΞΏΟΞ½ ΟΟΞ�ΞΌΞ±ΟΞ± Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΞΌΞΏΟ;Β Β Β Β \\nΞΞ±ΟΞ±ΟΟΞ�Ξ½ Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΟΞ±ΞΉ Ξ· ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞ· ΟΟΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΟΞ±Ο Ξ±ΟΟ ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο Ξ� ΞΉΞ΄ΞΉΟΟΞ΅Ο Ξ΄Ξ±Ξ½Ξ΅ΞΉΟΟΞ­Ο Ξ³ΞΉΞ± ΟΞΏ ΟΞΏΟΟ ΟΞΏΟ Ξ±ΟΞΏΟΞ¬ ΟΞ΅ ΞΌΞΉΟΞΈΟ Ξ� ΟΟΞ½ΟΞ±ΞΎΞ· Ξ�Β Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΟΞ±ΟΞΏΟΞ� (Ξ¬ΟΞΈΟΞΏ 982 ΟΞ±Ο.2 ΟΞ΅Ο.Ξ΄ ΞΟΞ΄ΞΉΞΊΞ± Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ�Ο ΞΞΉΞΊΞΏΞ½ΞΏΞΌΞ―Ξ±Ο). ΞΞ¬Ξ½Β Ξ΄Ξ΅Ξ½ Ξ΅Ξ―ΟΟΞ΅ ΞΌΞΉΟΞΈΟΟΟΟ Ξ� ΟΟΞ½ΟΞ±ΞΎΞΉΞΏΟΟΞΏΟ Ξ� Ξ±ΞΊΟΞΌΞ± ΞΊΞΉ Ξ±Ξ½ ΟΞΏ ΟΞΏΟΟ ΟΞΏΟ ΞΌΞΉΟΞΈΞΏΟ Ξ� ΟΞ·Ο ΟΟΞ½ΟΞ±ΞΎΞ�Ο ΟΞ±Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΌΞΉΞΊΟΟΟΞ΅ΟΞΏ Ξ±ΟΟ 1.500 Ξ΅ΟΟΟ, Ξ²Ξ¬ΟΞ΅ΞΉ ΟΞΏΟ Ξ½ΟΞΌΞΏΟ 4161/2013, Ξ¬ΟΞΈΟΞΏ 20, Ξ±ΟΞ±Ξ³ΞΏΟΞ΅ΟΞ΅ΟΞ±ΞΉ Ξ· ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞ· Ξ³ΞΉΞ± ΟΞΏΟΟ ΞΌΞ­ΟΟΞΉ 1.500 Ξ΅ΟΟΟ /Ξ� 2.000 Ξ΅ΟΟΟ ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΞΊΞΏΞΉΞ½ΞΏΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΞΏΟ. Ξ©ΟΟΟΟΞΏ Ξ²Ξ±ΟΞΉΞΊΞ� ΟΟΞΏΟΟΟΞΈΞ΅ΟΞ· Ξ³ΞΉΞ± Ξ½Ξ± ΟΟΞΏΟΟΞ±ΟΞ­ΟΞ΅ΟΞ΅ ΟΞ± ΟΟΞ�ΞΌΞ±ΟΞ¬ ΟΞ±Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ½Ξ± ΟΟΞΏΟΞ΄ΞΉΞΏΟΞ―ΟΞ΅ΟΞ΅, ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΏ Ξ¬ΟΞΈΟΞΏ 20 ΟΞΏΟ Ξ½.4161/2013, ΟΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ Ξ³ΞΉΞ± ΟΞΏΞ½ ΞΏΟΞΏΞ―ΞΏ ΞΈΞ± ΞΉΟΟΟΞ΅ΞΉ ΟΞΏ Ξ±ΞΊΞ±ΟΞ¬ΟΟΞ΅ΟΞΏ ΞΌΞ΅ Ξ΄Ξ�Ξ»ΟΟΞ� ΟΞ±Ο ΟΟΞΏΟ Ξ­Ξ½Ξ± Ξ±ΟΟ ΟΞ± ΟΞΉΟΟΟΟΞΉΞΊΞ¬ ΞΉΞ΄ΟΟΞΌΞ±ΟΞ±.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"12.Β Β Β Ξ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΞΌΞΏΟ Ξ΄ΟΟΞ΅ΞΉ Ξ±Ξ½ΟΞ―Ξ³ΟΞ±ΟΞΏ ΟΟΞ΅Ξ΄Ξ―ΞΏΟ ΟΟΞΌΞ²Ξ±ΟΞ·Ο ΟΞ―ΟΟΟΟΞ·Ο Ξ³ΞΉΞ± ΟΟΞ΅Ξ³Ξ±ΟΟΞΉΞΊΟ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ;Β \\nΞ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ±, Ξ� ΞΊΞ±ΟΞ¬ ΟΞ΅ΟΞ―ΟΟΟΟΞ·, ΞΏ ΞΌΞ΅ΟΞ―ΟΞ·Ο ΟΞΉΟΟΟΟΞ΅ΟΞ½ ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΟΞ±Ο ΟΞ±ΟΞ­ΟΞ΅ΞΉ ΞΌΞ΅ Ξ±ΟΟΞ΄Ξ΅ΞΉΞΎΞ· ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ�Ο, Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ Ξ� ΞΌΞ΅ ΟΟΞ±ΞΈΞ΅ΟΟ ΞΌΞ­ΟΞΏ, Ξ±Ξ½ΟΞ―Ξ³ΟΞ±ΟΞΏ, Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞΉΞΊΟ Ξ³ΞΉΞ± ΟΞΏΞ½ ΟΞΏΟΞ­Ξ± ΟΞ―ΟΟΟΟΞ·Ο, ΟΟΞ΅Ξ΄Ξ―ΞΏΟ ΟΟΞΌΞ²Ξ±ΟΞ·Ο ΟΞ―ΟΟΟΟΞ·Ο ΞΊΞ±ΟΞ¬ ΟΞΏ ΟΟΟΞ½ΞΏ ΟΟΞΏΞ²ΞΏΞ»Ξ�Ο ΞΌΞ―Ξ±Ο ΟΟΞΏΟΟΞΏΟΞ¬Ο ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞΉΞΊΞ� Ξ³ΞΉΞ± ΟΞΏΞ½ ΟΞΉΟΟΟΟΞΉΞΊΟ ΟΞΏΟΞ­Ξ±. (Ξ¬ΟΞΈ.13, ΟΞ±Ο. 8 ΟΞΏΟ Ξ½.4438/2016).\\n\"],[9],[7,\"p\",true],[8],[0,\"13.Β Β Β ΞΞ­Ξ»Ο Ξ½Ξ± ΟΞ¬ΟΟ ΟΟΞ΅Ξ³Ξ±ΟΟΞΉΞΊΟ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ. Ξ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΞΌΞ΅ ΟΟΞ΅ΟΟΞ΅ΞΉ Ξ³ΞΉΞ± ΟΞΉΟ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΞΏΟ ΞΌΞΏΟ ΟΞ±ΟΞ­ΟΞ΅ΞΉ ΟΟΞΉΞ½ ΟΞ· Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞΉΞΊΞ� ΟΟΞΏΟΟΞΏΟΞ¬ ΞΊΞ±ΞΉ ΟΞ· ΟΟΞ½Ξ±ΟΞ· ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο;\\nΞ ΟΞ»Ξ·ΟΞΏΟΟΟΞ·ΟΞ· ΟΞΏΟ ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞ·Ξ½ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΟΟΞΉΞ½ Ξ±ΟΟ ΟΞ· ΟΟΞ½Ξ±ΟΞ· ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο (ΟΟΞΏΟΟΞΌΞ²Ξ±ΟΞΉΞΊΞ� ΟΞ»Ξ·ΟΞΏΟΟΟΞ·ΟΞ·) ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ΄ΟΟΞ΅Ξ¬Ξ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"14.Β Β Β ΞΞ­Ξ»Ο Ξ½Ξ± ΟΞ¬ΟΟ ΟΟΞ΅Ξ³Ξ±ΟΟΞΉΞΊΟ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ. Ξ ΟΟΞΏΟΟΞΏΟΞ¬ ΟΞ·Ο Ξ€ΟΞ¬ΟΞ΅ΞΆΞ±Ο ΞΈΞ± ΞΌΞΏΟ Ξ΄ΞΏΞΈΞ΅Ξ― Ξ³ΟΞ±ΟΟΟΟ; Ξ ΟΟΞΏ ΟΟΟΞ½ΞΏ Ξ­ΟΟ ΟΟΞ· Ξ΄ΞΉΞ¬ΞΈΞ΅ΟΞ� ΞΌΞΏΟ Ξ³ΞΉΞ± Ξ½Ξ± ΟΞ· ΞΌΞ΅Ξ»Ξ΅ΟΞ�ΟΟ ΟΟΞΏΟΞΏΟ ΟΟΞΏΞ²Ο ΟΞ΅ ΟΟΞΏΞ³ΟΞ±ΟΞ� ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο;Β \\nΒ ΞΟΞ±Ξ½ ΟΞ±Ο Ξ΄ΞΏΞΈΞ΅Ξ―Β ΟΟΞΏΟΟΞΏΟΞ¬ ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞΉΞΊΞ� Ξ³ΞΉΞ± ΟΞΏΞ½ ΟΞΉΟΟΟΟΞΉΞΊΟ ΟΞΏΟΞ­Ξ±, Ξ±ΟΟΞ� ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ Ξ� Ξ΅ΟΞ― Ξ¬Ξ»Ξ»ΞΏΟ ΟΟΞ±ΞΈΞ΅ΟΞΏΟ ΞΌΞ­ΟΞΏΟ ΞΊΞ±ΞΉ Ξ½Ξ± ΟΟΞ½ΞΏΞ΄Ξ΅ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ€ΟΟΞΏΟΞΏΞΉΞ·ΞΌΞ­Ξ½ΞΏ ΞΟΟΟΟΞ±ΟΞΊΟ ΞΞ΅Ξ»ΟΞ―ΞΏ Ξ Ξ»Ξ·ΟΞΏΟΞΏΟΞΉΟΞ½ (ESIS) ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ΄Ξ΅Ξ½ ΟΞ±Ο Ξ΅Ξ―ΟΞ΅ ΟΞ±ΟΞ±ΟΟΞ΅ΞΈΞ΅Ξ― ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ­Ξ½ΟΟ ESIS Ξ� ΟΞ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± ΟΞ·Ο ΟΟΞΏΟΟΞΏΟΞ¬Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄ΞΉΞ±ΟΞΏΟΞ΅ΟΞΉΞΊΞ¬ Ξ±ΟΟ ΟΞΉΟ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΞΏΟ ΟΞ΅ΟΞΉΞ΅Ξ―ΟΞ΅ ΟΞΏ ESIS ΟΞΏ ΞΏΟΞΏΞ―ΞΏ ΟΞ±Ο Ξ΅Ξ―ΟΞ΅ ΟΞ±ΟΞ±ΟΟΞ΅ΞΈΞ΅Ξ― ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ­Ξ½ΟΟ.\\nΞΞ΅ΟΞ±ΞΎΟ ΟΞ·Ο ΟΞ±ΟΞΏΟΞ�Ο Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞΉΞΊΞ�Ο ΟΟΞΏΟΟΞΏΟΞ¬Ο ΞΊΞ±ΞΉ ΟΞ·Ο ΟΟΞ½Ξ±ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο ΟΞ―ΟΟΟΟΞ·Ο, ΞΌΞ΅ΟΞΏΞ»Ξ±Ξ²Ξ΅Ξ― ΟΟΞΏΞ½ΞΉΞΊΞ� ΟΞ΅ΟΞ―ΞΏΞ΄ΞΏΟ ΞΌΞ΅Ξ»Ξ­ΟΞ·Ο Ξ΄Ξ­ΞΊΞ± (10) Ξ·ΞΌΞ΅ΟΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½, ΟΟΟΞ΅ Ξ½Ξ± ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞ³ΞΊΟΞ―Ξ½Ξ΅ΟΞ΅ ΟΞΉΟ ΟΟΞΏΟΟΞΏΟΞ­Ο ΞΊΞ±ΞΉ Ξ½Ξ± Ξ±ΞΎΞΉΞΏΞ»ΞΏΞ³Ξ�ΟΞ΅ΟΞ΅ ΟΞΉΟ ΟΟΞ½Ξ­ΟΞ΅ΞΉΞ΅Ο ΟΞΏΟΟ ΟΟΞΏΞΊΞ΅ΞΉΞΌΞ­Ξ½ΞΏΟ Ξ½Ξ± Ξ»Ξ¬Ξ²Ξ΅ΟΞ΅ ΟΞ΅ΞΊΞΌΞ·ΟΞΉΟΞΌΞ­Ξ½Ξ· Ξ±ΟΟΟΞ±ΟΞ·. ΞΞ΅Ξ½ ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ΄Ξ΅ΟΟΞ΅Ξ―ΟΞ΅ ΟΞ·Ξ½ ΟΟΞΏΟΟΞΏΟΞ¬ ΟΟΞΉΞ½ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ­Ξ»Ξ΅ΟΟΞ· ΟΞ­Ξ½ΟΞ΅ (5) Ξ·ΞΌΞ΅ΟΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½ ΟΞ·Ο ΟΞ΅ΟΞΉΟΞ΄ΞΏΟ ΞΌΞ΅Ξ»Ξ­ΟΞ·Ο.Β \\n\"],[9],[7,\"h5\",true],[8],[0,\"ΞΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ± ΞΊΞ±ΞΉ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΟΟ Ξ±ΟΟΞ¬Ξ»Ξ΅ΞΉΞ± Ξ½ΞΏΟΞΏΞΊΞΏΞΌΞ΅ΞΉΞ±ΞΊΞ�Ο ΟΞ΅ΟΞ―ΞΈΞ±Ξ»ΟΞ·Ο. Ξ€Ξ± ΟΞ΅Ξ»Ξ΅ΟΟΞ±Ξ―Ξ± ΟΟΟΞ½ΞΉΞ± ΟΞ± Ξ±ΟΟΞ¬Ξ»ΞΉΟΟΟΞ¬ ΞΌΞΏΟ Ξ±ΟΞΎΞ�ΞΈΞ·ΞΊΞ±Ξ½ ΟΞ·ΞΌΞ±Ξ½ΟΞΉΞΊΞ¬ ΞΌΞ΅ Ξ±ΟΞΏΟΞ­Ξ»Ξ΅ΟΞΌΞ± Ξ½Ξ± Ξ­ΟΞΏΟΞ½ Ξ³Ξ―Ξ½Ξ΅ΞΉ ΞΉΞ΄ΞΉΞ±Ξ―ΟΞ΅ΟΞ± Ξ±ΞΊΟΞΉΞ²Ξ¬. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞ Ξ±ΟΞΎΞ·ΟΞ· ΟΟΞ½ Ξ±ΟΟΞ±Ξ»Ξ―ΟΟΟΟΞ½ ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΟΟΟΞ―Ο Ξ΄ΞΉΞ±ΟΞ±Ξ½Ξ� ΞΊΞ±ΞΉ ΟΞ±ΟΞ� Ξ±ΞΉΟΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ· Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ½ΟΞΌΞΉΞΌΞ·. ΞΞΉ ΟΟΞΏΞΉ ΟΞΏΟ ΟΟΞΏΞ²Ξ»Ξ­ΟΞΏΟΞ½ Ξ±Ξ½Ξ±ΟΟΞΏΟΞ±ΟΞΌΞΏΞ³Ξ� ΟΟΞ½ Ξ±ΟΟΞ±Ξ»Ξ―ΟΟΟΟΞ½, ΟΟΟΞ―Ο Ξ΅ΞΊ ΟΟΞ½ ΟΟΞΏΟΞ­ΟΟΞ½ Ξ½Ξ± ΞΊΞ±ΞΈΞΏΟΞ―ΞΆΞΏΞ½ΟΞ±ΞΉ ΟΞ± ΞΊΟΞΉΟΞ�ΟΞΉΞ±, ΞΏΟΞΉΟΞΌΞ­Ξ½Ξ± ΞΊΞ±ΞΉ Ξ΅ΟΞ»ΞΏΞ³Ξ± Ξ³ΞΉΞ± ΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, Ξ²Ξ¬ΟΞ΅ΞΉ ΟΟΞ½ ΞΏΟΞΏΞ―ΟΞ½ Ξ³Ξ―Ξ½Ξ΅ΟΞ±ΞΉ Ξ· Ξ±ΟΞΎΞ·ΟΞ· Ξ±ΟΟΞ�, Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΞΏΞ― (Y.A. Z1-74/4.2.2011, Ξ¦ΞΞ BΞ 292). Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ΄ΞΉΞ±ΟΞΉΟΟΟΟΞ΅ΟΞ΅ ΟΟΞΉ Ξ­ΟΞ΅ΞΉ Ξ³Ξ―Ξ½Ξ΅ΞΉ Ξ±ΟΞΎΞ·ΟΞ· ΟΟΞ± Ξ±ΟΟΞ¬Ξ»ΞΉΟΟΟΞ¬ ΟΞ±Ο ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ·Ξ½ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΟΞ±Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΊΞ±ΞΉ Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΞ΅ΟΞ΅ Ξ­Ξ³Ξ³ΟΞ±ΟΞ· Ξ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΞ� Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· Ξ³ΞΉΞ± ΟΞΏ Ξ±ΞΊΟΞΉΞ²Ξ­Ο ΟΞΏΟΞΏΟΟΟ ΟΞ·Ο Ξ±Ξ½Ξ±ΟΟΞΏΟΞ±ΟΞΌΞΏΞ³Ξ�Ο ΟΟΞ½ Ξ±ΟΟΞ±Ξ»Ξ―ΟΟΟΟΞ½ ΞΊΞ±ΟΞ¬ ΟΞΏ ΟΟΞΏΞ½ΞΉΞΊΟ Ξ΄ΞΉΞ¬ΟΟΞ·ΞΌΞ± ΟΞΏΟ ΟΞ±Ο Ξ΅Ξ½Ξ΄ΞΉΞ±ΟΞ­ΟΞ΅ΞΉ. ΞΞ¬Ξ½ Ξ· Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ±ΟΞ½Ξ΅Ξ―ΟΞ±ΞΉ Ξ½Ξ± ΟΞ±Ο ΟΞΏΟΞ·Ξ³Ξ�ΟΞ΅ΞΉ Ξ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΞ� Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· Ξ� Ξ΄Ξ΅Ξ½ ΟΞ±Ο ΞΊΞ±Ξ»ΟΟΞ΅ΞΉ Ξ· Ξ±ΟΞ¬Ξ½ΟΞ·ΟΞ� ΟΞ·Ο ΞΊΞ±ΞΉ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ΅Ξ»Ξ΅Ξ³ΟΞΈΞ΅Ξ― ΟΟΟΟΞ½ ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΟΟΞ·ΟΞ± ΟΞΏΟ ΟΟΞΏΟ Ξ±Ξ½Ξ±ΟΟΞΏΟΞ±ΟΞΌΞΏΞ³Ξ�Ο Ξ±ΟΟΞ±Ξ»Ξ―ΟΟΟΟΞ½, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�. ΞΞΉΞ΅ΞΊΞ΄Ξ―ΞΊΞ·ΟΞ· ΟΟΟΟΞ½ Ξ±ΟΟΞ΅ΟΟΟΞ�ΟΟΟ ΞΊΞ±ΟΞ±Ξ²Ξ»Ξ·ΞΈΞ­Ξ½ΟΟΞ½ ΟΞΏΟΟΞ½ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ³Ξ―Ξ½Ξ΅ΞΉ ΞΌΟΞ½ΞΏ ΞΌΞ­ΟΟ ΟΟΞ½ ΟΞΏΞ»ΞΉΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞΊΞ±ΟΟΞ·ΟΞ―ΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β Ξ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΞΌΞΏΟ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΊΞ±ΞΈΟΟΟΞ΅ΟΞ΅Ξ― Ξ� Ξ±ΟΞ½Ξ΅Ξ―ΟΞ±ΞΉ Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ΅ΞΉ ΟΞ·Ξ½ Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ· ΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΞΌΞ±ΞΉ. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ�ΟΞ΅ΟΞ΅ ΞΌΞ΅ ΟΞΏΞ½ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ� ΟΞ±Ο, ΟΟΞΏΞΊΞ΅ΞΉΞΌΞ­Ξ½ΞΏΟ Ξ½Ξ± ΟΞ±Ο Ξ±ΞΉΟΞΉΞΏΞ»ΞΏΞ³Ξ�ΟΞ΅ΞΉ Ξ· Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΟΞ±Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΟΞΏΟΟ Ξ»ΟΞ³ΞΏΟΟ ΞΊΞ±ΞΈΟΟΟΞ­ΟΞ·ΟΞ·Ο Ξ� Ξ¬ΟΞ½Ξ·ΟΞ·Ο ΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ�Ο ΟΞ·Ο Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ·Ο. ΞΞ¬Ξ½ Ξ΄Ξ΅ Ξ»Ξ¬Ξ²Ξ΅ΟΞ΅ Ξ΅ΟΞ±ΟΞΊΞ΅Ξ―Ο Ξ΅ΞΎΞ·Ξ³Ξ�ΟΞ΅ΞΉΟ, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� Ξ� ΟΟΞ·Ξ½ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΟΞ·Ο ΞΞ»Ξ»Ξ¬Ξ΄ΞΏΟ (ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΞΟΞΏΟΟΞ΅Ξ―Ξ±Ο ΞΞ΄ΞΉΟΟΞΉΞΊΞ�Ο ΞΟΟΞ¬Ξ»ΞΉΟΞ·Ο) Ξ� ΟΞ΅ ΟΞΏΟΞ΅Ξ―Ο Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ�Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ· Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΟΞ±Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ΅ΞΎΞ±ΞΊΞΏΞ»ΞΏΟΞΈΞ΅Ξ― Ξ½Ξ± Ξ±ΟΞ½Ξ΅Ξ―ΟΞ±ΞΉ ΟΞ·Ξ½ ΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� ΟΞ·Ο Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ·Ο ΞΊΞΉ Ξ­ΟΞ΅ΞΉ Ξ±ΞΉΟΞΉΞΏΞ»ΞΏΞ³Ξ�ΟΞ΅ΞΉ Ξ΅ΟΞ±ΟΞΊΟΟ ΟΞΏΟΟ Ξ»ΟΞ³ΞΏΟΟ Ξ¬ΟΞ½Ξ·ΟΞ�Ο ΟΞ·Ο, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ΄ΞΉΞ΅ΞΊΞ΄ΞΉΞΊΞ�ΟΞ΅ΟΞ΅ ΟΞΏ ΟΞΏΟΟ ΟΞ·Ο Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ·Ο ΞΌΟΞ½ΞΏ ΞΌΞ­ΟΟ ΟΟΞ½ ΟΞΏΞ»ΞΉΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞΊΞ±ΟΟΞ·ΟΞ―ΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β Ξ Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ· ΟΞΏΟ ΞΌΞΏΟ Ξ΄Ξ―Ξ½Ξ΅ΞΉ Ξ· Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΞΌΞΏΟ Ξ³ΞΉΞ± Ξ­Ξ½Ξ± ΟΟΞΏΟΞ±Ξ―ΞΏ ΟΞΏΟ ΞΌΞΏΟ ΟΟΞ½Ξ­Ξ²Ξ· Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΌΞΉΞΊΟΟΟΞ΅ΟΞ· Ξ±ΟΟ ΟΞΏ ΞΊΟΟΟΞΏΟ Ξ΅ΟΞΉΟΞΊΞ΅ΟΞ�Ο ΟΞΏΟ Ξ±ΟΟΞΏΞΊΞΉΞ½Ξ�ΟΞΏΟ ΞΌΞΏΟ ΞΊΞ±ΞΉ Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ ΞΊΞ±ΞΈΟΟΟΞ΅ΟΞ΅Ξ― ΟΞΏΞ»Ο Ξ½Ξ± ΞΌΞΏΟ ΟΞ·Ξ½ ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ΅ΞΉ. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞ£ΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ Ξ¬ΟΞ½Ξ·ΟΞ·, ΞΊΞ±ΞΈΟΟΟΞ­ΟΞ·ΟΞ· Ξ� Ξ΄ΞΉΞ±ΟΞΏΟΞ¬ Ξ΅ΞΊΟΞΉΞΌΞ·ΟΞ­Ξ±Ο ΞΆΞ·ΞΌΞΉΞ¬Ο ΟΞΏΟ Ξ±ΟΞΏΟΞ¬ ΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ·Ο ΟΞ»ΞΉΞΊΟΞ½ ΞΆΞ·ΞΌΞΉΟΞ½ ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½Ξ΅ΟΟΞ΅ ΟΟΞ·Ξ½ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΟΞ·Ο ΞΞ»Ξ»Ξ¬Ξ΄ΞΏΟ-ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΞΟΞΏΟΟΞ΅Ξ―Ξ±Ο ΞΞ΄ΞΉΟΟΞΉΞΊΞ�Ο ΞΟΟΞ¬Ξ»ΞΉΟΞ·Ο βΞ€ΞΌΞ�ΞΌΞ± ΞΞΉΞ΄ΞΉΞΊΟΞ½ ΞΟΞΏΟΟΞΉΞΊΟΞ½ ΞΞ΅ΞΌΞ¬ΟΟΞ½ ΞΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο ΞΞ³ΞΏΟΞ¬Ο (ΞΞ»Ξ΅ΟΞΈΞ΅ΟΞ―ΞΏΟ ΞΞ΅Ξ½ΞΉΞΆΞ­Ξ»ΞΏΟ 21, T.K. 102 50, ΟΞ·Ξ».2103205225-255-253-235). ΞΞΉΞ± ΟΞ·Ξ½ Ξ­Ξ³Ξ΅ΟΟΞ· Ξ΅Ξ½Ξ΄Ξ΅ΟΟΞΌΞ΅Ξ½ΟΞ½ Ξ±ΟΟΞΉΞΊΟΞ½ Ξ±ΞΎΞΉΟΟΞ΅ΟΞ½ Ξ±ΟΞΌΟΞ΄ΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± ΟΞΏΞ»ΞΉΟΞΉΞΊΞ¬ Ξ΄ΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"4.Β Β Β ΞΞ½Ο Ξ· Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΞΌΞΏΟ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΊΞ¬Ξ»ΟΟΞ΅ ΟΞ± Ξ­ΞΎΞΏΞ΄Ξ± Ξ³ΞΉΞ± ΞΌΞΉΞ± ΟΟΟΟΟΞ±ΟΞ· Ξ½ΞΏΟΞ·Ξ»Ξ΅Ξ―Ξ± ΞΌΞΏΟ ΟΞ΅ ΞΉΞ΄ΞΉΟΟΞΉΞΊΟ Ξ½ΞΏΟΞΏΞΊΞΏΞΌΞ΅Ξ―ΞΏ Ξ±ΟΞ½Ξ�ΞΈΞ·ΞΊΞ΅ Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»Ξ΅ΞΉ ΟΞΏ Ξ¦Ξ Ξ ΟΞΏΟ ΟΞΉΞΌΞΏΞ»ΞΏΞ³Ξ―ΞΏΟ ΟΞΏΟ ΟΞ·Ο ΟΟΞ­Ξ²Ξ±Ξ»Ξ±. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞΟΟΞΉΞΊΞ¬ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±Ξ½Ξ±ΟΟΞ­ΞΎΞ΅ΟΞ΅ ΟΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ� ΟΞ±Ο, ΟΟΞΏΞΊΞ΅ΞΉΞΌΞ­Ξ½ΞΏΟ Ξ½Ξ± Ξ΄ΞΉΞ±ΟΞΉΟΟΟΟΞ΅ΟΞ΅ Ξ΅Ξ¬Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ ΟΞ΅ Ξ±ΟΟΞ�Ξ½ ΟΟΞΏΟ ΟΞΏΟ ΟΟΞΏΞ²Ξ»Ξ­ΟΞ΅ΞΉ ΟΟΞΉ Ξ΅ΟΞ΅Ξ―Ο Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½Ξ΅ΟΟΞ΅ ΞΌΞ΅ ΟΞΏ Ξ¦.Ξ .Ξ. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ΄Ξ΅Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ ΟΞ­ΟΞΏΞΉΞΏΟ ΟΟΞΏΟ ΞΊΞΉ Ξ­ΟΞ΅ΟΞ΅ Ξ�Ξ΄Ξ· ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ΅ΞΉ ΟΞΏ Ξ¦.Ξ .Ξ, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ· Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΟΞ±Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ΅ΞΎΞ±ΞΊΞΏΞ»ΞΏΟΞΈΞ΅Ξ― Ξ½Ξ± Ξ±ΟΞ½Ξ΅Ξ―ΟΞ±ΞΉ ΟΞ·Ξ½ ΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� ΟΞΏΟ Ξ¦.Ξ .Ξ ΞΊΞ±ΞΉ Ξ±ΟΞΏΟ Ξ­ΟΞ΅ΞΉ Ξ±ΞΉΟΞΉΞΏΞ»ΞΏΞ³Ξ�ΟΞ΅ΞΉ Ξ΅ΟΞ±ΟΞΊΟΟ ΟΞΏΟΟ Ξ»ΟΞ³ΞΏΟΟ Ξ¬ΟΞ½Ξ·ΟΞ�Ο ΟΞ·Ο, Ξ΄ΞΉΞ΅ΞΊΞ΄Ξ―ΞΊΞ·ΟΞ· ΟΞΏΟ Ξ΅Ξ½ Ξ»ΟΞ³Ο ΟΞΏΟΞΏΟ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ³Ξ―Ξ½Ξ΅ΞΉ ΞΌΟΞ½ΞΏ ΞΌΞ­ΟΟ ΟΟΞ½ ΟΞΏΞ»ΞΉΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞΊΞ±ΟΟΞ·ΟΞ―ΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"5.Β Β Β Ξ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΞΌΞΏΟ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ΄Ξ΅ ΞΌΞ΅ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞ½Ξ΅ΞΉ Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±ΞΎΞ―Ξ± Ξ΅ΞΎΞ±Ξ³ΞΏΟΞ¬Ο ΟΞΏΟ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ�ΟΞΉΞΏΟ ΟΟΞΌΞ²ΞΏΞ»Ξ±Ξ―ΞΏΟ ΞΌΞΏΟ. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ�Ο Ξ­ΟΞ΅ΞΉ ΟΟΞΏΟΟΞ­ΟΟΞ· Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±ΞΎΞ―Ξ± Ξ΅ΞΎΞ±Ξ³ΞΏΟΞ¬Ο ΟΞΏΟ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ·ΟΞ―ΞΏΟ ΟΟΞΌΞ²ΞΏΞ»Ξ±Ξ―ΞΏΟ, ΟΞ·Ξ½ ΞΏΟΞΏΞ―Ξ± ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ΅ΞΉ ΟΞ΅ ΞΊΞ¬ΞΈΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ»ΟΟΞ·Ο ΟΞ·Ο Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο (Ξ¬Ο. 29 ΟΞ±Ο. 4 Ξ΅Ξ΄. Ξ³ ΟΞΏΟ Ξ½. 2496/1997, Ξ¦ΞΞ ΞΞ 87). Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ΅Ξ½Ξ΄Ξ΅ΟΟΞΌΞ΅Ξ½Ξ·Ο Ξ±ΞΌΟΞΉΟΞ²Ξ�ΟΞ·ΟΞ·Ο Ξ±Ξ½Ξ±ΟΞΏΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞ·Ξ½ Ξ±ΞΎΞ―Ξ± Ξ΅ΞΎΞ±Ξ³ΞΏΟΞ¬Ο ΟΞΏΟ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ·ΟΞ―ΞΏΟ ΟΟΞΌΞ²ΞΏΞ»Ξ±Ξ―ΞΏΟ ΟΞ±Ο, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ·Ξ½ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΟΞ·Ο ΞΞ»Ξ»Ξ¬Ξ΄ΞΏΟ-ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΞΟΞΏΟΟΞ΅Ξ―Ξ±Ο ΞΞ΄ΞΉΟΟΞΉΞΊΞ�Ο ΞΟΟΞ¬Ξ»ΞΉΟΞ·Ο-Ξ€ΞΌΞ�ΞΌΞ± ΞΞΉΞ΄ΞΉΞΊΟΞ½ ΞΟΞΏΟΟΞΉΞΊΟΞ½ ΞΞ΅ΞΌΞ¬ΟΟΞ½ ΞΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο ΞΞ³ΞΏΟΞ¬Ο (ΞΞ»Ξ΅ΟΞΈΞ΅ΟΞ―ΞΏΟ ΞΞ΅Ξ½ΞΉΞΆΞ­Ξ»ΞΏΟ 21, Ξ€.Ξ. 102 50, ΟΞ·Ξ».:2103205225-255-253-235) Ξ� ΟΞ΅ ΟΞΏΟΞ΅Ξ―Ο Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ�Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½. ΞΞΉΞ± ΟΞ·Ξ½ Ξ­Ξ³Ξ΅ΟΟΞ· Ξ΅Ξ½Ξ΄Ξ΅ΟΟΞΌΞ΅Ξ½ΟΞ½ Ξ±ΟΟΞΉΞΊΟΞ½ Ξ±ΞΎΞΉΟΟΞ΅ΟΞ½ Ξ±ΟΞΌΟΞ΄ΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± ΟΞΏΞ»ΞΉΟΞΉΞΊΞ¬ Ξ΄ΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"6.Β Β Β Ξ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΞΌΞΏΟ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΟΟΟΟΞ΅ΟΟΞ΅. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο Ξ³ΞΉΞ± Ξ½Ξ± ΟΟΞ½Ξ΅ΟΞ―ΟΟ Ξ½Ξ± Ξ΅Ξ―ΞΌΞ±ΞΉ Ξ±ΟΟΞ±Ξ»ΞΉΟΞΌΞ­Ξ½ΞΏΟ;\\nΞ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ· Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΟΞ±Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΟΟΟΟΞ΅ΟΟΞ΅ΞΉ, Ξ΅Ξ½Ξ΅ΟΞ³ΞΏΟΞΏΞΉΞ΅Ξ―ΟΞ±ΞΉ ΟΞΏ Β«ΞΞ³Ξ³ΟΞ·ΟΞΉΞΊΟ ΞΞ΅ΟΞ¬Ξ»Ξ±ΞΉΞΏ ΞΞ΄ΞΉΟΟΞΉΞΊΞ�Ο ΞΟΟΞ¬Ξ»ΞΉΟΞ·Ο ΞΟΞ�ΟΒ», Ξ­Ξ½Ξ± Ξ½ΞΏΞΌΞΉΞΊΟ ΟΟΟΟΟΟΞΏ ΞΉΞ΄ΞΉΟΟΞΉΞΊΞΏΟ Ξ΄ΞΉΞΊΞ±Ξ―ΞΏΟ, ΞΌΞ΅ ΟΟΟΟΞΏ ΟΞ·Ξ½ ΟΟΞΏΟΟΞ±ΟΞ―Ξ± Ξ±ΟΟΞ±Ξ»ΞΉΟΞΌΞ­Ξ½ΟΞ½ ΟΟΞΏΞ½ ΞΊΞ»Ξ¬Ξ΄ΞΏ ΞΆΟΞ�Ο ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΟΟΟΞ΅ΟΟΞ·Ο Ξ� Ξ±Ξ½Ξ¬ΞΊΞ»Ξ·ΟΞ·Ο ΟΞ·Ο Ξ¬Ξ΄Ξ΅ΞΉΞ±Ο Ξ»Ξ΅ΞΉΟΞΏΟΟΞ³Ξ―Ξ±Ο ΟΞ·Ο Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο ΟΞΏΟΟ Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ·Ο. Ξ€ΞΏ ΞΞ³Ξ³ΟΞ·ΟΞΉΞΊΟ ΟΞ΅Ξ»Ξ΅Ξ― ΟΟΟ ΟΞ·Ξ½ Ξ΅ΟΞΏΟΟΞ΅Ξ―Ξ± ΞΊΞ±ΞΉ ΟΞΏΞ½ Ξ­Ξ»Ξ΅Ξ³ΟΞΏ ΟΞ·Ο Ξ€ΟΞ¬ΟΞ΅ΞΆΞ±Ο ΟΞ·Ο ΞΞ»Ξ»Ξ¬Ξ΄ΞΏΟ. Ξ£ΞΊΞΏΟΟΟ ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ· Ξ΄ΞΉΞ±ΟΞ�ΟΞ·ΟΞ· ΞΊΞ±ΞΉ ΞΌΞ΅ΟΞ±Ξ²Ξ―Ξ²Ξ±ΟΞ· ΟΞΏΟ ΟΟΞ½ΟΞ»ΞΏΟ Ξ� ΞΌΞ­ΟΞΏΟΟ ΟΞΏΟ ΟΞ±ΟΟΞΏΟΟΞ»Ξ±ΞΊΞ―ΞΏΟ ΞΆΟΞ�Ο ΟΟΟ Ξ΅ΞΊΞΊΞ±ΞΈΞ¬ΟΞΉΟΞ· Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο Ξ΅ΟΞ±ΞΉΟΞ―Ξ±Ο ΟΞ΅ Ξ¬Ξ»Ξ»Ξ· Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� Ξ� ΟΞ΅ Ξ¬Ξ»Ξ»Ξ΅Ο Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ­Ο Ξ΅ΟΞΉΟΞ΅ΞΉΟΞ�ΟΞ΅ΞΉΟ. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ±ΟΟΟ ΞΊΞ±ΟΞ±ΟΟΞ΅Ξ― Ξ±Ξ½Ξ­ΟΞΉΞΊΟΞΏ, ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»Ξ΅ΟΞ±ΞΉ Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ· Ξ­Ξ½Ξ±Ξ½ΟΞΉ ΟΞ·Ο Ξ±ΞΎΞ―Ξ±Ο ΟΟΞ½ ΟΟΞΌΞ²ΞΏΞ»Ξ±Ξ―ΟΞ½ Ξ±ΟΟΟΞ½ Ξ±Ξ»Ξ»Ξ¬ ΞΊΞ±ΞΉ Ξ­Ξ½Ξ±Ξ½ΟΞΉ Ξ΅ΞΊΞΊΟΞ΅ΞΌΟΞ½ ΞΆΞ·ΞΌΞΉΟΞ½ ΞΊΞ±ΞΉ ΟΞ»Ξ·ΟΟΟΞ­ΟΞ½ ΟΞ±ΟΞΏΟΟΞ½ (Ξ΅ΞΎΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ ΞΏΞΉ ΟΟΞΌΟΞ»Ξ·ΟΟΞΌΞ±ΟΞΉΞΊΞ­Ο ΞΊΞ±Ξ»ΟΟΞ΅ΞΉΟ Ξ½ΞΏΟΞΏΞΊΞΏΞΌΞ΅ΞΉΞ±ΞΊΞ�Ο ΟΞ΅ΟΞ―ΞΈΞ±Ξ»ΟΞ·Ο), ΞΌΞ΅ Ξ²Ξ¬ΟΞ· ΟΞ± Ξ±Ξ½ΟΟΞ±ΟΞ± ΟΟΞΉΞ± Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ·Ο ΟΞΏΟ Ξ±Ξ½Ξ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΞΏ Ξ±Ο.7 ΟΞΏΟ Ξ½. 3867/2010 (Ξ¦ΞΞ ΞΞ 128). ΞΞΉΞ΄ΞΉΞΊΟΟΞ΅ΟΞ± ΟΞ΅ ΟΟΞΉ Ξ±ΟΞΏΟΞ¬ ΟΞΏΞ½ ΞΊΞ»Ξ¬Ξ΄ΞΏ ΟΞΏΟ Ξ±ΟΟΞΏΞΊΞΉΞ½Ξ�ΟΞΏΟ, ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ· Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΟΞΏΟ Ξ±ΟΟΞ±Ξ»ΞΉΟΞΌΞ­Ξ½ΞΏΟ ΟΟΟΟΞ΅ΟΟΞ΅ΞΉ, Ξ΅Ξ½Ξ΅ΟΞ³ΞΏΟΞΏΞΉΞ΅Ξ―ΟΞ±ΞΉ ΞΏ ΟΞΏΟΞ­Ξ±Ο ΟΞΏΟ ΞΟΞΉΞΊΞΏΟΟΞΉΞΊΞΏΟ ΞΞ΅ΟΞ±Ξ»Ξ±Ξ―ΞΏΟ ΞΌΟΞ½ΞΏ Ξ³ΞΉΞ± ΟΞΏΞ½ ΞΊΞ―Ξ½Ξ΄ΟΞ½ΞΏ Ξ±ΟΟΞΉΞΊΞ�Ο Ξ΅ΟΞΈΟΞ½Ξ·Ο Ξ­Ξ½Ξ±Ξ½ΟΞΉ ΟΟΞ―ΟΟΞ½ Ξ±ΟΟ Ξ±ΟΟΞΏΞΊΞΉΞ½Ξ·ΟΞΉΟΟΞΉΞΊΞ¬ Ξ±ΟΟΟΞ�ΞΌΞ±ΟΞ±. Ξ£ΟΞ΅ΟΞΉΞΊΞ� ΟΞ»Ξ·ΟΞΏΟΟΟΞ·ΟΞ· Ξ³ΞΉΞ± Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ­Ο Ξ΅ΟΞ±ΞΉΟΞ―Ξ΅Ο ΟΞΏΟ Ξ­ΟΞΏΟΞ½ ΟΟΟΟΞ΅ΟΟΞ΅ΞΉ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ»Ξ¬Ξ²ΞΏΟΞ½ ΞΏΞΉ Ξ΅Ξ½Ξ΄ΞΉΞ±ΟΞ΅ΟΟΞΌΞ΅Ξ½ΞΏΞΉ Ξ±ΟΟ ΟΞ·Ξ½ Ξ€ΟΞ¬ΟΞ΅ΞΆΞ± ΟΞ·Ο ΞΞ»Ξ»Ξ¬Ξ΄ΞΏΟ (ΞΟΞΏΟΟΞ΅Ξ―Ξ± ΞΞ΄ΞΉΟΟΞΉΞΊΞ�Ο ΞΟΟΞ¬Ξ»ΞΉΟΞ·Ο).\\n\"],[9],[7,\"p\",true],[8],[0,\"7.Β Β Β ΞΞ½Ο ΟΟΞΆΞ·ΟΞ�ΟΞ±ΞΌΞ΅ ΞΌΞ΅ ΟΞΏΞ½ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ� ΞΌΞΏΟ Ξ­Ξ½Ξ± ΟΟΞ³ΞΊΞ΅ΞΊΟΞΉΞΌΞ­Ξ½ΞΏ ΟΟΟΞ³ΟΞ±ΞΌΞΌΞ± Ξ±ΟΟΞ¬Ξ»ΞΉΟΞ·Ο, ΞΏΞΉ ΟΟΞΏΞΉ ΟΞΏΟ ΟΟΞΌΞ²ΞΏΞ»Ξ±Ξ―ΞΏΟ ΟΞΏΟ Ξ­Ξ»Ξ±Ξ²Ξ± Ξ΄Ξ΅Ξ½ Ξ±Ξ½ΟΞ±ΟΞΏΞΊΟΞ―Ξ½ΞΏΞ½ΟΞ±ΞΉ ΟΞ΅ Ξ±ΟΟΞ¬ ΟΞΏΟ ΟΟΞΌΟΟΞ½Ξ�ΟΞ±ΞΌΞ΅. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞΟΞ΅ΟΞ΅ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ΅Ξ½Ξ±Ξ½ΟΞ―ΟΟΞ·Ο ΟΞ΅ ΞΊΞ¬ΞΈΞ΅ ΟΟΞΏ ΟΞΏΟ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΞΏΟ ΟΞ·Ο Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο ΟΞΏΟ ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ΅ ΟΟΞΉ ΟΞ±ΟΞ΅ΞΊΞΊΞ»Ξ―Ξ½Ξ΅ΞΉ Ξ±ΟΟ ΟΞ·Ξ½ Ξ±ΟΟΞΉΞΊΞ� Ξ±Ξ―ΟΞ·ΟΞ� ΟΞ±Ο Ξ³ΞΉΞ± Ξ±ΟΟΞ¬Ξ»ΞΉΟΞ·. Ξ€ΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ±ΟΟΟ Ξ±ΟΞΊΞ΅Ξ―ΟΞ±ΞΉ ΞΌΞ΅ ΟΞ· ΟΟΞΌΟΞ»Ξ�ΟΟΟΞ· ΞΊΞ±ΞΉ Ξ±ΟΞΏΟΟΞΏΞ»Ξ� ΟΟΞ± ΞΊΞ΅Ξ½ΟΟΞΉΞΊΞ¬ Ξ³ΟΞ±ΟΞ΅Ξ―Ξ± ΟΞ·Ο Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ�Ο Ξ΅ΟΞ±ΞΉΟΞ―Ξ±Ο ΟΞΏΟ ΟΟΞ½Ξ·ΞΌΞΌΞ­Ξ½ΞΏΟ ΟΟΞΏ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ�ΟΞΉΞΏ Ξ΅Ξ½ΟΟΟΞΏΟ Ξ΄Ξ�Ξ»ΟΟΞ·Ο Ξ΅Ξ½Ξ±Ξ½ΟΞ―ΟΟΞ·Ο. Ξ€ΞΏ Ξ­Ξ½ΟΟΟΞΏ Ξ΄Ξ�Ξ»ΟΟΞ·Ο Ξ΅Ξ½Ξ±Ξ½ΟΞ―ΟΟΞ·Ο Ξ±ΟΞΏΟΟΞ­Ξ»Ξ»Ξ΅ΟΞ±ΞΉ ΞΌΞ΅ ΟΟΟΟΞ·ΞΌΞ­Ξ½Ξ· Ξ΅ΟΞΉΟΟΞΏΞ»Ξ� ΞΌΞ­ΟΞ± ΟΞ΅ Ξ­Ξ½Ξ± (1) ΞΌΞ�Ξ½Ξ± Ξ±ΟΟ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ· ΟΞΏΟ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ·ΟΞ―ΞΏΟ βΟΟΞΌΞ²ΞΏΞ»Ξ±Ξ―ΞΏΟ. Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ±ΟΞΊΞ�ΟΞ΅ΟΞ΅ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ΅Ξ½Ξ±Ξ½ΟΞ―ΟΟΞ·Ο, ΟΞΏ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ�ΟΞΉΞΏ Ξ±ΞΊΟΟΟΞ½Ξ΅ΟΞ±ΞΉ Ξ±ΟΟ Ξ΅Ξ½Ξ¬ΟΞΎΞ΅ΟΟ ΞΊΞ±ΞΉ ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ±ΞΉ ΟΟΞΉ ΟΞΏΟΞ­ Ξ΄Ξ΅Ξ½ ΟΟΞΏΞ³ΟΞ¬ΟΞ·ΞΊΞ΅ Ξ· ΟΟΞΌΞ²Ξ±ΟΞ· Ξ±ΟΟΞ¬Ξ»ΞΉΟΞ·Ο. ΞΞΉΞ΅ΟΞΊΟΞΉΞ½Ξ―ΞΆΞ΅ΟΞ±ΞΉ ΟΟΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ΅Ξ½Ξ±Ξ½ΟΞ―ΟΟΞ·Ο Ξ΄Ξ΅Ξ½ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ±ΟΞΊΞ·ΞΈΞ΅Ξ― Ξ΅Ξ¬Ξ½ ΞΌΞ­ΟΟΞΉ ΟΞ·Ξ½ ΟΞ±ΟΞ¬Ξ΄ΞΏΟΞ· ΟΞ·Ο ΟΟΟΟΞ·ΞΌΞ­Ξ½Ξ·Ο Ξ΅ΟΞΉΟΟΞΏΞ»Ξ�Ο ΟΟΞΏ ΟΞ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―ΞΏ Ξ�/ ΞΊΞ±ΞΉ ΞΌΞ΅ΟΞ¬ Ξ±Ο' Ξ±ΟΟΞ� ΞΊΞ±ΞΉ ΞΌΞ­ΟΟΞΉ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ� ΟΞ·Ο Ξ±ΟΟ ΟΞ·Ξ½ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� Ξ΅ΟΞ±ΞΉΟΞ―Ξ± Ξ­ΟΞ΅ΞΉ Ξ΅ΟΞ­Ξ»ΞΈΞ΅ΞΉ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΟΟ ΞΊΞ―Ξ½Ξ΄ΟΞ½ΞΏΟ ΞΌΞ΅ Ξ²Ξ¬ΟΞ· ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· ΟΞΏΟ Ξ­ΟΞ΅ΞΉ Ξ�Ξ΄Ξ· ΟΟΞΏΞ³ΟΞ±ΟΞ΅Ξ―.\\n\"],[9],[7,\"h5\",true],[8],[0,\"ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΏΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΟΞ΅ΞΉ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΞΏ Ξ΄Ξ±Ξ½Ξ΅ΞΉΟΟΞ�Ο Ξ½Ξ± ΞΌΞ΅ΟΞ±Ξ²ΞΉΞ²Ξ¬ΟΞ΅ΞΉ ΟΞ± ΟΟΞΏΟΟΟΞΉΞΊΞ¬ ΞΌΞΏΟ Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½Ξ± ΟΞ΅ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΟΟΞΏΞΊΞ΅ΞΉΞΌΞ­Ξ½ΞΏΟ Ξ½Ξ± ΞΌΞ΅ ΞΊΞ±Ξ»Ξ­ΟΞ΅ΞΉ Ξ³ΞΉΞ± Ξ»Ξ·ΞΎΞΉΟΟΟΞΈΞ΅ΟΞΌΞ· ΞΏΟΞ΅ΞΉΞ»Ξ� ΞΌΞΏΟ;\\nΞ ΟΞΉΞ½ Ξ±ΟΟ ΞΊΞ¬ΞΈΞ΅ Ξ΅Ξ½Ξ­ΟΞ³Ξ΅ΞΉΞ± Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ�Ο ΟΞ±Ο Ξ³ΞΉΞ± Ξ»Ξ·ΞΎΞΉΟΟΟΞΈΞ΅ΟΞΌΞ· ΞΏΟΞ΅ΞΉΞ»Ξ� ΞΏ Ξ΄Ξ±Ξ½Ξ΅ΞΉΟΟΞ�Ο ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΞ²Ξ΅Ξ²Ξ±ΞΉΟΟΞ΅ΞΉ ΞΌΞ±ΞΆΞ― ΟΞ±Ο ΟΞΉΟ ΞΏΟΞ΅ΞΉΞ»Ξ­Ο ΟΞ±Ο ΞΌΞ΅ ΞΊΞ¬ΞΈΞ΅ Ξ΄ΞΉΞ±ΞΈΞ­ΟΞΉΞΌΞΏ ΟΟΟΟΞΏ, Ξ½Ξ± ΟΞ±ΟΟΞΏΟΞΏΞΉΞ�ΟΞ΅ΞΉ ΟΞ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± ΟΞ±Ο ΞΊΞ±ΞΉ Ξ½Ξ± ΟΞ±Ο Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΟΞ΅ΞΉ Ξ³ΞΉΞ± ΟΞ· Ξ΄ΞΉΞ±Ξ²Ξ―Ξ²Ξ±ΟΞ· ΟΟΞ½ Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ ΟΞ±Ο ΟΞ΅ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ½Ξ± ΞΌΞ΅ ΞΊΞ±Ξ»ΞΏΟΞ½ ΞΏΞΉ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο Ξ±ΟΟ Ξ±ΟΟΟΟΞ·ΟΞΏ Ξ±ΟΞΉΞΈΞΌΟ ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΏΟ;\\nΞΟΞΉ. ΞΞΉ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΏΟΞ΅Ξ―Ξ»ΞΏΟΞ½ Ξ½Ξ± Ξ­ΟΞΏΟΞ½ Ξ΅ΞΌΟΞ±Ξ½Ξ� ΟΞΏΞ½ Ξ±ΟΞΉΞΈΞΌΟ ΟΟΞΏΞ­Ξ»Ξ΅ΟΟΞ·Ο ΞΊΞ»Ξ�ΟΞ·Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β Ξ ΞΏΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ· ΟΟΞΌΟΟΞ½Ξ· ΞΌΞ΅ ΟΞΏ Ξ½ΟΞΌΞΏ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ± ΟΞΏΟ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΞΊΞΏΞ»ΞΏΟΞΈΞ΅Ξ―ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΉΟ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ ΞΊΞ±ΞΉ ΟΟΟΞ΅ ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ±ΞΉ ΞΏΞ»ΞΏΞΊΞ»Ξ·ΟΟΞΌΞ­Ξ½Ξ· Ξ· Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ±;\\nΞΞΉ ΟΟΞ¬Ξ»Ξ»Ξ·Ξ»ΞΏΞΉ ΟΟΞ½ Ξ΅ΟΞ±ΞΉΟΞ΅ΞΉΟΞ½ Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΏΟΞ΅Ξ―Ξ»ΞΏΟΞ½ Ξ½Ξ± ΞΊΞ¬Ξ½ΞΏΟΞ½ ΟΞ±ΟΟΞΏΟΞΏΞ―Ξ·ΟΞ· ΟΟΞ½ ΟΟΞΏΞΉΟΞ΅Ξ―ΟΞ½ ΟΞΏΟ ΞΏΟΞ΅ΞΉΞ»Ξ­ΟΞ· ΞΊΞΉ Ξ΅ΟΟΟΞΏΞ½ Ξ±ΟΟΞ� ΟΟΞ±Ξ³ΞΌΞ±ΟΞΏΟΞΏΞΉΞ΅Ξ―ΟΞ±ΞΉ Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞ½ΞΏΟΞ½ Ξ³ΞΉΞ± ΟΞ·Ξ½ ΞΉΞ΄ΞΉΟΟΞ·ΟΞ¬ ΟΞΏΟΟ, ΟΞΏ ΞΏΞ½ΞΏΞΌΞ±ΟΞ΅ΟΟΞ½ΟΞΌΟ ΟΞΏΟΟ, ΟΞΏΞ½ Ξ±ΟΞΉΞΈΞΌΟ ΞΌΞ·ΟΟΟΞΏΟ ΟΞ·Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ±Ο, ΟΞ·Ξ½ ΞΊΞ±ΟΞ±Ξ³ΟΞ±ΟΞ� ΟΟΞ½ ΟΟΞ½ΞΏΞΌΞΉΞ»ΞΉΟΞ½ ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΟΞ±ΟΞ±ΞΌΞΏΞ½Ξ� ΟΞΏΟΟ Ξ³ΞΉΞ± Ξ΄ΟΞ΄Ξ΅ΞΊΞ± ΞΌΞ�Ξ½Ξ΅Ο ΟΟΞ± Ξ±ΟΟΞ΅Ξ―Ξ± ΟΞ·Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ±Ο. Ξ£ΟΞ· ΟΟΞ½Ξ­ΟΞ΅ΞΉΞ± ΞΌΟΞΏΟΞΏΟΞ½ Ξ½Ξ± ΟΟΞΏΞ²ΞΏΟΞ½ ΟΞ΅ ΞΏΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞ·Ξ½ ΞΏΟΞ΅ΞΉΞ»Ξ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"4.Β Β Β Ξ ΟΟΞΏ ΟΟΟΞ½Ξ¬ ΞΌΟΞΏΟΞΏΟΞ½ Ξ½Ξ± Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΏΟΞ½ ΞΌΞ±ΞΆΞ― ΞΌΞΏΟ ΞΏΞΉ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο;\\nΞ Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ±ΟΟΞ―ΟΞ΅ΞΉ Ξ΄Ξ­ΞΊΞ± ΞΌΞ­ΟΞ΅Ο (10) Ξ±ΟΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ΅Ξ― Ξ»Ξ·ΞΎΞΉΟΟΟΞΈΞ΅ΟΞΌΞ· Ξ· ΞΏΟΞ΅ΞΉΞ»Ξ� ΞΊΞ±ΞΉ ΟΟΞΉ Ξ½ΟΟΞ―ΟΞ΅ΟΞ±. ΞΞΉ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ Ξ±Ξ»Ξ»Ξ¬ ΞΊΞ±ΞΉ ΞΏΞΉ Ξ―Ξ΄ΞΉΞΏΞΉ ΞΏΞΉ Ξ΄Ξ±Ξ½Ξ΅ΞΉΟΟΞ­Ο Ξ΅ΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΏΟΞ½ ΞΌΞ±ΞΆΞ― ΟΞ±Ο ΞΌΟΞ½ΞΏ ΟΞΉΟ Ξ΅ΟΞ³Ξ¬ΟΞΉΞΌΞ΅Ο Ξ·ΞΌΞ­ΟΞ΅Ο, Ξ±ΟΟ ΟΞΉΟ 09:00 Ξ­ΟΟ ΟΞΉΟ 20:00 ΞΊΞΉ Ξ΅ΟΟΟΞΏΞ½ Ξ­ΟΞ΅ΞΉ ΟΟΞ±Ξ³ΞΌΞ±ΟΞΏΟΞΏΞΉΞ·ΞΈΞ΅Ξ― Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· Ξ· ΟΟΟΞ½ΟΟΞ·ΟΞ± ΟΟΞ½ ΞΊΞ»Ξ�ΟΞ΅ΟΞ½ Ξ½Ξ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΌΞ―Ξ± ΟΞΏΟΞ¬ Ξ±Ξ½Ξ¬ Ξ΄Ξ΅ΟΟΞ΅ΟΞ· Ξ·ΞΌΞ­ΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"5.Β Β Β ΞΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ ΞΏΞΉ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ Ξ½Ξ± ΟΟΞ½ΞΏΞΌΞΉΞ»ΞΏΟΞ½ ΞΌΞ΅ ΟΟΞ―ΟΞ± ΟΟΟΟΟΟΞ± ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ Ξ»Ξ·ΞΎΞΉΟΟΟΞΈΞ΅ΟΞΌΞ΅Ο ΞΏΟΞ΅ΞΉΞ»Ξ­Ο ΞΌΞΏΟ;\\nΞΞ΅Ξ½ Ξ΅ΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ ΟΟΞΉΟ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞ½ΞΏΟΞ½ ΟΞΏΟΟ ΞΏΞΉΞΊΞ΅Ξ―ΞΏΟΟ ΟΞ±Ο Ξ� ΟΟΞ―ΟΞΏΟΟ ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞΉΟ ΞΏΟΞ΅ΞΉΞ»Ξ­Ο ΟΞ±Ο Ξ΅ΞΊΟΟΟ Ξ΅Ξ¬Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΞ½ΞΏΟΞ΅ΞΉΞ»Ξ­ΟΞ΅Ο Ξ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ­Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"6.Β Β Β ΞΟΞΏΟΞΏΟΞ½ ΞΏΞΉ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο Ξ½Ξ± ΞΌΞ΅ ΞΊΞ±Ξ»ΞΏΟΞ½ ΟΟΞΏΞ½ Ξ΅ΟΞ³Ξ±ΟΞΉΞ±ΞΊΟ ΞΌΞΏΟ ΟΟΟΞΏ;\\nΞΟΞ½ΞΏ ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ­ΟΞ΅ΟΞ΅ Ξ΄Ξ·Ξ»ΟΟΞ΅ΞΉ ΟΞΏ ΟΞ·Ξ»Ξ­ΟΟΞ½ΞΏ Ξ΅ΟΞ³Ξ±ΟΞ―Ξ±Ο ΟΟ ΟΞΏ ΞΌΞΏΞ½Ξ±Ξ΄ΞΉΞΊΟ Ξ±ΟΞΉΞΈΞΌΟ Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ±Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"7.Β Β Β Ξ₯ΟΞΏΟΟΞ΅ΞΏΟΞ½ΟΞ±ΞΉ ΞΏΞΉ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ Ξ½Ξ± ΞΌΞΏΟ ΟΞΏΟΞ·Ξ³Ξ�ΟΞΏΟΞ½ Ξ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΞ� Ξ²Ξ΅Ξ²Ξ±Ξ―ΟΟΞ· ΟΟΞ½ ΞΏΟΞ΅ΞΉΞ»ΟΞ½ ΞΌΞΏΟ Ξ�/ΞΊΞ±ΞΉ ΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ ΟΟΞ½ ΞΊΞ±ΟΞ±Ξ³Ξ΅Ξ³ΟΞ±ΞΌΞΌΞ­Ξ½ΟΞ½ ΟΟΞ½ΞΏΞΌΞΉΞ»ΞΉΟΞ½ ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ ΟΞΏ ΞΆΞ·ΟΞ�ΟΟ Ξ±ΟΟ Ξ±ΟΟΞ­Ο;\\nΞΞΉ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΞΏΟΟΞ΅ΟΞΌΞ­Ξ½Ξ΅Ο ΞΊΞ±ΟΟΟΞΉΞ½ ΟΟΞ΅ΟΞΉΞΊΞ�Ο Ξ±Ξ―ΟΞ·ΟΞ�Ο ΟΞ±Ο Ξ½Ξ± ΟΞ±Ο ΟΞΏΟΞ·Ξ³ΞΏΟΞ½ Ξ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΞ� Ξ²Ξ΅Ξ²Ξ±Ξ―ΟΟΞ· ΟΟΞ½ ΞΏΟΞ΅ΞΉΞ»ΟΞ½ ΟΞ±Ο Ξ�/ΞΊΞ±ΞΉ ΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ ΟΟΞ½ ΞΊΞ±ΟΞ±Ξ³Ξ΅Ξ³ΟΞ±ΞΌΞΌΞ­Ξ½ΟΞ½ ΟΟΞ½ΞΏΞΌΞΉΞ»ΞΉΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"8.Β Β Β Ξ ΟΟ ΞΌΟΞΏΟΟ Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΟ ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞΏ ΟΞΏΞΉΞ΅Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ³Ξ³Ξ΅Ξ³ΟΞ±ΞΌΞΌΞ­Ξ½Ξ΅Ο ΟΟΞΏ ΞΞ·ΟΟΟΞΏ ΞΟΞ±ΞΉΟΞ΅ΞΉΟΞ½ ΞΞ·ΞΎΞΉΟΟΟΞΈΞ΅ΟΞΌΟΞ½ ΞΟΞ΅ΞΉΞ»ΟΞ½ ΟΞ·Ο ΞΞ΅Ξ½ΞΉΞΊΞ�Ο ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·Ο Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�;\\nΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΌΞ²ΞΏΟΞ»Ξ΅ΟΞΈΞ΅Ξ―ΟΞ΅ ΟΞΏ ΞΞ·ΟΟΟΞΏ ΞΟΞ±ΞΉΟΞ΅ΞΉΟΞ½ ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±Ξ½Ξ±ΟΟΞ·ΞΌΞ­Ξ½ΞΏ ΟΟΞ·Ξ½ ΞΉΟΟΞΏΟΞ΅Ξ»Ξ―Ξ΄Ξ± ΟΞ·Ο ΞΞ΅Ξ½ΞΉΞΊΞ�Ο ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·Ο Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"9.Β Β Β ΞΞ΅Ξ½ Ξ­ΟΟ ΞΊΞ±ΞΌΞ―Ξ± Ξ»Ξ·ΞΎΞΉΟΟΟΞΈΞ΅ΟΞΌΞ· ΞΏΟΞ΅ΞΉΞ»Ξ� ΞΊΞ±ΞΉ ΞΌΞ΅ Ξ΅Ξ½ΞΏΟΞ»ΞΏΟΞ½ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο Ξ³ΞΉΞ± ΞΏΟΞ΅ΞΉΞ»Ξ� ΞΊΞ¬ΟΞΏΞΉΞΏΟ Ξ¬Ξ»Ξ»ΞΏΟ ΟΟΞΏΟΟΟΞΏΟ. Ξ€ΞΉ ΞΌΟΞΏΟΟ Ξ½Ξ± ΞΊΞ¬Ξ½Ο Ξ³ΞΉ' Ξ±ΟΟΟ;\\nΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ·Ξ½ ΞΟΟΞ� Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ Ξ ΟΞΏΟΟΟΞΉΞΊΞΏΟ Ξ§Ξ±ΟΞ±ΞΊΟΞ�ΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"10.Β Β Β Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ ΞΈΞ­Ξ»Ο Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ―Ξ»Ο ΞΌΞ―Ξ± ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ Ξ³ΞΉΞ± ΟΞ±ΟΞ±Ξ²Ξ―Ξ±ΟΞ· ΟΟΞ½ Ξ΄ΞΉΞ±ΟΞ¬ΞΎΞ΅ΟΞ½ ΟΞΏΟ Ξ½ΟΞΌΞΏΟ, ΟΞΏΟ ΞΌΟΞΏΟΟ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΟ;\\nΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"11.Β Β Β Ξ ΞΏΞΉΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΏ Ξ½ΟΞΌΞΏΟ ΟΞΏΟ ΞΏΟΞ―ΞΆΞ΅ΞΉ ΟΞΏΞ½ ΟΟΟΟΞΏ Ξ»Ξ΅ΞΉΟΞΏΟΟΞ³Ξ―Ξ±Ο ΟΟΞ½ ΞΟΞ±ΞΉΟΞ΅ΞΉΟΞ½ ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο;\\nΞ Ξ½ΟΞΌΞΏΟ 3758/2009 (ΞΞ 68), ΟΟΟΟ ΟΟΞΏΟΞΏΟΞΏΞΉΞ�ΞΈΞ·ΞΊΞ΅ ΞΌΞ΅ ΟΞΏ Ξ¬ΟΞΈΟΞΏ 36 ΟΞΏΟ Ξ½. 4038/2012 (ΞΞ 14).\\n\"],[9],[7,\"p\",true],[8],[0,\"12.Β Β Β ΞΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ½Ξ± ΞΌΞΏΟ ΟΟΞ΅ΟΟΞ΅ΞΉ ΞΏ Ξ΄Ξ±Ξ½Ξ΅ΞΉΟΟΞ�Ο Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ Ξ­ΞΎΞΏΞ΄Ξ± Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±Ξ½Ξ¬ΞΈΞ΅ΟΞ· ΟΞ·Ο Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΟΞ΅ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½;\\nΞΟΞΉ. ΞΞ΅Ξ½ Ξ΅ΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½Ξ΅ΟΟΞ΅ ΞΌΞ΅ Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ Ξ­ΞΎΞΏΞ΄Ξ± Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±Ξ½Ξ¬ΞΈΞ΅ΟΞ· ΟΞ·Ο Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΏΟΞ΅ΞΉΞ»ΟΞ½ Ξ±ΟΟ ΟΞΏ Ξ΄Ξ±Ξ½Ξ΅ΞΉΟΟΞ� ΟΟΞ·Ξ½ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"13.Β Β Β Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ ΞΏ Ξ΄Ξ±Ξ½Ξ΅ΞΉΟΟΞ�Ο Ξ΄Ξ΅Ξ½ ΞΌΞ΅ Ξ­ΟΞ΅ΞΉ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΟΞ΅ΞΉ ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞ· Ξ΄ΞΉΞ±Ξ²Ξ―Ξ²Ξ±ΟΞ· ΟΟΞ½ ΟΟΞΏΟΟΟΞΉΞΊΟΞ½ ΞΌΞΏΟ Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ ΟΞ΅ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½, ΟΞΏΟ ΞΌΟΞΏΟΟ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΟ;\\nΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ·Ξ½ ΞΟΟΞ� Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ Ξ ΟΞΏΟΟΟΞΉΞΊΞΏΟ Ξ§Ξ±ΟΞ±ΞΊΟΞ�ΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"14.Β Β Β ΞΟΞΏΟΞΏΟΞ½ ΞΏΞΉ Ξ΄ΞΉΞΊΞ·Ξ³ΟΟΞΏΞΉ Ξ�/ΞΊΞ±ΞΉ Ξ΄ΞΉΞΊΞ·Ξ³ΞΏΟΞΉΞΊΞ­Ο Ξ΅ΟΞ±ΞΉΟΞ―Ξ΅Ο Ξ½Ξ± ΟΟΞΏΞ²Ξ±Ξ―Ξ½ΞΏΟΞ½ ΟΞ΅ Ξ±Ξ½Ξ¬Ξ»ΞΏΞ³Ξ΅Ο ΟΟΞΌΟΞ΅ΟΞΉΟΞΏΟΞ­Ο ΞΌΞ΅ ΟΞΉΟ Ξ΅ΟΞ±ΞΉΟΞ―Ξ΅Ο Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΏΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½ Ξ³ΞΉΞ± Ξ»Ξ·ΞΎΞΉΟΟΟΞΈΞ΅ΟΞΌΞ΅Ο Ξ±ΟΞ±ΞΉΟΞ�ΟΞ΅ΞΉΟ ΞΊΞ±ΞΉ Ξ±Ξ½ Ξ½Ξ±ΞΉ, ΟΞΉ Ξ¬Ξ»Ξ»ΞΏ ΟΟΞΏΞ²Ξ»Ξ­ΟΞ΅ΟΞ±ΞΉ;\\nΞ£ΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞ·Ξ½ ΟΟ' Ξ±ΟΞΉΞΈ. 598/03.12.2012 ΞΏΞΌΟΟΟΞ½Ξ· ΞΞ½ΟΞΌΞΏΞ΄ΟΟΞ·ΟΞ· ΟΞΏΟ ΞΞΏΞΌΞΉΞΊΞΏΟ Ξ£ΟΞΌΞ²ΞΏΟΞ»Ξ―ΞΏΟ ΟΞΏΟ ΞΟΞ¬ΟΞΏΟΟ (Ξ€ΞΌΞ�ΞΌΞ± Ξ'), ΞΏΞΉ Ξ΄ΞΉΞΊΞ·Ξ³ΟΟΞΏΞΉ/Ξ΄ΞΉΞΊΞ·Ξ³ΞΏΟΞΉΞΊΞ­Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο Ξ΄Ξ΅Ξ½ ΟΟΞ¬Ξ³ΞΏΞ½ΟΞ±ΞΉ ΟΟΞΉΟ ΟΟΞΈΞΌΞ―ΟΞ΅ΞΉΟ ΟΞΏΟ ΞΟΞΌΞΏΟ 3758/2009 ΟΞ΅ΟΞ― ΟΟΞ½ ΞΟΞ±ΞΉΟΞ΅ΞΉΟΞ½ ΞΞ½Ξ·ΞΌΞ­ΟΟΟΞ·Ο ΞΟΞ΅ΞΉΞ»Ξ΅ΟΟΞ½. Ξ£ΟΞΌΟΟΞ½Ξ± Ξ΄Ξ΅ ΞΊΞ±ΞΉ ΞΌΞ΅ ΟΞ·Ξ½ ΟΟ' Ξ±ΟΞΉΞΈ. 49/2011 ΞΟΟΟΞ±ΟΞ· ΟΞ·Ο ΞΟΟΞ�Ο Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ Ξ ΟΞΏΟΟΟΞΉΞΊΞΏΟ Ξ§Ξ±ΟΞ±ΞΊΟΞ�ΟΞ± (ΟΟΞ·Ξ½ ΞΏΟΞΏΞ―Ξ± Ξ±Ξ½Ξ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ, ΟΟΞΌΟΟΞ½ΟΞ½ΟΞ±Ο, ΞΊΞ±ΞΉ Ξ· ΟΟ Ξ¬Ξ½Ο ΞΞ½ΟΞΌΞΏΞ΄ΟΟΞ·ΟΞ·), Ξ±ΟΞΌΟΞ΄ΞΉΞΏΞΉ Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅ΟΞΉΞ²ΞΏΞ»Ξ� ΟΟΟΟΞ½ ΞΊΟΟΟΟΞ΅ΟΞ½ ΟΞ΅ Ξ΄ΞΉΞΊΞ·Ξ³ΟΟΞΏΟΟ/Ξ΄ΞΉΞΊΞ·Ξ³ΞΏΟΞΉΞΊΞ­Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο, Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΏΞΉ ΞΏΞΉΞΊΞ΅Ξ―ΞΏΞΉ ΞΞΉΞΊΞ·Ξ³ΞΏΟΞΉΞΊΞΏΞ― Ξ£ΟΞ»Ξ»ΞΏΞ³ΞΏΞΉ. ΞΞ΅ ΟΞΏ Ξ΅Ξ½ Ξ»ΟΞ³Ο ΞΈΞ­ΞΌΞ± Ξ­ΟΞ΅ΞΉ Ξ±ΟΟΞΏΞ»Ξ·ΞΈΞ΅Ξ― ΞΊΞ±ΞΉ ΞΏ ΞΞΉΞΊΞ·Ξ³ΞΏΟΞΉΞΊΟΟ Ξ£ΟΞ»Ξ»ΞΏΞ³ΞΏΟ ΞΞΈΞ·Ξ½ΟΞ½ (ΞΞ». ΟΞΏ Ξ±ΟΟ 14.11.2014 Ξ΄Ξ΅Ξ»ΟΞ―ΞΏ ΟΟΟΞΏΟ ΟΞΏΟ Ξ.Ξ£.Ξ Ξ³ΞΉΞ± ΟΞΉΟ ΟΟΞ±ΞΊΟΞΉΞΊΞ­Ο ΟΟΞ½ Ξ΄ΞΉΞΊΞ·Ξ³ΞΏΟΞΉΞΊΟΞ½-Β«Ξ΅ΞΉΟΟΟΞ±ΞΊΟΞΉΞΊΟΞ½Β»).\\n\"],[9],[7,\"h5\",true],[8],[0,\"Ξ€Ξ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ΅Ο (ΟΟΞ±ΞΈΞ΅ΟΞ� ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ± - ΞΊΞΉΞ½Ξ·ΟΞ� ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ± - Ξ΄ΞΉΞ±Ξ΄Ξ―ΞΊΟΟΞΏ) β Ξ€Ξ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―Ξ±\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΞ­Ξ»Ο Ξ½Ξ± Ξ±Ξ»Ξ»Ξ¬ΞΎΟ Ξ΅ΟΞ±ΞΉΟΞ―Ξ± ΟΟΞ±ΞΈΞ΅ΟΞ�Ο ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ±Ο ΞΊΞ±ΞΉ ΞΌΞΏΟ ΞΆΞ·ΟΞ¬Ξ½Ξ΅ ΟΞ­Ξ»Ξ· Ξ±ΟΞΏΟΟΞ½Ξ΄Ξ΅ΟΞ·Ο. Ξ ΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ± ΟΞ»Ξ·ΟΟΟΟ;\\nΞ£ΟΞ½Ξ�ΞΈΟΟ ΟΟΞΉΟ ΟΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ ΞΏΟΞΉΟΞΌΞ­Ξ½ΞΏΟ ΟΟΟΞ½ΞΏΟ ΟΞΏΟ ΟΟΞ½Ξ¬ΟΟΞΏΟΞ½ ΞΏΞΉ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ±Ο ΞΌΞ΅ ΟΞΏΟΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ­Ο ΟΟΞΏΞ²Ξ»Ξ­ΟΞ΅ΟΞ±ΞΉ Ξ· ΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� ΟΞ­Ξ»ΞΏΟΟ Ξ±ΟΞΏΟΟΞ½Ξ΄Ξ΅ΟΞ·Ο, ΟΟΞ±Ξ½ ΞΈΞ­Ξ»Ξ΅ΟΞ΅ Ξ½Ξ± Ξ΄ΞΉΞ±ΞΊΟΟΞ΅ΟΞ΅ ΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ· ΟΟΞΉΞ½ ΟΞ·Ξ½ ΟΞ¬ΟΞΏΞ΄ΞΏ ΟΞΏΟ ΟΟΟΞ½ΞΏΟ Ξ±ΟΟΞΏΟ ΟΟΟΞ―Ο ΟΟΞ±ΞΉΟΞΉΟΟΞ·ΟΞ± ΟΞ·Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ±Ο. Ξ ΟΞ­ΟΞ΅ΞΉ, Ξ΅ΟΞΏΞΌΞ­Ξ½ΟΟ, ΞΊΞ±Ο' Ξ±ΟΟΞ�Ξ½ Ξ½Ξ± Ξ΅ΞΎΞ΅ΟΞ¬ΟΞ΅ΟΞ΅ Ξ΅Ξ¬Ξ½ ΟΟΞ¬ΟΟΞ΅ΞΉ ΟΟΞ΅ΟΞΉΞΊΟΟ ΟΟΞΏΟ ΟΟΞ· ΟΟΞΌΞ²Ξ±ΟΞ·. ΞΟΟΟΞΏΞ½ Ξ· Ξ±Ξ»Ξ»Ξ±Ξ³Ξ� ΟΞ·Ο Ξ΅ΟΞ±ΞΉΟΞ―Ξ±Ο ΟΟΞ±ΞΈΞ΅ΟΞ�Ο ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ±Ο Ξ³Ξ―Ξ½Ξ΅ΟΞ±ΞΉ Ξ³ΞΉΞ± Ξ»ΟΞ³ΞΏΟΟ ΟΞΏΟ Ξ±ΟΞΏΟΞΏΟΞ½ ΟΞ·Ξ½ ΟΟΟΟΞ· Ξ΅ΟΞ±ΞΉΟΞ―Ξ± (ΟΟ. Ξ΅ΟΞ±Ξ½Ξ±Ξ»Ξ±ΞΌΞ²Ξ±Ξ½ΟΞΌΞ΅Ξ½Ξ΅Ο ΟΞ΅ΟΞ½ΞΉΞΊΞ­Ο Ξ²Ξ»Ξ¬Ξ²Ξ΅Ο), Ξ±Ξ»Ξ»Ξ¬ ΟΞ±ΟΟΞ»Ξ± Ξ±ΟΟΞ¬ Ξ· Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΆΞ·ΟΞ¬ ΟΞ­Ξ»Ξ· Ξ±ΟΞΏΟΟΞ½Ξ΄Ξ΅ΟΞ·Ο, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ·Ξ½ ΞΞΈΞ½ΞΉΞΊΞ� ΞΟΞΉΟΟΞΏΟΞ� Ξ€Ξ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ€Ξ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―ΟΞ½ (ΞΞΞ€Ξ€).\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΞΉΞ±ΟΞ―ΟΟΟΟΞ± ΟΟΞ΅ΟΞ²ΞΏΞ»ΞΉΞΊΞ­Ο ΟΟΞ΅ΟΟΞ΅ΞΉΟ ΟΟΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΟΞΏΟ ΞΊΞΉΞ½Ξ·ΟΞΏΟ ΞΌΞΏΟ (smartphone) ΞΊΞ±ΞΉ Ξ· Ξ΅ΟΞ±ΞΉΟΞ―Ξ± ΞΉΟΟΟΟΞ―ΞΆΞ΅ΟΞ±ΞΉ ΟΟΞΉ ΟΟΞΏΞ­ΟΟΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΟΞ�ΟΞ· internet, ΟΟΞ¬Ξ³ΞΌΞ± ΟΞΏΟ Ξ΅Ξ³Ο Ξ±ΞΌΟΞΉΟΞ²Ξ·ΟΟ. Ξ€ΞΉ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞ Ξ΅ΟΞΉΞ²Ξ¬ΟΟΞ½ΟΞ· ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΟΞΏΞ­ΟΟΞ΅ΟΞ±ΞΉ ΞΌΟΞ½ΞΏ Ξ±ΟΟ ΟΟΞΌΞ²Ξ±ΟΞΉΞΊΞΏΟΟ ΟΟΞΏΟΟ ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ±ΟΞ΅Ξ―Ο, Ξ΄ΞΉΞ±ΟΞ±Ξ½Ξ΅Ξ―Ο ΞΊΞ±ΞΉ Ξ±Ξ½ΟΞΉΞ»Ξ·ΟΟΞΏΞ― Ξ±ΟΟ Ξ±ΟΟΟΞ½. ΞΞ½ ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ Ξ±Ξ½ΟΞΉΞ»Ξ·ΟΞΈΞ΅Ξ― Ξ΅ΟΞ±ΟΞΊΟΟ ΟΟΟΞ―Ο Ξ΄ΞΉΞΊΞ� ΟΞΏΟ ΟΟΞ±ΞΉΟΞΉΟΟΞ·ΟΞ± ΟΞΏ Ξ»ΟΞ³ΞΏ ΞΊΞ±ΞΉ ΟΞΏ ΟΟΞΏΟ Ξ±ΟΟΞ�Ο ΟΞ·Ο ΟΟΞ­ΟΟΞ·Ο, ΟΟΟΞ΅ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΟΞ·Ξ½ Ξ±ΞΌΟΞΉΟΞ²Ξ·ΟΞ�ΟΞ΅ΞΉ ΞΊΞ±ΞΉ Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΞ΅ΞΉ ΟΞ· Ξ΄ΞΉΞ±Ξ³ΟΞ±ΟΞ� ΟΞ·Ο ΟΟΞ­ΟΟΞ·Ο. ΞΞ΅ΟΞΉΞΊΞ­Ο ΟΞΏΟΞ­Ο ΞΏΞΉ ΟΟΟΞΊΞ΅ΟΞ­Ο ΟΟΞ½ ΞΊΞΉΞ½Ξ·ΟΟΞ½ Ξ½Ξ­Ξ±Ο Ξ³Ξ΅Ξ½ΞΉΞ¬Ο (smartphones) ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ­ΟΞΏΟΞ½ ΟΟΞΏΞ΅ΟΞΉΞ»Ξ΅Ξ³ΞΌΞ­Ξ½Ξ± ΟΞ±ΟΞ·ΞΌΞ­Ξ½Ξ± ΞΌΞ΅ΟΞΉΞΊΞ¬ ΟΞ»Ξ�ΞΊΟΟΞ± ΟΞΏΟ Ξ΅ΟΞΉΟΟΞ­ΟΞΏΟΞ½ ΟΟΞΏ ΞΊΞΉΞ½Ξ·ΟΟ Ξ½Ξ± ΞΌΟΞ±Ξ―Ξ½Ξ΅ΞΉ Ξ±ΟΟΟΞΌΞ±ΟΞ± ΟΟΞΏ internet ΞΊΞ±ΞΉ Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞ½Ξ΅ΟΞ±ΞΉ ΟΟ Ξ³ΞΉΞ± ΟΞΏΞ½ ΞΊΞ±ΞΉΟΟ Ξ� ΟΞ·Ξ½ ΟΟΞ±. ΞΟΟΟΞΏΞ½ Ξ΄Ξ΅Ξ½ Ξ΅ΟΞΉΞΈΟΞΌΞ΅Ξ―ΟΞ΅ ΟΞ·Ξ½ ΟΟΞ΅ΟΞΉΞΊΞ� Ξ±ΞΌΞ΅ΞΉΞ²ΟΞΌΞ΅Ξ½Ξ· Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞ΅Ξ½Ξ΅ΟΞ³ΞΏΟΞΏΞΉΞ�ΟΞ΅ΟΞ΅ ΟΞ± ΟΟΞ΅ΟΞΉΞΊΞ¬ ΟΞ»Ξ�ΞΊΟΟΞ± Ξ� Ξ΅ΟΟΟΞΏΞ½ Ξ΄Ξ΅Ξ½ Ξ³Ξ½ΟΟΞ―ΞΆΞ΅ΟΞ΅ ΟΟΟ Ξ½Ξ± ΟΞΏ ΞΊΞ¬Ξ½Ξ΅ΟΞ΅, Ξ½Ξ± ΞΌΞ΅ΟΞ±Ξ²Ξ΅Ξ―ΟΞ΅ ΟΞ΅ ΞΊΞ¬ΟΞΏΞΉΞΏ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ± ΞΊΞΉΞ½Ξ·ΟΞ�Ο ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ±Ο Ξ³ΞΉΞ± Ξ½Ξ± ΟΞΏ ΞΊΞ¬Ξ½ΞΏΟΞ½ Ξ±ΟΟΞΏΞ― Ξ³ΞΉΞ± Ξ΅ΟΞ¬Ο. Ξ£ΟΞ·Ξ½ ΟΟΞ½Ξ­ΟΞ΅ΞΉΞ±, ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΞΊΞ¬Ξ½Ξ΅ΟΞ΅ Ξ±ΞΌΟΞΉΟΞ²Ξ�ΟΞ·ΟΞ· ΟΟΞ½ Ξ�Ξ΄Ξ· ΟΟΞ±ΟΟΟΞ½ΟΟΞ½ ΟΟΞ΅ΟΟΞ΅ΟΞ½ ΟΟΞΏΟ ΟΞ·Ξ½ Ξ΅ΟΞ±ΞΉΟΞ―Ξ± Ξ³ΞΉΞ± Ξ½Ξ± ΟΞΉΟ Ξ΅ΟΞ±Ξ½Ξ΅ΞΎΞ΅ΟΞ¬ΟΞ΅ΞΉ. ΞΟΟΟΞΏΞ½ Ξ· Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ΄Ξ΅ ΟΞ±Ο ΞΉΞΊΞ±Ξ½ΞΏΟΞΏΞΉΞ�ΟΞ΅ΞΉ, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ·Ξ½ ΞΞΈΞ½ΞΉΞΊΞ� ΞΟΞΉΟΟΞΏΟΞ� Ξ€Ξ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ€Ξ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―ΟΞ½ (ΞΞΞ€Ξ€). ΞΞ¬Ξ½ Ξ΅Ξ½ΟΞΏΟΞ―ΞΆΞ΅ΟΞ±ΞΉ ΟΞ±ΟΞ±ΟΞ»Ξ±Ξ½Ξ·ΟΞΉΞΊΞ� ΟΟΞ±ΞΊΟΞΉΞΊΞ� Ξ� Ξ±ΟΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ΄ΞΉΞ΅ΟΞ΅ΟΞ½Ξ·ΟΞ· Ξ³ΞΉΞ± Ξ±ΞΈΞ­ΞΌΞΉΟΞ· Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� ΟΟΞ±ΞΊΟΞΉΞΊΞ�, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ·Ξ½ ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β Ξ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΊΞΉΞ½Ξ·ΟΞ�Ο ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ±Ο ΞΌΞ΅ ΟΟΞ΅ΟΞ½Ξ΅ΞΉ ΟΟΞ΅ΟΞ²ΞΏΞ»ΞΉΞΊΞ¬. Ξ€ΞΉ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞ ΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΞΊΞ±Ο' Ξ±ΟΟΞ�Ξ½ ΟΟΞ·Ξ½ Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ³ΞΉΞ± Ξ±ΞΌΟΞΉΟΞ²Ξ�ΟΞ·ΟΞ· ΞΊΞ±ΞΉ Ξ΅ΟΞ±Ξ½Ξ΅ΞΎΞ­ΟΞ±ΟΞ· ΟΟΞ½ ΟΟΞ΅ΟΟΞ΅ΟΞ½. ΞΟΟΟΞΏΞ½ Ξ· Ξ±ΟΞ¬Ξ½ΟΞ·ΟΞ· Ξ΄Ξ΅Ξ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΉΞΊΞ±Ξ½ΞΏΟΞΏΞΉΞ·ΟΞΉΞΊΞ�, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ·Ξ½ ΞΞΈΞ½ΞΉΞΊΞ� ΞΟΞΉΟΟΞΏΟΞ� Ξ€Ξ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ€Ξ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―ΟΞ½ (ΞΞΞ€Ξ€). Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ ΟΞ―ΞΈΞ΅ΟΞ±ΞΉ ΞΆΞ�ΟΞ·ΞΌΞ± Ξ±Ξ΄ΞΉΞ±ΟΞ¬Ξ½Ξ΅ΞΉΞ±Ο ΟΟΞΉΟ ΟΟΞ΅ΟΟΞ΅ΞΉΟ ΟΟΞ· ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±ΟΒ ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�. ΞΞ¬Ξ½ Ξ· Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ΄Ξ΅Ξ½ Ξ±ΟΞΏΞ΄Ξ΅ΟΞΈΞ΅Ξ― ΟΞΏΟΟ ΞΉΟΟΟΟΞΉΟΞΌΞΏΟ ΟΞ±Ο ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΞΊΞΏΞ»ΞΏΟΞΈΞ�ΟΞ΅ΟΞ΅ Ξ΅ΞΎΟΞ΄ΞΉΞΊΞ±ΟΟΞΉΞΊΞ� Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"4.Β Β Β Ξ£ΟΞΏΞ½ Ξ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΟΞΏΟ ΞΊΞΉΞ½Ξ·ΟΞΏΟ ΞΌΞΏΟ Ξ΄ΞΉΞ±ΟΞ―ΟΟΟΟΞ± ΟΟΞ΅ΟΟΞ΅ΞΉΟ Ξ±ΟΟ Ξ»Ξ�ΟΞ· ΞΌΞ·Ξ½ΟΞΌΞ¬ΟΟΞ½ Ξ±ΟΟ ΟΞ΅Ξ½ΟΞ±ΟΞ�ΟΞΉΞΏ Ξ½ΞΏΟΞΌΞ΅ΟΞΏ ΟΞΏΟ Ξ΄Ξ΅Ξ½ Ξ³Ξ½ΟΟΞ―ΞΆΟ. Ξ€Ξ± (ΟΟΞ΅ΟΟΟΞΉΞΊΞ¬) ΞΌΞ·Ξ½ΟΞΌΞ±ΟΞ± Ξ΅ΞΎΞ±ΞΊΞΏΞ»ΞΏΟΞΈΞΏΟΞ½ Ξ½Ξ± Ξ­ΟΟΞΏΞ½ΟΞ±ΞΉ. Ξ€ΞΉ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞ€Ξ± ΟΟΞ΅ΟΟΟΞΉΞΊΞ¬ ΞΌΞ·Ξ½ΟΞΌΞ±ΟΞ± ΟΞΏΟ Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ΅ Ξ±ΟΟ 5ΟΞ�ΟΞΉΞΏ ΞΊΟΞ΄ΞΉΞΊΟ, ΟΟΞΏΞ­ΟΟΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ Ξ΅ΟΞ±ΞΉΟΞ―Ξ΅Ο ΟΞΏΟ ΟΞ±ΟΞ­ΟΞΏΟΞ½ ΟΟΞ½Ξ΄ΟΞΏΞΌΞ·ΟΞΉΞΊΞ­Ο ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞΏΞ»ΟΞΌΞ΅ΟΞΉΞΊΞ�Ο ΟΞ»Ξ·ΟΞΏΟΟΟΞ·ΟΞ·Ο (Ξ₯Ξ Ξ ). ΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΟΟΞ΅ΟΞΉΞΊΞ� ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ·Ξ½ ΞΞΈΞ½ΞΉΞΊΞ� ΞΟΞΉΟΟΞΏΟΞ� Ξ€Ξ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ€Ξ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―ΟΞ½ (ΞΞΞ€Ξ€).\\n\"],[9],[7,\"p\",true],[8],[0,\"5.Β Β Β ΞΞ΅ΟΞ¬ Ξ±ΟΟ ΞΌΞΉΞ± ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΉΞΊΞ� ΟΟΞ½ΞΏΞΌΞΉΞ»Ξ―Ξ± ΞΊΞ±ΞΉ ΟΟΟΞ―Ο Ξ½Ξ± ΟΞΏ ΞΊΞ±ΟΞ±Ξ»Ξ¬Ξ²Ο, Ξ¬Ξ»Ξ»Ξ±ΞΎΞ± Ξ΅ΟΞ±ΞΉΟΞ―Ξ± ΟΟΞ±ΞΈΞ΅ΟΞ�Ο ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ±Ο. ΞΞ­Ξ»Ο Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΟ ΟΟΞ·Ξ½ ΟΞ±Ξ»ΞΉΞ¬ ΞΌΞΏΟ Ξ΅ΟΞ±ΞΉΟΞ―Ξ±. Ξ€ΞΉ Ξ½Ξ± ΞΊΞ¬Ξ½Ο;\\nΞ£Ξ΅ ΞΊΞ¬ΞΈΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ­ΟΞ΅ΟΞ΅ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± Ξ±Ξ»Ξ»Ξ¬ΞΎΞ΅ΟΞ΅ Ξ΅ΟΞ±ΞΉΟΞ―Ξ± ΟΟΞ±ΞΈΞ΅ΟΞ�Ο ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ±Ο ΞΏΟΞΏΟΞ΅Ξ΄Ξ�ΟΞΏΟΞ΅ ΟΞΏ ΞΈΞ΅Ξ»Ξ�ΟΞ΅ΟΞ΅. ΞΞ¬Ξ½ Ξ· Ξ±Ξ»Ξ»Ξ±Ξ³Ξ� Ξ­Ξ³ΞΉΞ½Ξ΅ ΞΌΞ΅ ΟΟΞΌΞ²Ξ±ΟΞ· Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ·, Ξ΄Ξ·Ξ». Ξ΄Ξ΅Ξ½ ΟΟΞΏΞ³ΟΞ¬ΟΞ΅ΟΞ΅ ΟΟΞ΅ΟΞΉΞΊΞ� ΟΟΞΌΞ²Ξ±ΟΞ· ΟΞ΅ ΞΊΞ¬ΟΞΏΞΉΞΏ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ±, Ξ­ΟΞ΅ΟΞ΅ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ�ΟΞ΅ΟΞ΅ Ξ±Ξ½Ξ±ΞΉΟΞΉΞΏΞ»ΞΏΞ³Ξ�ΟΟΟ Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½. ΞΞ¬Ξ½ ΞΈΞ΅ΟΟΞ΅Ξ―ΟΞ΅ ΟΟΞΉ Ξ· Ξ±Ξ»Ξ»Ξ±Ξ³Ξ� Ξ­Ξ³ΞΉΞ½Ξ΅ ΟΟΟΞ―Ο ΟΞ·Ξ½ ΟΟΞ½Ξ±Ξ―Ξ½Ξ΅ΟΞ� ΟΞ±Ο (Ξ±ΟΞΈΞ±Ξ―ΟΞ΅ΟΞ· Ξ΅Ξ½Ξ΅ΟΞ³ΞΏΟΞΏΞ―Ξ·ΟΞ·), Ξ΄Ξ·Ξ»Ξ±Ξ΄Ξ� Ξ΄Ξ΅ ΟΟΞΌΟΟΞ½Ξ�ΟΞ±ΟΞ΅ ΟΟΞ· ΞΌΞ΅ΟΞ±ΟΞΏΟΞ¬ Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ Ξ� ΟΟΞΏΟΞΏΟΞΉΞΊΞ¬, ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ΄ΞΉΞ±ΞΌΞ±ΟΟΟΟΞ·ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ·Ξ½ Ξ½Ξ­Ξ± Ξ΅ΟΞ±ΞΉΟΞ―Ξ± ΞΊΞ±ΞΉ Ξ΅ΟΟΟΞΏΞ½ Ξ΄Ξ΅Ξ½ ΞΉΞΊΞ±Ξ½ΞΏΟΞΏΞΉΞ·ΞΈΞ΅Ξ―ΟΞ΅, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟΞ·Ξ½ ΞΞΈΞ½ΞΉΞΊΞ� ΞΟΞΉΟΟΞΏΟΞ� Ξ€Ξ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ€Ξ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―ΟΞ½ (ΞΞΞ€Ξ€).Β \\n\"],[9],[7,\"p\",true],[8],[0,\"6.Β Β Β Ξ ΞΏΟ ΞΈΞ± Ξ²ΟΟ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ³ΞΉΞ± ΞΈΞ­ΞΌΞ±ΟΞ± Ξ±ΞΊΟΞΉΞ½ΞΏΞ²ΞΏΞ»Ξ―Ξ±Ο ΟΟΞ½ ΞΊΞΉΞ½Ξ·ΟΟΞ½ ΟΞ·Ξ»Ξ΅ΟΟΞ½ΟΞ½ ΞΊΞ±ΞΉ ΟΟΞ½ ΞΊΞ΅ΟΞ±ΞΉΟΞ½ ΞΊΞΉΞ½Ξ·ΟΞ�Ο ΟΞ·Ξ»Ξ΅ΟΟΞ½Ξ―Ξ±Ο;\\nΞ Ξ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ³ΞΉΞ± ΟΞ± ΞΈΞ­ΞΌΞ±ΟΞ± Ξ±ΟΟΞ¬ ΞΈΞ± Ξ²ΟΞ΅Ξ―ΟΞ΅ ΟΟΞ·Ξ½ ΞΉΟΟΞΏΟΞ΅Ξ»Ξ―Ξ΄Ξ± ΟΞ·Ο ΞΞΈΞ½ΞΉΞΊΞ�Ο ΞΟΞΉΟΟΞΏΟΞ�Ο Ξ€Ξ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ€Ξ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―ΟΞ½ (ΞΞΞ€Ξ€).\\n\"],[9],[7,\"p\",true],[8],[0,\"7.Β Β Β Ξ ΞΏΟ ΞΈΞ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΟ Ξ³ΞΉΞ± ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΉΞ±ΞΊΞ­Ο Ξ� ΟΞ±ΟΟΞ΄ΟΞΏΞΌΞΉΞΊΞ­Ο ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο;\\nΞ£ΟΞ·Ξ½ ΞΞΈΞ½ΞΉΞΊΞ� ΞΟΞΉΟΟΞΏΟΞ� Ξ€Ξ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½ΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ€Ξ±ΟΟΞ΄ΟΞΏΞΌΞ΅Ξ―ΟΞ½ (ΞΞΞ€Ξ€).\\n\"],[9],[7,\"h5\",true],[8],[0,\"ΞΞ½Ξ­ΟΞ³Ξ΅ΞΉΞ±\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β Ξ ΞΏΟ ΞΈΞ± ΞΌΟΞΏΟΞΏΟΟΞ± Ξ½Ξ± Ξ²ΟΟ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞ·Ξ½ ΟΞΉΞΌΞΏΞ»ΟΞ³Ξ·ΟΞ· ΟΟΞ½ ΟΞ±ΟΟΟΟΞ½ Ξ΅Ξ½Ξ­ΟΞ³Ξ΅ΞΉΞ±Ο ;\\nΞ Ξ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ³ΞΉΞ± ΟΞ± ΞΈΞ­ΞΌΞ±ΟΞ± Ξ±ΟΟΞ¬ ΞΈΞ± Ξ²ΟΞ΅Ξ―ΟΞ΅ ΟΟΞΉΟ ΞΉΟΟΞΏΟΞ΅Ξ»Ξ―Ξ΄Ξ΅Ο ΟΞ·Ο Ξ‘ΟΞΈΞΌΞΉΟΟΞΉΞΊΞ�Ο ΞΟΟΞ�Ο ΞΞ½Ξ­ΟΞ³Ξ΅ΞΉΞ±Ο (Ξ‘ΞΞ) ΞΊΞ±ΞΉ ΟΞ·Ο ΞΞΞ.\\n\"],[9],[7,\"h4\",true],[8],[0,\"ΞΞΉΞ¬ΟΞΏΟΞ±:\"],[9],[0,\"\\n\"],[7,\"h5\",true],[8],[0,\"ΞΞ­ΟΞ± ΞΌΞ±ΞΆΞΉΞΊΞ�Ο ΞΌΞ΅ΟΞ±ΟΞΏΟΞ¬Ο\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β Ξ ΞΏΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΟΟΞ½ ΟΞ±ΞΎΞΉΞ΄Ξ΅ΟΞΏΟΞ½ ΞΌΞ΅ Ξ±Ξ΅ΟΞΏΟΞ»Ξ¬Ξ½ΞΏ;\\nΞΞΉΞ± ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞΏ ΞΈΞ­ΞΌΞ± Ξ±ΟΟΟ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ΅Ξ―ΟΞ΅ Ξ±ΟΟ ΟΞ·Ξ½ Ξ₯ΟΞ·ΟΞ΅ΟΞ―Ξ± Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ�Ο ΞΞ΅ΟΞΏΟΞΏΟΞ―Ξ±Ο (Ξ₯.Ξ .Ξ)\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β Ξ ΞΏΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΟΞ½ Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½ ΟΞΏΟ ΞΌΞ΅ΟΞ±ΞΊΞΉΞ½ΞΏΟΞ½ΟΞ±ΞΉ ΞΌΞ΅ ΞΞ€ΞΞ Ξ� Ξ±ΟΟΞΉΞΊΞ­Ο ΟΟΞ³ΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ΅Ο;\\nΞΞΉΞ± ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞΏ ΞΈΞ­ΞΌΞ± Ξ±ΟΟΟ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ΅Ξ―ΟΞ΅ Ξ±ΟΟ ΟΞΏ Ξ₯ΟΞΏΟΟΞ³Ξ΅Ξ―ΞΏ Ξ₯ΟΞΏΞ΄ΞΏΞΌΟΞ½ ΞΊΞ±ΞΉ ΞΞ΅ΟΞ±ΟΞΏΟΟΞ½.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β Ξ ΞΏΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΟΟΞ½ ΟΞ±ΞΎΞΉΞ΄Ξ΅ΟΞΏΟΞ½ ΞΌΞ΅ ΟΞ»ΞΏΞ―ΞΏ;\\nΞΞΉΞ± ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞΏ ΞΈΞ­ΞΌΞ± Ξ±ΟΟΟ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ΅Ξ―ΟΞ΅ Ξ±ΟΟ ΟΞΏ Ξ₯ΟΞΏΟΟΞ³Ξ΅Ξ―ΞΏ ΞΞ±ΟΟΞΉΞ»Ξ―Ξ±Ο ΞΊΞ±ΞΉ ΞΞ·ΟΞΉΟΟΞΉΞΊΞ�Ο Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ�Ο.\\n\"],[9],[7,\"p\",true],[8],[0,\"4.Β Β Β Ξ ΞΏΞΉΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΟΞ½ Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½ ΟΞΏΟ ΞΌΞ΅ΟΞ±ΞΊΞΉΞ½ΞΏΟΞ½ΟΞ±ΞΉ ΞΌΞ΅ ΟΟΞ­Ξ½ΞΏ;\\nΞΞΉΞ± ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞΏ ΞΈΞ­ΞΌΞ± Ξ±ΟΟΟ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ΅Ξ―ΟΞ΅ Ξ±ΟΟ ΟΞ·Ξ½ Ξ€Ξ‘ΞΞΞΞ£Ξ\\n\"],[9],[7,\"h5\",true],[8],[0,\"Ξ€ΞΏΟΟΞΉΟΞΌΟΟ β ΟΞ±ΞΎΞ―Ξ΄ΞΉΞ±\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΞΉΞ± Ξ½Ξ± ΞΊΞ¬Ξ½Ο ΞΊΟΞ¬ΟΞ·ΟΞ· Ξ΄ΟΞΌΞ±ΟΞ―ΞΏΟ ΟΞ΅ ΞΎΞ΅Ξ½ΞΏΞ΄ΞΏΟΞ΅Ξ―ΞΏ Ξ³ΞΉΞ± Ξ΄ΞΉΞ±ΞΌΞΏΞ½Ξ� Ξ­ΞΎΞΉ Ξ·ΞΌΞ΅ΟΟΞ½ ΞΌΞΏΟ ΞΆΞ·ΟΞ�ΞΈΞ·ΞΊΞ΅ ΞΊΞ±ΞΉ ΞΊΞ±ΟΞ­Ξ²Ξ±Ξ»Ξ± ΟΟ ΟΟΞΏΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� ΟΞΏΟΟ ΟΞΏΟ Ξ±Ξ½ΟΞΉΟΟΞΏΞΉΟΞ΅Ξ― ΟΟΞ· Ξ΄ΞΉΞ±ΞΌΞΏΞ½Ξ� ΟΟΞΉΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½. Ξ€Ξ΅Ξ»ΞΉΞΊΞ¬ Ξ±Ξ½Ξ±Ξ³ΞΊΞ¬ΟΟΞ·ΞΊΞ± Ξ»ΟΞ³Ο ΟΟΞΏΟΟΞ΅ΟΟΞ΅ΟΞ½ Ξ½Ξ± Ξ±ΞΊΟΟΟΟΟ ΟΞ·Ξ½ ΞΊΟΞ¬ΟΞ·ΟΞ·, Ξ±Ξ»Ξ»Ξ¬ ΞΌΞΏΟ ΞΆΞ·ΟΞ¬Ξ½Ξ΅ Ξ±ΟΟ ΟΞΏ ΞΎΞ΅Ξ½ΞΏΞ΄ΞΏΟΞ΅Ξ―ΞΏ Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ο ΞΊΞ±ΞΉ ΟΞΏ ΟΟΟΞ»ΞΏΞΉΟΞΏ ΟΞΏΟΟ ΟΞ·Ο Ξ΄ΞΉΞ±ΞΌΞΏΞ½Ξ�Ο. ΞΞ―Ξ½Ξ±ΞΉ ΟΟΟΟΟ; ΞΞΉΞΊΞ±ΞΉΞΏΟΞΌΞ±ΞΉ Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΟ Ξ΅ΟΞΉΟΟΟΞΏΟΞ� ΟΞ·Ο ΟΟΞΏΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ�Ο;\\nΞ ΞΎΞ΅Ξ½ΞΏΞ΄ΟΟΞΏΟ Ξ΄Ξ΅ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΞΆΞ·ΟΞ¬ ΟΟΞΏΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� ΟΞΏΟ ΟΟΞ΅ΟΞ²Ξ±Ξ―Ξ½Ξ΅ΞΉ ΟΞΏ 25% ΟΞΏΟ ΟΟΞ½ΞΏΞ»ΞΉΞΊΞΏΟ ΞΊΟΟΟΞΏΟΟ Ξ΄ΞΉΞ±ΞΌΞΏΞ½Ξ�Ο, Ξ· Ξ΄Ξ΅ ΟΟΞΏΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� Ξ΄Ξ΅ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΌΞΉΞΊΟΟΟΞ΅ΟΞ· Ξ±ΟΟ ΟΞΏ Ξ±Ξ½ΟΞ―ΟΞΉΞΌΞΏ ΟΞ·Ο ΟΞΉΞΌΞ�Ο Ξ³ΞΉΞ± ΞΌΞΉΞ± ΞΌΞ­ΟΞ±. ΞΟΞΏΞΌΞ­Ξ½ΟΟ, ΟΟΞ·Ξ½ ΟΞ΅ΟΞ―ΟΟΟΟΞ� ΟΞ±Ο ΟΞ±ΟΞ±Ξ½ΟΞΌΟΟ ΟΞ±Ο ΞΆΞ·ΟΞ�ΞΈΞ·ΞΊΞ΅ ΟΟΞΏΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� ΟΟΞΉΟΞ½ Ξ·ΞΌΞ΅ΟΟΞ½. Ξ ΟΞ΅Ξ»Ξ¬ΟΞ·Ο ΟΞΏΟ Ξ­ΞΊΞ»Ξ΅ΞΉΟΞ΅ Ξ΄ΟΞΌΞ¬ΟΞΉΞΏ Ξ³ΞΉΞ± ΟΟΞΏΞΊΞ±ΞΈΞΏΟΞΉΟΞΌΞ­Ξ½Ξ· ΟΟΞΏΞ½ΞΉΞΊΞ� ΟΞ΅ΟΞ―ΞΏΞ΄ΞΏ ΞΊΞ±ΞΉ ΟΞ΅Ξ»ΞΉΞΊΞ¬ Ξ΄Ξ΅Ξ½ ΟΞΏ ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞ―Ξ·ΟΞ΅ ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± Ξ±ΟΞΏΞΆΞ·ΞΌΞΉΟΟΞ΅ΞΉ ΟΞΏΞ½ ΞΎΞ΅Ξ½ΞΏΞ΄ΟΟΞΏ ΞΌΞ΅ ΟΞΏ ΞΌΞΉΟΟ ΟΞ·Ο ΟΟΞΌΟΟΞ½Ξ·ΞΈΞ΅Ξ―ΟΞ±Ο ΟΞΉΞΌΞ�Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΞ΅ΟΞ―ΞΏΞ΄ΞΏ ΟΞΏΟ Ξ΄Ξ΅Ξ½ ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞ�ΞΈΞ·ΞΊΞ΅, Ξ΅ΞΊΟΟΟ Ξ±Ξ½ Ξ΅ΞΉΞ΄ΞΏΟΞΏΞΉΞ�ΟΞ΅ΞΉ ΟΞΏΞ½ ΞΎΞ΅Ξ½ΞΏΞ΄ΟΟΞΏ 21 Ξ·ΞΌΞ­ΟΞ΅Ο Ξ½ΟΟΞ―ΟΞ΅ΟΞ±, ΞΏΟΟΟΞ΅ ΞΏ ΞΎΞ΅Ξ½ΞΏΞ΄ΟΟΞΏΟ Ξ΄Ξ΅Ξ½ ΞΈΞ± Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΞ΅ΞΉ Ξ±ΟΞΏΞΆΞ·ΞΌΞ―ΟΟΞ· ΞΊΞ±ΞΉ ΞΈΞ± ΟΟΞΏΟΟΞ΅ΞΏΟΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΞΉ ΟΞΏ ΟΞΏΟΟ ΟΞ·Ο ΟΟΞΏΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ�Ο ΟΞΏΟ Ξ­ΟΞ΅ΞΉ Ξ»Ξ¬Ξ²Ξ΅ΞΉ. ΞΞ΅ΟΟΞΏΞΌΞ΅ΟΞ΅Ξ―Ο Ξ΄ΞΉΞ±ΟΞ¬ΞΎΞ΅ΞΉΟ Ξ³ΞΉΞ± ΟΞ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΞΊΞ±ΞΉ ΟΞΉΟ ΟΟΞΏΟΟΞ΅ΟΟΞ΅ΞΉΟ ΟΟΞ½ ΞΎΞ΅Ξ½ΞΏΞ΄ΟΟΟΞ½ ΞΊΞ±ΞΉ ΟΟΞ½ ΟΞ΅Ξ»Ξ±ΟΟΞ½ ΟΟΞΏΞ²Ξ»Ξ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΞΏΞ½ Β«ΞΞ±Ξ½ΞΏΞ½ΞΉΟΞΌΟ ΟΟΞ­ΟΞ΅ΟΞ½ ΞΎΞ΅Ξ½ΞΏΞ΄ΟΟΟΞ½ β ΟΞ΅Ξ»Ξ±ΟΟΞ½Β» (ΞΟΟΟΞ±ΟΞ· Ξ.Ξ. ΞΞΞ€ Ξ±ΟΞΉΞΈ. 503007/76 ΟΞΏΟ ΞΊΟΟΟΞΈΞ·ΞΊΞ΅ ΞΌΞ΅ ΟΞΏ Ξ. 1652/86). ΞΞΉΞ± ΟΟΞ΅ΟΞΉΞΊΞ­Ο ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ΅Ο ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½Ξ΅ΟΟΞ΅ ΟΟΞΏ Ξ₯ΟΞΏΟΟΞ³Ξ΅Ξ―ΞΏ Ξ€ΞΏΟΟΞΉΟΞΌΞΏΟ.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΞ¬Ξ½ ΟΟΞΏΞ³ΟΞ¬ΟΟ ΟΟΞΌΞ²Ξ±ΟΞ· Ξ§ΟΞΏΞ½ΞΏΞΌΞ΅ΟΞΉΟΟΞΉΞΊΞ�Ο ΞΞ―ΟΞΈΟΟΞ·Ο (Time-Share) ΟΞΉ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± Ξ­ΟΟ;\\nΞ€Ξ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΞ±Ο - ΟΟΞΌΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΞΏΟ ΟΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο - ΟΟΞΏΞ²Ξ»Ξ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΞ·Ξ½ ΞΞΏΞΉΞ½Ξ� Ξ₯ΟΞΏΟΟΞ³ΞΉΞΊΞ� ΞΟΟΟΞ±ΟΞ·\\n\"],[9],[7,\"h5\",true],[8],[0,\"Ξ€ΟΟΟΞΉΞΌΞ± (ΞΞ»Ξ»ΞΏΞΉΟΞΌΞ­Ξ½Ξ±, ΞΊΞ»Ο)\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β Ξ£ΟΞΏ super market Ξ΅Ξ―ΟΞ±Ξ½ Ξ±Ξ»Ξ»ΞΏΞΉΟΞΌΞ­Ξ½Ξ± ΞΊΞ±ΞΉ Ξ»Ξ·Ξ³ΞΌΞ­Ξ½Ξ± ΟΟΟΟΞΉΞΌΞ±.\\nΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ·Ξ½ ΞΊΞ±ΟΞ¬ ΟΟΟΞΏ Ξ±ΟΞΌΟΞ΄ΞΉΞ± ΟΟΞ·ΟΞ΅ΟΞ―Ξ± ΞΞΌΟΞΏΟΞ―ΞΏΟ ΟΞ·Ο Ξ Ξ΅ΟΞΉΟΞ΅ΟΞ΅ΞΉΞ±ΞΊΞ�Ο ΞΞ½ΟΟΞ·ΟΞ±Ο (ΟΟΟΞ·Ξ½ ΞΞΏΞΌΞ±ΟΟΞ―Ξ±) Ξ� ΟΟΞΏΞ½ ΞΞΞΞΞΞ Ξ¦ΞΞ‘ΞΞ ΞΞΞΞΞ§ΞΞ₯ Ξ€Ξ‘ΞΞ¦ΞΞΞ©Ξ (ΞΞ¦ΞΞ€). ΞΟΞ±ΞΌΞΌΞ� Ξ΅ΞΎΟΟΞ·ΟΞ­ΟΞ·ΟΞ·Ο ΟΞΏΞ»Ξ―ΟΞ·: 11717.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β Ξ ΞΏΞΉΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΏ Ξ±ΟΞΌΟΞ΄ΞΉΞΏΟ ΟΞΏΟΞ­Ξ±Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΞΏΞΉΟΟΞ·ΟΞ± ΟΟΞ½ ΟΟΞΏΟΞ―ΞΌΟΞ½ (ΞΞ»Ξ΅Ξ³ΟΞΏΞΉ, Ξ€Ξ΅ΟΞ½ΞΏΞ»ΞΏΞ³Ξ―Ξ±, ΞΊΞ»Ο);\\nΞΟΞΌΟΞ΄ΞΉΞΏΟ ΟΞΏΟΞ­Ξ±Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΏ ΞΞ¦ΞΞ€.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± ΟΟΟΞΊΞ΅ΟΞ±ΟΞΌΞ­Ξ½ΞΏ ΟΟΟΟΞΉΞΌΞΏ ΞΊΞ±ΞΉ Ξ· Ξ΅ΟΞΉΞΊΞ­ΟΞ± Ξ΄Ξ΅Ξ½ Ξ�ΟΞ±Ξ½ ΟΟΞ± Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞ¬.\\nΞΟΞΏΟΞ΅Ξ»Ξ΅Ξ― ΟΞ±ΟΞ¬Ξ²Ξ±ΟΞ· ΟΞ·Ο Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ±Ο Ξ±ΟΞΌΞΏΞ΄ΞΉΟΟΞ·ΟΞ±Ο ΟΞΏΟ ΞΞ¦ΞΞ€. ΞΟΞ±ΞΌΞΌΞ� Ξ΅ΞΎΟΟΞ·ΟΞ­ΟΞ·ΟΞ·Ο ΟΞΏΞ»Ξ―ΟΞ·: 11717.\\n\"],[9],[7,\"h5\",true],[8],[0,\"ΞΞ±ΟΟΞΉΞΌΞ±,\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β ΞΞΏΟ Ξ­Ξ²Ξ±Ξ»Ξ±Ξ½ Ξ»ΞΉΞ³ΟΟΞ΅ΟΞ· Ξ²Ξ΅Ξ½ΞΆΞ―Ξ½Ξ· Ξ±ΟΟ Ξ±ΟΟΞ� ΟΞΏΟ ΟΞ»Ξ�ΟΟΟΞ±.\\nΞΞΉΞ± Ξ΅Ξ»Ξ»Ξ΅ΞΉΟΞΏΞ²Ξ±ΟΞ� Ξ� Ξ½ΞΏΞΈΞ΅ΟΞΌΞ­Ξ½Ξ± ΞΊΞ±ΟΟΞΉΞΌΞ± ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½Ξ΅ΟΟΞ΅ ΟΟΞΏ Ξ€ΞΌΞ�ΞΌΞ± ΞΞ΅ΟΟΞΏΞ»ΞΏΞ³Ξ―Ξ±Ο ΟΞ·Ο ΞΊΞ±ΟΞ¬ ΟΟΟΞΏΞ½ Ξ±ΟΞΌΟΞ΄ΞΉΞ±Ο Ξ Ξ΅ΟΞΉΟΞ΅ΟΞ΅ΞΉΞ±ΞΊΞ�Ο ΞΞ½ΟΟΞ·ΟΞ±Ο (ΟΟΟΞ·Ξ½ ΞΞΏΞΌΞ±ΟΟΞ―Ξ±).\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β Ξ ΞΏΞΉΞ± ΟΟΞ·ΟΞ΅ΟΞ―Ξ± ΞΊΞ¬Ξ½Ξ΅ΞΉ Ξ΅Ξ»Ξ­Ξ³ΟΞΏΟΟ ΟΟΞ± ΟΟΞ±ΟΞ�ΟΞΉΞ± Ξ²Ξ΅Ξ½ΞΆΞ―Ξ½Ξ·Ο ΟΟΞΏΞΊΞ΅ΞΉΞΌΞ­Ξ½ΞΏΟ Ξ½Ξ± Ξ΄ΞΉΞ±ΟΞΉΟΟΟΟΞ΅ΞΉ ΟΞ·Ξ½ ΟΟΞ±ΟΞΎΞ· Ξ� ΞΌΞ· Ξ½ΞΏΞΈΞ΅Ξ―Ξ±Ο ΟΟΞ± ΞΊΞ±ΟΟΞΉΞΌΞ±;\\nΞΟΞΌΟΞ΄ΞΉΞ΅Ο Ξ³ΞΉΞ± ΟΞΏΟΟ Ξ΅Ξ»Ξ­Ξ³ΟΞΏΟΟ ΟΟΞ± ΟΟΞ±ΟΞ�ΟΞΉΞ± ΟΞ³ΟΟΞ½ ΞΊΞ±ΟΟΞ―ΞΌΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΏΞΉ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο Ξ΅ΞΌΟΞΏΟΞ―ΞΏΟ ΟΟΞ½ ΞΞΏΞΌΞ±ΟΟΞΉΞ±ΞΊΟΞ½ ΞΟΟΞΏΞ΄ΞΉΞΏΞΉΞΊΞ�ΟΞ΅ΟΞ½, ΟΞ± ΞΞ»ΞΉΞΌΞ¬ΞΊΞΉΞ± ΞΞ»Ξ­Ξ³ΟΞΏΟ ΞΞΉΞ±ΞΊΞ―Ξ½Ξ·ΟΞ·Ο ΞΟΞΏΞΈΞ�ΞΊΞ΅ΟΟΞ·Ο ΞΞ±ΟΟΞ―ΞΌΟΞ½ (ΞΞΞΞΞ) ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΟΞΏ Ξ£ΞΞΞ\\n\"],[9],[7,\"h5\",true],[8],[0,\"ΞΞ―Ξ΄Ξ±ΞΊΟΟΞ±,\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β Ξ ΟΟ Ξ΄ΞΉΞ±ΞΌΞΏΟΟΟΞ½ΞΏΞ½ΟΞ±ΞΉ ΟΞ± Ξ΄Ξ―Ξ΄Ξ±ΞΊΟΟΞ± ΟΟΞ½ ΞΉΞ΄ΞΉΟΟΞΉΞΊΟΞ½ Ξ΅ΞΊΟΞ±ΞΉΞ΄Ξ΅ΟΟΞ·ΟΞ―ΟΞ½ Ξ³ΞΉΞ± ΟΞΏ Ξ½Ξ­ΞΏ ΟΟΞΏΞ»ΞΉΞΊΟ Ξ­ΟΞΏΟ;\\nΞ€Ξ± Ξ΄Ξ―Ξ΄Ξ±ΞΊΟΟΞ± ΟΟΞ½ ΞΞ΄ΞΉΟΟΞΉΞΊΟΞ½ ΞΞΊΟΞ±ΞΉΞ΄Ξ΅ΟΟΞ·ΟΞ―ΟΞ½ Ξ΄ΞΉΞ±ΞΌΞΏΟΟΟΞ½ΞΏΞ½ΟΞ±ΞΉ Ξ΅Ξ»Ξ΅ΟΞΈΞ΅ΟΞ± Ξ±ΟΟ ΟΞ·Ξ½ 1Ξ· ΞΞ±Ξ½ΞΏΟΞ±ΟΞ―ΞΏΟ ΟΞΏΟ 2015 Ξ±Ξ»Ξ»Ξ¬ ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞ·Ξ½ ΞΞ₯Ξ Ξ4-554/31.05.2013 (ΞΞ 1433) ΟΞ± ΞΞ΄ΞΉΟΟΞΉΞΊΞ¬ ΞΞΊΟΞ±ΞΉΞ΄Ξ΅ΟΟΞ�ΟΞΉΞ± Ξ­ΟΞΏΟΞ½ ΟΞ·Ξ½ ΟΟΞΏΟΟΞ­ΟΟΞ· Ξ½Ξ± Ξ³Ξ½ΟΟΟΞΏΟΞΏΞΉΞΏΟΞ½ ΟΞ± Ξ΄Ξ―Ξ΄Ξ±ΞΊΟΟΞ± ΟΟΞ½ ΟΟΟΟΟΞ½ ΟΞ¬ΞΎΞ΅ΟΞ½ ΟΟΞ½ ΞΞ·ΟΞΉΞ±Ξ³ΟΞ³Ξ΅Ξ―ΟΞ½, ΞΞ·ΞΌΞΏΟΞΉΞΊΟΞ½ ΞΊΞ±ΞΉ ΞΟΞΌΞ½Ξ±ΟΞ―ΟΞ½ ΟΞΏΟΟ ΟΟΞΏ Ξ€ΞΌΞ�ΞΌΞ± ΞΞΌΟΞΏΟΞ―ΞΏΟ Ξ₯ΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞ·Ο ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·Ο ΞΞ΅ΟΞΌΞΉΞΊΟΞ½ Ξ‘ΟΞΈΞΌΞ―ΟΞ΅ΟΞ½ ΞΞΌΟΞΏΟΞ―ΞΏΟ ΟΞ·Ο ΞΞ΅Ξ½ΞΉΞΊΞ�Ο ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·Ο ΞΞ³ΞΏΟΞ¬Ο (ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο: ΟΞ·Ξ». 2103893130).Β \\n\"],[9],[7,\"h5\",true],[8],[0,\"ΞΞ»Ξ»Ξ± ΞΈΞ­ΞΌΞ±ΟΞ±:,\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"1.Β Β Β Ξ€ΞΉ ΞΉΟΟΟΞ΅ΞΉ ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞΏΟΞ²Ξ±ΟΞΉΞΌΟΟΞ·ΟΞ± ΟΟΞ½ Ξ±ΟΟΞΌΟΞ½ ΞΌΞ΅ Ξ΅ΞΉΞ΄ΞΉΞΊΞ­Ο Ξ±Ξ½Ξ¬Ξ³ΞΊΞ΅Ο ΟΞ΅ ΞΊΟΞ―ΟΞΉΞ± ΞΊΞ±ΞΉ ΟΞ±ΟΞ±Ξ»Ξ―Ξ΅Ο;\\nΞ Ξ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ³ΞΉΞ± ΟΞΏ ΞΈΞ­ΞΌΞ± Ξ±ΟΟΟ ΞΈΞ± Ξ±Ξ½ΟΞ»Ξ�ΟΞ΅ΟΞ΅ Ξ±ΟΟ ΟΞΏ ΞΟΞ±ΟΞ΅Ξ―ΞΏ ΞΞ΅Ξ»Ξ΅ΟΟΞ½ Ξ³ΞΉΞ± ΞΟΞΏΞΌΞ± ΞΌΞ΅ ΞΞΉΞ΄ΞΉΞΊΞ­Ο ΞΞ½Ξ¬Ξ³ΞΊΞ΅Ο ΟΞΏΟ Ξ₯Ξ ΞΞ₯Ξ‘ΞΞΞΞΞ₯ Ξ ΞΞ‘ΞΞΞΞΞΞΞΞ€ΞΞ£ ΞΞΞ ΞΞΞΞ‘ΞΞΞΞΞ£, Ξ€Ξ·Ξ».: 210 6475113, 210 6475114, 210 6475115.\\n\"],[9],[7,\"p\",true],[8],[0,\"2.Β Β Β ΞΟΞ±Ξ½ ΟΞ»Ξ·ΟΟΞ½Ο ΟΞ± ΟΟΞ½ΞΉΞ± ΞΌΞΏΟ ΞΌΞ΅ ΟΞΉΟΟΟΟΞΉΞΊΞ� ΞΊΞ¬ΟΟΞ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΟΟΟ ΟΞΏ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ± Ξ½Ξ± ΞΌΞΏΟ ΞΆΞ·ΟΞ¬ ΟΞ·Ξ½ Ξ±ΟΟΟΞ½ΞΏΞΌΞΉΞΊΞ� ΞΌΞΏΟ ΟΞ±ΟΟΟΟΞ·ΟΞ±;\\nΞΞ±ΞΉ, Ξ΄ΞΉΟΟΞΉ Ξ­ΟΟΞΉ Ξ±ΟΞΏΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ· ΟΟΞ�ΟΞ· ΟΞ·Ο ΟΞΉΟΟΟΟΞΉΞΊΞ�Ο ΟΞ±Ο ΞΊΞ¬ΟΟΞ±Ο Ξ±ΟΟ ΟΟΞ―ΟΞΏ ΟΟΟΟΟΟΞΏ ΟΞ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ ΟΞ·Ξ½ Ξ­ΟΞ΅ΟΞ΅ ΟΞ¬ΟΞ΅ΞΉ Ξ� ΟΞ±Ο ΟΞ·Ξ½ Ξ­ΟΞΏΟΞ½ ΞΊΞ»Ξ­ΟΞ΅ΞΉ ΞΊΞ±ΞΉ Ξ΅Ξ»Ξ±ΟΞΉΟΟΞΏΟΞΏΞΉΞ΅Ξ― ΟΞ·Ξ½ ΞΆΞ·ΞΌΞ―Ξ± ΟΞΏΟ Ξ΅Ξ½Ξ΄Ξ΅ΟΞΏΞΌΞ­Ξ½ΟΟ ΞΈΞ± ΟΟΞΏΟΟΞ΅Ξ―ΟΞ΅. ΞΞΉΞ± ΞΈΞ­ΞΌΞ±ΟΞ± ΟΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΟΟΞ½ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ¬ΟΟΞ½ ΟΞ·Ο ΟΟΞΏΟΟΟΞΉΞΊΟΟΞ·ΟΞ±Ο ΞΊΞ±ΞΉ ΟΞ·Ο ΞΉΞ΄ΞΉΟΟΞΉΞΊΞ�Ο ΞΆΟΞ�Ο ΟΞΏΟ Ξ±ΟΟΞΌΞΏΟ ΟΟΞ·Ξ½ ΞΞ»Ξ»Ξ¬Ξ΄Ξ± ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ·Ξ½ ΞΟΟΞ� Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ Ξ ΟΞΏΟΟΟΞΉΞΊΞΏΟ Ξ§Ξ±ΟΞ±ΞΊΟΞ�ΟΞ±.\\n\"],[9],[7,\"p\",true],[8],[0,\"3.Β Β Β ΞΟΟ Ξ±Ξ³ΞΏΟΞ¬ΟΞ΅ΞΉ Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ Ξ� ΞΌΞΉΞ± ΟΟΞ·ΟΞ΅ΟΞ―Ξ± Ξ±ΟΟ Ξ΅ΟΞ±ΞΉΟΞ―Ξ± ΞΌΞ΅ Ξ­Ξ΄ΟΞ± Ξ΅ΞΊΟΟΟ ΞΞ»Ξ»Ξ¬Ξ΄Ξ±Ο (ΟΟ. ΟΟΞ·Ξ½ ΞΞ±Ξ»Ξ»Ξ―Ξ±) ΟΞΏΟ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΟ Ξ³ΞΉΞ± ΟΞ·Ξ½ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΞΌΞΏΟ;\\nΞΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ΅Ο ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½ ΟΞΏΟ Ξ±ΟΞΏΟΞΏΟΞ½ ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ­Ο ΟΞ΅ ΟΟΟΞ΅Ο ΟΞ·Ο ΞΟΟΟΟΞ±ΟΞΊΞ�Ο ΞΞ½ΟΟΞ·Ο ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΏΞ½ΟΞ±ΞΉ ΟΟΞΏ ΞΟΟΟΟΞ±ΟΞΊΟ ΞΞ­Ξ½ΟΟΞΏ ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΞΞ»Ξ»Ξ¬Ξ΄Ξ±Ο, ΟΞΏ ΞΏΟΞΏΞ―ΞΏ Ξ­ΟΞ΅ΞΉ ΞΏΟΞΉΟΞΈΞ΅Ξ― ΟΟ Ξ΅ΞΈΞ½ΞΉΞΊΟ ΟΞ·ΞΌΞ΅Ξ―ΞΏ Ξ΅ΟΞ±ΟΞ�Ο ΟΞ·Ο ΞΞ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ�Ο ΞΟΞ―Ξ»ΟΟΞ·Ο ΞΞΉΞ±ΟΞΏΟΟΞ½.Β \\n\"],[9],[7,\"p\",true],[8],[0,\"4.Β Β Β Ξ ΞΏΟ ΞΌΟΞΏΟΟ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΟ Ξ³ΞΉΞ± Ξ΅ΟΞΉΞΊΞ―Ξ½Ξ΄ΟΞ½Ξ± ΞΊΞ±Ξ»Ξ»ΟΞ½ΟΞΉΞΊΞ¬ ;Β \\nΞΟΞΌΟΞ΄ΞΉΞΏΟ Ξ³ΞΉΞ± ΟΞΏΞ½ Ξ­Ξ»Ξ΅Ξ³ΟΞΏ ΟΟΞ½ ΞΊΞ±Ξ»Ξ»ΟΞ½ΟΞΉΞΊΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΏ ΞΞΈΞ½ΞΉΞΊΟΟ ΞΟΞ³Ξ±Ξ½ΞΉΟΞΌΟΟ Ξ¦Ξ±ΟΞΌΞ¬ΞΊΟΞ½ (ΞΞΞ¦).\\n\"],[9],[7,\"p\",true],[8],[0,\"5.Β Β Β ΞΞ³ΟΟΞ±ΟΞ± Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ ΞΊΞ±ΞΉ Ξ΄Ξ΅ ΞΌΞΏΟ Ξ­ΞΊΞΏΟΞ±Ξ½ Ξ±ΟΟΞ΄Ξ΅ΞΉΞΎΞ·. Ξ ΟΟ ΞΌΟΞΏΟΟ Ξ½Ξ± ΟΞΏ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ―Ξ»Ο;Β \\nΞ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ¬ΟΞ½Ξ·ΟΞ·Ο Ξ� ΞΌΞ· ΟΞΏΟΞ�Ξ³Ξ·ΟΞ·Ο Ξ±ΟΟΞ΄Ξ΅ΞΉΞΎΞ·Ο, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ· ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ· Ξ ΟΞΏΞ³ΟΞ±ΞΌΞΌΞ±ΟΞΉΟΞΌΞΏΟ, ΞΞΎΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ·Ο, ΞΞ»Ξ­Ξ³ΟΟΞ½ & ΞΟΞ΅ΟΞ½ΟΞ½ ΟΞ·Ο ΞΞΞΞ (Ξ΄/Ξ½ΟΞ·: ΞΞ±ΟΞ±ΟΟΞΊΞ¬ΞΊΞ· 2, ΞΞ±Ξ»Ξ¬ΟΟΞΉ, email : dipaee@aade.gr).\\n\"],[9],[7,\"p\",true],[8],[0,\"6.Β Β Β Ξ€Ξ± ΟΟΞ―Ξ± ΟΟΟΟΞ± ΟΞ·ΟΞ―Ξ± Ξ΅Ξ½ΟΟ Ξ³ΟΞ±ΞΌΞΌΞΏΞΊΟΞ΄ΞΉΞΊΞ± (barcode) ΟΞ±Ξ½Ξ΅ΟΟΞ½ΞΏΟΞ½ ΟΞ· ΟΟΟΞ± ΟΟΞΏΞ­Ξ»Ξ΅ΟΟΞ·Ο ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ; Ξ€Ξ± Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ± Ξ­ΟΞΏΟΞ½ Ξ΅ΞΉΞ΄ΞΉΞΊΟ Ξ³ΟΞ±ΞΌΞΌΞΏΞΊΟΞ΄ΞΉΞΊΞ± ΞΌΞ΅ ΟΟΞ―Ξ± ΟΟΟΟΞ± ΟΞ·ΟΞ―Ξ± ΟΞΏ 520;\\nΞ€Ξ± ΟΟΞ―Ξ± ΟΟΟΟΞ± ΟΞ·ΟΞ―Ξ± Ξ΅Ξ½ΟΟ Ξ³ΟΞ±ΞΌΞΌΞΏΞΊΟΞ΄ΞΉΞΊΞ± Ξ΄Ξ΅Ξ½ ΟΞ±Ξ½Ξ΅ΟΟΞ½ΞΏΟΞ½ ΟΞ· ΟΟΟΞ± ΟΟΞΏΞ­Ξ»Ξ΅ΟΟΞ·Ο ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ. Ξ€Ξ± ΟΞ·ΟΞ―Ξ± Ξ±ΟΟΞ¬ Ξ±Ξ½Ξ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΞ· ΟΟΟΞ±, ΟΟΞ·Ξ½ ΞΏΟΞΏΞ―Ξ± Ξ΅ΞΊΞ΄Ξ―Ξ΄Ξ΅ΟΞ±ΞΉ ΞΏ Ξ³ΟΞ±ΞΌΞΌΞΏΞΊΟΞ΄ΞΉΞΊΞ±Ο. Ξ€Ξ± Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ± Ξ΄Ξ΅Ξ½ Ξ­ΟΞΏΟΞ½ Ξ΅ΞΉΞ΄ΞΉΞΊΟ Ξ³ΟΞ±ΞΌΞΌoΞΊΟΞ΄ΞΉΞΊΞ±. Ξ€Ξ± ΟΟΞΏΟΟΞ½ΟΞ± ΞΌΞ΅ Ξ³ΟΞ±ΞΌΞΌΞΏΞΊΟΞ΄ΞΉΞΊΞ± ΟΞΏΟ Ξ±ΟΟΞ―ΞΆΞ΅ΞΉ Ξ±ΟΟ 520 Ξ΄Ξ΅ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΊΞ±Ο' Ξ±Ξ½Ξ¬Ξ³ΞΊΞ· Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ±. ΞΟΞ»Ξ¬ Ξ­ΟΞΏΟΞ½ Ξ»Ξ¬Ξ²Ξ΅ΞΉ Ξ³ΟΞ±ΞΌΞΌΞΏΞΊΟΞ΄ΞΉΞΊΞ± ΟΟΞ·Ξ½ ΞΞ»Ξ»Ξ¬Ξ΄Ξ±.\\n\"],[9],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/faq.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/fuels-map", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "wpk3pCBr",
        "block": "{\"symbols\":[\"item\",\"item\"],\"statements\":[[7,\"div\",true],[10,\"id\",\"fuels-map\"],[10,\"class\",\"container-fluid navbar-top-offset px-0 position-relative\"],[8],[0,\"\\n    \"],[1,[28,\"fuels-map-component\",null,[[\"fuelstations\",\"storeId\",\"fuelType\"],[[24,[\"fuelstations\"]],[24,[\"storeId\"]],[24,[\"fuelType\"]]]]],false],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"map-info\"],[8],[0,\"*Ξ€Ξ± ΟΟΞ±ΟΞ�ΟΞΉΞ± ΟΞΏΟ ΟΞ±ΟΞΏΟΟΞΉΞ¬ΞΆΞΏΞ½ΟΞ±ΞΉ ΟΟΞΏ ΟΞ¬ΟΟΞ· Ξ΄Ξ΅Ξ½ Ξ±ΟΞΏΟΞ΅Ξ»ΞΏΟΞ½ ΟΞΏ ΟΟΞ½ΞΏΞ»ΞΏ ΟΟΞ½ Ξ΄ΞΉΞ±ΞΈΞ­ΟΞΉΞΌΟΞ½ ΟΟΞ±ΟΞ·ΟΞ―ΟΞ½.\"],[7,\"br\",true],[8],[9],[0,\"ΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ²ΟΞ΅Ξ―ΟΞ΅ Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ ΟΟΞ±ΟΞ�ΟΞΉΞ± ΟΟΞ· Ξ»Ξ―ΟΟΞ± ΟΟΞ½ Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅ΟΞΌΞ¬ΟΟΞ½.\"],[9],[0,\"\\n    \"],[7,\"div\",true],[11,\"class\",[29,[\"fuel-filter-container \",[28,\"if\",[[24,[\"filterMinimized\"]],\"minimized\"],null]]]],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"filter-top\"],[8],[0,\"\\n            \"],[7,\"div\",false],[12,\"class\",[29,[\"cursor-pointer \",[28,\"if\",[[24,[\"filterMinimized\"]],\"angle-down\",\"angle-up\"],null]]]],[3,\"action\",[[23,0,[]],\"toggleFilter\"]],[8],[9],[0,\"\\n            \"],[7,\"img\",true],[10,\"class\",\"filter-icon\"],[10,\"src\",\"/assets/filter-icon.png\"],[8],[9],[0,\"\\n            \"],[7,\"span\",true],[10,\"class\",\"\"],[8],[0,\"Ξ¦Ξ―Ξ»ΟΟΞ±\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[24,[\"filterMinimized\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"filter-main\"],[8],[0,\"\\n            \"],[7,\"div\",true],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-b mb-1\"],[8],[0,\"ΞΞΏΞΌΟΟ\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"onchange\"],[[24,[\"selectedRegion\"]],true,false,[24,[\"regionOptions\"]],\"ΞΟΞΉΞ»Ξ­ΞΎΟΞ΅ ΞΞΏΞΌΟ\",true,[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"selectedRegion\"]]],null]],null]]],{\"statements\":[[0,\"                \"],[1,[23,2,[]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"mt-3\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-b mb-1\"],[8],[0,\"Ξ Ξ΅ΟΞΉΞΏΟΞ�\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"onchange\"],[[24,[\"selectedCity\"]],true,false,[24,[\"cityOptions\"]],\"ΞΟΞΉΞ»Ξ­ΞΎΟΞ΅ Ξ Ξ΅ΟΞΉΞΏΟΞ�\",true,[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"selectedCity\"]]],null]],null]]],{\"statements\":[[0,\"                \"],[1,[23,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\n            \"],[7,\"button\",false],[12,\"class\",\"fuel-map-btn mt-3\"],[3,\"action\",[[23,0,[]],\"toggleFilterTrigger\"]],[8],[0,\"ΞΟΞΉΞ²Ξ΅Ξ²Ξ±Ξ―ΟΟΞ·\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/fuels-map.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/fuels-results", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "6Foskn+6",
        "block": "{\"symbols\":[\"product\",\"product\",\"page\",\"category\"],\"statements\":[[7,\"div\",true],[10,\"id\",\"fuels-results\"],[10,\"class\",\"navbar-top-offset container-fluid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"unless\",[[24,[\"isMobile\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"col-3 products-filter\"],[8],[0,\"\\n            \"],[1,[28,\"filter\",null,[[\"isFuels\",\"counties\"],[true,[24,[\"cityOptions\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-9 mt-5 pl-lg-5\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row hide-desktop\"],[8],[0,\"\\n                \"],[7,\"div\",true],[11,\"class\",[29,[\"col-12  \",[28,\"if\",[[28,\"not\",[[24,[\"selectedSubCategory\"]]],null],\"display-none\"],null]]]],[8],[0,\"\\n                    \"],[7,\"span\",true],[10,\"class\",\"h6 nova-b mb-0\"],[8],[1,[24,[\"selectedSubCategory\",\"name\"]],false],[9],[0,\"\\n                    \"],[7,\"span\",true],[10,\"class\",\"ml-2 blue nova-sb\"],[8],[1,[22,\"productsCount\"],false],[0,\" Ξ ΟΞΏΟΟΞ½ΟΞ±\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row mb-5\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"id\",\"disabled\"],[10,\"class\",\"col-12 col-lg-4\"],[8],[0,\"\\n                    \"],[7,\"p\",true],[10,\"class\",\"blue-text\"],[8],[0,\"ΞΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ± ΞΞ±ΟΟΞ―ΞΌΟΞ½\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"onchange\"],[[24,[\"fuelType\"]],true,false,[24,[\"fuelCategories\"]],\"ΞΟΞΉΞ»Ξ­ΞΎΟΞ΅ ΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ± ΞΊΞ±ΟΟΞ―ΞΌΟΞ½\",true,[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"fuelType\"]]],null]],null]]],{\"statements\":[[0,\"                    \"],[1,[23,4,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"                \"],[9],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-12 offset-lg-1 col-lg-4\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"qr-wrapper\"],[8],[0,\"\\n                        \"],[1,[28,\"qr-code\",null,[[\"id\",\"text\",\"colorLight\",\"width\",\"height\",\"correctLevel\"],[\"qr\",[24,[\"qrUrl\"]],\"#F7F7F7\",155,155,\"L\"]]],false],[0,\"\\n                        \"],[7,\"div\",true],[8],[0,\"\\n                            \"],[7,\"p\",true],[10,\"class\",\"mb-0\"],[8],[0,\"ΞΞ­ΟΞ· ΟΞΉΞΌΞ� ΞΊΞ±ΟΟΞ―ΞΌΟΞ½\"],[7,\"br\",true],[8],[9],[7,\"span\",true],[10,\"class\",\"blue-text\"],[8],[1,[22,\"fuelAveragePrice\"],false],[0,\"β¬\"],[9],[9],[0,\"\\n                            \"],[7,\"p\",true],[10,\"class\",\"mb-0 font-xs\"],[8],[0,\"Ξ ΟΞΉΞΌΞ� ΟΟΞ½ ΞΊΞ±ΟΟΞ―ΞΌΟΞ½ ΟΞΏΟ Ξ±Ξ½Ξ±Ξ³ΟΞ¬ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΞΏΟΞ¬ ΟΞ·Ξ½ ΟΞΉΞΌΞ� ΟΟΞ»Ξ·ΟΞ·Ο Ξ³ΞΉΞ± ΟΞΉΟ \"],[7,\"b\",true],[8],[1,[22,\"avgPriceDate\"],false],[9],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"isMobile\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\",true],[10,\"class\",\"row mb-5 hide-desktop \"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"filterExpanded\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                    \"],[1,[28,\"filter\",null,[[\"isFuels\",\"counties\",\"filterExpanded\"],[true,[24,[\"counties\"]],[24,[\"filterExpanded\"]]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"col-4\"],[8],[0,\"\\n                    \"],[7,\"div\",false],[12,\"class\",\"d-flex align-items-center\"],[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"filterExpanded\"]]],null],true]],[8],[0,\"\\n                        \"],[7,\"span\",true],[10,\"class\",\"h5 nova-sb mb-0\"],[8],[0,\"Ξ¦Ξ―Ξ»ΟΟΞ±\"],[9],[0,\"\\n                        \"],[7,\"span\",true],[10,\"class\",\"ember-power-select-status-icon\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[7,\"div\",true],[10,\"class\",\"row mb-3\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-9 d-flex justify-content-between\"],[8],[0,\"\\n                    \"],[7,\"p\",true],[10,\"class\",\"my-0\"],[8],[0,\"ΞΟΞΏΟΞ΅Ξ»Ξ­ΟΞΌΞ±ΟΞ± \"],[7,\"span\",true],[10,\"class\",\"font-s blue nova-sb hide-mobile\"],[8],[1,[24,[\"fuels\",\"length\"]],false],[0,\"\\n                            Ξ ΟΞ±ΟΞ�ΟΞΉΞ±\"],[9],[9],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"pagination-container d-flex align-items-center\"],[8],[0,\"\\n                        \"],[7,\"div\",false],[12,\"class\",\"angle-left cursor-pointer\"],[3,\"action\",[[23,0,[]],\"decrementPage\"]],[8],[9],[0,\"\\n                        \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],1],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",1]],[8],[0,\"1\"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"midPages\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"showPrevDots\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"span\",true],[10,\"class\",\"grey\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[24,[\"midPages\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],[23,3,[]]],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",[23,3,[]]]],[8],[1,[23,3,[]],false],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[4,\"if\",[[24,[\"showAfterDots\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"span\",true],[10,\"class\",\"grey\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                        \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],[24,[\"lastPage\"]]],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",[24,[\"lastPage\"]]]],[8],[1,[22,\"lastPage\"],false],[9],[0,\"\\n                        \"],[7,\"div\",false],[12,\"class\",\"angle-right cursor-pointer\"],[3,\"action\",[[23,0,[]],\"incrementPage\"]],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"],[0,\"            \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[24,[\"isMobile\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"fuelsPaginated\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-9\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"fuels-container\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-4 col-lg-2 d-flex align-items-center\"],[8],[0,\"\\n                                \"],[7,\"img\",true],[10,\"src\",\"/assets/fuelstation.png\"],[10,\"class\",\"fuels-img\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-8 d-flex flex-column justify-content-center\"],[8],[0,\"\\n                                \"],[7,\"p\",true],[10,\"class\",\"fuels-name\"],[8],[1,[23,2,[\"name\"]],false],[9],[0,\"\\n                                \"],[7,\"p\",true],[10,\"class\",\"fuels-address\"],[8],[1,[23,2,[\"address\"]],false],[0,\", \"],[1,[23,2,[\"city\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n\"],[4,\"if\",[[28,\"and\",[[23,2,[\"longitude\"]],[23,2,[\"latitude\"]]],null]],null,{\"statements\":[[0,\"                        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-12 d-flex justify-content-end align-items-end\"],[8],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"fuels-price-text\"],[8],[0,\"Ξ€ΞΉΞΌΞ� \"],[7,\"span\",true],[10,\"class\",\"fuels-price-number\"],[8],[1,[23,2,[\"price\"]],false],[7,\"span\",true],[10,\"class\",\"euro\"],[8],[0,\"β¬\"],[9],[9],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"fuels-map\",[23,2,[\"store_id\"]]]],{\"statements\":[[0,\"                                \"],[7,\"button\",true],[10,\"class\",\"fuel-map-btn\"],[8],[0,\"ΞΞ΅Ο ΟΟΞΏ ΟΞ¬ΟΟΞ·\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-12 d-flex justify-content-end align-items-end\"],[8],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"fuels-price-text\"],[8],[0,\"Ξ€ΞΉΞΌΞ� \"],[7,\"span\",true],[10,\"class\",\"fuels-price-number\"],[8],[1,[23,2,[\"price\"]],false],[7,\"span\",true],[10,\"class\",\"euro\"],[8],[0,\"β¬\"],[9],[9],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"fuelsPaginated\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-9\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"fuels-container\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row h-100\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-4 col-lg-2 d-flex align-items-center fuels-start\"],[8],[0,\"\\n                                \"],[7,\"img\",true],[10,\"src\",\"/assets/fuelstation.png\"],[10,\"class\",\"fuels-img\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[11,\"class\",[29,[\"d-flex flex-column justify-content-center fuels-mid \",[28,\"if\",[[28,\"and\",[[23,1,[\"longitude\"]],[23,1,[\"latitude\"]]],null],\"col-lg-6\",\"col-lg-7\"],null]]]],[8],[0,\"\\n                                \"],[7,\"p\",true],[10,\"class\",\"fuels-name\"],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n                                \"],[7,\"p\",true],[10,\"class\",\"fuels-address\"],[8],[1,[23,1,[\"address\"]],false],[0,\", \"],[1,[23,1,[\"city\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n\"],[4,\"if\",[[28,\"and\",[[23,1,[\"longitude\"]],[23,1,[\"latitude\"]]],null]],null,{\"statements\":[[0,\"                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-4 d-flex flex-column justify-content-center align-items-center fuels-end\"],[8],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"fuels-price-number\"],[8],[7,\"span\",true],[10,\"class\",\"fuels-price-text\"],[8],[0,\"TΞΉΞΌΞ�\"],[9],[0,\"\\n                                    \"],[1,[23,1,[\"price\"]],false],[7,\"span\",true],[10,\"class\",\"euro\"],[8],[0,\"β¬\"],[9],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"fuels-map\",[23,1,[\"store_id\"]]]],{\"statements\":[[0,\"                                \"],[7,\"button\",true],[10,\"class\",\"fuel-map-btn\"],[8],[0,\"ΞΞ΅Ο ΟΟΞΏ ΟΞ¬ΟΟΞ·\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-3 d-flex flex-column justify-content-center align-items-center\"],[8],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"fuels-price-text\"],[8],[0,\"TΞΉΞΌΞ�\"],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"fuels-price-number\"],[8],[1,[23,1,[\"price\"]],false],[7,\"span\",true],[10,\"class\",\"euro\"],[8],[0,\"β¬\"],[9],[9],[0,\"\\n                            \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/fuels-results.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/fuels", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "QzTpEk7Y",
        "block": "{\"symbols\":[\"category\"],\"statements\":[[7,\"div\",true],[10,\"id\",\"products\"],[10,\"class\",\"container-fluid navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"bg\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"white-container container pt-4\"],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"mt-50 blue-title\"],[8],[0,\"ΞΞ±ΟΟΞΉΞΌΞ±\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row mt-5\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"id\",\"disabled\"],[10,\"class\",\"col-12 offset-lg-3 col-lg-6\"],[8],[0,\"\\n                    \"],[7,\"p\",true],[10,\"class\",\"blue-text text-center text-lg-left\"],[8],[0,\"ΞΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ± ΞΞ±ΟΟΞ―ΞΌΟΞ½\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"onchange\"],[[24,[\"selectedCategory\"]],true,false,[24,[\"fuelCategories\"]],\"ΞΟΞΉΞ»Ξ­ΞΎΟΞ΅ ΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ± ΞΊΞ±ΟΟΞ―ΞΌΟΞ½\",true,[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"selectedCategory\"]]],null]],null]]],{\"statements\":[[0,\"                    \"],[1,[23,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                \"],[9],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                    \"],[7,\"button\",false],[12,\"class\",\"src-products\"],[3,\"action\",[[23,0,[]],\"search\"]],[8],[0,\"ΞΞ½Ξ±ΞΆΞ�ΟΞ·ΟΞ·\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/fuels.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/global-map", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "JYF7T0sg",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"id\",\"global-map\"],[10,\"class\",\"container-fluid navbar-top-offset px-0\"],[8],[0,\"\\n    \"],[1,[28,\"global-map-component\",null,[[\"products\",\"fuelstations\"],[[24,[\"products\"]],[24,[\"fuelstations\"]]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/global-map.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/household-basket", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "J/2nkogU",
        "block": "{\"symbols\":[\"product\",\"index\",\"page\",\"retailer\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"chris-bg\"],[8],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"navbar-top-offset container householdBasket-container\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"pt-4\"],[8],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"grey\"],[8],[0,\"Ξ€ΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ ΟΞΏΟ Ξ½ΞΏΞΉΞΊΞΏΞΊΟΟΞΉΞΏΟ\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"blue-text mt-4\"],[8],[0,\"ΞΟΞΉΞ»ΞΏΞ³Ξ� ΞΞ»ΟΟΞ―Ξ΄Ξ±Ο\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex w-100 flex-wrap\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",false],[12,\"class\",[29,[\"retailer-wrapper \",[28,\"if\",[[23,4,[\"active\"]],\"active\"],null]]]],[3,\"action\",[[23,0,[]],\"selectRetailer\",[23,4,[]]]],[8],[0,\"\\n            \"],[7,\"img\",true],[11,\"src\",[29,[\"https://warply.s3.eu-west-1.amazonaws.com/applications/ed840ad545884deeb6c6b699176797ed/basket-retailers/\",[23,4,[\"logo\"]]]]],[10,\"class\",\"retailer-img\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row my-5\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"grey\"],[8],[0,\"Ξ ΟΞΉΞΌΞ� ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ ΟΞΏΟ Ξ±Ξ½Ξ±Ξ³ΟΞ¬ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΞΏΟΞ¬ ΟΞ·Ξ½ Ξ΅Ξ²Ξ΄ΞΏΞΌΞ¬Ξ΄Ξ± \"],[1,[22,\"from\"],false],[0,\" ΞΌΞ΅ \"],[1,[22,\"to\"],false],[0,\".\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-md-8 col-lg-8 col-xl-12 d-flex align-items-center justify-content-between mb-3\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                    \"],[7,\"span\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"Ξ ΟΞΏΟΟΞ½ΟΞ± ΞΊΞ±Ξ»Ξ±ΞΈΞΉΞΏΟ\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"pagination-container d-flex align-items-center\"],[8],[0,\"\\n                \"],[7,\"div\",false],[12,\"class\",\"angle-left cursor-pointer\"],[3,\"action\",[[23,0,[]],\"decrementPage\"]],[8],[9],[0,\"\\n                \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],1],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",1]],[8],[0,\"1\"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"midPages\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"showPrevDots\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\",true],[10,\"class\",\"grey\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[24,[\"midPages\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],[23,3,[]]],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",[23,3,[]]]],[8],[1,[23,3,[]],false],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[4,\"if\",[[24,[\"showAfterDots\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\",true],[10,\"class\",\"grey\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],[24,[\"lastPage\"]]],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",[24,[\"lastPage\"]]]],[8],[1,[22,\"lastPage\"],false],[9],[0,\"\\n                \"],[7,\"div\",false],[12,\"class\",\"angle-right cursor-pointer\"],[3,\"action\",[[23,0,[]],\"incrementPage\"]],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"productsPaginated\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-lg-12\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[11,\"class\",[29,[\"  mb-4 products-container \",[28,\"if\",[[28,\"is-equal\",[[23,1,[\"DISPLAY\"]],\"diabetes\"],null],\"diabetic-bg\"],null],\"  \",[28,\"if\",[[28,\"is-equal\",[[23,1,[\"DISPLAY\"]],\"xmas\"],null],\"xmas-bg\"],null]]]],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row justify-content-between h-100\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-2 col-xl-2 v-center\"],[8],[0,\"\\n\"],[4,\"if\",[[23,1,[\"IMAGE\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"img\",true],[11,\"src\",[28,\"concat\",[[24,[\"baseURL\"]],[23,1,[\"IMAGE\"]]],null]],[10,\"class\",\"products-img\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                \"],[7,\"img\",true],[11,\"src\",[28,\"concat\",[[24,[\"baseURL\"]],\"default_kalathi.png\"],null]],[10,\"class\",\"products-img\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[11,\"class\",[29,[\"d-flex flex-column justify-content-center \",[28,\"if\",[[28,\"or\",[[23,1,[\"VARIANCE\"]],[24,[\"variance\"]]],null],\"col-xl-4\",\"col-xl-7\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,1,[\"DISPLAY\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"div\",true],[11,\"class\",[29,[\"display \",[23,1,[\"DISPLAY\"]]]]],[8],[0,\"\\n                                    \"],[7,\"img\",true],[10,\"class\",\"display-img\"],[11,\"src\",[29,[\"/assets/\",[23,1,[\"DISPLAY\"]],\".png\"]]],[8],[9],[0,\"\\n                                    \"],[7,\"span\",true],[10,\"class\",\"display-text\"],[8],[1,[28,\"get\",[[24,[\"displayOptions\"]],[23,1,[\"DISPLAY\"]]],null],false],[9],[0,\"\\n                                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[7,\"p\",true],[10,\"class\",\"householdBasket-category-name\"],[11,\"style\",[29,[\"color:  \",[28,\"if\",[[28,\"is-equal\",[[23,1,[\"DISPLAY\"]],\"diabetes\"],null],\"#27c542\"],null],[28,\"if\",[[28,\"is-equal\",[[23,1,[\"DISPLAY\"]],\"diabetes\"],null],\"#dc3232\"],null]]]],[8],[1,[23,1,[\"CATEGORY_NAME\"]],false],[9],[0,\"\\n                                \"],[7,\"p\",true],[10,\"class\",\"householdBasket-product-name\"],[8],[1,[23,1,[\"NAME\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[11,\"class\",[29,[\"d-flex flex-column justify-content-center align-items-end \",[28,\"if\",[[28,\"or\",[[23,1,[\"VARIANCE\"]],[24,[\"variance\"]]],null],\"col-xl-2\",\"col-xl-3 pr-5\"],null]]]],[8],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"householdBasket-products-price-number\"],[8],[1,[23,1,[\"PRICE\"]],false],[0,\"β¬\"],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"householdBasket-products-price-normalized-number\"],[8],[1,[23,1,[\"PRICE_NORMALIZED\"]],false],[0,\"β¬\"],[7,\"span\",true],[10,\"class\",\"unit\"],[8],[0,\"/\"],[1,[23,1,[\"UNIT\"]],false],[9],[9],[0,\"\\n                            \"],[9],[0,\"\\n\"],[4,\"if\",[[28,\"or\",[[23,1,[\"VARIANCE\"]],[24,[\"variance\"]]],null]],null,{\"statements\":[[0,\"                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-3 col-xl-3 d-flex flex-column justify-content-center align-items-end h-100\"],[8],[0,\"\\n\"],[4,\"if\",[[23,1,[\"VARIANCE\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"div\",true],[10,\"class\",\"w-100 h-100\"],[8],[0,\"\\n                                    \"],[1,[28,\"high-charts\",null,[[\"chartOptions\",\"content\"],[[28,\"set-chart-options\",[[23,1,[\"VARIANCE\"]],\"product\"],null],[28,\"set-chart-data\",[[23,1,[\"VARIANCE\"]]],null]]]],false],[0,\"\\n                                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[24,[\"variance\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"div\",true],[10,\"class\",\"w-100 h-100\"],[8],[0,\"\\n                                    \"],[1,[28,\"high-charts\",null,[[\"chartOptions\",\"content\"],[[28,\"set-chart-options\",[[24,[\"variance\"]],\"category\",[23,1,[\"CATEGORY\"]]],null],[28,\"set-chart-data\",[[24,[\"variance\"]],[23,1,[\"CATEGORY\"]]],null]]]],false],[0,\"\\n                                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"                \"],[1,[28,\"log\",[[24,[\"variance\"]]],null],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/household-basket.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/index-news", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "5VsZlGD7",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"index-news-article\"],[8],[0,\"\\n    \"],[7,\"img\",true],[11,\"src\",[24,[\"model\",\"img\"]]],[10,\"class\",\"article-news-img\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"index-article-right\"],[8],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"article-news-title\"],[8],[1,[24,[\"model\",\"name\"]],false],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"article-news-desc\"],[8],[1,[24,[\"model\",\"description\"]],false],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/index-news.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/index", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "HancJMDs",
        "block": "{\"symbols\":[\"article\"],\"statements\":[[7,\"div\",true],[10,\"id\",\"index\"],[10,\"class\",\"container-fluid navbar-top-offset\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"bg\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"index-news-container2 container\"],[8],[0,\"\\n      \"],[7,\"img\",true],[10,\"src\",\"/assets/cart.png\"],[10,\"class\",\"index-logo\"],[8],[9],[0,\"\\n\"],[0,\"      \"],[7,\"div\",true],[10,\"class\",\"index-logo-responsive\"],[8],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"blue-title index-logo-title\"],[8],[0,\"e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο\"],[9],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"li-blue-title\"],[8],[0,\"ΞΞ΅Ξ½ΞΉΞΊΞ� ΞΟΞ±ΞΌΞΌΞ±ΟΞ΅Ξ―Ξ± ΞΞΌΟΞΏΟΞ―ΞΏΟ ΞΊΞ±ΞΉ Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο\\n          ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"img\",true],[10,\"src\",\"/assets/chris_logo.png\"],[10,\"class\",\"index-logo ml-1\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[28,\"product-search\",null,[[\"products\",\"goToProduct\"],[[24,[\"products\"]],[28,\"action\",[[23,0,[]],\"goToProduct\"],null]]]],false],[0,\"\\n    \"],[7,\"img\",true],[10,\"src\",\"/assets/chris_logo2.png\"],[10,\"class\",\"chris-logo2\"],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"index-news-container container\"],[8],[0,\"\\n\"],[0,\"      \"],[7,\"div\",true],[10,\"class\",\"index-news\"],[8],[0,\"\\n\"],[4,\"slick-slider\",null,[[\"autoplay\",\"dots\",\"arrows\"],[true,true,false]],{\"statements\":[[4,\"each\",[[24,[\"articles\"]]],null,{\"statements\":[[4,\"if\",[[28,\"eq\",[[23,1,[\"category_name\"]],\"basket\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"div\",true],[10,\"class\",\"index-article\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"article-img\"],[8],[0,\"\\n                  \"],[7,\"div\",true],[11,\"class\",[28,\"if\",[[23,1,[\"custom_description\"]],\"h-100\",\"transbox\"],null]],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"id\",\"index-box\"],[10,\"class\",\"index-article-left\"],[8],[0,\"\\n                      \"],[7,\"p\",true],[10,\"class\",\"article-title\"],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n\"],[4,\"if\",[[23,1,[\"custom_description\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"p\",true],[10,\"class\",\"article-text\"],[8],[1,[23,1,[\"custom_description\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,1,[\"custom_btn\"]]],null,{\"statements\":[[4,\"link-to\",null,[[\"route\"],[\"householdBasket\"]],{\"statements\":[[0,\"                          \"],[7,\"p\",true],[10,\"class\",\"learn-more-custom-btn\"],[8],[0,\"ΞΞ΅Ο ΟΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"link-to\",null,[[\"route\",\"model\"],[\"index-news\",[23,1,[\"id\"]]]],{\"statements\":[[0,\"                          \"],[7,\"p\",true],[10,\"class\",\"learn-more-btn\"],[8],[0,\"ΞΞ¬ΞΈΞ΅ΟΞ΅ ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ±\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[28,\"eq\",[[23,1,[\"category_name\"]],\"santasbasket\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"div\",true],[10,\"class\",\"index-article\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"article-img_santasbasket\"],[8],[0,\"\\n                  \"],[7,\"div\",true],[11,\"class\",[28,\"if\",[[23,1,[\"custom_description\"]],\"h-100\",\"transbox\"],null]],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"id\",\"index-box\"],[10,\"class\",\"index-article-left\"],[8],[0,\"\\n                      \"],[7,\"p\",true],[10,\"class\",\"article-title article-title_santa\"],[10,\"style\",\"color: #a12b25\"],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n\"],[4,\"if\",[[23,1,[\"custom_description\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"p\",true],[10,\"class\",\"article-text article-text_santa\"],[10,\"style\",\"color: #a12b25\"],[8],[1,[23,1,[\"custom_description\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,1,[\"custom_btn\"]]],null,{\"statements\":[[4,\"link-to\",null,[[\"route\"],[\"santasBasket\"]],{\"statements\":[[0,\"                          \"],[7,\"p\",true],[10,\"class\",\"learn-more-custom-btn learn-more-custom-btn_santasbasket\"],[8],[0,\"ΞΞ΅Ο ΟΞΏ\\n                            ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"link-to\",null,[[\"route\",\"model\"],[\"index-news\",[23,1,[\"id\"]]]],{\"statements\":[[0,\"                          \"],[7,\"p\",true],[10,\"class\",\"learn-more-btn\"],[8],[0,\"ΞΞ¬ΞΈΞ΅ΟΞ΅ ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ±\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"id\",\"stores\"],[10,\"class\",\"container app-container\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column align-items-end\"],[8],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"app-details\"],[8],[0,\"ΞΞ±ΟΞ΅Ξ²Ξ¬ΟΟΞ΅ ΟΞΏ app ΟΟΟΞ±!\"],[9],[0,\"\\n      \"],[7,\"div\",true],[8],[0,\"\\n        \"],[7,\"a\",true],[10,\"href\",\"https://apps.apple.com/gr/app/e-%CE%BA%CE%B1%CF%84%CE%B1%CE%BD%CE%B1%CE%BB%CF%89%CF%84%CE%AE%CF%82/id1502408342\"],[10,\"target\",\"_blank\"],[8],[0,\"\\n          \"],[7,\"img\",true],[10,\"src\",\"/assets/apple-store.png\"],[10,\"class\",\"apple-store\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"a\",true],[10,\"href\",\"https://play.google.com/store/apps/details?id=okaa.ekatanalotis.gr\"],[10,\"target\",\"_blank\"],[8],[0,\"\\n          \"],[7,\"img\",true],[10,\"src\",\"/assets/google-play.png\"],[10,\"class\",\"google-play\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[0,\"  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"info-clip\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/index.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/informative", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "kS/rPg78",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container-fluid px-0 navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"class\",\"banner-img\"],[10,\"src\",\"/assets/banner-papers.png\"],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"container mt-5 pt-5\"],[8],[0,\"\\n        \"],[7,\"h5\",true],[10,\"class\",\"nova-b mb-5 pb-5\"],[8],[0,\"ΞΞ½Ξ·ΞΌΞ΅ΟΟΟΞΉΞΊΞ¬ ΞΞ½ΟΟΟΞ±\"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-4\"],[8],[0,\"\\n                \"],[7,\"a\",true],[10,\"href\",\"https://warply.s3.amazonaws.com/applications/ed840ad545884deeb6c6b699176797ed/dikaiomata_katanaloton.pdf\"],[10,\"target\",\"_blank\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"informative-container\"],[8],[0,\"\\n                        \"],[7,\"img\",true],[10,\"class\",\"informative-img img-fluid\"],[10,\"src\",\"/assets/entipa1.jpg\"],[8],[9],[0,\"\\n                        \"],[7,\"p\",true],[10,\"class\",\"font-sm px-3 pt-2\"],[8],[0,\"Ξ€Ξ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ¬ ΟΞ±Ο ΟΟΞ±Ξ½ ΞΊΞ¬Ξ½Ξ΅ΟΞ΅ ΟΞ»Ξ·ΟΟΞΌΞ­Ο ΟΟΞ·Ξ½ ΞΟΟΟΟΞ·\"],[9],[0,\"\\n                        \"],[7,\"button\",true],[10,\"class\",\"informative-btn\"],[8],[0,\"ΞΞ¬ΞΈΞ΅ΟΞ΅ Ξ Ξ΅ΟΞΉΟΟΟΟΞ΅ΟΞ±\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-4\"],[8],[0,\"\\n                \"],[7,\"a\",true],[10,\"href\",\"https://warply.s3.amazonaws.com/applications/ed840ad545884deeb6c6b699176797ed/FAQ-Geoblocking.pdf\"],[10,\"target\",\"_blank\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"informative-container\"],[8],[0,\"\\n                        \"],[7,\"img\",true],[10,\"class\",\"informative-img img-fluid\"],[10,\"src\",\"/assets/entipa2.jpg\"],[8],[9],[0,\"\\n                        \"],[7,\"p\",true],[10,\"class\",\"font-sm px-3 pt-2\"],[8],[0,\"ΞΟΟΟΞ�ΟΞ΅ΞΉΟ ΞΊΞ±ΞΉ Ξ±ΟΞ±Ξ½ΟΞ�ΟΞ΅ΞΉΟ ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞΏΞ½ ΞΊΞ±Ξ½ΞΏΞ½ΞΉΟΞΌΟ Ξ³ΞΉΞ± ΟΞΏΞ½ Ξ³Ξ΅ΟΞ³ΟΞ±ΟΞΉΞΊΟ Ξ±ΟΞΏΞΊΞ»Ξ΅ΞΉΟΞΌΟ ΟΟΞΏ ΟΞ»Ξ±Ξ―ΟΞΉΞΏ ΟΞΏΟ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞΏΟ Ξ΅ΞΌΟΞΏΟΞ―ΞΏΟ\"],[9],[0,\"\\n                        \"],[7,\"button\",true],[10,\"class\",\"informative-btn\"],[8],[0,\"ΞΞ¬ΞΈΞ΅ΟΞ΅ Ξ Ξ΅ΟΞΉΟΟΟΟΞ΅ΟΞ±\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/informative.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/policy", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "PCvufPad",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container mt-5 navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[10,\"class\",\"mb-5\"],[8],[0,\"Ξ ΞΏΞ»ΞΉΟΞΉΞΊΞ� ΞΟΞΏΟΟΞ�ΟΞΏΟ\"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n            Ξ ΞΟΞ³Ξ±Ξ½ΞΉΟΞΌΟΟ ΞΞ΅Ξ½ΟΟΞΉΞΊΟΞ½ ΞΞ³ΞΏΟΟΞ½ ΞΊΞ±ΞΉ ΞΞ»ΞΉΞ΅Ξ―Ξ±Ο (ΞΞΞA Ξ.Ξ.) (Ξ΅ΟΞ΅ΞΎΞ�Ο Ξ· Β«ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ±Β») ΞΌΞ­ΟΟ ΟΞΏΟ Ξ΄ΞΉΞΊΟΟΞ±ΞΊΞΏΟ ΟΟΟΞΏΟ ΟΞ·Ο\\n            e-katanalotis.gr ΞΊΞ±ΞΉ ekatanalotis.gr (Ξ΅ΟΞ΅ΞΎΞ�Ο ΟΞΏ Β«siteΒ») ΞΊΞ±ΞΉ ΞΊΞ¬ΞΈΞ΅ ΟΞ΅ΟΟΞ½ΟΞΌΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο Ξ΅ΞΉΞ΄ΞΉΞΊΞΏΟ Ξ»ΞΏΞ³ΞΉΟΞΌΞΉΞΊΞΏΟ\\n            (Ξ΅ΟΞ΅ΞΎΞ�Ο Β«appΒ») ΟΞΏΟ Ξ»Ξ΅ΞΉΟΞΏΟΟΞ³Ξ΅Ξ―, ΟΟΞΏΟΟΞ­ΟΞ΅ΞΉ ΟΞΉΟ\\n            ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞ·Ο ΟΟΟ ΟΞΏΟΟ ΞΊΞ¬ΟΟΞΈΞΉ ΟΟΞΏΟΟ ΟΟΞ�ΟΞ·Ο, ΟΞΏΟΟ ΞΏΟΞΏΞ―ΞΏΟΟ ΞΏΞΉ Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ΅Ο /ΟΟΞΉΞ΅Ο /ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο ΞΊΞ±Ξ»ΞΏΟΞ½ΟΞ±ΞΉ Ξ½Ξ±\\n            Ξ΄ΞΉΞ±Ξ²Ξ¬ΟΞΏΟΞ½ ΟΟΞΏΟΞ΅ΞΊΟΞΉΞΊΞ¬ ΞΊΞ±ΞΉ Ξ½Ξ± ΟΟΞΏΞ²ΞΏΟΞ½ ΟΞ΅ Ξ΅ΟΞ―ΟΞΊΞ΅ΟΞ·/ΟΟΞ�ΟΞ· ΟΟΞ½ ΟΞ΅Ξ»Ξ―Ξ΄ΟΞ½/ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞΏΟ, ΞΌΟΞ½ΞΏ Ξ΅ΟΟΟΞΏΞ½ ΟΞΏΟΟ\\n            Ξ±ΟΞΏΞ΄Ξ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΞ»Ξ�ΟΟΟ. Ξ ΟΟΞ�ΟΞ· ΟΟΞ½Ξ΅ΟΞ¬Ξ³Ξ΅ΟΞ±ΞΉ\\n            ΟΞ·Ξ½ Ξ±ΟΞΏΞ΄ΞΏΟΞ� ΟΟΞ½ ΟΟΟΞ½ Ξ±ΟΟΟΞ½.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            ΞΞΉ Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο, ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο Ξ­ΟΞΏΟΞ½ ΟΞ·Ξ½ Ξ΅ΟΞΈΟΞ½Ξ· ΟΟΟΟΞ²Ξ±ΟΞ·Ο ΟΟΞΉΟ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞΏΟ site Ξ� ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο app\\n            ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΟΟΟΟΞ½ ΞΊΞ±ΟΞ±Ξ²ΞΏΞ»Ξ� ΟΞ΅Ξ»ΟΞ½ ΟΞ΅ ΟΟΞ―ΟΞΏΟΟ ΟΞΏΟΞ΅Ξ―Ο (Ο.Ο. ΟΞ¬ΟΞΏΟΞΏΞΉ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ, ΟΟΞ­ΟΟΞ· ΟΟΟΞ½ΞΏΟ ΟΞ±ΟΞ±ΞΌΞΏΞ½Ξ�Ο\\n            ΟΞ΅ Ξ±ΟΟΟ). ΞΟΞ―ΟΞ·Ο, Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ±ΟΞΏΞΊΞ»Ξ΅ΞΉΟΟΞΉΞΊΞ¬ ΟΟΞ΅ΟΞΈΟΞ½ΞΏΞΉ\\n            Ξ³ΞΉΞ± ΟΞΏΞ½ ΟΟΞΏΟΟΟΞΉΞΊΟ Ξ΅ΞΎΞΏΟΞ»ΞΉΟΞΌΟ ΟΞΏΟΟ ΞΌΞ΅ ΟΞ± Ξ±ΟΞ±ΟΞ±Ξ―ΟΞ·ΟΞ± ΟΞ΅ΟΞ½ΞΏΞ»ΞΏΞ³ΞΉΞΊΞ¬ ΞΌΞ­ΟΞ± ΟΞΏΟ ΟΞΏΟΟ Ξ΅ΟΞΉΟΟΞ­ΟΞΏΟΞ½ ΟΞ·Ξ½ ΟΟΟΟΞ²Ξ±ΟΞ· ΟΟΞΉΟ\\n            ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞΏΟ.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            Ξ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ΄ΞΉΞ±ΟΞ·ΟΞ΅Ξ― ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± Ξ±ΟΞΏΟΟΞ­Ξ»Ξ»Ξ΅ΞΉ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΟΞ΅ΞΉΟ ΟΞ±ΟΞΏΟΟΞ―Ξ±ΟΞ·Ο ΟΟΞ½ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞΏΟ site Ξ� ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο\\n            ΟΟΞΏΟΟ ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο. ΞΟΞ―ΟΞ·Ο ΞΏ Ξ΄ΞΉΞΊΟΟΞ±ΞΊΟΟ ΟΟΟΞΏΟ ΟΞ·Ο e-katanalotis.gr, ΟΞΏΟ ekatanalotis.gr ΞΊΞ±ΞΉ ΟΞΏΟ Ξ΅ΞΉΞ΄ΞΉΞΊΞΏΟ\\n            Ξ»ΞΏΞ³ΞΉΟΞΌΞΉΞΊΞΏΟ Ξ΄Ξ΅Ξ½ ΟΞ·ΟΞ΅Ξ―, Ξ΅ΟΞ΅ΞΎΞ΅ΟΞ³Ξ¬ΞΆΞ΅ΟΞ±ΞΉ, Ξ±ΟΞΏΞΈΞ·ΞΊΞ΅ΟΞ΅ΞΉ,\\n            Ξ΄ΞΉΞ±Ξ²ΞΉΞ²Ξ¬ΞΆΞ΅ΞΉ ΟΟΞΏΟΟΟΞΉΞΊΞ¬ Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½Ξ± ΟΟΞ·ΟΟΟΞ½ ΞΏΟΟΞ΅ Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½Ξ± ΟΞ± ΞΏΟΞΏΞ―Ξ± Ξ΄ΟΞ½Ξ±ΟΞ±ΞΉ Ξ½Ξ± ΞΊΞ±ΟΞ±ΟΟΞ―ΟΞΏΟΞ½ ΟΟΞΏΟΞ―Ξ» ΞΊΞ±ΞΉ Ξ½Ξ±\\n            ΟΞ±ΟΟΞΏΟΞΏΞΉΞ�ΟΞΏΟΞ½ Ξ±ΟΟΟΞ½. Ξ€Ξ± ΞΌΞΏΞ½Ξ±Ξ΄ΞΉΞΊΞ¬ Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½Ξ± ΟΞΏΟ Ξ±ΟΞ±ΞΉΟΞΏΟΞ½ΟΞ±ΞΉ Ξ³ΞΉΞ± ΟΞ· ΟΟΞ�ΟΞ· ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο Ξ΅ΞΉΞ΄ΞΉΞΊΞΏΟ Ξ»ΞΏΞ³ΞΉΟΞΌΞΉΞΊΞΏΟ\\n            Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ· Ξ³Ξ΅ΟΞ³ΟΞ±ΟΞΉΞΊΞ� ΞΈΞ­ΟΞ· ΟΞ·Ο ΟΟΟΞΊΞ΅ΟΞ�Ο\\n            ΟΞΏΟ ΟΟΞ�ΟΟΞ· ΟΟΞΏΞΊΞ΅ΞΉΞΌΞ­Ξ½ΞΏΟ Ξ½Ξ± ΟΞΏΟ Ξ³Ξ½ΟΟΟΞΏΟΞΏΞΉΞ·ΞΈΞ΅Ξ― ΞΏ ΞΊΞΏΞ½ΟΞΉΞ½ΟΟΞ΅ΟΞΏΟ ΟΟΞ±ΞΈΞΌΟΟ Ξ΅ΞΎΟΟΞ·ΟΞ­ΟΞ·ΟΞ�Ο ΟΞΏΟ ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ Ξ· ΟΟΞ�ΟΞ· ΟΞ·Ο\\n            ΞΊΞ¬ΞΌΞ΅ΟΞ±Ο ΟΞ·Ο ΟΟΟΞΊΞ΅ΟΞ�Ο ΟΞΏΟ ΟΟΞ�ΟΟΞ· ΟΟΞΏΟ Ξ±Ξ½Ξ±Ξ³Ξ½ΟΟΞΉΟΞ· ΟΞΏΟ barcode Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ¬ΞΌΞ΅ΟΞ· Ξ΅ΞΎΟΟΞ·ΟΞ­ΟΞ·ΟΞ� ΟΞΏΟ.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            Ξ€ΞΏ site ΞΊΞ±ΞΉ Ξ· Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� app Ξ΄ΞΉΞ±ΟΞ·ΟΞ΅Ξ― ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± ΟΟΞΏΟΞΏΟΞΏΞΉΞ΅Ξ― Ξ�/ΞΊΞ±ΞΉ Ξ½Ξ± Ξ΄ΞΉΞ±ΞΊΟΟΟΞ΅ΞΉ ΟΟΞΏΟΟΟΞΉΞ½Ξ¬ Ξ� ΞΌΟΞ½ΞΉΞΌΞ± ΞΌΞ­ΟΞΏΟ Ξ�\\n            ΟΞΏ ΟΟΞ½ΞΏΞ»ΞΏ ΟΟΞ½ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞΏΟ ΞΌΞ΅ Ξ� ΟΟΟΞ―Ο ΟΟΞΏΞ΅ΞΉΞ΄ΞΏΟΞΏΞ―Ξ·ΟΞ· ΟΟΞΏΟ ΟΞΏΟΟ ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο/ΞΌΞ­Ξ»Ξ· ΟΞΏΟ.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            ΞΞΊΟΟΟ ΟΟΞ½ Ξ±Ξ½Ξ±ΟΞ΅ΟΟΞΌΞ΅Ξ½ΟΞ½ Ξ΅ΞΎΞ±ΞΉΟΞ­ΟΞ΅ΟΞ½ (ΟΞ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΞ¬ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΟΞ―ΟΟΞ½, ΟΟΞ½Ξ΅ΟΞ³Ξ±ΟΟΞ½ ΞΊΞ±ΞΉ ΟΞΏΟΞ­ΟΞ½), ΟΞ»ΞΏ ΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ\\n            ΟΞΏΟ site ΞΊΞ±ΞΉ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο app, ΟΟΞΌΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΟΞ½ Ξ΅ΞΉΞΊΟΞ½ΟΞ½, Ξ³ΟΞ±ΟΞΉΞΊΟΞ½, ΟΟΟΞΏΞ³ΟΞ±ΟΞΉΟΞ½, ΟΟΞ΅Ξ΄Ξ―ΟΞ½, ΞΊΞ΅ΞΉΞΌΞ­Ξ½ΟΞ½, ΟΟΞ½\\n            ΟΞ±ΟΞ΅ΟΞΏΞΌΞ­Ξ½ΟΞ½ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ³Ξ΅Ξ½ΞΉΞΊΞ¬ ΟΞ»ΟΞ½\\n            ΟΟΞ½ Ξ±ΟΟΞ΅Ξ―ΟΞ½ Ξ±ΟΟΞΏΟ ΟΞΏΟ Ξ΄ΞΉΞΊΟΟΞ±ΞΊΞΏΟ ΟΟΟΞΏΟ, Ξ±ΟΞΏΟΞ΅Ξ»ΞΏΟΞ½ ΟΞ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΞ� ΞΉΞ΄ΞΉΞΏΞΊΟΞ·ΟΞ―Ξ±, ΞΊΞ±ΟΞ±ΟΞ΅ΞΈΞ΅ΞΉΞΌΞ­Ξ½Ξ± ΟΞ�ΞΌΞ±ΟΞ± ΞΊΞ±ΞΉ ΟΞ�ΞΌΞ±ΟΞ±\\n            ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞ·Ο ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ±Ο ΞΊΞ±ΞΉ ΟΟΞΏΟΟΞ±ΟΞ΅ΟΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΉΟ ΟΟΞ΅ΟΞΉΞΊΞ­Ο Ξ΄ΞΉΞ±ΟΞ¬ΞΎΞ΅ΞΉΟ ΟΞΏΟ Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞΏΟ Ξ΄ΞΉΞΊΞ±Ξ―ΞΏΟ, ΟΞΏΟ Ξ΅ΟΟΟΟΞ±ΟΞΊΞΏΟ\\n            Ξ΄ΞΉΞΊΞ±Ξ―ΞΏΟ ΞΊΞ±ΞΉ ΟΟΞ½ Ξ΄ΞΉΞ΅ΞΈΞ½ΟΞ½ ΟΟΞΌΞ²Ξ¬ΟΞ΅ΟΞ½\\n            ΞΊΞ±ΞΉ ΟΟΞ½ΞΈΞ·ΞΊΟΞ½. Ξ£ΟΞ½Ξ΅ΟΟΟ, ΞΊΞ±Ξ½Ξ­Ξ½Ξ± Ξ΅ΞΎΞ Ξ±ΟΟΟΞ½ Ξ΄Ξ΅ Ξ΄ΟΞ½Ξ±ΟΞ±ΞΉ Ξ½Ξ± Ξ±ΟΞΏΟΞ΅Ξ»Ξ­ΟΞ΅ΞΉ ΟΟΞ½ΞΏΞ»ΞΉΞΊΞ¬ Ξ� Ξ΅Ξ½ ΞΌΞ­ΟΞ΅ΞΉ Ξ±Ξ½ΟΞΉΞΊΞ΅Ξ―ΞΌΞ΅Ξ½ΞΏ ΟΟΞ»Ξ·ΟΞ·Ο,\\n            Ξ±Ξ½ΟΞΉΞ³ΟΞ±ΟΞ�Ο, ΟΟΞΏΟΞΏΟΞΏΞ―Ξ·ΟΞ·Ο, Ξ±Ξ½Ξ±ΟΞ±ΟΞ±Ξ³ΟΞ³Ξ�Ο, Ξ±Ξ½Ξ±Ξ΄Ξ·ΞΌΞΏΟΞ―Ξ΅ΟΟΞ·Ο Ξ� Ξ½Ξ± ΟΞΏΟΟΟΞΈΞ΅Ξ―, Ξ½Ξ± ΞΌΞ΅ΟΞ±Ξ΄ΞΏΞΈΞ΅Ξ―, Ξ½Ξ± Ξ΄ΞΉΞ±Ξ½Ξ΅ΞΌΞ·ΞΈΞ΅Ξ― ΞΌΞ΅\\n            ΞΏΟΞΏΞΉΞΏΞ½Ξ΄Ξ�ΟΞΏΟΞ΅ ΟΟΟΟΞΏ. ΞΞΎΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅Ξ―\\n            Ξ· ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞ·Ο ΞΌΞ΅ΞΌΞΏΞ½ΟΞΌΞ­Ξ½Ξ·Ο Ξ±ΟΞΏΞΈΞ�ΞΊΞ΅ΟΟΞ·Ο Ξ΅Ξ½ΟΟ ΞΊΞ±ΞΉ ΞΌΟΞ½ΞΏΟ Ξ±Ξ½ΟΞΉΞ³ΟΞ¬ΟΞΏΟ ΟΞΌΞ�ΞΌΞ±ΟΞΏΟ ΟΞΏΟ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΞΏΟ ΟΞ΅ Ξ­Ξ½Ξ±Ξ½ Ξ±ΟΞ»Ο\\n            ΟΟΞΏΟΟΟΞΉΞΊΟ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΟ ΟΟΞΏΞ»ΞΏΞ³ΞΉΟΟΞ�, Ξ³ΞΉΞ± ΟΟΞΏΟΟΟΞΉΞΊΞ� ΞΊΞ±ΞΉ ΟΟΞΉ Ξ΄Ξ·ΞΌΟΟΞΉΞ± Ξ� Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� ΟΟΞ�ΟΞ· ΞΊΞ±ΞΉ ΟΟΟΞ―Ο Ξ±ΟΞ±Ξ»ΞΏΞΉΟΞ� ΟΞ·Ο\\n            Ξ­Ξ½Ξ΄Ξ΅ΞΉΞΎΞ·Ο ΟΟΞΏΞ­Ξ»Ξ΅ΟΟΞ�Ο ΟΞΏΟΟ Ξ±ΟΟ ΟΞΏ\\n            site ΞΊΞ±ΞΉ ΟΞ·Ξ½ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� app, ΟΟΟΞ―Ο Ξ½Ξ± ΞΈΞ―Ξ³ΞΏΞ½ΟΞ±ΞΉ ΞΌΞ΅ ΞΊΞ±Ξ½Ξ­Ξ½Ξ± ΟΟΟΟΞΏ ΟΞ± ΟΟΞ΅ΟΞΉΞΊΞ¬ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΞ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΞ�Ο ΞΊΞ±ΞΉ\\n            Ξ²ΞΉΞΏΞΌΞ·ΟΞ±Ξ½ΞΉΞΊΞ�Ο ΞΉΞ΄ΞΉΞΏΞΊΟΞ·ΟΞ―Ξ±Ο. Ξ€Ξ± Ξ»ΞΏΞΉΟΞ¬ ΟΟΞΏΟΟΞ½ΟΞ± Ξ� ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞΏΟ Ξ±Ξ½Ξ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΞΉΟ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ­Ο ΟΞ΅Ξ»Ξ―Ξ΄Ξ΅Ο ΟΞΏΟ\\n            ΟΞ±ΟΟΞ½ΟΞΏΟ ΞΊΟΞΌΞ²ΞΏΟ ΞΊΞ±ΞΉ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο app\\n            ΞΊΞ±ΞΉ ΟΞ­ΟΞΏΟΞ½ ΟΞ± ΟΞ�ΞΌΞ±ΟΞ± ΟΟΞ½ Ξ±Ξ½ΟΞ―ΟΟΞΏΞΉΟΟΞ½ ΞΏΟΞ³Ξ±Ξ½ΞΉΟΞΌΟΞ½, Ξ΅ΟΞ±ΞΉΟΞΉΟΞ½, ΟΟΞ½Ξ΅ΟΞ³Ξ±ΟΟΞ½ ΟΞΏΟΞ­ΟΞ½, Ξ΅Ξ½ΟΟΞ΅ΟΞ½ Ξ� Ξ΅ΞΊΞ΄ΟΟΞ΅ΟΞ½, Ξ±ΟΞΏΟΞ΅Ξ»ΞΏΟΞ½\\n            Ξ΄ΞΉΞΊΞ� ΟΞΏΟΟ ΟΞ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΞ� ΞΊΞ±ΞΉ Ξ²ΞΉΞΏΞΌΞ·ΟΞ±Ξ½ΞΉΞΊΞ� ΞΉΞ΄ΞΉΞΏΞΊΟΞ·ΟΞ―Ξ± ΞΊΞ±ΞΉ ΟΟΞ½Ξ΅ΟΟΟ ΞΏΞΉ ΟΞΏΟΞ΅Ξ―Ο Ξ±ΟΟΞΏΞ― ΟΞ­ΟΞΏΟΞ½ ΟΞ· ΟΟΞ΅ΟΞΉΞΊΞ� Ξ΅ΟΞΈΟΞ½Ξ·. ΞΞΉ\\n            ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο/ΞΌΞ­Ξ»Ξ· ΞΊΞ±ΟΞ±Ξ½ΞΏΞΏΟΞ½\\n            ΞΊΞ±ΞΉ Ξ±ΟΞΏΞ΄Ξ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΞΉ Ξ΄Ξ΅Ξ½ ΟΞΏΟΟ ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± Ξ±Ξ½Ξ±ΟΞ±ΟΞ¬Ξ³ΞΏΟΞ½, Ξ±Ξ½ΟΞΉΞ³ΟΞ¬ΟΞΏΟΞ½, ΟΟΞ»ΞΏΟΞ½, ΞΌΞ΅ΟΞ±ΟΟΞ»ΞΏΟΞ½ Ξ�/ΞΊΞ±ΞΉ\\n            Ξ΅ΞΊΞΌΞ΅ΟΞ±Ξ»Ξ»Ξ΅ΟΞΏΞ½ΟΞ±ΞΉ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ¬ ΞΌΞ΅ ΞΏΟΞΏΞΉΞΏΞ½Ξ΄Ξ�ΟΞΏΟΞ΅ ΟΟΟΟΞΏ, ΟΟΞ½ΞΏΞ»ΞΏ Ξ� ΞΌΞ­ΟΞΏΟ ΟΞΏΟ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΞΏΟ ΟΞΏΟ site ΞΊΞ±ΞΉ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο\\n            app.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            ΞΞ΅Ξ΄ΞΏΞΌΞ­Ξ½Ξ·Ο ΟΞ·Ο ΟΟΟΞ·Ο ΞΊΞ±ΞΉ ΟΞΏΟ ΟΞ³ΞΊΞΏΟ ΟΞΏΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ, ΟΟΟ ΞΏΟΞΏΞΉΞ΅ΟΞ΄Ξ�ΟΞΏΟΞ΅ ΟΟΞ½ΞΈΞ�ΞΊΞ΅Ο, ΟΟΞΌΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½Ξ·Ο ΞΊΞ±ΞΉ ΟΞ·Ο\\n            ΟΞ΅ΟΞ―ΟΟΟΟΞ·Ο Ξ±ΞΌΞ­Ξ»Ξ΅ΞΉΞ±Ο, Ξ· ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ΄Ξ΅Ξ½ Ξ΅ΟΞΈΟΞ½Ξ΅ΟΞ±ΞΉ Ξ³ΞΉΞ± ΞΏΟΞΏΞΉΞ±ΟΞ΄Ξ�ΟΞΏΟΞ΅ ΞΌΞΏΟΟΞ�Ο ΞΆΞ·ΞΌΞ―Ξ± ΟΟΞΏΟΟΞΏΟΞ½ ΞΏΞΉ\\n            Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο/ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο ΟΟΞ½ ΟΞ΅Ξ»Ξ―Ξ΄ΟΞ½, ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½, Ξ΅ΟΞΉΞ»ΞΏΞ³ΟΞ½\\n            ΞΊΞ±ΞΉ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΟΞ½ ΟΞΏΟ site ΞΊΞ±ΞΉ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο app ΟΟΞΉΟ ΞΏΟΞΏΞ―Ξ΅Ο ΟΟΞΏΞ²Ξ±Ξ―Ξ½ΞΏΟΞ½ ΞΌΞ΅ Ξ΄ΞΉΞΊΞ� ΟΞΏΟΟ ΟΟΟΟΞΏΞ²ΞΏΟΞ»Ξ―Ξ±. Ξ€Ξ±\\n            ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½Ξ± ΟΞΏΟ site ΞΊΞ±ΞΉ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο app ΟΞ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ Β«ΟΟΟΟ Ξ±ΞΊΟΞΉΞ²ΟΟ Ξ΅Ξ―Ξ½Ξ±ΞΉΒ» ΟΟΟΞ―Ο ΞΊΞ±ΞΌΞ―Ξ± Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· Ξ΅ΞΊΟΞ΅ΟΟΞ±ΟΞΌΞ­Ξ½Ξ·\\n            Ξ� ΞΊΞ±ΞΉ ΟΟΞ½Ξ΅ΟΞ±Ξ³ΟΞΌΞ΅Ξ½Ξ· ΞΌΞ΅ ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅\\n            ΟΟΟΟΞΏ. Ξ£ΟΞΏ ΞΌΞ­Ξ³ΞΉΟΟΞΏ Ξ²Ξ±ΞΈΞΌΟ ΞΊΞ±ΞΉ ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΏ Ξ½ΟΞΌΞΏ, ΟΞΏ site ΞΊΞ±ΞΉ Ξ· Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� app Ξ±ΟΞ½ΞΏΟΞ½ΟΞ±ΞΉ ΟΞ»Ξ΅Ο ΟΞΉΟ Ξ΅Ξ³Ξ³ΟΞ�ΟΞ΅ΞΉΟ\\n            Ξ΅ΞΊΟΞ΅ΟΟΞ±ΟΞΌΞ­Ξ½Ξ΅Ο Ξ� ΞΊΞ±ΞΉ ΟΟΞ½Ξ΅ΟΞ±Ξ³ΟΞΌΞ΅Ξ½Ξ΅Ο, ΟΟΞΌΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΟΞ½, ΟΟΞΉ ΟΞΌΟΟ ΟΞ΅ΟΞΉΞΏΟΞΉΞΆΟΞΌΞ΅Ξ½ΟΞ½ ΟΞ΅ Ξ±ΟΟΟ, Ξ±ΟΟΟΞ½, ΞΏΞΉ ΞΏΟΞΏΞ―Ξ΅Ο\\n            ΟΟΞ½Ξ΅ΟΞ¬Ξ³ΞΏΞ½ΟΞ±ΞΉ ΟΞ·Ξ½ Ξ΅ΞΌΟΞΏΟΞ΅ΟΟΞΉΞΌΟΟΞ·ΟΞ±\\n            ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΞΊΞ±ΟΞ±Ξ»Ξ»Ξ·Ξ»ΟΞ»Ξ·ΟΞ± Ξ³ΞΉΞ± Ξ­Ξ½Ξ± ΟΟΞ³ΞΊΞ΅ΞΊΟΞΉΞΌΞ­Ξ½ΞΏ ΟΞΊΞΏΟΟ.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            Ξ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± Ξ΄Ξ΅Ξ½ Ξ΅Ξ³Ξ³ΟΞ¬ΟΞ±ΞΉ ΟΟΞΉ ΞΏΞΉ ΟΞ΅Ξ»Ξ―Ξ΄Ξ΅Ο, ΞΏΞΉ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο, ΞΏΞΉ Ξ΅ΟΞΉΞ»ΞΏΞ³Ξ­Ο ΞΊΞ±ΞΉ ΟΞ± ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½Ξ± ΞΈΞ± ΟΞ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΟΞ―Ο\\n            Ξ΄ΞΉΞ±ΞΊΞΏΟΞ�, ΟΟΟΞ―Ο ΟΟΞ¬Ξ»ΞΌΞ±ΟΞ± ΞΊΞ±ΞΉ ΟΟΞΉ ΟΞ± Ξ»Ξ¬ΞΈΞ· ΞΈΞ± Ξ΄ΞΉΞΏΟΞΈΟΞ½ΞΏΞ½ΟΞ±ΞΉ. ΞΟΞ―ΟΞ·Ο, Ξ΄Ξ΅Ξ½ Ξ΅Ξ³Ξ³ΟΞ¬ΟΞ±ΞΉ ΟΟΞΉ ΟΞΏ Ξ―Ξ΄ΞΉΞΏ Ξ� ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅ Ξ¬Ξ»Ξ»ΞΏ\\n            ΟΟΞ³Ξ³Ξ΅Ξ½ΞΉΞΊΟΟ ΟΟΟΞΏΟ (site) Ξ� ΞΏΞΉ Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ·ΟΞ­Ο\\n            (servers) ΞΌΞ­ΟΟ ΟΟΞ½ ΞΏΟΞΏΞ―ΟΞ½ Ξ±ΟΟΞ¬ ΟΞ―ΞΈΞ΅Ξ½ΟΞ±ΞΉ ΟΟΞ· Ξ΄ΞΉΞ¬ΞΈΞ΅ΟΞ� ΟΟΞ½ ΟΟΞ·ΟΟΟΞ½/ΞΌΞ΅Ξ»ΟΞ½, Ξ΄Ξ΅Ξ½ ΟΞ΅ΟΞΉΞ­ΟΞΏΟΞ½ ΞΉΞΏΟΟ Ξ� Ξ¬Ξ»Ξ»Ξ± Ξ΅ΟΞΉΞΆΞ�ΞΌΞΉΞ±\\n            ΟΟΟΟΞ±ΟΞΉΞΊΞ¬. ΞΞ΅Ξ½ Ξ΅Ξ³Ξ³ΟΞ¬ΟΞ±ΞΉ ΟΞ΅ ΞΊΞ±ΞΌΞ―Ξ± ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞ·Ξ½ ΞΏΟΞΈΟΟΞ·ΟΞ±, ΟΞ·Ξ½ ΟΞ»Ξ·ΟΟΟΞ·ΟΞ± Ξ� ΞΊΞ±ΞΉ Ξ΄ΞΉΞ±ΞΈΞ΅ΟΞΉΞΌΟΟΞ·ΟΞ± ΟΟΞ½ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΟΞ½,\\n            ΟΞ΅Ξ»Ξ―Ξ΄ΟΞ½, ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½, Ξ΅ΟΞΉΞ»ΞΏΞ³ΟΞ½\\n            Ξ� ΟΞ± Ξ±ΟΞΏΟΞ΅Ξ»Ξ­ΟΞΌΞ±ΟΞ¬ ΟΞΏΟΟ. Ξ€ΞΏ ΞΊΟΟΟΞΏΟ ΟΟΞ½ Ξ΅Ξ½Ξ΄Ξ΅ΟΟΞΌΞ΅Ξ½ΟΞ½ Ξ΄ΞΉΞΏΟΞΈΟΟΞ΅ΟΞ½ Ξ� Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ�ΟΞ΅ΟΞ½, ΟΞΏ Ξ±Ξ½Ξ±Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½ΞΏΟΞ½ ΞΏΞΉ\\n            Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο/ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο ΞΊΞ±ΞΉ ΟΞ΅ ΞΊΞ±ΞΌΞ―Ξ± ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ· ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ±.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            Ξ€ΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ ΞΊΞ±ΞΉ ΞΏΞΉ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΞΏΟ ΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½ΞΏΞ½ΟΞ±ΞΉ ΟΟΞΏ site ΞΊΞ±ΞΉ ΟΟΞ·Ξ½ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� app Ξ±ΟΞΏΟΞ΅Ξ»ΞΏΟΞ½ ΞΌΞ―Ξ± ΟΟΞΏΟΟΞΏΟΞ¬\\n            ΟΟΞΏΟ ΟΞΏΟΟ Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο/ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο ΟΞΏΟ ΞΊΞ±ΞΉ Ξ³Ξ΅Ξ½ΞΉΞΊΞ¬ ΟΟΞΏΟ ΟΞ·Ξ½ ΞΊΞΏΞΉΞ½ΟΟΞ·ΟΞ± ΟΟΞ½ ΟΟΞ·ΟΟΟΞ½ ΟΞΏΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ ΞΊΞ±ΞΉ Ξ΄Ξ΅\\n            Ξ΄ΟΞ½Ξ±Ξ½ΟΞ±ΞΉ ΟΞ΅ ΞΊΞ±ΞΌΞΉΞ¬ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ³ΞΉΞ± ΞΏΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅\\n            ΟΟΞΏΟΟΞΏΟΞ� Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ·Ο Ξ� ΞΌΞ· ΟΟΞ³ΞΊΞ΅ΞΊΟΞΉΞΌΞ­Ξ½ΟΞ½ ΟΟΞ¬ΞΎΞ΅ΟΞ½. Ξ€ΞΏ site ΞΊΞ±ΞΉ Ξ· Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� app Ξ±Ξ½Ξ±Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½ΞΏΟΞ½ ΟΞ· ΟΟΞ»Ξ»ΞΏΞ³Ξ�,\\n            Ξ΅ΟΞ΅ΞΎΞ΅ΟΞ³Ξ±ΟΞ―Ξ± ΞΊΞ±ΞΉ Ξ΄ΞΉΞ±Ξ½ΞΏΞΌΞ� ΟΞΏΟ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΞΏΟ ΟΞΏΟΟ, ΟΟΟΞ―Ο ΟΞΌΟΟ ΟΞ΅ ΞΊΞ±ΞΌΞΉΞ¬ ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ½Ξ± Ξ΅Ξ³Ξ³ΟΟΞ½ΟΞ±ΞΉ ΟΞ·Ξ½ Ξ±ΟΟΞΉΟΟΞ·ΟΞ±, ΟΞ·Ξ½\\n            ΟΞ»Ξ·ΟΟΟΞ·ΟΞ±, ΟΞ·Ξ½ Ξ΅ΟΞ¬ΟΞΊΞ΅ΞΉΞ± ΞΊΞ±ΞΉ Ξ³Ξ΅Ξ½ΞΉΞΊΞ¬\\n            ΟΞ·Ξ½ ΞΊΞ±ΟΞ±Ξ»Ξ»Ξ·Ξ»ΟΞ»Ξ·ΟΞ± Ξ±ΟΟΞΏΟ ΞΊΞ±ΞΉ ΟΞ·Ξ½ Ξ±ΟΞΏΟΟΞ―Ξ± Ξ΅Ξ½Ξ΄Ξ΅ΟΞΏΞΌΞ­Ξ½ΟΞ½ Ξ»Ξ±ΞΈΟΞ½, ΟΞΏΞ»Ο Ξ΄Ξ΅ ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞΏ, Ξ»ΟΞ³Ο ΟΞΏΟ ΞΉΞ΄ΞΉΞ±ΞΉΟΞ­ΟΟΟ ΞΌΞ΅Ξ³Ξ¬Ξ»ΞΏΟ\\n            ΟΞ³ΞΊΞΏΟ ΟΞΏΟ, ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΟΞ·Ο ΟΟΞΌΞΌΞ΅ΟΞΏΟΞ�Ο ΞΊΞ±ΞΉ ΟΟΞ―ΟΟΞ½ ΟΞΏΟΞ­ΟΞ½ (ΟΟΟΞΉΞΊΟΞ½ Ξ� Ξ½ΞΏΞΌΞΉΞΊΟΞ½ ΟΟΞΏΟΟΟΟΞ½) ΟΞ·Ξ½ ΟΟΟΟΞΏΞ³Ξ΅Ξ½Ξ� ΟΞ±ΟΞ±Ξ³ΟΞ³Ξ�\\n            ΞΊΞ±ΞΉ ΟΟΞ»Ξ»ΞΏΞ³Ξ� ΟΞΏΟ.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            Ξ€ΞΏ site ΞΊΞ±ΞΉ Ξ· Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� app Ξ΄Ξ΅Ξ½ Ξ΅Ξ»Ξ­Ξ³ΟΞΏΟΞ½ ΟΞ· Ξ΄ΞΉΞ±ΞΈΞ΅ΟΞΉΞΌΟΟΞ·ΟΞ±, ΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ, ΟΞ·Ξ½ ΟΞΏΞ»ΞΉΟΞΉΞΊΞ� ΟΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΟΟΞ½\\n            ΟΟΞΏΟΟΟΞΉΞΊΟΞ½ Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½, ΟΞ·Ξ½ ΟΞΏΞΉΟΟΞ·ΟΞ± ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΟΞ»Ξ·ΟΟΟΞ·ΟΞ± ΟΟΞ½ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ Ξ¬Ξ»Ξ»ΟΞ½ ΟΟΟΟΞ½ (websites) ΞΊΞ±ΞΉ ΟΞ΅Ξ»Ξ―Ξ΄ΟΞ½ ΟΟΞ±\\n            ΞΏΟΞΏΞ―Ξ± ΟΞ±ΟΞ±ΟΞ­ΞΌΟΞ΅ΞΉ ΞΌΞ­ΟΟ ΟΟΞ½Ξ΄Ξ­ΟΞΌΟΞ½, (hyperlinks)\\n            Ξ� Ξ΄ΞΉΞ±ΟΞ·ΞΌΞΉΟΟΞΉΞΊΟΞ½ ΟΞ―ΟΞ»ΟΞ½ (banners). Ξ£ΟΞ½Ξ΅ΟΟΟ, Ξ³ΞΉΞ± ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅ ΟΟΟΞ²Ξ»Ξ·ΞΌΞ± ΟΞ±ΟΞΏΟΟΞΉΞ±ΟΞΈΞ΅Ξ― ΞΊΞ±ΟΞ¬ ΟΞ·Ξ½ Ξ΅ΟΞ―ΟΞΊΞ΅ΟΞ·/ΟΟΞ�ΟΞ·\\n            ΟΞΏΟΟ, ΞΏΞΉ ΟΟΞ�ΟΟΞ΅Ο/ΟΟΞΉΞ΅Ο ΞΏΟΞ΅Ξ―Ξ»ΞΏΟΞ½ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞΏΟΞ½ Ξ±ΟΞ΅ΟΞΈΞ΅Ξ―Ξ±Ο ΟΟΞΏΟΟ Ξ±Ξ½ΟΞ―ΟΟΞΏΞΉΟΞΏΟΟ ΟΟΟΞΏΟΟ (web sites) ΞΊΞ±ΞΉ ΟΞ΅Ξ»Ξ―Ξ΄Ξ΅Ο,\\n            ΟΞ± ΞΏΟΞΏΞ―Ξ± ΞΊΞ±ΞΉ ΟΞ­ΟΞΏΟΞ½ Ξ±ΞΊΞ­ΟΞ±ΞΉΞ±\\n            ΟΞ· ΟΟΞ΅ΟΞΉΞΊΞ� Ξ΅ΟΞΈΟΞ½Ξ· Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΞ±ΟΞΏΟΞ� ΟΟΞ½ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞΏΟΟ. Ξ ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΟΞ΅ ΞΊΞ±ΞΌΞ―Ξ± ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ΄Ξ΅Ξ½ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΞΈΞ΅ΟΟΞ·ΞΈΞ΅Ξ―\\n            ΟΟΞΉ Ξ΅Ξ½ΟΟΞ΅ΟΞ½Ξ―ΞΆΞ΅ΟΞ±ΞΉ Ξ� Ξ±ΟΞΏΞ΄Ξ­ΟΞ΅ΟΞ±ΞΉ ΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ Ξ� ΟΞΉΟ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΟΞ½ ΟΟΟΟΞ½ Ξ±ΟΟΟΞ½ ΞΊΞ±ΞΉ ΟΟΞ½ ΟΞ΅Ξ»Ξ―Ξ΄ΟΞ½ ΟΟΞ± ΞΏΟΞΏΞ―Ξ±\\n            ΟΞ±ΟΞ±ΟΞ­ΞΌΟΞ΅ΞΉ Ξ� ΟΟΞΉ ΟΟΞ½Ξ΄Ξ­Ξ΅ΟΞ±ΞΉ ΞΌΞ΅\\n            Ξ±ΟΟΞ¬ ΞΊΞ±ΟΞ¬ ΞΏΟΞΏΞΉΞΏΞ½Ξ΄Ξ�ΟΞΏΟΞ΅ Ξ¬Ξ»Ξ»ΞΏ ΟΟΟΟΞΏ.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            Ξ ΟΟΟΟΞ²Ξ±ΟΞ· ΟΟΞΉΟ ΟΞ΅Ξ»Ξ―Ξ΄Ξ΅Ο/ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞΏΟ site ΞΊΞ±ΞΉ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο app Ξ΄Ξ΅Ξ½ ΟΟΞ½Ξ΅ΟΞ¬Ξ³Ξ΅ΟΞ±ΞΉ ΞΊΞ±Ξ½Ξ­Ξ½Ξ± Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ ΞΊΟΟΟΞΏΟ\\n            ΟΞ­ΟΞ±Ξ½ ΟΞΏΟ ΞΉΟΟΟΞΏΞ½ΟΞΏΟ ΟΞΉΞΌΞΏΞ»ΞΏΞ³ΞΉΞ±ΞΊΞΏΟ ΞΊΞ±ΞΈΞ΅ΟΟΟΟΞΏΟ Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ³Ξ΅Ξ½ΞΉΞΊΞ� ΟΟΟΟΞ²Ξ±ΟΞ· ΟΟΞΏ Ξ΄ΞΉΞ±Ξ΄Ξ―ΞΊΟΟΞΏ, ΟΟΟΟ Ξ­ΟΞ΅ΞΉ Ξ΄ΞΉΞ±ΞΌΞΏΟΟΟΞΈΞ΅Ξ― Ξ±ΟΟ\\n            ΟΞΏΟΟ Ξ±ΟΞΌΟΞ΄ΞΉΞΏΟΟ ΟΞ±ΟΞΏΟΞ΅Ξ―Ο (ISP's) ΞΊΞ±ΞΉ ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ»Ξ΅ΟΞ±ΞΉ\\n            ΟΞ΅ Ξ±ΟΟΞΏΟΟ ΞΊΞ±ΞΉ ΞΌΟΞ½ΞΏ.\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px;\"],[8],[0,\"\\n\\n            ΞΞΉ Ξ±Ξ½ΟΟΞ­ΟΟ ΟΟΞΏΞΉ ΞΊΞ±ΞΉ ΟΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΞΉΟ ΟΟΞ�ΟΞ·Ο ΟΞΏΟ site ΞΊΞ±ΞΉ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο app, ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΞΏΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ ΟΟΞΏΟΞΏΟΞΏΞ―Ξ·ΟΞ·\\n            ΟΞΏΟΟ, Ξ΄ΞΉΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΞΊΞ±ΞΉ ΟΟΞΌΟΞ»Ξ·ΟΟΞ½ΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΟ Ξ΄Ξ―ΞΊΞ±ΞΉΞΏ, ΟΞΏ Ξ΄Ξ―ΞΊΞ±ΞΉΞΏ ΟΞ·Ο ΞΟΟΟΟΞ±ΟΞΊΞ�Ο ΞΞ½ΟΟΞ·Ο ΞΊΞ±ΞΉ ΟΞΉΟ ΟΟΞ΅ΟΞΉΞΊΞ­Ο\\n            Ξ΄ΞΉΞ΅ΞΈΞ½Ξ΅Ξ―Ο ΟΟΞ½ΞΈΞ�ΞΊΞ΅Ο. ΞΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ Ξ΄ΞΉΞ¬ΟΞ±ΞΎΞ·\\n            ΟΟΞ½ Ξ±Ξ½ΟΟΞ­ΟΟ ΟΟΟΞ½ ΞΊΞ±ΟΞ±ΟΟΞ΅Ξ― Ξ±Ξ½ΟΞ―ΞΈΞ΅ΟΞ· ΟΟΞΏΟ ΟΞΏ Ξ½ΟΞΌΞΏ, ΟΞ±ΟΞ΅ΞΉ Ξ±ΟΟΞΏΞ΄ΞΉΞΊΞ±Ξ―ΟΟ Ξ½Ξ± ΞΉΟΟΟΞ΅ΞΉ ΞΊΞ±ΞΉ Ξ±ΟΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ ΟΞ±ΟΟΞ½,\\n            ΟΟΟΞ―Ο ΟΞ΅ ΞΊΞ±ΞΌΞ―Ξ± ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ½Ξ± ΞΈΞ―Ξ³Ξ΅ΟΞ±ΞΉ Ξ· ΞΉΟΟΟΟ ΟΟΞ½ Ξ»ΞΏΞΉΟΟΞ½ ΟΟΟΞ½. Ξ€ΞΏ ΟΞ±ΟΟΞ½ Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅Ξ― ΟΞ· ΟΟΞ½ΞΏΞ»ΞΉΞΊΞ� ΟΟΞΌΟΟΞ½Ξ―Ξ± ΞΌΞ΅ΟΞ±ΞΎΟ\\n            ΟΞ·Ο ΞΟΞ±ΞΉΟΞ΅Ξ―Ξ±Ο ΞΊΞ±ΞΉ ΟΟΞ½ Ξ΅ΟΞΉΟΞΊΞ΅ΟΟΟΞ½/ΟΟΞ·ΟΟΟΞ½\\n            ΟΟΞ½ ΟΞ΅Ξ»Ξ―Ξ΄ΟΞ½ ΞΊΞ±ΞΉ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞΏΟ ΞΊΞ±ΞΉ Ξ΄Ξ΅ Ξ΄Ξ΅ΟΞΌΞ΅ΟΞ΅ΞΉ ΟΞ±ΟΞ¬ ΞΌΟΞ½ΞΏ Ξ±ΟΟΞΏΟΟ. ΞΞ±ΞΌΞ―Ξ± ΟΟΞΏΟΞΏΟΞΏΞ―Ξ·ΟΞ· ΟΟΞ½ ΟΟΟΞ½ Ξ±ΟΟΟΞ½ Ξ΄Ξ΅ ΞΈΞ±\\n            Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΟΟΞ· ΞΊΞ±ΞΉ Ξ΄Ξ΅ ΞΈΞ± Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅Ξ― ΟΞΌΞ�ΞΌΞ± ΟΞ·Ο ΟΟΞΌΟΟΞ½Ξ―Ξ±Ο Ξ±ΟΟΞ�Ο, Ξ΅Ξ¬Ξ½ Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ Ξ΄ΞΉΞ±ΟΟΟΟΞΈΞ΅Ξ― Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ\\n            Ξ΅Ξ½ΟΟΞΌΞ±ΟΟΞΈΞ΅Ξ― ΟΞ΅ Ξ±ΟΟΞ�.\\n        \"],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/policy.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/product-preview", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "LgYSn4UK",
        "block": "{\"symbols\":[\"product\",\"page\",\"subCategory\",\"category\"],\"statements\":[[7,\"div\",true],[10,\"id\",\"product-preview\"],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"unless\",[[24,[\"isMobile\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"col-3 products-filter hide-mobile\"],[8],[0,\"\\n            \"],[1,[28,\"products-filter\",null,[[\"isProducts\",\"markets\",\"sorting\",\"checkedMarket\"],[true,[24,[\"markets\"]],[24,[\"sorting\"]],[24,[\"checkedMarket\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-9 mt-5 pl-lg-5\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"white-container container-fluid pt-4 px-0\"],[8],[0,\"\\n                \"],[7,\"p\",true],[11,\"class\",[29,[\"black-text \",[28,\"if\",[[24,[\"selectedSubCategory\"]],\"display-none\"],null]]]],[8],[9],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"row hide-desktop\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[11,\"class\",[29,[\"col-12  \",[28,\"if\",[[28,\"not\",[[24,[\"selectedSubCategory\"]]],null],\"display-none\"],null]]]],[8],[0,\"\\n                        \"],[7,\"span\",true],[10,\"class\",\"h6 nova-b mb-0\"],[8],[1,[24,[\"selectedSubCategory\",\"name\"]],false],[9],[0,\"\\n                        \"],[7,\"span\",true],[10,\"class\",\"ml-2 blue nova-sb\"],[8],[1,[22,\"productsCount\"],false],[0,\" Ξ ΟΞΏΟΟΞ½ΟΞ±\"],[9],[0,\"   \\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"row mb-5 mt-5 mt-lg-0\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"id\",\"disabled\"],[10,\"class\",\"col-6 col-lg-4 col-xl-4\"],[8],[0,\"\\n                        \"],[7,\"p\",true],[10,\"class\",\"blue-text\"],[8],[0,\"ΞΞ½Ξ¬ ΞΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"onchange\"],[[24,[\"selectedCategory\"]],true,false,[24,[\"categories\"]],\"ΞΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±\",true,[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"selectedCategory\"]]],null]],null]]],{\"statements\":[[0,\"                        \"],[1,[23,4,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"                    \"],[9],[0,\"\\n                    \"],[7,\"div\",true],[10,\"id\",\"disabled\"],[10,\"class\",\"col-6 col-lg-4 col-xl-4\"],[8],[0,\"\\n                        \"],[7,\"p\",true],[11,\"class\",[29,[[28,\"if\",[[24,[\"selectedCategory\"]],\"blue-text\",\"grey-text\"],null]]]],[8],[0,\"ΞΞ½Ξ¬ Ξ₯ΟΞΏΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"disabled\",\"onchange\"],[[24,[\"selectedSubCategory\"]],true,false,[24,[\"subCategories\"]],\"Ξ₯ΟΞΏΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±\",true,[28,\"if\",[[24,[\"selectedCategory\"]],false,true],null],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"selectedSubCategory\"]]],null]],null]]],{\"statements\":[[0,\"                        \"],[1,[23,3,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"isMobile\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"row mb-5 hide-desktop \"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"filterExpanded\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                            \"],[1,[28,\"products-filter\",null,[[\"isProducts\",\"markets\",\"sorting\",\"filterExpanded\",\"checkedMarket\"],[true,[24,[\"markets\"]],[24,[\"sorting\"]],[24,[\"filterExpanded\"]],[24,[\"checkedMarket\"]]]]],false],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                        \"],[7,\"div\",true],[10,\"class\",\"col-4\"],[8],[0,\"\\n                            \"],[7,\"div\",false],[12,\"class\",\"d-flex align-items-center\"],[3,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"filterExpanded\"]]],null],true]],[8],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"h5 nova-sb mb-0\"],[8],[0,\"Ξ¦Ξ―Ξ»ΟΟΞ±\"],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"ember-power-select-status-icon\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n                \"],[7,\"div\",true],[11,\"class\",[29,[\"row \",[28,\"if\",[[28,\"not\",[[24,[\"selectedSubCategory\"]]],null],\"display-none\"],null],\" mb-5\"]]],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 d-flex align-items-center justify-content-between\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row hide-mobile\"],[8],[0,\"\\n                            \"],[7,\"span\",true],[10,\"class\",\"h6 nova-b mb-0\"],[8],[1,[24,[\"selectedSubCategory\",\"name\"]],false],[9],[0,\"\\n                            \"],[7,\"span\",true],[10,\"class\",\"ml-2 blue nova-sb\"],[8],[1,[22,\"productsCount\"],false],[0,\" Ξ ΟΞΏΟΟΞ½ΟΞ±\"],[9],[0,\"   \\n                        \"],[9],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"pagination-container d-flex align-items-center\"],[8],[0,\"\\n                            \"],[7,\"div\",false],[12,\"class\",\"angle-left cursor-pointer\"],[3,\"action\",[[23,0,[]],\"decrementPage\"]],[8],[9],[0,\"\\n                            \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],1],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",1]],[8],[0,\"1\"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"midPages\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"showPrevDots\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"span\",true],[10,\"class\",\"grey\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[24,[\"midPages\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],[23,2,[]]],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",[23,2,[]]]],[8],[1,[23,2,[]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[24,[\"showAfterDots\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"span\",true],[10,\"class\",\"grey\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                            \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],[24,[\"lastPage\"]]],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",[24,[\"lastPage\"]]]],[8],[1,[22,\"lastPage\"],false],[9],[0,\"\\n                            \"],[7,\"div\",false],[12,\"class\",\"angle-right cursor-pointer\"],[3,\"action\",[[23,0,[]],\"incrementPage\"]],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"productsPaginated\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"isMobile\"]]],null,{\"statements\":[[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-lg-8  mb-4 products-container\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row justify-content-between h-100\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-5\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"product\",[23,1,[\"id\"]]]],{\"statements\":[[0,\"                                \"],[7,\"img\",true],[11,\"src\",[23,1,[\"image\"]]],[10,\"class\",\"products-img\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"marketImg\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"img\",true],[10,\"class\",\"market-img m-auto\"],[11,\"src\",[22,\"marketImg\"]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-7 d-flex flex-column justify-content-around\"],[8],[0,\"\\n                                \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"product\",[23,1,[\"id\"]]]],{\"statements\":[[0,\"                                    \"],[7,\"span\",true],[10,\"class\",\"products-name\"],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n                                    \"],[7,\"br\",true],[8],[9],[0,\"\\n\"],[4,\"unless\",[[24,[\"marketImg\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"span\",true],[10,\"class\",\"products-markets\"],[8],[0,\"Ξ£Ξ΅ \"],[1,[28,\"available-markets\",[[23,1,[\"prices\"]]],null],false],[0,\" Ξ±Ξ»ΟΟΞ―Ξ΄Ξ΅Ο\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                                \"],[9],[0,\"\\n                                \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column align-items-end\"],[8],[0,\"\\n                                    \"],[7,\"span\",true],[10,\"class\",\"products-price-text\"],[8],[0,\"ΞΟΟ \"],[7,\"span\",true],[10,\"class\",\"products-price-number\"],[8],[1,[28,\"lowest-price\",[[23,1,[\"prices\"]],[23,1,[\"singlePrice\"]],[24,[\"marketImg\"]]],null],false],[0,\"β¬\"],[9],[9],[0,\"\\n\"],[4,\"if\",[[23,1,[\"isInBasket\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"div\",true],[10,\"class\",\"plusminus-container\"],[8],[0,\"\\n                                        \"],[7,\"button\",false],[12,\"class\",\"product-minus-icon\"],[3,\"action\",[[23,0,[]],\"removePiece\",[23,1,[]]]],[8],[0,\"-\"],[9],[0,\"\\n                                        \"],[7,\"span\",true],[10,\"class\",\"product-plus-minus-text\"],[8],[1,[23,1,[\"count\"]],false],[9],[0,\"\\n                                        \"],[7,\"button\",false],[12,\"class\",\"product-plus-icon\"],[3,\"action\",[[23,0,[]],\"addToCart\",[23,1,[]]]],[8],[0,\"+\"],[9],[0,\"\\n                                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                    \"],[7,\"button\",false],[12,\"class\",\"add-btn\"],[3,\"action\",[[23,0,[]],\"addToCart\",[23,1,[]]]],[8],[7,\"img\",true],[10,\"src\",\"/assets/white-cart.png\"],[10,\"class\",\"add-btn-icon\"],[8],[9],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-lg-8  mb-4 products-container\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row justify-content-between h-100\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-2 col-xl-2 v-center\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"product\",[23,1,[\"id\"]]]],{\"statements\":[[0,\"                                \"],[7,\"img\",true],[11,\"src\",[23,1,[\"image\"]]],[10,\"class\",\"products-img\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-6 col-xl-6 v-center\"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"marketImg\"]]],null,{\"statements\":[[4,\"link-to\",null,[[\"route\",\"model\"],[\"product\",[23,1,[\"id\"]]]],{\"statements\":[[0,\"                                \"],[7,\"span\",true],[10,\"class\",\"products-name\"],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n                                \"],[7,\"br\",true],[8],[9],[0,\"\\n                                \"],[7,\"img\",true],[10,\"class\",\"market-img\"],[11,\"src\",[22,\"marketImg\"]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"link-to\",null,[[\"route\",\"model\"],[\"product\",[23,1,[\"id\"]]]],{\"statements\":[[0,\"                                \"],[7,\"span\",true],[10,\"class\",\"products-name\"],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n                                \"],[7,\"br\",true],[8],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"products-markets\"],[8],[0,\"Ξ£Ξ΅ \"],[1,[28,\"available-markets\",[[23,1,[\"prices\"]]],null],false],[0,\" Ξ±Ξ»ΟΟΞ―Ξ΄Ξ΅Ο\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-3 col-xl-3 v-center justify-content-end flex-column bg-light-blue pb-2\"],[8],[0,\"\\n                                \"],[7,\"div\",true],[10,\"class\",\"mb-4\"],[8],[0,\"\\n                                    \"],[7,\"span\",true],[10,\"class\",\"products-price-text\"],[8],[0,\"ΞΟΟ \"],[7,\"span\",true],[10,\"class\",\"products-price-number\"],[8],[1,[28,\"lowest-price\",[[23,1,[\"prices\"]],[23,1,[\"singlePrice\"]],[24,[\"marketImg\"]]],null],false],[0,\"β¬\"],[9],[9],[0,\"\\n                                \"],[9],[0,\"\\n\"],[4,\"if\",[[23,1,[\"isInBasket\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"div\",true],[10,\"class\",\"plusminus-container\"],[8],[0,\"\\n                                    \"],[7,\"button\",false],[12,\"class\",\"product-minus-icon\"],[3,\"action\",[[23,0,[]],\"removePiece\",[23,1,[]]]],[8],[0,\"-\"],[9],[0,\"\\n                                    \"],[7,\"span\",true],[10,\"class\",\"product-plus-minus-text\"],[8],[1,[23,1,[\"count\"]],false],[9],[0,\"\\n                                    \"],[7,\"button\",false],[12,\"class\",\"product-plus-icon\"],[3,\"action\",[[23,0,[]],\"addToCart\",[23,1,[]]]],[8],[0,\"+\"],[9],[0,\"\\n                                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                \"],[7,\"button\",false],[12,\"class\",\"add-btn\"],[3,\"action\",[[23,0,[]],\"addToCart\",[23,1,[]]]],[8],[7,\"img\",true],[10,\"src\",\"/assets/white-cart.png\"],[10,\"class\",\"add-btn-icon\"],[8],[9],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                    \\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null],[0,\"                    \"],[7,\"p\",true],[11,\"class\",[29,[\" grey \",[28,\"if\",[[28,\"eq\",[[24,[\"productsCount\"]],0],null],\"display-none\"],null]]]],[8],[0,\"Ξ ΟΞΉΞΌΞ� ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½\\n                        ΟΞΏΟ\\n                        Ξ±Ξ½Ξ±Ξ³ΟΞ¬ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΞΏΟΞ¬ ΟΞ·Ξ½ ΞΌΞ­ΟΞ· ΟΞΉΞΌΞ� ΟΟΞ»Ξ·ΟΞ·Ο Ξ³ΞΉΞ± ΟΞΉΟ \"],[7,\"b\",true],[8],[1,[22,\"date\"],false],[9],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/product-preview.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/product", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "EuuF0xXt",
        "block": "{\"symbols\":[\"market\",\"sort\"],\"statements\":[[7,\"div\",true],[10,\"id\",\"product\"],[10,\"class\",\"container-fluid navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"white-container container pt-4\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row product-container\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-4 offset-lg-2 d-flex align-items-start\"],[8],[0,\"\\n                \"],[7,\"img\",true],[10,\"class\",\"product-img\"],[11,\"src\",[24,[\"product\",\"image\"]]],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center\"],[8],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"product-name\"],[8],[1,[24,[\"product\",\"name\"]],false],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"product-date-text\"],[8],[0,\"Ξ ΟΞΉΞΌΞ� ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ ΟΞΏΟ Ξ±Ξ½Ξ±Ξ³ΟΞ¬ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΞΏΟΞ¬ ΟΞ·Ξ½ ΞΌΞ­ΟΞ· ΟΞΉΞΌΞ� ΟΟΞ»Ξ·ΟΞ·Ο Ξ³ΞΉΞ± ΟΞΉΟ \"],[7,\"b\",true],[8],[1,[22,\"date\"],false],[9],[9],[0,\" \\n                \"],[7,\"span\",true],[10,\"class\",\"product-markets\"],[8],[0,\"Ξ£Ξ΅ \"],[1,[28,\"available-markets\",[[24,[\"product\",\"prices\"]]],null],false],[0,\" Ξ±Ξ»ΟΟΞ―Ξ΄Ξ΅Ο\"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"product\",\"isInBasket\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"plusminus-container\"],[8],[0,\"\\n                    \"],[7,\"button\",false],[12,\"class\",\"product-minus-icon\"],[3,\"action\",[[23,0,[]],\"removePiece\",[24,[\"product\"]]]],[8],[0,\"-\"],[9],[0,\"\\n                    \"],[7,\"span\",true],[10,\"class\",\"product-plus-minus-text\"],[8],[1,[24,[\"product\",\"count\"]],false],[9],[0,\"\\n                    \"],[7,\"button\",false],[12,\"class\",\"product-plus-icon\"],[3,\"action\",[[23,0,[]],\"addToCart\",[24,[\"product\"]]]],[8],[0,\"+\"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[7,\"button\",false],[12,\"class\",\"product-add-btn add-btn\"],[3,\"action\",[[23,0,[]],\"addToCart\",[24,[\"product\"]]]],[8],[7,\"img\",true],[10,\"class\",\"product-cart\"],[10,\"src\",\"/assets/white-cart.png\"],[8],[9],[0,\"Ξ ΟΞΏΟΞΈΞ�ΞΊΞ· ΟΟΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ\"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"d-flex align-items-center ml-lg-5 pl-lg-5 mt-5\"],[8],[0,\"\\n            \"],[7,\"div\",false],[12,\"class\",\"sort-icon-bg\"],[3,\"action\",[[23,0,[]],\"toggleSorting\"]],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"sort-icon\"],[8],[0,\"β΅\"],[9],[0,\"\\n            \"],[9],[0,\"        \\n            \"],[7,\"div\",true],[10,\"class\",\"product-sort-power-select\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"onchange\"],[[24,[\"selectedSorting\"]],true,false,[24,[\"sortingOptions\"]],\"ΞΟΞΉΞ»Ξ­ΞΎΟΞ΅\",true,[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"selectedSorting\"]]],null]],null]]],{\"statements\":[[0,\"                \"],[1,[23,2,[]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row product-list-container\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"marketPrices\"]]],null,{\"statements\":[[4,\"if\",[[23,1,[\"price\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"product-market-container col-12col-md-6 col-lg-6 offset-lg-3\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-4 col-lg-2 col-xl-2\"],[8],[0,\"\\n                \"],[7,\"img\",true],[11,\"src\",[23,1,[\"merchant\",\"image\"]]],[10,\"class\",\"products-img\"],[8],[9],[0,\"\\n            \"],[9],[0,\"                \\n            \"],[7,\"div\",true],[10,\"class\",\"col-5 col-lg-3 col-xl-3 d-flex flex-column justify-content-center\"],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"product-market-name\"],[8],[1,[23,1,[\"merchant\",\"name\"]],false],[9],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"product-price-text hide-desktop\"],[8],[1,[23,1,[\"price_normalized\"]],false],[7,\"span\",true],[10,\"class\",\"nova-r\"],[8],[0,\" β¬ Ξ±Ξ½Ξ¬ ΞΊΞΉΞ»\"],[9],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"col-3 col-lg-7 col-xl-7 v-center d-flex flex-column align-items-end justify-content-center\"],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"product-price-number\"],[8],[1,[28,\"decimals\",[[23,1,[\"price\"]]],null],false],[0,\"β¬\"],[9],[0,\"\\n                \"],[7,\"span\",true],[10,\"class\",\"product-price-text hide-mobile\"],[8],[1,[23,1,[\"price_normalized\"]],false],[7,\"span\",true],[10,\"class\",\"nova-r\"],[8],[0,\" β¬ Ξ±Ξ½Ξ¬ ΞΊΞΉΞ»\"],[9],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offset-md-3 offset-lg-3 offset-xl-3 mt-lg-5 mt-xl-5\"],[8],[0,\"\\n    \"],[1,[28,\"high-charts\",null,[[\"chartOptions\",\"content\"],[[24,[\"chartOptions\"]],[24,[\"chartData\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"nova-r text-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offset-md-3 offset-lg-3 offset-xl-3 pt-lg-5 mt-lg-5 mt-xl-5 mb-lg-5 pb-lg-5\"],[8],[0,\"ΞΞ΅Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ΅Ξ½Ξ· Ξ΅Ξ²Ξ΄ΞΏΞΌΞ¬Ξ΄Ξ± ΟΞ·Ξ½ Ξ΅Ξ»Ξ¬ΟΞΉΟΟΞ· ΟΞΉΞΌΞ�, ΟΞ·Ξ½ ΞΌΞ­ΟΞ· ΟΞΉΞΌΞ� ΞΊΞ±ΞΉ ΟΞ·Ξ½ Ξ±Ξ»ΟΟΞ―Ξ΄Ξ± ΞΌΞ΅ ΟΞ·Ξ½ Ξ΅Ξ»Ξ¬ΟΞΉΟΟΞ· ΟΞΉΞΌΞ� Ξ³ΞΉΞ± ΟΞΏ ΟΟΞΏΟΟΞ½\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"charts\",[24,[\"product\",\"id\"]]]],{\"statements\":[[0,\"    \"],[7,\"button\",true],[10,\"class\",\"more-btn mt-lg-5 mb-lg-5\"],[8],[0,\"Ξ ΞΞ‘ΞΞ£Ξ£ΞΞ€ΞΞ‘Ξ\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row position-relative\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"product-map-container-bg\"],[8],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 offset-md-2 offset-lg-2 offset-xl-2 mt-lg-5 mt-xl-5 pt-lg-5\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row product-map-container\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-md-6 col-lg-6 col-xl-6 product-map-img py-4\"],[8],[0,\"\\n                \"],[9],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-md-6 col-lg-6 col-xl-6 product-map-text-btn-wrapper py-4\"],[8],[0,\"\\n                    \"],[7,\"p\",true],[10,\"class\",\"product-map-text\"],[8],[0,\"ΞΞ΅Ξ―ΟΞ΅ ΟΞ»Ξ± ΟΞ± ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞ±\"],[7,\"br\",true],[8],[9],[0,\" ΟΟΞΏΞ½ Ξ΄ΞΉΞ±Ξ΄ΟΞ±ΟΟΞΉΞΊΟ ΟΞ¬ΟΟΞ·\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\",\"model\"],[\"shops\",[24,[\"product\",\"id\"]]]],{\"statements\":[[0,\"                    \"],[7,\"button\",true],[10,\"class\",\"more-btn\"],[8],[0,\"Ξ§ΞΞ‘Ξ€ΞΞ£\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/product.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/products", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "vkvElW8f",
        "block": "{\"symbols\":[\"subCategory\",\"category\"],\"statements\":[[7,\"div\",true],[10,\"id\",\"products\"],[10,\"class\",\"container-fluid navbar-top-offset\"],[8],[0,\"\\n\"],[0,\"    \\n    \"],[7,\"div\",true],[10,\"class\",\"bg\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"white-container container pt-4\"],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"mt-50 blue-title\"],[8],[0,\"Ξ ΟoΟΟΞ½ΟΞ±\"],[9],[0,\"\\n            \"],[7,\"p\",true],[11,\"class\",[29,[\"black-text mb-5\",[28,\"if\",[[24,[\"selectedSubCategory\"]],\"display-none\"],null]]]],[8],[0,\"ΞΟΞΉΞ»Ξ­ΞΎΟΞ΅ ΟΟΟΟΞ± ΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ± ΞΊΞ±ΞΉ ΟΟΞ· ΟΟΞ½Ξ­ΟΞ΅ΞΉΞ±\\n                ΟΟΞΏΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ± Ξ³ΞΉΞ± Ξ½Ξ± Ξ΅ΞΌΟΞ±Ξ½ΞΉΟΟΞΏΟΞ½ Ξ±ΟΞΏΟΞ΅Ξ»Ξ­ΟΞΌΞ±ΟΞ±\"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"id\",\"disabled\"],[10,\"class\",\"col-12 col-sm-12 col-md-5 col-lg-5 offset-md-1 offset-lg-1 mb-5 mb-lg-0\"],[8],[0,\"\\n                    \"],[7,\"p\",true],[10,\"class\",\"blue-text text-lg-left text-center\"],[8],[0,\"ΞΞ½Ξ¬ ΞΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"onchange\"],[[24,[\"selectedCategory\"]],true,false,[24,[\"categories\"]],\"ΞΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±\",true,[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"selectedCategory\"]]],null]],null]]],{\"statements\":[[0,\"                    \"],[1,[23,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[24,[\"categoryError\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\",true],[10,\"class\",\"products-error-text\"],[8],[0,\"ΞΟΞ±ΟΞ±Ξ―ΟΞ·ΟΞΏ ΟΞ΅Ξ΄Ξ―ΞΏ\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n                \"],[7,\"div\",true],[10,\"id\",\"enabled\"],[10,\"class\",\"col-12 col-sm-12 col-md-5 col-lg-5\"],[8],[0,\"\\n                    \"],[7,\"p\",true],[11,\"class\",[29,[[28,\"if\",[[24,[\"selectedCategory\"]],\"blue-text\",\"grey-text\"],null],\" text-lg-left text-center\"]]],[8],[0,\"ΞΞ½Ξ¬ Ξ₯ΟΞΏΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"selected\",\"renderInPlace\",\"searchEnabled\",\"options\",\"placeholder\",\"allowClear\",\"disabled\",\"onchange\"],[[24,[\"selectedSubCategory\"]],true,false,[24,[\"subCategories\"]],\"Ξ₯ΟΞΏΞΊΞ±ΟΞ·Ξ³ΞΏΟΞ―Ξ±\",true,[28,\"if\",[[24,[\"selectedCategory\"]],false,true],null],[28,\"action\",[[23,0,[]],[28,\"mut\",[[24,[\"selectedSubCategory\"]]],null]],null]]],{\"statements\":[[0,\"                    \"],[1,[23,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[28,\"or\",[[24,[\"subCategoryError\"]],[24,[\"categoryError\"]]],null]],null,{\"statements\":[[0,\"                \"],[7,\"span\",true],[10,\"class\",\"products-error-text\"],[8],[0,\"ΞΟΞ±ΟΞ±Ξ―ΟΞ·ΟΞΏ ΟΞ΅Ξ΄Ξ―ΞΏ\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                    \"],[7,\"button\",false],[12,\"class\",\"src-products\"],[3,\"action\",[[23,0,[]],\"goToProducts\"]],[8],[0,\"ΞΞ½Ξ±ΞΆΞ�ΟΞ·ΟΞ·\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/products.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/rantevou", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "GCndi19z",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"appointment hide-mobile\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"appointment-container\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"appointment-clip\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/top.png\"],[10,\"class\",\"top-img\"],[8],[9],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/top_bg.png\"],[10,\"class\",\"top_bg-img\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"text-container\"],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"desktop-appointment-text\"],[8],[0,\"Ξ€ΞΏ Ξ½Ξ­ΞΏ ΟΞ±ΟΞ±ΟΞ·ΟΞ·ΟΞ�ΟΞΉΞΏ ΟΞΉΞΌΟΞ½ ΞΌΞ΅ ΟΞ·Ξ½\"],[7,\"br\",true],[8],[9],[0,\" ΟΟΞ·ΟΞ΅ΟΞ―Ξ± Click Away!\"],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"mobile-appointment-text\"],[8],[0,\"Ξ€ΞΏ Ξ½Ξ­ΞΏ ΟΞ±ΟΞ±ΟΞ·ΟΞ·ΟΞ�ΟΞΉΞΏ ΟΞΉΞΌΟΞ½ ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞ·ΟΞ΅ΟΞ―Ξ± Click Away!\"],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"desktop-appointment-desc\"],[8],[0,\"ΞΞΉΞ± ΞΊΞ±ΞΉΞ½ΞΏΟΟΞΌΞ± Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� Ξ³ΞΉΞ± ΞΊΞΉΞ½Ξ·ΟΞ¬, Ξ±ΟΟ ΟΟΞΏΟ\"],[7,\"br\",true],[8],[9],[0,\" ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ²ΟΞ΅Ξ―ΟΞ΅\\n                ΞΊΞ±ΞΉ Ξ½Ξ±\\n                ΟΟΞ³ΞΊΟΞ―Ξ½Ξ΅ΟΞ΅ ΟΞΉΞΌΞ­Ο ΟΟΞΏΟΟΞ½ΟΟΞ½\"],[7,\"br\",true],[8],[9],[0,\" ΞΊΞ±ΞΉ Ξ½Ξ± ΟΞ±ΟΞ±Ξ»Ξ¬Ξ²Ξ΅ΟΞ΅ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΞ±Ο ΞΌΞ΅ ΟΞ·Ξ½\"],[7,\"br\",true],[8],[9],[0,\" ΟΟΞ·ΟΞ΅ΟΞ―Ξ± Click\\n                Away!\\n            \"],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"mobile-appointment-desc\"],[8],[0,\"ΞΞΉΞ± ΞΊΞ±ΞΉΞ½ΞΏΟΟΞΌΞ± Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� Ξ³ΞΉΞ± ΞΊΞΉΞ½Ξ·ΟΞ¬, Ξ±ΟΟ ΟΟΞΏΟ ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ²ΟΞ΅Ξ―ΟΞ΅ ΞΊΞ±ΞΉ Ξ½Ξ±\\n                ΟΟΞ³ΞΊΟΞ―Ξ½Ξ΅ΟΞ΅ ΟΞΉΞΌΞ­Ο ΟΟΞΏΟΟΞ½ΟΟΞ½ ΞΊΞ±ΞΉ Ξ½Ξ± ΟΞ±ΟΞ±Ξ»Ξ¬Ξ²Ξ΅ΟΞ΅ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΞ±Ο ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞ·ΟΞ΅ΟΞ―Ξ± Click Away!\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"button\",true],[10,\"class\",\"register-btn\"],[10,\"data-toggle\",\"modal\"],[10,\"data-target\",\"#exampleModal\"],[8],[0,\"ΞΞ³Ξ³ΟΞ±ΟΞ� eShop\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"position-relative hide-desktop\"],[8],[0,\"\\n  \"],[7,\"p\",true],[10,\"class\",\"rantevou-mob-text\"],[8],[0,\"Ξ€Ξ± ΟΞ±Ξ½ΟΞ΅Ξ²ΞΏΟ ΞΌΞΏΟ\"],[9],[0,\"\\n  \"],[7,\"img\",true],[10,\"src\",\"/assets/rantevou-mob.png\"],[10,\"class\",\"rantevou-mob\"],[8],[9],[0,\"\\n  \"],[7,\"button\",true],[10,\"class\",\"register-btn\"],[10,\"data-toggle\",\"modal\"],[10,\"data-target\",\"#exampleModal\"],[8],[0,\"ΞΞ³Ξ³ΟΞ±ΟΞ� eShop\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"modal show\"],[10,\"id\",\"exampleModal\"],[10,\"tabindex\",\"-1\"],[10,\"role\",\"dialog\"],[10,\"aria-labelledby\",\"exampleModalLabel\"],[10,\"aria-hidden\",\"false\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-dialog modal-lg\"],[10,\"role\",\"document\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-header\"],[8],[0,\"\\n              \"],[7,\"h5\",true],[10,\"class\",\"modal-title\"],[10,\"id\",\"exampleModalLabel\"],[8],[0,\"ΞΞ³Ξ³ΟΞ±ΟΞ� Ξ΅ΟΞΉΟΞ΅ΞΉΟΞ�ΟΞ΅ΟΞ½\"],[9],[0,\"\\n              \"],[7,\"button\",true],[10,\"class\",\"close\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"aria-hidden\",\"true\"],[8],[0,\"Γ\"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-body\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"container pt-1\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"col-12 offset-lg-1 col-lg-9\"],[8],[0,\"\\n                            \"],[7,\"p\",true],[10,\"class\",\"modal-desc\"],[8],[0,\"ΞΞΉΞ± Ξ½Ξ± Ξ΄ΞΉΞ±ΟΟΞ½Ξ΄Ξ­ΟΞ΅ΟΞ΅ ΟΞΏ eShop ΟΞ±Ο ΞΌΞ΅ ΟΞ·Ξ½ ΟΟΞ·ΟΞ΅ΟΞ―Ξ± \\\"click away ΟΞ±Ξ½ΟΞ΅Ξ²ΞΏΟ\\\" ΟΞΏΟ e-katanalotis ΟΟΞΌΟΞ»Ξ�ΟΟΟΞ΅ ΟΞ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± ΟΞ·Ο Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ·Ο ΟΞ±Ο ΞΊΞ±ΞΉ ΞΈΞ± ΟΞ±Ο Ξ±ΟΞΏΟΟΞ±Ξ»ΞΏΟΞ½ ΟΟΞΏ email ΟΞΏΟ ΞΈΞ± Ξ΄Ξ·Ξ»ΟΟΞ΅ΟΞ΅ ΞΏΞ΄Ξ·Ξ³Ξ―Ξ΅Ο Ξ΄ΞΉΞ±ΟΟΞ½Ξ΄Ξ΅ΟΞ·Ο.\"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[7,\"a\",true],[10,\"href\",\"clickaway-main.zip\"],[10,\"target\",\"_blank\"],[8],[0,\"                        \\n                            \"],[7,\"button\",true],[10,\"class\",\"git-btn\"],[8],[0,\"ΞΞ΄Ξ·Ξ³Ξ―Ξ΅Ο ΞΞΉΞ±ΟΟΞ½Ξ΄Ξ΅ΟΞ·Ο\"],[9],[0,\"                                \\n                            \"],[9],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                            \"],[7,\"p\",true],[10,\"class\",\"solomi text-center\"],[8],[0,\"Ξ Ξ±ΟΞ±ΞΊΞ±Ξ»ΞΏΟΞΌΞ΅ ΟΞΏΞ»Ο ΟΟΞΌΟΞ»Ξ·ΟΟΟΟΞ΅ ΟΞ»Ξ± ΟΞ± ΟΞ΅Ξ΄Ξ―Ξ±.\"],[9],[0,\"\\n                        \"],[9],[0,\"\\n\\n                    \"],[7,\"div\",true],[10,\"class\",\"register-input-container\"],[8],[0,\"                    \\n                        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"register-input\"],[8],[0,\"\\n                                \"],[7,\"input\",true],[10,\"id\",\"name\"],[10,\"name\",\"name\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"error-text\"],[8],[0,\"Ξ₯ΟΞΏΟΟΞ΅ΟΟΞΉΞΊΟ ΟΞ΅Ξ΄Ξ―ΞΏ\"],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"register-input-name\"],[8],[0,\"ΞΟΟΞ½ΟΞΌΞ―Ξ± Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ±Ο*\"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"register-input\"],[8],[0,\"\\n                                \"],[7,\"input\",true],[10,\"id\",\"vat\"],[10,\"name\",\"vat\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"error-text\"],[8],[0,\"Ξ₯ΟΞΏΟΟΞ΅ΟΟΞΉΞΊΟ ΟΞ΅Ξ΄Ξ―ΞΏ\"],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"register-input-name\"],[8],[0,\"ΞΞ¦Ξ*\"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"register-input\"],[8],[0,\"\\n                                \"],[7,\"input\",true],[10,\"id\",\"address\"],[10,\"name\",\"address\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"error-text\"],[8],[0,\"Ξ₯ΟΞΏΟΟΞ΅ΟΟΞΉΞΊΟ ΟΞ΅Ξ΄Ξ―ΞΏ\"],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"register-input-name\"],[8],[0,\"ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·*\"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"register-input\"],[8],[0,\"\\n                                \"],[7,\"input\",true],[10,\"id\",\"email\"],[10,\"name\",\"email\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"error-text\"],[8],[0,\"Ξ₯ΟΞΏΟΟΞ΅ΟΟΞΉΞΊΟ ΟΞ΅Ξ΄Ξ―ΞΏ\"],[9],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"register-input-name\"],[8],[0,\"Email*\"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"            \\n                \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"modal-footer\"],[8],[0,\"\\n                \"],[7,\"button\",false],[12,\"class\",\"modal-btn h5 mt-4\"],[3,\"action\",[[23,0,[]],\"submit\"]],[8],[0,\"ΞΞΊΞ΄ΞΏΟΞ· ΞΞ»Ξ΅ΞΉΞ΄ΞΉΞΏΟ Ξ³ΞΉΞ± Click Away\"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"modal show\"],[10,\"id\",\"responseModal\"],[10,\"tabindex\",\"-1\"],[10,\"role\",\"dialog\"],[10,\"aria-labelledby\",\"responseModalLabel\"],[10,\"aria-hidden\",\"false\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"modal-dialog\"],[10,\"role\",\"document\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-header\"],[8],[0,\"\\n            \"],[7,\"button\",true],[10,\"class\",\"close\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"type\",\"button\"],[8],[0,\"\\n            \"],[7,\"span\",true],[10,\"aria-hidden\",\"true\"],[8],[0,\"Γ\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-body\"],[8],[0,\" \\n            \"],[7,\"p\",true],[10,\"class\",\"solomi semibold text-center\"],[10,\"id\",\"responseMessage\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/rantevou.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/santas-basket", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "ZBBprE4e",
        "block": "{\"symbols\":[\"product\",\"index\",\"page\",\"retailer\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"chris-bg\"],[8],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"navbar-top-offset container householdBasket-container\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"pt-4\"],[8],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"grey\"],[8],[0,\"Ξ€ΞΏ ΞΊΞ±Ξ»Ξ¬ΞΈΞΉ ΟΞΏΟ ΞΞ· ΞΞ±ΟΞ―Ξ»Ξ·\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"blue-text mt-4\"],[8],[0,\"ΞΟΞΉΞ»ΞΏΞ³Ξ� ΞΞ»ΟΟΞ―Ξ΄Ξ±Ο\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex w-100 flex-wrap\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",false],[12,\"class\",[29,[\"retailer-wrapper \",[28,\"if\",[[23,4,[\"active\"]],\"active\"],null]]]],[3,\"action\",[[23,0,[]],\"selectRetailer\",[23,4,[]]]],[8],[0,\"\\n            \"],[7,\"img\",true],[11,\"src\",[29,[[23,4,[\"logo\"]]]]],[10,\"class\",\"retailer-img\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"row my-5\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"grey\"],[8],[0,\"Ξ ΟΞΉΞΌΞ� ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ ΟΞΏΟ Ξ±Ξ½Ξ±Ξ³ΟΞ¬ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΞΏΟΞ¬ ΟΞ·Ξ½ Ξ΅Ξ²Ξ΄ΞΏΞΌΞ¬Ξ΄Ξ± \"],[1,[22,\"from\"],false],[0,\" ΞΌΞ΅ \"],[1,[22,\"to\"],false],[0,\".\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-md-8 col-lg-8 col-xl-12 d-flex align-items-center justify-content-between mb-3\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n                    \"],[7,\"span\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"Ξ ΟΞΏΟΟΞ½ΟΞ± ΞΊΞ±Ξ»Ξ±ΞΈΞΉΞΏΟ\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"pagination-container d-flex align-items-center\"],[8],[0,\"\\n                \"],[7,\"div\",false],[12,\"class\",\"angle-left cursor-pointer\"],[3,\"action\",[[23,0,[]],\"decrementPage\"]],[8],[9],[0,\"\\n                \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],1],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",1]],[8],[0,\"1\"],[9],[0,\"\\n\"],[4,\"if\",[[24,[\"midPages\"]]],null,{\"statements\":[[4,\"if\",[[24,[\"showPrevDots\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\",true],[10,\"class\",\"grey\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[24,[\"midPages\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],[23,3,[]]],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",[23,3,[]]]],[8],[1,[23,3,[]],false],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[4,\"if\",[[24,[\"showAfterDots\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\",true],[10,\"class\",\"grey\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                \"],[7,\"span\",false],[12,\"class\",[29,[\"mx-2 cursor-pointer \",[28,\"if\",[[28,\"eq\",[[24,[\"selectedPage\"]],[24,[\"lastPage\"]]],null],\"blue\",\"grey\"],null]]]],[3,\"action\",[[23,0,[]],\"selectPage\",[24,[\"lastPage\"]]]],[8],[1,[22,\"lastPage\"],false],[9],[0,\"\\n                \"],[7,\"div\",false],[12,\"class\",\"angle-right cursor-pointer\"],[3,\"action\",[[23,0,[]],\"incrementPage\"]],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col-12\"],[8],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"productsPaginated\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\",true],[10,\"class\",\"col-12 col-sm-12 col-lg-12\"],[8],[0,\"\\n                    \"],[7,\"div\",true],[10,\"class\",\"  mb-4 products-container\"],[8],[0,\"\\n                        \"],[7,\"div\",true],[10,\"class\",\"row justify-content-between h-100\"],[8],[0,\"\\n                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-2 col-xl-2 v-center\"],[8],[0,\"\\n                                \"],[7,\"img\",true],[11,\"src\",[23,1,[\"IMAGE\"]]],[10,\"class\",\"products-img\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[11,\"class\",[29,[\"d-flex flex-column justify-content-center \",[28,\"if\",[[28,\"or\",[[23,1,[\"VARIANCE\"]],[24,[\"variance\"]]],null],\"col-xl-4\",\"col-xl-7\"],null]]]],[8],[0,\"\\n\\n                                \"],[7,\"p\",true],[10,\"class\",\"householdBasket-category-name\"],[8],[1,[23,1,[\"CATEGORY_NAME\"]],false],[9],[0,\"\\n                                \"],[7,\"p\",true],[10,\"class\",\"householdBasket-product-name\"],[8],[1,[23,1,[\"NAME\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[7,\"div\",true],[11,\"class\",[29,[\"d-flex flex-column justify-content-center align-items-end \",[28,\"if\",[[28,\"or\",[[23,1,[\"VARIANCE\"]],[24,[\"variance\"]]],null],\"col-xl-2\",\"col-xl-3 pr-5\"],null]]]],[8],[0,\"\\n                                \"],[7,\"span\",true],[10,\"class\",\"householdBasket-products-price-number\"],[8],[1,[23,1,[\"PRICE\"]],false],[0,\"β¬\"],[7,\"span\",true],[10,\"class\",\"unit\"],[8],[0,\"/ΟΞΌΟ\"],[9],[9],[0,\"\\n                                \\n                            \"],[9],[0,\"\\n\"],[4,\"if\",[[28,\"or\",[[23,1,[\"VARIANCE\"]],[24,[\"variance\"]]],null]],null,{\"statements\":[[0,\"                            \"],[7,\"div\",true],[10,\"class\",\"col-lg-3 col-xl-3 d-flex flex-column justify-content-center align-items-end h-100\"],[8],[0,\"\\n\"],[4,\"if\",[[23,1,[\"VARIANCE\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"div\",true],[10,\"class\",\"w-100 h-100\"],[8],[0,\"\\n                                    \"],[1,[28,\"high-charts\",null,[[\"chartOptions\",\"content\"],[[28,\"set-chart-options\",[[23,1,[\"VARIANCE\"]],\"product\"],null],[28,\"set-chart-data\",[[23,1,[\"VARIANCE\"]]],null]]]],false],[0,\"\\n                                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[24,[\"variance\"]]],null,{\"statements\":[[0,\"                                \"],[7,\"div\",true],[10,\"class\",\"w-100 h-100\"],[8],[0,\"\\n                                    \"],[1,[28,\"high-charts\",null,[[\"chartOptions\",\"content\"],[[28,\"set-chart-options\",[[24,[\"variance\"]],\"category\",[23,1,[\"CATEGORY\"]]],null],[28,\"set-chart-data\",[[24,[\"variance\"]],[23,1,[\"CATEGORY\"]]],null]]]],false],[0,\"\\n                                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"                \"],[1,[28,\"log\",[[24,[\"variance\"]]],null],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/santas-basket.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/shops", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "8xX17mFK",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"id\",\"shops\"],[10,\"class\",\"container-fluid navbar-top-offset px-0\"],[8],[0,\"\\n    \"],[1,[28,\"map-component\",null,[[\"product\",\"merchants\",\"controller\",\"shops\",\"regionQuery\",\"avgPrice\"],[[24,[\"product\"]],[24,[\"merchants\"]],[23,0,[]],[24,[\"filteredShopsByRegion\"]],[24,[\"regionQuery\"]],[24,[\"avgPrice\"]]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/shops.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/terms", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "pa3CCGxB",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container mt-5 navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"h2\",true],[10,\"class\",\"mb-5\"],[8],[0,\"ΞΟΞΏΞΉ Ξ§ΟΞ�ΟΞ·Ο\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Ξ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΟΞ±ΟΞ­ΟΞ΅ΞΉ ΟΞΉΟ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞ·Ο ΟΟΞΏΟΟ Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ΅Ο / ΟΞ΅Ξ»Ξ¬ΟΞ΅Ο ΟΞ·Ο ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΏΟΟ Ξ±ΞΊΟΞ»ΞΏΟΞΈΞΏΟΟ\\n        ΞΟΞΏΟΟ Ξ§ΟΞ�ΟΞ·Ο. Ξ Ξ±Ξ½Ξ¬Ξ³Ξ½ΟΟΞ· ΟΞΏΟ ΟΞ±ΟΟΞ½ΟΞΏΟ ΞΊΞ΅ΞΉΞΌΞ­Ξ½ΞΏΟ Ξ±ΟΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ ΟΟΞΉΞ½ Ξ±ΟΟ ΟΞ· ΟΟΞ�ΟΞ· ΟΟΞ½ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞ·Ο Ξ΅ΟΞ±ΞΉΟΞ―Ξ±Ο. Ξ\\n        ΞΞ‘ΞΞΞΞΞ£ΞΞΞ£ ΞΞΞΞ€Ξ‘ΞΞΞ©Ξ ΞΞΞΞ‘Ξ©Ξ\\n        & ΞΞΞΞΞΞΞ£ Ξ.Ξ. Ξ΄Ξ·Ξ»ΟΞ½Ξ΅ΞΉ ΟΟΞΏΞ½ Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ· ΟΟΞΉ Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΞΉ ΞΊΞ¬ΞΈΞ΅ Ξ±Ξ½Ξ±ΞΌΞ΅Ξ½ΟΞΌΞ΅Ξ½ΞΏ ΞΌΞ­ΟΟΞΏ, Ξ­ΟΟΞΉ ΟΟΟΞ΅ ΟΞ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± ΞΊΞ±ΞΉ ΞΏΞΉ\\n        ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΞΏΟ Ξ΅ΞΌΟΞ΅ΟΞΉΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΟΞ·Ξ½ ΞΉΟΟΞΏΟΞ΅Ξ»Ξ―Ξ΄Ξ± ΟΞ·Ο Ξ½Ξ± Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΞ»Ξ�ΟΞ·, Ξ±ΞΊΟΞΉΞ²Ξ� ΞΊΞ±ΞΉ Ξ±ΞΎΞΉΟΟΞΉΟΟΞ±.\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px; margin-bottom: 10px;\"],[8],[0,\" \"],[7,\"b\",true],[8],[0,\"- Ξ Ξ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΞ� ΞΉΞ΄ΞΉΞΏΞΊΟΞ·ΟΞ―Ξ±\"],[9],[0,\" \"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\" Ξ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΊΞ±ΞΉ ΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ ΟΞ·Ο (ΟΟΞΌΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΟΞ½ ΞΉΞ΄Ξ΅ΟΞ½, ΞΊΞ΅ΞΉΞΌΞ­Ξ½ΟΞ½, Ξ³ΟΞ±ΟΞΉΞΊΟΞ½, Ξ΅ΞΉΞΊΟΞ½ΟΞ½,\\n        ΟΟΟΞΏΞ³ΟΞ±ΟΞΉΟΞ½, ΟΟΞ΅Ξ΄Ξ―ΟΞ½, Ξ»ΞΏΞ³ΞΉΟΞΌΞΉΞΊΞΏΟ, ΟΟΞ½Ξ΄Ξ­ΟΞΌΟΞ½, newsletter ΞΊΞ»Ο) Ξ±ΟΞΏΟΞ΅Ξ»ΞΏΟΞ½ ΟΞ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΞ� ΞΉΞ΄ΞΉΞΏΞΊΟΞ·ΟΞ―Ξ± ΟΞ·Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ±Ο\\n        ΞΞ‘ΞΞΞΞΞ£ΞΞΞ£ ΞΞΞΞ€Ξ‘ΞΞΞ©Ξ ΞΞΞΞ‘Ξ©Ξ & ΞΞΞΞΞΞΞ£\\n        Ξ.Ξ. ΞΊΞ±ΞΉ ΟΟΞΏΟΟΞ±ΟΞ΅ΟΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏΟΟ Ξ΅Ξ»Ξ»Ξ·Ξ½ΞΉΞΊΞΏΟΟ, ΞΊΞΏΞΉΞ½ΞΏΟΞΉΞΊΞΏΟΟ ΞΊΞ±ΞΉ Ξ΄ΞΉΞ΅ΞΈΞ½Ξ΅Ξ―Ο Ξ½ΟΞΌΞΏΟΟ ΟΞ΅ΟΞ― Ξ΅ΞΌΟΞΏΟΞΉΞΊΟΞ½ ΟΞ·ΞΌΞ¬ΟΟΞ½ ΞΊΞ±ΞΉ\\n        Ξ²ΞΉΞΏΞΌΞ·ΟΞ±Ξ½ΞΉΞΊΞ�Ο ΞΊΞ±ΞΉ ΟΞ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΞ�Ο ΞΉΞ΄ΞΉΞΏΞΊΟΞ·ΟΞ―Ξ±Ο ΞΊΞ±ΞΈΟΟ Ξ΅ΟΞ―ΟΞ·Ο Ξ· ΟΞ±ΟΞΏΟΟΞ―Ξ±ΟΞ· ΟΟΞ½ ΟΞ±ΟΞ±ΟΞ¬Ξ½Ο ΟΟΞ·Ξ½ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο\\n        ΟΞ΅ ΞΊΞ±ΞΌΞ―Ξ± ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ΄Ξ΅Ξ½ ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ\\n        Ξ½Ξ± Ξ΅ΞΊΞ»Ξ±ΞΌΞ²Ξ¬Ξ½ΞΏΞ½ΟΞ±ΞΉ ΟΟ ΞΌΞ΅ΟΞ±Ξ²Ξ―Ξ²Ξ±ΟΞ· Ξ� Ξ΅ΞΊΟΟΟΞ·ΟΞ· Ξ±Ξ΄Ξ΅Ξ―Ξ±Ο Ξ� Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞΏΟ ΟΟΞ�ΟΞ·Ο ΟΞΏΟΟ.\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"\\n        Ξ Ξ±Ξ½ΟΞΉΞ³ΟΞ±ΟΞ�, Ξ±Ξ½Ξ±Ξ»ΞΏΞ³ΞΉΞΊΞ� / ΟΞ·ΟΞΉΞ±ΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ±ΟΞ� ΞΊΞ±ΞΉ ΞΌΞ·ΟΞ±Ξ½ΞΉΞΊΞ� Ξ±Ξ½Ξ±ΟΞ±ΟΞ±Ξ³ΟΞ³Ξ�, Ξ΄ΞΉΞ±Ξ½ΞΏΞΌΞ�, ΞΌΞ΅ΟΞ±ΟΞΏΟΞ¬, downloading,\\n        ΞΌΞ΅ΟΞ±ΟΞΏΞ―Ξ·ΟΞ·, ΞΌΞ΅ΟΞ±ΟΟΞ»Ξ·ΟΞ·, Ξ΄Ξ·ΞΌΞΉΞΏΟΟΞ³Ξ―Ξ± ΟΞ±ΟΞ¬Ξ³ΟΞ³Ξ·Ο Ξ΅ΟΞ³Ξ±ΟΞ―Ξ±Ο Ξ� ΟΞ±ΟΞ±ΟΞ»Ξ¬Ξ½Ξ·ΟΞ· ΟΞΏΟ ΞΊΞΏΞΉΞ½ΞΏΟ ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΞΏΞ½ ΟΟΞ±Ξ³ΞΌΞ±ΟΞΉΞΊΟ\\n        ΟΞ¬ΟΞΏΟΞΏ ΟΞΏΟ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΞΏΟ, ΟΟΟΟΞ½ Ξ±Ξ½Ξ±ΟΞ±ΟΞ±Ξ³ΟΞ³Ξ�, Ξ΅ΟΞ±Ξ½Ξ­ΞΊΞ΄ΞΏΟΞ·,\\n        ΞΌΞ΅ΟΞ±ΟΟΟΟΟΟΞ·, Ξ±Ξ½Ξ±ΞΊΞΏΞ―Ξ½ΟΟΞ·, Ξ΄ΞΉΞ¬Ξ΄ΞΏΟΞ· Ξ� ΞΌΞ΅ΟΞ¬Ξ΄ΞΏΟΞ· Ξ� ΞΏΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ Ξ¬Ξ»Ξ»Ξ· ΟΟΞ�ΟΞ· ΟΞΏΟ ΟΞ΅ΟΞΉΞ΅ΟΞΏΞΌΞ­Ξ½ΞΏΟ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο\\n        e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΌΞ΅ ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅ ΟΟΟΟΞΏ Ξ� ΞΌΞ­ΟΞΏ Ξ³ΞΉΞ± Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟΟ Ξ� Ξ¬Ξ»Ξ»ΞΏΟΟ ΟΞΊΞΏΟΞΏΟΟ Ξ΅ΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ ΞΌΟΞ½ΞΏ ΞΊΞ±ΟΟΟΞΉΞ½\\n        ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ΅Ξ½Ξ·Ο Ξ³ΟΞ±ΟΟΞ�Ο Ξ¬Ξ΄Ξ΅ΞΉΞ±Ο ΟΞ·Ο Ξ±ΟΟ ΟΞΏΟΟ\\n        Ξ΄ΞΉΞ±ΟΞ΅ΞΉΟΞΉΟΟΞ­Ο ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ� ΞΏΞΉΞΏΟΞ΄Ξ�ΟΞΏΟΞ΅ Ξ¬Ξ»Ξ»ΞΏΟ Ξ½ΟΞΌΞΉΞΌΞΏΟ Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞΏΟ ΟΞ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ¬ΟΟΞ½ ΟΞΏΟ\\n        ΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΞΉ.\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px; margin-bottom: 10px; \"],[8],[0,\" \"],[7,\"b\",true],[8],[0,\"- Ξ Ξ΅ΟΞΉΞΏΟΞΉΟΞΌΟΟ Ξ΅ΟΞΈΟΞ½Ξ·Ο \"],[9],[0,\" \"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[8],[0,\"Ξ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ΄Ξ΅Ξ½ Ξ΅Ξ³Ξ³ΟΞ¬ΟΞ±ΞΉ ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ ΟΞ­ΟΞ΅ΞΉ ΞΊΞ±ΞΌΞ―Ξ± Ξ΅ΟΞΈΟΞ½Ξ· Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±ΞΊΟΞ―Ξ²Ξ΅ΞΉΞ± ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΞΏΟΞΈΟΟΞ·ΟΞ± ΟΟΞ½\\n        ΟΞ»Ξ·ΟΞΏΟΞΏΟΞΉΟΞ½ ΟΞΏΟ Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΞΉ ΞΏ ΟΟΞ�ΟΟΞ·Ο ΞΌΞ­ΟΟ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο ΞΏΟΟΞ΅ Ξ³ΞΉΞ± ΟΞ·Ξ½ ΞΊΞ±ΞΈΟΟΟΞ­ΟΞ·ΟΞ· Ξ� Ξ±Ξ΄ΟΞ½Ξ±ΞΌΞ―Ξ± ΟΟΞ�ΟΞ·Ο ΟΞΏΟ site\\n        ΟΞ·Ο Ξ� Ξ³ΞΉΞ± ΟΟΟΟΞ½ ΟΟΞ¬Ξ»ΞΌΞ±ΟΞ± ΞΊΞ±ΟΞ¬ ΟΞ· ΞΌΞ΅ΟΞ±ΟΞΏΟΞ¬\\n        Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ Ξ� ΟΞ»Ξ·ΟΞΏΟΞΏΟΞΉΟΞ½ (ΞΊΞ±ΟΞ±ΟΟΟΞΏΟΞ� Ξ±ΟΟΞ΅Ξ―ΟΞ½, Ξ±ΟΞΏΞΈΞ�ΞΊΞ΅ΟΟΞ· ΞΉΟΞ½, ΞΊΞ»ΞΏΟΞ� Ξ΄Ξ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ ΞΊΞ»Ο.).\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"\\n        Ξ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΞΉ βΟΟΞ½Ξ΄Ξ­ΟΞΌΞΏΟΟβ ΟΟΞΏΟ Ξ¬Ξ»Ξ»Ξ± web sites Ξ³ΞΉΞ± ΟΞ± ΞΏΟΞΏΞ―Ξ± Ξ΄Ξ΅Ξ½ ΟΞ­ΟΞ΅ΞΉ ΞΊΞ±ΞΌΞΉΞ¬ Ξ΅ΟΞΈΟΞ½Ξ·\\n        ΟΟΟΞΏ Ξ³ΞΉΞ± ΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ ΟΞΏΟΟ, ΟΟΞΏ ΞΊΞ±ΞΉ Ξ³ΞΉΞ± ΟΞΏΟΟ ΞΟΞΏΟΟ Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο Ξ ΟΞΏΟΟΟΞΉΞΊΟΞ½ ΞΞ΅Ξ΄ΞΏΞΌΞ­Ξ½ΟΞ½ ΟΞΏΟΟ ΞΏΟΞΏΞ―ΞΏΟΟ Ξ±ΟΟΞ¬\\n        Ξ±ΞΊΞΏΞ»ΞΏΟΞΈΞΏΟΞ½. ΞΟΟΟ Ξ΅ΟΞ―ΟΞ·Ο ΞΊΞ±ΞΉ Ξ³ΞΉΞ± ΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ\\n        ΞΊΞ±ΞΉ ΟΞΉΟ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο Ξ¬Ξ»Ξ»ΟΞ½ Ξ΄ΞΉΞΊΟΟΞ±ΞΊΟΞ½ ΟΟΟΟΞ½ ΟΟΞΏΟΟ ΞΏΟΞΏΞ―ΞΏΟΟ ΟΞ±ΟΞ±ΟΞ­ΞΌΟΞ΅ΞΉ ΞΌΞ­ΟΟ Ξ¬Ξ»Ξ»ΟΞ½ ΟΟΞ½Ξ΄Ξ­ΟΞΌΟΞ½ Ξ� Ξ΄ΞΉΞ±ΟΞ·ΞΌΞΉΟΟΞΉΞΊΟΞ½\\n        banner.\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px; margin-bottom: 10px; \"],[8],[0,\" \"],[7,\"b\",true],[8],[0,\"- Ξ€ΟΞΏΟΞΏΟΞΏΞ―Ξ·ΟΞ· ΞΟΟΞ½ ΞΊΞ±ΞΉ Ξ ΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΟΞ½ \"],[9],[0,\" \"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"\\n        Ξ Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ� e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ΄ΞΉΞ±ΟΞ·ΟΞ΅Ξ― ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ½Ξ± ΟΟΞΏΟΞΏΟΞΏΞΉΞ΅Ξ― ΞΌΞΏΞ½ΞΏΞΌΞ΅ΟΟΟ Ξ� Ξ½Ξ± Ξ±Ξ½Ξ±Ξ½Ξ΅ΟΞ½Ξ΅ΞΉ ΟΞΏΟΟ ΟΞ±ΟΟΞ½ΟΞ΅Ο ΟΟΞΏΟΟ\\n        Ξ�/ΞΊΞ±ΞΉ ΞΊΞ±Ξ½ΟΞ½Ξ΅Ο Ξ�/ΞΊΞ±ΞΉ ΟΞΉΟ ΟΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΞΉΟ, ΟΞΏΟ Ξ³Ξ―Ξ½ΞΏΞ½ΟΞ±ΞΉ ΞΌΞ­ΟΟ Ξ±ΟΟΞ�Ο ΟΟΟΞ―Ο ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ΅Ξ½Ξ· Ξ΅ΞΉΞ΄ΞΏΟΞΏΞ―Ξ·ΟΞ·, Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞ½ΞΏΞ½ΟΞ±Ο\\n        ΟΞΏΟΟ Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ΅Ο ΞΌΞ΅ Ξ±Ξ½Ξ¬ΟΟΞ·ΟΞ· ΟΟΞ½ Ξ½Ξ­ΟΞ½ ΟΟΟΞ½\\n        ΞΊΞ±ΞΉ ΟΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΟΞ½ ΟΟΞ·Ξ½ ΟΞ±ΟΞΏΟΟΞ± ΞΉΟΟΞΏΟΞ΅Ξ»Ξ―Ξ΄Ξ±.\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"style\",\"margin-top: 20px; margin-bottom: 10px; \"],[8],[0,\" \"],[7,\"b\",true],[8],[0,\"- ΞΟΞ±ΟΞΌΞΏΟΟΞ­ΞΏ ΞΞ―ΞΊΞ±ΞΉΞΏ \"],[9],[0,\" \"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"\\n        ΞΞΉ ΟΞ±ΟΟΞ½ΟΞ΅Ο ΟΟΞΏΞΉ ΞΊΞ±ΞΉ ΟΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΞΉΟ ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΞΏΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ ΟΟΞΏΟΞΏΟΞΏΞ―Ξ·ΟΞ·, Ξ±Ξ»Ξ»Ξ±Ξ³Ξ� Ξ� Ξ±Ξ»Ξ»ΞΏΞ―ΟΟΞ� ΟΞΏΟΟ Ξ΄ΞΉΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΞΊΞ±ΞΉ\\n        ΟΟΞΌΟΞ»Ξ·ΟΟΞ½ΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ ΞΞ»Ξ»Ξ·Ξ½ΞΉΞΊΟ Ξ΄Ξ―ΞΊΞ±ΞΉΞΏ, ΟΞΏ Ξ΄Ξ―ΞΊΞ±ΞΉΞΏ ΟΞ·Ο ΞΟΟΟΟΞ±ΟΞΊΞ�Ο ΞΞ½ΟΟΞ·Ο ΞΊΞ±ΞΉ ΟΞΉΟ ΟΟΞ΅ΟΞΉΞΊΞ­Ο Ξ΄ΞΉΞ΅ΞΈΞ½Ξ΅Ξ―Ο ΟΟΞ½ΞΈΞ�ΞΊΞ΅Ο.\\n        ΞΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ Ξ΄ΞΉΞ¬ΟΞ±ΞΎΞ· ΟΟΞ½ Ξ±Ξ½ΟΟΞ­ΟΟ ΟΟΟΞ½ ΞΊΞ±ΟΞ±ΟΟΞ΅Ξ―\\n        Ξ±Ξ½ΟΞ―ΞΈΞ΅ΟΞ· ΟΟΞΏΟ ΟΞΏ Ξ½ΟΞΌΞΏ, ΟΞ±ΟΞ΅ΞΉ Ξ±ΟΟΞΏΞ΄ΞΉΞΊΞ±Ξ―ΟΟ Ξ½Ξ± ΞΉΟΟΟΞ΅ΞΉ ΞΊΞ±ΞΉ Ξ±ΟΞ±ΞΉΟΞ΅Ξ―ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΏ ΟΞ±ΟΟΞ½ ΟΟΟΞ―Ο ΟΞ΅ ΞΊΞ±ΞΌΞ―Ξ± ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ½Ξ±\\n        ΞΈΞ―Ξ³Ξ΅ΟΞ±ΞΉ Ξ· ΞΉΟΟΟΟ ΟΟΞ½ Ξ»ΞΏΞΉΟΟΞ½ ΟΟΟΞ½. Ξ€ΞΏ ΟΞ±ΟΟΞ½ Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅Ξ― ΟΟΞ½ΞΏΞ»ΞΉΞΊΞ� ΟΟΞΌΟΟΞ½Ξ―Ξ± ΞΌΞ΅ΟΞ±ΞΎΟ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΞΊΞ±ΞΉ\\n        ΟΞΏΟ Ξ΅ΟΞΉΟΞΊΞ­ΟΟΞ· ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο\\n        ΞΊΞ±ΞΉ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞΏΟ ΞΊΞ±ΞΉ Ξ΄Ξ΅ Ξ΄Ξ΅ΟΞΌΞ΅ΟΞ΅ΞΉ ΟΞ±ΟΞ¬ ΞΌΟΞ½ΞΏ Ξ±ΟΟΞΏΟΟ. ΞΞ±ΞΌΞ―Ξ± ΟΟΞΏΟΞΏΟΞΏΞ―Ξ·ΟΞ· ΟΟΞ½ ΟΟΟΞ½ Ξ±ΟΟΟΞ½ Ξ΄Ξ΅ ΞΈΞ± Ξ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΟΟΞ·\\n        ΞΊΞ±ΞΉ Ξ΄Ξ΅ ΞΈΞ± Ξ±ΟΞΏΟΞ΅Ξ»Ξ΅Ξ― ΟΞΌΞ�ΞΌΞ± ΟΞ·Ο ΟΟΞΌΟΟΞ½Ξ―Ξ±Ο Ξ±ΟΟΞ�Ο Ξ΅Ξ¬Ξ½ Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ Ξ΄ΞΉΞ±ΟΟΟΟΞΈΞ΅Ξ― Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ Ξ­ΟΞ΅ΞΉ Ξ΅Ξ½ΟΟΞΌΞ±ΟΟΞΈΞ΅Ξ― ΟΞ΅\\n        Ξ±ΟΟΞ�Ξ½.\\n    \"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"\\n        ΞΞΉΞ± ΞΏΟΞΏΞΉΞ±Ξ΄Ξ�ΟΞΏΟΞ΅ Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ± ΞΌΞ΅ ΟΞΏΟΟ Β«ΞΞΉΞ±ΟΞ΅ΞΉΟΞΉΟΟΞ­ΟΒ» ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο ΟΞ±ΟΞ±ΞΊΞ±Ξ»ΞΏΟΞΌΞ΅ Ξ±ΟΞΏΟΟΞ΅Ξ―Ξ»Ξ±ΟΞ΅\\n        Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ� Ξ΅ΟΞΉΟΟΞΏΞ»Ξ� ΟΟΞ·Ξ½ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ� Ξ΄ΞΉΞ΅ΟΞΈΟΞ½ΟΞ· info@okaa.gr. ΞΟΞ―ΟΞ·Ο Ξ±Ξ½ Ξ­ΟΞ΅ΟΞ΅ Ξ΄ΞΉΞ±ΟΞΉΟΟΟΟΞ΅ΞΉ ΞΏΟΞΏΞΉΞΏΞ΄Ξ�ΟΞΏΟΞ΅\\n        ΟΟΟΞ²Ξ»Ξ·ΞΌΞ± ΟΟΞΏ ΟΞ΅ΟΞΉΞ΅ΟΟΞΌΞ΅Ξ½ΞΏ ΟΞ·Ο Ξ΅ΟΞ±ΟΞΌΞΏΞ³Ξ�Ο ΟΞΏΟ Ξ¬ΟΟΞ΅ΟΞ±ΞΉ\\n        Ξ½ΞΏΞΌΞΉΞΊΟΞ½ Ξ� Ξ·ΞΈΞΉΞΊΟΞ½ ΞΈΞ΅ΞΌΞ¬ΟΟΞ½, Ξ΅ΞΉΞ΄ΞΉΞΊΟΟΞ΅ΟΞ± ΟΟΞΏΞ½ Ξ±ΟΞΏΟΞ¬ ΟΟΞ·Ξ½ Ξ±Ξ½Ξ±ΟΞ±ΟΞ±Ξ³ΟΞ³Ξ� ΟΞΏΟ ΞΊΞ±ΞΉ ΟΞ· ΟΟΞ�ΟΞ· ΟΟΞ½ Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ¬ΟΟΞ½\\n        ΟΞ½Ξ΅ΟΞΌΞ±ΟΞΉΞΊΞ�Ο ΞΉΞ΄ΞΉΞΏΞΊΟΞ·ΟΞ―Ξ±Ο, ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ξ΅Ξ―ΟΞΈΞ΅ Ξ½Ξ± ΞΌΞ±Ο Ξ΅ΞΉΞ΄ΞΏΟΞΏΞΉΞ�ΟΞ΅ΟΞ΅ Ξ¬ΞΌΞ΅ΟΞ±.\\n\\n    \"],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/terms.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/useful-differences", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "dZHskqXc",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container-fluid px-0 navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"class\",\"banner-img\"],[10,\"src\",\"/assets/banner-differences.png\"],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"container mt-5 pt-5\"],[8],[0,\"\\n        \"],[7,\"h5\",true],[10,\"class\",\"nova-b mb-5 pb-5\"],[8],[0,\"ΞΞ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"\\n            Ξ Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΞΌΞΉΞ± ΞΌΞ­ΞΈΞΏΞ΄ΞΏΟ Ξ΅ΞΎΟΞ΄ΞΉΞΊΞ±ΟΟΞΉΞΊΞ�Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½. ΞΞ½Ξ± ΞΏΟΞ΄Ξ­ΟΞ΅ΟΞΏ\\n            ΟΟΞ―ΟΞΏ ΞΌΞ­ΟΞΏΟ, ΞΏ ΟΞΏΟΞ­Ξ±Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½, ΞΈΞ± ΟΞ±Ο Ξ²ΞΏΞ·ΞΈΞ�ΟΞ΅ΞΉ Ξ½Ξ± Ξ²ΟΞ΅Ξ―ΟΞ΅ ΞΌΞΉΞ± Ξ΅ΞΎΟΞ΄ΞΉΞΊΞ±ΟΟΞΉΞΊΞ� Ξ»ΟΟΞ·. Ξ£ΟΞ·Ξ½ ΞΟΟΟΟΞ±ΟΞΊΞ�\\n            ΞΞ½ΟΟΞ· (ΞΞ) ΟΟΞ¬ΟΟΞΏΟΞ½ Ξ΄ΞΉΞ¬ΟΞΏΟΞ± Ξ΅Ξ―Ξ΄Ξ· ΟΞ­ΟΞΏΞΉΟΞ½ ΟΞΏΟΞ­ΟΞ½, Ο.Ο. Ξ΄ΞΉΞ±ΞΌΞ΅ΟΞΏΞ»Ξ±Ξ²Ξ·ΟΞ­Ο, Ξ΄ΞΉΞ±ΞΉΟΞ·ΟΞ­Ο, ΟΟΞ½Ξ�Ξ³ΞΏΟΞΏΞΉ, ΟΟΞΌΟΞΉΞ»ΞΉΟΟΞ­Ο,\\n            ΟΟΞΌΞ²ΞΏΟΞ»ΞΉΞ± ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»ΞΉΟΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½. ΞΞ¬ΞΈΞ΅ ΟΞΏΟΞ­Ξ±Ο Ξ΅Ξ½Ξ΅ΟΞ³Ξ΅Ξ― ΞΌΞ΅ Ξ΄ΞΉΞ±ΟΞΏΟΞ΅ΟΞΉΞΊΟ ΟΟΟΟΞΏ, Ξ±Ξ»Ξ»Ξ¬ ΟΞ΅ Ξ³Ξ΅Ξ½ΞΉΞΊΞ­Ο Ξ³ΟΞ±ΞΌΞΌΞ­Ο ΞΈΞ±\\n            Ξ²ΞΏΞ·ΞΈΞ�ΟΞΏΟΞ½ Ξ΅ΟΞ¬Ο ΞΊΞ±ΞΉ ΟΞΏΞ½ Ξ­ΞΌΟΞΏΟΞΏ Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ»Ξ�ΞΎΞ΅ΟΞ΅ ΟΞ΅ Ξ±ΞΌΞΏΞΉΞ²Ξ±Ξ―Ξ± ΞΉΞΊΞ±Ξ½ΞΏΟΞΏΞΉΞ·ΟΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· ΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΞ¬Ο ΟΞ±Ο. ΞΞ―Ξ½Ξ±ΞΉ ΞΌΞΉΞ±\\n            Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ± Ξ΅ΟΞΊΞΏΞ»ΟΟΞ΅ΟΞ·, ΟΞ±ΟΟΟΞ΅ΟΞ· ΞΊΞ±ΞΉ ΟΞΈΞ·Ξ½ΟΟΞ΅ΟΞ· Ξ±ΟΟ ΟΞ·Ξ½ ΟΟΞΏΟΟΟΞ³Ξ� ΟΟΞΏ Ξ΄ΞΉΞΊΞ±ΟΟΞ�ΟΞΉΞΏ.\\n            Ξ Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞ΅Ξ―ΟΞ±ΞΉ Ξ³ΞΉΞ± ΞΏΟΞΏΞΉΞΏΞ½Ξ΄Ξ�ΟΞΏΟΞ΅ ΟΞΏΞΌΞ­Ξ± ΟΞ·Ο Ξ±Ξ³ΞΏΟΞ¬Ο (Ο.Ο. ΞΌΞ΅ΟΞ±ΟΞΏΟΞ­Ο,\\n            ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο, ΟΞ·Ξ»Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ΅Ο, Ξ΅Ξ½Ξ­ΟΞ³Ξ΅ΞΉΞ±, Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ±, ΞΏΞΉΞΊΞΉΞ±ΞΊΞ­Ο Ξ·Ξ»Ξ΅ΞΊΟΟΞΉΞΊΞ­Ο ΟΟΟΞΊΞ΅ΟΞ­Ο, Ξ΅Ξ½ΞΏΞΉΞΊΞ―Ξ±ΟΞ·\\n            Ξ±ΟΟΞΏΞΊΞΉΞ½Ξ�ΟΞΏΟ Ξ� ΟΟΞ΅Ξ³Ξ½Ο ΞΊΞ±ΞΈΞ¬ΟΞΉΟΞΌΞ±) ΞΌΞ΅ ΟΞ·Ξ½ Ξ΅ΞΎΞ±Ξ―ΟΞ΅ΟΞ· ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΟΞ³Ξ΅Ξ―Ξ±Ο ΞΊΞ±ΞΉ Ξ±Ξ½ΟΟΞ±ΟΞ·Ο Ξ΅ΞΊΟΞ±Ξ―Ξ΄Ξ΅ΟΟΞ·Ο.\\n            Ξ£ΟΞ·Ξ½ ΞΞ»Ξ»Ξ¬Ξ΄Ξ±, ΞΏΞΉ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ΅Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ (ΞΞΞ) ΟΟΞΈΞΌΞ―ΞΆΞΏΞ½ΟΞ±ΞΉ ΞΌΞ΅:\\n            \"],[7,\"br\",true],[8],[9],[0,\"β’ \"],[7,\"a\",true],[10,\"href\",\"http://www.et.gr/idocs-nph/search/pdfViewerForm.html?args=5C7QrtC22wE4q6ggiv8WTXdtvSoClrL8cHFJddP1Ek4tiDow6HlTE-JInJ48_97uHrMts-zFzeyCiBSQOpYnTy36MacmUFCx2ppFvBej56Mmc8Qdb8ZfRJqZnsIAdk8Lv_e6czmhEembNmZCMxLMtXYm2__LRyZ4HUZVdFE_FoVIG3frJprR7o8F9a_kVfQh\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΟΞ·Ξ½ ΞΞ₯Ξ 70330ΞΏΞΉΞΊ/30.6.2015 (ΞΞ 1421)\"],[9],[0,\" ΟΞ΅ ΟΟΞΏΟΞ±ΟΞΌΞΏΞ³Ξ� ΟΟΞ½ ΟΟΞΈΞΌΞ―ΟΞ΅ΟΞ½ ΟΞ·Ο ΞΞ΄Ξ·Ξ³Ξ―Ξ± 2013/11/ΞΞ ΟΞΏΟ Ξ³ΞΉΞ± ΟΞ·Ξ½\\n            Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ (Alternative Dispute Resolution) ΞΊΞ±ΞΉ\\n            \"],[7,\"br\",true],[8],[9],[0,\"β’ ΟΞΏΞ½ \"],[7,\"a\",true],[10,\"href\",\"https://eur-lex.europa.eu/legal-content/EL/TXT/?qid=1559040208519&&uri=CELEX:32013R0524\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΞ±Ξ½ΞΏΞ½ΞΉΟΞΌΟ 524/2013\"],[9],[0,\" Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ (Online Dispute Resolution -\\n            ODR).\"],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"Ξ£ΟΞ·Ξ½ ΞΞ»Ξ»Ξ¬Ξ΄Ξ± ΞΏΞΉ ΟΞΏΟΞ΅Ξ―Ο Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ�Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ³Ξ³Ξ΅Ξ³ΟΞ±ΞΌΞΌΞ­Ξ½ΞΏΞΉ ΟΟΞΏ \"],[7,\"a\",true],[10,\"href\",\"https://mindev.gov.gr/wp-content/uploads/2019/07/%CE%9C%CE%97%CE%A4%CE%A1%CE%A9%CE%9F-%CE%95%CE%95%CE%94_09.07.2019.pdf\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΞ·ΟΟΟΞΏ\"],[9],[0,\" Ξ΅Ξ―Ξ½Ξ±ΞΉ:\"],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"1) Ξ Ξ£ΟΞ½Ξ�Ξ³ΞΏΟΞΏΟ ΟΞΏΟ ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�: ΞΟΞΏΟΞ΅Ξ»Ξ΅Ξ― Ξ±Ξ½Ξ΅ΞΎΞ¬ΟΟΞ·ΟΞ· Ξ±ΟΟΞ� ΞΌΞ΅ ΟΟΟΟΞΏ ΟΞ·Ξ½ Ξ΅ΞΎΟΞ΄ΞΉΞΊΞ±ΟΟΞΉΞΊΞ� ΞΊΞ±ΞΉ ΟΞΉΞ»ΞΉΞΊΞ� Ξ΄ΞΉΞ΅ΟΞΈΞ­ΟΞ·ΟΞ·\\n            Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ ΞΌΞ΅ΟΞ±ΞΎΟ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΟΞ½ ΞΊΞ±ΞΉ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½. ΞΟΞ―ΟΞ·Ο, ΞΏ Ξ£ΟΞ½Ξ�Ξ³ΞΏΟΞΏΟ ΟΞΏΟ ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� Ξ­ΟΞ΅ΞΉ ΟΞ·Ξ½ Ξ΅ΟΞΈΟΞ½Ξ· Ξ»Ξ΅ΞΉΟΞΏΟΟΞ³Ξ―Ξ±Ο\\n            ΞΊΞ±ΞΉ ΟΟΞ�ΟΞΉΞΎΞ·Ο ΟΞΏΟ \"],[7,\"a\",true],[10,\"href\",\"https://www.eccgreece.gr/el/european-consumer-center-greece/\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΟΟΟΟΞ±ΟΞΊΞΏΟ ΞΞ­Ξ½ΟΟΞΏΟ ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�\"],[9],[0,\" ΞΊΞ±ΞΉ Ξ΅ΟΞΏΟΟΞ΅ΟΞ΅ΞΉ ΟΞΉΟ ΞΟΞΉΟΟΞΏΟΞ­Ο Ξ¦ΞΉΞ»ΞΉΞΊΞΏΟ ΞΞΉΞ±ΞΊΞ±Ξ½ΞΏΞ½ΞΉΟΞΌΞΏΟ, ΞΏΞΉ ΞΏΟΞΏΞ―Ξ΅Ο,\\n            ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΏ ΞΟΞΈΟΞΏ 11 ΟΞΏΟ \"],[7,\"a\",true],[10,\"href\",\"http://www.et.gr/idocs-nph/search/pdfViewerForm.html?args=5C7QrtC22wG3UHk-ZeQumndtvSoClrL8n2mlCsr5UbztIl9LGdkF52dKwsMi1xmmyqxSQYNuqAGCF0IfB9HI6qSYtMQEkEHLwnFqmgJSA5WIsluV-nRwO1oKqSe4BlOTSpEWYhszF8P8UqWb_zFijNqAG6liL4cyFHffEhfTnl33YHsEHD8zjen8fdHYBWmJ\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"Ξ. 2251/1994\"],[9],[0,\", ΟΟΟΟΞ�Ξ½ΞΏΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΞΉΟ ΞΞΏΞΌΞ±ΟΟΞΉΞ±ΞΊΞ­Ο ΞΟΟΞΏΞ΄ΞΉΞΏΞΉΞΊΞ�ΟΞ΅ΞΉΟ.\\n            \"],[7,\"br\",true],[8],[9],[7,\"a\",true],[10,\"href\",\"http://www.synigoroskatanaloti.gr/index.html\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΞΉΞ± ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο...\"],[9],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"2) ΞΞΞΞΞΞΞΞΞ£ Ξ§Ξ‘ΞΞΞΞ€ΞΞΞΞΞΞΞΞΞΞΞΞ£ ΞΞΞ£ΞΞΞΞΞΞ€ΞΞ£: Ξ ΞΞ΅ΟΞΏΞ»Ξ±Ξ²Ξ·ΟΞ�Ο Ξ±ΟΟΞΏΞ»Ξ΅Ξ―ΟΞ±ΞΉ ΞΌΞ΅ ΟΞΉΟ Ξ΄ΞΉΞ±ΟΞΏΟΞ­Ο ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½ ΟΞΏΟ\\n            ΟΟΞΏΞΊΟΟΟΞΏΟΞ½ ΞΊΞ±ΟΞ¬ ΟΞΉΟ ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ­Ο ΞΌΞ΅ ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο ΟΞ΅ Ξ΅ΞΈΞ½ΞΉΞΊΟ Ξ΅ΟΞ―ΟΞ΅Ξ΄ΞΏ. Ξ Ξ±ΟΞ¬Ξ»Ξ»Ξ·Ξ»Ξ± ΞΏ ΟΟΞ³ΞΊΞ΅ΞΊΟΞΉΞΌΞ­Ξ½ΞΏΟ ΟΞΏΟΞ­Ξ±Ο\\n            Ξ΄ΟΞ±ΟΟΞ·ΟΞΉΞΏΟΞΏΞΉΞ΅Ξ―ΟΞ±ΞΉ ΞΊΞ±ΞΉ ΟΟΞΏ Ξ΄Ξ―ΞΊΟΟΞΏ FIN-NET ΞΊΞ±ΞΉ ΟΞ΅ΞΉΟΞ―ΞΆΞ΅ΟΞ±ΞΉ Ξ±Ξ½ΟΞ―ΟΟΞΏΞΉΟΞ΅Ο ΟΟΞΏΞΈΞ­ΟΞ΅ΞΉΟ Ξ΄ΞΉΞ±ΟΟΞ½ΞΏΟΞΉΞ±ΞΊΞΏΟ ΟΞ±ΟΞ±ΞΊΟΞ�ΟΞ±.\\n            \"],[7,\"br\",true],[8],[9],[7,\"a\",true],[10,\"href\",\"https://hobis.gr/\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΞΉΞ± ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο...\"],[9],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"3) Ξ€ΞΏ ΞΞΞΞ€Ξ‘Ξ ΞΞΞΞΞΞΞΞ€ΞΞΞΞ£ ΞΞ ΞΞΞ₯Ξ£ΞΞ£ ΞΞΞΞ¦ΞΞ‘Ξ©Ξ - ADR POINT ΞΞΞ ΟΞΏΟ Ξ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ±ΞΉ Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΞΊΞ±ΟΞ¬\\n            ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΟΞ΅ ΞΌΞ―Ξ± Ξ΅ΟΟΞ΅Ξ―Ξ± Ξ³ΞΊΞ¬ΞΌΞ± ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³ΟΞ½. \\n            \"],[7,\"br\",true],[8],[9],[7,\"a\",true],[10,\"href\",\"https://www.adrpoint.gr/\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΞΉΞ± ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο...\"],[9],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"4) Ξ€ΞΏ ΞΞ₯Ξ‘Ξ©Ξ ΞΞΞΞ ΞΞΞ£Ξ€ΞΞ€ΞΞ₯Ξ€Ξ ΞΞ ΞΞΞ₯Ξ£ΞΞ£ Ξ£Ξ₯ΞΞΞ‘ΞΞ₯Ξ£ΞΞ©Ξ (Ξ.Ξ.Ξ.Ξ£.) ΟΞΏΟ Ξ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ±ΞΉ ΞΊΞ¬ΞΈΞ΅ Ξ΅Ξ³ΟΟΟΞΉΞ±Ο ΞΊΞ±ΞΉ Ξ΄ΞΉΞ±ΟΟΞ½ΞΏΟΞΉΞ±ΞΊΞ�Ο\\n            Ξ΄ΞΉΞ±ΟΞΏΟΞ¬Ο ΟΞΏΟ ΟΟΞΏΞΊΟΟΟΞ΅ΞΉ Ξ±ΟΟ ΟΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ ΟΟΞ»Ξ�ΟΞ΅ΟΞ½ Ξ� ΟΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½ ΞΌΞ΅ΟΞ±ΞΎΟ ΞΌΞΉΞ±Ο Ξ΅ΟΞΉΟΞ΅Ξ―ΟΞ·ΟΞ·Ο ΞΊΞ±ΞΉ Ξ΅Ξ½ΟΟ\\n            ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�.\\n            \"],[7,\"br\",true],[8],[9],[7,\"a\",true],[10,\"href\",\"http://www.europeanresolution.com/\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΞΉΞ± ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο...\"],[9],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"5) To ΞΞΞ£Ξ€ΞΞ€ΞΞ₯Ξ€Ξ ΞΞΞΞΞΞΞΞ€ΞΞΞΞ£ ΞΞ ΞΞΞ₯Ξ£ΞΞ£ ΞΞΞΞΞΞ‘Ξ©Ξ (startADR) ΟΞΏΟ Ξ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ±ΞΉ Ξ΅Ξ³ΟΟΟΞΉΟΞ½ ΞΊΞ±ΞΉ Ξ΄ΞΉΞ±ΟΟΞ½ΞΏΟΞΉΞ±ΞΊΟΞ½\\n            Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ� ΞΊΞ±ΟΞ¬ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΟΞ΅ ΞΌΞΉΞ± Ξ΅ΟΟΞ΅Ξ―Ξ± Ξ³ΞΊΞ¬ΞΌΞ± ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³ΟΞ½. \\n            \"],[7,\"br\",true],[8],[9],[7,\"a\",true],[10,\"href\",\"http://www.startadr.org/\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΞΉΞ± ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Οβ¦\"],[9],[9],[0,\"\\n            \"],[7,\"h5\",true],[8],[0,\"ΞΞ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½\"],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"ΞΞ½ Ξ­ΟΞ΅ΟΞ΅ Ξ΄ΞΉΞ±ΟΞΏΟΞ¬ ΞΌΞ΅ Ξ­ΞΌΟΞΏΟΞΏ ΟΞ΅ ΟΟΟΞ± ΟΞ·Ο ΞΞ ΟΟΞ΅ΟΞΉΞΊΞ¬ ΞΌΞ΅ ΟΟΞΏΟΟΞ½ Ξ� ΟΟΞ·ΟΞ΅ΟΞ―Ξ± ΟΞΏΟ Ξ±Ξ³ΞΏΟΞ¬ΟΞ±ΟΞ΅ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ¬, ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅\\n            Ξ½Ξ± ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞ�ΟΞ΅ΟΞ΅ ΟΞ·Ξ½ \"],[7,\"a\",true],[10,\"href\",\"https://ec.europa.eu/consumers/odr/main/?event=main.home2.show\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΟΞ»Ξ±ΟΟΟΟΞΌΞ± Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ�Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ (ΞΞΞ)\"],[9],[0,\", Ξ· ΞΏΟΞΏΞ―Ξ± ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞ·Ξ½ ΞΟΟΟΟΞ±ΟΞΊΞ�\\n            ΞΟΞΉΟΟΞΏΟΞ�. ΞΟΟΞ� Ξ· ΟΞ»Ξ±ΟΟΟΟΞΌΞ± Ξ΄ΞΉΞ±ΟΞ―ΞΈΞ΅ΟΞ±ΞΉ Ξ΄ΟΟΞ΅Ξ¬Ξ½, ΟΞ΅ ΟΞ»Ξ΅Ο ΟΞΉΟ Ξ³Ξ»ΟΟΟΞ΅Ο ΟΞ·Ο ΞΞ.\\n            ΞΞ½ ΟΟΞΏΞ²Ξ¬Ξ»Ξ΅ΟΞ΅ ΞΊΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΞΌΞ­ΟΟ ΟΞ·Ο ΟΞ»Ξ±ΟΟΟΟΞΌΞ±Ο ΞΞΞ, Ξ΅ΟΞ΅Ξ―Ο ΞΊΞ±ΞΉ ΞΏ Ξ­ΞΌΟΞΏΟΞΏΟ ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΟΞΌΟΟΞ½Ξ�ΟΞ΅ΟΞ΅ Ξ³ΞΉΞ± ΟΞΏΞ½ ΟΞΏΟΞ­Ξ±\\n            Ξ΅Ξ½Ξ±Ξ»Ξ»Ξ±ΞΊΟΞΉΞΊΞ�Ο Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ ΟΞΏΟ ΞΈΞ± Ξ΅ΞΎΞ΅ΟΞ¬ΟΞ΅ΞΉ ΟΞ· Ξ΄ΞΉΞ±ΟΞΏΟΞ¬ ΟΞ±Ο. ΞΞ¬ΞΈΞ΅ ΟΞΏΟΞ­Ξ±Ο Ξ΅ΟΞ±ΟΞΌΟΞΆΞ΅ΞΉ Ξ΄ΞΉΞΊΞΏΟΟ ΟΞΏΟ ΞΊΞ±Ξ½ΟΞ½Ξ΅Ο ΞΊΞ±ΞΉ\\n            Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ΅Ο ΞΊΞ±ΞΉ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄ΟΟΞ΅Ξ¬Ξ½ Ξ³ΞΉΞ± ΟΞΏΟΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ­Ο.\\n            \"],[7,\"br\",true],[8],[9],[7,\"a\",true],[10,\"href\",\"https://ec.europa.eu/consumers/odr/main/?event=main.home.howitworks\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΞΞΉΞ± ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ΅Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Οβ¦\"],[9],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/useful-differences.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/useful-rights", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "7iPvwNiU",
        "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container-fluid px-0 navbar-top-offset\"],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"class\",\"banner-img\"],[10,\"src\",\"/assets/banner-differences.png\"],[8],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"container mt-5 pt-5\"],[8],[0,\"\\n        \"],[7,\"h5\",true],[10,\"class\",\"nova-b mb-5 pb-5\"],[8],[0,\"ΞΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"Ξ Ξ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο Ξ Ξ‘ΞΞ Ξ±Ξ³ΞΏΟΞ¬ΟΞ΅ΟΞ΅ Ξ­Ξ½Ξ± ΟΟΞΏΟΟΞ½ Ξ� ΞΌΞΉΞ± ΟΟΞ·ΟΞ΅ΟΞ―Ξ±:\"],[9],[0,\"\\n            \\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"ΞΞΉ ΟΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ³ΟΞ±ΞΌΞΌΞ­Ξ½Ξ΅Ο ΟΞ΅ ΟΞ±ΟΞ� ΞΊΞ±ΞΉ ΞΊΞ±ΟΞ±Ξ½ΞΏΞ·ΟΞ� Ξ³Ξ»ΟΟΟΞ± ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ΅ΟΞΉΞ­ΟΞΏΟΞ½ ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΞ­Ο ΟΞ�ΟΟΞ΅Ο, ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞ·Ξ½ ΞΊΞ΅Ξ―ΞΌΞ΅Ξ½Ξ· Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ±. \\n            ΞΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ±Ο ΟΞ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΞΏΞΉ Ξ΅ΞΎΞ�Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο:\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ· ΟΞ±ΟΟΟΟΞ·ΟΞ± ΟΞΏΟ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�, Ξ· Ξ΄ΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΞΊΞ±ΞΉ ΞΏ Ξ±ΟΞΉΞΈΞΌΟΟ ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΏΟ ΟΞΏΟ,\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΟΞ± ΞΊΟΟΞΉΞ± ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΞ¬ ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ ΟΟΞ½ΞΏΞ»ΞΉΞΊΞ� ΟΞΉΞΌΞ�, ΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΟΞ½ ΟΞ»ΟΞ½ ΟΟΞ½ ΟΟΟΟΞ½ ΞΊΞ±ΞΉ Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½ΟΞ΅ΟΞ½,\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΟΞ± (Ξ΅Ξ½Ξ΄Ξ΅ΟΟΞΌΞ΅Ξ½Ξ±) Ξ­ΞΎΞΏΞ΄Ξ± Ξ±ΟΞΏΟΟΞΏΞ»Ξ�Ο - ΞΊΞ±ΞΉ ΟΟΟΟΞ½ Ξ¬Ξ»Ξ»Ξ΅Ο ΟΟΟΟΞΈΞ΅ΟΞ΅Ο Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½ΟΞ΅ΞΉΟ,\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΏ ΟΟΟΟΞΏΟ ΟΞ»Ξ·ΟΟΞΌΞ�Ο, Ξ±ΟΞΏΟΟΞΏΞ»Ξ�Ο Ξ� Ξ΅ΞΊΟΞ­Ξ»Ξ΅ΟΞ·Ο ΟΞ·Ο ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο,\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ· Ξ΄ΞΉΞ¬ΟΞΊΞ΅ΞΉΞ± ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο (Ξ΅Ξ½Ξ΄Ξ΅ΟΞΏΞΌΞ­Ξ½ΟΟ).\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"ΞΞΞΞ©Ξ£ Ξ±Ξ½ ΞΊΞ¬Ξ½Ξ΅ΟΞ΅ Ξ±Ξ³ΞΏΟΞ­Ο ΞΌΞ­ΟΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞΏΟ, ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΏΟ, ΞΊΞ±ΟΞ±Ξ»ΟΞ³ΞΏΟ ΟΟΞ»Ξ�ΟΞ΅ΟΞ½ Ξ΄ΞΉ' Ξ±Ξ»Ξ»Ξ·Ξ»ΞΏΞ³ΟΞ±ΟΞ―Ξ±Ο, Ξ� Ξ±ΟΟ ΞΊΞ±Ο' ΞΏΞ―ΞΊΞΏΞ½ ΟΟΞ»Ξ·ΟΞ­Ο (ΟΟΟΟΞ±-ΟΟΟΟΞ±), ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ±Ο ΟΞ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΞΊΞ±ΞΉ ΞΏΞΉ Ξ΅ΞΎΞ�Ο, ΟΞΉΞΏ Ξ»Ξ΅ΟΟΞΏΞΌΞ΅ΟΞ΅Ξ―Ο, ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο ΟΟΞΉΞ½ Ξ±ΟΟ ΟΞ·Ξ½ Ξ±Ξ³ΞΏΟΞ¬:\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ· Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ� Ξ΄ΞΉΞ΅ΟΞΈΟΞ½ΟΞ· ΟΞΏΟ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ�, ΞΏ Ξ±ΟΞΉΞΈΞΌΟΟ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞΏΟ ΞΌΞ·ΟΟΟΞΏΟ ΟΞΏΟ Ξ΅ΞΌΟΟΟΞΏΟ (ΞΞΞΞ) , ΞΏ Ξ΅ΟΞ±Ξ³Ξ³Ξ΅Ξ»ΞΌΞ±ΟΞΉΞΊΟΟ ΟΞ―ΟΞ»ΞΏΟ ΞΊΞ±ΞΉ ΟΞ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± Ξ¦Ξ Ξ ΟΞΏΟ Ξ΅ΞΌΟΟΟΞΏΟ \\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΟΞ½ (Ξ³ΞΉΞ± ΟΞΏ ΟΟΟΞ΄Ξ΅ΞΉΞ³ΞΌΞ± Ξ΅Ξ½ΟΟΟΞΏΟ ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο Ξ΄Ξ΅Ξ―ΟΞ΅ \"],[7,\"a\",true],[10,\"href\",\"http://www.et.gr/idocs-nph/search/pdfViewerForm.html?args=5C7QrtC22wG3UHk-ZeQumndtvSoClrL8n2mlCsr5UbztIl9LGdkF52dKwsMi1xmmyqxSQYNuqAGCF0IfB9HI6qSYtMQEkEHLwnFqmgJSA5WIsluV-nRwO1oKqSe4BlOTSpEWYhszF8P8UqWb_zFijNqAG6liL4cyFHffEhfTnl33YHsEHD8zjen8fdHYBWmJ\"],[10,\"target\",\"_blank\"],[10,\"class\",\"blue\"],[8],[0,\"ΟΞ±ΟΞ¬ΟΟΞ·ΞΌΞ±\"],[9],[0,\" ΟΞΏΟ Ξ½ΟΞΌΞΏΟ)\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΏΞΉ ΞΌΞ·ΟΞ±Ξ½ΞΉΟΞΌΞΏΞ― Ξ΅ΟΞ―Ξ»ΟΟΞ·Ο Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½, ΟΞ±ΟΞΏΟΞ� ΟΟΞ½Ξ΄Ξ­ΟΞΌΞΏΟ ΞΌΞ΅ ΟΞ·Ξ½ ΟΞ»Ξ±ΟΟΟΟΞΌΞ± ΟΞ·Ο ΞΟΟΟΟΞ±ΟΞΊΞ�Ο ΞΟΞΉΟΟΞΏΟΞ�Ο Ξ³ΞΉΞ± ΟΞ·Ξ½ ΞΞ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ� Ξ΅ΟΞ―Ξ»ΟΟΞ· ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟΞ½ Ξ΄ΞΉΞ±ΟΞΏΟΟΞ½ (ODR platform)\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΏΞΉ ΟΟΟΟΞ½ ΟΞ΅ΟΞΉΞΏΟΞΉΟΞΌΞΏΞ― Ξ±ΟΞΏΟΟΞΏΞ»Ξ�Ο ΟΞ΅ ΞΏΟΞΉΟΞΌΞ­Ξ½Ξ΅Ο ΟΟΟΞ΅Ο\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"ΞΞΉΞ± ΟΞ­ΟΞΏΞΉΞΏΟ Ξ΅Ξ―Ξ΄ΞΏΟΟ Ξ±Ξ³ΞΏΟΞ­Ο ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ³Ξ½ΟΟΞ―ΞΆΞ΅ΟΞ΅ ΟΟΞΉ Ξ΄Ξ΅Ξ½ ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ»Ξ·ΟΟΞ½Ξ΅ΟΞ΅ Ξ­ΞΎΞΏΞ΄Ξ± Ξ±ΟΞΏΟΟΞΏΞ»Ξ�Ο Ξ� Ξ¬Ξ»Ξ»Ξ΅Ο Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½ΟΞ΅ΞΉΟ Ξ³ΞΉΞ± ΟΞΉΟ ΞΏΟΞΏΞ―Ξ΅Ο Ξ΄Ξ΅Ξ½ Ξ΅Ξ―ΟΞ±ΟΞ΅ Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΞΈΞ΅Ξ― ΟΟΞΏΞ·Ξ³ΞΏΟΞΌΞ­Ξ½ΟΟ.\\n        Ξ€ΞΉ ΞΉΟΟΟΞ΅ΞΉ Ξ³ΞΉΞ± ΟΞΉΟ ΞΞ³Ξ³ΟΞ�ΟΞ΅ΞΉΟ ΞΊΞ±ΞΉ Ξ΅ΟΞΉΟΟΟΞΏΟΞ­Ο ΟΟΞΏΟΟΞ½ΟΟΞ½:\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΟΟΞ΅Ξ¬Ξ½, 2Ξ΅ΟΞ�Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· (Ξ½ΟΞΌΞΉΞΌΞ· Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·) Ξ³ΞΉΞ± ΟΞ»Ξ± ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ±, Ξ±Ξ½Ξ΅ΞΎΞ¬ΟΟΞ·ΟΞ± Ξ±ΟΟ ΟΞΏ Ξ±Ξ½ Ξ±Ξ³ΞΏΟΞ¬ΟΞ±ΟΞ΅ ΟΞΏ ΟΟΞΏΟΟΞ½ ΟΟΞΏ Ξ΄ΞΉΞ±Ξ΄Ξ―ΞΊΟΟΞΏ, ΟΞ΅ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ± Ξ� ΞΌΞ΅ ΟΞ±ΟΟΞ΄ΟΞΏΞΌΞΉΞΊΞ� ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΟ ΟΟΞΏΟΟΞ±ΟΞ―Ξ± Ξ­Ξ½Ξ±Ξ½ΟΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ Ξ� ΟΟΞΏΟΟΞ½ΟΟΞ½ ΟΞΏΟ Ξ΄Ξ΅Ξ½ Ξ±Ξ½ΟΞ±ΟΞΏΞΊΟΞ―Ξ½ΞΏΞ½ΟΞ±ΞΉ ΟΟΞ· Ξ΄ΞΉΞ±ΟΞ·ΞΌΞΉΞΆΟΞΌΞ΅Ξ½Ξ· Ξ΅ΞΌΟΞ¬Ξ½ΞΉΟΞ· Ξ� Ξ»Ξ΅ΞΉΟΞΏΟΟΞ³Ξ―Ξ±..\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ ΟΟΞ»Ξ·ΟΞ�Ο Ξ� ΞΏ ΟΞ±ΟΞ±Ξ³ΟΞ³ΟΟ ΟΞ±ΟΞ­ΟΞΏΟΞ½ ΟΟΞΏΞ±ΞΉΟΞ΅ΟΞΉΞΊΞ¬ ΞΊΞ±ΞΉ ΟΟΞΌΟΞ»Ξ·ΟΟΞΌΞ±ΟΞΉΞΊΞ¬ ΟΞ·Ο Ξ½ΟΞΌΞΉΞΌΞ·Ο Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·Ο ΟΞ·Ξ½ Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· Ξ· ΞΏΟΞΏΞ―Ξ± (Ξ±) Ξ±ΟΞΏΟΞ¬ Ξ΅ΟΞΉΟΞΊΞ΅ΟΞ� ΟΟΞΏΟΟΞ½ΟΞΏΟ Ξ� Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ· Ξ� Ξ΅ΟΞΉΟΟΟΞΏΟΞ� ΟΟΞ·ΞΌΞ¬ΟΟΞ½, ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΏΟΟ ΟΟΞΏΟΟ ΟΞ·Ο, ΟΟΟΞ―Ο Ξ΅ΟΞΉΞ²Ξ¬ΟΟΞ½ΟΞ· ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, Ξ±Ξ½ ΟΞΏ ΟΟΞΏΟΟΞ½ Ξ΄Ξ΅Ξ½ Ξ±Ξ½ΟΞ±ΟΞΏΞΊΟΞ―Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΞ± ΟΞ±ΟΞ±ΞΊΟΞ·ΟΞΉΟΟΞΉΞΊΞ¬ ΟΞΏΟ, (Ξ²) Ξ΅Ξ―ΟΞ΅ ΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ¬Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΞ·Ξ½ ΟΞΉΞΌΞ� ΟΟΞ»Ξ·ΟΞ·Ο ΟΞΏΟ ΟΟΞΏΟΟΞ½ΟΞΏΟ Ξ΅Ξ―ΟΞ΅ ΟΟΞ΅ΟΞ½Ξ΅ΟΞ±ΞΉ Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ ΞΊΞ±ΞΉ (Ξ³) ΞΊΞ±ΞΉ ΟΞ΅ ΞΊΞ±ΞΌΞ―Ξ± ΟΞ΅ΟΞ―ΟΟΟΟΞ· Ξ΄Ξ΅Ξ½ Ξ±Ξ½ΟΞΉΞΊΞ±ΞΈΞΉΟΟΞ¬ Ξ� ΞΌΞ΅ΞΉΟΞ½Ξ΅ΞΉ ΟΞ·Ξ½ Ξ΅Ξ»Ξ¬ΟΞΉΟΟΞ· 2Ξ΅ΟΞ� Ξ΅Ξ³Ξ³ΟΞ·ΟΞ·.\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΟΞΉΟΟΟΟΞΈΞ΅ΟΞ± ΞΊΞ±ΞΉ Ξ±Ξ½Ξ΅ΞΎΞ¬ΟΟΞ·ΟΞ± Ξ±ΟΟ ΟΞΏ Ξ±Ξ½ ΟΟΞ―ΟΟΞ±ΟΞ±ΞΉ Ξ΅Ξ»Ξ¬ΟΟΟΞΌΞ± ΟΟΞΏ ΟΟΞΏΟΟΞ½ Ξ� ΟΟΞΉ, Ξ­ΟΞ΅ΟΞ΅ ΟΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ±Ξ½Ξ±ΞΉΟΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ·Ο ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο 14 Ξ·ΞΌΞ΅ΟΟΞ½ Ξ΄Ξ·Ξ»Ξ±Ξ΄Ξ� Ξ½Ξ± Ξ΅ΟΞΉΟΟΟΞ­ΟΞ΅ΟΞ΅ ΟΞ± ΟΟΞΏΟΟΞ½ΟΞ± ΟΞΏΟ Ξ±Ξ³ΞΏΟΞ¬ΟΞ±ΟΞ΅ ΟΟΞΏ Ξ΄ΞΉΞ±Ξ΄Ξ―ΞΊΟΟΞΏ Ξ� ΞΌΞ΅ Ξ¬Ξ»Ξ»Ξ± ΞΌΞ­ΟΞ± Ξ΅ΞΎ Ξ±ΟΞΏΟΟΞ¬ΟΞ΅ΟΟ ΟΟΞ»Ξ�ΟΞ΅ΟΞ½, ΟΟΟΟ ΟΞ·Ξ»Ξ΅ΟΟΞ½ΞΉΞΊΞ¬, ΞΌΞ΅ ΟΞ±ΟΟΞ΄ΟΞΏΞΌΞΉΞΊΞ� ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± Ξ� Ξ±ΟΟ ΞΊΞ±ΟΞΞΏΞ―ΞΊΞΏΞ½ ΟΟΞ»Ξ·ΟΞ�, Ξ΅Ξ½ΟΟΟ 14 Ξ·ΞΌΞ΅ΟΟΞ½ ΞΌΞ΅ ΟΞ»Ξ�ΟΞ· Ξ΅ΟΞΉΟΟΟΞΏΟΞ� ΟΞΏΟ ΟΞΏΟΞΏΟ ΟΞΏΟ ΞΊΞ±ΟΞ±Ξ²Ξ¬Ξ»Ξ±ΟΞ΅.\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ€ΞΏ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΞ·Ο Ξ±Ξ½Ξ±ΞΉΟΞΉΞΏΞ»ΟΞ³Ξ·ΟΞ·Ο ΟΟΞ±Ξ½Ξ±ΟΟΟΞ·ΟΞ·Ο ΞΉΟΟΟΞ΅ΞΉ ΞΌΟΞ½ΞΏ Ξ³ΞΉΞ± ΟΟΞΌΞ²Ξ¬ΟΞ΅ΞΉΟ Ξ±ΟΟ Ξ±ΟΟΟΟΞ±ΟΞ·. ΞΞΉΞ± Ξ±Ξ³ΞΏΟΞ­Ο ΟΞ±Ο ΟΞ΅ ΟΟΟΞΉΞΊΟ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ± Ξ· Ξ΅ΟΞΉΟΟΟΞΏΟΞ� ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½ Ξ΅ΞΎΞ±ΟΟΞ¬ΟΞ±ΞΉ Ξ±ΟΟ ΟΞ·Ξ½ ΟΞΏΞ»ΞΉΟΞΉΞΊΞ� ΟΞΏΟ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞΏΟ. ΞΟΟΞ±Ξ»ΟΟ, Ξ΅Ξ¬Ξ½ ΟΞΏ ΟΟΞΏΟΟΞ½ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ±ΟΟΟΞΌΞ±ΟΞΉΞΊΟ ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞΊΞ�ΟΞ΅ΟΞ΅ ΟΞ± Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ¬ ΟΞ±Ο Ξ±ΟΟ ΟΞ·Ξ½ Ξ΅Ξ³Ξ³ΟΞ·ΟΞ· ΞΊΞ±ΞΉ Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΞ΅ΟΞ΅ Ξ΅ΟΞΉΞ΄ΞΉΟΟΞΈΟΟΞ· Ξ� Ξ±Ξ½ΟΞΉΞΊΞ±ΟΞ¬ΟΟΞ±ΟΞ· ΟΟΞ½ ΟΟΞΏΟΟΞ½ΟΟΞ½, Ξ� Ξ΅ΟΞΉΟΟΟΞΏΟΞ� ΟΟΞ½ ΟΟΞ·ΞΌΞ¬ΟΟΞ½, ΟΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞΉΟ ΟΟΞΏΟΟΞΏΞΈΞ­ΟΞ΅ΞΉΟ ΟΞΏΟ ΞΏΟΞ―ΞΆΞ΅ΞΉ Ξ· ΞΊΞ΅Ξ―ΞΌΞ΅Ξ½Ξ· Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ±.\\n        \"],[9],[0,\"\\n        \"],[7,\"h6\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"Ξ§ΟΞ·ΞΌΞ±ΟΞΏΞΏΞΉΞΊΞΏΞ½ΞΏΞΌΞΉΞΊΞ¬ ΞΊΞ±ΞΉ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ± ΞΊΞ±ΞΉ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"Ξ€Ξ± Ξ²Ξ±ΟΞΉΞΊΞ¬ ΟΞ±Ο Ξ΄ΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ± ΟΟΞ±Ξ½ Ξ±Ξ½ΞΏΞ―Ξ³Ξ΅ΟΞ΅ ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ, ΞΌΞ΅ΟΞ±ΟΞ­ΟΞ΅ΟΞ΅ ΟΟΞ�ΞΌΞ±ΟΞ±, ΟΞ±Ξ―ΟΞ½Ξ΅ΟΞ΅ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ Ξ� Ξ±Ξ³ΞΏΟΞ¬ΞΆΞ΅ΟΞ΅ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ±:\"],[9],[0,\"\\n        \"],[7,\"h6\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"ΞΞΉΞΊΞ±Ξ―ΟΞΌΞ± Ξ³ΞΉΞ± Ξ²Ξ±ΟΞΉΞΊΟ ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"Ξ£ΟΞΌΟΟΞ½Ξ± ΞΌΞ΅ ΟΞ·Ξ½ Ξ΅ΞΈΞ½ΞΉΞΊΞ� Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ± ΞΏ Β«Ξ²Ξ±ΟΞΉΞΊΟΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟΟ ΟΞ»Ξ·ΟΟΞΌΟΞ½Β» Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ­Ξ½Ξ±Ο Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟΟ ΟΞΏΟ ΞΊΞ±Ξ»ΟΟΟΞ΅ΞΉ ΟΞΉΟ ΟΟΞ½Ξ�ΞΈΞ΅ΞΉΟ ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ­Ο ΟΞ·Ο ΞΊΞ±ΞΈΞ·ΞΌΞ΅ΟΞΉΞ½Ξ�Ο ΞΆΟΞ�Ο, ΟΟΟΟ: \\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΞ±ΟΞ¬ΞΈΞ΅ΟΞ· ΞΌΞ΅ΟΟΞ·ΟΟΞ½\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΞ½Ξ¬Ξ»Ξ·ΟΞ· ΞΌΞ΅ΟΟΞ·ΟΟΞ½ Ξ΅Ξ½ΟΟΟ ΟΞ·Ο ΞΞ½ΟΟΞ·Ο ΟΞ΅ ΟΞ±ΞΌΞ΅Ξ―ΞΏ Ξ� ATMs\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΞΌΞ΅ΟΞ΅Ο ΟΟΞ΅ΟΟΞ΅ΞΉΟ\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ ΟΞ¬ΞΎΞ΅ΞΉΟ ΟΞ»Ξ·ΟΟΞΌΟΞ½ ΞΌΞ­ΟΟ ΞΊΞ¬ΟΟΞ±Ο (ΟΟΞΌΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΞΏΟ ΞΊΞ±ΞΉ ΟΟΞ½ online ΟΞ»Ξ·ΟΟΞΌΟΞ½).\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΞ΅ΟΞ±ΟΞΏΟΞ­Ο ΟΞΉΟΟΟΟΞ΅ΟΞ½ (ΟΟΞΌΟΞ΅ΟΞΉΞ»Ξ±ΞΌΞ²Ξ±Ξ½ΞΏΞΌΞ­Ξ½ΞΏΟ ΟΞ¬Ξ³ΞΉΟΞ½ Ξ΅Ξ½ΟΞΏΞ»ΟΞ½ ΟΞ΅ Ξ³ΞΊΞΉΟΞ­ Ξ� Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΟΟΞ±ΞΊΞ¬ (e-banking)).\\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"Ξ Ξ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ±ΟΟ ΟΞ»Ξ± ΟΞ± ΟΞΉΟΟΟΟΞΉΞΊΞ¬ ΞΉΞ΄ΟΟΞΌΞ±ΟΞ± ΞΌΞ΅ Ξ­Ξ΄ΟΞ± ΟΞ·Ξ½ ΞΞ»Ξ»Ξ¬Ξ΄Ξ± ΞΊΞ±ΞΉ ΟΞΏΟΞ»Ξ¬ΟΞΉΟΟΞΏΞ½ ΟΞ΅ Ξ΅ΟΟΟ. ΞΞ΅ ΟΞΏ Ξ¬Ξ½ΞΏΞΉΞ³ΞΌΞ± ΟΞ­ΟΞΏΞΉΞΏΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΞΏΟ ΞΏ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�Ο Ξ΄ΞΉΞΊΞ±ΞΉΞΏΟΟΞ±ΞΉ Ξ΅ΟΞ―ΟΞ·Ο ΞΌΞΉΞ± ΞΊΞ¬ΟΟΞ± ΟΞ»Ξ·ΟΟΞΌΟΞ½ ΟΞ·Ξ½ ΞΏΟΞΏΞ―Ξ± ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞ΅Ξ― Ξ³ΞΉΞ± ΟΞ·Ξ½ Ξ±Ξ½Ξ¬Ξ»Ξ·ΟΞ· ΟΟΞ·ΞΌΞ¬ΟΟΞ½ ΞΊΞ±ΞΉ ΟΞ·Ξ½ ΟΞ»Ξ·ΟΟΞΌΞ� Ξ±Ξ³ΞΏΟΟΞ½ ΟΞΏΟ ΟΟΞ±Ξ³ΞΌΞ±ΟΞΏΟΞΏΞΉΞ΅Ξ― Ξ΅Ξ―ΟΞ΅ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ¬ Ξ΅Ξ―ΟΞ΅ ΟΟΞ± ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞ±. \\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ Ξ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ΅Ο Ξ³ΞΉΞ± ΟΞ± ΟΞ­Ξ»Ξ·: Ξ ΟΞΏΟΞΏΟ Ξ±Ξ½ΞΏΞ―ΞΎΞ΅ΟΞ΅ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ, Ξ· ΟΟΞ¬ΟΞ΅ΞΆΞ± ΞΏΟΞ΅Ξ―Ξ»Ξ΅ΞΉ Ξ½Ξ± ΟΞ±Ο Ξ΄ΟΟΞ΅ΞΉ Ξ­Ξ½Ξ± Ξ­Ξ³Ξ³ΟΞ±ΟΞΏ ΟΟΞΏΟ Ξ±ΟΞ±ΟΞΉΞΈΞΌΞΏΟΞ½ΟΞ±ΞΉ ΞΏΞΉ ΟΞ·ΞΌΞ±Ξ½ΟΞΉΞΊΟΟΞ΅ΟΞ΅Ο ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο ΟΞΏΟ ΟΞ±ΟΞ­ΟΞΏΞ½ΟΞ±ΞΉ ΟΞ΅ ΟΟΞ­ΟΞ· ΞΌΞ΅ ΟΞΏΞ½ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ ΞΊΞ±ΞΈΟΟ ΞΊΞ±ΞΉ ΟΞ»Ξ± ΟΞ± ΟΟΞ΅ΟΞΉΞΊΞ¬ ΟΞ­Ξ»Ξ· ΟΞΏΟ Ξ΅Ξ½Ξ΄Ξ΅ΟΞΏΞΌΞ­Ξ½ΟΟ ΟΞ±Ο Ξ΅ΟΞΉΞ²Ξ±ΟΟΞ½ΞΏΟΞ½. Ξ ΟΟΞΊΞ΅ΞΉΟΞ±ΞΉ Ξ³ΞΉΞ± ΟΞΏ ΞΏΞ½ΞΏΞΌΞ±ΞΆΟΞΌΞ΅Ξ½ΞΏ Β«Ξ΄Ξ΅Ξ»ΟΞ―ΞΏ ΟΞ»Ξ·ΟΞΏΟΟΟΞ·ΟΞ·Ο ΟΞ΅ΟΞ― ΟΞ΅Ξ»ΟΞ½Β». ΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΟΞΏ ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞ΅Ξ―ΟΞ΅ Ξ³ΞΉΞ± Ξ½Ξ± ΟΟΞ³ΞΊΟΞ―Ξ½Ξ΅ΟΞ΅ ΟΞΏ ΞΊΟΟΟΞΏΟ ΟΟΞ½ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟΞ½ ΟΞ΅ Ξ΄ΞΉΞ¬ΟΞΏΟΞ΅Ο ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο.\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΞ»Ξ»Ξ±Ξ³Ξ� ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΞΏΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΞΏΟ: ΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±Ξ»Ξ»Ξ¬ΞΎΞ΅ΟΞ΅ ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΟ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ, ΞΌΞ΅ΟΞ±Ξ²Ξ±Ξ―Ξ½ΞΏΞ½ΟΞ±Ο ΟΞ΅ Ξ¬Ξ»Ξ»Ξ· ΟΟΞ¬ΟΞ΅ΞΆΞ±. Ξ Ξ½Ξ­Ξ± ΟΞ±Ο ΟΟΞ¬ΟΞ΅ΞΆΞ± ΞΏΟΞ΅Ξ―Ξ»Ξ΅ΞΉ Ξ½Ξ± ΟΞ±Ο Ξ²ΞΏΞ·ΞΈΞ�ΟΞ΅ΞΉ ΟΟΞΉΟ Ξ΄ΞΉΞ±Ξ΄ΞΉΞΊΞ±ΟΞ―Ξ΅Ο. ΞΟΟΞ�, ΟΟΞ· ΟΟΞ½Ξ­ΟΞ΅ΞΉΞ±, ΞΈΞ± Ξ΄ΞΉΞ±ΟΟΞ±Ξ»Ξ―ΟΞ΅ΞΉ ΟΟΞΉ Ξ· ΟΞ±Ξ»ΞΉΞ¬ ΟΞ±Ο ΟΟΞ¬ΟΞ΅ΞΆΞ± ΞΈΞ± ΟΞ·Ο Ξ΄ΞΉΞ±Ξ²ΞΉΞ²Ξ¬ΟΞ΅ΞΉ ΟΞ»Ξ± ΟΞ± ΟΟΞΏΞΉΟΞ΅Ξ―Ξ± ΟΞ±Ο ΞΊΞ±ΞΉ ΞΈΞ± Ξ±ΞΊΟΟΟΟΞ΅ΞΉ ΟΟΟΟΞ½ ΟΞ¬Ξ³ΞΉΞ΅Ο Ξ΅Ξ½ΟΞΏΞ»Ξ­Ο. \\n        \"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"\\n            Ξ Ξ½Ξ­Ξ± ΟΞ±Ο ΟΟΞ¬ΟΞ΅ΞΆΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ΅ΟΞ―ΟΞ·Ο Ξ½Ξ± Ξ΅Ξ½Ξ·ΞΌΞ΅ΟΟΟΞ΅ΞΉ ΟΞΏΟΟ ΟΟΞ―ΟΞΏΟΟ, Ο.Ο. ΟΞΏΞ½ Ξ΅ΟΞ³ΞΏΞ΄ΟΟΞ· ΟΞ±Ο, ΟΞΏΞ½ ΟΞΏΟΞ­Ξ± ΞΊΞΏΞΉΞ½ΟΞ½ΞΉΞΊΞ�Ο ΟΞ±Ο Ξ±ΟΟΞ¬Ξ»ΞΉΟΞ·Ο ΞΊΞ±ΞΉ ΟΞΏΟΟ ΟΞ±ΟΟΟΞΏΟΟ ΞΊΞΏΞΉΞ½ΟΟΞ΅Ξ»ΟΞ½ ΟΟΞ·ΟΞ΅ΟΞΉΟΞ½, ΟΟΞΉ Ξ­ΟΞ΅ΟΞ΅ Ξ±Ξ»Ξ»Ξ¬ΞΎΞ΅ΞΉ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ, Ξ½Ξ± Ξ΄Ξ·ΞΌΞΉΞΏΟΟΞ³Ξ�ΟΞ΅ΞΉ ΟΞΉΟ Ξ½Ξ­Ξ΅Ο ΟΞ¬Ξ³ΞΉΞ΅Ο Ξ΅Ξ½ΟΞΏΞ»Ξ­Ο ΟΞ±Ο ΞΊΞ±ΞΉ Ξ½Ξ± Ξ΄Ξ΅ΟΟΞ΅Ξ― ΟΟΞ΅ΟΞΉΞΊΞ­Ο Ξ¬ΞΌΞ΅ΟΞ΅Ο ΟΟΞ΅ΟΟΞ΅ΞΉΟ ΟΟΞΏΞ½ Ξ½Ξ­ΞΏ Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ.\\n            ΞΟΟΞ±Ξ»Ξ΅Ξ―Ο Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ­Ο ΟΞ»Ξ·ΟΟΞΌΞ­Ο \\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΟΞΉΞ²Ξ±ΟΟΞ½ΟΞ΅ΞΉΟ Ξ³ΞΉΞ± ΟΞ· ΟΟΞ�ΟΞ· ΟΞ·Ο ΞΊΞ¬ΟΟΞ±Ο ΟΞ±Ο ΟΟΞΉΟ Ξ·Ξ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ­Ο ΟΞ±Ο ΟΟΞ½Ξ±Ξ»Ξ»Ξ±Ξ³Ξ­Ο Ξ΅Ξ½ΟΟΟ ΟΞ·Ο Ξ.Ξ. : ΞΟΞ±Ξ½ ΟΞ»Ξ·ΟΟΞ½Ξ΅ΟΞ΅ Ξ³ΞΉΞ± ΞΊΞ¬ΟΞΉ ΟΟΞ·Ξ½ ΞΞ ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΟΞ½ΟΞ±Ο ΟΞ·Ξ½ ΟΞΉΟΟΟΟΞΉΞΊΞ� Ξ� ΟΟΞ΅ΟΟΟΞΉΞΊΞ� ΟΞ±Ο ΞΊΞ¬ΟΟΞ±, ΞΏΞΉ Ξ­ΞΌΟΞΏΟΞΏΞΉ ΞΊΞ±ΞΉ ΞΏΞΉ ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο Ξ΄Ξ΅Ξ½ ΞΌΟΞΏΟΞΏΟΞ½ Ξ½Ξ± ΟΞ±Ο Ξ΅ΟΞΉΞ²Ξ¬Ξ»Ξ»ΞΏΟΞ½ Ξ΅ΟΞΉΟΞ»Ξ­ΞΏΞ½ ΟΞ­Ξ»ΞΏΟ β Ξ³Ξ½ΟΟΟΟ ΞΊΞ±ΞΉ ΟΟ Β«Ξ΅ΟΞΉΟΟΟΟΞΈΞ΅ΟΞ· ΟΟΞ­ΟΟΞ·Β» β ΞΌΟΞ½ΞΏ ΞΊΞ±ΞΉ ΞΌΟΞ½ΞΏ Ξ΅ΟΞ΅ΞΉΞ΄Ξ� ΟΟΞ·ΟΞΉΞΌΞΏΟΞΏΞΉΞ�ΟΞ±ΟΞ΅ ΞΌΞΉΞ± ΟΟΞ³ΞΊΞ΅ΞΊΟΞΉΞΌΞ­Ξ½Ξ· ΞΊΞ¬ΟΟΞ±. \\n        \"],[9],[0,\"\\n        \\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"Ξ ΞΊΞ±Ξ½ΟΞ½Ξ±Ο Ξ±ΟΟΟΟ ΞΉΟΟΟΞ΅ΞΉ Ξ³ΞΉΞ± ΟΞ»Ξ΅Ο ΟΞΉΟ Ξ±Ξ³ΞΏΟΞ­Ο ΞΌΞ΅ ΞΊΞ¬ΟΟΞ± (ΟΞ΅ ΞΊΞ±ΟΞ±ΟΟΞ�ΞΌΞ±ΟΞ± Ξ� ΟΟΞΏ Ξ΄ΞΉΞ±Ξ΄Ξ―ΞΊΟΟΞΏ) ΟΞΏΟ Ξ³Ξ―Ξ½ΞΏΞ½ΟΞ±ΞΉ Ξ΅Ξ½ΟΟΟ ΟΞ·Ο ΟΟΟΞ±Ο ΟΞ±Ο Ξ� ΟΞ΅ Ξ¬Ξ»Ξ»Ξ· ΟΟΟΞ± ΟΞ·Ο ΞΞ.\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"ΞΞΌΞ΅ΟΞ΅Ο ΟΟΞ΅ΟΟΞ΅ΞΉΟ: \\n                ΞΞ¬Ξ½ Ξ΄ΞΉΞ±ΟΞΉΟΟΟΟΞ΅ΟΞ΅ ΞΊΞ¬ΟΞΏΞΉΞ± Ξ¬ΞΌΞ΅ΟΞ· ΟΟΞ­ΟΟΞ· Ξ±ΟΟ ΟΞΏΞ½ ΟΟΞ±ΟΞ΅ΞΆΞΉΞΊΟ ΟΞ±Ο Ξ»ΞΏΞ³Ξ±ΟΞΉΞ±ΟΞΌΟ, Ξ±ΟΟΟ ΞΌΟΞΏΟΞ΅Ξ― Ξ½Ξ± ΟΟΞΌΞ²Ξ΅Ξ― ΞΊΞ±ΟΞ¬ Ξ»Ξ¬ΞΈΞΏΟ - Ο.Ο. Ξ±Ξ½ Ξ±ΞΊΟΟΟΟΞ±ΟΞ΅ ΞΌΞΉΞ± ΟΟΞΌΞ²Ξ±ΟΞ· ΞΌΞ΅ ΟΞΏΞ½ ΟΟΞΏΞΌΞ·ΞΈΞ΅ΟΟΞ� ΟΞ±Ο, Ξ±Ξ»Ξ»Ξ¬ Ξ· Ξ¬ΞΌΞ΅ΟΞ· ΟΟΞ­ΟΟΞ· Ξ­Ξ³ΞΉΞ½Ξ΅ ΟΞ±ΟΟΞ»' Ξ±ΟΟΞ¬ ΞΌΞ΅ΟΞ¬ ΟΞ· Ξ»Ξ�ΞΎΞ· ΟΞ·Ο ΟΟΞΌΞ²Ξ±ΟΞ·Ο. Ξ£Ξ΅ ΟΞ­ΟΞΏΞΉΞ΅Ο ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΞΉΟ, Ξ­ΟΞ΅ΟΞ΅ Ξ΄ΞΉΞΊΞ±Ξ―ΟΞΌΞ± ΟΞ΅ Ξ΅ΟΞΉΟΟΟΞΏΟΞ� ΟΟΞ½ ΟΟΞ·ΞΌΞ¬ΟΟΞ½ ΟΞ±Ο Ξ΅Ξ½ΟΟΟ 8 Ξ΅Ξ²Ξ΄ΞΏΞΌΞ¬Ξ΄ΟΞ½. ΞΟΟΟ ΞΉΟΟΟΞ΅ΞΉ Ξ³ΞΉΞ± ΟΞ»Ξ΅Ο ΟΞΉΟ Ξ¬ΞΌΞ΅ΟΞ΅Ο ΟΟΞ΅ΟΟΞ΅ΞΉΟ, ΟΟΟΞΏ Ξ΅Ξ½ΟΟΟ ΟΞ·Ο ΟΟΟΞ±Ο ΟΞ±Ο ΟΟΞΏ ΞΊΞ±ΞΉ Ξ³ΞΉΞ± ΟΞΉΟ Ξ΄ΞΉΞ±ΟΟΞ½ΞΏΟΞΉΞ±ΞΊΞ­Ο Ξ¬ΞΌΞ΅ΟΞ΅Ο ΟΟΞ΅ΟΟΞ΅ΞΉΟ Ξ΅Ξ½ΟΟΟ ΟΞ·Ο ΞΞ.\\n        \"],[9],[0,\"\\n        \"],[7,\"h6\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"ΞΞ½ΟΟΟΞΈΞ·ΞΊΞ± Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞ± β Ξ£ΟΞ΅Ξ³Ξ±ΟΟΞΉΞΊΞ� ΟΞ―ΟΟΞ·\"],[9],[0,\"\\n        \"],[7,\"br\",true],[8],[9],[0,\"- ΞΞ½Ξ± Ξ΅Ξ½ΟΟΟΞΈΞ·ΞΊΞΏ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ ΟΞ±Ο Ξ΄Ξ―Ξ½Ξ΅ΞΉ ΟΞ· Ξ΄ΟΞ½Ξ±ΟΟΟΞ·ΟΞ± Ξ½Ξ± Ξ±Ξ³ΞΏΟΞ¬ΟΞ΅ΟΞ΅ ΟΟΞ―ΟΞΉ. Ξ€Ξ± Ξ΅Ξ½ΟΟΟΞΈΞ·ΞΊΞ± Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞ± ΟΞΏΟΞ·Ξ³ΞΏΟΞ½ΟΞ±ΞΉ Ξ±ΟΟ ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο, ΞΊΟΞ·ΞΌΞ±ΟΞΉΞΊΞ­Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ΅Ο Ξ� Ξ¬Ξ»Ξ»ΞΏΟΟ ΟΞΉΟΟΟΟΞ­Ο ΞΊΞ±ΞΉ Ξ΅Ξ―Ξ½Ξ±ΞΉ ΟΟΞ½Ξ�ΞΈΟΟ Ξ΅Ξ³Ξ³ΟΞ·ΞΌΞ­Ξ½Ξ± ΞΌΞ΅ ΟΟΞΏΞΈΞ�ΞΊΞ΅ΟΟΞ· ΟΞΏΟ Ξ±ΞΊΞΉΞ½Ξ�ΟΞΏΟ ΟΞ±Ο. ΞΞΉ ΟΟΞ¬ΟΞ΅ΞΆΞ΅Ο Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΅Ξ»Ξ΅ΟΞΈΞ΅ΟΞ΅Ο Ξ½Ξ± Ξ΅Ξ³ΞΊΟΞ―Ξ½ΞΏΟΞ½ Ξ� Ξ½Ξ± Ξ±ΟΞΏΟΟΞ―ΟΟΞΏΟΞ½ ΟΞ·Ξ½ Ξ±Ξ―ΟΞ·ΟΞ� ΟΞ±Ο Ξ³ΞΉΞ± ΟΞΏΟΞ�Ξ³Ξ·ΟΞ· Ξ΅Ξ½ΟΟΟΞΈΞ·ΞΊΞΏΟ Ξ΄Ξ±Ξ½Ξ΅Ξ―ΞΏΟ. Ξ ΟΞΏΟΞΏΟ ΟΞ±Ο ΟΞΏΟΞ·Ξ³Ξ�ΟΞ΅ΞΉ Ξ΅Ξ½ΟΟΟΞΈΞ·ΞΊΞΏ Ξ΄Ξ¬Ξ½Ξ΅ΞΉΞΏ, ΞΏ ΟΞΉΟΟΟΟΞ�Ο ΟΟΞ΅ΞΉΞ¬ΞΆΞ΅ΟΞ±ΞΉ Ξ½Ξ± Ξ΅ΞΊΟΞΉΞΌΞ�ΟΞ΅ΞΉ ΟΞ·Ξ½ ΟΞΉΟΟΞΏΞ»Ξ·ΟΟΞΉΞΊΞ� ΟΞ±Ο ΞΉΞΊΞ±Ξ½ΟΟΞ·ΟΞ±, Ξ΄Ξ·Ξ»Ξ±Ξ΄Ξ� Ξ±Ξ½ ΞΌΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± ΞΊΞ±Ξ»ΟΟΞ΅ΟΞ΅ ΟΞΏ ΞΊΟΟΟΞΏΟ ΟΞΏΟ Ξ΄Ξ±Ξ½Ξ΅Ξ―ΞΏΟ.\\n        \"],[7,\"br\",true],[8],[9],[0,\"- Ξ ΟΞΉΟΟΟΟΞ�Ο Ξ� ΞΏ ΟΞΉΟΟΟΟΞΉΞΊΟΟ Ξ΄ΞΉΞ±ΞΌΞ΅ΟΞΏΞ»Ξ±Ξ²Ξ·ΟΞ�Ο ΞΏΟΞ΅Ξ―Ξ»Ξ΅ΞΉ Ξ½Ξ± ΟΞ±Ο Ξ΄ΟΟΞ΅ΞΉ ΟΟΞΏΞΈΞ΅ΟΞΌΞ―Ξ± Ξ΄Ξ­ΞΊΞ± Ξ·ΞΌΞ΅ΟΟΞ½ (ΟΞ΅ΟΞ―ΞΏΞ΄ΞΏΟ ΞΌΞ΅Ξ»Ξ­ΟΞ·Ο), ΟΟΞΏΞΊΞ΅ΞΉΞΌΞ­Ξ½ΞΏΟ Ξ½Ξ± Ξ΅ΞΊΟΞΉΞΌΞ�ΟΞ΅ΟΞ΅ ΟΞ·Ξ½ ΟΟΞΏΟΟΞΏΟΞ¬, ΞΊΞ±ΞΉ Ξ΄Ξ΅Ξ½ Ξ΅ΟΞΉΟΟΞ­ΟΞ΅ΟΞ±ΞΉ Ξ½Ξ± Ξ΄Ξ΅ΟΞΈΞ΅Ξ―ΟΞ΅ ΟΞ·Ξ½ ΟΟΞΏΟΟΞΏΟΞ¬ ΟΟΞΉΞ½ ΟΞ΅ΟΞ¬ΟΞΏΟΞ½ ΟΞ­Ξ½ΟΞ΅ Ξ·ΞΌΞ­ΟΞ΅Ο. ΞΞ±ΟΞ¬ ΟΞΏ ΟΟΟΞ½ΞΏ ΟΟΞΏΞ²ΞΏΞ»Ξ�Ο ΞΌΞΉΞ±Ο ΟΟΞΏΟΟΞΏΟΞ¬Ο ΟΞΏΟ Ξ΅Ξ―Ξ½Ξ±ΞΉ Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞΉΞΊΞ� Ξ³ΞΉΞ± ΟΞΏΞ½ ΟΞΉΟΟΟΟΞΉΞΊΟ ΟΞΏΟΞ­Ξ±, ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± ΟΞ±ΟΞ­ΟΞ΅ΟΞ±ΞΉ, ΞΌΞ΅ Ξ±ΟΟΞ΄Ξ΅ΞΉΞΎΞ· ΟΞ±ΟΞ±Ξ»Ξ±Ξ²Ξ�Ο, ΟΟΞΏΞ½ ΞΊΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�, Ξ΅Ξ³Ξ³ΟΞ¬ΟΟΟ Ξ� ΞΌΞ΅ Ξ¬Ξ»Ξ»ΞΏ ΟΟΞ±ΞΈΞ΅ΟΟ ΞΌΞ­ΟΞΏ, Ξ±Ξ½ΟΞ―Ξ³ΟΞ±ΟΞΏ, Ξ΄Ξ΅ΟΞΌΞ΅ΟΟΞΉΞΊΟ Ξ³ΞΉΞ± ΟΞΏ ΟΞΏΟΞ­Ξ± ΟΞ―ΟΟΟΟΞ·Ο, ΟΟΞ΅Ξ΄Ξ―ΞΏΟ ΟΟΞΌΞ²Ξ±ΟΞ·Ο ΟΞ―ΟΟΟΟΞ·Ο.\\n        \"],[7,\"h6\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"Ξ€ΞΉ ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ³Ξ½ΟΟΞ―ΞΆΞ΅ΟΞ΅ ΟΟΞΏΟΞΏΟ Ξ±Ξ³ΞΏΟΞ¬ΟΞ΅ΟΞ΅ Ξ­Ξ½Ξ± Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΟ ΟΟΞΏΟΟΞ½\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ ΟΞΏΟΞΏΟ ΟΟΞΏΞ³ΟΞ¬ΟΞ΅ΟΞ΅ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ�ΟΞΉΞΏ ΟΟΞΌΞ²ΟΞ»Ξ±ΞΉΞΏ, ΞΈΞ± ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ»Ξ¬Ξ²Ξ΅ΟΞ΅ Ξ­Ξ½Ξ± ΟΟΟΞΏΟΞΏΞΉΞ·ΞΌΞ­Ξ½ΞΏ Ξ­Ξ³Ξ³ΟΞ±ΟΞΏ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞΉΟΞ½, Ξ³Ξ½ΟΟΟΟ ΟΟ Β«Ξ­Ξ³Ξ³ΟΞ±ΟΞΏ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞΉΟΞ½ Ξ³ΞΉΞ± ΟΞΏ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΟ ΟΟΞΏΟΟΞ½Β». Ξ€ΞΏ Ξ­Ξ³Ξ³ΟΞ±ΟΞΏ Ξ±ΟΟΟ ΞΈΞ± ΟΞ±Ο Ξ²ΞΏΞ·ΞΈΞ�ΟΞ΅ΞΉ Ξ½Ξ± ΞΊΞ±ΟΞ±Ξ½ΞΏΞ�ΟΞ΅ΟΞ΅ ΞΊΞ±Ξ»ΟΟΞ΅ΟΞ± ΟΞΉ Ξ±Ξ³ΞΏΟΞ¬ΞΆΞ΅ΟΞ΅ ΞΊΞ±ΞΉ Ξ½Ξ± ΟΟΞ³ΞΊΟΞ―Ξ½Ξ΅ΟΞ΅ ΟΟΞΏΟΟΞΏΟΞ­Ο Ξ³ΞΉΞ± ΟΞ±ΟΞ΅ΞΌΟΞ΅ΟΞ� Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ¬ ΟΟΞΏΟΟΞ½ΟΞ± Ξ±ΟΟ Ξ¬Ξ»Ξ»ΞΏΟΟ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞ­Ο.\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ£Ξ΅ ΟΞ΅ΟΞ―ΟΟΟΟΞ· ΟΞΏΟ Ξ΄ΞΉΞ±ΟΞΉΟΟΟΟΞ΅ΟΞ΅ ΟΟΞΉ Ξ­ΟΞ΅ΞΉ Ξ³Ξ―Ξ½Ξ΅ΞΉ Ξ±ΟΞΎΞ·ΟΞ· ΟΟΞ± Ξ±ΟΟΞ¬Ξ»ΞΉΟΟΟΞ¬ ΟΞ±Ο ΟΟΞ­ΟΞ΅ΞΉ Ξ½Ξ± Ξ±ΟΞ΅ΟΞΈΟΞ½ΞΈΞ΅Ξ―ΟΞ΅ ΟΟΞ·Ξ½ Ξ±ΟΟΞ±Ξ»ΞΉΟΟΞΉΞΊΞ� ΟΞ±Ο Ξ΅ΟΞ±ΞΉΟΞ΅Ξ―Ξ± ΞΊΞ±ΞΉ Ξ½Ξ± ΞΆΞ·ΟΞ�ΟΞ΅ΟΞ΅ Ξ­Ξ³Ξ³ΟΞ±ΟΞ· Ξ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΞ� Ξ΅Ξ½Ξ·ΞΌΞ­ΟΟΟΞ· Ξ³ΞΉΞ± ΟΞΏ Ξ±ΞΊΟΞΉΞ²Ξ­Ο ΟΞΏΟΞΏΟΟΟ ΟΞ·Ο Ξ±Ξ½Ξ±ΟΟΞΏΟΞ±ΟΞΌΞΏΞ³Ξ�Ο ΟΟΞ½ Ξ±ΟΟΞ±Ξ»Ξ―ΟΟΟΟΞ½ ΞΊΞ±ΟΞ¬ ΟΞΏ ΟΟΞΏΞ½ΞΉΞΊΟ Ξ΄ΞΉΞ¬ΟΟΞ·ΞΌΞ± ΟΞΏΟ ΟΞ±Ο Ξ΅Ξ½Ξ΄ΞΉΞ±ΟΞ­ΟΞ΅ΞΉ.\\n        \"],[9],[0,\"\\n        \"],[7,\"h6\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"ΞΞΈΞ­ΞΌΞΉΟΞ΅Ο ΟΟΞ±ΞΊΟΞΉΞΊΞ­Ο, ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΞΏΞ― ΟΟΞΏΞΉ\"],[9],[0,\"\\n        \"],[7,\"h6\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"ΞΞΈΞ­ΞΌΞΉΟΞ΅Ο Ξ΅ΞΌΟΞΏΟΞΉΞΊΞ­Ο ΟΟΞ±ΞΊΟΞΉΞΊΞ­Ο\"],[9],[0,\"\\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"\\n            ΞΟΞ±Ξ½ Ξ±Ξ³ΞΏΟΞ¬ΞΆΞ΅ΟΞ΅ Ξ±Ξ³Ξ±ΞΈΞ¬ ΞΊΞ±ΞΉ ΟΟΞ·ΟΞ΅ΟΞ―Ξ΅Ο Ξ±ΟΟ ΞΉΟΟΞΏΟΞ΅Ξ»Ξ―Ξ΄Ξ± Ξ� ΟΟΟΞΉΞΊΟ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ± Ξ· Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ± ΟΞ¬Ο ΟΟΞΏΟΟΞ±ΟΞ΅ΟΞ΅ΞΉ Ξ­Ξ½Ξ±Ξ½ΟΞΉ Ξ±ΞΈΞ­ΞΌΞΉΟΟΞ½ Ξ΅ΞΌΟΞΏΟΞΉΞΊΟΞ½ ΟΟΞ±ΞΊΟΞΉΞΊΟΞ½ ΟΟΞ½ ΟΞ±ΟΞ±ΞΊΞ¬ΟΟ Ξ΄ΟΞΏ Ξ²Ξ±ΟΞΉΞΊΟΞ½ ΞΊΞ±ΟΞ·Ξ³ΞΏΟΞΉΟΞ½:\\n            \"],[7,\"br\",true],[8],[9],[0,\"- Ξ Ξ±ΟΞ±ΟΞ»Ξ±Ξ½Ξ·ΟΞΉΞΊΞ­Ο ΟΟΞ±ΞΊΟΞΉΞΊΞ­Ο, Ξ΅Ξ―ΟΞ΅ ΞΌΞ΅ ΟΟΞ¬ΞΎΞ· (ΟΞ±ΟΞΏΟΞ� ΟΞ΅ΟΞ΄ΞΏΟΟ ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ±Ο) Ξ΅Ξ―ΟΞ΅ ΞΌΞ΅ ΟΞ±ΟΞ¬Ξ»Ξ΅ΞΉΟΞ· (Ξ±ΟΟΞΊΟΟΟΞ· ΟΞ·ΞΌΞ±Ξ½ΟΞΉΞΊΞ�Ο ΟΞ»Ξ·ΟΞΏΟΞΏΟΞ―Ξ±Ο)\\n            \"],[7,\"br\",true],[8],[9],[0,\"- ΞΟΞΉΞΈΞ΅ΟΞΉΞΊΞ­Ο ΟΟΞ±ΞΊΟΞΉΞΊΞ­Ο, ΟΞΏΟ ΟΞΊΞΏΟΟ Ξ­ΟΞΏΟΞ½ ΟΞ·Ξ½ Ξ¬ΟΞΊΞ·ΟΞ· ΟΞ―Ξ΅ΟΞ·Ο Ξ³ΞΉΞ± Ξ±Ξ³ΞΏΟΞ¬ ΟΟΞΏΟΟΞ½ΟΞΏΟ/ΟΟΞ·ΟΞ΅ΟΞ―Ξ±Ο.\\n        \"],[9],[0,\"\\n        \"],[7,\"h6\",true],[10,\"class\",\"nova-sb\"],[8],[0,\"ΞΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΞΏΞ― ΟΟΞΏΞΉ\"],[9],[0,\"\\n        \\n        \"],[7,\"p\",true],[10,\"class\",\"nova-r\"],[8],[0,\"\\n        \"],[7,\"br\",true],[8],[9],[0,\"- Ξ Ξ­ΟΞ±Ξ½ ΟΞ·Ο Ξ³Ξ΅Ξ½ΞΉΞΊΞ�Ο Ξ±ΟΞ±Ξ―ΟΞ·ΟΞ·Ο ΟΞ΅ΟΞ― Β«ΞΊΞ±Ξ»Ξ�Ο ΟΞ―ΟΟΞ·ΟΒ» ΞΊΞ±ΞΉ Β«ΞΉΟΞΏΟΟΞΏΟΞ―Ξ±ΟΒ», Ξ· ΞΊΞ΅Ξ―ΞΌΞ΅Ξ½Ξ· Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ± ΟΟΞΏΞ²Ξ»Ξ­ΟΞ΅ΞΉ Ξ­Ξ½Ξ±Ξ½ ΞΊΞ±ΟΞ¬Ξ»ΞΏΞ³ΞΏ Ξ΅ΞΉΞ΄ΞΉΞΊΟΞ½ ΟΟΟΞ½ ΟΞΏΟ ΞΌΟΞΏΟΞΏΟΞ½ Ξ½Ξ± ΞΈΞ΅ΟΟΞ·ΞΈΞΏΟΞ½ ΞΊΞ±ΟΞ±ΟΟΞ·ΟΟΞΉΞΊΞΏΞ―.\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/useful-rights.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/templates/useful", ["exports"], function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = Ember.HTMLBars.template({
        "id": "vth9SyFp",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\",true],[10,\"id\",\"useful\"],[10,\"class\",\"container navbar-top-offset mt-5\"],[8],[0,\"\\n    \"],[7,\"h4\",true],[10,\"class\",\"text-center nova-b blue mt-5 mb-5\"],[8],[0,\"Ξ§ΟΞ�ΟΞΉΞΌΞ±\"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-wrap justify-content-center pt-5 mt-5\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\"],[\"global-map\"]],{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"useful-subcontainer\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/map.png\"],[10,\"class\",\"useful-option-img\"],[8],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"useful-option-text\"],[8],[0,\"Ξ§Ξ¬ΟΟΞ·Ο\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",null,[[\"route\"],[\"useful-rights\"]],{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"useful-subcontainer\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/rights.png\"],[10,\"class\",\"useful-option-img\"],[8],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"useful-option-text\"],[8],[0,\"ΞΞΉΞΊΞ±ΞΉΟΞΌΞ±ΟΞ±\"],[7,\"br\",true],[8],[9],[0,\" ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΟΞ½\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",null,[[\"route\"],[\"informative\"]],{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"useful-subcontainer\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/papers.png\"],[10,\"class\",\"useful-option-img\"],[8],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"useful-option-text\"],[8],[0,\"ΞΞ½Ξ·ΞΌΞ΅ΟΟΟΞΉΞΊΞ¬\"],[7,\"br\",true],[8],[9],[0,\" ΞΞ½ΟΟΟΞ±\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"div\",true],[10,\"class\",\"useful-subcontainer\"],[10,\"data-toggle\",\"modal\"],[10,\"data-target\",\"#consumer\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/phone.png\"],[10,\"class\",\"useful-option-img\"],[8],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"useful-option-text\"],[8],[0,\"ΞΟΞ±ΞΌΞΌΞ�\"],[7,\"br\",true],[8],[9],[0,\" ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\"],[\"useful-differences\"]],{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"useful-subcontainer\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/differences.png\"],[10,\"class\",\"useful-option-img\"],[8],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"useful-option-text\"],[8],[0,\"ΞΟΞ―Ξ»ΟΟΞ·\"],[7,\"br\",true],[8],[9],[0,\" ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞΉΞΊΟΞ½\"],[7,\"br\",true],[8],[9],[0,\" ΞΞΉΞ±ΟΞΏΟΟΞ½\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"div\",true],[10,\"class\",\"useful-subcontainer\"],[10,\"data-toggle\",\"modal\"],[10,\"data-target\",\"#law\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/law.png\"],[10,\"class\",\"useful-option-img\"],[8],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"useful-option-text\"],[8],[0,\"ΞΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ΅Ο\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"useful-subcontainer\"],[10,\"data-toggle\",\"modal\"],[10,\"data-target\",\"#odr\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/odr.png\"],[10,\"class\",\"useful-option-img\"],[8],[9],[0,\"\\n            \"],[7,\"p\",true],[10,\"class\",\"useful-option-text\"],[8],[0,\"Ξ Ξ»Ξ±ΟΟΟΟΞΌΞ± ODR\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"route\"],[\"contact\"]],{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"useful-subcontainer\"],[8],[0,\"\\n            \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/consumer.png\"],[10,\"class\",\"useful-option-img\"],[8],[9],[0,\"   \\n            \"],[7,\"p\",true],[10,\"class\",\"useful-option-text\"],[8],[0,\"Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±\"],[7,\"br\",true],[8],[9],[0,\" ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"id\",\"consumer\"],[10,\"class\",\"modal useful-modal\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"modal-dialog modal-dialog-centered modal-md\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n            \"],[7,\"button\",true],[10,\"class\",\"close useful-modal-close\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"aria-hidden\",\"true\"],[8],[0,\"Γ\"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column align-items-center justify-content-around\"],[8],[0,\"\\n                \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/phone.png\"],[10,\"class\",\"useful-modal-img mb-5\"],[8],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"h5 nova-b mb-5 text-center\"],[8],[0,\"ΞΟΞ±ΞΌΞΌΞ� ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�\"],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-sb text-center\"],[8],[0,\"Ξ€Ξ·Ξ»Ξ­ΟΟΞ½ΞΏ Ξ΅ΟΞΉΞΊΞΏΞΉΞ½ΟΞ½Ξ―Ξ±Ο: \"],[7,\"span\",true],[10,\"class\",\"blue h6\"],[8],[0,\"1520\"],[9],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-sb text-center\"],[8],[0,\"ΞΞ»Ξ΅ΞΊΟΟΞΏΞ½ΞΉΞΊΞ� ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·:\"],[7,\"span\",true],[10,\"class\",\"blue h6\"],[8],[0,\" 1520@efpolis.gr\"],[9],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"id\",\"law\"],[10,\"class\",\"modal useful-modal\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"modal-dialog modal-dialog-centered modal-md\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n            \"],[7,\"button\",true],[10,\"class\",\"close useful-modal-close\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"aria-hidden\",\"true\"],[8],[0,\"Γ\"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column align-items-center justify-content-around\"],[8],[0,\"\\n                \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/law.png\"],[10,\"class\",\"useful-modal-img mb-4\"],[8],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-r mb-5 text-center\"],[8],[0,\"ΞΟΞΌΞΏΞ΄ΞΉΟΟΞ·ΟΞ±Ο ΞΞ΅Ξ½ΞΉΞΊΞ�Ο ΞΞΉΞ΅ΟΞΈΟΞ½ΟΞ·Ο Ξ ΟΞΏΟΟΞ±ΟΞ―Ξ±Ο ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�\"],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-sb text-center\"],[8],[0,\"ΞΞ΅Ξ―ΟΞ΅ ΟΞΉΟ Ξ½ΞΏΞΌΞΏΞΈΞ΅ΟΞ―Ξ΅Ο \"],[7,\"a\",true],[10,\"href\",\"https://warply.s3.amazonaws.com/applications/ed840ad545884deeb6c6b699176797ed/legislation_pdf.pdf\"],[10,\"target\",\"_blank\"],[8],[7,\"span\",true],[10,\"class\",\"blue h6\"],[8],[0,\"Ξ΅Ξ΄Ο\"],[9],[9],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-sb text-center\"],[8],[0,\"ΞΞ΅Ξ―ΟΞ΅ \"],[7,\"a\",true],[10,\"href\",\"http://www.mindev.gov.gr/%CE%B5%CE%BD%CE%B9%CF%83%CF%87%CF%8D%CE%B5%CF%84%CE%B1%CE%B9-%CE%BC%CE%B5-%CF%85%CF%80%CE%BF%CF%85%CF%81%CE%B3%CE%B9%CE%BA%CE%AE-%CE%B1%CF%80%CF%8C%CF%86%CE%B1%CF%83%CE%B7-%CE%B7-%CE%B4%CE%B9%CE%B1/\"],[10,\"target\",\"_blank\"],[8],[7,\"span\",true],[10,\"class\",\"blue h6\"],[8],[0,\"Ξ΅Ξ΄Ο\"],[9],[9],[0,\" ΟΞ·Ξ½ Ξ₯Ξ Ξ³ΞΉΞ± ΟΞΏΞ½ e-ΞΞ±ΟΞ±Ξ½Ξ±Ξ»ΟΟΞ�\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"id\",\"odr\"],[10,\"class\",\"modal useful-modal\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"modal-dialog modal-dialog-centered modal-md\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"modal-content\"],[8],[0,\"\\n            \"],[7,\"button\",true],[10,\"class\",\"close useful-modal-close\"],[10,\"data-dismiss\",\"modal\"],[10,\"aria-label\",\"Close\"],[10,\"type\",\"button\"],[8],[0,\"\\n                \"],[7,\"span\",true],[10,\"aria-hidden\",\"true\"],[8],[0,\"Γ\"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column align-items-center justify-content-around\"],[8],[0,\"\\n                \"],[7,\"img\",true],[10,\"src\",\"/assets/useful/law.png\"],[10,\"class\",\"useful-modal-img mb-4\"],[8],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-b mb-5 text-center h5 text-center\"],[8],[0,\"Ξ Ξ»Ξ±ΟΟΟΟΞΌΞ± ODR\"],[9],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"nova-sb text-center\"],[8],[0,\"ΞΞΉΞ± Ξ½Ξ± Ξ΄Ξ΅Ξ―ΟΞ΅ ΟΞ΅ΟΞΉΟΟΟΟΞ΅ΟΞ± ΟΟΞ·Ξ½ ΟΞ»Ξ±ΟΟΟΟΞΌΞ± ODR ΟΞ±ΟΞ�ΟΟΞ΅ \"],[7,\"a\",true],[10,\"href\",\"https://warply.s3.amazonaws.com/applications/ed840ad545884deeb6c6b699176797ed/FAQ-Geoblocking.pdf\"],[10,\"target\",\"_blank\"],[8],[7,\"span\",true],[10,\"class\",\"blue h6\"],[8],[0,\"Ξ΅Ξ΄Ο\"],[9],[9],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
        "meta": {
            "moduleName": "katanalotis-microsite/templates/useful.hbs"
        }
    });

    _exports.default = _default;
});;
define("katanalotis-microsite/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _private.BooleanTransform;
        }
    });
});;
define("katanalotis-microsite/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _private.DateTransform;
        }
    });
});;
define("katanalotis-microsite/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _private.NumberTransform;
        }
    });
});;
define("katanalotis-microsite/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "default", {
        enumerable: true,
        get: function () {
            return _private.StringTransform;
        }
    });
});;

;
define('katanalotis-microsite/config/environment', [], function () {
    var prefix = 'katanalotis-microsite';
    try {
        var metaName = prefix + '/config/environment';
        var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
        var config = JSON.parse(decodeURIComponent(rawConfig));

        var exports = {
            'default': config
        };

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        return exports;
    } catch (err) {
        throw new Error('Could not read config from meta tag with name "' + metaName + '".');
    }

});

;
if (!runningTests) {
    require("katanalotis-microsite/app")["default"].create({
        "name": "katanalotis-microsite",
        "version": "0.0.0+76f5f7aa"
    });
}

//# sourceMappingURL=katanalotis-microsite.map