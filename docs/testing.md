# Testing

In a perfect world we would write Unit tests, Snapshot test, Integration tests and e2e tests. But since we do not live in a perfect world we probably can't do them all. If we have the possibility to write tests we have a few choices.

Unit tests ensure that individual components of the app work as expected. Assertions test the component API.

Integration tests ensure that component collaborations work as expected. Assertions may test component API, UI, or side-effects (such as database I/O, logging, etc…)

Functional tests ensure that the app works as expected from the user’s perspective. Assertions primarily test the user interface.

## Unit testing - Realtime Developer Feedback - Using [Jest](https://jestjs.io)

Unit tests ensure that individual components work in isolation from each other. Units are typically modules, functions, etc…

For example, your app may need to route URLs to route handlers. A unit test may be written against the URL parser to ensure that the relevant components of the URL are parsed correctly. Another unit test might ensure that the router calls the correct handler for a given URL.

Unit tests are frequently used as a developer feedback mechanism during development. For example, We should run lint and unit tests on every file change and monitor the results in a development console which gives us real-time feedback as we are working.

Unit tests should be:

- Dead simple.
- Lightning fast.
- A good bug report.

## Integration Tests - Using [Jest](https://jestjs.io)

Integration tests ensure that various units work together correctly. For example, a Node route handler might take a logger as a dependency. An integration test might hit that route and test that the connection was properly logged.

In this case, we have two units under test:

- The route handler
- The logger

If we were unit testing the logger, our tests wouldn’t invoke the route handler, or know anything about it.

If we were unit testing the route handler, our tests would stub the logger, and ignore the interactions with it, testing only whether or not the route responded appropriately to the faked request.

## Snapshot testing - Using [Jest](https://jestjs.io)

Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of the UI component.

```javascript
import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

## Functional tests / e2e testing - Using [Cypress](https://www.cypress.io/)

Functional tests are automated tests which ensure that your application does what it’s supposed to do from the point of view of the user. Functional tests feed input to the user interface, and make assertions about the output that ensure that the software responds the way it should.

Functional tests are sometimes called end-to-end tests because they test the entire application, and it’s hardware and networking infrastructure, from the front end UI to the back end database systems. In that sense, functional tests are also a form of integration testing, ensuring that machines and component collaborations are working as expected.

### I want to know more!

[More in depth](https://www.sitepoint.com/javascript-testing-unit-functional-integration/)
