import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'redux/users/usersSelector';
import { deleteUser, updateStatus } from 'redux/users/usersSlice';

export const UsersList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  return (
    <>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>N</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, age, status }, index) => {
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>

                  <td>{age}</td>
                  <td
                    onClick={() => {
                      dispatch(updateStatus(id));
                    }}
                  >
                    {status}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => dispatch(deleteUser(id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No users!</p>
      )}
    </>
  );
};
