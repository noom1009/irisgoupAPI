const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Get Data target Plan ", async () => {
    const res = await request(app).get("/targetplan");
    expect(res.statusCode).toEqual(201);
  });
});
