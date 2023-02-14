const askData = [
    {
        id : 0,
        to : "ENFP" ,
        content : "ENFP 여러분 시험공부 잘 되시나요 ㅜㅜ? 다음주부터 시험인데 먹을거밖에 생각이 안나요...",
        writerMbti : "ISFP",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "ENFP" ,
                commentContent : "전 친구들이랑 시험끝나고 뭐먹을지만 적고있어요",
                commentLikes : 1 
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "ENFP" ,
                commentContent : "삐빅 - 정상입니다 - ",
                commentLikes : 0
            }
        ]
    } ,
    
    {
        id : 1,
        to : "ISFP" ,
        content : "요즘 너무 아무것도 하기 싫어요,,",
        writerMbti : "ISFP",
        writerName : "" ,
        likes : 16 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTJ" ,
                commentContent : "폰 끄고 지금 당장 공부하세요 !",
                commentLikes : 3
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "ENFP" ,
                commentContent : "삐빅 - 정상입니다 - ",
                commentLikes : 1
            }
        ]
    } ,
    
    {
        id : 2,
        to : "ESFJ" ,
        content : "고민좀 들어주세요 !!!",
        writerMbti : "INFP",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTP" ,
                commentContent : "고민이 뭔가요 ??",
                commentLikes : 3
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "ENFJ" ,
                commentContent : "힘든일 있어요??",
                commentLikes : 1
            }
        ]
    },
    {
        id : 3,
        to : "ENFP" ,
        content : "ENFP 여러분 다들 공부 열심히 하나요? 전 진짜 너무 공부가 안되네요.......",
        writerMbti : "ISFP",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTJ" ,
                commentContent : "폰 끄고 지금 당장 공부하세요 !",
                commentLikes : 3
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "ENFP" ,
                commentContent : "삐빅 - 정상입니다 - ",
                commentLikes : 1
            }
        ]
    } ,
    {
        id : 4,
        to : "ISTJ" ,
        content : "P인 친구랑 여행가려고 하는데 벌써 안 맞는것같아요.....",
        writerMbti : "ISTJ",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTJ" ,
                commentContent : "여행가서 싸우면 힘들텐데,,,",
                commentLikes : 3
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTP" ,
                commentContent : "여행가는데 계획을 왜 짜요",
                commentLikes : 1
            }
        ]
    } ,
    {
        id : 5,
        to : "ESTJ" ,
        content : "얼른 개강했으면 좋겠다 !!",
        writerMbti : "ISTJ",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "ISTP" ,
                commentContent : "?",
                commentLikes : 30
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTP" ,
                commentContent : "?",
                commentLikes : 10
            }
        ]
    } ,
    {
        id : 6,
        to : "ISTJ" ,
        content : "J인 친구랑 여행가려고 하는데 벌써 안 맞는것같아요.....",
        writerMbti : "ISTJ",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "INFP" ,
                commentContent : "ㅠㅠㅠ",
                commentLikes : 3
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "INFP" ,
                commentContent : "ㅜㅜ",
                commentLikes : 1
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "INFP" ,
                commentContent : "ㅜㅜㅜㅜㅜㅜㅜㅜ",
                commentLikes : 2
            }
        ]
    } ,
    {
        id : 7,
        to : "ISTP" ,
        content : "너무너무 귀찮다 !!",
        writerMbti : "ISTJ",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTJ" ,
                commentContent : "나도!!",
                commentLikes : 3
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTP" ,
                commentContent : "저도요!!",
                commentLikes : 1
            }
        ]
    } ,
    {
        id : 8,
        to : "ISTJ" ,
        content : "졸려요 졸려",
        writerMbti : "ISTJ",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTJ" ,
                commentContent : "저도요!",
                commentLikes : 3
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "INTP" ,
                commentContent : "저도..",
                commentLikes : 1
            }
        ]
    } ,
    {
        id : 9,
        to : "ISFP" ,
        content : "공부하기 싫다..",
        writerMbti : "ISFP",
        writerName : "" ,
        likes : 6 ,
        comments : [
            {
                commentWriterName : "" ,
                commentWriterMbti : "ISFP" ,
                commentContent : "저도요!!",
                commentLikes : 3
            } ,
            {
                commentWriterName : "" ,
                commentWriterMbti : "ISFP" ,
                commentContent : "저도......",
                commentLikes : 1
            }
        ]
    } 
    
]

export default askData ;