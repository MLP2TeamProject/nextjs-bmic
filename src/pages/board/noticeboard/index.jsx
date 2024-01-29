// 공지 페이지의 detail 페이지 임.,
// 목록버튼을 제외한 나머지 수정, 삭제 버튼은 관리자만 사용이 가능하게 

import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link'



const NoticeBoardInsert = () => {
    const router = useRouter();

    // 유효입력데이터
    const [noticeData, setNoticeData] = useState({ id:'', title: '', content: '' });

    const changeNoticeData = useCallback((e) => {
        setNoticeData((noticeData) => ({ ...noticeData, [e.target.name]: e.target.value }))
    }, [noticeData])

    // 등록버튼 클릭시에. 
    const noticeInsert = useCallback(async (e) => {
        e.preventDefault()
        // post 방식은 url 요청 후 data를 전송해야한다. ***
        const resp = await axios.post('/api/boards/noticeinsert', noticeData)
        if (resp.data.status === 500) window.alert(resp.data.message)
        else {
            // 화면 자동 목록으로 
            router('/board/noticeboardlist')
        }
    }, [noticeData, router])

	return (
		<div>
			{/* Notice Insert Page (고객센터 - 공지 - 글쓰기) */}
			{/* <h2>test - NoticeBoardInsert page</h2> */}

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
												<tbody className="col-12">
													<tr className="col-sm-12">
														<td className="col-sm-2">제목</td>
														<td>
															{/* 색이 정해지면 style.css 에서 .single-textarea 의 설정 바꾸면 선 색이 바뀜 임시 연보라*/}
															<textarea cols="100" rows="1" name="title" className="bmic-textarea"
                                                                placeholder="제목을 입력해주세요." value={noticeData.title} onChange={changeNoticeData}></textarea>
														</td>
													</tr>
													<tr>
														<td className="col-sm-2">내용</td>
                                                        {/* className="form-control"  */}
														<td>
															<textarea cols="100" rows="25" name="content" className="bmic-textarea"
                                                                placeholder="내용을 입력해주세요." value={noticeData.content} onChange={changeNoticeData}></textarea>
														</td>
													</tr>
												</tbody>
											</table>
											<div className="container">
												<div className="col-auto"></div>
                                                <button type="button" className="btn btn-primary btn-sm float-right bnt-space" onClick={noticeInsert}>저장</button>
                                                <button type="button" className="btn btn-danger btn-sm float-right bnt-space" onClick={()=>router('/board/noticeboardlist')} >취소</button>
												
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NoticeBoardInsert;