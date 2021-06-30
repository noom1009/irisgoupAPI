const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Group Users", async () => {
    const res = await request(app).get("/group");
    expect(res.statusCode).toEqual(201);
  });
});
