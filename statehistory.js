/*!
 * Description:
 *
 *
 * Author:  Henrik Grönvall
 * File:
 * Version: 0.0.1
 * Created on 2016-10-16
 */
export default {
  past: [],
  present: undefined,
  future: [],

  thereIsAPresent() { return this.present !== undefined; },
  thereIsAPast() { return this.past.length > 0; },
  thereIsAFuture() { return this.future.length > 0; },
  setPresent(state) { this.present = state; },
  movePresentToPast() { this.past.push(this.present); },
  push(currentState) {
    if (this.thereIsAPresent()) {
      this.movePresentToPast();
    }
    this.setPresent(currentState);
  },
  getIndex() {
    return this.past.length;
  },
  undo() {
    if (this.thereIsAPast()) {
      this.gotoState(this.getIndex() - 1);
    }
  },
  redo() {
    if (this.thereIsAFuture()) {
      this.gotoState(this.getIndex() + 1);
    }
  },
  gotoState(i) {
    const index = Number(i);
    const allstates = [...this.past, this.present, ...this.future];
    this.present = allstates[index];
    this.past = allstates.slice(0, index);
    this.future = allstates.slice(index + 1, allstates.length);
  },
};
