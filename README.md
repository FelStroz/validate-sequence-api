<div hidden="hidden"><h1>TOP</h1></div>

<div align="center">
<h1>Validate Sequence Api</h1>
</div>

<div align="center">

<img src="images/made-with-nodejs.svg"  alt="not found"/>

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

[🔼 Back to top](#TOP)