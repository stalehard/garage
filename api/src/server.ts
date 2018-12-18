import * as Hapi from "hapi"

export async function init(): Promise<Hapi.Server> {
    try {
        const port = process.env.API_PORT || 8080
        const server = new Hapi.Server({
            debug: { request: ['error'] },
            port: port,
            routes: {
                cors: {
                    origin: ["*"]
                }
            }
        })

        return server
    } catch (err) {
        console.log("Error starting server: ", err)
        process.env.NODE_ENV === 'production'
        ? process.exit(1)
        : process.kill(process.pid, 'SIGUSR2')
    }
}
  