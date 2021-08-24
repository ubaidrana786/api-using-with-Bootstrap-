import React from "react";

export default function Footer() {
 
  return (
    <div>
      <footer class="container-fluid bg-light bg-dark">
        <hr style={{ width: "50%", border: "1px solid black" }} />
        <h4 class="pt-2 pb-3  text-center" style={{ color: "white" }}>
          Powered By
          <a href="https://abixion.com/" style={{ color: "white" }}>
            {" "}
            Abixion
          </a>
        </h4>
      </footer>
    </div>
  );
}
