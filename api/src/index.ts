import * as Server from "./server"

(async() => {
    const server = await Server.init()

    await server.start()
    console.log("Server started")
})()