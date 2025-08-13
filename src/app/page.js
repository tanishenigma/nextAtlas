"use client";
import { useState } from "react";
import { Countries } from "@/components/Countries";
import Header from "@/components/Header";
import SearchRegion from "@/components/SearchRegion";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="pt-20">
      <Header />
      <SearchRegion setRegion={setRegion} setSearch={setSearch} />
      <Countries region={region} search={search} />
    </div>
  );
}

export default App;
