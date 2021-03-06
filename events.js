class EventEmitter {
  constructor() {
    this._events = {};
  }

  addListener(eventName, listener) {
    if (!this._events[eventName])
      this._events[eventName] = [];
    this._events[eventName].push(listener);
    return this;
  }

  on(eventName, listener) {
    return this.addListener(eventName, listener);
  }

}

module.exports = EventEmitter;
