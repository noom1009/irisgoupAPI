const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Company", async () => {
    const res = await request(app).get("/company");
    expect(res.statusCode).toEqual(201);
  });
});
