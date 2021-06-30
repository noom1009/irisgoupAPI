const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Booking", async () => {
    const res = await request(app).get("/booking");
    expect(res.statusCode).toEqual(201);
  });
});
