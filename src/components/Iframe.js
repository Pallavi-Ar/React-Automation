import '../css/iframe.css';

export default function Iframe() {
    return (
        <div>
      <h1>Nested Iframes</h1>
      <p>Outer iframe</p>
      <iframe
        title="Outer IFrame"
        srcDoc={`
          <html>
            <head>
              <style>
                p {
                    color:white;
                }
              </style>
            </head>
            <body>
              <p>Nested Iframe</p>
              <iframe
                title="Nested Inner IFrame"
              ></iframe>
            </body>
          </html>
        `}
        width="400"
        height="300"
        frameBorder="1"
      ></iframe>
    </div>
    );
}