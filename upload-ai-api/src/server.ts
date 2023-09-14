import {fastify} from 'fastify'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { postUploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from "./routes/get-transcription";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";
import { fastifyCors} from '@fastify/cors'

const app = fastify()

app.register(fastifyCors, {
    origin: 'http://localhost:5173'
})


app.register(getAllPromptsRoute);
app.register(postUploadVideoRoute);
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)


app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server Running!')
})