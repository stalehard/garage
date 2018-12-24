import * as handlers from "./handlers";

const routes = [
    {
        method: "GET",
        path: "/self",
        config: {
        //   validate: input.GetCurrentPayload,
        //   response: output.AuthInfo,
          description: "Get the current user",
          tags: ["api", "user"],
        },
        handler: handlers.getSelfData,
    },
];

export default routes;
