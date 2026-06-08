/*
  The Misadventures of Bob the Highly Paid Consultant
  Chapter 1: Promises Made and Broken
  Your company has p a new ordering system and hired Bob the Highly Paid Consultant 
  to develop a front end. However, after continuous delays and missed deliverables, his contract 
  has now come to an end. Bob vanishes like a ghost into the fog, leaving you to see if you can
  salvage the pieces of his work.

  One thing is clear: Bob has left a chain of broken promises in his wake.

  Can you help to fix things?

  In the sample test case (submitOrder(12345)), "Your order was placed successfully" should 
  be logged to the console. Hit "Attempt" to see if you pass the kata.

  Some notes:
  1) You can assume that the functions Bob is calling actually exist and take the given parameters in the given order.
  2) User "12345" is a valid user for testing
  3) Any provided function whose name ends in Async returns a Promise.
  4) Any provided function whose name does not end in Async is synchronous, i.e. calculateShipping().
*/

/*
Original:
function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  // Get the current user's shopping cart
  OrderAPI.getShoppingCartAsync(user).then(function(cart) {
    shoppingCart = cart;
  });
  
  // Also look up the ZIP code from their profile
  CustomerAPI.getProfileAsync(user).then(function(profile) {
    zipCode = profile.zipCode;
  });
  
  // Calculate the shipping fees
  shippingRate = calculateShipping(shoppingCart, zipCode);
  
  // Submit the order
  OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
    orderSuccessful = success;
  });
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}
*/
function submitOrder(user) {
  Promise.all([
    OrderAPI.getShoppingCartAsync(user),
    CustomerAPI.getProfileAsync(user),
  ])
    .then(([cart, profile]) =>
      OrderAPI.placeOrderAsync(cart, calculateShipping(cart, profile.zipCode)),
    )
    .then((success) =>
      console.log(
        `Your order ${success ? "was" : "was NOT"} placed successfully`,
      ),
    )
    .catch((error) => console.log(error));
}
