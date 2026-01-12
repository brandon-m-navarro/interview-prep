# URL Shortening

Design a URL shortening service like bit.ly. Touch upon each of the following:

#### The service's database architecture
Two tables:
- url_mappings: hash (PK, short code), original_url (long URL), created_at, expires_at, user_id (nullable), click_count
- users: user_id (PK), email, created_at (for user-specific features like link history)

Choice: SQL (e.g., PostgreSQL)

#### The service's API
POST /shorten
- Request: { "url": "https://...", "customAlias": optional, "ttl": optional }
- Response: { "shortUrl": "https://sh.ort/abc123" }

GET /{hash} -> 302 redirect to original URL.

GET /api/analytics/{hash} (optional) -> { "clicks": 100 }

#### The service's frontend web app
Simple UI: Input box for long URL, "Shorten" button, display generated short URL.

Additional features (if logged in): Dashboard with link history, click analytics, QR code generation.
