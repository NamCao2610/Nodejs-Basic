export class Students{
    constructor(
        public username: string,
        public password: string,
        public fullname: string,
        public email: string,
        public gender: boolean,
        public birthday: Date,
        public schoolfee: string,
        public marks: number
    ){}
}