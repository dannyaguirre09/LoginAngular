export interface controlZoneReponse {
    result: [{
        zoneID:number,
        zoneName:string,
        zoneColor:string,
        zoneStatus:string,
        zoneDate:string,
        controlZoneDetailDtoList:ControlZoneDetailDtoList[]
    }],
    message: string,   
    
}

export interface ControlZoneDetailDtoList {
    controlZoneDetailDtoList: {
        zoneLatitude:number,
        zoneLongitude:number,
        zoneSequence:number
    }     
}


