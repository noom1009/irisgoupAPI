const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Page website", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(201);
  });
});
