const Projects = [
    {
      id: 1,
      name: "Product Management System",
      image: "fish.png",
      description: "Manage products for POS and eCommerce systems via sku assignment, pricing updates, and id linking.",
      tools: "PERN, GraphQL, Apollo",
      link: "https://github.com/ryanmoro97/ob"
    },
    {
      id: 2,
      name: "Personal Website",
      image: "fish.png",
      description: "A site to showcase my portfolio and hobbies using a production level toolset.",
      tools: "PERN, TypeScript, AWS, Docker, Jenkins, ESLint",
      link: "https://github.com/ryanmoro97/Ryan"
    },
    {
      id: 3,
      name: "Info Centre & Marketplace",
      image: "mushzm.png",
      description: "Cross-platform mobile app with info centre, calculators, marketplace, and customer module.",
      tools: "React Native, MongoDB",
      link: "https://github.com/ryanmoro97/MushZm"
    },
    {
      id: 4,
      name: "Booktracker",
      image: "booktracker1.png",
      description: "Android application for user book sharing via listings, requests and pickup locations.",
      tools: "Android Studio, Java, Firebase",
      link: "https://github.com/CMPUT301F20T11/Cloud8"
    },
    {
      id: 5,
      name: "Computer Shop",
      image: "cmpt.png",
      description: "Online shop to order a computer with custom components.",
      tools: "C#, MySQL, .NET Core, Azure, Sendgrid",
      link: "https://github.com/ryanmoro97/NotApple"
    },
    {
      id: 6,
      name: "SnakeAI",
      image: "snake.png",
      description: "Arduino snake game playing against an AI snake using a joystick and TFT display.",
      tools: "C++, Arduino",
      link: "https://github.com/ryanmoro97/SnakeAI"
    },
    {
      id: 7,
      name: "Auction",
      image: "auction.png",
      description: "App simulating an auction with users, posting, bidding, and reviews.",
      tools: "Python, SQLite",
      link: "https://github.com/ryanmoro97/Auction"
    },
    {
      id: 8,
      name: "ProdCon",
      image: "prodcon.png",
      description: "A model that allows multiple clients to communicate with a server over sockets to request transactions to be preformed.",
      tools: "C++",
      link: "https://github.com/ryanmoro97/ProdCon"
    },
    {
      id: 9,
      name: "Generic RBT",
      image: "rbt.png",
      description: "Red Black Tree designed to sort generic objects.",
      tools: "Java",
      link: "https://github.com/ryanmoro97/Generic-RBT"
    },
    {
      id: 10,
      name: "Course System",
      image: "lms.png",
      description: "A learning system to deliver courses and quizzes to users provided by instructors filling in simplified EML templates.",
      tools: "PHP, Javascript",
      link: "https://github.com/ryanmoro97/LMS"
    },
    {
      id: 11,
      name: "Utility Tools",
      image: "tools.png",
      description: "Measurement conversion, mortgage calculator, and binary to decimal conversion tools.",
      tools: "Javascript, HTML",
      link: "https://github.com/ryanmoro97/UtilityTools"
    },
    {
      id: 12,
      name: "Vending Machine",
      image: "vnd.png",
      description: "A finite state machine representing a vending machine simulated and implemented on a SoC FPGA board.",
      tools: "VHDL, Zybo Z7",
      link: "https://github.com/ryanmoro97/Vending-Machine"
    },
    {
      id: 13,
      name: "Binary Adders",
      image: "binaryadders.png",
      description: "Half and Full binary adders simulated and implemented on a SoC FPGA board.",
      tools: "VHDL, Zybo Z7",
      link: "https://github.com/ryanmoro97/BinaryAdders"
    },
    {
      id: 14,
      name: "Sequence Detector",
      image: "seqdet.png",
      description: "Sequence detection Moore FSM simulated and implemented on a SoC FPGA board.",
      tools: "VHDL, Zybo Z7",
      link: "https://github.com/ryanmoro97/SequenceDetector"
    },
    {
      id: 15,
      name: "Slideshow",
      image: "slideshow.png",
      description: "Slideshow with multiple custom transition effects.",
      tools: "Javascript, HTML Canvas",
      link: "https://github.com/ryanmoro97/Slideshow"
    },
    {
      id: 16,
      name: "Bookmarx",
      image: "bookmarx.png",
      description: "An online bookmarking service to demonstrate a client/server webpage.",
      tools: "PHP, Javascript, CSS",
      link: "https://github.com/ryanmoro97/bookmarx"
    },
    {
      id: 17,
      name: "Visitors",
      image: "visitors.png",
      description: "Maintain visitor counts with cookies storing ip addresses.",
      tools: "C#",
      link: "https://github.com/ryanmoro97/Visitors"
    },
    {
      id: 18,
      name: "BMI Nanotechnology",
      image: "bmi.png",
      description: "Research paper exploring nanotechnology techniques to use in Brain-Machine interfaces.",
      link: "http://localhost:8008/pdfs/Report.pdf"
    },
    {
      id: 19,
      name: "Strain Gauge and ECG",
      image: "ecg.png",
      description: "Leveraging Op-Amps to construct a strain gauge and ECG monitor.",
      link: "http://localhost:8008/pdfs/405reports.pdf"
    },
    {
      id: 20,
      name: "Transistor Amplifier",
      image: "amp.png",
      description: "Coupled together two BJT amplifiers for a speaker to satisfy high input impedance with medium output voltage requirements.",
      tools: "LTSpice",
      link: "http://localhost:8008/pdfs/302lab2.pdf"
    },
    {
      id: 21,
      name: "Power Supply",
      image: "pwr.png",
      description: "Dual rail DC power supply from an AC signal.",
      tools: "LTSpice",
      link: "http://localhost:8008/pdfs/302lab2.pdf"
    },
    {
      id: 22,
      name: "PISO Shift Register",
      image: "shift.png",
      description: "Combined 2 cells to form a 2-bit Parrallel-in-Serial-Out shift register.",
      tools: "Cadence",
      link: "http://localhost:8008/pdfs/shift.pdf"
    },
    {
      id: 23,
      name: "4:1 Mux",
      image: "mux.png",
      description: "Designed and tested a 4-input digital MUX using PMOS transistors.",
      tools: "Cadence",
      link: "http://localhost:8008/pdfs/mux.pdf"
    },
    {
      id: 24,
      name: "TSPC Flip-Flop",
      image: "flipflop.png",
      description: "Built a True-Single-Phase-Clock Flip-Flop with optimally sized PMOS and NMOS transistors for minimal delay.",
      tools: "Cadence",
      link: "http://localhost:8008/pdfs/flipflop.pdf"
    }
    
  ];

  export default Projects;