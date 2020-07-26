## Conviz-19
Conviz-19 is a Web application developed using ReactJS to visualize the COVID-19 situation across different zones. The user can enter an address and visualize the address in a map and check the total COVID-19 cases (both active/total) by clicking on the marker in the map. The user's search history is also tabulated for logging and comparison purposes.  
This project is hosted on Heroku: https://conviz-19.herokuapp.com/

## Build status
The project is in it's alpha stage. 

## Code style
The Application follows the Standard style, and eslint has been used for linting purposes.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Tech/Framework used
<b>Built with</b>
- [ReactJS](https://reactjs.org)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://github.com/axios/axios)
- [Redux](https://redux.js.org/)
- [HERE Maps API](https://developer.here.com/products/maps)
- [GeoIQ API](https://www.geoiq.io/covid19.html)

## Features
- Enter an address and visualize the Address, in GMaps Style!
- Get realtime updates on the COVID-19 situation in different places.
- No more Latitudes and Longitudes to pinpoint the location. Just enter the address and we'll take care of the hard work!
- Closed your Browser by mistake? No worries we got your search histories covered! By harnessing the Browser's local storage, this PWA ensures that everything you do is saved securely.

## Requirements
- Node Package Manager (npm)

## Installation
- Clone the respository to your local machine
```sh
git clone https://github.com/ashika27999/conviz-19.git
```

- Install the required packages using package.json
```sh
npm install
```

## How to use?
- Run the application
```sh
npm start
```
- Enter an address in the input field and hit Go!
- You should now see your address' Latitude, Longitude and the Containment Status in the Search History Table.
- In addition to this, there should be a marker in the map visual. Upon clicking the marker, you'll able to see the district where the address is in, the number of active COVID-19 cases, and the total COVID-19 cases reported in that district.
- Try clicking any of your search history rows. You'll notice that the Map changes to visualize the address you just selected.
