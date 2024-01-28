import { Express } from 'express';
import Router from 'next/router';
//이거 쓰지 말라고 하셨던 것 같음
import multer from 'multer';
import path from 'path';
import productDAO from './dao';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, '/public/upload/');
      //여기서 public 앞에 슬래시 여부..
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default async function handler(req, res) {
  const biddingUpload = upload.single('file1');

  biddingUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      res.status(500).json({ status: 500, message: 'error' });
    } else if (err) {
      console.log(err);
      res.status(500).json({ status: 500, message: 'error' });
    } else {
      const data = req.body;
      // 파일 업로드 성공시
      console.log('00', data.inputData);
      console.log('11', req.file.filename);
      productDAO.bidding(data.inputData, req.file.filename, (resp) => {
        res.json(resp);
      });
    }
  });
}
