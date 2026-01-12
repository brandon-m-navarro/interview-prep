# Cross-site Request Forgery

Imagine that we have an online baking app protected by a email/password login. Once a user has logged in, they're given a session cookie that they must have in order to send HTTP requests to the rest of the app.

For simplicity's sake, assume that the main dashboard page consists of nothing but a form that allows the user to send money to other users.
The app has two fields - a dollar amount field and a username field - and a submit button.
Submitting the form hits the following endpoint of the bank's backend API at `https://www.example.com/transfer?amount=1000&destination=desiredUser`, which gets the current user, queries the database to make sure the user has enough money to send the transaction, and then updates the sender's and `desiredUser` balances in the DB.

#### What security flaw exists in this system?
Cross-site request forgery, and lacking MFA.

#### Can you elaborate on how precisely the user would exploit this flaw to steal money from a user?

- Not having MFA means if a user is able to get a user's credentials, they are able to drain an entire user's bank account. This can be done through a man-in-the-middle or phishing attack. A MITM attack could involve having the user connect to a compromised network, allowing the attacker to intercept DNS queries, allowing them to present the user with a fake login page. A phishing attack could involve mass-emailing customers a 'Please verify your account' form to steal credentials. Because there is only one authentication check, a user's credentials is all an attacker needs to send funds to their account.

- Another form could be to abuse the API. By obsfuscating a link such as `https://www.example.com/transfer?amount=1000&destination=maliciousUser` in a phishing email (through shortend URL, hidden DOM element, etc), any user who still has a valid session cookie would send funds to the attacker.

#### How could this flaw be mitigated?
Implement a secure MFA authentication system (authenticator apps with temp OTP tokens, email codes, social logins, SMS [not great, but better than nothing], biometrics, hardware tokens, security questions, etc.).

For CSRF issue:

When the user is authenticated by the app and provided with a cookie, set a value in the cookie that contains a cryptographically secure, pseudo-random token that the app signs and stores a copy of.

Include an extra hidden field in the transfer funds form that accepts that cookie's token as a parameter. Before executing any transfer logic, the app should check to see whether the hidden field's value matches the token generated for the user when she signed in. That way if an attacker tricks a user into clicking a link to the transfer endpoint with malicious query parameters, the app will not recieve an authentic token and will not run the transfer.

## Resources
OWASP has a great 'cheat-sheet' resource on CRSF prevention, and other various app security topics. Highly recommend you check out their site to learn more:

https://cheatsheetseries.owasp.org/