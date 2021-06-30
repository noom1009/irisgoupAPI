const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Fin Other", async () => {
    const res = await request(app).get("/finother");
    expect(res.statusCode).toEqual(201);
  });
});
