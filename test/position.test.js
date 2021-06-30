const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Position", async () => {
    const res = await request(app).get("/position");
    expect(res.statusCode).toEqual(201);
  });
});
