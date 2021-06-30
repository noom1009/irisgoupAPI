const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Price list Marketing", async () => {
    const res = await request(app).get("/pricelist");
    expect(res.statusCode).toEqual(201);
  });
});
