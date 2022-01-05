import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  searchFailuret,
  searchRequest,
  searchSuccess
} from "../redux/app/action";
import ActionAreaCard from "./UserCard";
function Home() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { list, isLoading, isError } = useSelector((state) => state.app);

  const Pagination = ({ total, current, callback }) => {
    const pages = new Array(total).fill(0).map((_, i) => {
      if (current === i + 1) {
        return (
          <Button key={i} diabled variant="contained">
            {i + 1}
          </Button>
        );
      } else {
        return (
          <Button onClick={() => callback(i + 1)} key={i} variant="contained">
            {i + 1}
          </Button>
        );
      }
    });

    return pages;
  };
  const [page, setPage] = useState(1);
  //const history=useHistory()
  const handleSearch = () => {
    //  history.push("/search")

    dispatch(searchRequest());
    return axios
      .get("https://api.github.com/search/repositories", {
        params: {
          q: query,
          page: 1,
          per_page: 5
        }
      })
      .then((res) => {
        console.log(res.data.items);
        dispatch(searchSuccess(res.data.items));
        console.log(list);
      })
      .catch((err) => {
        dispatch(searchFailuret(err));
      });
  };
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  if (isError) {
    return <div>Opps! Something went wrong</div>;
  }
  if (isLoading) {
    return <div>...loading</div>;
  }
  const handlePagination = (page) => {
    setPage(page);
  };
  return (
    <div>
      <TextField
        onChange={(e) => setQuery(e.target.value)}
        id="filled-basic"
        label="Search"
        size="small"
        variant="filled"
      />
      <Button
        onClick={handleSearch}
        sx={{ marginLeft: "20px", marginTop: "4px", marginBottom: "10px" }}
        variant="contained"
      >
        Search
      </Button>
      <div>
        <Pagination callback={handlePagination} total={5} current={page} />
      </div>
      <Grid sx={{ marginTop: "10px" }} container spacing={2}>
        {list?.map((item) => {
          return (
            <Grid item key={item.id} sm="12" md="6" lg="4" xl="3">
              <ActionAreaCard data={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default Home;
