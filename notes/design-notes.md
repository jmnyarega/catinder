# Design notes
The application is composed of two main components:
- Swipe
- Favourites


## Swipe component

- It has functions that allow the user to swipe left or swipe right on a cat Image.
- The component manages its internal state - cat images and isLoading When a user clicks the swipe-left or swipe-right
  buttons, the handleswipe method will update localstorage by calling the appropriate service.

## Favourites component

- It will fetch data from localstorage and display the cat images.
- It also provides and a remove-favourite functionality - the function will update localStorage accordingly.

## Supportive functions

### Custom hooks
- I have used custom hooks to manage state across components [pages]

### Services
- These functions will fetch/update/delete data from localstorage and the cats-API.

### Constants
- Are responsible for storing system-wide configs

### Re-usable components
These are parts of the aforementioned page components. They provide a support role to the page components hence making the code cleaner.
