import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const ActivityForm = ({user,setUser,onSubmit}) => {
return (
    <div class="container col-md-6 col-sm-12 m-auto">
        <Button variant="primary" size="lg">
        <Link to="/dashboard">Dashboard</Link>
        </Button>{' '}
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" value={user.name} onChange={e => setUser({ name: e.target.value, description: user.description, activitytype: user.activitytype, duration: user.duration })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="description" placeholder="Description" value={user.description} onChange={e => setUser({ name: user.name, description: e.target.value, activitytype: user.activitytype, duration: user.duration })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicActivity Type">
                <Form.Label>Activity Type</Form.Label>
                <Form.Control type="activitytype" placeholder="Activity Type" value={user.activitytype} onChange={e => setUser({ name: user.name, description: user.description, activitytype: e.target.value, duration: user.duration })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDuration">
                <Form.Label>Duration</Form.Label>
                <Form.Control type="duration" placeholder="Duration" value={user.duration} onChange={e => setUser({ name: user.name, description: user.description, activitytype: user.activitytype, duration: e.target.value })} />
            </Form.Group>
            <Button onClick={onSubmit} variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        
    </div>
)
}

export default ActivityForm
