import { env } from "process";
import { GoogleCredentialsDto } from "../globaldto/google-credentials.dto";

export const GoogleCredentials: GoogleCredentialsDto = {
    API: {
        type: env.P01_API_TYPE,
        project_id: env.P01_API_PROJECT_ID,
        private_key_id: env.P01_API_PRIVATE_KEY_ID,
        private_key: env.P01_API_PRIVATE_KEY,
        client_email: env.P01_API_CLIENT_EMAIL,
        client_id: env.P01_API_CLIENT_ID,
        auth_uri: env.P01_API_AUTH_URI,
        token_uri: env.P01_API_TOKEN_URI,
        auth_provider_x509_cert_url: env.P01_API_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: env.P01_API_CLIENT_X509_CERT_URL,
        universe_domain: env.P01_API_UNIVERSE_DOMAIN
      }
}