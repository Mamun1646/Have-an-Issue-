import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const Posts = ({ posts }) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Country</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.country}</td>
            <td>{user.Description}</td>
            <td>
              <Button className="action__btn" variant="success">
                Read
              </Button>

              <Button className="action__btn" variant="info">
                Edit
              </Button>

              <Button className="action__btn" variant="danger">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Posts;
