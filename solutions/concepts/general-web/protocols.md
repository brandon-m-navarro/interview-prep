# Internet Protocols

#### If I type https://google.com into my browser and press enter, what happens?

1. URL Parsing

    The browser parses the URL into:
    - Protocol: https
    - Host: google.com
    - Resource: / (implicit)
    
    HTTPS defaults to port 443 (unless specified otherwise).

2. DNS Lookup

    Browser checks caches (browser cache → OS cache → router cache) for google.com’s IP.

    If not cached:
    - Query to a DNS resolver (often ISP or public DNS like 8.8.8.8).
    - Recursive DNS queries may occur: root server → TLD server (.com) → authoritative name - servers.
    - Returns one or more IP addresses (e.g., 142.250.185.78).

3. Establishing a Connection (TCP)

    Browser initiates a TCP 3-way handshake (SYN, SYN-ACK, ACK) with the server’s IP on port 443.

4. TLS Handshake (HTTPS)

    Because of https://, a TLS (SSL) handshake occurs:

    - Client sends ClientHello (supported cipher suites, TLS version).
    - Server responds with ServerHello (chosen cipher, server certificate).
    - Client verifies certificate (issuer, validity, domain match).
    - Key exchange (e.g., ECDHE) to create a shared session key.
    - Encrypted communication begins.

5. HTTP Request

    - Over the secure TLS tunnel, browser sends an HTTP GET request.
    - May include cookies, cached ETag, etc.

6. Server Processing

    - Google’s servers receive the request.
    - May route via load balancers.
    - Application logic determines response (personalized results if cookies identify the user).
    - Server compresses response, sets headers (cache, security policies, content type).

7. HTTP Response

    Server sends back an HTTP response, followed by the HTML content (gzipped).

8. Browser Rendering

    - Decompresses and parses HTML.
    - Fetches linked resources (CSS, JS, images) via additional HTTP/HTTPS requests.
    - Executes JavaScript.
    - Applies styles.
    - Layout and page painting.
    - Browser respects Content-Security-Policy, CORS if needed.

This entire process—from keystroke to rendered page—typically takes a few hundred milliseconds for a simple site like Google’s homepage.
