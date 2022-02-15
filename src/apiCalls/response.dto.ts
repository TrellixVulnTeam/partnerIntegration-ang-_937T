import { encrypt_decrypt } from "./encryption";

export const encryption=new encrypt_decrypt();
export class responseDto {
    sealValues: any;
    body: any;
    constructor(){}
    Init(data: any){
       let body = data;
       let res = body.split('|');
    this.sealValues=res[1];
    this.body=JSON.parse(encryption.decryptionData(res[0]));
    }

}