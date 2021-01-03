# Gambit challenge

## Problem description

This is a programming challenge designed by [Gambit](https://github.com/gambit-labs/challenge).

The task is to choose one of two options:

- Option 1: Convert the register data into human readable format.
- Option 2: Present the data as it is, in a mobile friendly way.

For the challenge i chose Option 2, which is focused more to designing (UI) specially in a mobile friendly way.

## What language used?

In this project i have used Reactjs (Hooks), html5, CSS.

## What have i done?

I have build a header where is the name of an ultrasonic energy meter(TUF-2000M) and under that is an input, where user can write numbers from 1-100 (index numbers) to get a specific register value.
In the app\_\_subheader (third at the top) i have Time of registery which is taken from live text feed & also nice img of a truck.
Now the main thing: I have put registered values into nice clean boxes using Material-UI design, i have used display:flex system for tasks such as flex-direction, align-items, justify-content, and for having columns i have used display:grid system also for larger sizes i have used Media Queries.
Coding:
Because of cors errors i'm using https://cors-anywhere.herokuapp.com/ (includes CORS headers in the response).
The data offered from gambit was in txt format i had to convert it, first had to get rid of the new lines: replace(/\n/g, " ") then change the data into an array. Inside the second useEffect i'm setting data into key/values and from there taking value from it and passing to TwoMaps.js where that value is mapped and displayed to screen. Third useEffect setting data to avain/value and from there taking avain to filter with searchTerm(what number user writes to the input) then passing that also to TwoMaps.js.
