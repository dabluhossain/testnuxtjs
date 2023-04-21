export default defineEventHandler( async (event) => {

    // handle query parametter
//const { name } = getQuery(event)

//  handle post data
//const { age } = await readBody(event)

const { data } = await $fetch('https://api.currencyapi.com/v3/currencies?apikey=nucA0oXRHN8X3qJtEsIabYLa7K6tkmbDVFju2Pyx')

    return data
    /*{
            message:`Hello, ${name} You are ${age} Year's old.`
        }*/
    }
)