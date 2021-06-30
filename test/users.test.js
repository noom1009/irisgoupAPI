const request = require("supertest");
const app = require("../application");
describe("Post Endpoints", () => {
  it("Test get Data Users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(201);
  });
});
