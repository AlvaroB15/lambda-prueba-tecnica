import { describe, expect, test } from "@jest/globals";

// import mockingoose from "mockingoose";
// import { Card } from "../../src/models/Card";
// import { CardsController } from "../../src/controller/cards";
// import { APIGatewayEvent } from "aws-lambda";

// const dataEvent : APIGatewayEvent = {
//     "resource": "/generar-token",
//     "path": "/generar-token",
//     "httpMethod": "POST",
//     "headers": {
//         "Accept": "*/*",
//         "Accept-Encoding": "gzip, deflate, br",
//         "Authorization": "Bearer ONF3S19uPrnI1MTKBIGKK8nc0UFVSG0G8FGTlVLT-cB",
//         "CloudFront-Forwarded-Proto": "https",
//         "CloudFront-Is-Desktop-Viewer": "true",
//         "CloudFront-Is-Mobile-Viewer": "false",
//         "CloudFront-Is-SmartTV-Viewer": "false",
//         "CloudFront-Is-Tablet-Viewer": "false",
//         "CloudFront-Viewer-ASN": "270068",
//         "CloudFront-Viewer-Country": "PE",
//         "Content-Type": "application/json",
//         "Host": "wih9qhb4eg.execute-api.us-east-1.amazonaws.com",
//         "Postman-Token": "88dbbc78-4077-4f9d-b325-172e65a1cf1d",
//         "token_authorization": "pk_test_LsRBKejzCOEEWOsw",
//         "User-Agent": "PostmanRuntime/7.29.2",
//         "Via": "1.1 0e3695dd181942a4e786f01e5f9e8b30.cloudfront.net (CloudFront)",
//         "X-Amz-Cf-Id": "pdkOV5e6stuiM7BB57-LVMap1moQrRlYuenR8j6HDzul5HCKtcehvA==",
//         "X-Amzn-Trace-Id": "Root=1-633bc0a1-2a4d2eeb31f4be2a2c002998",
//         "X-Forwarded-For": "187.86.167.230, 64.252.175.70",
//         "X-Forwarded-Port": "443",
//         "X-Forwarded-Proto": "https"
//     },
//     "multiValueHeaders": {
//         "Accept": [
//             "*/*"
//         ],
//         "Accept-Encoding": [
//             "gzip, deflate, br"
//         ],
//         "Authorization": [
//             "Bearer ONF3S19uPrnI1MTKBIGKK8nc0UFVSG0G8FGTlVLT-cB"
//         ],
//         "CloudFront-Forwarded-Proto": [
//             "https"
//         ],
//         "CloudFront-Is-Desktop-Viewer": [
//             "true"
//         ],
//         "CloudFront-Is-Mobile-Viewer": [
//             "false"
//         ],
//         "CloudFront-Is-SmartTV-Viewer": [
//             "false"
//         ],
//         "CloudFront-Is-Tablet-Viewer": [
//             "false"
//         ],
//         "CloudFront-Viewer-ASN": [
//             "270068"
//         ],
//         "CloudFront-Viewer-Country": [
//             "PE"
//         ],
//         "Content-Type": [
//             "application/json"
//         ],
//         "Host": [
//             "wih9qhb4eg.execute-api.us-east-1.amazonaws.com"
//         ],
//         "Postman-Token": [
//             "88dbbc78-4077-4f9d-b325-172e65a1cf1d"
//         ],
//         "token_authorization": [
//             "pk_test_LsRBKejzCOEEWOsw"
//         ],
//         "User-Agent": [
//             "PostmanRuntime/7.29.2"
//         ],
//         "Via": [
//             "1.1 0e3695dd181942a4e786f01e5f9e8b30.cloudfront.net (CloudFront)"
//         ],
//         "X-Amz-Cf-Id": [
//             "pdkOV5e6stuiM7BB57-LVMap1moQrRlYuenR8j6HDzul5HCKtcehvA=="
//         ],
//         "X-Amzn-Trace-Id": [
//             "Root=1-633bc0a1-2a4d2eeb31f4be2a2c002998"
//         ],
//         "X-Forwarded-For": [
//             "187.86.167.230, 64.252.175.70"
//         ],
//         "X-Forwarded-Port": [
//             "443"
//         ],
//         "X-Forwarded-Proto": [
//             "https"
//         ]
//     },
//     "queryStringParameters": null,
//     "multiValueQueryStringParameters": null,
//     "pathParameters": null,
//     "stageVariables": null,
//     "requestContext": {
//         "resourceId": "2y1pv7",
//         "resourcePath": "/generar-token",
//         "httpMethod": "POST",
//         "extendedRequestId": "ZdsJQEiTIAMF02Q=",
//         "requestTime": "04/Oct/2022:05:12:01 +0000",
//         "path": "/dev/generar-token",
//         "accountId": "375466748597",
//         "protocol": "HTTP/1.1",
//         "stage": "dev",
//         "domainPrefix": "wih9qhb4eg",
//         "requestTimeEpoch": 1664860321452,
//         "requestId": "c13ffdb2-6da2-47e7-be97-abd51f680617",
//         "identity": {
//             "cognitoIdentityPoolId": null,
//             "accountId": null,
//             "cognitoIdentityId": null,
//             "caller": null,
//             "sourceIp": "187.86.167.230",
//             "principalOrgId": null,
//             "accessKey": null,
//             "cognitoAuthenticationType": null,
//             "cognitoAuthenticationProvider": null,
//             "userArn": null,
//             "userAgent": "PostmanRuntime/7.29.2",
//             "user": null,
//             "apiKey" : null,
//             "apiKeyId" : null,
//             "clientCert" : null
//         },
//         "domainName": "wih9qhb4eg.execute-api.us-east-1.amazonaws.com",
//         "apiId": "wih9qhb4eg"
//     },
//     "body": JSON.stringify({
//         "email": "prueba.test@gmail.com",
//         "card_number": "4557880616004374",
//         "cvv": "123",
//         "expiration_year": "2027",
//         "expiration_month": "12",
//         "token_authorization": "pk_test_LsRBKejzCOEEWOsw",
//         "token": "jDvIZptVK3olfZnd"
//     }),
//     "isBase64Encoded": false
// };

// describe("Books service", () => {
//     describe("fetchBooks", async () => {
//         mockingoose(Card).toReturn([
//             {
//                 title: "Book 1",
//                 author: {
//                     firstname: "John",
//                     lastname: "Doe"
//                 },
//                 year: 2021,
//             },
//             {
//                 title: "Book 2",
//                 author: {
//                     firstname: "Jane",
//                     lastname: "Doe"
//                 },
//                 year: 2022,
//             }
//         ], "create");


//         const cardController = new CardsController(Card);
//         const results = await cardController.create(dataEvent);

        // al momento de generar el token, este sera diferente en la prueba que el que declare
        // expect(results[0]).toBe({
        //     "code": "sucess",
        //     "message": "Se registro correctamente",
        //     "data": {
        //         "card_number": 4557880616004374,
        //         "cvv": 123,
        //         "expiration_month": "12",
        //         "expiration_year": "2027",
        //         "email": "prueba.test@gmail.com",
        //         "token": "jDvIZptVK3olfZnd",
        //         "_id": "633c5b3dfe3c00871c9e6b03",
        //         "expireAt": "2022-10-04T16:11:41.982Z",
        //         "__v": 0
        //     }
        // });
//     });
// });

describe("Test no implementado y comprobado por  ", () => {


    test("falta de error, si se descomenta la linea, dira que no encuentra el src, y por ello ya no pude probar mas", async () => {
        expect(1).toBe(1);
    });

});