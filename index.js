/**
 * You have to set the allRead variable to false using
 * a built-in higher-order function on the`notifications` array.
 *
 * Conditions:
 *  1. You cannot use for, while, do-while loops
 *  2. You cannot use forEach(), map(), reduce(), filter().
 *
 */

let notifications = [
  { message: "Lorem", read: true },
  { message: "Ipsum", read: true },
  { message: "Dolor", read: true },
  { message: "Sit", read: false },
  { message: "Amet", read: true }
];

let allRead = true;

allRead = notifications.every(n => n.read);

console.log(allRead);
