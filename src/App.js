import { Suspense } from 'react';
import { fetch } from 'react-fetch';

function UserSkeleton() {
  return (
    <div className="user-skeleton" />
  );
};

function User() {
  const endpoint = "https://jsonplaceholder.typicode.com/users/1";
  const user = fetch(endpoint).json();

  return (
    <p className="user-text">
      {user.name}{" "}<b>@{user.username}</b>
    </p>
  );  
};

function PostSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__title" />
      <div className="skeleton__text" />
      <div className="skeleton__text" />
      <div className="skeleton__text" />
    </div>
  );
}

function Posts() {
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const posts = fetch(endpoint).json();

  return (
    <div>
      {
        posts.map(post => (
          <div className='post' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  );  
}

function App() {
  return (
    <div>
      <Suspense fallback={<UserSkeleton />}>
        <User />
      </Suspense>
      <div className='container'>
        <Suspense fallback={(<div>
          <PostSkeleton /><PostSkeleton />
          <PostSkeleton /><PostSkeleton />
          <PostSkeleton /><PostSkeleton />
          <PostSkeleton /><PostSkeleton />
          <PostSkeleton /><PostSkeleton />
        </div>)}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
