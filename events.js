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

  emit(eventName, ...args) {
    const events = this._events;
    if (events[eventName]) {
      const listeners = this._arrayClone(events[eventName]);
      for (let i = 0; i < listeners.length; i++) {
        listeners[i].apply(this, args);
      }
    } else {
      return false;
    }
    return true;
  }

  _arrayClone(arr) {
    return arr.map(v => v);
  }
}

module.exports = EventEmitter;
