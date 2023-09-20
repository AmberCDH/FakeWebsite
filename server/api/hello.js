export default defineEventHandler(async(event) => {
    //het gebruik maken van de env doe je: const { naam } = useRuntimeConfig()
    //https://api.blablabla.com/apiKey=${naam}
    //episode 13 netninja

    //handle quuery arams
    const {name} = getQuery(event)

    //hande post data
    const {age} = await readBody(event)

    return{
        message: `Hello ${name}! You are ${age} years old.`
    }
})