import MainScreen from "../../components/MainScreen";
import { Link, useHistory } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/noteActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  // delete
  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    successCreate,
    history,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  // for learing
  // const fetchNotes = async () => {
  //   /*const data  = await axios.get("/api/notes");*/
  //   //{data} take out data from data
  //   const { data } = await axios.get("/api/notes");
  //   // console.log(data);
  //   setnotes(data);
  // };
  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loadingDelete && <Loading />}
      {notes
        ?.reverse()
        .filter((filteredNote) =>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
          <Accordion defaultActiveKey="0" key={note._id}>
            <Accordion.Item>
              <Card style={{ margin: 10 }}>
                <CardHeader style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      fontSize: 18,
                      alignSelf: "center",
                    }}>
                    <Accordion.Button as={Card.Text} eventkey="0">
                      {note.title}
                    </Accordion.Button>
                  </span>
                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      ClassName="mx-2"
                      onClick={() => deleteHandler(note._id)}>
                      Delete
                    </Button>
                  </div>
                </CardHeader>
                <Accordion.Collapse eventkey="0">
                  <Card.Body>
                    <h4>
                      <Badge bg="success" style={{ color: "white" }}>
                        Category-{note.category}
                      </Badge>
                    </h4>
                    <blockquote ClassName="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer ClassName="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default MyNotes;
