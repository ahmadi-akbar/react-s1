import React from "react";
import UserRow from "../../components/UserRow";

function ApiScreen() {
  const [state, setState] = React.useState({
    loading: true,
    DATA: [],
    page: 1,
  });

  // run every time state.page change
  React.useEffect(() => {
    setState({ ...state, loading: true });
    console.log("getting user page => ", state.page);

    fetch("https://reqres.in/api/users?page=" + state.page)
      .then((res) => res.json())
      .then((json) => {
        setState({ ...state, loading: false, DATA: json.data });
      });
  }, [state.page]);

  return (
    <div>
      <div>
        <button onClick={() => setState({ ...state, page: state.page + 1 })}>
          next
        </button>
        <button onClick={() => setState({ ...state, page: state.page - 1 })}>
          prev
        </button>
      </div>
      {state.loading ? (
        <div>loading...</div>
      ) : (
        state.DATA.map((i, index) => <UserRow user={i} key={index} />)
      )}
    </div>
  );
}
export default ApiScreen;
