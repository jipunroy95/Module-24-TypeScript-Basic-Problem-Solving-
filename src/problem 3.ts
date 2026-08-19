// Social Media Profile Formatter
interface User {
    name: string;
    age: number;
    city: string;
}

function formatUserProfile(user: User): string {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
}