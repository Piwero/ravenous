const apiKey="irLTREHdPJna2wFLDG7v6tEgEQL14XBLWD2Bm9gzVh49a-Dcw-uG5KxPtthDuF0oHsyPXVv7iEdUmsDxlhgO6tCYfr4XdKbmaL-whUsjHyUw3RxW9Gq8VigPka9ZYHYx"
const Yelp ={};

const search = (term, location, sortBy)=>{
    return(
        fetch(```https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}```,{
            headers:{
            Authorization:`Bearer ${apiKey}`
            }
        }).then(response=>{ return response.json();
        }).then(jsonResponse=>{
            if(jsonResponse.businesses){return jsonResponse.businesses.map(business=>{
                return{id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city : business.location.city,
                state: business.location.state,
                zipCode: business.location.zipCode,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
                
                }
            });}
        })
    )
};

export default search;