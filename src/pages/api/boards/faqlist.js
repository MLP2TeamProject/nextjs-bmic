// router.get('/faqBoardList', function (req, res, next) {
//     console.log('faq Board List play... ')
//     boardDAO.faqBoardList((resp) => {
//         res.json(resp)
//     })
// })

import boardDAO from "./dao";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        console.log('고객센터 faqlist Router');
        boardDAO.faqBoardList((resp) => {
            res.json(resp)
        });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}