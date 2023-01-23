export interface Bot { 
    _id?: string;
    name: string;
    type: string;
    questions?: [],
    status: string;
    active?: boolean;
    createdAt?: Date;
}