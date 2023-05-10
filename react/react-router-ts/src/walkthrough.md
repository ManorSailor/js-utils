## UI Hierarchy

- Navbar
    - Home Route
    - Products Route
    - Product Route
- Pages
    - Home
        - Products Route
    - Products
        - List of Products
            - ProductList
        - Link to each Product
            - ProductItem
    - Product
        - Go Back Link

## Breakdown
- Navbar is simple. Nothing complicated there
- Homepage is simple as well
- Products will fetch a list of products & display it. Clicking on any of the product will render:
- Product route - _dynamic route_. It'll render the clicked product by fetching its data.

## Steps
1. Let's setup React Router
    1.1 Seems like there are two ways to create router. One of them supports the Data API thingy or whatever the hell that is
    1.2 I've gone with traditional JSX styled router cause it's much more clean & intuitive.
2. Time to setup the static components
    2.1 Navbar
    2.2 Home
3. Now. We should setup our `/products` route
    3.1 This route will make a fetch request to DummyJSON api for a list of products
    3.2 If request was successful, It'll render the products
    <!-- 3.3 Otherwise, it'll render an error & redirect back to `/home` Will do later -->
4. Let us work on implementing the `/products/{id}` route
    4.1 Hmm. We don't need to fetch anything since in the previous route, we fetched everyhting we need.
    4.2 Guess it's time to lift the state up since this `ProductDetails` component need access
5. Let's implement a 404 route
    5.1 Render a 404 route on unexpected scenarios
    5.2 Redirect to `/home` after 2 seconds
6. Implementing the products route have increased the complexity. Let's simplify it a bit:
    5.1 My types are all over the place. Let's organize them in a `types` folder
    5.2 Let's move hooks to a separate folder
    5.3 Maybe, implement a Context to get rid of this ugly drilling
7. Let's implement caching by saving the fetched products in localStorage
    6.1 This functionality need to exist in the hook which fetches the products initially
    6.2 We will prioritize looking for products in our cache before sending the fetch request
    6.3 If products in cache, parse & return products
    6.4 else, fetch products, cache, & then return products