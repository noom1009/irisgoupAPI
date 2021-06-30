const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Fin Tranfer Ower", async () => {
    const res = await request(app).get("/fintranfer");
    expect(res.statusCode).toEqual(201);
  });
});
