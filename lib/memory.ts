// import { PineconeClient } from "@pinecone-database/pinecone";
// import { Redis } from "@upstash/redis";

// export type CompanionKey = {
//     companionName: string;
//     modelName: string;
//     userId: string;
// };

// export class MemoryManager {
//     private static instance: MemoryManager;
//     private history: Redis;
//     private vectorDBClient: PineconeClient;

//     public constructor() {
//         this.history = Redis.fromEnv();
//         this.vectorDBClient = new PineconeClient();
//     }

//     public async init() {
//         if (this.vectorDBClient instanceof PineconeClient) {
//             await this.vectorDBClient.init({
//                 apiKey: process.env.PINECONE_API_KEY!,
//                 environment: process.env.PINECONE_ENVIRONMENT!,
//             });
//         }

//     }
// }