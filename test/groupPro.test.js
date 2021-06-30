const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Group Procode ", async () => {
    const res = await request(app).get("/grouppro");
    expect(res.statusCode).toEqual(201);
  });
});
