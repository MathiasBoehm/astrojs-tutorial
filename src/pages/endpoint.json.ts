import data from '../data/data.json';

export const GET = async ({}) => {
    return new Response(JSON.stringify(data), {
        headers: {
            "content-type" : "application/json"
        },
        status : 200
    });
}; 