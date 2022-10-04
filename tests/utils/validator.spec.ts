import { describe, expect, test } from "@jest/globals";
import { CreateCardDTO } from "../../src/models/dto/createCardDTO";
import { validarTarjetaLuhn, validarToken, validateCvv, validateEmail, validateMonth, validateTokenAuth, validateYear, validatorCard } from "../../src/utils/validators";

describe("validator file validator / function validarToken", () => {

    test("if the delivered text is Wi9YDgXPPPayLHfx, should return not null", async () => {
        expect(validarToken("Wi9YDgXPPPayLHfx")).not.toBeNull();
    });

    test("if the delivered text is Wi9YDgXPPPayLHfx, should return a empty string", async () => {
        expect(validarToken("Wi9YDgXPPPayLHfx")).toBe("");
    });

    test("if the delivered text is 9YDgXPPPayLHfx, should return a message string's amount", async () => {
        expect(validarToken("Wi$%9YDgXPPPayLHfx!")).toBe("El token debe tener 16 digitos");

    });

    test("if the delivered text is Wi$%9YDyL@!#Hfx!, should return a message that only certain characters are allowed", async () => {
        expect(validarToken("Wi$%9YDyL@!#Hfx!")).toBe("El token no cumple con sus requisitos (tener 16 caracteres, donde utiliza números, letras minúsculas, letras mayúsculas)");

    });

});

describe("validator file validator / function validateTokenAuth  ", () => {

    test("token_authorization is pk_test_LsRBKejzCOEEWOsw, should return not null  ", async () => {
        expect(validateTokenAuth("pk_test_LsRBKejzCOEEWOsw")).not.toBeNull();
    });

    const messageEmpty = "Debe mandar un token de autorizacion con data";
    test(`token_authorization is '', should return ${messageEmpty}`, async () => {
        expect(validateTokenAuth("")).toBe(messageEmpty);
    });

    const messageNotValid = "El token pk_te7st_LsRBKejzCOEEWOsw no cumple con el formato pk_test_";
    test(`token_authorization is pk_te7st_LsRBKejzCOEEWOsw, should return ${messageNotValid}`, async () => {
        expect(validateTokenAuth("pk_te7st_LsRBKejzCOEEWOsw")).toBe(messageNotValid);
    });
});

describe("validator file validator / function validateEmail  ", () => {

    test("if the delivered text is prueba.test@gmail.com, should return not null", async () => {
        expect(validateEmail("prueba.test@gmail.com")).not.toBeNull();
    });

    test("if the delivered text is prueba.test@gmail.com, should not return a empty string", async () => {
        expect(validateEmail("prueba.test@gmail.com")).toBe(true);
    });

    test("if the delivered text is prueba.test@facebook.com, should return not null  ", async () => {
        expect(validateEmail("prueba.test@facebook.com")).toBe(false);
    });

});

describe("validator file validator / function validateYear  ", () => {

    test("if the delivered text is 2027, should return not null", async () => {
        expect(validateYear("2027")).not.toBeNull();
    });

    test("if the delivered text is 2027, should not return a empty string", async () => {
        expect(validateYear("2027")).toBe(true);
    });

    test("if the delivered text is 2035, should return not null  ", async () => {
        expect(validateYear("2035")).toBe(false);
    });

});

describe("validator file validator / function validateMonth  ", () => {

    test("if the delivered text is 12, should return not null", async () => {
        expect(validateMonth("12")).not.toBeNull();
    });

    test("if the delivered text is 2027, should not return a empty string", async () => {
        expect(validateMonth("12")).toBe(true);
    });

    test("if the delivered text is 15, should return not null  ", async () => {
        expect(validateMonth("15")).toBe(false);
    });

});

describe("validator file validator / function validateCvv  ", () => {

    test("if the delivered text is 123, should return not null", async () => {
        expect(validateCvv(123)).not.toBeNull();
    });

    test("if the delivered text is 123, should not return a empty string", async () => {
        expect(validateCvv(123)).toBe(true);
    });

    test("if the delivered text is 10, should return not null  ", async () => {
        expect(validateCvv(10)).toBe(false);
    });

});

describe("validator file validator / function validarTarjetaLuhn  ", () => {

    test("if the delivered text is 4557880616004174, should return not null", async () => {
        expect(validarTarjetaLuhn(4557880616004174)).not.toBeNull();
    });

    test("if the delivered text is 4557880616004174, should not return a empty string", async () => {
        expect(validarTarjetaLuhn(4557880616004174)).toBe(true);
    });

    test("if the delivered text is 1557880616004174, should return not null  ", async () => {
        expect(validarTarjetaLuhn(1557880616004174)).toBe(false);
    });

});

describe("validator file validator / function validatorCard  ", () => {

    const data: CreateCardDTO = {
        email: "prueba.test@gmail.com",
        card_number: 4557880616004374,
        cvv: 123,
        expiration_year: "2027",
        expiration_month: "12",
        token_authorization: "pk_test_LsRBKejzCOEEWOsw"
    };

    test("if the delivered text is, should return not null", async () => {
        expect(validatorCard(data)).not.toBeNull();
    });

    test("if the delivered text is , should not return a empty string", async () => {
        expect(validatorCard(data)).toBe("");
    });

    // Data incorrect

    const data2: CreateCardDTO = JSON.parse(JSON.stringify(data));
    data2["email"] = "prueba.test@facebook.com";
    test("if the delivered text is prueba.test@facebook.com in the attribute email, should not return a empty", async () => {
        expect(validatorCard(data2)).toBe(`El correo ${data2.email} no es un mail valido (solo son validos con dominios “gmail.com”, “hotmail.com”, “yahoo.es`);
    });

    const data3: CreateCardDTO = JSON.parse(JSON.stringify(data));
    data3["expiration_year"] = "2030";
    test("if the delivered text is 2030 in the attribute expiration_year, should not return a empty", async () => {
        expect(validatorCard(data3)).toBe(`El año ${data3.expiration_year} no es del año actual ni esta en un rango de 5 año mas`);
    });

    const data4: CreateCardDTO = JSON.parse(JSON.stringify(data));
    data4["expiration_month"] = "15";
    test("if the delivered text is 15 in the attribute expiration_month, should not return a empty", async () => {
        expect(validatorCard(data4)).toBe(`${data4.expiration_month} no es un mes que sea entre Enero - Diciembre`);
    });

    const data5: CreateCardDTO = JSON.parse(JSON.stringify(data));
    data5["cvv"] = 19;
    test("if the delivered text is 19 in the attribute cvv, should not return a empty", async () => {
        expect(validatorCard(data5)).toBe(`El cvv ${data5.cvv} debe ser de 3 (Visa/Mastercad) o 4 digitos(Amex)`);
    });

    const data6: CreateCardDTO = JSON.parse(JSON.stringify(data));
    data6["card_number"] = 1557880616004174;
    test("if the delivered text is 1557880616004174 in the attribute card_number, sshould not return a empty", async () => {
        expect(validatorCard(data6)).toBe(`El numero de tarjeta ${data6.card_number} no pertenece a Visa / Mastercad / Amex`);
    });

});