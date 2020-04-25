searchTerms = [
  'Current Project',
]

// <span class='currentProject'> <i> Current Project </i> </span> —

items = [{
    category: "Education",
    workplace: "Computer Science, BS",
    role: "<a href='https://www.unlv.edu/'>University of Nevada: Las Vegas</a>",
    date: "Jan 2016 - Present",
    objectivesLimit: "3",
    objectives: ["Computer science senior | Expected graduation - May 2020 | GPA: 3.8"]
  },
    {
    category: "Experience",
    workplace: "Teaching — <a class='unlvASC' href='https://www.unlv.edu/asc/'>Academic Success Center</a>",
    role: "<a href='https://www.unlv.edu/'>UNLV</a> - Computer Science Tutor",
    date: "Aug 2018 - Present",
    objectives: [
      "Tutored twenty-four core computer science, computer engineering, statistics, and math classes.",
      "Measurably improved students' performance in class, on assignments, and during exams.",
      "Effectively used teaching strategies to tutor multiple students at the same time."
    ],
    index: [
      "Python",
      "Math",
      "C++",
      "ASM",
      "Machine Languages",
      "MIPS",
      "C"
    ]
  },
  {
    category: "Notable Projects",
    workplace: "<a href='https://github.com/dook-robotics'>Dook Robotics</a>",
    role: "Senior Design - Automatic Pooper Scooper",
    date: "Jul 2019 - Dec 2019",
    objectivesLimit: "3",
    objectives: [
      "Created, labeled, and cleaned a database of over 2300 images and 6000 objects used for object detection.",
      "Used TensorFlow to train several different models based on the environment the robot is in.",
      "Wrote scripts to automate nearly every part of the data processing pipeline.",
      "Discovered critical battery life issues with voltage detectors and matplotlib.",
      "Wrote scripts to interface with many hardware devices: motors, load cell, relay, voltage sensor.",
    ],
    index: [
      'TensorFlow',
      'ML',
      'Machine Learning',
      'data science',
      'Raspberry Pi',
      'Hardware',
      'image processing',
      'labeling',
      'LabelImg',
      'Robot',
      'Python',
      'C++',
      'Arduino',
      'breadboard',
      'Neural Network',
      'CNN',
      'SSD MobileNet'
    ]
  },

  {
    category: "Notable Projects",
    workplace: "<a href = ''>Bezier Curve Calculator</a>",
    role: "Calculate Bezier curves given a set of 3-dimmensional points",
    date: "Sep 2019 - Oct 2019",
    objectivesLimit: "6",
    objectives: [
      "Given a set of n 3-dimmensional points, calculate the Bezier curve in 3-dimmensional space",
      "Used Window's Form Application to design the user interface and graphics display",
      "lighting is used to give a 3-dimmensional perspective to the 2-dimmensional screen space points with simple shading",
      "Created a simple lighting engine to calculate ambient and diffuse lighting using normals to a sphere",
      "Calculate lighting for 3-dimmensional world points by generating a sphere around all points centered at the gravity of the Bezier curve",
	  "draw 3-dimmensional axis to give user perspective of the world orientation",
      "Designed and imporved user Interface using Window's form designer based off user feedback",
      "Used my own expression evaluator to parse a mathmatical expression, in this case the equations of a Bezier curve",
      "take 3-dimmensional world coordinates and translate them into 2-dimmensional screen space"
    ],
    index: [
      "Window's Form Application",
      "Visual Studio",
      "graphics",
	  "C#",
      "Bezier",
      "lighting",
      "Expression Evaluator"
    ]
  },
  
  {
    category: "Notable Projects",
    workplace: "<a href = ''>Mesh Generator</a>",
    role: "Calculate the triangulation of 3-dimmensional points to create a wireframe mesh",
    date: "Oct 2019 - Dec 2019",
    objectivesLimit: "5",
    objectives: [
	  "Calculate triangulation using left-right-ness of points to one another",
	  "Used convex hull to determine starting pair of points",
	  "calculate triangles by finding smallest third leg segment using a polar winding technique",
      "Generate a set of random points and smooth points by averaging with nearest neighbors",
      "Used Window's Form Application to design the user interface and graphics display"
    ],
    index: [
      "Window's Form Application",
      "Visual Studio",
	  "C#",
      "graphics",
      "Triangulation",
    ]
  },
  
   {
    category: "Notable Projects",
    workplace: "<a href = ''>Mandlebrot Set</a>",
    role: "Calculate and draw the Mandlebrot set",
    date: "Sep 2019 - Oct 2019",
    objectivesLimit: "5",
    objectives: [
	  "Calculated and display the Mandlebrot set",
	  "Allow user to draw a box of any dimension on the bitmap and recalculate the Mandlebrot set within the specified rectangle",
	  "User can switch coloring mode (iterative and flat) shading", 
	  "iterative coloring mode shows regional stability of a point in the Mandlebrot set",
	  "flat shading only signals that a point is stable or unstable",
      "Used Window's Form Application to design the user interface and graphics display"
    ],
    index: [
      "Window's Form Application",
      "Visual Studio",
	  "C#",
      "graphics",
      "Mandlebrot",
	  "Julia"
    ]
  },
/* {
    category: "Notable Projects",
    workplace: "<a href='http://MikianMusser.com'>MikianMusser.com</a>",
    role: "Personal web site - html/css/js/pug/sass ",
    date: "Aug 2018 - Present",
    objectivesLimit: "3",
    objectives: [
      "Iteratively designed and programmed a personal website to showcase projects and experience.",
      "Used CSS and HTML preprocessors such as SASS and PUG to increase productivity.",
      "Taught myself the web programming languages through self guided intuition."
    ],
    index: [
      "js",
      "javascript",
      "html",
      "css",
      "bootstrap",
      "p5.js",
      "animation",
      "Webhosting",
      "ftps",
      "dynamic design",
      "responsive",
      'Web Development',
    ]
  },*/
   {
    category: "Other Projects",
    workplace: "<a href = ''>Julia Set</a>",
    role: "Calculate and draw the Mandlebrot set",
    date: "Sep 2019 - Oct 2019",
    objectivesLimit: "6",
    objectives: [
	  "Calculated and display the Julia sets",
	  "User can cycle between predetermined Julia sets",
	  "Allow user to give custom complex number as intial complex number in the Julia set equation",
	  "User can switch coloring mode (iterative and flat) shading", 
	  "iterative coloring mode shows regional stability of a point in the Mandlebrot set",
	  "flat shading only signals that a point is stable or unstable",
      "Used Window's Form Application to design the user interface and graphics display"
    ],
    index: [
      "Window's Form Application",
      "Visual Studio",
	  "C#",
      "graphics",
      "Mandlebrot",
	  "Julia"
    ]
  }, 
  
    {
    category: "Other Projects",
    workplace: "<a href=''><span class=ProceduralGeneration>Procedural Generation: </span> Land Mass Generator </a>",
    role: "Generate Land Masses based on Perlin Noise",
    date: "Spring 2020",
    objectivesLimit: "3",
    objectives: [
	  "Used the Unity Game Engine to procedurally generate Land",
      "Created 3-dimmensional meshes from 2-dimmensional height maps",
	  "Used fractal Brownian Motion to generate psuedo random terrains"
    ],
    index: [
      'Procedural',
      'Generation',
      'Unity',
	  'Terrain'
    ]
  },
  
  {
    category: "Other Projects",
    workplace: "<a href>Function Grapher</a>",
    role: "Graph a user provided function",
    date: "Sep 2019",
    objectivesLimit: "3",
    objectives: [
	  "Used Window's Form Application to design the user interface and graphics display",
	  "Evaluate a user provided function along a given domain",
	  "calculate ratio between domain and range to fit most of the function properly on the screen",
	  "draw labeled tick marks on x and y axes"
    ],
    index: [
       "Window's Form Application",
      "Visual Studio",
	  "C#",
      "graphics",
	  "Expression Evaluator"
    ]
  }
]
