const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Fin Down payment", async () => {
    const res = await request(app).get("/finDown");
    expect(res.statusCode).toEqual(201);
  });
});
