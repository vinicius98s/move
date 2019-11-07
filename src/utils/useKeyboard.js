import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export default function useKeyboard() {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const handleKeyboardShow = () => {
    setIsKeyboardShown(true);
  };

  const handleKeyboardHide = () => {
    setIsKeyboardShown(false);
  };

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow,
    );
    const keyboardDidHide = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardHide,
    );

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  });

  return isKeyboardShown;
}
