// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addComment, fetchComment } from "../action/action";
// const CommentBox = () => {
//   const [comment, setComment] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(addComment(comment));
//     setComment("");
//   };

//   const fetchComments = () => {
//     console.log("hit");

//     dispatch(fetchComment());
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h4>Enter Comment</h4>
//         <textarea
//           value={comment}
//           onChange={event => setComment(event.target.value)}
//         />
//         <div>
//           <button>Add Comment </button>
//         </div>
//       </form>
//       <div>
//         <button className="fetchComment" onClick={fetchComments}>
//           Fetch Comment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CommentBox;

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../action/action";
class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: "" });
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Enter Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Add Comment </button>
          </div>
        </form>
        <div>
          <button className="fetchComment" onClick={this.props.fetchComment}>
            Fetch Comment
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
