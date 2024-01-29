// router.post('/noticeInsert', function (req, res, next) {
//     const data = req.body
//     console.log('notice insert .. router')
//     boardDAO.noticeInsert(data, (resp) => {
//         res.json(resp)
//     })
// })

import boardDAO from './dao';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('notice insert ... router');
        const data = req.body; // body에서 안넘어 올 경우에 query 넣어주기
        boardDAO.noticeInsert(data, (resp) => {
            res.json(resp);
        });
    } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
