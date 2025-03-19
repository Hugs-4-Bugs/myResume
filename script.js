
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
  var basicQuestions = ["hi", "hello", "good morning", "good afternoon", "good evening", "thank you","education","skill","skills","experience","project","projects", "name", "from","where are you from", "tell me about yourself", "how are you", "who are you", "tell me something about prabhat", "who is Prabhat", "who is prabhat", "tell me more about prabhat", "tell me more about Prabhat", "tell me something about Prabhat"];
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
    case  "where are you from":
    case  "from":
          return "I am from Sasaram Bihar.";
    case  "tell me about yourself":
    case  "who are you":
          return "I am an AI assistant created by Prabhat Kumar. How can i make you smile today!";
          return "I'm Prabhat Kumar, a 2023 college graduate with Bachelor degree in Computer Science Engineering. I have strong skills in Core Java, SQL, GitHub, Spring Boot, Hibernate, Data Structures, OOP, Exception Handling, MySQL, Angular, and AWS EC2. Proficient with tools like Git, Docker, Jira, and Postman. I've worked on projects in cryptocurrency prediction and hospital management systems, and interned at CodeSpeedy Technology, enhancing my Spring Boot development skills. I'm adaptable, positive, and ready to contribute to your company.";
    case  "how are you":
          return "I am  doing great, thank you. How are you?";
    case "who is Prabhat":
    case "who is prabhat":
      return "Prabhat Kumar is a 2023 college graduate, a Professional Software Engineer and Trader with 4 yr. of experience.";
    case "tell me something about prabhat":
    case "tell me more about prabhat":
    case "tell me something about Prabhat":
    case "tell me more about Prabhat":
          return "Prabhat Kumar is a 2023 college graduate with Bachelor degree in Computer Science Engineering, with a strong foundation in Core Java, SQL, Spring Boot, and Hibernate. I've worked on notable projects like Employee Info, CryptoCurrency Price Prediction, Hospital Management Applications, and Bitcoin Mining App. Additionally, I'm skilled in Data Structures, Object-Oriented Programming, MySQL, AWS EC2, Angular, the Collection framework, Exception Handling, and Debugging.";
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
      return "I have worked on projects like Employee Info, CryptoCurrency Price Prediction, Hospital-Managment-Applications, Bitcoin-Mining-App, Blog_Application, AI-Text-Summarizer-Application, Angular-CRUD-Application, Bitcoin-Mining-Application, MultiFileUpload-Using-Spring-Boot-Application, Flight_Reservation_Project, Hotel-Management-project, Angular-weather-component, Angular-temperatureConverter, BMI-Calculator, BUDDY-A-face-recognition-based-voice-assistant etc.";
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







document.addEventListener("DOMContentLoaded", function () {
  const typing1 = document.getElementById('typing1');
  const typing2 = document.getElementById('typing2');

  const text1 = "Java Developer";
  // const text2 = "and the Founder of QuantumCrypto, NebulaFusion, and QuantumFusion Solutions";
  // const text2 = "and the Founder of QuantumFusion Solutions, and NebulaFusion";
    const text2 = "and an Intraday Futures & Options, Crypto, and Forex trader with 4+ years of experience";

  let index1 = 0;
  let index2 = 0;
  let typing1Active = true; // Flag to determine which text is being typed
  // const companyNames = ["QuantumFusion Solutions", "NebulaFusion", "QuantumFusion Solutions"];
  const companyNames = ["Futures & Options", "Crypto", "Forex"];
  const companyColors = ["#333333", "#333333", "#333333"]; // Different colors for each company
  const companyLinks = [
    "https://www.quantumfusionsolutions.com",  // Replace with your link
    "https://www.nebulafusion.com",  // Replace with your link
    "https://www.quantumfusionsolutions.com"  // Replace with your link
  ];

  function typeWriter(element, text, index, speed, callback) {
      if (index < text.length) {
          let char = text.charAt(index);
          let highlight = '';

          // Check if we're starting to type a company name
          for (let i = 0; i < companyNames.length; i++) {
              if (text.slice(index).startsWith(companyNames[i])) {
                  // Highlight the company name immediately
                  highlight = `<span class="highlight" style="color: ${companyColors[i]}; font-weight: bold;">${companyNames[i]}</span>`;
                  // highlight = `<a href="${companyLinks[i]}" target="_blank" style="color: inherit; text-decoration: none; font-weight: bold;">${companyNames[i]}</a>`;
                  // Insert the highlighted text and skip the company name's length
                  element.innerHTML += highlight;
                  index += companyNames[i].length - 1; // Skip over the company name
                  break;
              }
          }

          // If we're not in the middle of a company name, just add the character
          if (!highlight) {
              element.innerHTML += char;
          }

          setTimeout(function() {
              typeWriter(element, text, index + 1, speed, callback);
          }, speed);
      } else {
          callback();  // Callback when typing is done
      }
  }

  function startTyping() {
      // First, type "Java Developer"
      if (typing1Active) {
          typing1.innerHTML = '';  // Clear any previous content
          // typeWriter(typing1, text1, 0, 100, function() {
          typeWriter(typing1, text1, 0, 80, function() {
              // After typing "Java Developer", type the second part in the next line
              typing1Active = false; // Switch to the second text
              startTyping(); // Call the function again to start typing the second text
          });
      } else {
          // Then, type "and the Founder of QuantumCrypto, NebulaFusion, and QuantumFusion Solutions"
          typing2.innerHTML = '';  // Clear any previous content
          // typeWriter(typing2, text2, 0, 100, function() {
          typeWriter(typing2, text2, 0, 80, function() {
              // After typing is done, pause for 3-4 seconds before restarting
              setTimeout(function() {
                  typing1.innerHTML = ''; // Clear the first text
                  typing2.innerHTML = ''; // Clear the second text
                  typing1Active = true; // Switch back to the first text
                  startTyping(); // Call the function again to start typing the first text
              }, 4000); // Delay before starting the next cycle (4 seconds)
          });
      }
  }

  startTyping();  // Start the typing process
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






// read more and read less for right column with %age skills bar
document.getElementById("toggle-skills").addEventListener("click", function(event) {
  event.preventDefault();
  var extraSkills = document.getElementById("extraSkills");
  if (extraSkills.style.display === "none") {
      extraSkills.style.display = "block";
      this.textContent = "Read less";
  } else {
      extraSkills.style.display = "none";
      this.textContent = "Read more";
  }
});

// read more and read less for left column with text
document.getElementById("toggle-text-left").addEventListener("click", function(event) {
  event.preventDefault();
  var moreText = document.getElementById("more-text-left");
  if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      this.textContent = "Read less";
  } else {
      moreText.style.display = "none";
      this.textContent = "Read more";
  }
});





// Set up the Intersection Observer for both elements
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // Apply the animation only when the element is visible in the viewport
          entry.target.style.animation = 'slideFadeInLeft 1.5s ease-out forwards';
      }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

const h1 = document.querySelector('.Resume h1');
const p = document.querySelector('.Resume p');

// Observe the elements
observer.observe(h1);
observer.observe(p);













// Blog section
document.addEventListener("DOMContentLoaded", function () {
  const blogButton = document.getElementById("open-blog-board");
  const blogBoard = document.getElementById("blog-board");
  const closeBoard = document.querySelector(".close-board");

  // Blog Categories & Subcategories with Links
  const categories = {
      "technical": {
          "Java": [
              { title: "Core Java", link: "https://example.com/core-java" },
              { title: "Java 8", link: "https://example.com/java-8" },
              { title: "Collections", link: "https://www.geeksforgeeks.org/collections-in-java-2/" },
              { title: "Design Pattern", link: "https://www.geeksforgeeks.org/software-design-patterns/" }
          ],
          "ML": [
              { title: "AI", link: "https://example.com/ai" },
              { title: "Reinforcement Learning", link: "https://example.com/reinforcement-learning" }
          ],
          "Python": [
              { title: "Django", link: "https://example.com/django" },
              { title: "Flask", link: "https://example.com/flask" }
          ]
      },
      "nontechnical": {
          "Writing": [
              { title: "Self-Improvement", link: "https://example.com/self-improvement" },
              { title: "Deep Thinking", link: "https://example.com/deep-thinking" }
          ],
          "Research": [
              { title: "AI Innovations", link: "https://example.com/ai-innovations" },
              { title: "Trading Strategies", link: "https://example.com/trading-strategies" }
          ]
      },
      "books": {
          "Trading": [
              { title: "Market Psychology", link: "https://example.com/market-psychology-book" },
              { title: "Stock Market Strategies", link: "https://example.com/stock-market-strategies-book" }
          ],
          "Personal Growth": [
              { title: "Atomic Habits", link: "https://example.com/atomic-habits" },
              { title: "The Power of Now", link: "https://example.com/the-power-of-now" }
          ]
      }
  };

  // Open blog board
  if (blogButton) {
      blogButton.addEventListener("click", function (event) {
          event.preventDefault();
          blogBoard.style.display = "flex";
      });
  }

  // Close blog board
  closeBoard.addEventListener("click", function () {
      blogBoard.style.display = "none";
  });

  // Toggle category expand/collapse
  document.querySelectorAll(".category").forEach(category => {
      category.addEventListener("click", function () {
          const selectedCategory = this.getAttribute("data-category");

          // Remove existing expanded state
          if (this.classList.contains("expanded")) {
              this.classList.remove("expanded");
              this.nextElementSibling?.remove();
              return;
          }

          // Collapse other expanded categories
          document.querySelectorAll(".category.expanded").forEach(expandedCategory => {
              expandedCategory.classList.remove("expanded");
              expandedCategory.nextElementSibling?.remove();
          });

          this.classList.add("expanded");
          const subList = document.createElement("ul");
          subList.classList.add("subcategories");

          if (categories[selectedCategory]) {
              for (let sub in categories[selectedCategory]) {
                  let subItem = document.createElement("li");
                  subItem.classList.add("subcategory");
                  subItem.innerText = sub;
                  subItem.dataset.category = selectedCategory;
                  subItem.dataset.subcategory = sub;
                  subList.appendChild(subItem);
              }
          } else {
              console.error(`Category '${selectedCategory}' not found!`);
          }

          this.after(subList);
      });
  });

  // Toggle subcategory expand/collapse
  document.addEventListener("click", function (e) {
      if (e.target.classList.contains("subcategory")) {
          const selectedCategory = e.target.getAttribute("data-category");
          const selectedSubcategory = e.target.getAttribute("data-subcategory");

          // Remove existing expanded state
          if (e.target.classList.contains("expanded")) {
              e.target.classList.remove("expanded");
              e.target.nextElementSibling?.remove();
              return;
          }

          e.target.classList.add("expanded");
          const subList = document.createElement("ul");
          subList.classList.add("blog-list");

          if (categories[selectedCategory] && categories[selectedCategory][selectedSubcategory]) {
              categories[selectedCategory][selectedSubcategory].forEach(blog => {
                  let blogItem = document.createElement("li");
                  blogItem.classList.add("blog-item");
                  blogItem.innerHTML = `<a href="${blog.link}" target="_blank" class="open-source">${blog.title}</a>`;
                  subList.appendChild(blogItem);
              });
          } else {
              console.error(`Subcategory '${selectedSubcategory}' not found in category '${selectedCategory}'!`);
          }

          e.target.after(subList);
      }
  });
});















// warning for mobile users
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup-container");

  if (window.innerWidth <= 768) { // Check if mobile
      popup.style.display = "flex"; // Show popup

      setTimeout(() => {
          popup.style.transition = "opacity 1s ease"; // Smooth fade-out
          popup.style.opacity = "0";

          setTimeout(() => {
              popup.style.display = "none"; // Hide completely after fade-out
          }, 1000);
      }, 5000); // Show for 5 seconds before fading out
  }
});
