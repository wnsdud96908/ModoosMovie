import styled from "styled-components";
import Button from "../common/Button";

const PostWriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const PostWriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
    <PostWriteActionButtonsBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 {isEdit ? "수정" : "등록"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </PostWriteActionButtonsBlock>
  );
};

export default PostWriteActionButtons;
