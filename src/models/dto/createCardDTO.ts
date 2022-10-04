export class CreateCardDTO {
    card_number: number;
    cvv: number;
    expiration_month: string;
    expiration_year: string;
    email: string;

    token_authorization: string;


    token?: string;
    expireAt?: Date;
    _id?: string;
}