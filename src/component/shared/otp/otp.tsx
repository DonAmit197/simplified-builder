import {TextField} from '@mui/material';
import Box from '@mui/material/Box';
import {ChangeEvent, ClipboardEvent, Dispatch, Fragment, KeyboardEvent, SetStateAction, useRef} from 'react';

const OTP = ({
  length,
  value,
  onChange,
}: {
  length: number;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}) => {
  const inputRefs = useRef<HTMLInputElement[]>(new Array(length).fill(null));

  const focusInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, currentIndex: number) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case 'Delete':
        event.preventDefault();
        onChange((prevOtp) => {
          return prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
        });

        break;
      case 'Backspace':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange((prevOtp) => {
          return prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, currentIndex: number) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
        indexToEnter += 1;
      } else {
        break;
      }
    }

    onChange((prev) => {
      const otpArray = prev.split('');
      otpArray[indexToEnter] = currentValue[currentValue.length - 1];
      return otpArray.join('');
    });

    if (currentValue !== '') {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (currentIndex: number) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>, currentIndex: number) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes('text/plain')) {
      let pastedText = clipboardData.getData('text/plain');
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split('');

      for (let i = indexToEnter; i < length; i += 1) {
        otpArray[i] = pastedText[i - indexToEnter] ?? ' ';
      }

      onChange(otpArray.join(''));
    }
  };

  return (
    <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
      {new Array(length).fill(null).map((_, index) => (
        <Fragment key={index}>
          <TextField
            inputRef={(ref) => (inputRefs.current[index] = ref)}
            value={value[index] ?? ''}
            inputProps={{
              onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => handleKeyDown(event, index),
              onChange: (event: ChangeEvent<HTMLInputElement>) => handleChange(event, index),
              onClick: () => handleClick(index),
              onPaste: (event: ClipboardEvent<HTMLInputElement>) => handlePaste(event, index),
            }}
            size='small'
            sx={{
              width: '40px',
              textAlign: 'center',
            }}
          />
        </Fragment>
      ))}
    </Box>
  );
};

export default OTP;
