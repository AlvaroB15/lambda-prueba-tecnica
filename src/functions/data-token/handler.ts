import { Handler, APIGatewayEvent } from "aws-lambda";
import * as dotenv from "dotenv";
import * as path from "path";

const dotenvPath = path.join(__dirname, "../", `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import "../../config/mongoose";

import { middyfy } from "@libs/lambda";
import { Card } from "../../models/Card";
import { CardsController } from "../../controller/cards";

const cardController = new CardsController(Card);

const dataToken: Handler = (event: APIGatewayEvent) => {
  return cardController.findOne(event);
};

export const main = middyfy(dataToken);