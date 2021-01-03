# Gambit challenge

## Problem description

This is a programming challenge designed by [Gambit](https://github.com/gambit-labs/challenge).

The task is to choose one of two options:

- Option 1: Convert the register data into human readable format.
- Option 2: Present the data as it is, in a mobile friendly way.

For the challenge i chose Option 2, which is focused more to designing (UI) specially in a mobile friendly way.

## What language/techniques used?

- Reactjs (Hooks)
- Html5
- CSS
- Material-UI (designing)
- flex system & grid system for column...
- BEM (popular naming convention)
- Firebase (for deploying/hosting)

## What have i done?

I have build a header where is the name of an ultrasonic energy meter(TUF-2000M) and under that is an input, where user can write numbers from 1-100 (index numbers) to get a specific register value.
In the app\_\_subheader (third at the top) i have Time of registery which is taken from live text feed & also nice img of a truck.
Now the main thing: I have put registered values into nice clean boxes using Material-UI design, i have used display:flex system for tasks such as flex-direction, align-items, justify-content, and for having columns i have used display:grid system also for larger sizes i have used Media Queries.

### Coding:

Because of cors errors i'm using https://cors-anywhere.herokuapp.com/ (includes CORS headers in the response).
The data offered from gambit was in txt format i had to convert it, first had to get rid of the new lines: replace(/\n/g, " ") then change the data into an array. Inside the second useEffect i'm setting data into key/values and from there taking value from it and passing to TwoMaps.js where that value is mapped and displayed to screen. Third useEffect setting data to avain/value and from there taking avain to filter with searchTerm(what number user writes to the input) then passing that also to TwoMaps.js. Inside TwoMaps.js i'm using inline if-else for knowing if user has written something in input if yes do the filtering and display this and if not the just display this.

Project is mobile friendly works on all sizes, it also has nice hovering effect when user hovers over index numbers (.hover1) it affecs values (.hover2) by making values larger and changing color & background color of it.

Because components are one of the basic building blocks of React, i have components folder where i have Values, index of the boxes and a footer.

This application is hosted on Firebase and can be tried at:

- [Click here to view project](https://gambit-challenge-3bc73.web.app/)

### My other projects

- [Netflix-clone](https://github.com/waleedd32/Netflix-clone)
- [Coronavirus tracker](https://github.com/waleedd32/covid-19-tracker)
