import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
    const response: APIGatewayProxyResultV2 = {
        body: JSON.stringify(new Date().toISOString()),
        statusCode: 200,
    };
    return response;
}
