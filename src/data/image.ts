import {random} from "./util.ts";

export const picsumUrl = (width:number, height:number):string => `https://picsum.photos/${width}/${height}`
export const randomImage = (w:number=1000, h:number=800, delta:number=200):string => picsumUrl(random(w, w+delta), random(h, h+delta))
export const randomAvatar = () => {
    const size = random(200,400)
    return picsumUrl(size, size)
}