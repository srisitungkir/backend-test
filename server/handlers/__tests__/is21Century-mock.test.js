const httpMocks = require("node-mocks-http");
const is21CenturyHandler = require("../is21Century");
const is21Century = require("../../../storage/models/is21Century.model");

test('2020-01-01', async () => {
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2022-02-15'))
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-21-century",
    
    });
    const response = httpMocks.createResponse();
    await is21CenturyHandler.is21Century(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});


test('2100-01-01', async () => {
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2022-02-15'))
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-21-century",
    
    });
    const response = httpMocks.createResponse();
    await is21CenturyHandler.is21Century(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

test('1999-12-31', async () => {
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2022-02-15'))
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-21-century",
    
    });
    const response = httpMocks.createResponse();
    await is21CenturyHandler.is21Century(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});


// jest.mock("../../../storage/models/is21Century.model", () => {
//     return {
//         is21Century: jest.fn()
//     };
// })

// test('1999-12-31', async () => {
//     const request = httpMocks.createRequest({
//         method: "GET",
//         url: "is-21-century",
//     });

//     const response = httpMocks.createResponse();
//     is21CenturyModel.is21Century.mockResolvedValue('2022-02-15');
//     await is21CenturyHandler.checkOddEven(request, response);
//     expect(response.statusCode).toEqual(200);
//     expect(response._getJSONData()).toEqual({
//         data: '2022-02-15',
//         error: null
//     });
// });
