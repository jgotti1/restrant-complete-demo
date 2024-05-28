const React = require('react')

const Def = require('./default')

function home(){
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/drink flight image.jpg" alt="Flight of Drinks" className="home-image" />
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@kobbymendez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kobby Mendez</a> on <a href="https://unsplash.com/photos/three-clear-glass-cups-with-juice-xBFTjrMIC0c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home