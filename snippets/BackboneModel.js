// https://www.greatfrontend.com/questions/javascript/backbone-model
// You are free to use alternative approaches of
// defining BackboneModel as long as the
// default export can be instantiated.
export default class BackboneModel {
  /**
   * @param {Object} initialValues
   * @returns BackboneModel
   */
  constructor(initialValues) {
    // initializations
    // it will be a map containining keys per attribute
    // array of objects with an event name and a listener
    // where eventName could be 'change' or 'unset'
    //{ attribute: {value, eventName: [listeners] }, ..., }

    if (initialValues) {
      this.map = new Map(
        Object.entries(initialValues).map(([key, value]) => [key, { value }])
      );
      return;
    }

    this.map = new Map();
  }

  /**
   * Get the value of a specific attribute.
   * @param {string} attribute - The attribute name.
   * @returns {any | undefined} The value of the attribute.
   */
  get(attribute) {
    if (!this.has(attribute)) {
      return undefined;
    }

    return this._getAtr(attribute).value;
  }

  /**
   * For internal use. It gets the whole map object for an attribute
   * @param {string} attribute - The attribute name.
   * @returns the entire entryfor an attribute from the map object
   */
  _getAtr(attribute) {
    if (!this.has(attribute)) {
      return {};
    }

    return this.map.get(attribute);
  }

  /**
   *
   * @param {string} attribute - The attribute name.
   * @param {string} eventName - The attribute name.
   *  @returns {Array<Function>} an array with callback functions for a specific event.
   */
  _getEventListeners(attribute, eventName) {
    return this._getAtr(attribute)[eventName];
  }

  /**
   * Set the value of a specific attribute.
   * @param {string} attribute - The attribute name.
   * @param {any} value - The value to set for the attribute.
   */
  set(attribute, value) {
    if (!this.has(attribute)) {
      this.map.set(attribute, {
        value,
      });

      return;
    }

    const oldValue = this._getAtr(attribute)?.value;

    const shouldFireChangeListeners = oldValue !== value;

    if (shouldFireChangeListeners) {
      this.map.set(attribute, {
        ...this._getAtr(attribute),
        value,
      });

      // fires the change
      const attrListeners = this._getEventListeners(attribute, "change");
      attrListeners?.forEach((listener) => {
        listener(attribute, oldValue, value);
      });
    }
  }

  /**
   * Check if the model has a specific attribute.
   * @param {string} attribute - The attribute name.
   * @returns {boolean} `true` if the model has the attribute, `false` otherwise.
   */
  has(attribute) {
    return this.map.has(attribute);
  }

  /**
   * Unset a specific attribute.
   * @param {string} attribute - The attribute name to unset.
   */
  unset(attribute) {
    if (!this.has(attribute)) return;
    // fires the unset
    const attrListeners = this._getEventListeners(attribute, "unset");

    attrListeners?.forEach((listener) => listener(attribute));

    this.map.delete(attribute);
  }

  /**
   * Register an event listener for changes to a specific attribute.
   * @param {string} eventName - The event name.
   * @param {string} attribute - The attribute name to listen for changes.
   * @param {Function} callback - The callback function to be executed on the event.
   * @param {any} [context] - The context in which to execute the callback.
   */
  on(eventName, attribute, callback, context) {
    if (eventName !== "change" && eventName !== "unset") {
      throw new Error("Not supported");
    }

    const boundFn = callback.bind(context);
    boundFn.FnName = callback.name;

    if (!this.has(attribute)) {
      return;
    }

    this.map.set(attribute, {
      ...this._getAtr(attribute),
      [eventName]: [...(this._getAtr(attribute)[eventName] || []), boundFn],
    });
  }

  /**
   * Remove an event listener for changes to a specific attribute.
   * @param {string} eventName - The event name.
   * @param {string} attribute - The attribute name to stop listening for changes.
   * @param {Function} callback - The callback function to remove.
   */
  off(eventName, attribute, callback) {
    if (
      eventName !== "change" &&
      eventName !== "unset" &&
      !this.has(attribute)
    ) {
      throw new Error("Not supported");
    }

    this.map.set(attribute, {
      ...this._getAtr(attribute),
      [eventName]: this.map
        .get(attribute)
        [eventName].filter((listener) => listener.FnName !== callback.name),
    });
  }
}
