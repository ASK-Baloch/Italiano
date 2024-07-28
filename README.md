# Restaurant App

![](/public/app-image.png)



Welcome to the Restaurant App! This app aims to provide a seamless experience for customers, allowing them to browse menus, place orders, and make payments. Let's dive into the key components:

## Tech Stack

- Frontend: Next.js (with SSR and CSR)
- Database: PostgreSQL (managed via Prisma)
- Payment Integration: Stripe API

## Project Structure

Organize your project into the following directories:

- `pages`: Contains the different pages of the app.
- `components`: Reusable components used throughout the app.
- `api`: API routes for fetching data.
- `prisma`: Prisma related files.

Use Next.js's App Router for navigation.

## Environment Variables

Set up environment variables (e.g., `.env.local`) to store sensitive data such as API keys and database credentials.

## Pages

### Home Page (SSR)

Display featured dishes, promotions, and restaurant details. Fetch data using `getServerSideProps`.

### Menu Page (CSR) , Order Page (CSR), Checkout Page (CSR)

Show menu categories (appetizers, main courses, desserts). Use React Query to fetch menu items dynamically.
Integrate Stripe for payments. Handle card details securely. Confirm orders and calculate totals.Show menu categories (appetizers, main courses, desserts). Use React Query to fetch menu items dynamically.

ALSO Integrate Stripe for payments. Handle card details securely. Confirm orders and calculate totals.

## API Routes

### /api/menu

Fetch menu data from the database (Prisma). Return JSON response for menu categories and items.

### /api/orders

Handle order submissions. Validate input (items, quantities). Calculate total price.

## Database (Prisma)

### Schema

Define your Prisma models (e.g., `MenuItem`, `Order`). Specify relationships (one-to-many, many-to-many).

### Migrations

Run Prisma migrations to create tables in PostgreSQL. Document how to apply migrations.

## Stripe Integration

### API Setup

Create a Stripe account. Obtain API keys (test and live modes).

### Client-Side Integration

Use Stripe Elements for card input. Handle payment confirmation and error handling.

## Local Development

### Installation

1. Clone the repo.
2. Install dependencies (`npm install`).

### Database Setup

1. Set up PostgreSQL locally.
2. Configure Prisma connection.

### Run the App

Start the Next.js development server (`npm run dev`).


