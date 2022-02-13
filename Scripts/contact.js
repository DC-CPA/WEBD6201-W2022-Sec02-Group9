/** contact.js
 *  @authors    Katherine Bellman, Russell Waring
 *  @since      2022.02.12
 *  @version    1
 *              JavaScript file for collecting and outputting contact data to the console.
 */
 class Contact
 {
     // Public Properties
     get FullName()
     {
         return this.m_fullName;
     }
 
     set FullName(fullName)
     {
         this.m_fullName = fullName;
     }
 
     get ContactNumber()
     {
         return this.m_contactNumber;
     }
 
     set ContactNumber(contactNumber)
     {
         this.m_contactNumber = contactNumber;
     }
 
     get EmailAddress()
     {
         return this.m_emailAddress;
     }
 
     set EmailAddress(emailAddress)
     {
         this.m_emailAddress = emailAddress;
     }
 
     // Constructor
     constructor(fullName, contactNumber, emailAddress)
     {
         this.FullName = fullName;
         this.ContactNumber = contactNumber;
         this.EmailAddress = emailAddress;
     }
 
     // Public Override
     /**
      * toString override that formats the contact object info
      * @returns Formatted contact info
      */
     toString()
     {
         return `Full Name:      ${this.FullName}\nContact Number: ${this.ContactNumber}\nEmail Address:  ${this.EmailAddress}`;
     }
 }