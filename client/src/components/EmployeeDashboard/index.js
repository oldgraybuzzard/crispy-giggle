import React, { useEffect } from 'react';
import { selectHttpOptionsAndBody, useMutation } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import {
  UPDATE_EMPLOYEES,
  UPDATE_CURRENT_EMPLOYEE,
  UPDATE_COURSES,
  UPDATE_CURRENT_COURSE,
} from '../../utils/actions';
import { ADD_EMPLOYEE } from '../../utils/mutations'
import { QUERY_EMPLOYEES, QUERY_ME } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { pluralize } from '../../utils/helpers';
import { useQuery } from '@apollo/client';
import { spinner } from '../../assets/img/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';

const EmployeeDashBoard = () => {
  const [state, dispatch] = useStoreContext();
  const { currentEmployee } = state;

  const { loading, data } = useQuery(QUERY_EMPLOYEES, QUERY_ME);

  const [addEmployee, {error}] = useMutation(ADD_EMPLOYEE);

  useEffect(() => {
    if(data) {
      dispatch({
        type: UPDATE_EMPLOYEES,
        employees: data.employees
      });

      data.products.forEach((employee) => {
        idbPromise('employees', 'put', employee);
      });
    } else if (!loading) {
      idbPromise('employees', 'get').then((employees) => {
        dispatch({
          type: UPDATE_EMPLOYEES,
          employees: employees
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterEmployees() {
    if (!currentEmployee) {
      return state.employees;
    }
    return state.employee.filter(
      (employee => employee.employer._id === currentEmployee)
    );
  }

return(
    <div>
      <h2>The Employees</h2>
      {state.employees.length ? (
        <div className='flex-row'>
          {/* {filterEmployees().map((employee) => (
            <EmployeeList
            key={employee._id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            email={employee.email}
            />
      ))} */}
      </div>
      ) : (
        <h3>No Employees to display</h3>
      )}
      {loading ? <img src={spinner} alt='loading'/> : null}
    </div>
  );
}

export default EmployeeDashBoard;
