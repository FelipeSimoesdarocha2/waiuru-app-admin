import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root {
/* COLORS */
--black-primary: rgba(0, 0, 0, 0.8);
--black-secondary: rgba(0, 0, 0, 0.6);
--Dark-25: #8559FE ;
--Dark-50: #9873FF;
--Dark-75: #8357FA;
--white: #fff;
--black: #000;
--eerie-black-3: hsla(180, 2%, 8%, 1);
--light-ash: #e0e0e0;

  /* GRADIENT COLOR */
--loading-text-gradient: linear-gradient(90deg, transparent 0% 16.66%, var(--white) 33.33% 50%,  transparent 66.66% 75%);
--gradient-1: linear-gradient(to top,hsla(0, 0%, 0%, 0.9),hsla(0, 0%, 0%, 0.7),transparent);

/* TYPOGRAPHY */

/* text */
--fontSize-body-4: 1.6rem;

/* line-height */
--lineHeight-5: 1.85em;
--lineHeight-6: 1.4em;

/* letter-spacing */
--letterSpacing-1: -0.2px;
--letterSpacing-2: -0.04em;

/* SPACING */
--section-space: 70px;

/* SHADOW */
--shadow-1: 0px 0px 25px 0px hsla(0, 0%, 0%, 0.25);

/* BORDER RADIUS */
--radius-24: 24px;
--radius-circle: 50%;

/* TRANSITION */
--transition-1: 250ms ease;
--transition-2: 500ms ease;
--transition-3: 1000ms ease;

// Margins
--margem-70: 70px;
--margem-lg: 50px;
--margem-sm: 25px;
}

/* #RESET */
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
font-synthesis: none;
text-rendering:optimizeLegibility;
}

li { list-style: none; }

img::selection{
background: none;
}

label::selection{
background: none;
}

a,
img,
data,
span,
input,
button,
select,
textarea { display: block; }

a {
color: inherit;
text-decoration: none;
}

img { height: auto; }

input,
button,
select,
textarea {
background: none;
border: none;
font: inherit;
}

input,
select,
textarea {
width: 100%;
outline: none;
}

button {
cursor: pointer;
}

html {
font-size: 10px;
scroll-behavior: smooth;
scroll-snap-type: y mandatory;
}

body,
h1,
h2,
h3,
p,
a,
blockquote {
text-decoration: none;
}

body {
font-size: var(--fontSize-body-4);
line-height: var(--lineHeight-5);
font-family: "Quicksand", sans-serif;
}

@media screen and (min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
`;

export default Global;
