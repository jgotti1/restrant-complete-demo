const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div className="funny-container" >
                <img src="/images/funny-error-dog.jpg" alt="Funny Error Dog" className="funny-img" />
              </div>
              <div className="photo-by-container" >
                Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">charlesdeluvio</a> on <a href="https://unsplash.com/photos/adult-black-pug-pOUA8Xay514?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
              </div>
              <p className="oops-text">Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
