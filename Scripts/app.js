/** app.js
 *  @authors    Katherine Bellman, Russelll Waring
 *  @since      2022.02.07
 *  @version    1
 *              JavaScript file for injecting behaviour into our website.
 */

class User {
  constructor(firstName, lastName, username, email, password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.email = email;
      this.password = password;
  }

  

    // Public Override
    /**
     * toString override that formats the user object info
     * @returns Formatted user info
     */
  toString()
  {
      return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nUser Name: ${this.username}\nEmail Address: ${this.email}\nPassword: ${this.password}`;
  }
}

// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    
    // Called when viewing the home page
    function DisplayHomePage()
    {
        // Name of button and id are same... this is a naming convention. Button is actually an 'html element'
        console.log("Home Page");
        
        
        //Displayed content
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        // Step 1 - get a reference to an entry point
        let MainDivContainer = document.getElementsByTagName("main")[0];  
        let MainDivHeading = document.getElementsByTagName("h1")[0];
        let HeroImage = document.getElementById("CodeHeroImage");

        // Step 2 - create an html element in memory
        let HeroParagraph = document.createElement("p");

        // Step 3 - configure new element
        MainDivContainer.setAttribute("id","MainDivContainer");
        MainDivHeading.setAttribute("id", "MainDivHeading;");
        HeroParagraph.setAttribute("id", "HeroParagraph");
        HeroParagraph.setAttribute("class", "mt-3");
        HeroParagraph.innerHTML = `This is the landing page for a website in development as part of a ongoing for the course WEBD6201.\nThe creators of this site include Katherine Bellman and Russell Waring, who both both enrolled in\n the Computer Programming and Analysis Program at Durham College. \n We were moulded into developers who put our clients needs first.\n Check out out software development services to get a taste of what we can do for you!\n`;


        // Step 4 - perform insertion
        HeroImage.after(HeroParagraph);

        //DocumentBodyInsert.appendChild(MainDivContainer);

    }

    // Called when viewing the projects page
    function DisplayProjectsPage()
    {
        console.log("Projects Page");

        let MainDivHeading = document.getElementsByTagName("h1")[0];
        MainDivHeading.textContent = "Our Projects";
        //console.log(MainDivHeading);

        // Step 2 - create html element
        let h6KB = document.getElementsByTagName("h6")[0];
        let paraKB = document.getElementsByTagName("p")[0];

        let h6RW = document.getElementsByTagName("h6")[1];
        let paraRW = document.getElementsByTagName("p")[1];

        let h6KB2 = document.getElementsByTagName("h6")[2];
        let paraKB2 = document.getElementsByTagName("p")[2];

        // Step 3 - configure elements
        h6KB.innerHTML = "K. Bellman";
        paraKB.innerHTML = "Cases By Region, NETD2202";

        h6RW.innerHTML = "R. Waring";
        paraRW.innerHTML = "In-class exercise 4, NETD2202";

        h6KB2.innerHTML = "K. Bellman";
        paraKB2.innerHTML = "Validation, NETD2202 final";

    }

    // Called when viewing the services page
    function DisplayServicesPage()
    {
        console.log("Services Page");
        
        let Header_Kat_Services = "Katherine Specializes in: ";    
        let Kat_Services = [
            {
                Service: "Web Design",
                // text:"",
            },
            {
                Service: "Divi Wordpress Development",
                // text:"",
            },
            {
                Service: "UI Design",
                // text:"",
            },
        ];


        let Header_Russel_Services = "Russell Specializes in: ";    
        let Russel_Services = [
            {
                Service: "System Development",
                //text: "",
            },
            {
                Service: "C# .Net Core Frameworks Development",
                //text: "",
            },
            {
                Service: "Proofreading Code",
                //text: "",
            },
        ];

        // Insertion point class for each name=> service heading 
        let serviceHeaderKB = document.getElementsByClassName("service-heading")[0];
        serviceHeaderKB.innerHTML = Header_Kat_Services;
        
        let serviceHeaderRW = document.getElementsByClassName("service-heading")[1];
        serviceHeaderRW.innerHTML = Header_Russel_Services;  

        
        // Insertion point class for Name of service => service-note
        let serviceKB0 = document.getElementsByClassName("service-note")[0];
        let serviceKB1 = document.getElementsByClassName("service-note")[1];
        let serviceKB2 = document.getElementsByClassName("service-note")[2];
        serviceKB0.innerHTML = Kat_Services[0].Service;
        serviceKB1.innerHTML = Kat_Services[1].Service;
        serviceKB2.innerHTML = Kat_Services[2].Service;

        let serviceRW0 = document.getElementsByClassName("service-note")[3];
        let serviceRW1 = document.getElementsByClassName("service-note")[4];
        let serviceRW2 = document.getElementsByClassName("service-note")[5];
        serviceRW0.innerHTML = Russel_Services[0].Service;
        serviceRW1.innerHTML = Russel_Services[1].Service;
        serviceRW2.innerHTML = Russel_Services[2].Service;
    }

    // Called when viewing the about page
    function DisplayAboutPage()
    {
        console.log("About Page");

        let Header_About_Header = "About Us";    
        let About_Cards_Data = [
            {
                Name: "Russell Waring",
                Github: "https://github.com/RussellWaring",
                blurb:"Greetings. I am a student of Durham College in Oshawa studying Computer Programming and Analysis. I have an Urban Forestry Technician Degree and broad working experience in many fields. Although I grew up in a small town, I have big dreams!",
                resume_link: "https://www.linkedin.com/in/russell-waring/",
            },
            {
                Name: "Katherine Bellman",
                Github: "https://github.com/Tsukiyomi-Inari",
                blurb: "I am Katherine Bellman, studying Computer Programming and Analysis at Durham College in Oshawa. As an Alumni of OCAD University, I apply creative solutions to computational problems and design attractive user interfaces through colour theory practices.",
                resume_link: "https://dconline-my.sharepoint.com/:b:/g/personal/katherine_bellman_dcmail_ca/EcraWZsK4R5Bo2UXGh91c8MBl_12pDZ66gjbi2QhUquLtg?e=KcHZhB", 
            },
        ];

        //Insert the title text
         let titleH1 = document.getElementsByTagName("h1")[0];
         titleH1.innerHTML = Header_About_Header;  

        document.getElementsByClassName("card-title")[0].innerHTML = About_Cards_Data[0].Name;
        //document.getElementsByClassName("card-github")[0].innerHTML = About_Cards_Data[0].Github;
        document.getElementsByClassName("card-text")[0].innerHTML = About_Cards_Data[0].blurb;
        let russell_resume = document.getElementsByClassName("card-button")[0]; 
        russell_resume.setAttribute("href", About_Cards_Data[0].resume_link);
        russell_resume.textContent = "Resume";

        console.log(russell_resume.getAttribute("href"));

        // Waring resume link
        let russell_button = document.getElementsByClassName("btn")[0];
        russell_button.addEventListener("click", function()
        {
            location.href = russell_resume.getAttribute("href");
        });

        document.getElementsByClassName("card-title")[1].innerHTML = About_Cards_Data[1].Name;
        //document.getElementsByClassName("card-github")[1].innerHTML = About_Cards_Data[1].Github;
        document.getElementsByClassName("card-text")[1].innerHTML = About_Cards_Data[1].blurb;
        let bellman_resume = document.getElementsByClassName("card-button")[1]; 
        bellman_resume.setAttribute("href", About_Cards_Data[0].resume_link);
        bellman_resume.textContent = "Resume";

        console.log(bellman_resume.getAttribute("href"));

        // Bellman resume link
        let bellman_button = document.getElementsByClassName("btn")[1];
        bellman_button.addEventListener("click", function()
        {
            location.href = bellman_resume.getAttribute("href");
        });

    }

    /**
     *
     *
     * @param {*} inputId
     * @param {*} regular_expression
     * @param {*} error_message
     */
    function ValidateInput(inputId, regular_expression, error_message)
    {
        let messageSpace = $("#ErrorMessage").hide();

        $("#" + inputId).on('blur', function()
        {
            let text_value = $(this).val();
            if(!regular_expression.test(text_value))
            {
                $(this).trigger('focus').trigger("select");
                messageSpace.addClass("alert alert-danger").text(error_message).show();
            }
            else
            {
                messageSpace.removeAttr("class").hide();
            }
        });
    }

    /**
     *
     *Function that executes the main validation field
     */
    function ContactFormValidation()
    {
        ValidateInput("fullName", /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,})((\s|,|-)([A-Z][a-z]{1,}))*(\s|,|-)([A-Z][a-z]{1,})$/, "Please enter a valid full name with both first and last name begining with a capital letter.");
        ValidateInput("phoneNumber", /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid phone number. Example (416) 555-5555");
        ValidateInput("email", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid E-mail Address.")
    }

    // function changeNavLogin()
    // {
    //     console.log('name injection');
    //     let navBarTarget = document.body.getElementsByClassName("nav-item")[1];
    //     let insertText  = document.createTextNode('<a class="nav-link" href="./products.html"><i class="fas fa-th"></i> Projects </a>');
    //     navBarTarget.innerHTML = insertText.textContent;
    //     console.log(navBarTarget);
    // }

    function AddUserName(fullName)
    {
        $("li:nth-of-type(6)").after(`
        <li class="nav-item">
            <a class="nav-link">${fullName}</a>
        </li>
        `);
    }


    function DisplayLoginPage()
    {
        console.log("Login Page");
        // id for login button login_submit

         let login_submit = document.getElementById("login_submit");

         $("h1").replaceWith(`<h1 class="mb-3">Login Page<h1>`);

         // Listens for submit button to click
         login_submit.addEventListener("click", function(event)
         {
             // Prevents default behaviour
             event.preventDefault();
             
             // Writes contact info to console
            //let userName = $("#login_userID").innerHTML();

            let userName = document.getElementById("login_userID").value;

            console.log(userName);

            AddUserName(userName);
        });        
    }


    function RegisterFormValidation()
    {
        ValidateInput("firstName", /^([A-Z][a-z]{1,})$/, "User first name must begin with a capital, and may only be one name in length.");
        ValidateInput("lastName", /^([A-Z][a-z]{1,})$/, "User last name must begin with a capital, and may only be one name in length.");
        ValidateInput("regPass", /^(.{6,})$/, "Password must be 6 characters in length");
        ValidateInput("regPass2", /^(.{6,})$/, "Password must be 6 characters in length");
        // if(!(document.getElementById("regPass").value == document.getElementById("regPass2")))
        // {
        //     let messageSpace = $("#ErrorMessage").hide();
        //     //alert("Password must be the same");
        //     document.getElementById("regPass2").focus().trigger("select");            
            
        //     messageSpace.addClass("alert alert-danger").text(`Password must be the same!!!!`).show();
        // }
        // else
        // {
        //     messageSpace.removeAttr("class").hide();
        // }      
        
        ValidateInput("email", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid E-mail Address.")
    };


    function DisplayRegisterPage()
    {
        console.log("Register Page");

        $("h1").replaceWith(`<h1 class="mb-3">Registration Page<h1>`);

        RegisterFormValidation();

        let input_register = document.getElementById("input_register");

        input_register.addEventListener("click", function(event)
        {
            // Prevents default behaviour
            event.preventDefault();
            
            // Writes contact info to console
            //let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
            //console.log(contact.toString() + "\nMessage:        " + document.getElementById("message").value);

        }); 

        // Prevents default behaviour
        //event.preventDefault();

        //Utilizes the User class to create new instances of "User"
        //let registerNew = new User(firstName.value, lastName.value, username.value, email.value, password.value);

        // let firstName = document.getElementById("firstName").value;
        // let lastName = document.getElementById("lastName").value;
        // let emailAddress = document.getElementById("emailAddress").value;
        // let regPass = document.getElementById("regPass").value;
        // let regPass2 = document.getElementById("regPass2").value;
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");            

        ContactFormValidation();

        let input_submit = document.getElementById("input_submit");

        // Listens for submit button to click
        input_submit.addEventListener("click", function(event)
        {
            // Prevents default behaviour
            event.preventDefault();
            
            // Writes contact info to console
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
            console.log(contact.toString() + "\nMessage:        " + document.getElementById("message").value);

            // Timer triggered when form submit is clicked
            setTimeout(function()
            {
                window.location.href = "index.html";              
            }, 3000);

        });        
            
    }

 
    // Start function called upon the website loading
    function Start() 
    {
        console.log("App Started!");


        // Change the navigation text
        changeNav();
        // Insert human resources tab in nav bar between 'About Us' and 'Contact Us'
        insertHumanResources();

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProjectsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
        }        
    }

    
    function changeNav()
    {
        console.log('nav: "Products" changed to "Projects"');
        let navBarTarget = document.body.getElementsByClassName("nav-item")[1];
        let insertText  = document.createTextNode('<a class="nav-link" href="./products.html"><i class="fas fa-th"></i> Projects </a>');
        navBarTarget.innerHTML = insertText.textContent;
        console.log(navBarTarget);
    }

    // Function for inserting nav bar link between other elements of nav bar
    function insertHumanResources()
    {
        let navBarTarget = document.body.getElementsByClassName("nav-item")[4];
        let navBarAppend = document.createElement("li");
        navBarAppend.setAttribute("class", "nav-item");

        let humanResources = `
            <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-user-tie"></i> Human Resources</a>
            </li> 
        `;
        navBarAppend.innerHTML = humanResources;
        navBarTarget.before(navBarAppend);
        console.log(navBarTarget);
    };

    // Event listener for hooking into the Start function
    window.addEventListener("load", Start); 


})(); 
