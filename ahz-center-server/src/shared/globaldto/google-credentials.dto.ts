export class GoogleCredentialsDto{
    public API: APIGoogleCredentials;
}
  
export class APIGoogleCredentials{
    public type: string; 
    public project_id: string; 
    public private_key_id: string; 
    public private_key: string;
    public client_email: string; 
    public client_id: string; 
    public auth_uri: string; 
    public token_uri: string; 
    public auth_provider_x509_cert_url: string; 
    public client_x509_cert_url: string; 
    public universe_domain: string; 
  }