import { GetServerSidePropsContext } from 'next';

export async function getTokenFromCookies(context: GetServerSidePropsContext): Promise<string> {
  // You can add additional logic here if needed
  return context.req.cookies.token || 'No token found';
}
