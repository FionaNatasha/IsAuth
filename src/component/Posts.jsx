import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import css from './module/Posts.module.css'

let Posts = (props) => {


  let loadFunc = (n) => { 
    props.thunkActionCreator(n)
  }



  let post = props.state.Posts.map((post) => {
    return (<div className={css.Post} key={post.id}>
      <h3>{post.id}</h3>
      <div className={css.Title}>{post.title}</div>
      <div className={css.Body}>{post.body}</div></div>)
  })

  return (
    <div className={css.Posts}>
      <h2>Posts</h2>
      <InfiniteScroll
        pageStart={0}
        loadMore={(l)=>loadFunc(l)}
        hasMore={true}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={true}>
        <div key={this}>

          {post}
          
        </div>
      </InfiniteScroll>
    </div>
  );
}


export default Posts

