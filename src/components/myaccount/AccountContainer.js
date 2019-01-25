import React from 'react';
import AccountInnerContainer from './AccountInnerContainer';

const AccountContainer = (props) => {
  let courses = props.data.map((course) => {
    return <AccountInnerContainer title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   key={course.id} />
  });
  return (
    <div>
      <ul>
        {courses}
      </ul>
    </div>
  );
}

export default AccountContainer;
