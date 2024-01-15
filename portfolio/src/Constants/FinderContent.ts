const InfoStaticContent = [
  {
    name: "Welcome",
    title: "Welcome to my Portfolio!",
    content: `This is a portfolio design inspired by my macOS desktop.
    Working on this made me realize we should all be grateful for the work that goes into making our operating systems look nice`
  },
  {
    name: "About Me",
    title: "Who is Kerem ?",
    content: `Working on web-based solutions since 2019 after my graduation from my university as a Software Engineer, dedicated to crafting exceptional digital experiences. 
      Adept at full-stack development, I thrive on solving complex problems with elegant solutions

      Tech Stack
    JS | TS | Next | Node | Express | React | Redux | Mongo | AWS | Tailwind | Styled Components | Material UI`
  },
  {
    name: "Education",
    title: "Education",
    content: `<a href="https://www.aydin.edu.tr/tr-tr/Pages/default.aspx" target="_blank">Istanbul Aydın University</a>
    Software Engineering
    2015 - 2019
    GPA: 2.7

    <a href="https://uhsal.meb.k12.tr/" target="_blank">Hacısabancı Anatolian Highschool</a>
    Got avarage of 440/500 from 3 exams in 3 years to get into this school
    2011 - 2015
    `
  },
  {
    name: "Experience",
    title: "Experience",
    content: `<a href="https://evrenselsoft.com/" target="_blank">Evrensel Software Solutions</a>
    Jr. Software Engineer
    Nov,2019 - March,2020
        -Developed an intranet web portal with ASP.Net Core.
        -Worked through fastPay integration process.
        -Developed and designed web pages with HTML, CSS and JavaScript.

        <a href="https://www.adcolony.com/history-of-adcolony/" target="_blank">Adcolony</a>
    Software Engineer
    March,2020 - Feb,2022
        -Developing playables, ad units, unit templates and PoC projects to improve internal production process.
        -Web applications using various APIs and device hardware (Spotify, OpenWeatherMap, Tilt recognition using device gyroscope, etc)
    
        <a href="https://www.digitalturbine.com/" target="_blank">Digital Turbine</a>
    Software Engineer
    Feb,2022 - Present
        - Providing bug fixes,features and tests for Composer tool.
        - Developing React applications for internal company specific needs.
        - Keep working on previous tasks from Adcolony.
    `
  }
]
const ProjectFolders = [
  
  {
    name: "Playables",
    title: "Playables",
    content: `Here are some of my playables. I am working on them in my free time.`
  },
  {
    name: "Web",
    title: "Web",
    content: `Here are some of my web projects. I am working on them in my free time.`
  },
  {
    name: "Games",
    title: "Games",
    content: `Here are some of my games. I am working on them in my free time.`
  },

]
const ProjectsStaticContent = [
  {
    title : "McCormick French’s Mustard",
    description : "A playable ad for McCormick  French’s Mustard.",
    url : "https://c4d-cdn.adcolony.com/adc/4.11.2/240113/a25c7ac5-73ec-4c67-81f3-eb1266a0fdfc/0b84ffd4-556a-44d2-8d12-4e651bb39436.html",
    solution : `<a href="https://nyxawards.com/winner-info.php?id=1918" target="_blank">Nyx Awards 2021 Winner</a>
    This unit mainly utilizes JavaScripts request animation frame function and getBoundingClientRect function to follow the collision of the mustard drip and food items. 
    When collision happens there Is a callback function checks weather the food is good or bad and plays the appropriate animation.
    
    `,
  },
  {
    title : "Axe the Runner",
    description : "A playable ad for Axe the Runner.",
    url : "https://c4d-cdn.adcolony.com/adc/3.4.2/210817/ca235e9f-cd6c-45c7-bf4c-dd891cd8e812/696bcdde-6d7b-419c-9c63-6e2b005b0d21.html",
    solution : `Utilizes request animation frame function to move the background to create an endless runner effect.
    Intervals are used to create jump animations.
    `,
  },
  {
    title : "Hyundai360",
    description : "360 Experince for Hyundai.",
    url : "https://hyundai360.s3.eu-central-1.amazonaws.com/hyundai360/index.html",
    solution : `Utilizes Three.js and panolens to create a 360 experince.
    Saved in a S3 bucket and served with CloudFront.
    `,
  },
  {
    title : "Kia360",
    description : "360 Experince for Kia.",
    url : "https://kia360.s3.eu-central-1.amazonaws.com/finalPano/kia360+pano/index.html",
    solution : `Utilizes Three.js and panolens to create a 360 experince.
    Saved in a S3 bucket and served with CloudFront.
    `,
  },
  {
    title : "ShellBox",
    description : "A playable ad for ShellBox Brazil Market.",
    url : "https://c4d-cdn.adcolony.com/adc/4.11.2/240113/04248e88-921c-40b7-99e6-ec0ce1b12e5f/0ff81678-11ef-42d4-8b14-12398d8d4c65.html",
    solution : `Collision detection with animationFrame and getBoundingClientRect functions.
    Listeners for touch and mouse events on the steering wheel.
    `,
  },
  {
    title : "Lego City",
    description : "A play to explore experince for Lego City.",
    url : "https://c4d-cdn.adcolony.com/adc/3.3.4/210803/2730d8f5-cff5-43e5-9962-14dfc4f32cfd/0cfeb415-ba42-4c44-8ba6-c3b55065627e.html",
    solution : `Listeners on the main component to detect touch and mouse events.
    Main component has a invisible div that is used to detect if the user is on the object or not.
    Switching between 2 background images to create the lighting effect.
    `,
  },
  {
    title : "Seven Seas",
    description : "A play to explore experince for Seven Seas.",
    url : "https://c4d-cdn.adcolony.com/adc/4.11.2/240113/63e4d803-1225-4b54-ae3e-0c09ca8b47b1/1180da09-dda4-4e6f-9603-2ea51fcffa59.html",
    solution : `Listeners on the main component to detect touch and mouse events.
    A canvas on top of the main component to create the coloring effect if the user is trying to highlight the right object.
    `,
  },
  {
    title : "Jager Party",
    description : "A background replacement with device camera experince for Jager Party.",
    url : "https://jager-ar2.s3.eu-central-1.amazonaws.com/build/index.html",
    solution : `Removes background from user camera and paints a canvas with the cropped image.
    Made with React tensorflow and canvas.
    Needs camera access and user permission to work.
    `,
  }
]

export { InfoStaticContent,ProjectsStaticContent,ProjectFolders}