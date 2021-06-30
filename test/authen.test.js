const request = require("supertest");
const app = require("../application");

describe("Post Endpoints", () => {
  it("should Get Data", async () => {
    const res = await request(app).get("/authen");
    expect(res.statusCode).toEqual(200);
  });
});

describe("Post Endpoints login ", () => {
  test("Test case Login email password", async () => {
    const response = await request(app).post("/authen/login").send({
      f_login_name: "admin2@iris.co.th",
      f_login_password: "123456789",
    });
    expect(response.body).toEqual({ message: "Logout successfully" });
    expect(response.statusCode).toBe(200);
  });
});

describe("Post Endpoints logout ", () => {
  test("Test case Logout", async () => {
    const response = await request(app).post("/authen/logout");
    expect(response.body).toEqual({ message: "Success" });
    expect(response.statusCode).toBe(200);
  });
});
