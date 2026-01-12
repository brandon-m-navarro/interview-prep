# Cross-site Request Forgery

Imagine that we have an online baking app protected by a email/password login. Once a user has logged in, they're given a session cookie that they must have in order to send HTTP requests to the rest of the app.

For simplicity's sake, assume that the main dashboard page consists of nothing but a form that allows the user to send money to other users.
The app has two fields - a dollar amount field and a username field - and a submit button.
Submitting the form hits the following endpoint of the bank's backend API at `https://www.example.com/transfer?amount=1000&destination=desiredUser`, which gets the current user, queries the database to make sure the user has enough money to send the transaction, and then updates the sender's and `desiredUser` balances in the DB.

#### What security flaw exists in this system?

#### Can you elaborate on how precisely the user would exploit this flaw to steal money from a user?

#### How could this flaw be mitigated?

## Resources
OWASP has a great 'cheat-sheet' resource on CRSF prevention, and other various app security topics. Highly recommend you check out their site to learn more:

https://cheatsheetseries.owasp.org/