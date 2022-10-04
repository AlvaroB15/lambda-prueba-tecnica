import { CreateCardDTO } from "src/models/dto/createCardDTO";
import { FindCardDto } from "src/models/dto/findCardDto";
import { ResponseValidacionVO } from "src/models/vo/responseVO";
import { validarToken, validateTokenAuth, validatorCard } from "./validators";

export const getDataCard = (body: FindCardDto): ResponseValidacionVO => {

    let message = "";
    let error = false;
    const valToken = validarToken(body.token);
    const valTokenAuth = validateTokenAuth(body.token_authorization);

    if (valToken != "") {
        message = valToken;
        error = true;
        return { message, error };
    }
    if (valTokenAuth != "") {
        message = valTokenAuth;
        error = true;
        return { message, error };
    }

    return {
        message,
        error
    };

};

export const postDataCardGenerateToken = (body: CreateCardDTO, tokenGenerado: string): ResponseValidacionVO => {

    let message = "";
    let error = false;
    body.token = tokenGenerado;

    const dataValidator = validatorCard(body);
    const valTokenAuth = validateTokenAuth(body.token_authorization);

    if (dataValidator != "") {
        message = dataValidator;
        error = true;
        return { message, error };
    }
    if (valTokenAuth != "") {
        message = valTokenAuth;
        error = true;
        return { message, error };
    }

    return {
        message,
        error
    };

};