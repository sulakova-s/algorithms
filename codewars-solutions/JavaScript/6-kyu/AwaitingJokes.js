/*
  Here are some classic Christmas cracker jokes.

  There is a made up API URL (http://great.jokes/christmas) that you can call to a get 
  list of Christmas jokes in JSON format.

  Your challenge
    - Write an async function which takes an apiUrl and jokeId which returns a promise.
    - The data will need to be filtered to get the specified joke by id.
    - When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.
    - Handle error cases

  If a joke can't be found throw an error message in this format 
    new Error('No jokes found id: {jokeId}').
  Getting jokes from a another API URL may return a different data shape, throw this error message 
    new Error('No jokes at url: {url}') for an unexpected shape.
  Throw error in a promise style

  Info
  Get the data using the mocked fetch(url) function, which implements the basics of the fetch
  api. Learn about fetch. Learn about async/await.

  Joke data shape:
    {
      jokes: [{ 
        id: 101,
        setup: "Who is Santa's favorite singer?",
        punchLine: "Elf-is Presley!"
      },
    ...moreJokes]
    // Use for your tests ^^
*/

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data.jokes || !Array.isArray(data.jokes)) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const jokeFound = data.jokes.find((joke) => joke.id === jokeId);

  if (!jokeFound) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup() {
      return jokeFound.setup;
    },
    sayPunchLine() {
      return jokeFound.punchLine;
    },
  };
}

// Test cases
// mock fetch
global.fetch = async (url) => {
  if (url === "http://great.jokes/christmas") {
    return {
      json: async () => ({
        jokes: [
          {
            id: 101,
            setup: "Who is Santa's favorite singer?",
            punchLine: "Elf-is Presley!",
          },
          {
            id: 102,
            setup: "What do snowmen eat for breakfast?",
            punchLine: "Frosted Flakes!",
          },
        ],
      }),
    };
  }

  // wrong url = wrong structure
  return {
    json: async () => ({ error: "No jokes here" }),
  };
};

async function runTests() {
  console.log("Case 1: success");
  const joke = await sayJoke("http://great.jokes/christmas", 101);
  console.log(" Setup:", joke.saySetup());
  console.log(" PunchLine:", joke.sayPunchLine());

  console.log("\nCase 2: Joke not found");
  try {
    await sayJoke("http://great.jokes/christmas", 999);
  } catch (e) {
    console.log(" Error.", e.message);
  }

  console.log("\nCase 3: wrong URL");
  try {
    await sayJoke("http://bad.url", 101);
  } catch (e) {
    console.log(" Error.", e.message);
  }
}

runTests();
