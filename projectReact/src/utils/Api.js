const onResponce = (res)=> {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({baseUrl, token}) {
        this._baseUrl = baseUrl;
        this._token = token;
    }

    getProductsList(){
        return fetch(`${this._baseUrl}/posts`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    deleteProducts(productId){
        return fetch(`${this._baseUrl}/posts/${productId}`, {
            method:  "DELETE" ,
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    getProductById(postID){
        return fetch(`${this._baseUrl}/posts/${postID}`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }


    changeLikeStatus(productId, isLike){
        return fetch(`${this._baseUrl}/posts/likes/${productId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }
  
    setNewPost({title,text,image,tag}){
        const tags=[tag];
                
    return fetch(`${this._baseUrl}/posts`, {
            method: "POST",
            headers: {
                authorization: this._token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({title,text,image,tags})
            
        }).then(onResponce)
    
    }
    ChahgePost({title,text,image,tag},postID){
        const tags=[tag];
                
    return fetch(`${this._baseUrl}/posts/${postID}`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({title,text,image,tags})
            
        }).then(onResponce)
    
    }

}

const config = {
    baseUrl: 'https://api.react-learning.ru',
   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiZGMiLCJpYXQiOjE2NDcwMTM4ODgsImV4cCI6MTY3ODU0OTg4OH0.lpY39cEowFhVV-sES7dFuYVlJnJahhZRkNZQq2LJZWI',
}

const api = new Api(config);

export default api;

