import React, { useEffect, useState } from 'react';
import likeIcon from '../../icons/heart-outline.png' ;
import commentsIcon from '../../icons/chatbubble-outline.png' ;
import etcIcon from '../../icons/ellipsis-horizontal.png' ;
import styled from 'styled-components';
import CommentItem from './CommentItem';
import mbtiColor from '../../data/mbtiColor';

export default function ListItem({data}) {

    const [comment, setComment] = useState("") ;
    const [commentData, setCommentData] = useState(JSON.parse(localStorage.getItem(`${data.id}Comment`)));
    const [commentCnt, setCommentCnt] = useState() ;    

    localStorage.setItem(`${data.id}Comment`, JSON.stringify(commentData));    

    useEffect(() => {
        setCommentCnt(JSON.parse(localStorage.getItem(`${data.id}Comment`)).length + data.comments.length);
    },[commentData])

    function handleCommentSubmit(e) {
        e.preventDefault() ;                
        setCommentData([...commentData, comment ]);        
        setComment("");             
    }

    return (
        <Item>
            <Content className="main">
                <ToMbtiBox boxColor={mbtiColor(data.to)} className="to">{data.to}에게 질문</ToMbtiBox>                
                <div className="content">                    
                    {data.content}
                </div>
                <div className="writer">
                    <WriterMbtiBox boxColor={mbtiColor(data.writerMbti)} className='mbti'>{data.writerMbti}</WriterMbtiBox>
                    <span className='name'>{data.writerName=="" ? "익명" : data.writerName}</span>
                </div>
                <div className="icons">
                    <IconBtn className="likes">
                        <img src={likeIcon} alt="likeIcon" />
                        <span>{data.likes}</span>
                    </IconBtn>
                    <IconBtn className="comments">
                        <img src={commentsIcon} alt="commentsIcon" />
                        <span>{data.comments.length}</span>
                    </IconBtn>
                    <div className="etc">
                        <img src={etcIcon} alt="etcIcon" />
                    </div>
                </div>
            </Content>
            <Comments className="comments">
                <button className='commentsBtn'>댓글 {commentCnt}개 모두 보기</button>
                <ul>
                    {data.comments.slice(0,2).map(x=> {
                        return (<CommentItem
                            key={Math.random()}
                            commentWriterName={x.commentWriterName}
                            commentWriterMbti={x.commentWriterMbti}
                            commentContent={x.commentContent}
                            commentLikes={x.commentLikes}
                            />)
                    })}
                </ul>
                <form className="write" onSubmit={handleCommentSubmit}>
                    <img src={commentsIcon} alt="commentsIcon" />
                    <input 
                        type="text" 
                        placeholder='댓글'
                        value={comment}
                        onChange={e=>setComment(e.target.value)}                    
                    />
                </form>
            </Comments>
        </Item>
    );
}

const Item = styled.div`
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 20px solid var(--lighter-gray);
`
const Content = styled.div`
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: 30px;
    img {
        width: 25px;
        height: 25px;
    }
    .content {
        font-size: 1.2rem;
        margin-bottom: 20px;
        line-height: 1.7rem;
    }
    .writer {
        margin-bottom: 20px;
    }
    .writer .name {
        margin-left: 10px;
        font-size: 0.9rem;
    }

    .icons {
        display: flex;
        position : relative ;
        margin-bottom: 25px;
    }
    .etc {
        position: absolute;
        right: 0;
    }
`
const ToMbtiBox = styled.div`
    display: inline-block;
    color: var(--white);
    background-color: ${props => props.boxColor};
    border-radius: 30px;
    padding: 8px 13px;
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 600;
`

const WriterMbtiBox = styled.span`
    font-size: 0.9rem;
    font-weight: 600;
    padding: 3px 7px;
    border-radius: 5px;
    color: var(--white);
    background-color: ${props => props.boxColor};  
`
const IconBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
    img {
        margin-right: 10px;
    }
    span {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--gray);
    }
`
const Comments = styled.div`
    img {
        width: 25px;
        height: 25px;
    }
    .commentsBtn {
        color: var(--gray);
        font-size: 0.9rem;
        padding-left: 0;
        margin-bottom: 30px;
    }

    .write {
        margin-top: 10px;
        display: flex;
        background-color: var(--lighter-gray);
        padding: 20px;
        border-radius: 30px;
    }
    .write input{
        background-color: transparent;
        border: 0;
        font-size: 0.95rem;
        width: 100%;
    }
    .write input::placeholder {
        font-size: 0.95rem;
        color : var(--gray) ;
    }
`
