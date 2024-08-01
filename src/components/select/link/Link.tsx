// Next
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import { useRouter } from 'next/router';

// React
import { useState } from 'react';

// Store
import { logout } from 'store/features/user';
import { useAppDispatch } from 'store/hooks';

// Assets
import more from 'assets/icons/more.svg';
import vector from 'assets/icons/vetor.svg';

// Styles
import * as S from './Link.styles';

// Models
import { LinkProps, DataProps } from './models';

// Components
import { Button } from 'components/button';

const ModalLink = ({ data, label, type }: LinkProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const router = useRouter();
    const dispatch = useAppDispatch();

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

    return (
        <S.Component>
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
                    {data.map((item, index) => (
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

export default ModalLink;
