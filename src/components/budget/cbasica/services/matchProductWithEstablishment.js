//Del array de los estableciemientos , obtener sus ids, obtengo precios y los ordeno dependiend de lo que quiera el user

export default function matchProductsWithEstablishment({product, establishments}) {
    const results = []
    const match = establishments.map(esta =>{
        const found = product.prices.find(pr => pr.stablishment == esta.name)
        if (found) {
            results.push({
                name: found.stablishment,
                price: found.price,
                _id: found._id
            })
        }   
    })
    return results
}