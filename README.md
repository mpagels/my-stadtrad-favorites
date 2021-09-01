<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/mpagels/my-stadtrad-favorites">
    <img src="docs/logo.png" alt="Logo">
  </a>

  <h3 align="center">My StadtRAD Hamburg Favorites</h3>

  <p align="center">
    This app let you save every StadtRAD station in Hamburg and shows you the available bikes at the saved station.
    <br />
    <a href="http://my-stadtrad-favorites.vercel.app/">Visit & use App</a>
    ·
    <a href="https://github.com/mpagels/my-stadtrad-favorites/issues">Report Bug</a>
    ·
    <a href="https://github.com/mpagels/my-stadtrad-favorites/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
<li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![App main screen](docs/screen_1.png)
![App main screen](docs/screen_2.png)
![App main screen](docs/screen_3.png)

I recently found out that my hometown has these internet of things api which gives back the information of the StadradHH service. Every 5min the api is updated. In the last time I'm using the service quite often and the offical app did not provide a "save your favorite station" feature. And the app is sometimes not showing the availables bikes.

Right now the app let you search for every bike station in Hamburg and let you save the station. React-query is updating the data when you come back to the app.

The IOT api is quite big and powerful. To handle all the data I wrote a BFF (backend for frontend) that handles all the necessary fetching and just send the data backt to react frontend that is needed.

The App is deployed on vercel. The express server is served as well with vercel as serverless functions.

### Built With

- React
- Express as BFF
- react-query
- react-router
- leatlef-react
- dayjs
- styled-components
- StadtRADHH API
<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mpagels/my-stadtrad-favorites
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Work with express.js in local development, add this line to your `package.json` file
   ```json
   "proxy": "http://localhost:5000/"
   ```
4. Run express.js server
   ```sh
   npm run api
   ```
5. Start react
   ```sh
   npm start
   ```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Martin Pagels - [@MPagels](https://twitter.com/twitter_handlehttps://twitter.com/MPagels) - office@martinpagels.de

Project Link: [https://github.com/github_username/repo_namehttps://github.com/mpagels/my-stadtrad-favorites](https://github.com/github_username/repo_namehttps://github.com/mpagels/my-stadtrad-favorites)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [StadtRAD Hamburg API Infos](https://metaver.de/trefferanzeige?docuuid=D18F375E-FA5F-4998-AFF8-557969F44479#)
- [API Doc](http://docs.opengeospatial.org/is/15-078r6/15-078r6.html)
