import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const helloWorld2: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World 2 !',
      input: event,
    }, null, 2),
  };
}
