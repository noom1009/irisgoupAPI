const request = require("supertest");
const app = require("../application");
const departmentControllers = require("../controllers/departmentControllers");
describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).post("/department").send({
      userId: 1,
      title: "test is cool",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("post");
  });
});
