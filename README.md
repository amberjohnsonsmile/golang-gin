# Joke App

Joke app using Go, Gin, and React. You can visit the deployed app [here](https://serene-dusk-55955.herokuapp.com/).

# Average Clicks

The Average Clicks API returns information about how often users from various countries have clicked the Bitlinks in your default group.

Visit the deployed version of the API [here](https://gentle-tor-58861.herokuapp.com/api/average). Feel free to visit any of the Bitlinks and see the numbers change!

##### Table of Contents
[Technologies](#technologies)
[Design decisions](#design-decisions)
[Running the API locally](#running-the-api-locally)
[The /average endpoint](#the-average-endpoint)
[Contact](#contact)
[License](#license)

## Technologies
  * Golang v1.12
  * Gin v1.3
  * Testify
  * Bitly API v4

## Design decisions
Gin was a good fit for this project because it made it easy to set up routes, deal with JSON, and improve performance. Most of the testing uses the native Golang "testing" package, but I also added Testify to leverage its assertion library. The JSON response is based on the format of the `/groups/{group_guid}/countries` Bitly endpoint, but with the addition of clicks sectioned off by Bitlink.

Another decision was whether to interpret the "average" number of clicks per country within the last 30 days as average clicks per *day* or per *30 days*. I ended up including both, so each country has a `clicks` property and a `daily_average` property.

## Running the API locally
  If you would like to run the server locally, follow these steps:

  1. If you don't already have Go installed, visit the [Go website](https://golang.org/dl/) and follow the intructions to download and install.
  1. Clone down this repo and navigate into the main directory.
  1. Run `mv .env.sample .env` and update the .env file with a valid Bitly access token.
  1. Source the environment variables with `source .env`
  1. Update dependencies with `go get`
  1. Install additional dependencies with `go get github.com/stretchr/testify github.com/gin-gonic/gin`
  1. Launch the application by running `go run main.go`
  1. Navigate to `localhost:3000/api/average` to visit the `/average` endpoint.
  1. To run tests, run `go test`

## The `/average` endpoint

  Provides the average number of clicks, per country, within the last 30 days, for the Bitlinks in the user's default group.

  `GET /average`

### Success Response

  **Code** : `200 OK`

  **Example response** :

```javascript
{
    "facet": "clicks_by_country",
    "group_guid": "groupguid",
    "metrics": [
      {
        "link": "http://bit.ly/2tSYCV9",
        "countries": [
          {
              "value": "DE",
              "clicks": 3,
              "daily_average": .1
          },
          {
              "value": "US",
              "clicks": 2,
              "daily_average": 0.06666666666666667
          }
        ]
      },
      {
        "link": "http://bit.ly/bit.ly/2TmG92z",
        "countries": [
          {
              "value": "DE",
              "clicks": 2,
              "daily_average": 0.06666666666666667
          },
          {
              "value": "US",
              "clicks": 1,
              "daily_average": 0.03333333333333333
          },
          {
              "value": "CZ",
              "clicks": 1,
              "daily_average": 0.03333333333333333
          }
        ]
      }
    ]
    "units": 30,
    "unit_reference": "2019-03-06T18:50:45+0000",
    "unit": "day"
}
```

### Error Response

**Condition** : If the access token is invalid or missing from the `.env` file.

**Code** : `400 BAD REQUEST`

**Response** :

```javascript
{
  "message": "Unable to access the Bitly API with the provided access token. Add a valid access token to your .env file."
}
```

## Contact

Amber Johnson, Full Stack Web Developer

![headshot](https://user-images.githubusercontent.com/31632938/53816667-30666b80-3f21-11e9-81ff-6756194104a9.jpeg)
* Email amberjohnsonsmile@gmail.com
* Portfolio [amberjohnsonsmile.co](https://amberjohnsonsmile.co)
* GitHub [@amberjohnsonsmile](https://github.com/amberjohnsonsmile)
* LinkedIn [@amberjohnsonsmile](https://linkedin.com/in/amberjohnsonsmile)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

