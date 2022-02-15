import * as CryptoJS from 'crypto-js';


export class encrypt_decrypt {
    IVvalue: any = '1234567887654321';
    SecretKey: any = 'B0L7iJ2sytuz4iOM2DpK06pkHdhZEV8t';
    encryptedata: any;
    decrypteddata: any;
    constructor(){


    }
    encryptdata(data?: any):void {

        let _key = CryptoJS.enc.Utf8.parse(this.SecretKey);

        let _iv = CryptoJS.enc.Utf8.parse(this.IVvalue);

        let encrypted = CryptoJS.AES.encrypt(

            JSON.stringify(data),  _key, {

            keySize: 32,

            iv:_iv

            // mode: CryptoJS.mode.ECB,

            // padding: CryptoJS.pad.Pkcs7

        });

        this.encryptedata = encrypted.toString();

        return  this.encryptedata

    }
hashenc( data?:any):void{ let hashbyte=CryptoJS.enc.Utf8.parse(data+this.SecretKey);let MD5:any=CryptoJS.MD5(hashbyte).toString();console.log(hashbyte,"md5",MD5);
return MD5

}


    // // encryptdata(data?: any) {
    // //    // let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    // //    // let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    // //     let encrypted = CryptoJS.AES.encrypt(
    // //         JSON.stringify(data), CryptoJS.enc.Utf8.parse(this.SecretKey), {
    // //         keySize: 18,
    // //         iv:CryptoJS.enc.Utf8.parse(this.IVvalue),
    // //         mode: CryptoJS.mode.ECB,
    // //         padding: CryptoJS.pad.Pkcs7
    // //     });
    // //     this.encryptedata = encrypted.toString();
    // //     return  this.encryptedata
    // // }
    decryptionData(data: any){
    this.decrypteddata = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(this.SecretKey), {
        keySize: 32,
        iv: CryptoJS.enc.Utf8.parse(this.IVvalue),
    }).toString(CryptoJS.enc.Utf8);
    return  this.decrypteddata
}

hash(){

}
}