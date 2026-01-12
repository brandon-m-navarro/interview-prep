# SQL Injection

#### What is SQL Injection?
SQL injection happens when dynamic database queries use string concatenation and user supplied input. This means a user is able to pass in their own SQL queries, exposing potentially sensitive data and even be able to DROP TABLES your whole db.

#### How is the exploit executed and what is its potential impact?
Example from OWASP:

A common SQL injection flaw in Java is below. Because its unvalidated "customerName" parameter is simply appended to the query, an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database.

```
String query = "SELECT account_balance FROM user_data WHERE user_name = "
             + request.getParameter("customerName");
try {
    Statement statement = connection.createStatement( ... );
    ResultSet results = statement.executeQuery( query );
}
```

#### How can it be mitigated?
To avoid SQL injection flaws:

- Don't write dynamic queries with string concatenation.
- Prevent malicious SQL input from being included in executed queries.

## Resources
OWASP has a great 'cheat-sheet' resource on SQL injection prevention, and other various app security topics. Highly recommend you check out their site to learn more:

https://cheatsheetseries.owasp.org/
