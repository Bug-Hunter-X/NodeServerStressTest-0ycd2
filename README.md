# Node.js Server Unresponsiveness Bug

This repository demonstrates a bug where a Node.js HTTP server becomes unresponsive after handling a significant number of requests.  The server doesn't throw errors, it simply stops responding to new connections.

## Bug Description

A simple HTTP server is created using Node.js's `http` module.  Under normal load, it functions correctly. However, after a large number of requests, the server stops accepting new connections.  No errors are logged to the console.

## Solution

The issue is likely due to the server not properly handling the event loop.  The solution involves using the `cluster` module to create multiple worker processes, distributing the load and preventing a single thread from becoming overloaded.

## Reproduction Steps

1. Clone the repository
2. Run `node bug.js`
3. Send many requests to `http://localhost:8080` using a tool like `wrk` or by opening many browser tabs.
4. Observe the server becoming unresponsive.
5. Run `node bugSolution.js` and repeat the test, noting the improved responsiveness.

## Technologies Used

* Node.js
* `http` module
* `cluster` module (solution)
