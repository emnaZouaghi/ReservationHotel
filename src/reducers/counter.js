
const hotels= [

    {
   
       "name": "Movenpick",
   
       "description": "Mövenpick Hotels & Resorts est une chaîne hôtelière internationale dont le siège est à Baar, en Suisse. Le groupe exploite actuellement plus de 80 établissements à travers 23 pays et une vingtaine d'autres sont en cours de planification ou de construction",
   
       "price": "100€",
   
       "imageUrl": "https://d1rioy1v9s51jr.cloudfront.net/pics/18299/900x540/la-badira---adults-only-panorama-2_6073.jpg"
   
   },
   
   {
   
       "name": "Hilton",
   
       "description": "Hilton est un groupe hôtelier américain fondé par Conrad Hilton au début du XXᵉ siècle. Hilton demeure le second groupe hôtelier mondial avec 4 278 établissements et 700 000 chambres dans 85 pay2",
   
       "price": "120€",
   
       "imageUrl": "https://www.hiltonhotels.com/assets/img/brands/hilton.png"
   
   },
   
   {
   
       "name": "four seasons",
   
       "description": "Four Seasons Hotels and Resorts est un groupe hôtelier de luxe dont le siège se trouve à Toronto en Ontario. La société a été créée par Isadore “Issy” Sharp en 1960 avec l'ouverture du premier First Season à Toronto.",
   
       "price": "180€",
   
       "imageUrl": "https://www.tendancehotellerie.fr/local/cache-vignettes/L750xH345/arton11883-9366a.jpg?1568812755"
   
   }
   
   ]



const counterReducer=(state=hotels,action)=>{

    return state;
};
export default counterReducer;