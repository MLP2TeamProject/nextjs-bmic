// router.post('/noticeDelete/:id', function (req, res, next) {
//     const id = req.params.id
//     console.log('공지 게시글 삭제, router', id)
//     boardDAO.noticeDelete(id, (resp) => {
//         res.json(resp)
//     })
// })

import boardDAO from "./dao";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('notice delete .. ');
        const { id } = req.query
        boardDAO.noticeDelete(id, (resp)=> {
            res.json(resp);
        });
    }
}