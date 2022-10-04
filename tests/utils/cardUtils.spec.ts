import { describe, expect, test } from "@jest/globals";
import { CreateCardDTO } from "../../src/models/dto/createCardDTO";
import { FindCardDto } from "../../src/models/dto/findCardDto";
import { getDataCard, postDataCardGenerateToken } from "../../src/utils/cardUtils";

describe("validator file cardUtils / function getDataCard  ", () => {

    const data: FindCardDto = {
        token: "07W7nVUn69pjc3kP",
        token_authorization: "pk_test_LsRBKejzCOEEWOsw"
    };

    test(`If a object ${JSON.stringify(data)} is delivered, should return not null`, async () => {
        expect(getDataCard(data)).not.toBeNull();
    });

    test(`If a object ${JSON.stringify(data)} is delivered correct , should not return a empty string`, async () => {
        expect(getDataCard(data)).toStrictEqual({ "error": false, "message": "" });
    });

    // if validarToken is incorrect  |  validateTokenAuth incorrect 

    const dataFailledToken: FindCardDto = {
        token: "07W7nVUn69pjc3kPasdasd",
        token_authorization: "pk_test_LsRBKejzCOEEWOsw"
    };

    test("token is 07W7nVUn69pjc3kPasdasd, should return meesage 'El token debe tener 16 digitos'", async () => {
        expect(getDataCard(dataFailledToken)).toStrictEqual({ "error": true, "message": "El token debe tener 16 digitos" });
    });

    const dataFailledTokenAuth: FindCardDto = {
        token: "07W7nVUn69pjc3kP",
        token_authorization: "pk_tesGGt_LsRBKejzCOEEWOsw"
    };

    const message = `El token ${dataFailledTokenAuth.token_authorization} no cumple con el formato pk_test_`;

    test(`token_authorization is pk_tesGGt_LsRBKejzCOEEWOsw, should return meesage '${message}'`, async () => {
        expect(getDataCard(dataFailledTokenAuth)).toStrictEqual({ "error": true, "message": message });
    });

});


describe("validator file cardUtils / function postDataCardGenerateToken  ", () => {

    const data: CreateCardDTO = {
        email: "prueba.test@gmail.com",
        card_number: 4557880616004374,
        cvv: 123,
        expiration_year: "2027",
        expiration_month: "12",
        token_authorization: "pk_test_LsRBKejzCOEEWOsw"
    };

    const tokenGenerado = "07W7nVUn69pjc3kP";

    test("If a CreateCardDTO object is delivered, should return not null", async () => {
        expect(postDataCardGenerateToken(data, tokenGenerado)).not.toBeNull();
    });

    test("If a CreateCardDTO object is delivered correct, should not return a empty string", async () => {
        expect(postDataCardGenerateToken(data, tokenGenerado)).toStrictEqual({ "error": false, "message": "" });
    });

});