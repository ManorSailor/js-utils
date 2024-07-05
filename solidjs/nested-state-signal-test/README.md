### Nested State within Signal

This test was performed to understand how changing nested state within `signals` affect other dependents of state in SolidJS.

**Conclusion:**

Yes. Using objects in Signals as state will notify all consumers even if they don't depend on other parts of state.

Look in [App.jsx](./src/App.jsx) for the experiment code with comments.

**Fix? Workarounds?**

As explained in the file above, it is not an issue to be fixed. However, you may utilize SolidJS's [Stores](https://docs.solidjs.com/concepts/stores) for that fine grained control.
