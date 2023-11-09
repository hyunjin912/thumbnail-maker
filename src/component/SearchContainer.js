import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { getImages } from "../api";

export default function SearchContainer() {
  console.log("SearchContainer");
  // const { page, search, data } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();

    const [inputEl] = e.target.children;
    const search = inputEl.value.trim();
    inputEl.blur();

    try {
      const result = await getImages(search);
      console.log("SC result - ", result);

      dispatch({
        type: "ADD_IMAGES",
        search: search,
        images: result.results,
      });

      navigate(`/?search=${search}`);
    } catch (e) {
      window.alert("예기치 못한 에러가 발생하여 메인 화면으로 이동됩니다.");
      navigate("/");
    }
  }, []);

  return <Search onSubmit={onSubmit} dispatch={dispatch} />;
}
