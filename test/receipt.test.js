const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Receipt", async () => {
    const res = await request(app).get("/receipt");
    expect(res.statusCode).toEqual(201);
  });
});
