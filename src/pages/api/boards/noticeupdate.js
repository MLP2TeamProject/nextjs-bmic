// router.post('/noticeUpdate', function (req, res, next) {
//     const data = req.body
//     console.log('notice update .. router')
//     boardDAO.noticeUpdate(data, (resp) => {
//         res.json(resp)
//     })
// })

import boardDAO from "./dao";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('notice update...');
        const data = req.body;
        boardDAO.noticeUpdate(data, (resp)=>{
            res.json(resp);
        })
    }
}