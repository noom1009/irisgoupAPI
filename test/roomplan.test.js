const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).get("/roomplan");
    expect(res.statusCode).toEqual(200);
  });
});
