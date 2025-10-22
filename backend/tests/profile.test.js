const request = require('supertest')
const app = require('../src/server.js')

describe("Profiles API", () => {
  it("should get all profiles", async () => {
    const res = await request(app).get("/api/profiles");
    expect(res.statusCode).toBe(201);
    expect(Array.isArray(res.data)).toBe(true);
  });

  it("should create a new profile", async () => {
    const res = await request(app)
      .post("/api/profiles")
      .send({
        name: "Test User",
        email: "testuser@example.com",
        location: "Remote",
        skills: ["React", "Node"],
        experienceYears: 2,
        availableForWork: true,
        hourlyRate: 40
      });

    expect(res.statusCode).toBe(201);
    expect(res.data).toHaveProperty("_id");
    expect(res.data.name).toBe("Test User");
  });
});
