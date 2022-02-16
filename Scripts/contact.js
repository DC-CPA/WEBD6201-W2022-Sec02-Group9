/** contact.js
 *  @authors    Katherine Bellman, Russell Waring
 *  @since      2022.02.12
 *  @version    1
 *              JavaScript file for collecting and outputting contact data to the console.
 */
 class Contact
 {
     // Public Properties
     /**
      * Get function of name
      *
      * @memberof Contact
      */
     get FullName()
     {
         return this.m_fullName;
     }
 
     /**
      * Set function of name
      *
      * @memberof Contact
      */
     set FullName(fullName)
     {
         this.m_fullName = fullName;
     }
 
     /**
      * Get function of number
      *
      * @memberof Contact
      */
     get ContactNumber()
     {
         return this.m_contactNumber;
     }
 
     /**
      * Set function of number
      *
      * @memberof Contact
      */
     set ContactNumber(contactNumber)
     {
         this.m_contactNumber = contactNumber;
     }
 
     /**
      * Get function of email
      *
      * @memberof Contact
      */
     get EmailAddress()
     {
         return this.m_emailAddress;
     }
 
     /**
      * Set function of email
      *
      * @memberof Contact
      */
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