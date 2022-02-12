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
<<<<<<< HEAD
        
        let HeroParagraph = '<p id="HeroParagraph" class="mt-3">'+ TextHero +'</p>';
        let TextHero = 'As  students of Durham College\'s Computer Programming and Analysis Program. \n We were moulded into developers who put our clients needs first.\n Check out out software development services to get a taste of what we can do for you.\n';
        let CodeHeroImage = '<img id="CodeHeroImage" class="img-fluid" src="../Assets/hero_image_code.png"/>'


        //Get access to div container for insertion
        //let DocumentBodyInsert = document.body;
        let MainDivContainer = document.getElementsByTagName("main")[0];
        MainDivContainer.setAttribute("id","MainDivContainer");
      
=======
>>>>>>> 014c7639583107cf09ed6aba2060670a6078633f

        // Step 1 - get a reference to an entry point
        let MainDivContainer = document.getElementsByTagName("main")[0];        

        // Step 2 - create an html element in memory
        let HeroImage = document.createElement("img");
        let HeroParagraph = document.createElement("p");

        // Step 3 - configure new element
        MainDivContainer.setAttribute("id","MainDivContainer");
        HeroParagraph.setAttribute("id", "HeroParagraph");
        HeroParagraph.setAttribute("class", "mt-3");
        HeroParagraph.innerHTML = `As  students of Durham College\'s Computer Programming and Analysis Program. \n We were moulded into developers who put our clients needs first.\n Check out out software development services to get a taste of what we can do for you.\n`;
        HeroImage.setAttribute("id", "CodeHeroImage");
        HeroImage.setAttribute("src", "../Assets/hero_image_code.png");

        // Step 4 - perform insertion
        MainDivContainer.appendChild(HeroImage);
        MainDivContainer.appendChild(HeroParagraph);
        console.log(HeroParagraph);

        //DocumentBodyInsert.appendChild(MainDivContainer);

    }

    function DisplayProjectsPage()
    {
        console.log("Projects Page");

        let Header_Kat_Services = "Katherine Specializes in: ";    
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
        ];
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
        
        let Header_Kat_Services = "Katherine Specializes in: ";    
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
        ];


        let Header_Russel_Services = "Russel Specializes in: ";    
        let Russel_Services = [
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
        ];
    }

    function DisplayAboutPage()
    {
        console.log("About Page");

        let Header_About_Header = "";    
        let About_Cards_Data = [
            {
                Name: "Katherine Bellman",
                Student_number: "100325825",
                image :"../Assets/Katherine_Bellman.png",
                resume_link: "https://dconline-my.sharepoint.com/:b:/g/personal/katherine_bellman_dcmail_ca/EcraWZsK4R5Bo2UXGh91c8MBl_12pDZ66gjbi2QhUquLtg?e=KcHZhB", //make sure to use target="_blank" to open in new tab
            },
            {
                Name: "Web Design",
                Student_number: "",
                image :"",
                resume_link: "",
            },
        ];
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
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
            case "Projects":
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