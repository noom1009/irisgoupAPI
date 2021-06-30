const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("Test Get Data Fin Loan", async () => {
    const res = await request(app).get("/finLoan");
    expect(res.statusCode).toEqual(201);
  });
});
