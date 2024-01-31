import { defaultResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import  * as AWS from 'aws-sdk';
const tableName=  process.env.PRODUCT_TABLE||"ProductTable";
const region=  process.env.REGION||"us-east-1";
const documentClient = new AWS.DynamoDB.DocumentClient({ region: region });

const findProduct:any = async () => {  
  try {
    const params = {
      TableName:tableName      
    }    
  
    try {   
      let {Items} = await documentClient.scan(params).promise();  
      return defaultResponse(200,{Items});  
    } catch (error) {
      console.log(error);
      return defaultResponse(500,error);
    }
  } catch (error) {
    throw new Error(`Error : ${error.message}`);
  }
  
};

export const main = middyfy(findProduct);
