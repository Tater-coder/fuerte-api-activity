1. Markdown
2. # RESTful API Activity - Yuan Wilson Fuerte
3. ## Best Practices Implementation
4. **1. Environment Variables:**
5. - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
6. - Answer: We placed BASE_URI in the .env file to keep configuration values separate from the source code. This makes the application more secure, easier to maintain, and flexible across different environments (development, testing, production). If the base URL changes, we can update it in one place without modifying the code itself, and sensitive information is not exposed in the public repository.
7. **2. Resource Modeling:**
8. - Why did we use plural nouns (e.g., `/dishes`) for our routes?
9. - Answer: Plural nouns are used to represent collections of resources. Using /dishes clearly indicates that the endpoint handles multiple dish records, while individual items can be accessed using an ID (e.g., /dishes/1). This follows RESTful conventions and keeps the API consistent, predictable, and easy to understand.
10. **3. Status Codes:**
11. - When do we use `201 Created` vs `200 OK`?
12. Answer: 201 Created is used when a new resource is successfully created, such as after a POST request.  
200 OK is used when a request is successful but does not create a new resource, such as retrieving or updating existing data.
13. - Why is it important to return `404` instead of just an empty array or a generic error?
Returning 404 Not Found clearly tells the client that the requested resource does not exist. This improves error handling, avoids confusion, and helps developers quickly identify issues. Using proper status codes makes the API more reliable, standardized, and easier to debug.
14. - Answer: 
15.
16. **4. Testing:**
17. - (Paste a screenshot of a successful GET request here)

![alt text](image.png)