import { handlerPath } from '../../libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.swapi`,
  events: [
    {
      http: {
        method: 'get',
        path: 'swapi/people',
        request: {
          
        },
        
      },
    },
  ],
};
