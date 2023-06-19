import { MSCOTT_GIPHY_IDS } from "./contstants/giphy"

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const randomGiphyId = MSCOTT_GIPHY_IDS[Math.floor(Math.random() * MSCOTT_GIPHY_IDS.length)];

		const response = await fetch(`https://media.giphy.com/media/${randomGiphyId}/200.webp`);
		const body = await response.arrayBuffer();

		return new Response(body, {
			headers: {
				"content-type": "image/webp",
			},
		});
	},
};
