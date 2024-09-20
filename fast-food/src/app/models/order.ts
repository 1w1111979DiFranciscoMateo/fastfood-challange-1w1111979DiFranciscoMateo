export interface Order{
    number : number;
    name : string;
    description : string;
    date : Date;
    isCooking? : boolean;
}