import { OnDestroy } from '@angular/core';
import { ApiServiceService } from '../../src/app/apiServices/api-service.service'
import { CBFLConfigData} from "./CBFLConfigData.models"
import { LoadBFLConfigData, LoadSpec, Set_ValueHelper, GetSpecs, setdata, cspecsData } from "./ccommon"
import { storedata, storedataa} from "./storedata.models"
import {patnerInput} from "./CPartnerInput.models"
import {cFieldValue} from "./CFieldValue.models"
import {ValidateField} from "./valid"
import {cvalidity} from "./cValidity"
import { CvalidationComponent } from 'src/app/cvalidation/cvalidation.component';
export let Current_Api_Url: any;
export function Init(apiName: String){
    let Current_Api_Name: String = apiName;
    LoadSpec();
    let CBFLConfig = LoadBFLConfigData();
    Current_Api_Url =  CBFLConfig.BaseUrl + Current_Api_Name;
}

export function setValues(CPartnerInput){
    
    CPartnerInput.forEach(element => {
     Set_ValueHelper(element.JsonTag, element.value);
    });
    
}
;

export function sendRequest(){
let isValid = Boolean;

setdata.forEach(element => {
        cspecsData;
        let Specs = GetSpecs().find(m => m.JsonTag == element.JSON_TAG);
        let Data: cFieldValue;
        Data.cSpec = Specs;
        console.log('daaa',Data.cSpec.JsonTag)
        let t = Data.cSpec.JsonTag;
        Data.value = element.value;
        let isValid= ValidateField(Data);
        let validaion: cvalidity = {
            JSON_TAG: "Tag",
            IsValid: isValid

        }//came from valid.ts file after checking is valifd or not

       

        
        // cFieldValue.Value = d.Value;
        // //Do to clear json settings and enable the below code
        // Boolean isFieldValid = cValidation.ValidateField(cFieldValue);
        // CValidity cCValidity = new CValidity();
        // cCValidity.JsonTag = cFieldValue.CSpecs.JsonTag;
        // cCValidity.Isvalid = isFieldValid;
        // ValidityList.Add(cCValidity);
        // IsValid &= isFieldValid;
    });
}