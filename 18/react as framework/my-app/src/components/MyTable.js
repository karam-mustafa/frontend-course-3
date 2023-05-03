import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import style from './style.module.css';

function MyTable({ header, body, onDelete }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {header.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {body.map((item, index) => {
          return (
            <tr>
              <td className={style.index}>{index}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.userName}</td>
              <td>
                <button
                  onClick={(event) => onDelete(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default MyTable;
