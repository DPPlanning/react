export const Member = [
    {
        idx : 0,
        id : 'admin',
        pw : '1234',
        name : '관리자',
    },
    {
        idx : 1,
        id : 'jjsk109@gmail.com',
        pw : '1234',
        name : '장익순',
    },
]

export const getMember = (idx) => {
    return Member.find((member) => `${member.idx}` === idx);
}