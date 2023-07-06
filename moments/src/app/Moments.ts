export interface Moment {
    id?: number,
    title:string,
    description:string,
    image:String,
    created_at?:string,
    update_at?:string,
    coments?:[{text:string;username:string}]
}