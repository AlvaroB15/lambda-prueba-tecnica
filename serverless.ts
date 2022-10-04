import type { AWS } from "@serverless/typescript";

import dataToken from "@functions/data-token";
import generarToken from "@functions/generar-token";


const serverlessConfiguration: AWS = {
  service: "lambda-prueba-tecnica",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-deployment-bucket"
  ],
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    stage: "dev",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      MONGODB_URI: "mongodb+srv://delfosti:delfosti@delfosti.hx5q8q8.mongodb.net/delfosti"
    },
    iam: {
      role: {
        name: "role_aws_prueba_tecnica",
        statements: [
          {
            Effect: "Allow",
            Action: [
              "s3:PutObject",
              "s3:DeleteObject",
              "s3:GetObject",
            ],
            Resource: "*"
          },
          {
            Effect: "Allow",
            Action: [
              "secretsmanager:GetSecretValue"
            ],
            Resource: "*"
          },
          {
            Effect: "Allow",
            Action: [
              "ec2:CreateNetworkInterface",
              "ec2:DescribeNetworkInterface",
              "ec2:DeleteNetworkInterface",
              "ec2:DescribeVpcs",
              "ec2:DescribeSubnets",
              "ec2:DescribeSecurityGroups",
            ],
            Resource: "*"
          },
          {
            Effect: "Allow",
            Action: [
              "dynamodb:DescribeTable",
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:PutItem",
              "dynamodb:UpdateItem",
              "dynamodb:DeleteItem",
            ],
            Resource: "arn:aws:dynamodb:us-east-1:375466748597:table/tableuser"
          }
        ],
      }
    }
  },
  // import the function via paths
  functions: { dataToken, generarToken },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node16",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
