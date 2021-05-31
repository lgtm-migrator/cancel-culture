import { rateLimit } from '$lib/utils/limit';
import type { RequestHandler } from '@sveltejs/kit';
import * as uuid from 'uuid';

const limiter = rateLimit();

export const get: RequestHandler = async () => {
	return {
		body: { ...limiter.check(10, 'CACHE_TOKEN'), id: uuid.v4() }
	};
};
