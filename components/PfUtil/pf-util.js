/**
 * --------------------------------------------------------------------------
 * PfUtil
 * Internal Utility Functions for Patternfly Web Components
 * --------------------------------------------------------------------------
 */

class PfUtil {
  constructor() {
    // eslint-disable-next-line no-useless-escape
    this.isMSIE = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})').exec(
      navigator.userAgent
    ) !== null
      ? parseFloat(RegExp.$1)
      : false;
    this.isIE = /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
  }

  // eslint-disable-next-line class-methods-use-this
  addClass(el, c) {
    // where modern browsers fail, use classList
    if (el.classList) {
      el.classList.add(c);
    }
    else {
      el.className += ` ${c}`;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  removeClass(el, c) {
    if (el.classList) {
      el.classList.remove(c);
    }
    else {
      el.className = el.className.replace(c, '').replace(/^\s+|\s+$/g, '');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getClosest(el, s) {
    // el is the element and s the selector of the closest item to find
    // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
    const f = s.charAt(0);
    for (; el && el !== document; el = el.parentNode) {
      // Get closest match
      if (f === '.') {
        // If selector is a class
        if (document.querySelector(s) !== undefined) {
          return el;
        }
      }
      if (f === '#') {
        // If selector is an ID
        if (el.id === s.substr(1)) {
          return el;
        }
      }
    }
    return false;
  }

  // tooltip / popover stuff
  // eslint-disable-next-line class-methods-use-this
  isElementInViewport(t) {
    // check if this.tooltip is in viewport
    const r = t.getBoundingClientRect();
    return (
      r.top >= 0 &&
      r.left >= 0 &&
      r.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      r.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // eslint-disable-next-line class-methods-use-this
  getScroll() {
    // also Affix and scrollSpy uses it
    return {
      y: window.pageYOffset || document.documentElement.scrollTop,
      x: window.pageXOffset || document.documentElement.scrollLeft
    };
  }
}
const pfUtil = new PfUtil();
export { pfUtil };
