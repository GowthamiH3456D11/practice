import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";
import Album from "./Album";
import Comment from "./Comment";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
export default function App15() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Feeds</Link> <br />
        <Link to="/post">Post</Link> <br />
        <Link to="/album">Album</Link> <br/>
        <Link to="/comment">Comment</Link> <br />
        <Routes>
            <Route path="/" index element={<Feeds/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/album" element={<Album/>}></Route>
            <Route path="/comment" element={<Comment/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}