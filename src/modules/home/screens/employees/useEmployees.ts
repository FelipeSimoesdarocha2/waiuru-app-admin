// React
import { useState, useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { EmployeeDto } from 'models/employees';
import { GetTaskDto } from 'models/task';

// Api
import { useGetEmployees } from 'api/employee';
import { useGetTaskRequest } from 'api/task';

// Constants
import { screen, links } from './Employees.constants';

export const useEmployees = () => {
    const [searchEmployee, setSearchEmployee] = useState('');
    const [searchActivitie, setSearchActivitie] = useState('');

    const [openForm, setOpenForm] = useState<boolean>(false);

    const [selectedScreen, setSelectedScreen] = useState('1');
    const [filteredEmployee, setFilteredEmployee] = useState<EmployeeDto[]>([]);
    const [filteredActivitie, setFilteredActivitie] = useState<GetTaskDto[]>([]);

    const session = useAppSelector(selectUser);

    const {
        data: setEmployees,
        isLoading: employeeLoadings,
        refetch,
    } = useGetEmployees(session?.user?.condominium_id, !!session?.user.condominium_id);

    const {
        data: setTask,
        isLoading: taskLoadings,
        refetch: refetchTask,
    } = useGetTaskRequest(session?.user?.condominium_id, !!session?.user.condominium_id);

    useEffect(() => {
        if (setEmployees && setEmployees.length > 0) {
            const dataFilter = setEmployees.filter(item => item.name.toLowerCase().includes(searchEmployee.toLowerCase()));
            setFilteredEmployee(dataFilter);
        }
    }, [setEmployees]);

    const handleSearchEmployee = (value: string) => {
        setSearchEmployee(value);

        if (setEmployees === undefined) return;
        const dataFilter = setEmployees.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredEmployee(dataFilter);
    };

    useEffect(() => {
        if (setTask && setTask.length > 0) {
            const dataFilter = setTask.filter(item => item.description.toLowerCase().includes(searchActivitie.toLowerCase()));
            setFilteredActivitie(dataFilter);
        }
    }, [setTask]);

    const handleSearchActivitie = (value: string) => {
        setSearchActivitie(value);

        if (setTask === undefined) return;
        const dataFilter = setTask.filter(item => item.description.toLowerCase().includes(value.toLowerCase()));
        setFilteredActivitie(dataFilter);
    };

    return {
        links,
        screen,
        setTask,
        openForm,
        taskLoadings,
        setEmployees,
        selectedScreen,
        searchEmployee,
        searchActivitie,
        filteredEmployee,
        employeeLoadings,
        filteredActivitie,
        setOpenForm,
        setSelectedScreen,
        handleSearchEmployee,
        handleSearchActivitie,
    };
};
