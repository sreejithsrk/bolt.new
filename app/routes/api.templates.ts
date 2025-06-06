import type { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { templates } from '~/templates';

export async function loader(_args: LoaderFunctionArgs) {
  return json(templates);
}
