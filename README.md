<div align="center">
<h1>Validate Sequence Api</h1>
</div>

<div align="center">

[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDcuODgiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMDcuODggMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMTUuMzEiIGhlaWdodD0iMzUiIGZpbGw9IiM3N0QyMzYiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMTMuMzEiIHk9IjAiIHdpZHRoPSI5NC41NyIgaGVpZ2h0PSIzNSIgZmlsbD0iIzU5OTkyQiIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9Ik0xNS42OSAyMkwxNC4yMiAyMkwxNC4yMiAxMy40N0wxNi4xNCAxMy40N0wxOC42MCAyMC4wMUwyMS4wNiAxMy40N0wyMi45NyAxMy40N0wyMi45NyAyMkwyMS40OSAyMkwyMS40OSAxOS4xOUwyMS42NCAxNS40M0wxOS4xMiAyMkwxOC4wNiAyMkwxNS41NSAxNS40M0wxNS42OSAxOS4xOUwxNS42OSAyMlpNMjguNDkgMjJMMjYuOTUgMjJMMzAuMTcgMTMuNDdMMzEuNTAgMTMuNDdMMzQuNzMgMjJMMzMuMTggMjJMMzIuNDkgMjAuMDFMMjkuMTggMjAuMDFMMjguNDkgMjJaTTMwLjgzIDE1LjI4TDI5LjYwIDE4LjgyTDMyLjA3IDE4LjgyTDMwLjgzIDE1LjI4Wk00MS4xNCAyMkwzOC42OSAyMkwzOC42OSAxMy40N0w0MS4yMSAxMy40N1E0Mi4zNCAxMy40NyA0My4yMSAxMy45N1E0NC4wOSAxNC40OCA0NC41NyAxNS40MFE0NS4wNSAxNi4zMyA0NS4wNSAxNy41Mkw0NS4wNSAxNy41Mkw0NS4wNSAxNy45NVE0NS4wNSAxOS4xNiA0NC41NyAyMC4wOFE0NC4wOCAyMS4wMCA0My4xOSAyMS41MFE0Mi4zMCAyMiA0MS4xNCAyMkw0MS4xNCAyMlpNNDAuMTcgMTQuNjZMNDAuMTcgMjAuODJMNDEuMTQgMjAuODJRNDIuMzAgMjAuODIgNDIuOTMgMjAuMDlRNDMuNTUgMTkuMzYgNDMuNTYgMTcuOTlMNDMuNTYgMTcuOTlMNDMuNTYgMTcuNTJRNDMuNTYgMTYuMTMgNDIuOTYgMTUuNDBRNDIuMzUgMTQuNjYgNDEuMjEgMTQuNjZMNDEuMjEgMTQuNjZMNDAuMTcgMTQuNjZaTTU1LjA5IDIyTDQ5LjUxIDIyTDQ5LjUxIDEzLjQ3TDU1LjA1IDEzLjQ3TDU1LjA1IDE0LjY2TDUxLjAwIDE0LjY2TDUxLjAwIDE3LjAyTDU0LjUwIDE3LjAyTDU0LjUwIDE4LjE5TDUxLjAwIDE4LjE5TDUxLjAwIDIwLjgyTDU1LjA5IDIwLjgyTDU1LjA5IDIyWk02Ni42NSAyMkw2NC42OCAxMy40N0w2Ni4xNSAxMy40N0w2Ny40NyAxOS44OEw2OS4xMCAxMy40N0w3MC4zNCAxMy40N0w3MS45NiAxOS44OUw3My4yNyAxMy40N0w3NC43NCAxMy40N0w3Mi43NyAyMkw3MS4zNSAyMkw2OS43MyAxNS43N0w2OC4wNyAyMkw2Ni42NSAyMlpNODAuMzggMjJMNzguOTAgMjJMNzguOTAgMTMuNDdMODAuMzggMTMuNDdMODAuMzggMjJaTTg2Ljg3IDE0LjY2TDg0LjIzIDE0LjY2TDg0LjIzIDEzLjQ3TDkxLjAwIDEzLjQ3TDkxLjAwIDE0LjY2TDg4LjM0IDE0LjY2TDg4LjM0IDIyTDg2Ljg3IDIyTDg2Ljg3IDE0LjY2Wk05Ni4yNCAyMkw5NC43NSAyMkw5NC43NSAxMy40N0w5Ni4yNCAxMy40N0w5Ni4yNCAxNy4wMkwxMDAuMDUgMTcuMDJMMTAwLjA1IDEzLjQ3TDEwMS41MyAxMy40N0wxMDEuNTMgMjJMMTAwLjA1IDIyTDEwMC4wNSAxOC4yMUw5Ni4yNCAxOC4yMUw5Ni4yNCAyMloiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTI5LjgzIDIyTDEyNy41MCAyMkwxMjcuNTAgMTMuNjBMMTI5LjQ1IDEzLjYwTDEzMy4xNiAxOC4wN0wxMzMuMTYgMTMuNjBMMTM1LjQ5IDEzLjYwTDEzNS40OSAyMkwxMzMuNTQgMjJMMTI5LjgzIDE3LjUyTDEyOS44MyAyMlpNMTQwLjIyIDE3LjgwTDE0MC4yMiAxNy44MFExNDAuMjIgMTYuNTUgMTQwLjgzIDE1LjU1UTE0MS40MyAxNC41NiAxNDIuNDkgMTQuMDBRMTQzLjU2IDEzLjQzIDE0NC44OSAxMy40M0wxNDQuODkgMTMuNDNRMTQ2LjIyIDEzLjQzIDE0Ny4yOCAxNC4wMFExNDguMzUgMTQuNTYgMTQ4Ljk1IDE1LjU1UTE0OS41NiAxNi41NSAxNDkuNTYgMTcuODBMMTQ5LjU2IDE3LjgwUTE0OS41NiAxOS4wNSAxNDguOTUgMjAuMDRRMTQ4LjM1IDIxLjA0IDE0Ny4yOCAyMS42MFExNDYuMjIgMjIuMTcgMTQ0Ljg5IDIyLjE3TDE0NC44OSAyMi4xN1ExNDMuNTYgMjIuMTcgMTQyLjQ5IDIxLjYwUTE0MS40MyAyMS4wNCAxNDAuODMgMjAuMDRRMTQwLjIyIDE5LjA1IDE0MC4yMiAxNy44MFpNMTQyLjYyIDE3LjgwTDE0Mi42MiAxNy44MFExNDIuNjIgMTguNTEgMTQyLjkyIDE5LjA1UTE0My4yMiAxOS42MCAxNDMuNzQgMTkuOTBRMTQ0LjI2IDIwLjIwIDE0NC44OSAyMC4yMEwxNDQuODkgMjAuMjBRMTQ1LjUzIDIwLjIwIDE0Ni4wNCAxOS45MFExNDYuNTYgMTkuNjAgMTQ2Ljg2IDE5LjA1UTE0Ny4xNiAxOC41MSAxNDcuMTYgMTcuODBMMTQ3LjE2IDE3LjgwUTE0Ny4xNiAxNy4wOSAxNDYuODYgMTYuNTRRMTQ2LjU2IDE2IDE0Ni4wNCAxNS43MFExNDUuNTMgMTUuNDAgMTQ0Ljg5IDE1LjQwTDE0NC44OSAxNS40MFExNDQuMjUgMTUuNDAgMTQzLjc0IDE1LjcwUTE0My4yMiAxNiAxNDIuOTIgMTYuNTRRMTQyLjYyIDE3LjA5IDE0Mi42MiAxNy44MFpNMTU4LjI2IDIyTDE1NC4yOSAyMkwxNTQuMjkgMTMuNjBMMTU4LjI2IDEzLjYwUTE1OS42NCAxMy42MCAxNjAuNzEgMTQuMTJRMTYxLjc4IDE0LjYzIDE2Mi4zNiAxNS41OFExNjIuOTUgMTYuNTMgMTYyLjk1IDE3LjgwTDE2Mi45NSAxNy44MFExNjIuOTUgMTkuMDcgMTYyLjM2IDIwLjAyUTE2MS43OCAyMC45NyAxNjAuNzEgMjEuNDhRMTU5LjY0IDIyIDE1OC4yNiAyMkwxNTguMjYgMjJaTTE1Ni42NyAxNS41MEwxNTYuNjcgMjAuMTBMMTU4LjE3IDIwLjEwUTE1OS4yNCAyMC4xMCAxNTkuOTAgMTkuNDlRMTYwLjU1IDE4Ljg4IDE2MC41NSAxNy44MEwxNjAuNTUgMTcuODBRMTYwLjU1IDE2LjcyIDE1OS45MCAxNi4xMVExNTkuMjQgMTUuNTAgMTU4LjE3IDE1LjUwTDE1OC4xNyAxNS41MEwxNTYuNjcgMTUuNTBaTTE3NC40MyAyMkwxNjcuNjggMjJMMTY3LjY4IDEzLjYwTDE3NC4yNyAxMy42MEwxNzQuMjcgMTUuNDRMMTcwLjA0IDE1LjQ0TDE3MC4wNCAxNi44NUwxNzMuNzcgMTYuODVMMTczLjc3IDE4LjYzTDE3MC4wNCAxOC42M0wxNzAuMDQgMjAuMTdMMTc0LjQzIDIwLjE3TDE3NC40MyAyMlpNMTc4LjE1IDIwLjkzTDE3OC4xNSAyMC45M0wxNzkuNDUgMTkuNDBRMTgwLjEyIDIwLjI3IDE4MC44OSAyMC4yN0wxODAuODkgMjAuMjdRMTgwLjg5IDIwLjI3IDE4MC45MCAyMC4yN0wxODAuOTAgMjAuMjdRMTgxLjQyIDIwLjI3IDE4MS42OSAxOS45NlExODEuOTUgMTkuNjUgMTgxLjk1IDE5LjA1TDE4MS45NSAxOS4wNUwxODEuOTUgMTUuNDRMMTc5LjA1IDE1LjQ0TDE3OS4wNSAxMy42MEwxODQuMzEgMTMuNjBMMTg0LjMxIDE4LjkxUTE4NC4zMSAyMC41NCAxODMuNDkgMjEuMzZRMTgyLjY2IDIyLjE3IDE4MS4wNyAyMi4xN0wxODEuMDcgMjIuMTdRMTgwLjE0IDIyLjE3IDE3OS4zOSAyMS44NVExNzguNjMgMjEuNTMgMTc4LjE1IDIwLjkzWk0xODguODEgMjEuMjRMMTg4LjgxIDIxLjI0TDE4OS41OSAxOS40OVExOTAuMTUgMTkuODYgMTkwLjkwIDIwLjA5UTE5MS42NCAyMC4zMiAxOTIuMzYgMjAuMzJMMTkyLjM2IDIwLjMyUTE5My43MyAyMC4zMiAxOTMuNzMgMTkuNjRMMTkzLjczIDE5LjY0UTE5My43MyAxOS4yOCAxOTMuMzQgMTkuMTFRMTkyLjk1IDE4LjkzIDE5Mi4wOSAxOC43NEwxOTIuMDkgMTguNzRRMTkxLjE0IDE4LjUzIDE5MC41MCAxOC4zMFExODkuODcgMTguMDYgMTg5LjQxIDE3LjU1UTE4OC45NiAxNy4wMyAxODguOTYgMTYuMTZMMTg4Ljk2IDE2LjE2UTE4OC45NiAxNS4zOSAxODkuMzggMTQuNzdRMTg5Ljc5IDE0LjE1IDE5MC42MyAxMy43OVExOTEuNDYgMTMuNDMgMTkyLjY3IDEzLjQzTDE5Mi42NyAxMy40M1ExOTMuNTAgMTMuNDMgMTk0LjMwIDEzLjYyUTE5NS4xMSAxMy44MCAxOTUuNzIgMTQuMTdMMTk1LjcyIDE0LjE3TDE5NC45OSAxNS45M1ExOTMuNzkgMTUuMjggMTkyLjY2IDE1LjI4TDE5Mi42NiAxNS4yOFExOTEuOTUgMTUuMjggMTkxLjYzIDE1LjQ5UTE5MS4zMSAxNS43MCAxOTEuMzEgMTYuMDRMMTkxLjMxIDE2LjA0UTE5MS4zMSAxNi4zNyAxOTEuNjkgMTYuNTRRMTkyLjA3IDE2LjcxIDE5Mi45MiAxNi44OUwxOTIuOTIgMTYuODlRMTkzLjg4IDE3LjEwIDE5NC41MSAxNy4zM1ExOTUuMTQgMTcuNTYgMTk1LjYxIDE4LjA3UTE5Ni4wNyAxOC41OCAxOTYuMDcgMTkuNDZMMTk2LjA3IDE5LjQ2UTE5Ni4wNyAyMC4yMSAxOTUuNjUgMjAuODNRMTk1LjIzIDIxLjQ0IDE5NC4zOSAyMS44MFExOTMuNTUgMjIuMTcgMTkyLjM1IDIyLjE3TDE5Mi4zNSAyMi4xN1ExOTEuMzMgMjIuMTcgMTkwLjM3IDIxLjkyUTE4OS40MSAyMS42NyAxODguODEgMjEuMjRaIiBmaWxsPSIjRkZGRkZGIiB4PSIxMjYuMzEiLz48L3N2Zz4=)](https://forthebadge.com)

</div>

#### A test project for Capgemini to generate an API for validating of a string sequence, save in mongoDB and get specific metrics.

---

- ### Instalation
1. Install Docker :
    - If using Linux/Ubuntu or any other almost the same -> [Install Docker Linux](https://docs.docker.com/engine/install/ubuntu/)
    - If using Windows -> [Install Docker Desktop Windows](https://docs.docker.com/docker-for-windows/install/)

2. Install Docker-compose.

---

- ### Environments Variables
- Create .env file:
    - After you clone the repo, you will be able to search for .env.example file. Just rename it to .env and add
these variables.
   ```javascript
    MONGODB_URI="mongodb://mongo:27017/sequence"
    MORGAN_CONFIG=":id :method :url :status :response-time ms - :res[content-length]"
    PORT=3030
   ```
  
---

- ### Run the api and MongoDB
  - Docker-compose:
    - In order to generate and run all the application you just need to open the terminal
and paste this command:
    ```bash
    $ docker-compose up --build
    ```
    
And it's running!

- If you want to stop, just press **CTRL+C**.
---

- ### Api Calls
  - In this project we have 3 endpoints to call.
    > POST http://localhost:3000/sequence
    
    Example Json Body:
  
       ```json
      {
          "letters": ["BUDHDD", "DUHBUH", "DDBBUH", "BUDDDD", "HHUUBB", "UUUUUU"]
      }
      ```
    
    Example Response:

    ```json
    {
	     "status": "Created",
	     "is_valid": true
    }
    ```
  
    > GET http://localhost:3000/stats
    
    Example Response:

    ```json
    {
        "count_valid": 2,
        "count_invalid": 2,
        "ratio": 0.5
    }
    ```
    
    > GET http://localhost:3000/complete-stats

    Example Response:

    ```json
    {
        "data": [
            {
                "sequence": [
                    "BUDHHD",
                    "DUHBUH",
                    "DDBBHU",
                    "BUDDDD",
                    "HHUUBB",
                    "BHUUHH"
                ],
                "is_valid": false
            },
            {
                "sequence": [
                    "BUDHDD",
                    "DUHBUH",
                    "DDBBUH",
                    "BUDDDD",
                    "HHUUBB",
                    "BHUUHH"
                ],
                "is_valid": false
            },
            {
                "sequence": [
                    "BUDHDD",
                    "DUHBUH",
                    "DDBBUH",
                    "BUDDDD",
                    "HHUUBB",
                    "UUUUUU"
                ],
                "is_valid": true
            },
            {
                "sequence": [
                    "BUDHDD",
                    "DUHBUH",
                    "DDBBHH",
                    "BUDDDD",
                    "HHUUBB",
                    "UUUUUU"
                ],
                "is_valid": true
            }
        ],
        "total": 4
    }
    ```
---

Made by [Felipe Strozberg](www.github.com/FelStroz)

[🔼 Back to top](#Instalation)