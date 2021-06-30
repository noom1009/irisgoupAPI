const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Project", async () => {
    const res = await request(app).get("/project");
    expect(res.statusCode).toEqual(201);
  });
});
