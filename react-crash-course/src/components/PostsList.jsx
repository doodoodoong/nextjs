import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Kim" body="React.js is awesome!" />
      <Post author="Yi" body="Check out the full course" />
    </ul>
  );
}
