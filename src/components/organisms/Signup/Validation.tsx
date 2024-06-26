import * as yup from 'yup';
export const validation = yup.object().shape({
  nickName: yup
    .string()
    .required('닉네임을 입력해주세요.')
    .min(2, '닉네임을 2~8글자이내로 특수문자 없이 작성해주세요.')
    .max(8, '닉네임을 2~8글자이내로 특수문자 없이 작성해주세요.')
    .matches(
      /^[가-힣a-zA-Z0-9]{2,8}$/,
      '닉네임을 2~8글자이내로 특수문자 없이 작성해주세요.',
    ),

  email: yup
    .string()
    .required('이메일을 다시입력해주세요')
    .email('이메일 형식을 맞춰서 입력해주세요.')
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      '이메일 형식을 맞춰서 입력해주세요.',
    ),
  password: yup
    .string()
    .min(6, '비밀번호를 6~14자로 입력해주세요.')
    .max(14, '비밀번호를 6~14자로 입력해주세요.')
    .required('비밀번호를 다시입력해주세요')
    .matches(
      /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{6,14}/,
      '비밀번호에 영문, 숫자, 특수문자를 포함해주세요.',
    ),
});
