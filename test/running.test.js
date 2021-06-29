const request = require("supertest");
const app = require("../server");
const runningControllers = require("../controllers/runningControllers");
describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).post("/running").send({
      userId: 1,
      title: "test is cool",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
  });
});
