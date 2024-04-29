import { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import Post from "./Post";
import { API } from "../../../service/api";

const Posts = () => {
  const [posts, getPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=3b7b604d05cd423ca4b152aa6341650e&pageSize=10`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.articles);
      const formattedData = data.articles
        .filter(
          (d) =>
            d.urlToImage &&
            (d.author || d.source?.name) &&
            d.title &&
            d.description &&
            d.publishedAt
        )
        .map((d) => {
          return {
            picture: d.urlToImage,
            username: d.source.name,
            title: d.title,
            description: d.description,
            categories: "",
            _id: d.publishedAt,
            url: d.url, // Add the URL of the news article
            isNews: true, // Flag to identify news articles
          };
        });
      getPosts(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        getPosts(response.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      <form onSubmit={handleSubmit} className="search-container" style={{ marginTop: '21px' }}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
          style={{ height: '32px', borderRadius: '5px', gap: '8px', marginRight: '8px', marginLeft: '8px' }}
        />
        <button type="submit" className="search-button" style={{ height: '36px', gap: '8px', borderRadius: '5px', color: 'white', border: 'none', backgroundColor: '#2294ed',cursor: 'pointer' }}>
          Search
        </button>
      </form>


      {posts?.length ? (
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item lg={3} sm={4} xs={12} key={post._id}>
              {post.isNews ? (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Post post={post} />
                </a>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`details/${post._id}`}
                >
                  <Post post={post} />
                </Link>
              )}
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for selected category
        </Box>
      )}
    </>
  );
};

export default Posts;
