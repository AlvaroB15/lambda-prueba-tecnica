import { CreateCardDTO } from "../dto/createCardDTO";

export class ResponseVO {
    statusCode: number;
    body: string;
}

export class ResponseBodyVO {
    code: number;
    message: string;
    data?: CreateCardDTO;
}

export class ResponseValidacionVO {
    message: string;
    error: boolean;
}