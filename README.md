# **<span style="color:blue">Another-weather-app<span>**

Just another weather app. The purpose of code this shi\* app is learn to fetch data and be familiar with API's

Description: React SPA which allow to find a weather for a specific location. It show: temperature in degrees of Celcius, wind speed, visibility, conditions.

UI Components used to this project so far: Material UI, Hamburger React, React Burger Menu, React Icons.

## **<span style="color:yellow">1. Step - Layout<span>**

I had started with an idea, then I had made some resarch in design websites.

I wanted to achieve a nice and clean modern look.

First I had made the nav section, and at the beginig I was struggling a lot with RWD and buggers. Then I have made the other data-like sections and fell it with dummy data.

## **<span style="color:yellow">2. Step - Pass data between components<span>**

The first problem I encountered was passing props to the parent component. I had to pass the value entered in the field from the Form component through the NavMenu, Navbar all the way to the App.

Props related to calling functions to close the mobile menu went in the opposite direction. I passed them from NavMenu to Form.

I also made my own custom hook and called it use Weather. It allows, depending on the state, to render appropriate components such as loading, error or the actual application component.

## **<span style="color:yellow">3. Step - Connect with api<span>**

Another challenge was connecting to the Visual Crossing Weather API. By passing the location data from the Form component to the useWeather hook, I was able to query the API. One of the required query parameters was the location itself. I used the documentation on the RapidApi portal to connect to the API, retrieve the data and access the appropriate "location" array. So far I have saved the data in the constant "date".
**tbc.**
