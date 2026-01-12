# REST API Design

Imagine that you are building Twitter. In particular, you are in charge of designing an API for Twitter's backend. This API will be used by a developer building a 3rd party Twitter client. 

#### What actions would you expose and what HTTP method would you use for each?
Authentication
    POST /oauth/token - Get access token (OAuth 2.0)
    POST /oauth/revoke - Revoke token

Users
    GET /users/[id] - Get user profile
    POST /users - Register new user
    PUT /users/[id] - Update user profile
    GET /users/[id]/followers - Get user's followers
    GET /users/[id]/following - Get who user follows
    POST /users/[id]/follow - Follow a user
    DELETE /users/[id]/follow - Unfollow a user
    GET /users/search - Search users

Tweets
    GET /tweets/[id] - Get single tweet
    POST /tweets - Create tweet
    DELETE /tweets/[id] - Delete tweet
    GET /users/[id]/tweets - Get user's tweets
    GET /users/[id]/timeline - Get user's timeline
    POST /tweets/[id]/like - Like a tweet
    DELETE /tweets/[id]/like - Unlike a tweet
    GET /tweets/[id]/likes - Get users who liked tweet
    POST /tweets/[id]/retweet - Retweet
    DELETE /tweets/[id]/retweet - Remove retweet

This isn't extensive, but I think you get the idea.

#### What are some ways you could scale your Twitter service to accomodate a high user load?

- Compression for tweets and media

- Caching Layer: (Redis):
    User profiles
    Timeline generation
    Trending topics

- Split into independent services:
    User Service
    Tweet Service
    Timeline Service
    Notification Service

- Rate Limiting & Throttling
    Per-user API rate limits
    Tiered limits (free vs. paid API users)
