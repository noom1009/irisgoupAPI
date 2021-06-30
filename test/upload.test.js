const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get load Data Upload", async () => {
    const res = await request(app).get("/upload");
    expect(res.statusCode).toEqual(201);
  });
});
