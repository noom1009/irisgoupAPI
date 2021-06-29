const request = require("supertest");
const app = require("../server");
const positionControllers = require("../controllers/positionControllers");
describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).post("/position").send({
      userId: 1,
      title: "test is cool",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
  });
});
