// import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

// export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
//     const response: APIGatewayProxyResultV2 = {
//         body: JSON.stringify(new Date().toISOString()),
//         statusCode: 200,
//     };
//     return response;
// }

export async function handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    console.log("Incoming event was: ", JSON.stringify(event));

    const response: APIGatewayProxyResult = {
        body: JSON.stringify(new Date().toISOString()),
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/plain",
        },
    };
    return response;
}
