const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Room Plan", async () => {
    const res = await request(app).get("/roomplan");
    expect(res.statusCode).toEqual(201);
  });
});
