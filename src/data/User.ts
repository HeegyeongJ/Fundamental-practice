import {randomEmail, randomJobTitle, randomName, randomUUID} from "./chance.ts";
import {randomAvatar} from "./image.ts";

export type IUser = {
    uuid:string;
    name:string
    jobTitle:string
    email: string
    avatar:string
}

export const makeUser = (uuid:string, name:string, jobTitle:string, email:string, avatar:string):IUser => ({uuid, name, jobTitle, email,avatar})
export const makeRandomUser = ():IUser => makeUser(randomUUID(), randomName(), randomJobTitle(), randomEmail(), randomAvatar())