'use restrict'

export default class Ws
{
    constructor()
    {
        
    }

    init()
    {

    }

    post(url, data , callBack)
    {
        $.ajax({
            url: url, 
            type: 'POST', 
            contentType: 'application/json', 
            data: JSON.stringify(data)}
        ).done(function(data) {

            callBack(data);
        });   
    }
    get(url , callBack)
    {
        $.ajax({
            url: url, 
            type: 'GET'
        }).done(function(data) {


            callBack(data);
        });   
    }
}

Ws.BASE_URL = '';