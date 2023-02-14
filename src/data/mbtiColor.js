export default function mbtiColor(mbti) {
    if (mbti.includes('N') && mbti.includes("F")) {
        return 'var(--NF--)'
    } else if (mbti.includes('N') && mbti.includes("T")) {
        return 'var(--NT--)'
    } else if (mbti.includes('S') && mbti.includes("J")) {
        return 'var(--SJ--)'
    } else if (mbti.includes('S') && mbti.includes("P")) {
        return 'var(--SP--)'
    }
}