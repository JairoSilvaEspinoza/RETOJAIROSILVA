import { defaultResponse } from "../../libs/api-gateway";
import axios from "axios";
import { PersonDto } from '../../entities/PersonDto';



module.exports.swapi = async (event) => {
  try {
    console.log(event);
    let id = event.queryStringParameters.id;
    const url = "https://swapi.py4e.com/api/people/" + id;
    const {data}= await axios.get(url, {
      headers: {
        "content-type": "application/json",
      },
    });
   
    let person= new PersonDto(data);

    return defaultResponse(200, { ...person });
  } catch (err) {
    throw new Error(`Error : ${err.message}`);
  }
};
