
export type contactInfoType = {
    contactInfo: {
        name: string,
        email: string,
        phoneNumber: number
    }
}

export type contactTypes = {
    name: string,
    email: string,
    phoneNumber: number 
}

export type OnChangeEventType = {
    target: { value: string, name: string }
}