const request = require("supertest");
const app = require("../application");
describe("Post Endpoints", () => {
  it("Test Get Data Bank", async () => {
    const res = await request(app).get("/bank");
    expect(res.statusCode).toEqual(201);
  });
});
