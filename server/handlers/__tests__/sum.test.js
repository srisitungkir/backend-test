const httpMocks = require("node-mocks-http");
const sumHandler = require("../sum");

// test.todo("sum");

test.each([
  [10, 20, 30, null, 200],
  [-3, -3, -6, null, 200],
  [5, -3, 2, null, 200],
  [-4, 5, 1, null, 200],

])(
  "%d + %d should return data: '%d', error: '%s', status code: %d",
  async (a, b, expectedData, errorMessage, statusCode) => {
    const request = httpMocks.createRequest({
      method: "POST",
      url: "/sum",
      body: {
        a: a,
        b: b,
      },
    });
    const response = httpMocks.createResponse();
    await sumHandler.sum(request, response);
    expect(response.statusCode).toEqual(statusCode);
    expect(response._getJSONData()).toEqual({
      data: expectedData,
      error: errorMessage,
    });
  }
);
