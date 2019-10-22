/**
 * 
 */
"use strict";

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var Util = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var TRANSITION_END = 'transitionend';
    var MAX_UID = 1000000;
    var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($$$1(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined; // eslint-disable-line no-undefined
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $$$1(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $$$1.fn.emulateTransitionEnd = transitionEndEmulator;
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */


    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          selector = element.getAttribute('href') || '';
        }

        try {
          return document.querySelector(selector) ? selector : null;
        } catch (err) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var transitionDuration = $$$1(element).css('transition-duration');
        var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $$$1(element).trigger(TRANSITION_END);
      },
      // TODO: Remove in v5
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      }
    };
    setTransitionEndSupport();
    return Util;
}($);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Attach Parent Selector
var commons = function () {
	
	function commons() {}
	commons.attachParentSelector = function (parentSelector, defaultSelector) {
		var customSelector = defaultSelector;
		if (parentSelector !== '' && parentSelector.length > 0) {
			if (parentSelector === defaultSelector) {
				customSelector = defaultSelector;
			} else if ($(parentSelector).hasClass(defaultSelector)) {
				customSelector = parentSelector + "" + defaultSelector;
			} else {
				customSelector = parentSelector + " " + defaultSelector;
			}
		}
		return customSelector;
	};
	return commons;
};

// Inherit one class to another
function _inherits(SubClass, SuperClass) {
	if (typeof SuperClass !== "function" && SuperClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof SuperClass);
	}
	SubClass.prototype = new SuperClass();
}

// Propeller components Mapping
var propellerControlMapping = {
	"pmd-checkbox": function () {
		$('.pmd-checkbox').pmdCheckBox();
	},
	"pmd-radio": function () {
		$('.pmd-radio').pmdRadio();
	},
	"bst-txtfd": function () {
		$('.bst-txtfd').pmdTextfield();
	},
	"pmd-dropdown": function () {
		$('.pmd-dropdown').pmdDropdown();
	},
	"pmd-alert-toggle": function () {
		$('.pmd-alert-toggle').pmdAlert();
	},
	"pmd-tabs": function () {
		$('.pmd-tabs').pmdTab();
	},
	"pmd-sidebar": function () {
		$().pmdSidebar();
	},
	"pmd-accordion": function () {
		$('.pmd-accordion').pmdAccordion();
	},
	"ripple-effect": function () {
		$('.ripple-effect').pmdButton();
	}
};

// DOM Observer
var observeDOM = (function () {
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
		eventListenerSupported = window.addEventListener;
	return function (obj, callback) {
		if (MutationObserver) {
			// define a new observer
			var obs = new MutationObserver(function (mutations, observer) {
				if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
					callback(mutations);
				}
			});
			// have the observer observe foo for changes in children
			obs.observe(obj, {
				childList: true,
				subtree: true,
				attributes: true,
				characterData: true
			});
		} else if (eventListenerSupported) {
			obj.addEventListener('DOMNodeInserted', callback, false);
			obj.addEventListener('DOMNodeRemoved', callback, false);
		}
	};
})();

$(document).ready(function () {
	observeDOM(document.querySelector('body'), function (mutations) {
		
		processMutation(0);
		
		function processMutation(index) {
			if (index >= mutations.length) {
				return;
			}
			var mutation = mutations[index];
			var nodes = mutation.addedNodes;
			processNodes(nodes, function () {
				processMutation(index + 1);
			});
		}
		
		function processNodes(nodes, callback) {
			if (nodes.length === 0) {
				callback();
				return;
			}
			processNode(nodes, 0, function () {
				callback();
			});
		}

		function processNode(nodes, index, callback) {
			if (index >= nodes.length) {
				callback();
				return;
			}
			var node = nodes[index];
			if (containsPmdClassPrefix(node)) {
				if ($(node).attr("data-toggle") !== undefined && $(node).attr("data-toggle").toLowerCase() === "popover") {
					$().pmdPopover();
				}
				var classes = $(node).attr('class');
				if (classes === undefined) {
					callback();
					return;
				}
				classes = classes.split(' ');
				classes.forEach(function (clazz) {
					if (propellerControlMapping[clazz]) {
						propellerControlMapping[clazz]();
						return true;
					}
					return false;
				});
				processNode(nodes, index+1, function() {
					callback();
				});
			} else {

				var childNodes = node.childNodes;
				processNodes(childNodes, function() {
					processNode(nodes, index+1, function() {
						callback();
					});
				});
			}
		}

		function containsPmdClassPrefix(ele) {
			if ($(ele).attr('class') === undefined) {
				return false;
			}
			var classes = $(ele).attr('class').split(' ');
			for (var i = 0; i < classes.length; i++) {
				
				if (propellerControlMapping.hasOwnProperty(classes[i])) {
					return true;	
				}				
			}
			return false;
		}
	});
});

var pmdButton = function ($) {
    var NAME = 'pmdButton';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
	var Selector = {
        PARENT_SELECTOR: '',
        PMD_RIPPLE_EFFECT: ".ripple-effect",
        INK: '.ink'
    };
	var ClassName = {
        ANIMATE: "animate"
    };
	var Event = {
        MOUSEDOWN: 'mousedown',
        TOUCHSTART: 'touchstart',
    };
	var Template = {
        SPAN: "<span class='ink'></span>"
    };

	function onMouseDown(e) {
		var rippler = $(e.target);
		$(Selector.INK).remove();
		// create .ink element if it doesn't exist
		if (rippler.find(Selector.INK).length === 0) {
			rippler.append(Template.SPAN);
		}
		var ink = rippler.find(Selector.INK);
		// prevent quick double clicks
		ink.removeClass(ClassName.ANIMATE);
		// set .ink diametr
		if (!ink.height() && !ink.width()) {
			var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
			ink.css({ height: d, width: d });
		}
		// get click coordinates
		var x = e.pageX - rippler.offset().left - ink.width() / 2;
		var y = e.pageY - rippler.offset().top - ink.height() / 2;
		// set .ink position and add class .animate
		ink.css({
			top: y + 'px',
			left: x + 'px'
		}).addClass(ClassName.ANIMATE);

		setTimeout(function () {
			ink.remove();
		}, 1500);
	}

    var pmdButton = function () {
		_inherits(pmdButton, commons);
        function pmdButton() {
			$(pmdButton.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_RIPPLE_EFFECT)).on(Event.MOUSEDOWN+" "+Event.TOUCHSTART, onMouseDown);
        }
        return pmdButton;
    }();

    var plugInFunction = function () {
        if (this.selector !== "") {
			Selector.PARENT_SELECTOR = this.selector;
		}
		new pmdButton();
    };
    $.fn[NAME] = plugInFunction;
    return pmdButton;

} (jQuery)();

var pmdTextfield = function ($) {		
	var NAME = 'pmdTextfield';
	var JQUERY_NO_CONFLICT = $.fn[NAME];

	var ClassName = {
		PMD_TEXTFIELD: 'bst-txtfd',
		FOCUS: 'bst-txtfd-focused',
		FLOATING_COMPLETE: 'bst-txtfd-floating-label-completed',
		FLOATING_ACTIVE: 'bst-txtfd-floating-label-active'
	};

	var Selector = {
		PARENT_SELECTOR: '',
		PMD_TEXTFIELD: '.' + ClassName.PMD_TEXTFIELD,
		FOCUS: '.' + ClassName.FOCUS,
		INPUT: '.form-control'
	};

	var Template = {
		LABEL: '<span class="bst-txtfd-focused"></span>'
	};

	var Event = {
		FOCUS: 'focus',
		FOCUSOUT: 'focusout',
		CHANGE: 'change'
	};
	function onFocus(e) {
		var $this = $(e.target);
		$this.closest(Selector.PMD_TEXTFIELD).addClass(ClassName.FLOATING_ACTIVE + " " + ClassName.FLOATING_COMPLETE);
	}

	function onFocusOut(e) {
		var $this = $(e.target);
		if ($this.val() === "") {
			$this.closest(Selector.PMD_TEXTFIELD).removeClass(ClassName.FLOATING_COMPLETE);
		}
		$this.closest(Selector.PMD_TEXTFIELD).removeClass(ClassName.FLOATING_ACTIVE);
	}

	function onChange(e) {
		var $this = $(e.target);
		if ($this.val() !== "") {
			$this.closest(Selector.PMD_TEXTFIELD).addClass(ClassName.FLOATING_COMPLETE);
		}
	}
	var pmdTextfield = function () {
		_inherits(pmdTextfield, commons);
		function pmdTextfield() {
			$(pmdTextfield.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.FOCUS)).remove();
			$(pmdTextfield.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_TEXTFIELD)).find(Selector.INPUT).after(Template.LABEL);
			$(pmdTextfield.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_TEXTFIELD)).find(Selector.INPUT).each(function () {
				if ($(this).val() !== "") {
					$(this).closest(Selector.PMD_TEXTFIELD).addClass(ClassName.FLOATING_COMPLETE);
				}
			});
		}
		return pmdTextfield;
	}();
	var plugInFunction = function () {
		if (this.selector !== "") {
		  Selector.PARENT_SELECTOR = this.selector;
		}
		new pmdTextfield();
	};
	$(document).on(Event.CHANGE, Selector.PMD_TEXTFIELD + " " + Selector.INPUT, onChange);
	$(document).on(Event.FOCUS, Selector.PMD_TEXTFIELD + " " + Selector.INPUT, onFocus);
	$(document).on(Event.FOCUSOUT, Selector.PMD_TEXTFIELD + " " + Selector.INPUT, onFocusOut);
	$.fn[NAME] = plugInFunction;
	return pmdTextfield;
} (jQuery)();

var Tab = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tab';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(element) {
        this._element = element;
      } // Getters


      var _proto = Tab.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var target;
        var previous;
        var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
          previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $$$1.Event(Event.HIDE, {
          relatedTarget: this._element
        });
        var showEvent = $$$1.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $$$1(previous).trigger(hideEvent);
        }

        $$$1(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = document.querySelector(selector);
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $$$1.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });
          var shownEvent = $$$1.Event(Event.SHOWN, {
            relatedTarget: previous
          });
          $$$1(previous).trigger(hiddenEvent);
          $$$1(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // Private


      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements;

        if (container.nodeName === 'UL') {
          activeElements = $$$1(container).find(Selector.ACTIVE_UL);
        } else {
          activeElements = $$$1(container).children(Selector.ACTIVE);
        }

        var active = activeElements[0];
        var isTransitioning = callback && active && $$$1(active).hasClass(ClassName.FADE);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          var transitionDuration = Util.getTransitionDurationFromElement(active);
          $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, callback) {
        if (active) {
          $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
          var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $$$1(element).addClass(ClassName.ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        Util.reflow(element);
        $$$1(element).addClass(ClassName.SHOW);

        if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
          var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

          if (dropdownElement) {
            var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE));
            $$$1(dropdownToggleList).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      }; // Static


      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $$$1(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($$$1(this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Tab._jQueryInterface;
    $$$1.fn[NAME].Constructor = Tab;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };

    return Tab;
}($);

var pmdTab = function ($) {
    var NAME = 'pmdTab';
    var JQUERY_NO_CONFLICT = $.fn[NAME];

    var ClassName = {
        PMD_TAB: 'pmd-tabs',
		NAV_JUSTIFIED: 'nav-justified',
		PREV_TAB: 'prev-tab',
        LAST_TAB: 'last-tab',
        PM_INI: "pm-ini",
		SCROLL: "pmd-tabs-scroll",
        SCROLL_CONTAINER: 'pmd-tabs-scroll-container',
        ACTIVE_BAR: 'pmd-tab-active-bar'
    };

    var Selector = {
        PARENT_SELECTOR: '',
		PMD_TAB: '.' + ClassName.PMD_TAB,
        UL_NAV_TABS: 'ul.nav-tabs',
        LI: 'li',
        SCROLL_CONTAINER: '.' + ClassName.SCROLL_CONTAINER,
        NAV_TAB: '.nav-tabs',
        SCROLL_RIGHT: '.pmd-tabs-scroll-right',
        SCROLL_LEFT: '.pmd-tabs-scroll-left',
        UL_LI_ACTIVE: 'ul li.active',
        ACTIVE_BAR: '.' + ClassName.ACTIVE_BAR,
        NAV: '.nav',
        UL_LI: 'ul li',
        NAV_TABS_LI: '.nav-tabs li',
        LAST_TAB: '.' + ClassName.LAST_TAB,
        PREV_TAB: '.' + ClassName.PREV_TAB,
        PM_INI: '.' + ClassName.PM_INI
    };

    var Template = {
        ACTIVE_BAR_DIV: "<div class='pmd-tab-active-bar'></div>",
        SCROLL_LEFT: "<div class='pmd-tabs-scroll-left'><i class='material-icons pmd-sm'>chevron_left</i></div>",
        SCROLL_RIGHT: "<div class='pmd-tabs-scroll-right'><i class='material-icons pmd-sm'>chevron_right</i></div>",
        SCROLL_CONTAINER: "<div class='pmd-tabs-scroll-container'></div>"
    };
    function widthOfList($this) {
        var itemsWidth = 0;
        $this.find(Selector.LI).each(function () {
            var itemWidth = $(this)[0].getBoundingClientRect().width;
            itemsWidth += itemWidth;
        });
        return itemsWidth;
    }

    function appendulwidth($this) {
        if ($this.find(Selector.UL_NAV_TABS).hasClass(ClassName.NAV_JUSTIFIED)) {
            $this.find(Selector.UL_NAV_TABS).width("100%");
        } else {
            $this.find(Selector.UL_NAV_TABS).width(widthOfList($this));
        }
    }

    function getLeftPosi($this) {
        return $this.find(Selector.UL_NAV_TABS).position().left;
    }

    function reAdjust($this) {
        if (($this.outerWidth()) < widthOfList($this)) {
            var navScrolledRight = $this.find(Selector.SCROLL_CONTAINER).scrollLeft(),
                navWrapWidth = $this.width(),
                navWidth = $this.find(Selector.NAV_TAB).width(),
                ammountRight = navWidth - navScrolledRight - navWrapWidth;
            if (ammountRight > 0) {
                $this.find(Selector.SCROLL_RIGHT).show();
            }
        }
        else {
            $this.find(Selector.SCROLL_RIGHT).hide();
        }
        if (getLeftPosi($this) < 0) {
            var navScrolledLeft = $this.find(Selector.SCROLL_CONTAINER).scrollLeft(),
                ammountLeft = navScrolledLeft;
            if (ammountLeft > 0) {
                $this.find(Selector.SCROLL_LEFT).show();
            }
        }
        else {
            $this.find(Selector.SCROLL_LEFT).hide();
        }
    }

    function activeTabCenter($this) {
        var $tabWidth = $this.outerWidth(),
            $middlePosition = $tabWidth / 2,
            $tabWrapperLeft = $this.offset().left,
            $sliderActive = $this.find(Selector.UL_LI_ACTIVE),
            $activeWidth = $sliderActive.outerWidth(),
            $tabHalfWidth = $activeWidth / 2,
            $tableftScroll = $this.find(Selector.SCROLL_CONTAINER).scrollLeft(),
            $tableftPosi = $this.find(Selector.UL_LI_ACTIVE).offset().left,
            $tabCenterPosi = $tableftPosi - $middlePosition - $tabWrapperLeft + $tableftScroll + $tabHalfWidth;
        	$this.find(Selector.SCROLL_CONTAINER).animate({ scrollLeft: $tabCenterPosi }, 1);
    }

    function sliderLoad($this) {
        var $slider = $this.find(Selector.ACTIVE_BAR),
            $sliderActive = $this.find(Selector.UL_LI_ACTIVE),
            $isX = $sliderActive.offset().left,
            $navX = $this.find(Selector.NAV).offset().left,
            $wrapperLeft = $this.offset().left,
            $sliderLeft = $isX - $wrapperLeft,
            $finalPossion = $wrapperLeft - $navX + $isX - $wrapperLeft;

        if ($navX < $wrapperLeft) {
            $slider.width($sliderActive.width() + "px").css("left", $finalPossion + "px");
        } else {
            $slider.width($sliderActive.width() + "px").css("left", $sliderLeft + "px");
        }
        $this.find(Selector.UL_LI).click(function () {
            var $thisWidth = $(this).width() + "px",
                $newLeft = $(this).offset().left - $wrapperLeft,
                $navX = $(this).closest(Selector.NAV).offset().left;
            $finalPossion = $wrapperLeft - $navX + $newLeft;

            $slider.width($thisWidth).css("left", $finalPossion + "px");
        });
    }

    function onResizeWindow(event) {
        var $this = event.data.param1;
        setTimeout(function () {
            appendulwidth($this);
            reAdjust($this);
            activeTabCenter($this);
        }, 150);
        sliderLoad($this);
    }

    function onPmdTabScrollRightClick(event) {
        var $this = event.data.param1;
        var $tabSet = '',
            $wrapper = $(event.currentTarget).prev(Selector.SCROLL_CONTAINER),
            $tab = $wrapper.find(Selector.NAV_TABS_LI),
            $thisWidht = $(event.currentTarget).outerWidth(),
            $navCotainer = $this.outerWidth(),
            $wrapperRight = $this.offset().left + $navCotainer;

        $tab.each(function () {
            var SuspectTabLeft = $(this).offset().left;
            var SuspectTabRight = $(this).offset().left + $(this).outerWidth();
            $(this).removeClass(ClassName.PREV_TAB);
            if (SuspectTabLeft < $wrapperRight && SuspectTabRight > $wrapperRight) {
                $tabSet = SuspectTabRight - $wrapperRight + $thisWidht;
                $(this).addClass(ClassName.LAST_TAB);
                $(this).prev().removeClass(ClassName.LAST_TAB);
            }
        });
        var finalTab = $wrapper.find(Selector.LAST_TAB).next().length;
        if (finalTab === 0) {
            var lastTabRight = $wrapper.find(Selector.LAST_TAB).offset().left + $wrapper.find(Selector.LAST_TAB).outerWidth();
            var NewScrollAmount = lastTabRight - $wrapperRight;
            $wrapper.animate({ scrollLeft: '+=' + NewScrollAmount });
            $(event.currentTarget).fadeOut('slow');
        }
        else {
            $wrapper.animate({ scrollLeft: '+=' + $tabSet });
        }
        $(event.currentTarget).parents(Selector.PMD_TAB).find(Selector.SCROLL_LEFT).fadeIn('slow');
    }

    function onPmdTabScrollLeftClick(event) {
        var $this = event.data.param1;
        var $wrapper = $(event.currentTarget).next(Selector.SCROLL_CONTAINER),
            $tab = $wrapper.find(Selector.NAV_TABS_LI),
            $thisWidht = $(event.currentTarget).outerWidth(),
            $wrapperLeft = $this.offset().left,
            $tabSetLeft = '';

        $tab.each(function () {
            var SuspectTabLeft = $(this).offset().left;
            var SuspectTabRight = $(this).offset().left + $(this).outerWidth();
            $(this).removeClass(ClassName.LAST_TAB);
            if (SuspectTabLeft < $wrapperLeft && SuspectTabRight > $wrapperLeft) {
                $tabSetLeft = $wrapperLeft - SuspectTabLeft + $thisWidht;
                $(this).addClass(ClassName.PREV_TAB);
                $(this).next().removeClass(ClassName.PREV_TAB);
            }
        });
        var finalTab = $wrapper.find(Selector.PREV_TAB).prev().length;

        if (finalTab === 0) {
            var lastTableft = $wrapper.find(Selector.PREV_TAB).offset().left;
            var NewScrollAmount = $wrapperLeft - lastTableft;
            $wrapper.animate({ scrollLeft: '-=' + NewScrollAmount });
            $(event.currentTarget).fadeOut('slow');
        }
        else {
            $wrapper.animate({ scrollLeft: '-=' + $tabSetLeft });
        }
        $(event.currentTarget).parents(Selector.PMD_TAB).find(Selector.SCROLL_RIGHT).fadeIn('slow');
    }

    function onUlLiClick(event) {
        var $this = event.data.param1;
        var $wrapper = $(event.target).closest(Selector.SCROLL_CONTAINER);
        var activeLeft = $(event.target).offset().left;
        var activeRight = $(event.target).offset().left + $(event.target).outerWidth();
        var $navCotainer = $this.outerWidth();
        var $wrapperRight = $this.offset().left + $navCotainer;
        var $buttonWidth = $(Selector.SCROLL_RIGHT).outerWidth();
        var $wrapperLeft = $this.offset().left;
        var cuttRight = $wrapperRight - $buttonWidth;
        var cuttleft = $wrapperLeft + $buttonWidth;
        if (activeLeft < cuttleft && activeRight > cuttleft) {

            var setLeft = $wrapperLeft - activeLeft + $buttonWidth;
            $wrapper.animate({ scrollLeft: '-=' + setLeft });
            $(event.target).parents(Selector.PMD_TAB).find(Selector.SCROLL_RIGHT).fadeIn('slow');
        }
        if (activeLeft < cuttRight && activeRight > cuttRight) {
            var setRight = activeRight - $wrapperRight + $buttonWidth;
            $wrapper.animate({ scrollLeft: '+=' + setRight });
            $(event.target).parents(Selector.PMD_TAB).find(Selector.SCROLL_LEFT).fadeIn('slow');
        }
    }

    var pmdTab = function () {
        _inherits(pmdTab, commons);
        function pmdTab(options) {
            $(window).unbind("resize");
			$(pmdTab.prototype.attachParentSelector(Selector.PARENT_SELECTOR, Selector.PMD_TAB)).each(function () {
                var $this = $(this);
                if (options !== undefined && options.scroll !== null && (options.scroll === true || options.scroll === "true")) {
                    $this.addClass(ClassName.SCROLL);
                } else {
                    $this.removeClass(ClassName.SCROLL);
                    if (options !== undefined && $this.attr("scroll") !== undefined && $this.attr("scroll").toLowerCase() === "true") {
                        $this.attr("scroll", "false");
                    }
                    if ($this.find(".nav.nav-tabs").parent().attr("class").split(" ").indexOf(ClassName.SCROLL_CONTAINER) > -1) {
                        $this.find(".nav.nav-tabs").unwrap();
                        $this.find(Selector.ACTIVE_BAR).remove();
                        $this.find(Selector.SCROLL_LEFT).remove();
                        $this.find(Selector.SCROLL_RIGHT).remove();
                    }
                }
                if ($this.attr("scroll") !== undefined && $this.attr("scroll").toLowerCase() === "true") {
                    $this.addClass(ClassName.SCROLL);
                }
                if ($this.attr("class").split(" ").indexOf(ClassName.SCROLL) > -1) {
                    if ($this.find(".nav.nav-tabs").parent().attr("class").split(" ").indexOf(ClassName.SCROLL_CONTAINER) < 0) {
                        $this.find(".nav.nav-tabs").wrap(Template.SCROLL_CONTAINER);
                        $this.find(Selector.SCROLL_CONTAINER).append(Template.ACTIVE_BAR_DIV);
                        $this.find(Selector.SCROLL_CONTAINER).before(Template.SCROLL_LEFT);
                        $this.append(Template.SCROLL_RIGHT);
                    }
                } else {
                    if ($this.find(Selector.ACTIVE_BAR).length === 0) {
                        $this.find(".nav.nav-tabs").before(Template.ACTIVE_BAR_DIV);
                    }
                }
                appendulwidth($this);
                reAdjust($this);
                activeTabCenter($this);
                sliderLoad($this);
                $this.find(Selector.SCROLL_RIGHT).off("click");
                $this.find(Selector.SCROLL_LEFT).off("click");
				$this.find(Selector.SCROLL_RIGHT).click({ param1: $this }, onPmdTabScrollRightClick);
                $this.find(Selector.SCROLL_LEFT).click({ param1: $this }, onPmdTabScrollLeftClick);
                $this.find(Selector.UL_LI).click({ param1: $this }, onUlLiClick);
                $(window).resize({ param1: $this }, onResizeWindow);
            });
        }
        return pmdTab;
    } ();

    var plugInFunction = function (options) {
        if (this.selector !== "") {
            Selector.PARENT_SELECTOR = this.selector;
        }
        new pmdTab(options);
    };
	$.fn[NAME] = plugInFunction;
    return pmdTab;
	
} (jQuery)();