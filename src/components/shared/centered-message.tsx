import React from 'react';

const CenteredMessage = ({ message }: { message: string }) => (
  <div className="h-screen flex justify-center items-center text-primaryCopy">
    <h1>{message}</h1>
  </div>
);

export default CenteredMessage;