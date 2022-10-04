# PRUEBA TECNICA - ALVARO BEGAZO CARHUAYO

URL de los lambdas.

POST ```https://wih9qhb4eg.execute-api.us-east-1.amazonaws.com/dev/generar-token```



```
    // Body
    {
        "token": "AzrHlhxvwQEdZ3Nm"
    }

    // Headers 
    Content-Type            application/json
    token_authorization     pk_test_LsRBKejzCOEEWOsw

```

POST ```https://wih9qhb4eg.execute-api.us-east-1.amazonaws.com/dev/data-token```

La data provisional para las pruebas 

```
    // Body
    {
        "email": "prueba.test@gmail.com",
        "card_number": "4557880616004374",
        "cvv": "123",
        "expiration_year": "2027",
        "expiration_month": "12"
    }

    // Headers 
    Content-Type            application/json
    token_authorization     pk_test_LsRBKejzCOEEWOsw

```

Para solo importar un .json en el postman, descargar del siguiente link

https://drive.google.com/file/d/1ml4cSIxJ0vH3YuhYwX1NKphBgnXAdFxP/view?usp=sharing


Para poder ejecutar el linter

```npm run lint ```

Para hacer el build de produccion

```npm run build```

Para poder ejecutar los test. 

El test de cardController.spec.ts, se llego a implementar, pero debido a que hubo problemas de configuracion al parecer, y no pude solucionarlo, solo deje un simple test prueba, por si quiere ver el error que sale al momento de descomentar las lineas, ademas que un par de errores mas, como que el controller, en si ya esta esperando un event del lambda, al declarar un objeto con el tipado correspondiente, y copiar el valor que me bota en la consola del lambda, ese log no me da alguna propiedades como el authorizer, y tube que cambiar de forma local, lo cual no es lo idoneo.

```npm run test```

## - Para levantar de forma local, se realizo otro proyecto, ese fue el primero, pero luego se cambio la estructura y salio este repo para el lambda.

```git clone https://github.com/AlvaroB15/prueba-tecnica```

Tiene su propio readme ese repositorio


# -----------------------------------------------------------------------------------------------
# LICENCIAS / README DEL PROPIO SERVERLESS

# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Test your service

This template contains a single lambda function triggered by an HTTP request made on the provisioned API Gateway REST API `/hello` route with `POST` method. The request body must be provided as `application/json`. The body structure is tested by API Gateway against `src/functions/hello/schema.ts` JSON-Schema definition: it must contain the `name` property.

- requesting any other path than `/hello` with any other method than `POST` will result in API Gateway returning a `403` HTTP error code
- sending a `POST` request to `/hello` with a payload **not** containing a string property named `name` will result in API Gateway returning a `400` HTTP error code
- sending a `POST` request to `/hello` with a payload containing a string property named `name` will result in API Gateway returning a `200` HTTP status code with a message saluting the provided name and the detailed event processed by the lambda

> :warning: As is, this template, once deployed, opens a **public** endpoint within your AWS account resources. Anybody with the URL can actively execute the API Gateway endpoint and the corresponding lambda. You should protect this endpoint with the authentication method of your choice.

### Locally

In order to test the hello function locally, run the following command:

- `npx sls invoke local -f hello --path src/functions/hello/mock.json` if you're using NPM
- `yarn sls invoke local -f hello --path src/functions/hello/mock.json` if you're using Yarn

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://myApiEndpoint/dev/hello' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Frederic"
}'
```

## Template features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── hello
│   │   │   ├── handler.ts      # `Hello` lambda source code
│   │   │   ├── index.ts        # `Hello` lambda Serverless configuration
│   │   │   ├── mock.json       # `Hello` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts       # `Hello` lambda input event JSON-Schema
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file

### Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`
