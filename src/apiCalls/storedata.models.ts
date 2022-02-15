import {cFieldValue} from  "./CFieldValue.models";
export let allData: any  = [];
export class storedataa {
    test(){
        console.log('jst testing');
    }
}
export function makeitEmpty(){
    allData = [];
}

export function storedata (c,a,otpCompare){
   console.log('valsss',c,a,otpCompare);
    let json: cFieldValue =  {value: c, isValid: true,cSpec:{
        Id:otpCompare[a].Id,
        ParamName: otpCompare[a].ParamName,
        JsonTag: otpCompare[a].JsonTag,
        Min_len: otpCompare[a].Min_len,
        Max_len: otpCompare[a].Max_len,
        IsMandatory: otpCompare[a].IsMandatory,
        DataType: otpCompare[a].DataType
       }}
       console.log('all data', json);
       //allData = [];
       allData.push(json);
       return allData;
}