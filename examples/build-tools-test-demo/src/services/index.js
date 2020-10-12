import axios from "axios";

export async function test_request(){
  await axios({
    url:"/test1"
  });
};