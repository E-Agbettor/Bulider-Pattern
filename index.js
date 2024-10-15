//Step 1: Create the User Object (Product)

class User {
    constructor(name, email, password, status, age) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
        this.age = age;
    }

    //A method that prints user info
    getInfo() {
        return `User: ${this.name}, Email: ${this.email}, Password: ${this.password}, Status: ${this.status}, Age: ${this.age}`;
    }
}


//Step 2: Create the UserBuilder (Builder)
//This will be responsible for constructing the User object step by step.

class UserBuilder {
    constructor() {
        // Initialize with default or undefined values
        this.name = null;
        this.email = null;
        this.password = null;
        this.status = 'pending'; // Default status
        this.age = null;
    }

    // Methods to set various properties, returning this for method chaining
    setName(name) {
        this.name = name;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setPassword(password) {
        this.password = password; // You could hash the password here
        return this;
    }

    setStatus(status) {
        this.status = status;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    // The build method to construct the final User object
    build() {
        return new User(this.name, this.email, this.password, this.status, this.age);
    }
}


//Step 3: Using the UserBuilder
// Now, we can use the builder to create a User object step by step.

const user = new UserBuilder()
    .setName('Kwame Saye')
    .setEmail('kwame.saye@example.com')
    // .setPassword('securepassword')
    // .setStatus('active')
    .setAge(20)
    .build();

console.log(user.getInfo()); // Output: User: John Doe, Email: john.doe@example.com, Status: active, Age: 30

