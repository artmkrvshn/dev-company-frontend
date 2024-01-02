import { useEmployeesContext } from '../../contexts/EmployeesContext.js';
import { deleteById } from '../../service/employee.service.js';

const useHandleDelete = () => {
  const { employees, setEmployees } = useEmployeesContext();

  return async function (id) {
    await deleteById(id).then(() => {
      setEmployees([...employees].filter((i) => i.id !== id));
    });
  };
};

export default useHandleDelete;
