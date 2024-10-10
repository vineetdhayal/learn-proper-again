import React from 'react';

const AuthorDetails = ({ authors }) => {
    console.log('AUthor Details');
  return (
    <div>
      {authors.map((author) => (
        <div key={author.id}>
          <p>{author.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AuthorDetails;
