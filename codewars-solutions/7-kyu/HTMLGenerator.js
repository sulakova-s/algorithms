/*
  Description:
  You want to write some functions that will generate the HTML for you.

  To organize your code, make of all your functions methods of a class called HTMLGen.
  Tag functions should be named after the tag of the element they create. Each function 
  will take one argument, a string, which is the inner HTML of the element to be created. 
  The functions will return the string for the appropriate HTML element.
  
  For example,

  JavaScript:

  var g = new HTMLGen();
  var paragraph = g.p('Hello, World!');
  var block = g.div(paragraph);

  // The following are now true
  paragraph === '<p>Hello, World!</p>'
  block === '<div><p>Hello, World!</p></div>'
  Your HTMLGen class should have methods to create the following elements:
    a
    b
    p
    body
    div
    span
    title
    comment
  Note: The comment method should wrap its argument with an HTML comment. It is the 
  only method whose name does not match an HTML tag. So, g.comment('i am a comment') 
  must produce <!--i am a comment-->.
*/
// Simple
class HTMLGen {
  a(text) {
    return `<a>${text}</a>`;
  }
  b(text) {
    return `<b>${text}</b>`;
  }
  p(text) {
    return `<p>${text}</p>`;
  }
  body(text) {
    return `<body>${text}</body>`;
  }
  div(text) {
    return `<div>${text}</div>`;
  }
  span(text) {
    return `<span>${text}</span>`;
  }
  title(text) {
    return `<title>${text}</title>`;
  }
  comment(text) {
    return `<!--${text}-->`;
  }
}

// Dynamic
class MyHTMLGen {
  constructor() {
    const tags = ["a", "b", "p", "body", "div", "span", "title"];
    tags.forEach((tag) => {
      this[tag] = (text) => `<${tag}>${text}</${tag}>`;
    });
  }
  comment(text) {
    return `<!--${text}-->`;
  }
}

// Test cases
const Gen = new HTMLGen();
console.log(Gen.div(Gen.p("Hello"))); // '<div><p>Hello</p></div>'
console.log(Gen.comment("test")); // '<!--test-->'

console.log();

const MyGen = new MyHTMLGen();
console.log(MyGen.div(MyGen.p("Hello"))); // '<div><p>Hello</p></div>'
console.log(MyGen.comment("test")); // '<!--test-->'ƒ
