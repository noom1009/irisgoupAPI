const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data running number", async () => {
    const res = await request(app).get("/running");
    expect(res.statusCode).toEqual(201);
  });
});
