/*
  As you know, a promise is in one of these states: pending, fulfilled, rejected.
  Implement the async function getState that determines a state of a promise.

  Examples:
    const p = Promise.resolve();
    const state = await getState(p); // === "fulfilled"

    const p = Promise.reject();
    const state = await getState(p); // === "rejected"

    const p = new Promise(() => {});
    const state = await getState(p); // === "pending"
*/

/*
  Notes:
    Creating a promise
    const promise = new Promise((resolve, reject) => {
      // async work here
    });
      
    The analogy with boxes:
      pending   - package is still in transit 
      fulfilled - package has been delivered 
      rejected  - package got lost 

    Problem: JavaScript does not provide a direct way to find out the state
*/

/*
  Solution:
    The approach is based on the idea that we start a race between our promise 
    and the timeout with a unique marker. 
      If the timeout came first → the promise is still pending
      If the promise came first → it is fulfilled
      If the promise fell with an error → it is rejected

    Promise race:
      // const result = await Promise.race([
      // promise, 
      // timeoutPromise 
      // ]);  
    where:
      promise = participant 1: our promise
      timeoutPromise = participant 2: timeout with marker

    The marker is needed to distinguish the timeout signal (pending state) 
      from an actual promise result that might be the string "pending".
    Without a marker, the problem is:
      // const promise = Promise.resolve("pending");
      // getState(promise); 
    It will return "pending", but the promise was "fulfilled".
*/
async function getState(promise) {
  const pendingMarker = Symbol("pending");

  try {
    const result = await Promise.race([
      promise,
      new Promise((resolve) => setTimeout(() => resolve(pendingMarker), 0)),
    ]);

    return result === pendingMarker ? "pending" : "fulfilled";
  } catch {
    return "rejected";
  }
}

// Test cases
(async () => {
  console.log(await getState(Promise.resolve()));     // fulfilled
  console.log(await getState(Promise.reject()));      // rejected
  console.log(await getState(new Promise(() => {}))); // pending
})();
