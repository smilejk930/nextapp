import "./globals.css";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by smilejk930",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>
          <a href="/">WEB</a>{" "}
        </h1>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">html</a>
          </li>
        </ol>
        {children}
        <ol>
          <ul>
            <li>
              <a href="/creat">Create</a>
            </li>
            <li>
              <a href="/update/1">Update</a>
            </li>
            <li>
              <input type="button" value="delete" />
            </li>
          </ul>
        </ol>
      </body>
    </html>
  );
}
