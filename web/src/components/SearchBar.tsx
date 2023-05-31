'use client'

import { useState } from "react";
import styled from "styled-components";

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchQuery);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container
      type="text"
      value={searchQuery}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

const Container = styled.input`
  z-index: 1;
  margin-bottom: 10px;
`;