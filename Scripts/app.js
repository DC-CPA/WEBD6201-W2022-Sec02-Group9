/** app.js
 *  @authors    Katherine Bellman, Russelll Waring
 *  @since      2022.02.07
 *  @version    1
 *              JavaScript file for injecting behaviour into our website.
 */
// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    

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

        // Step 2 - create an html element in memory
        let HeroImage = document.createElement("img");
        let HeroParagraph = document.createElement("p");

        // Step 3 - configure new element
        MainDivContainer.setAttribute("id","MainDivContainer");
        MainDivHeading.setAttribute("id", "MainDivHeading;")
        HeroParagraph.setAttribute("id", "HeroParagraph");
        HeroParagraph.setAttribute("class", "mt-3");
        HeroParagraph.innerHTML = `This is the landing page for a website in development as part of a ongoing for the course WEBD6201.\nThe creators of this site include Katherine Bellman and Russell Waring, who both both enrolled in\n the Computer Programming and Analysis Program at Durham College. \n We were moulded into developers who put our clients needs first.\n Check out out software development services to get a taste of what we can do for you!\n`;
        HeroImage.setAttribute("id", "CodeHeroImage");
        HeroImage.setAttribute("src", "../Assets/hero_image_code.png");

        // Step 4 - perform insertion
        MainDivHeading.after(HeroImage);
        HeroImage.after(HeroParagraph);
        console.log(HeroParagraph);

        //DocumentBodyInsert.appendChild(MainDivContainer);

    }

    function DisplayProjectsPage()
    {
        console.log("Projects Page");

        let MainDivHeading = document.getElementsByTagName("h1")[0];
        MainDivHeading.textContent = "Our Projects";
        //console.log(MainDivHeading);

        // Step 2 - create html element
        let h6KB = document.getElementsByTagName("h6")[0];
        let paraKB = document.getElementsByTagName("p")[0];
        let imgKB = document.getElementsByTagName("img")[0];
        let h6RW = document.getElementsByTagName("h6")[1];
        let paraRW = document.getElementsByTagName("p")[1];
        let imgRW = document.getElementsByTagName("img")[1];
        let h6KB2 = document.getElementsByTagName("h6")[2];
        let paraKB2 = document.getElementsByTagName("p")[2];
        let imgKB2 = document.getElementsByTagName("img")[2];

        // Step 3 - configure elements
        h6KB.innerHTML = "K. Bellman";
        paraKB.innerHTML = "Cases By Region, NETD2202";
        imgKB.setAttribute("src", "../Assets/NETD_2202--FINAL- averageWeeklyCasesByRegion.png");
        imgKB.setAttribute("alt", "Cases By Region");
        imgKB.setAttribute("style", "width:50%");
        h6RW.innerHTML = "R. Waring";
        paraRW.innerHTML = "In-class exercise 4, NETD2202";
        imgRW.setAttribute("src", "../Assets/netd2202_ice4_waring.PNG");
        imgRW.setAttribute("alt", "Joes Coffee");
        imgRW.setAttribute("style", "width:50%");
        h6KB2.innerHTML = "K. Bellman";
        paraKB2.innerHTML = "Validation, NETD2202 final";
        imgKB2.setAttribute("src", "../Assets/NETD_2202--FINAL- validation02.png");
        imgKB2.setAttribute("alt", "Validation");
        imgKB2.setAttribute("style", "width:50%");

/*         let Header_Kat_Services = "Katherine Specializes in: ";    
        let Kat_Services = [
            {
                Service: "Web Design",
                pic: "",
                text:"",
            },
            {
                Service: "Divi Wordpress Development",
                pic: "",
                text:"",
            },
            {
                Service: "UI Design",
                pic: "",
                text:"",
            },
        ]; */
    }

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


        let Header_Russel_Services = "Russel Specializes in: ";    
        let Russel_Services = [
            {
                Service: "System Development",
                // text:"",
            },
            {
                Service: "C# .Net Core Frameworks Development",
                // text:"",
            },
            {
                Service: "",
                // text:"",
            },
        ];

        // Insertion point class for each name=> service heading  

        // Insertion point class for Name of service => service-note

    }

    function DisplayAboutPage()
    {
        console.log("About Page");

        let Header_About_Header = "About Us";    
        let About_Cards_Data = [
            {
                Name: "Katherine Bellman",
                Github: "https://github.com/Tsukiyomi-Inari",
                blurb: "I am Katherine Bellman, studying Computer Programming and Analysis at Durham College in Oshawa. As an Alumni of OCAD University, I apply creative solutions to computational problems and design attractive user interfaces through colour theory practices.\n	Continuous refinement has aided in organization and time management, being my most vital asset within a team. I am looking for a position in web development or system development to contribute to our community.",
                resume_link: "https://dconline-my.sharepoint.com/:b:/g/personal/katherine_bellman_dcmail_ca/EcraWZsK4R5Bo2UXGh91c8MBl_12pDZ66gjbi2QhUquLtg?e=KcHZhB", 
            },
            {
                Name: "Russell Waring",
                Github: "https://github.com/RussellWaring",
                blurb:"",
                resume_link: "https://www.linkedin.com/in/russell-waring-476372a4/?originalSubdomain=ca",
            },
        ];

        //Insert the title text
          Header_About_Header = document.getElementsByTagName("h1").textContent;

        // Get the entry location for elements for cards
        let insertTitle = document.getElementsByClassName("card-title");
        let insertText = document.getElementsByClassName("card-text");
        let insertGitHubLink = document.getElementsByClassName("card-github");
        let insertButtonLink = document.getElementsByClassName("card-button");

        
            
    }
        
        function DisplayContactPage()
        {
            console.log("Contact Page");
            
            
            let buttonSubmit = document.getElementById("input_submit");
            let buttonClear = document.getElementById("input_clear");
            
            

            function SendToConsole()
            { 
                setInterval(document.querySelector('form').addEventListener(buttonSubmit.onsubmit, e => {
                    
                    let formInput = new FormData([e.target]);
                    console.log(formInput);
                }), 3000);
                
                
            }

            
        }
 
    // named function option
    function Start() 
    {
        console.log("App Started!");

         //pop in the favicon
        AddToHead();
        //Change the navagation text
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
        }        
    }

    // Creates, sets  favicon to 
    function AddToHead()
    {
        console.log("favicon appended");
        // website favicon attribute setting
        $('head').append('<link rel="shortcut icon" type="image/svg" href="../Assets/site_icon_fas_user-secret.svg">');
    }

    function changeNav()
    {
        console.log('nav: "Products" changed to "Projects"');
        let navBarTarget = document.body.getElementsByClassName("nav-item")[1];
        let insertText  = document.createTextNode('<a class="nav-link" href="./products.html"><i class="fas fa-th"></i> Project </a>');
        navBarTarget.innerHTML = insertText.textContent;
        console.log(navBarTarget);
    }

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