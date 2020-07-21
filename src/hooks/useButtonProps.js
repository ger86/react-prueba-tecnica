import {useMemo} from 'react';

export default function useButtonProps(postStatus, fullWidth = true) {
  const buttonProps = useMemo(() => {
    return {
      fullWidth,
      disabled: postStatus.isSending
    };
  }, [fullWidth, postStatus.isSending]);

  return buttonProps;
}
