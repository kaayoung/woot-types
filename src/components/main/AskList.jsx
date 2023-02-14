import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mbtiColor from '../../data/mbtiColor';
import commentIcon from '../../icons/chatbubble-outline.png' ;


export default function AskList({id,to, content, writerMbti,writerName,likes,commentsCnt}) {

    const [commentCnt, setCommentCnt] = useState() ;
    // let cnt = JSON.parse(localStorage.getItem(`${id}Comment`)).length ; 

    useEffect(() => {
        setCommentCnt(JSON.parse(localStorage.getItem(`${id}Comment`)).length + commentsCnt);
        console.log(JSON.parse(localStorage.getItem(`${id}Comment`)).length)
    },[])

    return (
        <List>
            <MbtiBox boxColor={mbtiColor(to)} className="mbti">{to}</MbtiBox>
            <div className="contents">{content}</div>
            <div className="comment">
                <img src={commentIcon} alt="commentIcon" />
                <p>{commentCnt}</p>
            </div>
        </List>
    );
}

const List = styled.li`
    display: flex;
    align-items: center;
    margin-top: 25px;
    position: relative;
    font-size: 1.18rem;
    font-weight: 600;
    cursor: pointer;

    .contents {               
        flex-basis: 340px;
        text-overflow: ellipsis;
        white-space: nowrap ;
        overflow: hidden;
    }
    .comment {
        display: flex;
        align-items  : center;
        position : absolute;
        right: 0;
        color: var(--gray);
    }
    .comment img {
        width: 25px;
        height: 25px;
        margin-right: 8px;
    }
`

const MbtiBox = styled.div`
    font-weight: 800;
    font-size: 0.88rem;
    color: var(--white);
    background-color: ${props => props.boxColor};
    border-radius: 20px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    margin-right: 10px;
`