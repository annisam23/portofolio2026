export const portfolioItems = [
 {
  slug: 'covid',
  text: 'COVID-19 Tracker',
  image: '/covid/1.png',
  aboutPics: ['/covid/1.png', '/covid/2.png', '/covid/3.png'],
  description:
    'COVID-19 Tracker is a web application that displays real-time global COVID-19 statistics. The app consumes data from a public COVID API and presents it in a clear, user-friendly interface, allowing users to monitor confirmed cases, recoveries, and deaths across different countries.',
  link: 'https://uas-fe-dun.vercel.app/',
  more: ['/portfolio/moviesapp', '/portfolio/covid'],
  moreImgs: ['/movie/1.png', '/db/1.png'],

  features: [
    {
      title: 'Global COVID-19 Data',
      description:
        'Displays up-to-date global COVID-19 statistics including total cases, recoveries, and deaths fetched directly from a public API.',
    },
    {
      title: 'Country-Based Data View',
      description:
        'Allows users to view COVID-19 data by country, making it easy to compare statistics across different regions.',
    },
    {
      title: 'Real-Time API Integration',
      description:
        'Integrates with a COVID-19 API to fetch real-time data and ensure information remains current and reliable.',
    },
    {
      title: 'Redux Toolkit State Management',
      description:
        'Uses Redux Toolkit to efficiently manage global state, handle asynchronous API calls, and maintain predictable data flow.',
    },
    {
      title: 'Loading & Error Handling',
      description:
        'Provides clear loading indicators and error messages to improve user experience during data fetching.',
    },
    {
      title: 'Responsive Design',
      description:
        'Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices.',
    },
    {
      title: 'Clean & Informative UI',
      description:
        'Presents complex data in a clean and readable format, making statistics easy to understand at a glance.',
    },
    {
      title: 'Performance Optimized',
      description:
        'Optimized rendering and state updates ensure smooth performance even when handling large datasets.',
    },
  ],

  technologies: [
    {
      title: 'React',
      description:
        'Used to build a component-based, interactive user interface for displaying COVID-19 data.',
    },
    {
      title: 'Redux Toolkit',
      description:
        'Manages global application state and simplifies asynchronous data fetching from the COVID-19 API.',
    },
    {
      title: 'Axios / Fetch API',
      description:
        'Handles HTTP requests to retrieve real-time COVID-19 data from the external API.',
    },
    {
      title: 'Public COVID-19 API',
      description:
        'Provides real-time global and country-level COVID-19 statistics used within the application.',
    },
    {
      title: 'Tailwind CSS',
      description:
        'Used to create a responsive, modern, and clean user interface with utility-first styling.',
    },
    {
      title: 'JavaScript (ES6+)',
      description:
        'Core language used to implement application logic, state handling, and API integration.',
    },
  ],
}
,
{
  slug: 'moviesapp',
  text: 'Movie App',
  image: '/movie/1.png',
  aboutPics: ['/movie/2.png', '/movie/3.png', '/movie/4.png'],
  description:
    'Movie App is a web-based movie application built as part of a frontend programming project. The application consumes data from The Movie Database (TMDb) API to display various movie categories such as Popular, Now Playing, Top Rated, Trending, Recommendations, and detailed movie information in an interactive and user-friendly interface.',
  link: 'https://sttnf-frontend-programming.vercel.app/',
  more: ['/portfolio/covid', '/portfolio/ecommerce-dashboard'],
  moreImgs: ['/covid/1.png', '/db/1.png'],

  features: [
    {
      title: 'TMDb API Integration',
      description:
        'Fetches movie data from The Movie Database (TMDb) API including Popular, Now Playing, Top Rated, Trending, Recommendations, and detailed movie data.',
    },
    {
      title: 'Movie Categories',
      description:
        'Displays multiple movie sections such as Popular, Now Playing, Top Rated, and Trending to help users explore movies easily.',
    },
    {
      title: 'Detailed Movie Information',
      description:
        'Each movie includes detailed information such as synopsis, rating, release date, and poster retrieved from the API.',
    },
    {
      title: 'Search Movies',
      description:
        'Allows users to search movies by title to quickly find specific content.',
    },
    {
      title: 'Dynamic Data Rendering',
      description:
        'Movie data is rendered dynamically based on real-time API responses.',
    },
    {
      title: 'Responsive Layout',
      description:
        'Designed to be responsive and accessible across desktop and mobile devices.',
    },
    {
      title: 'Clean UI',
      description:
        'Presents movie data in a clean and readable layout for better user experience.',
    },
  ],

  technologies: [
    {
      title: 'React',
      description:
        'Used to build a component-based user interface with dynamic rendering.',
    },
    {
      title: 'JavaScript (ES6+)',
      description:
        'Handles application logic, API calls, and data manipulation.',
    },
    {
      title: 'TMDb API',
      description:
        'Provides movie data such as Popular, Now Playing, Top Rated, Trending, Recommendations, and detailed movie information.',
    },
    {
      title: 'CSS',
      description:
        'Used to style the application and create a responsive layout.',
    },
    {
      title: 'Vercel',
      description:
        'Used for deploying and hosting the web application.',
    },
  ],
},
{
  slug: 'ecommerce-dashboard',
  text: 'E-commerce Dashboard',
  image: '/db/1.png',
  aboutPics: ['/db/1.png', '/db/2.png', '/db/3.png'],
  description:
    'E-commerce Dashboard is an individually built web application designed to manage product data through a simple and intuitive dashboard interface. The application supports full CRUD (Create, Read, Update, Delete) operations using JavaScript and consumes product data from the Fake Store API (https://fakestoreapi.com/products).',
  link: 'https://annisam23.github.io/Hacktiv8-Assignment3/',
  more: ['/portfolio/simple-ecommerce', '/covid'],
  moreImgs: ['/ec/ec1.png', '/covid/1.png'],

  features: [
    {
      title: 'CRUD Product Management',
      description:
        'Supports full CRUD operations, allowing users to create, view, update, and delete product data directly from the dashboard.',
    },
    {
      title: 'Fake Store API Integration',
      description:
        'Integrates with the Fake Store API to fetch and manage product data dynamically.',
    },
    {
      title: 'Product Listing Dashboard',
      description:
        'Displays product data in a structured dashboard layout, making it easy to manage and monitor items.',
    },
    {
      title: 'Add & Edit Products',
      description:
        'Provides forms to add new products and edit existing product information using JavaScript.',
    },
    {
      title: 'Delete Products',
      description:
        'Allows users to remove products from the dashboard with immediate UI updates.',
    },
    {
      title: 'Dynamic Data Rendering',
      description:
        'Product data is rendered dynamically based on API responses and user actions.',
    },
    {
      title: 'Responsive Design',
      description:
        'Responsive layout ensures the dashboard works smoothly on desktop and mobile devices.',
    },
    {
      title: 'Clean & Usable UI',
      description:
        'Designed with usability in mind, featuring a clean and straightforward interface for managing products.',
    },
  ],

  technologies: [
    {
      title: 'JavaScript (ES6+)',
      description:
        'Core language used to handle CRUD logic, API interactions, and DOM manipulation.',
    },
    {
      title: 'Fake Store API',
      description:
        'Provides product data used for CRUD operations, sourced from https://fakestoreapi.com/products.',
    },
    {
      title: 'HTML',
      description:
        'Used to structure the dashboard layout and form elements.',
    },
    {
      title: 'CSS',
      description:
        'Styles the dashboard interface and ensures responsive design.',
    },
    {
      title: 'Fetch API',
      description:
        'Handles HTTP requests for retrieving, creating, updating, and deleting product data.',
    },
  ],
},
{
  slug: 'simple-ecommerce',
  text: 'Simple E-commerce',
  image: '/ec/ec1.png',
  aboutPics: [
    '/ec/ec2.png',
    '/ec/ec3.png',
    '/ec/ec4.png',
  ],
  description:
    'Simple E-commerce is an individually built web application focused solely on product display. The project adopts a pet shop theme, presenting pet-related products in a clean and friendly interface without transactional features such as cart, checkout, or payment.',
  link: 'https://annisam23.github.io/Hacktiv8-Assigment1/',
  more: ['/portfolio/ecommerce-dashboard', '/portfolio/moviesapp'],
  moreImgs: ['/db/1.png', '/movie/1.png'],

  features: [
    {
      title: 'Pet Shop Theme',
      description:
        'Designed with a pet shop concept, showcasing pet-related products with a friendly and approachable visual style.',
    },
    {
      title: 'Product Listing Display',
      description:
        'Displays products in a structured layout, allowing users to easily browse available items.',
    },
    {
      title: 'Product Detail View',
      description:
        'Each product includes basic information such as name, price, image, and description.',
    },
    {
      title: 'Display-Only E-commerce',
      description:
        'Focuses purely on presenting products without cart, checkout, or payment functionality.',
    },
    {
      title: 'Clean & Simple UI',
      description:
        'Minimal and clean interface designed for easy navigation and readability.',
    },
    {
      title: 'Responsive Design',
      description:
        'Responsive layout ensures the application works well on both desktop and mobile devices.',
    },
  ],

  technologies: [
    {
      title: 'HTML',
      description:
        'Used to structure the layout and content of the e-commerce display.',
    },
    {
      title: 'CSS',
      description:
        'Used to style the interface with a simple and pet-friendly design.',
    },
    {
      title: 'JavaScript',
      description:
        'Handles basic interactivity and dynamic rendering of product content.',
    },
  ],
},
];
