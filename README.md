# Phase-1-project
Learning Goals
Design and architect features across a frontend
Communicate and collaborate in a technical environment
Integrate JavaScript and an external API
Debug issues in small- to medium-sized projects
Build and iterate on a project MVP
Introduction
Welcome to JavaScript Project Mode!

You’ve worked so hard to get here and have learned a ton. Now it's time to bring it all together!

For this project, you're going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything you've learned up to this point. Your frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API.
Project Requirements
Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

Your entire app must run on a single page. There should be NO redirects. 

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <script src="./script.js" defer></script>
</head>

<body>
    <div class="card">
        <div class="search">
            <input type="text" class="search-bar" placeholder="Search">
            <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></button>
        </div>
        <div class="weather loading">
            <h2 class="city">weather in Nairobi</h2>
            <h1 class="temp">51°C</h1>
            <div class="flex"></div>
            <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icons" />
            <div class="description">Cloudy</div>
        </div>
        <div class="humidity">Humidity: 60%</div>
        <div class="wind">Wind speed: 6.2 Km/h</div>

        when you search for the city name it gives you the image from that city.....