import { useRef, useEffect, useState, useCallback } from 'react';

interface DropdownProps {
  initialIsVisible?: boolean;
}

interface DropdownResult {
  isVisible: boolean;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

export const useDropdown = ({ initialIsVisible = false }: DropdownProps = {}): DropdownResult => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsVisible(false);
    }
  }, [setIsVisible]);

  const toggleDropdown = useCallback(() => {
    setIsVisible((prevVisible) => !prevVisible);
  }, [setIsVisible]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { isVisible, toggleDropdown, dropdownRef };
};


