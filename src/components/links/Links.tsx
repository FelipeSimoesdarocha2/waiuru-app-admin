// Next
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import { useRouter } from 'next/router';

// React
import React, { useState, useRef, useEffect } from 'react';

// Store
import { logout } from 'store/features/user';
import { useAppDispatch } from 'store/hooks';

// Assets
import more from 'assets/icons/more.svg';
import vector from 'assets/icons/vetor.svg';

// Styles
import * as S from './Links.styles';

// Models
import { LinksProps, DataProps } from './models';

// Button
import { Button } from 'components/button';

const Links = ({ data, label, type }: LinksProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const componentRef = useRef<HTMLDivElement>(null);

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const Logout = () => {
    dispatch(logout());
  };

  const handleLinkClick = (item: DataProps, path: Url) => {
    setDisabled(true);
    setLoading(true);
    router.push(path);
    onClose();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (componentRef.current && !componentRef.current.contains(event.target as HTMLElement)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Component ref={componentRef}>
      {type === 'primary' && (
        <Button.Action
          src={more}
          label={label}
          type="primary"
          onClick={onClose}
          loading={loading}
          disabled={disabled}
        />
      )}

      {type === 'secondary' && <Image src={vector} alt="icon" width={32} height={32} onClick={onClose} priority />}

      {type === 'link' && (
        <button onClick={onClose} className="link_btn">
          <p>{label}</p>
          <Image src={vector} alt="icon" priority />
        </button>
      )}

      {isOpen && (
        <div className={`${['content']} ${[type]}`}>
          {data &&
            data.map((item, index) => (
              <div key={index} className="item">
                <button
                  onClick={() => {
                    handleLinkClick(item, item.value);
                    if (item.name === 'exit' && Logout) {
                      Logout();
                    }
                  }}
                >
                  <p>{item.name}</p>
                </button>
              </div>
            ))}
        </div>
      )}
    </S.Component>
  );
};

export default Links;
