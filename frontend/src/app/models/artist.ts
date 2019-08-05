export class Artist {
    constructor(id="",name="",mainskill="",ubi=""){
        this._id = id;
        this.name = name;
        this.mainskill = mainskill;
        this.ubi=ubi;
    }
    _id: string;
    name: string;
    mainskill: string;
    ubi: string;
}
