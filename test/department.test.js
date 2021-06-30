const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Department", async () => {
    const res = await request(app).get("/department");
    expect(res.statusCode).toEqual(201);
  });
});
