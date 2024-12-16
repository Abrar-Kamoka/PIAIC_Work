
export type contactInfoType = {
    contactInfo: {
        name: string,
        email: string,
        phoneNumber: number,
        username: string,
        description:string,
        gender: string[],
        password: string,
        profession: string,
        
    }
}

export type contactTypes = {
    name: string,
    email: string,
    phoneNumber: number,
    username: string,
    description:string,
    gender: string[],
    password: string,
    profession:'' | 'Developer' | 'Designer' | 'Teacher' | 'Doctor'
    
}

export type OnChangeEventType = {
    target: { type: string, value: string, name: string, checked?: boolean }
}