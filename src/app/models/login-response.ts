export interface LoginResponse {
    access_token: string,
    token_type: string,
    refresh_token:string,
    expires_in:number,
    scope: string,
    userAccountName:string,
    userAccountEmail:string,
    municipalityID:string,
    jti:string   ,
    error_description:string
}
