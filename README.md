# Frontend Mentor - Planets Fact Site Solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects that are great to showcase in your portfolio.

## Table of contents

- [Frontend Mentor - Planets Fact Site Solution](#frontend-mentor---planets-fact-site-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between **Overview**, **Internal Structure**, and **Surface Geology**

### Screenshot

![Screenshot of the final result](./screenshot.jpg)

> You can update this screenshot with an actual capture of your final UI.

### Links

- Solution URL: [repository url](https://github.com/aouintihouari/planets-fact-site)
- Live Site URL:

---

## My process

### Built with

- Semantic HTML5
- Tailwind CSS v4
- React 19
- React Router
- TypeScript (if applicable)
- Mobile-first responsive design
- Local JSON data fetching
- [Frontend Mentor Design System](https://www.frontendmentor.io/resources)

### What I learned

This project helped me deepen my understanding of:

- Managing component state and props in React
- Conditional rendering and dynamic styles with Tailwind CSS
- Responsive design strategies (Flexbox, Grid, media queries)
- Component structure for scalable React apps
- Using design tokens and color variables efficiently

Example snippet for conditionally styled section buttons:

```jsx
<button
  className={`px-4 py-2 ${
    selected === "overview" ? "bg-mercury text-white" : "hover:border-mercury"
  }`}
  onClick={() => setSelected("overview")}
>
  Overview
</button>
```
