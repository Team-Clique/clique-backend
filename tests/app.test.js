// follow the instruction from this: https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/

const request = require("supertest");
const app = require("../app");


// require("dotenv").config(); - No need fopr env

  // For DB
  /* Connecting to the database before each test. */
  // beforeEach(async () => {
  //     await mongoose.connect(process.env.MONGODB_URI);
  //   });
    
  //   /* Closing database connection after each test. */
  //   afterEach(async () => {
  //     await mongoose.connection.close();
  //   });

  // first unit test
  describe("GET /searchRestaurant", () => {
    it("should return all restaurants", async () => {
      const res = await request(app).get("/searchRestaurant?categories=Mexican");
      expect(res.statusCode).toBe(200);
      expect(res._body.businesses.length).toBeGreaterThan(0);
    });
  });

  // second unit test
  describe("GET /searchRestaurant", () => {
    it("should return all restaurants", async () => {
      const res = await request(app).get("/searchRestaurant?categories=Japanese");
      expect(res.statusCode).toBe(200);
      expect(res._body.businesses.length).toBeGreaterThan(0);
    });
  });
    

    //
    //   describe("POST /api/products", () => {
    //     it("should create a product", async () => {
    //       const res = await request(app).post("/api/products").send({
    //         name: "Product 2",
    //         price: 1009,
    //         description: "Description 2",
    //       });
    //       expect(res.statusCode).toBe(201);
    //       expect(res.body.name).toBe("Product 2");
    //     });
    //   });
      
    //   describe("PUT /api/products/:id", () => {
    //     it("should update a product", async () => {
    //       const res = await request(app)
    //         .patch("/api/products/6331abc9e9ececcc2d449e44")
    //         .send({
    //           name: "Product 4",
    //           price: 104,
    //           description: "Description 4",
    //         });
    //       expect(res.statusCode).toBe(200);
    //       expect(res.body.price).toBe(104);
    //     });
    //   });
      
    //   describe("DELETE /api/products/:id", () => {
    //     it("should delete a product", async () => {
    //       const res = await request(app).delete(
    //         "/api/products/6331abc9e9ececcc2d449e44"
    //       );
    //       expect(res.statusCode).toBe(200);
    //     });
    //   });