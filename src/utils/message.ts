import { CreateCardDTO } from "src/models/dto/createCardDTO";
import { ResponseBodyVO, ResponseVO } from "../models/vo/responseVO";

enum StatusCode {
    success = 200,
    error = 404
}

class Result {
    private statusCode: number;
    private message: string;
    private data?:  CreateCardDTO;
    private code: string;

    constructor(code: string, statusCode: number, message: string, data?: CreateCardDTO) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.code = code;
    }

    /**
     * Serverless: According to the API Gateway specs, the body content must be stringified
     */
    bodyToString() {
        return {
            statusCode: this.statusCode,
            body: JSON.stringify({
                code: this.code,
                message: this.message,
                data: this.data,
            }),
        };
    }
}

export class MessageUtil {
    static success(data: ResponseBodyVO): ResponseVO {

        const result = new Result("sucess", StatusCode.success, data.message, data.data);

        return result.bodyToString();
    }

    static error(message: string) {
        // const data = []CreateCardDTO = []
        const result = new Result("error", StatusCode.error, message);

        console.log(result.bodyToString());
        return result.bodyToString();
    }
}
