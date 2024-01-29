// 공지게시판의 목록을 나타내는 페이지로 pagination이 들어갈 부분. 
// 멘토님이 말했던 ant design? 사이트에서 pagination 을 찾아 본 뒤 사용해 볼 것. 


import axios from "axios";
import React, { useCallback, useState, useEffect,useContext } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link'
// import UserContext from "../../userContext"

const NoticeBoardList = () => {
	const router = useRouter();
    
    // // 관리자인가 확인
    // const context = useContext(UserContext)
    // const userIsadmin = context.state.userData.isadmin

    

	const [noticeBoarList, setNoticeBoardList] = useState({
		status: "",
		message: "",
		data: [],
	});


//     const [page,setPage] = useState(0);
//     const [offset,setOffset] = useState(13)

//     const nextPage = () =>{
// setPage(page +1)
//     }

/**
 * 1. limit 0page
 * 2. limit 13 page + 1 * 13 13
 * 3. limit 26
 */
    let page = 1

	const getNoticeBoardList = useCallback(async () => {
		const resp = await axios.get('/api/boards/noticelist', noticeBoarList);
		setNoticeBoardList(resp.data);
	}, []);

	useEffect(() => {
		getNoticeBoardList();
	}, []);

	return (
		<div>
			{/* <h2>test - NoticeBoardList page</h2> */}

			{/* <!-- ================ contact section start ================= --> */}

			<section className="contact-section padding_top">
				<div className="container">
					<div className="row col-12">
						<div className="col-lg-2">
							<div>
								<h2>고객센터</h2>
							</div>
							<div className="col-lg-2">
							<Link href={"/board/noticeboardlist/"}>
								<p className="text-muted">공지사항</p>
							</Link>
							<Link href={"/board/faqboardlist"}>
								<p className="text-dark">FAQ</p>
							</Link>
						</div>
						</div>

						{/* 게시판내용 */}
						<div className="col-lg-10">
							<div>
								<h2 className="contact-title">공지사항</h2>
								<form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm">
									<div className="row">
										<div className="col-lg-12">
											<table className="table table">
												<thead>
													<tr>
														<th className="col-sm-4 col-md-6">제목</th>
														<th className="col-6 col-md-4">작성일</th>
														<th className="col-6 col-md-2">조회수</th>
													</tr>
												</thead>
												<tbody className="table-group-divider">
													{noticeBoarList.data.map((noticeBoardList) => (
														<tr key={noticeBoardList.notice_id}>
															{/* <td>{li.faq_id}</td> */}
															<td>
																<Link href={"/board/noticeboard/" + noticeBoardList.notice_id}>{noticeBoardList.title}</Link>
															</td>
															<td>{noticeBoardList.createAt}</td>
															<td>{noticeBoardList.cnt}</td>
														</tr>
													))}
												</tbody>
												<tfoot>
													<tr>
                                                        {/* 이 부분에 삼항연산자 넣어서 버튼 나타내기 */}
														<td colSpan={5}>
															<Link href={"/board/noticeinsert"}>
																<button className="btn btn-primary btn-sm float-right">글쓰기</button>
															</Link>
														</td>
													</tr>
												</tfoot>
											</table>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- ================ contact section end ================= --> */}

			{/* 숫자 버튼으로 페이지를 넘어감. */}

			<div className="col-lg-12">
				<div className="pageination">
					<nav aria-label="Page navigation example">
						<ul className="pagination justify-content-center">
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Previous">
									<i className="ti-angle-double-left"></i>
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href={page}>
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href={"2"}>
									2
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href={"3"}>
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Next">
									<i className="ti-angle-double-right"></i>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			{/* 끝 부분 */}
		</div>
	);
};

export default NoticeBoardList;
