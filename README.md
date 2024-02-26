# IIM Backend

## Overview

This project serves as a backend application for our IIm website. It is built on a Cloudflare template using TypeScript, PostgreSQL for the database, and Prisma as the ORM.We aim to cloud deploy it using Cloudflare Workers.

### Technologies Used:

- Cloudflare Workers
- TypeScript
- PostgreSQL
- Prisma

## Getting Started(TO BE VERIFIED)

To run this backend locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Set up your PostgreSQL database and update the connection details in the `prisma/schema.prisma` file.
4. Run migrations to create database tables by running `npx prisma migrate dev`.
5. Start the server by running `npm start`.

## Routes

The backend provides the following routes:

### [Route 1]

- **Method**: [GET/PUT/POST/DELETE]
- **Description**: [Description of the route]
- **Endpoint**: `[Endpoint]`
- **Request Parameters**:
  - [Parameter 1]: [Description]
  - [Parameter 2]: [Description]
- **Request Body** (for POST/PUT requests):
  ```json
  {
    // Specify request body structure here
  }
  ```
- **Response**:
  ```json
  {
    // Specify response structure here
  }
  ```

### [Route 2]

[Repeat the above section for each route]

## Database Schema

Below is the schema of the PostgreSQL database used in this project:

```sql
-- Define your database schema here
```

## Deployment

This backend can be deployed to Cloudflare Workers. Ensure you have the Wrangler CLI installed and configured with your Cloudflare account. Then, run `wrangler publish` to deploy the application.

## Contributors

- [Your Name] - [Your Email]

## License

This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.

---

Feel free to customize this README template according to your project's specific requirements and preferences. Let me know if you need further assistance!
