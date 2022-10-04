import { handlerPath } from "@libs/handler-resolver";
import { AWSLambda } from "../../utils/lambdaFunctionInterface";

const handler: AWSLambda =  {
  handler: `${handlerPath(__dirname)}/handler.main`,
  name: "data-token",
  description: "Obtener los datos de la tarjeta a traves del token generado",
  events: [
    {
      http: {
        method: "post",
        path: "data-token",
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