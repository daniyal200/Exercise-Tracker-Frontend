import Card from 'react-bootstrap/Card';

function ActivityCard({userList}) {
    console.log(userList)
  return (
    
    <section>
        
                <>
                    <table className='table'>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Activity Type</th>
                        <th>Duration</th>
                        {

                            userList.map((item, index) => {
                                return (
                                    <>
                                        <tr style={{ backgroundColor: index % 2 === 0 ? '#808080' : '#FFFFFF' }}>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.activitytype}</td>
                                            
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