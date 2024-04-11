// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

export default class EventEmitter {
  constructor() {
    // observers will hode the name and the listener
    // as an object of arrays. it follows a fifo structure (queue)
    this.observers = [];
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  on(eventName, listener) {
    this.observers.push({
      eventName,
      listener,
    });

    return this; // for chaining
  }

  /**
   * @param {string} eventName
   * @param {Function} listener
   * @returns {EventEmitter}
   */
  off(eventName, listener) {
    // filter out the first eventName listener
    const idx = this.observers.findIndex(
      (observer) => observer.eventName === eventName
    );
    // remove observer
    if (idx >= 0) {
      this.observers = [
        ...this.observers.slice(0, idx),
        ...this.observers.slice(idx + 1),
      ];
    }
    return this;
  }

  /**
   * @param {string} eventName
   * @param  {...any} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    try {
      const observers = this.observers.filter(
        (observer) => observer.eventName === eventName
      );
      // call all the listeners
      observers.forEach(function (observer) {
        observer.listener.call(this, ...args);
      });

      return observers.length > 0 ? true : false;
    } catch (e) {
      console.error(e);
    }
  }
}
