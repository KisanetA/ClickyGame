import React from "react";

function clickyGame() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/"> Clicky Game</a>
                    </li>
                    <li > Click an Image to Begin!</li>
                    <li> "Score: " "0" "| Top Score : " "0"</li>
                </ul>
            </nav>
        <header className="header">
            <h1> Clicky Game!</h1>
        </header>
        <main className="container">
          <div role="img" arial-label="click item" className="click-item" style="background-image:url('./images/pic.jpg');"></div>  
        </main>
    </div>
    );
}

export default clickyGame;
