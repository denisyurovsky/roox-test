export interface User {
    id: number
    email: string
    name: string
    phone: string
    username: string
    website: string
    address: {
        street: string
        city: string
        suite: string
        zipcode: string
    }
    company: {
        bs: string
        catchPhrase: string
        name: string
    }
}