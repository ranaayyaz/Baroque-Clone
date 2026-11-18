# Baroque backend — admin notes

## Admin access
- Dashboard: https://baroque.vercel.app/admin-dashboard (sign in first)
- The account whose email matches the ADMIN_EMAIL environment variable
  (Vercel project "baroque-server") is promoted to admin automatically
  on sign-up / login. ADMIN_EMAIL is set to the owner's email.
- Normal users who open /admin-dashboard see an Access Denied page;
  guests are redirected to /signin.

## API summary
- GET /products (public) — catalogue, auto-seeded from data/products.json
- POST / PUT / DELETE /products (admin only)
- GET /admin/users (admin) — customers; PUT /admin/users/:id/block
- GET /admin/orders (admin); PUT /admin/orders/:id/status
- POST /users/block (admin) — block a user by email (Settings page)

## Fallback
Run `node createAdminUser.js` with ADMIN_SEED_EMAIL and
ADMIN_SEED_PASSWORD set to create or promote an admin directly
in the database.
