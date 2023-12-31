import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Serach({ onSubmit, setIsEmpty }) {
  const [input, setInput] = useState("");
  const { state: locationState } = useLocation();
  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onFocus = useCallback((e) => {
    if (e.target.value.legnth > 0) {
      setInput(e.target.value.trim());
    }
  }, []);

  useEffect(() => {
    setIsEmpty(false);

    if (locationState === null) {
      setInput("");
      dispatch({ type: "RESET_IMAGES" });
    } else {
      setInput(locationState.search);
      dispatch({
        type: "ADD_IMAGES",
        search: locationState.search,
        page: locationState.page,
        images: locationState.images,
        total_pages: locationState.total_pages,
      });
      if (locationState.total_pages <= 0) {
        setIsEmpty(true);
      }
    }
  }, [locationState]);

  return (
    <Wrap>
      <Form onSubmit={onSubmit}>
        <Input
          value={input}
          onChange={onChange}
          onFocus={onFocus}
          type="text"
          placeholder="Search & Enter"
        />
        <Button type="submit">Search</Button>
      </Form>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: sticky;
  top: 0;
  height: 40px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 20px;
  margin-bottom: 20px;
  z-index: 1;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  height: 100%;
`;

const Input = styled.input`
  flex: 1 1 auto;
  background: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  flex: 0 1 150px;
  background: #fdc000;
  color: #000;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  font-weight: bold;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: #f86a05;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export default Serach;
