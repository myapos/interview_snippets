//! https://leetcode.com/problems/implement-queue-using-stacks/

var MyQueue = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.empty()) {
    this.stack.push(x);
  } else {
    this.stack = [x, ...this.stack];
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const firstElInQueue = this.stack[this.stack.length - 1];
  this.stack = this.stack.slice(0, this.stack.length - 1);

  return firstElInQueue;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const firstElInQueue = this.stack[this.stack.length - 1];
  return firstElInQueue;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

export default MyQueue;

/* Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 */
