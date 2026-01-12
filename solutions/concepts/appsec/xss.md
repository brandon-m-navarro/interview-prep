# Cross-Site Scripting

#### What does XSS stand for?
Cross-Site Scripting.

#### How does it work?
XSS is a type of injection attack where malicious scripts are injected into websites. The attack occurs when an application includes untrusted data (ex: user input) in a web page without proper validation, sanatizing, or escaping, allowing a hacker's script to execute in the victim's browser.

#### What is the potential impact?
XSS attacks can compromise all users of web application, including admins. This can lead to attackers gaining access to user's cookies, credentials, and can even escalate to all data on the app being compromised. This can also lead users to be exposed to malware (and nowadays crypto-miners), leaving not only their data, but their machines compromised.

#### How can it be mitigated?
Sanitize, validate, and escape user inputs.

Context-Aware Output Encoding - Before rendering untrusted data into a page, it must be encoded for the specific HTML context where it will be placed, so it is treated as data, not executable code.

Block inline scripts and unauthorized external scripts with CSP:
`Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com;`

Use secure cookies: `Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict`

Stay informed on the latest developments of app security, specifically when working on parts of an app dealing with user input. Most modern frameworks have great built-in defenses, but being aware of attack vectors is always beneficial.

## Resources
OWASP has a great 'cheat-sheet' resource on CSS, and other various app security topics. Highly recommend you check out their site to learn more:

https://cheatsheetseries.owasp.org/
