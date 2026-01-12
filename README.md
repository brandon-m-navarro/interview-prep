# Interview Prep for Web Developers

This repository is a compilation of useful interview questions for web developers.

This is a standard node project, with the only dependencies being a linter and test frameworks. Once cloned, it can be built by:
- `pnpm install`
- or if you use npm: `npm install`

To get started solving, open the /problems directory. There are two types of questions, concepts & coding. Coding questions are broken up into three categories: algorithms, javascript, and logic.

- Algorithms: Focused on... algorithms. Mainly features graph traversal for now.
- JavaScript: More so focused on built-in JS methods, and specifics about scope, types, and hoisting.
- Logic: Classics like FizzBuzz, pallindrome detection, and Pascal's Triangle to name a few.

For coding questions, you can get started by opening a file and reading the problem description in the top-comment. All data structures you may need for any problem can be found in /data-structures.

You can run tests for a specific problem by navigating to the directory where the test file is
(/test/js/ algorithms | javascript | logic) and running the following command:

`pnpm mocha $(pwd)/greatest-prime-factor.spec.js`

I used pnpm for my package manager, but the same will work for npm:

`npm mocha $(pwd)/greatest-prime-factor.spec.js`

All tests can be run with:
`pnpm testjs`
`npm testjs`

Tests are implemented using Mocha & Chai. If you want to run only a single test in a single test file, Mocha allows you to do this pretty easily by adding `.only()`:

Original Test
```
    it('should flatten an array in an imperative style', function () {
        expect(flattenArrayImperative(mdArray)).to.deep.equal(flatArray);
    });
```
=> adding .only after `it` will only run single test.
```
    it.only('should flatten an array in an imperative style', function () {
        expect(flattenArrayImperative(mdArray)).to.deep.equal(flatArray);
    });
```
Make sure to remove `.only()` when you're done though so you can make sure your solution passes the other tests.

### Closing
While these problems are pretty common across different sites, all coding solutions were implemented by me. I tried to add helpful comments regarding algorithms and time/space complexity where appropriate. Some solutions are pretty straightforward, so not all contain such comments. The concept solutions were formed from research more so than from my memory.

#### Why not just use sites like LeetCode or Algomonster?
While I do recommend using these sites to test your solutions (most of these problems can be found there), they can feel pretty limiting in terms of debugging tools. They usually hide useful tools behind paywalls, so having these questions in a familiar IDE was worth the effort of setting this project up. If you don't have your IDE configured for JS/TS debugging, you can always copy/paste your solution and a test case into your browser's console, just make sure to add a `debugger;` statement at the start of your solution.

As you can see there is also a /ts directory in the /test directory. I plan on reimplementing the coding problems and adding tests for TypeScript soon. Thanks for checking this out; hope it was some help to you!
