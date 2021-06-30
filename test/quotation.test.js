const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Quotation ", async () => {
    const res = await request(app).get("/quotation");
    expect(res.statusCode).toEqual(201);
  });
});
