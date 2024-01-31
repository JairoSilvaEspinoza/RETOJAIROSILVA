import { mocked } from "jest-mock";
import { Handler } from 'aws-lambda';
import { middyfy } from '../libs/lambda';

jest.mock('../libs/lambda');

describe('findProduct', () => {
  let main;
  let mockedMiddyfy: jest.MockedFunction<typeof middyfy>;
  

  beforeEach(async () => {
    
    mockedMiddyfy = mocked(middyfy);
    mockedMiddyfy.mockImplementation((handler: Handler) => {
      return handler as never;
    });
    
    main = (await import('../functions/findProduct/handler')).main;
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('validate Equal to body', async () => {    
    const {body} = await main();
    console.log(body);
    expect(JSON.parse(body)).toEqual({
        "Items": [
            {
                "id": "c97ca375-deb7-4bf7-8aef-b410e911a050",
                "name": "aaaa",
                "price": 12.3               
                
            }
        ]
    });
  });

  
});