# Edusity

This project is built with React and includes various sections like Home, About, Programs, Campus Gallery, Testimonials, and Contact Us. It also features a video modal, responsive design, and smooth animations for a user-friendly experience.

## Features

- **Home Page**: Hero section introducing the platform with a call-to-action button to explore more.
- **About Us**: Section explaining the mission and vision of the university.
- **Programs**: Display of available programs offered by the university with images and captions.
- **Campus Gallery**: A gallery of campus photos.
- **Testimonials**: A carousel showing testimonials from students.
- **Contact Us**: A contact form with interactive feedback.
- **Video Modal**: A video overlay modal that can be triggered by clicking a play button.

## Installation

To get started with the project, follow the instructions below.

### Prerequisites

You need to have the following installed on your machine:

- **Node.js**
- **npm** or **yarn**

### Step 1: Clone the repository

Clone the repository to your local machine.

```
git clone https://github.com/musaab-khan/edusity.git
```

### Step 2: Install dependencies

Navigate to the project directory and install the required dependencies using npm or yarn.

```
cd edusity
npm install
```

Or if you're using yarn:

```
yarn install
```

### Step 3: Start the development server

After the dependencies are installed, start the development server.

```
npm start
```

Or with yarn:

```
yarn start
```

Your app should now be running at [http://localhost:3000](http://localhost:3000).

## Folder Structure

Here is the general folder structure of the project:

```
/public
  /index.html  # The main HTML template

/src
  /assets       # Folder for images and static assets
  /components   # All reusable components (About, Programs, Contact, etc.)
  /styles       # CSS files for styling
  /App.js       # Main App component
  /index.js     # Entry point for the React application
  /const.js      # Constants for static data (e.g., gallery, programs)
```

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **React State and Effects**: For managing component state and side effects.
- **React Hooks**: For managing component logic using `useState`, `useEffect`, and other hooks.
