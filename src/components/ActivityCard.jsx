import Card from 'react-bootstrap/Card';

function ActivityCard({userList}) {
  return (
    <section>
                <>
                    <table className='table'>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>Password</th>
                        {

                            userList.map((item, index) => {
                                return (
                                    <>
                                        <tr style={{ backgroundColor: index % 2 === 0 ? '#808080' : '#FFFFFF' }}>
                                            <td>{item.userList.name}</td>
                                            <td>{item.userList.activitytype}</td>
                                            <td>{item.userList.description}</td>
                                            {/* <td><button className='but' onClick={() => handleDeleteUser(item.username)}>Delete</button></td> */}
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </table>
                </>
            </section>
  );
}

export default ActivityCard;