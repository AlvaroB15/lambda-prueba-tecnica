import { APIGatewayEvent } from "aws-lambda";
import { Model } from "mongoose";
import { CreateCardDTO } from "src/models/dto/createCardDTO";
import { FindCardDto } from "src/models/dto/findCardDto";
import { ResponseBodyVO } from "src/models/vo/responseVO";
import { CardsService } from "src/service/cards";
import { createToken } from "src/utils/createToken";
import { MessageUtil } from "src/utils/message";
import { getDataCard, postDataCardGenerateToken } from "../utils/cardUtils";

export class CardsController extends CardsService {
    constructor(cards: Model<CreateCardDTO>) {
        super(cards);
    }

    /**
     * Create card
     * @param {*} event
     */
    async create(event: APIGatewayEvent) {
        const params: CreateCardDTO = JSON.parse(JSON.stringify(event.body));
        params.token_authorization = event.headers.token_authorization;

        try {

            let message = "";
            const tokenGenerado = createToken();
            params.token = tokenGenerado;
            const dataValidada = postDataCardGenerateToken(params, tokenGenerado);

            if (dataValidada.error) {
                throw dataValidada.message;
            }

            const response = await this.createCard(params);
            message = "Se registro correctamente";

            const result: ResponseBodyVO = {
                code: 200,
                message,
                data: response
            };

            return MessageUtil.success(result);

        } catch (err) {
            console.error(err);

            return MessageUtil.error(err);
        }
    }

    /**
     * Query card by id
     * @param event
     */
    async findOne(event: APIGatewayEvent) {

        const params: FindCardDto = JSON.parse(JSON.stringify(event.body));
        params.token_authorization = event.headers.token_authorization;

        try {

            let message = "";
            const dataValida = getDataCard(params);
            let data;

            if (dataValida.error) {
                throw dataValida.message;
            }

            const response = await this.findOneCardById(params.token);

            if (response !== null) {
                message = `se encontro correctamente el registro del token ${params.token}`;
                data = response;
            } else {
                message = `No se encontro el token ${params.token}, recuerde que cada 15 minutos se borran los registros, intente generar un token de nuevo`;
                data = [];
            }

            const result: ResponseBodyVO = {
                code: 200,
                message,
                data
            };

            return MessageUtil.success(result);
        } catch (err) {
            console.error(err);

            return MessageUtil.error(err);
        }
    }
}