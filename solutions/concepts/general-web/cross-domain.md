# Cross-Domain Issues

#### What is the difference between CORS and JSONP?
CORS (Cross-Origin Resource Sharing)
A modern, standardized mechanism that uses HTTP headers to allow browsers to request resources from different origins.

How it works:
- Browser sends preflight request (OPTIONS) for non-simple requests
- Server responds with Access-Control-Allow-Origin and other CORS headers
- Browser validates headers before allowing actual request

JSONP (JSON with Padding)
A legacy workaround that exploits the `<script>` tag's ability to load cross-origin resources.

How it works:
- Client creates a `<script>` tag with a callback parameter
- Server wraps JSON response in the callback function
- Browser executes the script, calling the callback with data

#### Under what circummstances would you use each?

You really should try and avoid JSONP unless you are trying to support old browsers (like IE6 which was released in 2001!). It can be safely used with simple GET/read-only requests.

Bottom-line, use CORS for all modern development.
