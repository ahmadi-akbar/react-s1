import React from "react";

function UserRow({ user }) {
  const { email, id, first_name, last_name } = user;
  return (
    <div>
      <span>{`${id} => ${first_name} ${last_name} === ${email}`}</span>
    </div>
  );
}
export default UserRow;
