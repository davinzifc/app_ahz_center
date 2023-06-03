import { Injectable } from "@nestjs/common";
import { google } from "googleapis";
import { GoogleCredentials } from "../constants/google-credentials.const";
import * as path from 'path'

@Injectable()
export class EmailReaderUtile{

  async authenticate() {
    const JWT = google.auth.JWT;
    const authClient = new JWT({
      keyFile: path.resolve(__dirname, 'credentials.json') ,
      scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
      subject: 'mentalzhapp@gmail.com'
    });
    await authClient.authorize();
    /*const client = await google.auth.getClient({
      credentials: GoogleCredentials.API,
      scopes: ['https://www.googleapis.com/auth/gmail.readonly'],

    });*/

    return authClient;
  }
  
  async getUnreadMessages() {
    console.log('entro')
    const auth = await this.authenticate();
    const gmail = google.gmail({ version: 'v1', auth });
    // Obtener los mensajes no leídos
    console.log(await gmail.users.messages.list({userId:'me'}))
    const response = await gmail.users.messages.list(
      {
        userId:'mentalzhapp@gmail.com'
      }
    );
    console.log(response);
  /*
    const messages = response.data.messages;
    if (messages && messages.length) {
      console.log('Mensajes no leídos:');
      messages.forEach((message) => {
        console.log(`- ID del mensaje: ${message.id}`);
      });
    } else {
      console.log('No hay mensajes no leídos.');
    }*/
  }
}