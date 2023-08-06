import { Injectable } from "@nestjs/common";
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerUtil {
    constructor(
        protected readonly _mailerService: MailerService
    ) { }

    async sendEmail(email: string, subject: string, body: string) {
        try {
            await this._mailerService.sendMail({
                to: email,
                subject: subject,
                html: body,
            }).then(el => {
                console.log(`se mando`)
            }).catch(
                el => {
                    console.log(el)
                }
            );
            return true;
        } catch (error) {
            return false;
        }

    }
}