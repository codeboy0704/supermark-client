//Del array de los estableciemientos , obtener sus ids, obtengo precios y los ordeno dependiend de lo que quiera el user

export default function matchProductsWithEstablishment({product, establishments}) {
    const results = []
    const match = establishments.map(sta =>{
        const found = product.prices.find(pr => pr._id == sta._id || pr.name == sta.name)
        return results.push(found)
    })
    console.log(product)
    return results
}