
function toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("nav-open");
  }
  
  function showContent(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }
  
  // Function to toggle the visibility of the chat box
  function toggleChat() {
    var chatBox = document.getElementById("chat-box");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
  
    // Focus on the input field when the chat box is opened
    if (chatBox.style.display === "block") {
      var inputField = document.getElementById("chat-input");
      inputField.focus();
    }
  
    // Display predefined questions when the chat box is opened
    if (chatBox.style.display === "block") {
      displayPredefinedQuestions();
    }
  }
  
  
  // Function to display predefined questions when the chat box is opened
  // Function to display 3 random predefined questions when the chat box is opened
  function displayPredefinedQuestions() {
    var chatBody = document.getElementById("chat-body");
    chatBody.innerHTML = ""; // Clear previous messages
  
    // Define predefined questions
    var predefinedQuestions = [
      "What skills do you have?",
      "What is your education?",
      "What is your experience?",
      "What languages do you speak?",
      "What certifications do you have?",
      "What projects have you worked on?",
      "What tools are you proficient with?",
      "What programming languages are you familiar with?",
      "What web technologies are you experienced in?",
      "What cloud technologies have you worked with?",
      "What databases are you skilled in?",
      "What version control systems do you use?",
      "What frameworks are you comfortable with?",
      "What operating systems are you familiar with?",
      "What development tools do you prefer?",
      "What is your favorite programming language?",
      "What is your preferred IDE?",
      "What are your hobbies?",
      "What motivates you?",
      "What are your career goals?"
    ];
  
    // Shuffle the predefined questions array
    predefinedQuestions = shuffleArray(predefinedQuestions);
  
    // Display only the first 3 questions in the chat box
    for (var i = 0; i < 3; i++) {
      var userQuestion = document.createElement("div");
      userQuestion.className = "message you"; // Add 'you' class for user's messages
      userQuestion.textContent = predefinedQuestions[i];
      userQuestion.setAttribute("onclick", "sendMessageFromPredefinedQuestion('" + predefinedQuestions[i] + "')"); // Call sendMessageFromPredefinedQuestion function with the predefined question as parameter
      chatBody.appendChild(userQuestion);
    }
  
    // Scroll to the bottom of the chat box to show the latest messages
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  // Add the new JavaScript code here
  document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});


  // Function to shuffle an array (Fisher-Yates shuffle algorithm)
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  
  // Function to send message when predefined question is clicked
  function sendMessageFromPredefinedQuestion(message) {
    var chatBody = document.getElementById("chat-body");
  
    // Create a new message div
    var newMessage = document.createElement("div");
    newMessage.textContent = "You: " + message; // Format the message as "You: [predefined message]"
    chatBody.appendChild(newMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  
    // Simulate bot's reply
    botReply(message);
    // Remove the predefined questions divs
    var predefinedQuestionsDivs = document.querySelectorAll(".message.you");
    predefinedQuestionsDivs.forEach(function (questionDiv) {
      chatBody.removeChild(questionDiv);
    });
  }
  
  
  // Function to get predefined answer based on selected question
  function getPredefinedAnswer(index) {
    var predefinedAnswers = [
      "I have expertise in Core Java, SQL, Data Structures, Spring Boot, Hibernate, MySQL, AWS CPE, Collection Framework, Exception Handling, Postman, Jira, Jenkins, Chef, Ansible, Git, DevOps, Agile Methodology, Kanban Board, RESTful API, JPA, Debugging, Authentication, AWS Deployment, Problem Solving, Software Development, Backend Development, Java Development, Angular, HTML, CSS, Database.",
      "I graduated in 2023 with a Bachelor of Engineering (B.E.) in Computer Science & Engineering from Visvesvaraya Technological University.",
      "I have less 1 years of experience working as a software engineer.",
      "I speak English, Hindi, and Bhojpuri.",
      "I am HackerRank Certified Software Engineer, Postman API Expert, Microsoft Azure AI Cloud",
      "I have worked on projects like Employee Info, CryptoCurrency Price Prediction, Hospital-Managment-Applications, Bitcoin-Mining-App, Blog_Application, AI-Text-Summarizer-Application, Angular-CRUD-Application, Bitcoin-Mining-Application, MultiFileUpload-Using-Spring-Boot-Application, Flight_Reservation_Project, Hotel-Management-project, Angular-weather-component, Angular-temperatureConverter, BMI-Calculator, BUDDY-A-face-recognition-based-voice-assistant etc.",
      "I am proficient with tools like Git, Docker, Android Studio, Jira, Spring Tool Suite (STS), IntelliJ IDEA, Eclipse, VS Code, Postman.",
      "I am familiar with Java, Spring Boot, Angular and Trading.",
      "I am experienced in RESTful APIs, HTML, CSS, AngularJS, Bootstrap, and JWT.",
      "I have worked with AWS cloud technologies.",
      "I am skilled in MySQL, SQL, and PostgreSQL.",
      "I use Git and Bitbucket for version control.",
      "I am comfortable with Spring, Spring Boot, and Angular frameworks.",
      "I am familiar with Windows, Linux, Fedora, Ubuntu and macOS..",
      "I prefer using IntelliJ and Visual Studio Code as my IDEs.",
      "My favorite programming language is Java.",
      "My preferred IDE is IntelliJ IDEA.",
      "My hobbies include reading, traveling, and F&O + Stock + Crypto + Forex Trading..",
      "I am motivated by challenging projects and opportunities for growth.",
      "My career goals include becoming a senior software engineer and contributing to impactful projects."
    ];
  
    var chatBody = document.getElementById("chat-body");
  
    // Simulate Tausif typing
    var typingIndicator = document.createElement("div");
    typingIndicator.className = "message typing-prabhat";
    typingIndicator.textContent = "Prabhat is typing...";
    chatBody.appendChild(typingIndicator);
  
    // Simulate Tausif's reply after a short delay
    setTimeout(function () {
      // Remove typing indicator
      chatBody.removeChild(typingIndicator);
  
      var tausifAnswer = document.createElement("div");
      tausifAnswer.className = "message prabhat"; // Add 'tausif' class for Tausif's messages
      tausifAnswer.textContent = predefinedAnswers[index];
      chatBody.appendChild(tausifAnswer);
      chatBody.scrollTop = chatBody.scrollHeight;
  
      // Simulate bot's reply
      botReply(predefinedAnswers[index]);
    }, 1000); // Adjust delay as needed
  }
  
  // Function to simulate bot's reply
  function botReply(question) {
    console.log("in botreply");
    var chatBody = document.getElementById("chat-body");
    var typingIndicator = document.createElement("div");
    typingIndicator.className = "message typing-prabhat";
    typingIndicator.textContent = "Prabhat is typing...";
    chatBody.appendChild(typingIndicator);
    setTimeout(function () {
      chatBody.removeChild(typingIndicator);
      var botMessage = document.createElement("div");
      botMessage.className = "message prabhat";
      var answer = isBasicQuestion(question) ? getBasicResponse(question) : generateResponse(question);
      var characters = answer.split("");
      var index = 0;
      var interval = setInterval(function () {
        if (index < characters.length) {
          botMessage.textContent += characters[index];
          chatBody.appendChild(botMessage);
          chatBody.scrollTop = chatBody.scrollHeight;
          index++;
        } else {
          clearInterval(interval);
          displayNextPredefinedQuestions();
        }
      }, 50); // Adjust delay as needed for the typing speed
    }, 600); // Adjust delay as needed for the "typing" delay
  }
  
  
  
  
  // Function to check if the question is a basic greeting or phrase
  function isBasicQuestion(question) {
    var basicQuestions = ["hi", "hello", "good morning", "good afternoon", "good evening", "thank you","education","skill","skills","experience","project","projects" "name", "from", "tell me about yourself"];
    return basicQuestions.includes(question.trim());
  }
  
  
  // Function to get a basic response based on the question
  function getBasicResponse(question) {
    switch (question.trim().toLowerCase()) {
      case "hi":
      case "hello":
        return "Hi there! How can I assist you today?";
      case "good morning":
        return "Good morning! Hope you're having a great day.";
      case "good afternoon":
        return "Good afternoon! How may I help you?";
      case "good evening":
        return "Good evening! Is there anything I can do for you?";
      case "thank you":
        return "You're welcome! Feel free to ask if you have any more questions.";
      case "education":
        return "I graduated in 2023 with a Bachelor of Engineering (B.E.) in Computer Science & Engineering from Visvesvaraya Technological University.";
      case "skills":
      case "skill":
        return "I have expertise in Java, Spring Boot, SQl, Angular, HTML, CSS & Database.";
      case "experience":
        return "I have no any Industrial experience.";
      case "projects":
      case "project":
        return "I have worked on projects like Employee Info, CryptoCurrency Price Prediction, Hospital-Managment-Applications, Bitcoin-Mining-App, Blog_Application, AI-Text-Summarizer-Application, Angular-CRUD-Application, Bitcoin-Mining-Application, MultiFileUpload-Using-Spring-Boot-Application, Flight_Reservation_Project, Hotel-Management-project, Angular-weather-component, Angular-temperatureConverter, BMI-Calculator, BUDDY-A-face-recognition-based-voice-assistant etc.";
      case  "name":
            return "My self Prabhat Kumar.";
      case  "from":
            return "I am from Sasaram Bihar.";
      case  "tell me about yourself":
            return "I'm Prabhat Kumar, a 2023 graduate in Software Engineering. I have strong skills in Core Java, SQL, GitHub, Spring Boot, Hibernate, Data Structures, OOP, Exception Handling, MySQL, Angular, and AWS EC2. Proficient with tools like Git, Docker, Jira, and Postman. I've worked on projects in cryptocurrency prediction and hospital management systems, and interned at CodeSpeedy Technology, enhancing my Spring Boot development skills. I'm adaptable, positive, and ready to contribute to your company.";
      default:
        return "I'm sorry, I didn't understand that question.";
    }
  }
  
  
  
  
  
  // Function to display the next set of predefined questions
  function displayNextPredefinedQuestions() {
    var chatBody = document.getElementById("chat-body");
  
    // Define predefined questions
    var predefinedQuestions = [
      "What skills do you have?",
      "What is your education?",
      "What is your experience?",
      "What languages do you speak?",
      "What certifications do you have?",
      "What projects have you worked on?",
      "What tools are you proficient with?",
      "What programming languages are you familiar with?",
      "What web technologies are you experienced in?",
      "What cloud technologies have you worked with?",
      "What databases are you skilled in?",
      "What version control systems do you use?",
      "What frameworks are you comfortable with?",
      "What operating systems are you familiar with?",
      "What development tools do you prefer?",
      "What is your favorite programming language?",
      "What is your preferred IDE?",
      "What are your hobbies?",
      "What motivates you?",
      "What are your career goals?"
    ];
  
    // Shuffle the predefined questions array
    predefinedQuestions = shuffleArray(predefinedQuestions);
  
    // Display only the first 3 questions in the chat box
    for (var i = 0; i < 3; i++) {
      var userQuestion = document.createElement("div");
      userQuestion.className = "message you"; // Add 'you' class for user's messages
      userQuestion.textContent = predefinedQuestions[i];
      userQuestion.setAttribute("onclick", "sendMessageFromPredefinedQuestion('" + predefinedQuestions[i] + "')"); // Call sendMessageFromPredefinedQuestion function with the predefined question as parameter
      chatBody.appendChild(userQuestion);
    }
  
    // Scroll to the bottom of the chat box to show the latest messages
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  
  
  function generateResponse(question) {
    // Convert the question to lowercase and trim any leading or trailing spaces
    var trimmedQuestion = question.trim().toLowerCase();
  
    switch (trimmedQuestion) {
      case "what skills do you have?":
        return "I have expertise in Core Java, SQL, Data Structures, Spring Boot, Hibernate, MySQL, AWS CPE, Collection Framework, Exception Handling, Postman, Jira, Jenkins, Chef, Ansible, Git, DevOps, Agile Methodology, Kanban Board, RESTful API, JPA, Debugging, Authentication, AWS Deployment, Problem Solving, Software Development, Backend Development, Java Development, Angular, HTML, CSS, Database.";
      case "what is your education?":
        return "I graduated in 2023 with a Bachelor of Engineering (B.E.) in Computer Science & Engineering from Visvesvaraya Technological University.";
      case "what is your experience?":
        return "I have less 1 years of experience working as a software engineer.";
      case "what languages do you speak?":
        return "I speak English, Hindi, and Bhojpuri.";
      case "what certifications do you have?":
        return "I am HackerRank certified Software Engineer, Postman API Expert, Microsoft Azure AI Cloud.";
      case "what projects have you worked on?":
        return "I have worked on projects like Employee Info, CryptoCurrency Price Prediction, Hospital-Managment-Applications, Bitcoin-Mining-App, Blog_Application, AI-Text-Summarizer-Application, Angular-CRUD-Application, Bitcoin-Mining-Application, MultiFileUpload-Using-Spring-Boot-Application, Flight_Reservation_Project, Hotel-Management-project, Angular-weather-component, Angular-temperatureConverter, BMI-Calculator, BUDDY-A-face-recognition-based-voice-assistant etc.",
      case "what tools are you proficient with?":
        return "I am proficient with tools like Git, Docker, Android Studio, Jira, Spring Tool Suite (STS), IntelliJ IDEA, Eclipse, VS Code, Postman.";
      case "what programming languages are you familiar with?":
        return "I am familiar with Java, TypeScript, and Shell Scripting.";
      case "what web technologies are you experienced in?":
        return "I am experienced in Java, Spring Boot, Hibernate, JPA, RESTful APIs, HTML, CSS and Angular.";
      case "what cloud technologies have you worked with?":
        return "I have worked with AWS cloud technologies.";
      case "what databases are you skilled in?":
        return "I am skilled in MySQL, SQL, and PostgreSQL.";
      case "what version control systems do you use?":
        return "I use Git and Bitbucket for version control.";
      case "what frameworks are you comfortable with?":
        return "I am comfortable with Spring, Spring Boot, and Angular frameworks.";
      case "what operating systems are you familiar with?":
        return "I am familiar with Windows, Linux, Fedora, Ubuntu and macOS.";
      case "what development tools do you prefer?":
        return "My preferred IDEs are IntelliJ, Eclipse, SpringToolSuite and Visual Studio Code.";
      case "what is your favorite programming language?":
        return "My favorite programming language is Java.";
      case "what is your preferred ide?":
        return "My preferred IDE is IntelliJ IDEA.";
      case "what are your hobbies?":
        return "My hobbies include reading, traveling, and F&O + Stock + Crypto + Forex Trading.";
      case "what motivates you?":
        return "I am motivated by challenging projects and opportunities for growth.";
      case "what are your career goals?":
        return "My career goals include becoming a senior software engineer and contributing to impactful projects.";
      default:
        return "I'm sorry, I didn't understand that question.";
    }
  }
  
  
  
  
  
  // Function to send a message when Enter key is pressed
  function sendMessageOnEnter(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }
  
  // Add event listener to input field
  var input = document.getElementById("chat-input");
  input.addEventListener("keydown", sendMessageOnEnter);
  
  
  
  function sendMessage() {
    var input = document.getElementById("chat-input");
    var message = input.value.trim().toLowerCase();
    var chatBody = document.getElementById("chat-body");
  
    if (message === "bye") {
      var sender = "You";
      var newMessage = document.createElement("div");
      newMessage.textContent = sender + ": " + message;
      chatBody.appendChild(newMessage);
      input.value = "";
  
      scrollChatToBottom();
  
      var botMessage = document.createElement("div");
      botMessage.className = "message tausif";
      botMessage.textContent = "Bye";
      chatBody.appendChild(botMessage);
      scrollChatToBottom();
  
      setTimeout(function () {
        var chatBox = document.getElementById("chat-box");
        chatBox.style.display = "none";
      }, 2000);
    } else if (message !== "") {
      var sender = "You";
      var newMessage = document.createElement("div");
      newMessage.textContent = sender + ": " + message;
      chatBody.appendChild(newMessage);
      input.value = "";
  
      scrollChatToBottom();
  
      if (isBasicQuestion(message)) {
        botReply(message);
      } else if (
        message.includes("resume") ||
        message.includes("download resume") ||
        message.includes("cv") ||
        message.includes("cover letter")
      ) {
        var botMessage = "Would you like to download my resume?";
        botReply(botMessage);
      } else if (message === "yes" || message === "yeah" || message === "sure") {
        var botMessage = "Resume downloaded in your device.";
        botReply(botMessage);
        downloadResume();
      } else {
        botReply("I'm sorry, I didn't understand that question.");
      }
    }
  }
  // Function to trigger the download of the resume
  function downloadResume() {
    // Replace 'resume.pdf' with the actual file name of your resume in the assets directory
    var resumeFilePath = "assets/resume.pdf";
  
    // Create a temporary anchor element to trigger the download
    var link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = "resume.pdf"; // Set the filename for the downloaded file
    link.click();
  }
  
  const chatButton = document.querySelector('.chat-button');
const chatBox = document.querySelector('.chat-box');

chatButton.addEventListener('click', () => {
  chatBox.style.display = 'block';
  chatButton.style.visibility = 'hidden';
});

document.querySelector('.close').addEventListener('click', () => {
  chatBox.style.display = 'none';
  chatButton.style.visibility = 'visible';
});
  // Function to scroll the chat box to the bottom
  function scrollChatToBottom() {
    var chatBody = document.getElementById("chat-body");
    chatBody.scrollTop = 0; // Scroll to the top instead of the bottom
  }
  
  
