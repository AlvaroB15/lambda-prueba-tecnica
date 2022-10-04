import { handlerPath } from "@libs/handler-resolver";
import { AWSLambda } from "../../utils/lambdaFunctionInterface";

const handler: AWSLambda =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  name: "generar-token",
  description: "Registrar datos de tarjeta y generacion de token",
  events: [
    {
      http: {
        method: "post",
        path: "generar-token",
        cors: {
          origins: [
            "https://google.com"
          ]
        }
      },
    },
  ],
};

export default handler;