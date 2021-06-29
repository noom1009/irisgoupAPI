const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("should create a new get", async () => {
    const res = await request(app).get("/authen");
    expect(res.statusCode).toEqual(200);
  });
});
