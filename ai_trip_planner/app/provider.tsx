import React from 'react'
import Header from './_components/Header';

function Provider ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const CreateNewUser = () => {
    //
  }

  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Provider