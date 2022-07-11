import "./UsersComments.css";
export const UsersComments = ({ comments }) => {
  return (
    <>
      {comments ? (
        comments?.map((comment) => {
          return (
            <>
              <div className="users_comments">
                <div className="users_comments_avatar">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${comment?.avatar}`}
                  ></img>
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
      ) : (
        <p>This post doesn´t have any comment</p>
      )}
    </>
  );
};
