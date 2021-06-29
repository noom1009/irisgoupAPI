const request = require("supertest");
const app = require("../application");
const authenController = require("../controllers/authenController");
describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).get("/authen");
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("get");
  });
});
