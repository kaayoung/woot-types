import React from 'react';
import likeIcon from '../../icons/heart-outline.png' ;
import etcIcon from '../../icons/ellipsis-horizontal.png' ;
import styled from 'styled-components';
import mbtiColor from '../../data/mbtiColor';

export default function CommentItem({commentWriterName,commentWriterMbti,commentContent,commentLikes}) {
    return (
        <Item>
            <div className="writer">
                <ContentMbti boxColor={mbtiColor(commentWriterMbti)}>{commentWriterMbti}</ContentMbti>
                <span className='name'>
                    {commentWriterName ? commentWriterName : "익명"}
                </span>
            </div>
            <div className="content">
                {commentContent}
            </div>
            <div className="icon">
                <button className='likes'>
                    <img src={likeIcon} alt="likeIcon" />
                    <span>{commentLikes}</span>
                </button>
                <button>
                    <img src={etcIcon} alt="etcIcon" />
                </button>
            </div>
        </Item>
    );
}

const Item = styled.li`
    padding: 10px 0;
    margin-bottom: 20px;
    img {
        width: 25px;
        height: 25px;
    }

    .writer {
        margin-bottom: 20px;
    }
    .writer .name {
        margin-left: 10px;
        font-size: 0.9rem;
    }

    .content {
        font-size: 1.1rem;
        line-height: 1.5rem;
        margin-bottom: 15px;
    }

    .icon {
        display: flex;
        justify-content: space-between;
    }
    .icon .likes {
        display: flex;
        align-items: center;
    }
    .icon .likes span {
        font-size: 1rem;
        margin-left: 10px;
        color: var(--gray);
    }
`

const ContentMbti = styled.span`
    font-size: 0.9rem;
    font-weight: 600;
    padding: 3px 7px;
    border-radius: 5px;
    color: var(--white);
    background-color: ${props => props.boxColor};
`
