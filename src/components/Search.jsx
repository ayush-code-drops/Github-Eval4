// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { searchFailuret, searchRequest, searchSuccess } from "../redux/app/action";

function Search() {
  //   const dispatch = useDispatch();
  //   const history=useHistory()
  //   const handleSearch = () => {
  //     history.push("/search")
  //     dispatch(searchRequest());
  //     return axios
  //       .get("https://api.github.com/search/repositories", {
  //         params: {
  //           q: query,
  //           page: 1,
  //           per_page: 5
  //         }
  //       })
  //       .then((res) => {
  //         dispatch(searchSuccess(res.data.items));
  //         console.log(res.data.items);
  //       })
  //       .catch(
  //         (err)=>{
  // dispatch(searchFailuret(err))
  //         }
  //       );
  //   };
  return <div>SearchPage</div>;
}
export default Search;
