class User
{
    // Public Properties
    /**
     * Get function of first name
     *
     * @memberof User
     */
    get FirstName()
    {
        return this.m_firstName;
    }

    /**
     * Set function of first name
     *
     * @memberof User
     */
    set FirstName(firstName)
    {
        this.m_firstName = firstName;
    }

    /**
     * Get function of first name
     *
     * @memberof User
     */
    get LastName()
    {
        return this.m_lastName;
    }

    /**
     * Set function of first name
     *
     * @memberof User
     */
    set LastName(lastName)
    {
        this.m_lastName = lastName;
    }    

    /**
     * Get function of number
     *
     * @memberof User
     */
    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    /**
     * Set function of number
     *
     * @memberof User
     */
    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    /**
     * Get function of email
     *
     * @memberof User
     */
    get Password()
    {
        return this.m_password;
    }

    /**
     * Set function of email
     *
     * @memberof User
     */
    set Password(password)
    {
        this.m_password = password;
    }

    // Constructor
    constructor(firstName, lastName, emailAddress, password) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.EmailAddress = emailAddress;
        this.Password = password;
    }

    // Public Override
    /**
     * toString override that formats the user object info
     * @returns Formatted user info
     */
    toString()
    {
        return `User Registered:\nFirst Name:    ${this.FirstName}\nLast Name:     ${this.LastName}\nEmail Address: ${this.EmailAddress}\nPassword:      ${this.Password}`;
    }
}