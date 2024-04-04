class User{
    name;
    #password;
    email;
    constructor(name, password, email) {
        this.name = name;
        this.#password = password;
        this.email = email;
    }
}

const user1 = new User("Samandar", "12&*s", "samandar123@gmail.com");
const user2 = new User("Abbos", "343dge", "abbos123@gmail.com");
const user3 = new User("Davron", "124*&", "davron1@gmail.com");

console.log(user1);

console.log(user2);

console.log(user3);
