export class Welcome {
    private heading: string = 'Welcome to the Aurelia Navigation App!';
    private firstName: string = 'John';
    private lastName: string = 'Doe';
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    submit() {
        alert(`Welcome, ${this.fullName}!`);
    }
}
