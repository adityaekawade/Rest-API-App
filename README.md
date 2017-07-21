# Rest-API-App


**Get all the data:** 

You can get all the stock items present in the inventory. API responds with an array of objects. 

***Endpoint***: 
*/api/item*

***Method***:
 GET

***Example of API call:***
https://desolate-cove-26525.herokuapp.com/api/item



----------
**Search** 

Search for the particular stock item using the barcode number. API responds with a result that matches the string entered in the input box. 

***Endpoint***: 
*/api/specificItem*

***Method***:
 GET

***Example of API call:***
https://desolate-cove-26525.herokuapp.com/api/specificItem?barCodeNumber=a1111a

***Response:***
`[
    {
        "_id": "59715f0083aa8ae0a026ea5b",
        "itemNumber": "m00001",
        "itemName": "Buck Star",
        "warehouseLocation": "Location 1",
        "barCodeNumber": "a1111a",
        "__v": 0,
        "lastCalibrated": "2017-07-21T07:31:57.730Z",
        "inStock": true
    }
]
`


----------

**Post** 

You can post the data to the API using the POST method. 

***Endpoint***: 
*/api/item*

***Method***:
 POST


***Example of API call:***
https://desolate-cove-26525.herokuapp.com/api/item


**Using Jquery - Ajax** 

    $.ajax({
                type: 'POST',
                url: 'https://desolate-cove-26525.herokuapp.com/api/item',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data) ,
                success: function (x) {
                    console.log(x);
                },
                error: function () {
                    console.log("error")
                }
            });




**Schema of the model:** 

    itemNumber: {
        type: String,
        required: [true, 'Number field is required']
    },
    itemName: {
        type: String
    },
    warehouseLocation: {
        type: String
    },
    barCodeNumber: {
        type: String
    },
    inStock: {
        type: Boolean,
        default: true
    },
    lastCalibrated : {
        type: Date,
        default: Date.now
    }




----------

**Update** 

You can update using the PUT method.  

***Endpoint***: 
*/api/Iitem/:id*

***Method***:
 PUT


***Example of API call :*** 

/api/item/59723441942d200011b4b6dc


 
 
 ----------
 
**Delete**

You can delete an entry using the DELETE method. 

***Endpoint***: 
*/api/Iitem/:id*

***Method***:
 DELETE

***Example of API call :*** 
/api/item/59723441942d200011b4b6dc
