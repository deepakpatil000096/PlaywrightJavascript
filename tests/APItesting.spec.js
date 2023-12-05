const {test , expect }= require('@playwright/test');
var userid;
test ("Get",async ({request}) =>{

   const response=await request.get("https://reqres.in/api/users?page=2")
   console.log(await response.json())

   expect(response.status()).toBe(200)
})
test .only ("creat user", async ({request})=>
{

                   const response= await request.post("https://reqres.in/api/users",
                    {
                        data:{"name":"deepak","job": "leader"},
                        headers: {"Accept":"application/json"}
                    });

                    console.log(await response.json())

                    expect(response.status()).toBe(201)
           
                    var res = await response.json()
                    userid= res.id

                    console.log(userid)
})

test ('updateuser',async ({request})=>{

            const response=await request.put("https://reqres.in/api/users"+userid,{

                                    data:{"name":"deepak patil","job":"Engineer"},
                                    headers:{"Accept":"application/json"}
                                 });

                        console.log(await response.json())

                        expect(response.status()).toBe(200)

})