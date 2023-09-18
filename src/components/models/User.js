

export class User {
    displayName;
    email;
    photoURL;
    uid;
    gender;
    age;

    constructor(user) {
        this.displayName = user.displayName;
        this.email = user.email;
        this.photoURL = user.photoURL;
        this.uid = user.uid;
        this.gender = user.gender;
        this.age = user.age;
    }
}

