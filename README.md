
<h1 align="center">OCR Bookfinder Web</h1>

<p align="center">
  <a href="https://youtu.be/2IrLdypcxao"><img src="https://i.imgur.com/ETF5sFC.gif" alt="YouTube Demonstration" width="800"></a>
</p>

<p align="center">A web application that extracts text from book pages and finds what book it is from, powered by Flask, Tesseract, and Google Books API.</p>

<h3>In case you want to access my web application, it is hosted here: <a href="https://www.gabechachas.com/">gabechachas.com</a></h3>

<h2>Description</h2>
<p>The goal of this project was to make a artist website with links to youtube video, lyrics and spotify links to every song and breakdown of the artist's discography. The program used React to build the application, Docker to package the application and its dependencies into containers and used Fly.io to deploy and host the service on the cloud.</p>

<h2>Languages and Utilities Used</h2>
<ul>
    <li><b>React App:</b></li>
    <li><b>Express:</b></li>
    <li><b>Node.js:</b></li>
    <li><b>Docker:</b></li>
    <li><b>Fly.io:</b></li>
    <li><b>HTML/CSS:</b></li>
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
    <li>Upload an image of a book page by selecting a file from your local device.</li>
    <li>Click the "Submit" button to extract text and identify the book from the image.</li>
    <li>The original image, extracted text, and the best matching book information will be displayed on the results page.</li>
</ol>

<h2>Code Structure</h2>
<ul>
    <li><strong>app.py:</strong> Main application file that contains routes, image processing logic, and OCR/book identification functionalities.</li>
    <li><strong>static/:</strong> Contains static files such as uploaded images and stylesheets.</li>
    <li><strong>templates/:</strong> HTML templates used for rendering the web pages.</li>
    <li><strong>uploads/:</strong> Stores uploaded images for processing.</li>
</ul>

<h2>Known Issues</h2>
<ul>
    <li>Images with low quality or poor lighting may result in inaccurate text extraction.</li>
    <li>The accuracy of book identification depends on the relevance of the extracted text and the Google Books database.</li>
</ul>

<h2>Contributing</h2>
<p>Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.</p>

<h2>Deployment</h2>
<p>The application uses Docker for containerization, ensuring consistent environments across different platforms. Fly.io is used for deploying the application, providing a scalable and globally distributed infrastructure for web hosting..</p>

<h2><a href="https://github.com/yourusername/ocr-bookfinder-web/blob/main/READCODE.md">Code Breakdown Here!</a></h2>

<h3>Upload Image</h3>
<p align="center">
    <img src="https://i.imgur.com/xAIAvWD.png" alt="Upload Image">
</p>
<p>The main page allows the user to upload an image containing a book page. The application then processes this image to extract the text and identify the book.</p>

<hr>

<h3>Processed Image and Results</h3>
<p align="center">
    <img src="https://i.imgur.com/bbSfVCY.png" alt="Results">
</p>
<p>After processing, the application displays the original image, the extracted text, and the best matching book information.</p>

