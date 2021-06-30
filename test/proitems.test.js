const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Items Promotion", async () => {
    const res = await request(app).get("/proitems");
    expect(res.statusCode).toEqual(201);
  });
});
