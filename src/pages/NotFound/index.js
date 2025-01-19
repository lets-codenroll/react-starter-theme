import "./style.scss"; // Importing styles for the NotFound page

const NotFound = () => (
  <div className="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p>
      <a href="/">Go back to the homepage</a>.
    </p>
  </div>
);

export default NotFound;
