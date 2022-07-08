import "./UsersComments.css";
export const UsersComments = ({ comments }) => {
  console.log(comments);
  return (
    <>
      {comments
        ? comments?.map((comment) => {
            return (
              <>
                <div className="users_comments">
                  <div className="users_comments_avatar">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBpbiUyMHJlZHxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
                  </div>
                  <div className="users_comments_name">
                    <p>{comment?.username}</p>
                  </div>
                  <div className="users_comments_text">
                    <p>{comment?.comments}</p>
                  </div>
                </div>
              </>
            );
          })
        : null}
    </>
  );
};
