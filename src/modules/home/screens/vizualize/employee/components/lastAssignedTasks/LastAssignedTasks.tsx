// Next
import Image from 'next/image';

// React
import { useState, useRef, useEffect, Fragment } from 'react';

// Assets
import close from 'assets/icons/close.svg';
import filter from 'assets/icons/filter.svg';

// Styles
import * as S from './LastAssignedTasks.styles';

// Models
import { ElectronicPointProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';

const LastAssignedTasks = ({ data }: ElectronicPointProps) => {
    const [dateStart, setDateStart] = useState('');
    const [dateFinish, setDateFinish] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleDateStartChange = (value: string) => {
        setDateStart(value);
    };

    const handleDateFinishChange = (value: string) => {
        setDateFinish(value);
    };

    const cleanDateStartChange = (value: string) => {
        setDateStart(value);
    };

    const cleanDateFinishChange = (value: string) => {
        setDateFinish(value);
    };

    const handleFilterClick = () => {
        setOpenFilter(false);
        filterData();
    };

    const filterData = () => {
        if (!dateStart && !dateFinish) {
            setFilteredData(data);
        } else {
            const start = dateStart ? new Date(dateStart) : new Date(0);
            const end = dateFinish ? new Date(dateFinish) : new Date();

            const filtered = data.filter(dayData => {
                const dayDate = new Date(dayData.date);
                return dayDate >= start && dayDate <= end;
            });

            setFilteredData(filtered);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as HTMLElement)) {
            setOpenFilter(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <S.Component>
            <S.Content>
                <S.Header>
                    <span />
                    <h2>Últimas tarefas atribuídas</h2>
                    <S.Filter_Btn onClick={() => setOpenFilter(true)}>
                        <Image src={filter} alt="filter" />
                    </S.Filter_Btn>
                    {openFilter && (
                        <S.Filter_Container ref={componentRef}>
                            <S.Filter_Header>
                                <p>Filtrar por:</p>
                            </S.Filter_Header>
                            <S.Filter_Content>
                                <Input.Text
                                    title="De:"
                                    id="date_start"
                                    type="date"
                                    onChange={handleDateStartChange}
                                    value={dateStart}
                                />
                                <Input.Text
                                    title="Até:"
                                    id="date_finish"
                                    type="date"
                                    onChange={handleDateFinishChange}
                                    value={dateFinish}
                                />
                            </S.Filter_Content>
                            <S.Filter_Actions>
                                <Button.Link
                                    label={'Cancelar'}
                                    onClick={() => setOpenFilter(false)}
                                    type="secondary"
                                    className="close"
                                />
                                <Button.Action label={'Filtrar'} onClick={handleFilterClick} type="primary" />
                            </S.Filter_Actions>
                        </S.Filter_Container>
                    )}
                </S.Header>
                {(dateStart || dateFinish) && (
                    <S.Info>
                        <span>
                            <p>Filtro aplicado:</p>
                        </span>
                        <S.Features>
                            {dateStart && (
                                <S.Wrap>
                                    <p>De: {dateStart}</p>
                                    <S.Filter_Btn onClick={() => cleanDateStartChange('')}>
                                        <Image src={close} alt="close" />
                                    </S.Filter_Btn>
                                </S.Wrap>
                            )}
                            {dateFinish && (
                                <S.Wrap>
                                    <p>Até: {dateFinish}</p>
                                    <S.Filter_Btn onClick={() => cleanDateFinishChange('')}>
                                        <Image src={close} alt="close" />
                                    </S.Filter_Btn>
                                </S.Wrap>
                            )}
                        </S.Features>
                    </S.Info>
                )}
                <S.List>
                    <S.Table>
                        <tbody>
                            {filteredData.map((data, index) => (
                                <tr key={index}>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </S.Table>
                </S.List>
            </S.Content>
        </S.Component>
    );
};

export default LastAssignedTasks;
