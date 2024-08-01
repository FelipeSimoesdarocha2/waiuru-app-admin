// Next
import Image from 'next/image';

// React
import { useState, useRef, useEffect, Fragment } from 'react';

// Assets
import filter from 'assets/icons/filter.svg';

// Styles
import * as S from './ElectronicPoint.styles';

// Models
import { ElectronicPointProps } from './models';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';

const ElectronicPoint = ({ data }: ElectronicPointProps) => {
    const [dateStart, setDateStart] = useState('');
    const [dateFinish, setDateFinish] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const [disabled, setDisabled] = useState(false);
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleDateStartChange = (value: string) => {
        setDateStart(value);
    };

    const handleDateFinishChange = (value: string) => {
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

    useEffect(() => {
        if (!dateStart && !dateFinish) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [dateFinish, dateStart]);

    return (
        <S.Component>
            <S.Content>
                <S.Header>
                    <span />
                    <h2>Quadro de Pontos</h2>
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
                                <Button.Action label={'Filtrar'} onClick={handleFilterClick} disabled={disabled} type="primary" />
                            </S.Filter_Actions>
                        </S.Filter_Container>
                    )}
                </S.Header>
                <S.Info>
                    <S.Features>
                        <S.Wrap>
                            <p>Média de início:</p> <strong>08:05</strong>
                        </S.Wrap>
                        <S.Wrap>
                            <p>Média de fim:</p> <strong>16:01</strong>
                        </S.Wrap>
                    </S.Features>
                    <S.Features>
                        <S.Wrap>
                            <p>Hora extra:</p> <strong>03:00</strong>
                        </S.Wrap>
                        <S.Wrap>
                            <p>Faltas totais:</p> <strong>4</strong>
                        </S.Wrap>
                    </S.Features>
                </S.Info>
                <S.Divider />
                <S.List>
                    <S.Table>
                        <tbody>
                            {filteredData.map((dayData, dayIndex) => (
                                <Fragment key={dayIndex}>
                                    {dayData.list.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <p>{new Date(dayData.date).toLocaleDateString()}</p>
                                            </td>
                                            <td>
                                                <p>{new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </S.Table>
                </S.List>
            </S.Content>
        </S.Component>
    );
};

export default ElectronicPoint;
