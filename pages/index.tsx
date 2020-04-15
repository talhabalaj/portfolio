/*
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  @media (max-width: 786px) {
    font-size: 13px;
  }
}

body {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
}

::selection {
  background: rgba($dark, .5);
  color: white;
}


*/

export default function IndexPage() {
    return (
        <section >
            <Profile />
            <Education />
        </section>
    );
}