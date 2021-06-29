const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("should create a new get", async () => {
    const res = await request(app).get("/authen");
    expect(res.statusCode).toEqual(200);
  });
});

describe("Post /login ", () => {
  test("It should respond with an array of students", async () => {
    const response = await request(app).post("/authen/login").send({"f_login_name":"admin2@iris.co.th","f_login_password":"123456789"});
    expect(response.body).toEqual({ message: "Success" });
    expect(response.statusCode).toBe(200);
  });
});
