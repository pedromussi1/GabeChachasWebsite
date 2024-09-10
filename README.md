
<h1 align="center">Gabe Chachas Website</h1>

<p align="center">
  <a href="https://youtu.be/2IrLdypcxao"><img src="https://i.imgur.com/ETF5sFC.gif" alt="YouTube Demonstration" width="800"></a>
</p>

<p align="center">A web application for an artist, showing their song lyrics, album covers and names, how to listen to their songs on Spotify, and watch their videos on Youtube.</p>

<h3>In case you want to access my web application, it is hosted here: <a href="https://www.gabechachas.com/">gabechachas.com</a></h3>

<h2>Description</h2>
<p>The goal of this project was to make a artist website with links to youtube video, lyrics and spotify links to every song and breakdown of the artist's discography. The program used React to build the application, Docker to package the application and its dependencies into containers and used Fly.io to deploy and host the service on the cloud.</p>

<h2>Languages and Utilities Used</h2>
<ul>
    <li><b>React App:</b> React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. It allows you to create reusable UI components and manage the state of your application efficiently.</li>
    <li><b>Express:</b> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of handling HTTP requests, routing, and middleware management, making it easier to build and manage server-side functionality.</li>
    <li><b>Node.js:</b> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server side, enabling the development of scalable network applications. Node.js is commonly used for backend development and is known for its event-driven architecture and non-blocking I/O.</li>
    <li><b>Docker:</b> Docker is a platform that allows you to package applications and their dependencies into containers. Containers provide a consistent and isolated environment for your applications, making it easier to build, ship, and run them across different systems. Docker helps in achieving environment consistency and simplifies deployment processes.</li>
    <li><b>Fly.io:</b> Fly.io is a platform that provides global application hosting and deployment services. It allows you to deploy applications across multiple regions, ensuring low-latency and high-performance access for users worldwide. Fly.io supports Docker-based deployments, making it easy to run containerized applications in a scalable manner.</li>
    <li><b>HTML/CSS:</b> HTML and CSS are the core technologies for creating and styling web pages. HTML provides the structure of the web pages, while CSS controls the layout and visual appearance. Together, they enable the creation of well-structured and aesthetically pleasing web content.</li>
</ul>


<h2>Environments Used</h2>
<ul>
    <li><b>Windows 11</b></li>
    <li><b>Visual Studio Code</b></li>
</ul>

<h2>Installation</h2>
<ol>
    <li><strong>Clone the Repository:</strong>
        <pre><code>git clone https://github.com/yourusername/GabeChachasWebsite.git
cd src</code></pre>
    </li>
    <li><strong>Install Dependencies:</strong>
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Run the Development Server:</strong>
        <pre><code>npm start</code></pre>
        The application will start and be accessible at <code>http://localhost:3000</code>.
    </li>
</ol>

<h2>Usage</h2>
<ol>
    <li>Open the application in your web browser.</li>
    <li>You can look through all tracks available by Gabe Chachas.</li>
    <li>You can see lyrics, hear the song on Spotify, or watch the videos on Youtube.</li>
    <li>The website is intuitive and it is easy to find what you want.</li>
</ol>

<h2>Code Structure</h2>
<ul>
    <li><b>App.js:</b> This is the main component that serves as the root of the React application. It sets up the primary layout and routing for the application, rendering different components based on the current route.</li>
    <li><b>index.js:</b> This file is the entry point for the React application. It renders the <code>App</code> component into the DOM and is responsible for setting up the React application with any necessary providers or configurations.</li>
    <li><b>Dockerfile:</b> Defines the instructions to build a Docker image for the application. It specifies the base image to use, installs the necessary dependencies, copies the application files, and defines the command to start the application inside a Docker container.</li>
    <li><b>fly.toml:</b> This configuration file is used by Fly.io to deploy and manage the application. It includes settings for the deployment environment, such as the application's name, the build process, and the deployment strategy.</li>
    <li><b>pages/:</b> This directory contains the main pages of the application, each represented by a React component. These components define the content and layout for different routes in the application. Key files within this directory include:</li>
    <ul>
        <li><b>Home.js:</b> Represents the home page of the application. It displays the main sections including albums and singles, with links to their respective pages.</li>
        <li><b>SpatialAwareness.js:</b> Represents the page for the "Spatial Awareness" album. It includes the layout and content specific to this album.</li>
        <li><b>Gasoline2024.js:</b> Represents the page for the "Gasoline on my Pillow (2024)" album. It contains the layout and content specific to this album.</li>
        <li><b>Singles.js:</b> Represents the page for the "Singles" section. It displays the list of singles with links to their details.</li>
    </ul>
    <li><b>components/:</b> This directory contains reusable React components that are used across different pages of the application. Key files within this directory include:</li>
    <ul>
        <li><b>Albums.js:</b> Contains the component that displays the album sections on the home page, including links and images for different albums.</li>
        <li><b>Footer.js:</b> Contains the footer component that is displayed at the bottom of each page. It typically includes copyright information or additional links.</li>
        <li><b>Header.js:</b> Contains the header component that is displayed at the top of each page. It usually includes the main title and any introductory text or navigation links.</li>
        <li><b>Singles.js:</b> Contains the component used specifically for the "Singles" section, displaying individual single images and links.</li>
        <li><b>TrackList.js:</b> Represents a component for displaying a list of tracks, often used in pages like "Gasoline2024" to show the tracklist.</li>
    </ul>
</ul>

<h2>Deployment</h2>
<p>The application uses Docker for containerization, ensuring consistent environments across different platforms. Fly.io is used for deploying the application, providing a scalable and globally distributed infrastructure for web hosting..</p>

<h2><a href="https://github.com/pedromussi1/GabeChachasWebsite/blob/main/READCODE.md">Code Breakdown Here!</a></h2>

<h3>Home Page</h3>
<p align="center">
    <img src="https://i.imgur.com/AgJJ097.png" alt="Upload Image">
</p>
<p>The home page show the content that is available on the website. From here you can decided if you want to go to the albums "Spatial Awareness", "Gasoline on my pillow", or the singles page.</p>

<hr>

<h3>Tracklists</h3>
<p align="center">
    <img src="https://i.imgur.com/UE1OS2Z.jpeg" alt="Results">
</p>
<p>After selecting one of the options in the home page, you will see the tracklist for your selection. From here you can choose which track you want, and it will show you the lyrics to the track, a link to the Spotify for that song, and a video on Youtube for that track if it is available.</p>

<p align="center">
    <img src="https://i.imgur.com/3zEffQs.jpeg" alt="Results">
</p>

