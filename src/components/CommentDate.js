function formatDate(date) {
    return date.toLocaleDateString(); // 2022.04.20 TC 11:56:00
  }
  function CommentDate(props) {

    return <div className="Comment-date">{formatDate(props.date)}</div>;
  }
  export default CommentDate;
  