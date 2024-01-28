import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    database: 'uen',
    //port: 3306
    user: 'root',
    password: '0112',
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  });

  try {
    const query = 'SELECT auction_id, product_id, email, auction_price FROM auction';
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //   res.status(200).json({ 제목: '콜레라 시대의 사랑' });
}
