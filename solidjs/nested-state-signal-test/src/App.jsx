import { createEffect, createSignal, onCleanup } from "solid-js";

// State is not tied to components unlike React. By tied I meant, it cannot exist outside of components
const [state, setState] = createSignal({
  compA: 0,
  compB: 0,
});

// Similar pattern we all have seen before a thousand times
const changeState = (key, val) =>
  setState((oldState) => ({ ...oldState, [key]: val }));

// Change only one of the states. value of the state doesn't matter
// Whether a state consumer NOT using `compA` will be notified or not
setInterval(() => changeState("compA", "ha"), 1000);

// Finally, track states for changes. This consumer is consuming a piece of state which does not changes. Will it run?
createEffect(() => console.log("B renders:", state().compB));

// Conclusion: Yes. When `compA` changes, `compB` dependent is also notified even though it doesn't rely on `compA` at all.
// Why? Because I believe signals perform a Strict Equality check on new & old state, & objects are compared by references.
// And if you look at changeState, we give it a new object each time copying the old values.
//
// Fix? Well, it's not really an issus to be fixed. The real issue lies that you are using wrong tool for the job.
// Use `Stores` if you really want that fine-grained control over your state. They (lazily & auto-magically) create a signal for each property of the object

export default function App() {}
