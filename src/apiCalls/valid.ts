
import { cFieldValue } from "./CFieldValue.models";
let a = 'N';
let b = 'AN';
let c = 'C';
let arr = ['',null,undefined]
let check: cFieldValue
export  function IsNumber(param: any) {
     if (param.IsMatch("^\d+$"))
                return true;
            else
                return false;
// console.log('NUMBER',value);
// let count = value => String((Math.abs(value))).length;
// console.log('count is ', count(value));
// return typeof value == 'number'? (count(value) >= min && count(value) <= max)?true:false:"not number";
}
export function checkNumber(mand,value , min , max)
{
    console.log('NUMBER',mand,value);
    if(mand === 'Yes'){
        if(value === ''|| value === undefined || value === null){

        return 'empty field';
        }
    }
let count = value => String((Math.abs(value))).length;
var regex = /^[0-9]+$/
console.log('count is ', count(value), typeof value, regex.test(value) );
return regex.test(value)? (count(value) >= min && count(value) <= max)?true:false:"not number";
}

export function IsAlphaNum(param: any){
    if (param.IsMatch("^[a-zA-Z0-9_. ]*$"))
    return true;
else
    return false;
    // console.log('ALPHA NUMERIC',value);
    // let AN = /^[a-z0-9]+$/i;
    // return AN.test(value)?(value.length >= min && value.length <= max)?true:false: "not alphanumeric";
}

export function checkAlpha(mand, value ,min ,max) {
    console.log('ALPHA NUMERIC',value);
    if(mand === 'Yes'){
        if(value === ''|| value === undefined || value === null){

        return 'empty field';
        }
    }
    let AN = /^[a-z0-9_.\s]+$/i;
    return AN.test(value)?(value.length >= min && value.length <= max)?true:false: "not alphanumeric";
}

export function IsChar(param: any){
    if (param.IsMatch("^[a-zA-Z]+$"))
    return true;
else
    return false;
    // console.log(value);
    // return (typeof value == 'string')?(value.length >= min && value.length <= max)?true:false:"not char";
}
export function checkChar(mand, value,min,max) {
    if(mand === 'Yes'){
        if(value === ''|| value === undefined || value === null){

        return 'empty field';
        }
    }
    console.log(value);
    return (typeof value == 'string')?(value.length >= min && value.length <= max)?true:false:"not char";
}

export function IsMandatory(check)
{
    
 let isMandate: Boolean = check.cSpec.IsMandatory == "Yes" ? true : false;
    if (!isMandate)
        return true;
    else if (check.value == null)
    return false;
    else
        return check.value.length != 0;
}

export function ValidateField(check)
        {
            let  IsValid: Boolean = false;
            let isMandatory: Boolean = IsMandatory(check);
            let isValidateDatatype: Boolean = ValidateDataType(check);
            let isValidateMinLen: Boolean = ValidateMinLen(check);
            let isValidateMaxLen = ValidateMaxLen(check);
            if (isValidateDatatype && isMandatory && isValidateMinLen && isValidateMaxLen === true)
                IsValid = true;
            return IsValid;
        }

        export function ValidateDataType(check)
        {
            if ((check.cSpecs.IsMandatory == "Yes" ? true : false) || (!arr.indexOf(check.value)? true: false))
            {
                switch (check.cSpecs.DataType)
                {
                    case "N":
                        return IsNumber(check.value);
                    case "AN":
                        return IsAlphaNum(check.value );
                    case "C":
                        return IsChar(check.value );
                    default:
                        return false;
                }
            }

            return true;
        }
        export function ValidateMinLen(check)
        {
            if ((check.cSpecs.IsMandatory == "Yes" ? true : false) || (!arr.indexOf(check.value)? true: false))
            {
                return (check.value.Length >= check.cSpecs.Min_len);
            }
            return true;
        }
        export function ValidateMaxLen(check)
        {
            if ((check.cSpecs.IsMandatory == "Yes" ? true : false) || (!arr.indexOf(check.value)? true: false))
            {
                return (check.value.Length <= check.cSpecs.Max_len);
            }
            return true;
        }
        export function ValidateSpecialChar(check)
        {
            if ((check.cSpecs.IsMandatory == "Yes" ? true : false) || (!arr.indexOf(check.value)? true: false))
            {
                return (check.value.IsMatch("^[a-zA-Z0-9#,&*()-_< >./\[ ]:;]*$"));

            }
            return true;
        }
//validators for min max value 
export function check_min_max(value,min,max){

    return (value.length >= min && value.length <= max)?true:false;
}