// pages/api/protected.ts
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define type for the response data
interface TokenResponse {
    accessToken: string;
}

export default withApiAuthRequired(async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TokenResponse | { message: string }>
) {
    try {
        const { accessToken } = await getAccessToken(req, res);
        if (accessToken) {
            res.status(200).json({ accessToken });
        } else {
            res.status(500).json({ message: 'No access token found' });
        }
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
});
