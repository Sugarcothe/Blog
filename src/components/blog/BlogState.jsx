import React, { Component } from 'react';
import Blog from '../Blog'

class BlogState extends Component {
  state = {
    BlogState: [
      {
        id: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem nesciunt iure blanditiis nihil, debitis beatae fugiat labore maiores officiis repellat iste amet ullam. Reprehenderit sapiente accusantium aperiam impedit fugiat!'
      },
      {
        id: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem nesciunt iure blanditiis nihil, debitis beatae fugiat labore maiores officiis repellat iste amet ullam. Reprehenderit sapiente accusantium aperiam impedit fugiat!'
      },
      {
        id: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem nesciunt iure blanditiis nihil, debitis beatae fugiat labore maiores officiis repellat iste amet ullam. Reprehenderit sapiente accusantium aperiam impedit fugiat!'
      },
      {
        id: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem nesciunt iure blanditiis nihil, debitis beatae fugiat labore maiores officiis repellat iste amet ullam. Reprehenderit sapiente accusantium aperiam impedit fugiat!'
      },
    ]
  }

  render() {
    return (
      <div>
        {this.state.blogState.map(b => (
          <Blog key={b.id} b={blog}/>
        ))}
      </div>
    )
  }
}

export default BlogState
